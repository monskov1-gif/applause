import { createRequire } from 'module'; const { chromium } = createRequire('/')('/opt/node-tools/node_modules/playwright');
const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] }); const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
await p.goto('http://localhost:5173/?debug=1'); await p.waitForSelector('#boot.ready', { timeout: 30000 }); await p.mouse.click(5, 5); await p.waitForSelector('.menu-screen', { timeout: 30000 });
await p.evaluate(() => { const s = window.__G.menuScene; s.input('skip'); document.querySelector('.menu-screen').style.display = 'none'; window.__G.R.bokeh && (window.__G.R.bokeh.enabled = false); }); await p.waitForTimeout(1500);
const N = 12, shots = [];
for (let i = 0; i < N; i++) { await p.evaluate((th) => { const s = window.__G.menuScene; s.spinning = false; s.theta = th; }, i / N * Math.PI * 2); await p.waitForTimeout(700); shots.push(`tests/shots/fig_${i}.png`); await p.screenshot({ path: shots[i], clip: { x: 660, y: 100, width: 300, height: 420 } }); }
await b.close();
