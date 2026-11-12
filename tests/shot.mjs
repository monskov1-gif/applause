// Dev-скриншоты: node tests/shot.mjs <name> "<js to eval in page after start>" [wait ms]
import { createRequire } from 'module'; const { chromium } = createRequire('/')('/opt/node-tools/node_modules/playwright');
const [name = 'shot', code = '', wait = '1500', fresh = '1'] = process.argv.slice(2);
const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
p.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') console.log('[' + m.type() + ']', m.text().slice(0, 300)); });
p.on('pageerror', (e) => console.log('[pageerror]', e.message));
await p.goto((process.env.BASE || 'http://localhost:5173/') + '?debug=1'); await p.waitForSelector('#boot.ready', { timeout: 30000 }); await p.mouse.click(5, 5); await p.waitForSelector('.menu-screen', { timeout: 20000 }); await p.waitForTimeout(800);
if (name.endsWith('menu')) { await p.waitForTimeout(+wait); await p.screenshot({ path: `tests/shots/${name}.png` }); await b.close(); process.exit(0); }
await p.evaluate(async (code) => { const G = window.__G; document.querySelector('.menu-screen')?.remove(); const st = { v: 3, room: 'hub_dressing', spot: 'start', chapter: 'test', f: { woke: 1 }, inv: [], notes: [], photos: [], seen: {}, mask: null, time: 0 }; window.__st = st; G.fast = true; await new Function('G', 'st', 'return (async()=>{' + code + '})()')(G, st); G.fast = false; }, code);
await p.waitForTimeout(+wait); await p.screenshot({ path: `tests/shots/${name}.png` }); await b.close();
