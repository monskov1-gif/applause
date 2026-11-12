import { createRequire } from 'module'; const { chromium } = createRequire('/')('/opt/node-tools/node_modules/playwright');
const ids = process.argv[2].split(',');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 520 } });
await p.goto('http://localhost:5173/?debug=1'); await p.waitForSelector('#boot.ready', { timeout: 30000 }); await p.mouse.click(5, 5); await p.waitForSelector('.menu-screen', { timeout: 20000 });
await p.evaluate(async (ids) => { window.__big = false;
  const { portrait } = await import('/@fs/home/user/applause/src/gfx/portraits.ts'); const { charSheet, FW, FH } = await import('/@fs/home/user/applause/src/gfx/sprites.ts'); const { CHARS } = await import('/@fs/home/user/applause/src/data/chars.ts');
  document.body.innerHTML = ''; document.body.style.cssText = 'background:#2a2228;display:flex;gap:16px;padding:10px;font:14px sans-serif;color:#fff';
  for (const id of ids) { const d = document.createElement('div'); d.innerHTML = `<div>${id} (${CHARS[id].name})</div>`; const img = new Image(); img.src = portrait(id, 'smile'); img.style.width = '150px'; d.appendChild(img); const sh = charSheet(id); const c = document.createElement('canvas'); c.width = FW * 3; c.height = FH; c.getContext('2d').drawImage(sh, 0, 0, FW, FH, 0, 0, FW, FH); c.getContext('2d').drawImage(sh, 0, FH, FW, FH, FW, 0, FW, FH); c.getContext('2d').drawImage(sh, 0, FH * 2, FW, FH, FW * 2, 0, FW, FH); c.style.cssText = 'width:' + (window.__big ? 900 : 288) + 'px;image-rendering:pixelated;display:block'; d.appendChild(c); document.body.appendChild(d); }
}, ids);
await p.waitForTimeout(500); await p.screenshot({ path: 'tests/shots/chars.png' }); await b.close();
