import { build } from 'vite'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname } from 'node:path'
import { pages, notFound, renderHead, ORIGIN } from '../src/lib/seo.js'

await build()
await build({ build: { ssr: 'src/entry-server.jsx', outDir: 'dist-ssr', rollupOptions: { output: { manualChunks: undefined } } } })
const { render } = await import('../dist-ssr/entry-server.js')
const template = await readFile('dist/index.html', 'utf8')
for (const page of [...pages, notFound]) {
  const html = template.replace('<!--seo-head-->', renderHead(page)).replace('<!--app-html-->', render(page.path))
  const file = page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`
  await mkdir(dirname(`dist/${file}`), { recursive: true })
  await writeFile(`dist/${file}`, html)
}
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.filter(page => !page.noindex).map(page => `  <url><loc>${ORIGIN}${page.path}</loc></url>`).join('\n')}\n</urlset>\n`)
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`)
console.log(`Generated ${pages.length} indexable pages and a 404 document.`)
