import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { resolve, extname, sep } from 'node:path'
import { gzipSync } from 'node:zlib'

const root = resolve('dist')
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.xml': 'application/xml', '.txt': 'text/plain', '.webmanifest': 'application/manifest+json', '.png': 'image/png', '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff2': 'font/woff2' }
createServer(async (req, res) => {
  try {
    let path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname)
    if (path !== '/' && (path.endsWith('/') || path.endsWith('.html'))) {
      res.writeHead(308, { Location: path.replace(/\.html$|\/$/g, '') || '/' }); res.end(); return
    }
    let file = resolve(root, '.' + (path === '/' ? '/index.html' : path))
    if (!file.startsWith(root + sep)) { res.writeHead(403); res.end(); return }
    if (!extname(file)) file += '.html'
    let status = 200
    try { if (!(await stat(file)).isFile()) throw new Error('Not a file') }
    catch { file = resolve(root, '404.html'); status = 404 }
    const headers = { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' }
    let data = await readFile(file)
    if (/gzip/.test(req.headers['accept-encoding'] ?? '') && /\.(html|js|css|xml|txt|webmanifest)$/.test(file)) {
      data = gzipSync(data)
      headers['Content-Encoding'] = 'gzip'
      headers.Vary = 'Accept-Encoding'
    }
    res.writeHead(status, headers)
    res.end(data)
  } catch { res.writeHead(400); res.end() }
}).listen(4173, '127.0.0.1', () => console.log('Static preview: http://127.0.0.1:4173'))
