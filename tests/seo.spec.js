import { test, expect } from '@playwright/test'
import { pages, ORIGIN } from '../src/lib/seo.js'

for (const entry of pages) {
  test(`Static content and metadata: ${entry.path}`, async ({ browser, request }) => {
    const response = await request.get(entry.path)
    expect(response.status()).toBe(200)
    const context = await browser.newContext({ javaScriptEnabled: false })
    const page = await context.newPage()
    await page.goto(`http://127.0.0.1:4173${entry.path}`)
    await expect(page).toHaveTitle(entry.title)
    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('link[rel=canonical]')).toHaveAttribute('href', ORIGIN + entry.path)
    await expect(page.locator('meta[name=description]')).toHaveCount(1)
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', `${ORIGIN}/og/kovaro.png`)
    const schema = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent())
    expect(schema['@graph'].map(item => item['@type'])).toEqual(entry.path === '/' ? ['Organization', 'WebSite', 'WebPage'] : ['Organization', 'WebSite', 'WebPage', 'BreadcrumbList'])
    expect(await page.locator('img:not([alt])').count()).toBe(0)
    const headings = await page.locator('h1,h2,h3,h4,h5,h6').evaluateAll(nodes => nodes.map(n => Number(n.tagName[1])))
    for (let i = 1; i < headings.length; i++) expect(headings[i] - headings[i - 1]).toBeLessThanOrEqual(1)
    const links = await page.locator('a').evaluateAll(nodes => nodes.map(n => n.getAttribute('href')))
    for (const href of new Set(links.filter(href => href?.startsWith('/') || href?.startsWith('#')))) {
      const url = new URL(href, page.url())
      const linked = await request.get(url.pathname)
      expect(linked.status(), href).toBe(200)
      if (url.hash) expect(await linked.text(), href).toContain(`id="${url.hash.slice(1)}"`)
    }
    await context.close()
  })
}

test('Crawling files, unknown routes and assets', async ({ request }) => {
  const sitemap = await (await request.get('/sitemap.xml')).text()
  for (const page of pages) expect(sitemap).toContain(`<loc>${ORIGIN}${page.path}</loc>`)
  expect(sitemap).not.toContain('/404')
  expect(await (await request.get('/robots.txt')).text()).toContain(`Sitemap: ${ORIGIN}/sitemap.xml`)
  for (const path of ['/missing-page', '/servicios/desarrollo-web', '/insights', '/assets/missing.png']) {
    const response = await request.get(path)
    expect(response.status()).toBe(404)
    expect(await response.text()).toContain('noindex, follow')
  }
  for (const path of ['/og/kovaro.png', '/favicon/favicon.ico', '/favicon/apple-touch-icon.png', '/fonts/inter-tight-latin.woff2']) expect((await request.get(path)).status()).toBe(200)
})

for (const width of [390, 1440]) {
  test(`Hydration, navigation and responsive layout ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    page.on('console', message => { if (message.type() === 'error' && /hydration|react|mismatch/i.test(message.text())) errors.push(message.text()) })
    for (const entry of [...pages, { path: '/missing-page' }]) {
      await page.goto(entry.path)
      await page.evaluate(() => document.fonts.ready)
      await expect(page.locator('h1')).toBeVisible()
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
      await page.screenshot({ path: `test-results/${entry.path.replaceAll('/', '') || 'home'}-${width}.png`, fullPage: true })
    }
    await page.goto('/privacidad')
    await page.getByRole('link', { name: 'Servicios', exact: true }).last().click()
    await expect(page).toHaveURL(/\/#servicios$/)
    await page.getByRole('button', { name: 'Ver todas las capacidades' }).click()
    await expect(page.getByRole('button', { name: 'Ver menos' })).toBeVisible()
    if (width < 1000) {
      await page.getByRole('button', { name: 'Abrir menú' }).click()
      await page.locator('#menu-movil').getByRole('link', { name: /Trabajo/ }).click()
      await expect(page).toHaveURL(/\/#portafolio$/)
    }
    expect(errors).toEqual([])
    expect(await page.context().cookies()).toEqual([])
  })
}

test('Reduced motion keeps prerendered content accessible', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  const errors = []
  page.on('console', message => { if (/hydration|mismatch/i.test(message.text())) errors.push(message.text()) })
  page.on('pageerror', error => errors.push(error.message))
  await page.goto('/')
  await expect(page.locator('h1')).toBeVisible()
  await page.getByRole('button', { name: 'Ver todas las capacidades' }).click()
  expect(errors).toEqual([])
})
