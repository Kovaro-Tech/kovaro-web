import lighthouse from 'lighthouse'
import { launch } from 'chrome-launcher'
import { mkdir, writeFile } from 'node:fs/promises'
import { pages } from '../src/lib/seo.js'

await mkdir('reports', { recursive: true })
const chrome = await launch({ chromeFlags: ['--headless'] })
try {
  for (const page of pages) {
    const { lhr, report } = await lighthouse(`http://127.0.0.1:4173${page.path}`, { port: chrome.port, output: 'json', onlyCategories: page.path === '/' ? ['performance', 'seo', 'accessibility', 'best-practices'] : ['seo'] })
    await writeFile(`reports/lighthouse-${page.path.slice(1) || 'home'}.json`, report)
    console.log(page.path, Object.fromEntries(Object.entries(lhr.categories).map(([key, value]) => [key, value.score])))
  }
} finally { await chrome.kill() }
