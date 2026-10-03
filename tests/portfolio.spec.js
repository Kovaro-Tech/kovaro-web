import { test, expect } from '@playwright/test'

// The static preview does not serve Vercel's production telemetry endpoints.
test.beforeEach(async ({ context }) => {
  await context.route('**/_vercel/**', route => route.fulfill({ status: 200, contentType: 'application/javascript', body: '' }))
})

const projects = [
  ['protecompu', 'Protecompu', 'Protecompu'],
  ['expoaseo', 'EXPOASEO', 'EXPOASEO', 'https://expoaseo.com'],
  ['carolina-alvarez', 'Carolina Álvarez', 'Carolina Álvarez', 'https://carolinaalvareze.com'],
  ['david-celi', 'David Celi', 'David Celi Lupera'],
  ['carla-alvarez', 'Carla Álvarez', 'Carla Álvarez Manrique'],
]

for (const width of [360, 390, 768, 1024, 1440, 2560]) {
  test(`Showcase selection, frames and cases at ${width}px`, async ({ page }) => {
    const errors = []
    page.on('pageerror', e => errors.push(e.message))
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()) })
    page.on('response', r => { if (r.url().includes('/assets/') && r.status() >= 400) errors.push(r.url()) })
    // Keep the section inside the viewport: Chromium's captureBeyondViewport
    // temporarily resizes the surface and can re-snap horizontal tracks.
    await page.setViewportSize({ width, height: 1600 })
    await page.goto('/#portafolio')
    const section = page.locator('#portafolio')
    await section.locator('.pista-snap').scrollIntoViewIfNeeded()
    await expect(section.locator('ul button')).toHaveCount(projects.length)
    const initialHeight = await section.locator('.pista-snap').evaluate(el => el.clientHeight)

    for (const [id, shortName, name, url] of projects) {
      const selector = section.getByRole('button', { name: new RegExp(shortName) })
      await selector.click()
      await expect(selector).toHaveAttribute('aria-current', 'true')
      await expect(section.getByRole('heading', { name, exact: true })).toBeVisible()
      const slide = section.locator(`#proyecto-${id}`)
      await expect(slide).toHaveAttribute('aria-hidden', 'false')
      await expect.poll(() => slide.locator('img').first().evaluate(img => img.complete && img.naturalWidth > 0)).toBe(true)
      await expect.poll(() => section.locator('.pista-snap').evaluate(el => {
        const active = el.querySelector('[aria-hidden="false"]')
        return Math.abs(el.scrollLeft - (active.offsetLeft - el.offsetLeft))
      })).toBeLessThan(2)
      expect(await section.locator('.pista-snap').evaluate(el => el.clientHeight)).toBe(initialHeight)
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
      if (url) {
        await expect(section.getByRole('link', { name: 'Ver proyecto' })).toHaveAttribute('href', url)
        await expect(section.getByRole('link', { name: 'Ver proyecto' })).toHaveAttribute('rel', 'noopener noreferrer')
      }
      await section.getByRole('button', { name: 'Ver el caso', exact: true }).click()
      await expect(section.locator('#detalle-caso dd')).toHaveCount(4)
      await expect(section.locator('#detalle-caso')).toBeVisible()
      await section.getByRole('button', { name: 'Ocultar caso' }).click()
      await expect(section.locator('#detalle-caso')).toHaveCount(0)
      await section.screenshot({ path: `test-results/portfolio-${id}-${width}.png` })
      await expect(selector).toHaveAttribute('aria-current', 'true')
    }

    // Rapid navigation must finish on the last requested slide.
    await section.locator('ul button').evaluateAll(buttons => {
      for (const index of [0, 4, 1, 3, 2]) buttons[index].click()
    })
    await expect(section.getByRole('heading', { name: 'Carolina Álvarez', exact: true })).toBeVisible()
    await expect.poll(() => section.locator('.pista-snap').evaluate(el => Math.abs(el.scrollLeft - (el.children[2].offsetLeft - el.offsetLeft)))).toBeLessThan(2)
    await section.locator('ul button').first().focus()
    await page.keyboard.press('Enter')
    await expect(section.getByRole('heading', { name: 'Protecompu', exact: true })).toBeVisible()
    await page.keyboard.press('Tab')
    await expect(section.locator('ul button').nth(1)).toBeFocused()
    expect(await section.locator('ul button').nth(1).evaluate(el => getComputedStyle(el).outlineStyle)).toBe('solid')
    await page.keyboard.press('Space')
    await expect(section.getByRole('heading', { name: 'EXPOASEO', exact: true })).toBeVisible()
    expect(errors).toEqual([])
  })
}

test('Only visited screenshots are requested; reduced motion remains usable', async ({ page }) => {
  const screenshots = []
  page.on('request', r => { if (/\/assets\/.*_(desktop|mobile).*\.webp/.test(r.url())) screenshots.push(r.url()) })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/#portafolio')
  const section = page.locator('#portafolio')
  await section.locator('.pista-snap').scrollIntoViewIfNeeded()
  await expect(section.locator('img')).toHaveCount(2)
  expect(screenshots.every(url => url.includes('protecompu'))).toBe(true)
  await section.getByRole('button', { name: /Carolina Álvarez/ }).click()
  await expect(section.getByRole('heading', { name: 'Carolina Álvarez', exact: true })).toBeVisible()
  await expect.poll(() => section.locator('.pista-snap').evaluate(el => Math.abs(el.scrollLeft - (el.children[2].offsetLeft - el.offsetLeft)))).toBeLessThan(2)
  expect(screenshots.every(url => /protecompu|carolina_alvarez/.test(url))).toBe(true)
})

test('Native touch swipe updates selection in both directions', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 900 }, isMobile: true, hasTouch: true })
  await context.route('**/_vercel/**', route => route.fulfill({ status: 200, contentType: 'application/javascript', body: '' }))
  const page = await context.newPage()
  await page.goto('/#portafolio')
  const section = page.locator('#portafolio')
  const track = section.locator('.pista-snap')
  const session = await context.newCDPSession(page)
  const swipe = async (direction) => {
    await track.scrollIntoViewIfNeeded()
    const box = await track.boundingBox()
    const y = box.y + box.height / 2
    const from = box.x + box.width * (direction === 'next' ? 0.9 : 0.1)
    const to = box.x + box.width * (direction === 'next' ? 0.1 : 0.9)
    await session.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: from, y }] })
    for (let i = 1; i <= 12; i++) {
      await session.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: from + (to - from) * i / 12, y }] })
      await page.waitForTimeout(25)
    }
    await session.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] })
  }
  await swipe('next')
  await expect(section.getByRole('button', { name: /EXPOASEO/ })).toHaveAttribute('aria-current', 'true')
  await expect(section.getByRole('heading', { name: 'EXPOASEO' })).toBeVisible()
  await swipe('next')
  await expect(section.getByRole('button', { name: /Carolina Álvarez/ })).toHaveAttribute('aria-current', 'true')
  await swipe('previous')
  await expect(section.getByRole('button', { name: /EXPOASEO/ })).toHaveAttribute('aria-current', 'true')
  await context.close()
})
