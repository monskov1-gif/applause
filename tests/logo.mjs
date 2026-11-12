import { createRequire } from 'module'; const { chromium } = createRequire('/')('/opt/node-tools/node_modules/playwright');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1400, height: 900 }, deviceScaleFactor: 1 });
await p.goto('http://localhost:5173/?debug=1'); await p.waitForSelector('#boot.ready', { timeout: 30000 }); await p.mouse.click(5, 5); await p.waitForSelector('.menu-screen', { timeout: 20000 });
await p.evaluate(() => { const s = document.querySelector('.logo-svg'); document.body.innerHTML = ''; document.body.style.cssText = 'background:#0d0809;overflow:auto'; s.style.cssText = 'width:1400px;height:auto;display:block'; document.body.appendChild(s); });
await p.waitForTimeout(2800); await p.screenshot({ path: process.argv[2] || 'tests/shots/logo.png' }); await b.close();
