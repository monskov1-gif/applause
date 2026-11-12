import { createRequire } from 'module'; const { chromium } = createRequire('/')('/opt/node-tools/node_modules/playwright');
const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] }); const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
p.on('pageerror', (e) => console.log('pageerror', e.message)); p.on('console', (m) => { if (m.type() === 'error') console.log('err', m.text().slice(0, 200)); });
await p.goto((process.env.BASE || 'http://localhost:5173/') + '?debug=1'); await p.waitForSelector('.menu-screen', { timeout: 30000 });
const times = (process.argv[2] || '1.8,3.6,4.6,7,8.2,9.5,12,16').split(',').map(Number); let t0 = Date.now();
for (const t of times) { const w = t * 1000 - (Date.now() - t0); if (w > 0) await p.waitForTimeout(w); await p.screenshot({ path: `tests/shots/intro_${t}.png` }); }
await b.close();
