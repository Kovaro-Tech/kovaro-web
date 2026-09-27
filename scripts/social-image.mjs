import { chromium } from '@playwright/test'
import { readFile, mkdir } from 'node:fs/promises'

// Code-native brand card: typography, existing logo and the site's grid.
const font = (await readFile('public/fonts/inter-tight-latin.woff2')).toString('base64')
const mono = (await readFile('public/fonts/jetbrains-mono-latin.woff2')).toString('base64')
const logo = (await readFile('src/assets/images/logos/logo.webp')).toString('base64')
const browser = await chromium.launch({ channel: 'chrome', headless: true })
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })
await page.setContent(`<style>
@font-face{font-family:Inter;src:url(data:font/woff2;base64,${font})} @font-face{font-family:Mono;src:url(data:font/woff2;base64,${mono})}
*{box-sizing:border-box}body{margin:0;background:#060607;color:#f2f2f4;font-family:Inter}
main{height:630px;padding:64px 76px;background:radial-gradient(ellipse at 85% 30%,#7c5cff28,transparent 58%);position:relative}
main:before{content:'';position:absolute;inset:0;background-image:radial-gradient(#ffffff20 1px,transparent 1px);background-size:30px 30px;z-index:-1}
header{display:flex;align-items:center;justify-content:space-between;font:18px Mono;letter-spacing:3px;color:#9a9aa4}img{width:48px;height:48px;object-fit:contain}
h1{font-size:150px;font-weight:500;letter-spacing:-7px;margin:70px 0 12px;line-height:1}p{font-size:29px;color:#b5b5bf;margin:0}
footer{border-top:1px solid #303038;margin-top:68px;padding-top:25px;display:flex;justify-content:space-between;font:16px Mono;color:#9a9aa4}b{color:#a38cff;font-weight:400}
</style><main><header><img src="data:image/webp;base64,${logo}"><span>KOVARO TECH / ECUADOR</span></header><h1>KOVARO</h1><p>Technology · Design · Growth</p><footer><span>DESARROLLO · ESTRATEGIA · CRECIMIENTO</span><b>kovarotech.com ↗</b></footer></main>`)
await page.evaluate(() => document.fonts.ready)
await mkdir('public/og', { recursive: true })
await page.screenshot({ path: 'public/og/kovaro.png' })
await browser.close()
