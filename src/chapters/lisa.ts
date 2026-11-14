// Глава Лизы, THE TOWER IS NOT A HOME. Сказка, книжная фактура, иллюстрации тушью и акварелью.
// Механики: волосы как верёвка (подъём), лассо (тайминг), мост через провал, перенос груза волосами,
// противовес-лифт с недостающей шестерней; Лиза сама решает уйти из башни. Принц опаздывает.
import * as THREE from 'three';
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext, tex } from '../gfx/tex';
import { L, LCUE } from '../data/dialogue/lisa';
import { timing } from '../ui/minigames';
import { finishChapter, actOf, fog, chapterHud, bar } from './common';
import { window3D, armchair, mirror3D, bookshelf } from '../world/decor3d';
import { chandelier, clutterTex, PROPTEX } from '../world/decor';
import { camMove, camBack, warmRig, warmOn, warmOff } from './warm';

// ---------- кино: тёплый свет в нежные моменты, медленная камера, паузы (всё мгновенно в G.fast) ----------
/** Первая подсказка про маски в главе (один раз). */
/** Шкала «Сказочный сценарий»: сколько правил ещё держится и насколько Лиза живая. */
function hud(G: any) { chapterHud(G, 'liz_', (f) => { const sc = f.liz_script || 0, br = f.liz_break || 0; return `СКАЗОЧНЫЙ СЦЕНАРИЙ <span style="color:#c8a0ff">${bar(4 - Math.min(4, br + (f.liz_page ? 1 : 0)), 4)}</span> · Лиза: ${sc >= 3 ? 'как на картинке' : sc >= 1 ? 'ждёт' : 'живая'}`; }); }
const inc = (G: any, k: string) => { G.f[k] = (G.f[k] || 0) + 1; };
function maskHint(G: any, key: string, text: string) { if (G.f['mhint_' + key]) return; G.f['mhint_' + key] = 1; G.toast(text, '◐'); }
// метки из диалога: зеркальце в Драме (крупный план и тёплое «будущее»), пауза перед «Нет.»
LCUE.mirrorDr = async (G: any) => { G.sfx('mask'); G.f.liz_mp = [G.cam.pitch, G.cam.yOff]; void camMove(G, { x: 1, z: -3.2, dist: 7.4, pitch: 0.4, yOff: 2.2 }, 1.2); await warmOn(G, { int: 12, dur: 1.2 }); };
LCUE.mirrorDrEnd = async (G: any) => { const p = G.f.liz_mp || [0.56, 1.2]; delete G.f.liz_mp; await warmOff(G); await camBack(G, p[0], p[1]); };
LCUE.beat = (G: any) => { G.audio.music(null, { fade: 1.2 }); void camMove(G, { x: -2, z: 1, dist: 9, pitch: 0.34, yOff: 1.9 }, 1.6); };

// ---------------- акварель: общие кисти ----------------
type DC = CanvasRenderingContext2D;
const rng = (s: number) => () => ((s = (s * 9301 + 49297) % 233280) / 233280);
const seedOf = (k: string) => { let h = 17; for (const ch of k) h = (h * 31 + ch.charCodeAt(0)) % 233280; return h; };
/** Зерно бумаги: светлые и тёмные точки. */
function grain(c: DC, w: number, h: number, rnd: () => number, k = 1) { for (let i = 0; i < w * h / 5 * k; i++) { c.fillStyle = `rgba(${rnd() > 0.5 ? '255,248,230' : '90,60,30'},${0.04 + rnd() * 0.08})`; c.fillRect(Math.floor(rnd() * w), Math.floor(rnd() * h), 1, 1); } }
/** Акварельные кляксы: мягкие полупрозрачные пятна. */
function blots(c: DC, w: number, h: number, rnd: () => number, cols: string[], n: number, s0 = 4, s1 = 14, a = 'aa') {
  for (let i = 0; i < n; i++) { const g = c.createRadialGradient(0, 0, 0, 0, 0, 1); const col = cols[i % cols.length]; g.addColorStop(0, col + a); g.addColorStop(1, col + '00'); c.save(); c.translate(rnd() * w, rnd() * h); c.scale(s0 + rnd() * (s1 - s0), (s0 + rnd() * (s1 - s0)) * 0.7); c.fillStyle = g; c.beginPath(); c.arc(0, 0, 1, 0, 7); c.fill(); c.restore(); }
}
/** Подтёк пигмента у края листа: края темнее, как у высохшей акварели. */
function edgeWash(c: DC, w: number, h: number, a = 0.3, f = 0.18, sides = 'tblr', col = '90,50,25') {
  const lg = (x0: number, y0: number, x1: number, y1: number, rx: number, ry: number, rw: number, rh: number) => { const g = c.createLinearGradient(x0, y0, x1, y1); g.addColorStop(0, `rgba(${col},${a})`); g.addColorStop(1, `rgba(${col},0)`); c.fillStyle = g; c.fillRect(rx, ry, rw, rh); };
  if (sides.includes('t')) lg(0, 0, 0, h * f, 0, 0, w, h * f); if (sides.includes('b')) lg(0, h, 0, h * (1 - f), 0, h * (1 - f), w, h * f);
  if (sides.includes('l')) lg(0, 0, w * f, 0, 0, 0, w * f, h); if (sides.includes('r')) lg(w, 0, w * (1 - f), 0, w * (1 - f), 0, w * f, h);
}
/** Акварельная текстура общего назначения. */
function wc(key: string, base: string, cols: string[], w = 64, h = 64, opts: { stroke?: boolean; edge?: boolean } = {}) {
  return canvasTex(w, h, (c) => { c.fillStyle = base; c.fillRect(0, 0, w, h); const rnd = rng(seedOf(key)); blots(c, w, h, rnd, cols, 40, 6, 20);
    grain(c, w, h, rnd); if (opts.stroke) { c.strokeStyle = 'rgba(70,50,30,.35)'; c.lineWidth = 0.6; for (let i = 0; i < 8; i++) { c.beginPath(); c.moveTo(rnd() * w, rnd() * h); c.quadraticCurveTo(rnd() * w, rnd() * h, rnd() * w, rnd() * h); c.stroke(); } }
    if (opts.edge) edgeWash(c, w, h, 0.35, 0.22);
  }, 'wc' + key);
}
/** Копия текстуры с повтором (кэш canvasTex общий, поэтому повтор задаём на клоне). */
function rep(t: THREE.Texture, rx: number, ry: number) { const c = t.clone(); c.wrapS = c.wrapT = THREE.RepeatWrapping; c.repeat.set(rx, ry); c.needsUpdate = true; return c; }
const lam = (o: THREE.MeshLambertMaterialParameters) => new THREE.MeshLambertMaterial(o);
function plane(R: Builder, w: number, h: number, m: THREE.Material, x: number, y: number, z: number, rx = 0, ry = 0) { const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m); p.position.set(x, y, z); p.rotation.set(rx, ry, 0); p.receiveShadow = true; R.room.group.add(p); return p; }
function vine(c: DC, x: number, y: number, len: number, rnd: () => number, dir = -1) {
  c.strokeStyle = '#4a6a30'; c.lineWidth = 1; let px = x, py = y; c.beginPath(); c.moveTo(px, py);
  for (let i = 0; i < len; i++) { const nx = px + (rnd() - 0.5) * 6, ny = py + dir * (3 + rnd() * 3); c.quadraticCurveTo(px + (rnd() - 0.5) * 8, (py + ny) / 2, nx, ny); px = nx; py = ny; }
  c.stroke(); const pts: number[][] = []; let qx = x, qy = y; const r2 = rng(Math.floor(x * 31 + y * 7));
  for (let i = 0; i < len * 2; i++) { qx += (r2() - 0.5) * 4; qy += dir * 2.2; pts.push([qx, qy]); }
  for (const [lx, ly] of pts) { c.fillStyle = rnd() > 0.5 ? '#6a9a40' : '#8ab858'; c.beginPath(); c.ellipse(lx + (rnd() - 0.5) * 4, ly, 2.2, 1.2, rnd() * 3, 0, 7); c.fill(); }
}
function flower(c: DC, x: number, y: number, r: number, col: string, mid = '#f2c230') { c.fillStyle = col; for (let k = 0; k < 5; k++) { const a = k / 5 * Math.PI * 2; c.beginPath(); c.arc(x + Math.cos(a) * r, y + Math.sin(a) * r, r * 0.8, 0, 7); c.fill(); } c.fillStyle = mid; c.beginPath(); c.arc(x, y, r * 0.6, 0, 7); c.fill(); }

// ---------------- текстуры сказки ----------------
/** Терракотовая плитка, написанная акварелью (как пол в башне Рапунцель): швы тушью, вставки «ромбиками». */
function tileTex(key: string, pal: string[], acc: [string, string], grout = '#7a4a2a') {
  return canvasTex(96, 96, (c) => { const rnd = rng(seedOf(key)); const S = 32; c.fillStyle = grout; c.fillRect(0, 0, 96, 96);
    for (let j = 0; j < 3; j++) for (let i = 0; i < 3; i++) { const x = i * S, y = j * S; c.fillStyle = pal[Math.floor(rnd() * pal.length)]; c.fillRect(x + 1, y + 1, S - 2, S - 2);
      const g = c.createRadialGradient(x + S * 0.38, y + S * 0.34, 1, x + S / 2, y + S / 2, S * 0.75); g.addColorStop(0, 'rgba(255,240,215,.35)'); g.addColorStop(1, 'rgba(255,240,215,0)'); c.fillStyle = g; c.fillRect(x + 1, y + 1, S - 2, S - 2);
      c.strokeStyle = 'rgba(120,55,25,.32)'; c.lineWidth = 2; c.strokeRect(x + 2.5, y + 2.5, S - 5, S - 5);
      if ((i + j * 2) % 4 === 1) for (let dy = 0; dy < 4; dy++) for (let dx = 0; dx < 4; dx++) { const cx = x + 7 + dx * 6, cy = y + 7 + dy * 6; c.fillStyle = (dx + dy) % 2 ? acc[0] : acc[1]; c.beginPath(); c.moveTo(cx, cy - 3); c.lineTo(cx + 3, cy); c.lineTo(cx, cy + 3); c.lineTo(cx - 3, cy); c.fill(); }
      blots(c, S, S, rnd, ['#b0603a', '#f0c090'], 0, 3, 8);
    }
    blots(c, 96, 96, rnd, ['#b8603a', '#f0c8a0', '#c87850'], 18, 5, 14, '55');
    c.strokeStyle = 'rgba(60,30,15,.55)'; c.lineWidth = 1;
    for (let j = 0; j <= 3; j++) { c.beginPath(); c.moveTo(0, j * S + 0.5); for (let x = 8; x <= 96; x += 8) c.lineTo(x, j * S + 0.5 + (rnd() - 0.5) * 1.4); c.stroke(); c.beginPath(); c.moveTo(j * S + 0.5, 0); for (let y = 8; y <= 96; y += 8) c.lineTo(j * S + 0.5 + (rnd() - 0.5) * 1.4, y); c.stroke(); }
    grain(c, 96, 96, rnd, 1.3);
  }, 'lt' + key);
}
/** Дощатый пол акварелью: тёплые доски, швы тушью, гвоздики. */
function plankTex() {
  return canvasTex(64, 64, (c) => { const rnd = rng(77); for (let r = 0; r < 8; r++) { const y = r * 8; let x = -Math.floor(rnd() * 20); while (x < 64) { const w = 18 + Math.floor(rnd() * 22); c.fillStyle = ['#b88a58', '#a87a4a', '#c89a68', '#9a6e44'][Math.floor(rnd() * 4)]; c.fillRect(x, y, w, 8); c.fillStyle = 'rgba(255,230,190,.25)'; c.fillRect(x + 1, y + 1, w - 2, 2); c.fillStyle = 'rgba(70,40,20,.65)'; c.fillRect(x, y, 1, 8); c.fillRect(x + 2, y + 4, 1, 1); c.fillRect(x + w - 3, y + 4, 1, 1); x += w; } c.fillStyle = 'rgba(60,35,18,.7)'; c.fillRect(0, y + 7, 64, 1); }
    blots(c, 64, 64, rnd, ['#8a5a30', '#d8b080', '#a87040'], 22, 4, 12, '55'); grain(c, 64, 64, rnd, 1.4);
  }, 'lplank');
}
/** Луг: зелёная заливка, штрихи травы, точки цветов. */
function meadowTex() {
  return canvasTex(64, 64, (c) => { const rnd = rng(311); c.fillStyle = '#7a9a4c'; c.fillRect(0, 0, 64, 64); blots(c, 64, 64, rnd, ['#9ab860', '#5e8240', '#b8c070', '#6a9048'], 30, 6, 18, '99');
    for (let i = 0; i < 240; i++) { const x = rnd() * 64, y = rnd() * 64; c.fillStyle = ['#4e7434', '#9cc062', '#3e6028', '#b0cc70'][i % 4]; c.fillRect(Math.floor(x), Math.floor(y), 1, 2 + Math.floor(rnd() * 2)); }
    for (let i = 0; i < 18; i++) { c.fillStyle = ['#f4f0f8', '#f0b0d0', '#f2d060', '#b0c8f0'][i % 4]; c.fillRect(Math.floor(rnd() * 64), Math.floor(rnd() * 64), 1, 1); }
    grain(c, 64, 64, rnd, 0.8);
  }, 'lmeadow');
}
/** Стена 8×16 ед.: внизу деревянная панель, роспись (лоза, цветы, солнце), балка, выше звёздный свод. cold: каменная кладка. */
function muralTex(cold: boolean) {
  return canvasTex(128, 256, (c) => { const rnd = rng(cold ? 901 : 409);
    // свод
    const g = c.createLinearGradient(0, 0, 0, 134); g.addColorStop(0, cold ? '#3a3440' : '#5a3a28'); g.addColorStop(1, cold ? '#a89c94' : '#d8a860'); c.fillStyle = g; c.fillRect(0, 0, 128, 134);
    blots(c, 128, 134, rnd, cold ? ['#6a6478', '#8a8090'] : ['#c88850', '#e8b870', '#a86a40'], 26, 8, 22, '66');
    for (let i = 0; i < 26; i++) { const x = rnd() * 128, y = 30 + rnd() * 96; c.fillStyle = cold ? 'rgba(230,220,200,.55)' : 'rgba(255,240,190,.75)'; c.fillRect(Math.floor(x), Math.floor(y) - 2, 1, 5); c.fillRect(Math.floor(x) - 2, Math.floor(y), 5, 1); }
    // балка
    c.fillStyle = '#5a3a22'; c.fillRect(0, 134, 128, 12); c.fillStyle = '#7a5434'; c.fillRect(0, 135, 128, 3); c.fillStyle = '#2a1a10'; c.fillRect(0, 145, 128, 1); for (let x = 6; x < 128; x += 32) { c.fillStyle = '#2a1a10'; c.fillRect(x, 138, 2, 2); }
    // роспись / кладка
    if (!cold) {
      const gw = c.createLinearGradient(0, 146, 0, 236); gw.addColorStop(0, '#f0d090'); gw.addColorStop(1, '#e8c070'); c.fillStyle = gw; c.fillRect(0, 146, 128, 90);
      blots(c, 128, 90, rnd, ['#f4dca0', '#e0b060', '#f0c8a0', '#d8c080'], 30, 6, 18, '88');
      c.save(); c.translate(0, 146);
      c.strokeStyle = 'rgba(200,120,40,.6)'; c.lineWidth = 1; c.beginPath(); c.arc(98, 22, 9, 0, 7); c.stroke(); for (let k = 0; k < 12; k++) { const a = k / 12 * Math.PI * 2; c.beginPath(); c.moveTo(98 + Math.cos(a) * 11, 22 + Math.sin(a) * 11); c.lineTo(98 + Math.cos(a) * 16, 22 + Math.sin(a) * 16); c.stroke(); } c.fillStyle = 'rgba(250,200,90,.6)'; c.beginPath(); c.arc(98, 22, 8, 0, 7); c.fill();
      for (const vx of [10, 44, 76, 118]) vine(c, vx, 88, 12, rnd);
      for (let i = 0; i < 14; i++) flower(c, 6 + rnd() * 116, 20 + rnd() * 62, 1.6 + rnd() * 1.2, ['#d86a8a', '#8aa0e0', '#f4f0f8', '#c890d8'][i % 4]);
      c.strokeStyle = 'rgba(110,60,90,.5)'; for (let i = 0; i < 3; i++) { const bx = 20 + i * 34, by = 12 + (i % 2) * 8; c.beginPath(); c.moveTo(bx, by); c.quadraticCurveTo(bx + 3, by - 3, bx + 6, by); c.quadraticCurveTo(bx + 9, by - 3, bx + 12, by); c.stroke(); }
      c.restore();
    } else {
      c.fillStyle = '#9a9088'; c.fillRect(0, 146, 128, 90);
      for (let r = 0; r < 8; r++) { const y = 146 + r * 11.25; let x = -(r % 2) * 9; while (x < 128) { const w = 16 + Math.floor(rnd() * 12); c.fillStyle = ['#b8aca0', '#a89c94', '#c4b8a8', '#a8a0ac', '#b0a490'][Math.floor(rnd() * 5)]; c.fillRect(x + 1, y + 1, w - 2, 10); c.fillStyle = 'rgba(255,245,225,.25)'; c.fillRect(x + 2, y + 2, w - 5, 2); c.fillStyle = 'rgba(70,50,40,.25)'; c.fillRect(x + 2, y + 8, w - 4, 2); c.strokeStyle = 'rgba(50,35,25,.6)'; c.lineWidth = 1; c.strokeRect(x + 0.5, y + 0.5, w - 1, 10.25); x += w; } }
      blots(c, 128, 90, rnd, ['#6a8a50', '#8a9a70'], 0); c.save(); c.translate(0, 146); blots(c, 128, 90, rnd, ['#7a9a58', '#5a7a40', '#c8b8d0'], 10, 4, 10, '66'); for (const vx of [18, 90]) vine(c, vx, 90, 8, rnd); c.restore();
    }
    // панель
    c.fillStyle = '#6a4428'; c.fillRect(0, 236, 128, 20); c.fillStyle = '#8a5e38'; c.fillRect(0, 236, 128, 3); for (let x = 0; x < 128; x += 16) { c.fillStyle = '#3a2414'; c.fillRect(x, 239, 1, 17); c.fillStyle = 'rgba(255,220,170,.18)'; c.fillRect(x + 3, 242, 10, 10); }
    edgeWash(c, 128, 256, 0.35, 0.1, 'b', '50,30,15');
    grain(c, 128, 256, rnd, 1.1);
  }, 'lmural' + cold);
}
/** Вытянутая к камере коробка комнаты: высокие расписанные стены (боковые уходят за камеру) и пол далеко за край. Края мира не видны. */
function fairyRoom(R: Builder, G: any, o: { cold?: boolean; floor?: THREE.Texture; floorUnit?: number } = {}) {
  const W = R.w, D = R.d, H = 16, F = 26; R.room.group.userData.bg = o.cold ? 0x2a2420 : 0x3a2818;
  const wt = muralTex(!!o.cold);
  plane(R, W + 2, H, lam({ map: rep(wt, (W + 2) / 8, 1) }), 0, H / 2, -D / 2 + 0.01);
  for (const s of [-1, 1]) plane(R, D + F, H, lam({ map: rep(wt, (D + F) / 8, 1) }), s * W / 2, H / 2, F / 2, 0, -s * Math.PI / 2);
  const fu = o.floorUnit || 6; const ft = o.floor || tileTex('warm', ['#d8875a', '#e09a68', '#c87650', '#e4aa78', '#d4906a'], ['#c87a9a', '#ecd8a8']);
  plane(R, W + 2, D + F, lam({ map: rep(ft, (W + 2) / fu, (D + F) / fu) }), 0, 0.004, F / 2, -Math.PI / 2);
  // тушь-подтёк у основания стен (мягкая тень, «края темнее»)
  const ao = canvasTex(4, 32, (c) => { const g = c.createLinearGradient(0, 0, 0, 32); g.addColorStop(0, 'rgba(60,30,12,.55)'); g.addColorStop(1, 'rgba(60,30,12,0)'); c.fillStyle = g; c.fillRect(0, 0, 4, 32); }, 'lao');
  const aoM = new THREE.MeshBasicMaterial({ map: ao, transparent: true, depthWrite: false });
  plane(R, W, 1.6, aoM, 0, 0.012, -D / 2 + 0.8, -Math.PI / 2); for (const s of [-1, 1]) { const p = plane(R, D + F, 1.6, aoM, s * (W / 2 - 0.8), 0.012, F / 2, -Math.PI / 2); p.rotation.z = s * Math.PI / 2; }
  // фахверк: стойки и балка (пиксельное дерево)
  for (const s of [-1, 1]) { R.box(s * (W / 2 - 0.22), -D / 2 + 0.22, 0.45, 0.45, 9, { tex: 'darkwood', solid: false, cast: false }); R.box(s * (W / 2 - 0.2), 0, 0.4, D, 0.5, { tex: 'darkwood', y: 7.2, solid: false, cast: false }); for (let z = -D / 2 + 5; z < D / 2; z += 5) R.box(s * (W / 2 - 0.15), z, 0.3, 0.35, 7.2, { tex: 'darkwood', solid: false, cast: false }); }
  R.box(0, -D / 2 + 0.22, W, 0.45, 0.5, { tex: 'darkwood', y: 7.2, solid: false, cast: false });
  for (let x = -W / 2 + 6; x < W / 2 - 2; x += 7) if (Math.abs(x) > 2.5) R.box(x, -D / 2 + 0.12, 0.3, 0.25, 7.2, { tex: 'darkwood', solid: false, cast: false });
  R.ambient(0x8a6a48, 1.9, 0xfff0d0); R.particles('dust', { count: 60, top: 6, color: 0xd8b878 }); void G;
}

// ---------------- нарисованные объекты (билборды) ----------------
function treeTex(seed: number, blossom = false) {
  return canvasTex(56, 80, (c) => { const rnd = rng(seed);
    c.fillStyle = '#5a3a22'; c.beginPath(); c.moveTo(24, 80); c.lineTo(26, 44); c.lineTo(22, 34); c.lineTo(28, 40); c.lineTo(33, 30); c.lineTo(31, 46); c.lineTo(33, 80); c.fill(); c.fillStyle = '#7a5434'; c.fillRect(26, 50, 2, 28); c.strokeStyle = '#2a1a0e'; c.lineWidth = 1; c.stroke();
    const cols = ['#4e7a38', '#6a9a48', '#86b45a', '#3e6a30']; const blobs: number[][] = []; for (let i = 0; i < 11; i++) blobs.push([10 + rnd() * 36, 8 + rnd() * 34, 7 + rnd() * 6]);
    c.fillStyle = '#2e4a22'; for (const [x, y, r] of blobs) { c.beginPath(); c.arc(x, y + 1, r + 1, 0, 7); c.fill(); }
    blobs.forEach(([x, y, r], i) => { c.fillStyle = cols[i % cols.length]; c.beginPath(); c.arc(x, y, r, 0, 7); c.fill(); c.fillStyle = 'rgba(220,240,160,.35)'; c.beginPath(); c.arc(x - r * 0.3, y - r * 0.35, r * 0.5, 0, 7); c.fill(); });
    for (let i = 0; i < 22; i++) { c.fillStyle = blossom ? ['#f4c0d8', '#fff0f4'][i % 2] : ['#d8a8c8', '#f2e070', '#ffffff'][i % 3]; c.fillRect(Math.floor(8 + rnd() * 40), Math.floor(6 + rnd() * 36), 1, 1); }
    c.strokeStyle = 'rgba(30,45,20,.55)'; for (let i = 0; i < 6; i++) { const [x, y, r] = blobs[i]; c.beginPath(); c.arc(x, y, r, Math.PI * 0.9, Math.PI * 1.9); c.stroke(); }
  }, 'ltree' + seed + blossom);
}
const FL: Record<string, [number, number, (c: DC, r: () => number) => void]> = {
  sunflower: [16, 44, (c) => { c.fillStyle = '#4a7a30'; c.fillRect(7, 12, 2, 32); c.fillStyle = '#6a9a40'; c.beginPath(); c.ellipse(4, 26, 4, 2, 0.5, 0, 7); c.fill(); c.beginPath(); c.ellipse(12, 33, 4, 2, -0.5, 0, 7); c.fill(); c.fillStyle = '#f0b830'; for (let k = 0; k < 10; k++) { const a = k / 10 * Math.PI * 2; c.beginPath(); c.ellipse(8 + Math.cos(a) * 5, 8 + Math.sin(a) * 5, 2.6, 1.4, a, 0, 7); c.fill(); } c.fillStyle = '#6a3a14'; c.beginPath(); c.arc(8, 8, 3.2, 0, 7); c.fill(); c.strokeStyle = 'rgba(80,40,10,.6)'; c.beginPath(); c.arc(8, 8, 7.5, 0, 7); c.stroke(); }],
  lily: [18, 40, (c) => { c.fillStyle = '#3e6a2a'; c.fillRect(8, 10, 2, 30); for (const [x, y, a] of [[4, 24, 0.8], [13, 30, -0.8], [5, 34, 0.6]]) { c.beginPath(); c.ellipse(x, y, 5, 1.5, a, 0, 7); c.fill(); } c.fillStyle = '#c8304a'; for (let k = 0; k < 6; k++) { const a = k / 6 * Math.PI * 2 - 0.3; c.beginPath(); c.ellipse(9 + Math.cos(a) * 4, 8 + Math.sin(a) * 3, 4, 1.6, a, 0, 7); c.fill(); } c.fillStyle = '#f08060'; c.fillRect(8, 6, 2, 3); c.fillStyle = '#f2d060'; c.fillRect(6, 4, 1, 1); c.fillRect(11, 4, 1, 1); }],
  daisies: [32, 14, (c, r) => { for (let i = 0; i < 26; i++) { c.fillStyle = ['#4e7a34', '#6a9a44', '#86b058'][i % 3]; c.fillRect(Math.floor(r() * 32), 6 + Math.floor(r() * 8), 1, 4 + Math.floor(r() * 4)); } for (let i = 0; i < 7; i++) flower(c, 3 + r() * 26, 3 + r() * 6, 1.3, ['#ffffff', '#f4c0d8', '#b8c8f0'][i % 3]); }],
  rosebush: [32, 22, (c, r) => { c.fillStyle = '#2e5022'; c.beginPath(); c.ellipse(16, 14, 15, 8, 0, 0, 7); c.fill(); for (let i = 0; i < 12; i++) { c.fillStyle = ['#4e7a34', '#6a9a44', '#3e6a2a'][i % 3]; c.beginPath(); c.arc(3 + r() * 26, 7 + r() * 10, 3 + r() * 3, 0, 7); c.fill(); } for (let i = 0; i < 9; i++) { c.fillStyle = ['#c8304a', '#e86080', '#f4a0b8'][i % 3]; c.beginPath(); c.arc(4 + r() * 24, 5 + r() * 12, 1.6, 0, 7); c.fill(); } c.strokeStyle = 'rgba(25,40,15,.6)'; c.beginPath(); c.ellipse(16, 14, 15, 8, 0, Math.PI, Math.PI * 2); c.stroke(); }],
  fence: [48, 18, (c) => { c.fillStyle = '#d8c8a8'; for (let x = 1; x < 48; x += 6) { c.fillRect(x, 3, 4, 15); c.fillRect(x + 1, 2, 2, 1); } c.fillRect(0, 7, 48, 2); c.fillRect(0, 13, 48, 2); c.fillStyle = 'rgba(70,50,30,.6)'; for (let x = 1; x < 48; x += 6) c.fillRect(x + 3, 3, 1, 15); }],
  mushroom: [14, 12, (c) => { c.fillStyle = '#f0e8d8'; c.fillRect(5, 6, 4, 6); c.fillStyle = '#c8304a'; c.beginPath(); c.ellipse(7, 6, 6, 4, 0, Math.PI, Math.PI * 2); c.fill(); c.fillStyle = '#fff'; c.fillRect(4, 3, 1, 1); c.fillRect(8, 2, 1, 1); c.fillRect(10, 4, 1, 1); }],
  cottage: [80, 72, (c, r) => { c.fillStyle = '#d8c0a8'; c.fillRect(14, 30, 52, 40); for (let i = 0; i < 40; i++) { c.fillStyle = ['#c8a890', '#e0c8b8', '#c8b8c8', '#d8b8a0'][i % 4]; c.fillRect(15 + Math.floor(r() * 46), 31 + Math.floor(r() * 36), 5, 3); } c.fillStyle = '#c86040'; c.beginPath(); c.moveTo(8, 32); c.lineTo(40, 4); c.lineTo(72, 32); c.fill(); c.fillStyle = 'rgba(120,40,20,.5)'; for (let y = 10; y < 32; y += 4) c.fillRect(40 - (y - 4) * 1.15, y, (y - 4) * 2.3, 1); c.fillStyle = '#5a3a22'; c.fillRect(34, 48, 12, 22); c.fillStyle = '#ffe0a0'; c.fillRect(20, 40, 8, 8); c.fillRect(52, 40, 8, 8); c.fillStyle = '#5a3a22'; c.fillRect(23, 40, 1, 8); c.fillRect(55, 40, 1, 8); c.fillStyle = '#5a8a3a'; for (let i = 0; i < 30; i++) c.fillRect(12 + Math.floor(r() * 10), 30 + Math.floor(r() * 40), 2, 2); c.fillRect(56, 20, 6, 10); c.strokeStyle = 'rgba(50,30,15,.7)'; c.strokeRect(14.5, 30.5, 51, 39); }],
};
const flTex = (k: string) => { const [w, h, d] = FL[k]; return canvasTex(w, h, (c) => d(c, rng(seedOf(k))), 'lfl' + k); };

// ---------------- коса ----------------
const braidTex = () => { const t = canvasTex(16, 32, (c) => { for (let y = 0; y < 32; y++) { const k = (y % 8) / 8; c.fillStyle = k < 0.5 ? '#b0824e' : '#8a6038'; c.fillRect(0, y, 16, 1); c.fillStyle = 'rgba(255,230,170,.5)'; c.fillRect(4 + Math.round(Math.sin(y / 8 * Math.PI * 2) * 3), y, 3, 1); } c.fillStyle = 'rgba(40,20,10,.35)'; c.fillRect(0, 0, 2, 32); c.fillRect(14, 0, 2, 32); }, 'braid3d'); t.wrapS = t.wrapT = THREE.RepeatWrapping; return t; };
function braidTube(pts: THREE.Vector3[], r = 0.22) {
  const curve = new THREE.CatmullRomCurve3(pts); const len = curve.getLength(); const geo = new THREE.TubeGeometry(curve, Math.max(16, Math.round(len * 5)), r, 7, false);
  const t = braidTex().clone(); t.needsUpdate = true; t.repeat.set(len * 1.4, 1); const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ map: t, emissive: 0x2a1a08 })); m.castShadow = true; return m;
}
/** Длинная коса волочится за Лизой по полу петлями (как в иллюстрациях к «Рапунцель»), лента по следу её шагов. */
function hairTrail(R: Builder, G: any, o: { id?: string; xMax?: number } = {}) {
  const id = o.id || 'liza'; const trail: THREE.Vector3[] = []; let mesh: THREE.Mesh | null = null; let acc = 0, seeded = false, lastKey = '';
  const W = R.w / 2 - 0.6, D = R.d / 2 - 0.6, xMax = Math.min(W, o.xMax ?? W);
  R.onUpdate((dt) => { const a = G.actor(id); if (!a || a.charId !== 'liza_long' || a.hidden) { if (mesh) mesh.visible = false; return; } acc += dt;
    if (!seeded) { seeded = true; trail.push(new THREE.Vector3(a.x, 0.08, a.z - 0.05)); const dir = a.x > 0 ? -1 : 1;
      for (let i = 1; i < 46; i++) { const x = a.x + dir * (i * 0.16) + Math.sin(i * 0.3) * 1.9, z = a.z - 0.4 - (1 - Math.cos(i * 0.3)) * 1.2 + Math.sin(i * 0.11) * 0.8; trail.push(new THREE.Vector3(Math.max(-W, Math.min(xMax, x)), 0.08, Math.max(-D, Math.min(D, z)))); } }
    if (trail[0].distanceTo(new THREE.Vector3(a.x, 0.08, a.z)) > 0.35) { trail.unshift(new THREE.Vector3(a.x, 0.08, a.z - 0.05)); if (trail.length > 70) trail.pop(); }
    if (acc < 0.12) return; acc = 0; const key = a.x.toFixed(2) + a.z.toFixed(2) + trail.length; if (key === lastKey && mesh) { mesh.visible = true; return; } lastKey = key;
    const head = new THREE.Vector3(a.x - 0.05, 1.25, a.z - 0.12); const pts = [head, new THREE.Vector3(a.x - 0.1, 0.45, a.z - 0.25), ...trail.slice(1).map((p) => new THREE.Vector3(p.x, 0.08, p.z - 0.25))];
    if (mesh) { R.room.group.remove(mesh); mesh.geometry.dispose(); (mesh.material as THREE.MeshLambertMaterial).map?.dispose(); (mesh.material as THREE.Material).dispose(); } mesh = braidTube(pts, 0.17); R.room.group.add(mesh); });
}
/** Отрезанная коса, свёрнутая кольцами на полу. */
function braidCoil(R: Builder, x: number, z: number, turns = 3) { const pts: THREE.Vector3[] = []; for (let i = 0; i <= turns * 14; i++) { const a = i / 14 * Math.PI * 2, rr = 1.1 - i / (turns * 14) * 0.7; pts.push(new THREE.Vector3(x + Math.cos(a) * rr, 0.12 + i * 0.006, z + Math.sin(a) * rr * 0.8)); } const m = braidTube(pts, 0.16); R.room.group.add(m); return m; }

// ---------------- 3D детали ----------------
function gearTex() {
  return canvasTex(64, 64, (c) => { const rnd = rng(55); c.fillStyle = '#b8844a'; c.fillRect(0, 0, 64, 64); blots(c, 64, 64, rnd, ['#e0b070', '#8a5426', '#c89858', '#6a4020'], 30, 4, 14, '99');
    c.strokeStyle = 'rgba(50,28,10,.7)'; c.lineWidth = 1; for (const r of [8, 20, 27]) { c.beginPath(); c.arc(32, 32, r, 0, 7); c.stroke(); } for (let k = 0; k < 16; k++) { const a = k / 16 * Math.PI * 2; c.beginPath(); c.moveTo(32 + Math.cos(a) * 9, 32 + Math.sin(a) * 9); c.lineTo(32 + Math.cos(a) * 19, 32 + Math.sin(a) * 19); c.stroke(); }
    c.fillStyle = 'rgba(255,230,170,.45)'; c.beginPath(); c.arc(24, 22, 6, 0, 7); c.fill(); grain(c, 64, 64, rnd, 1.2);
  }, 'lgear');
}
/** Объёмная шестерня с росписью по латуни, вращается. */
function paintedGear(R: Builder, x: number, y: number, z: number, rad: number, speed: number, o: { teeth?: number; rx?: number; ry?: number; depth?: number } = {}) {
  const n = o.teeth || Math.max(8, Math.round(rad * 9)), s = new THREE.Shape();
  for (let i = 0; i < n; i++) { const a0 = i / n * Math.PI * 2, da = Math.PI * 2 / n; const pts = [[a0, rad * 0.84], [a0 + da * 0.18, rad], [a0 + da * 0.5, rad], [a0 + da * 0.68, rad * 0.84]]; pts.forEach(([a, rr], k) => { const px = Math.cos(a) * rr, py = Math.sin(a) * rr; if (i === 0 && k === 0) s.moveTo(px, py); else s.lineTo(px, py); }); }
  const hub = new THREE.Path(); hub.absarc(0, 0, rad * 0.12, 0, Math.PI * 2, true); s.holes.push(hub);
  for (let k = 0; k < 5; k++) { const a = k / 5 * Math.PI * 2; const h = new THREE.Path(); h.absarc(Math.cos(a) * rad * 0.52, Math.sin(a) * rad * 0.52, rad * 0.17, 0, Math.PI * 2, true); s.holes.push(h); }
  const geo = new THREE.ExtrudeGeometry(s, { depth: o.depth ?? 0.32, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 1 });
  const t = rep(gearTex(), 1 / (2 * rad), 1 / (2 * rad)); t.offset.set(0.5, 0.5);
  const m = new THREE.Mesh(geo, [lam({ map: t, emissive: 0x2a1808 }), lam({ map: tex('darkwood'), color: 0xd8a060 })]); m.castShadow = true; m.position.z = -(o.depth ?? 0.32) / 2;
  const g = new THREE.Group(); g.add(m); const axle = new THREE.Mesh(new THREE.CylinderGeometry(rad * 0.14, rad * 0.14, 0.9, 10), lam({ map: tex('metal') })); axle.rotation.x = Math.PI / 2; g.add(axle);
  g.position.set(x, y, z); g.rotation.set(o.rx || 0, o.ry || 0, 0); R.room.group.add(g); R.onUpdate((dt) => { m.rotation.z += dt * speed; }); return g;
}
/** Бездонный провал: стены уходят в темноту, слои дымки, рваный край бумаги вместо чистой кромки. */
function abyss(R: Builder, x0: number, x1: number) {
  const D = R.d, z0 = -D / 2, z1 = D / 2 + 26, depth = 20, len = z1 - z0, cz = (z0 + z1) / 2, w = x1 - x0;
  const wallT = canvasTex(32, 128, (c) => { const rnd = rng(71); for (let r = 0; r < 16; r++) { const y = r * 8; let x = -(r % 2) * 6; while (x < 32) { const ww = 10 + Math.floor(rnd() * 8); c.fillStyle = ['#7a6a5a', '#6a5a50', '#84746a'][Math.floor(rnd() * 3)]; c.fillRect(x, y, ww - 1, 7); c.fillStyle = 'rgba(40,25,15,.7)'; c.fillRect(x, y + 7, ww, 1); c.fillRect(x + ww - 1, y, 1, 8); x += ww; } }
    const g = c.createLinearGradient(0, 0, 0, 128); g.addColorStop(0, 'rgba(20,12,24,0)'); g.addColorStop(0.25, 'rgba(20,12,24,.55)'); g.addColorStop(0.6, 'rgba(12,8,16,.95)'); g.addColorStop(1, 'rgba(6,4,8,1)'); c.fillStyle = g; c.fillRect(0, 0, 32, 128); grain(c, 32, 128, rnd, 0.6); }, 'labyss');
  for (const [x, s] of [[x0, 1], [x1, -1]] as [number, number][]) plane(R, len, depth, lam({ map: rep(wallT, len / 2, 1) }), x, -depth / 2, cz, 0, s * Math.PI / 2);
  plane(R, w, depth, lam({ map: rep(wallT, w / 2, 1) }), (x0 + x1) / 2, -depth / 2, z0);
  plane(R, w, len, new THREE.MeshBasicMaterial({ color: 0x050308 }), (x0 + x1) / 2, -depth + 0.1, cz, -Math.PI / 2);
  const haze = canvasTex(32, 64, (c) => { const rnd = rng(29); c.clearRect(0, 0, 32, 64); blots(c, 32, 64, rnd, ['#3a2a50', '#5a3a60', '#20182a', '#6a5080'], 26, 4, 12, 'cc'); }, 'lhaze');
  [[-1.6, 0.35], [-4, 0.5], [-7.5, 0.65], [-12, 0.85]].forEach(([y, op], i) => { const t = rep(haze, w / 2, len / 4); t.offset.set(i * 0.3, i * 0.17); const p = plane(R, w, len, new THREE.MeshBasicMaterial({ map: t, transparent: true, opacity: op, depthWrite: false }), (x0 + x1) / 2, y, cz, -Math.PI / 2); R.onUpdate((dt) => { t.offset.y += dt * 0.01 * (i + 1); }); void p; });
  // рваный край: бумага с неровной кромкой и тушью, свисает над провалом
  const tear = canvasTex(32, 64, (c) => { const rnd = rng(131); for (let y = 0; y < 64; y++) { const jag = 16 + Math.round(Math.sin(y * 0.7) * 2 + (rnd() - 0.5) * 5); c.fillStyle = '#e8d4a8'; c.fillRect(0, y, jag, 1); c.fillStyle = 'rgba(255,250,235,.8)'; c.fillRect(jag, y, 1, 1); c.fillStyle = 'rgba(160,120,70,.6)'; c.fillRect(jag - 2, y, 2, 1); c.fillStyle = '#3a2614'; c.fillRect(jag - 4, y, 1, 1); if (rnd() > 0.7) c.fillRect(jag + 1, y, 1 + Math.floor(rnd() * 2), 1); }
    const g = c.createLinearGradient(0, 0, 16, 0); g.addColorStop(0, 'rgba(232,212,168,0)'); g.addColorStop(1, 'rgba(150,100,50,.35)'); c.fillStyle = g; c.globalCompositeOperation = 'source-atop'; c.fillRect(0, 0, 32, 64); c.globalCompositeOperation = 'source-over'; }, 'ltear');
  for (const [x, s] of [[x0, 1], [x1, -1]] as [number, number][]) { const t = rep(tear, 1, len / 4); const p = new THREE.Mesh(new THREE.PlaneGeometry(2, len), new THREE.MeshLambertMaterial({ map: t, transparent: true, alphaTest: 0.2 })); p.rotation.x = -Math.PI / 2; p.position.set(x - s * 0.55, 0.018, cz); p.scale.x = s; p.receiveShadow = true; R.room.group.add(p); }
  R.light((x0 + x1) / 2, -5, 0, 0x6a5aa0, 6, 12);
}
/** Балдахин: резные стойки, пэчворк-одеяло, подушки, шторы с подхватами и фестонами. */
function canopyBed(R: Builder, x: number, z: number, ry = 0) {
  const g = new THREE.Group(); const wood = lam({ map: tex('darkwood'), color: 0xe0b890 }); const gold = lam({ map: tex('gold') });
  const quilt = canvasTex(48, 32, (c) => { const rnd = rng(5); for (let j = 0; j < 4; j++) for (let i = 0; i < 6; i++) { c.fillStyle = ['#c8a0dc', '#e8a8c0', '#f0e0c0', '#a8b8e0', '#d8b0e8'][(i + j * 2) % 5]; c.fillRect(i * 8, j * 8, 8, 8); if ((i + j) % 3 === 0) flower(c, i * 8 + 4, j * 8 + 4, 1.4, '#f4f0f8', '#e86080'); } blots(c, 48, 32, rnd, ['#b080c8', '#f0c0d0'], 14, 3, 9, '66'); c.fillStyle = 'rgba(70,40,60,.6)'; for (let i = 0; i <= 6; i++) for (let y = 0; y < 32; y += 2) c.fillRect(i * 8, y, 1, 1); for (let j = 0; j <= 4; j++) for (let xx = 0; xx < 48; xx += 2) c.fillRect(xx, j * 8, 1, 1); grain(c, 48, 32, rnd); }, 'lquilt');
  const linen = canvasTex(16, 16, (c) => { c.fillStyle = '#f4ecdc'; c.fillRect(0, 0, 16, 16); c.fillStyle = 'rgba(150,170,220,.45)'; for (let x = 1; x < 16; x += 4) c.fillRect(x, 0, 1, 16); c.fillStyle = 'rgba(120,90,60,.25)'; c.fillRect(0, 15, 16, 1); }, 'llinen');
  const drape = canvasTex(16, 48, (c) => { for (let x = 0; x < 16; x++) { const k = Math.sin(x / 16 * Math.PI * 4); c.fillStyle = k > 0.3 ? '#f0c8e0' : k > -0.3 ? '#d8a8d0' : '#b080b8'; c.fillRect(x, 0, 1, 48); } const rnd = rng(9); blots(c, 16, 48, rnd, ['#e8b8d8', '#a070b0'], 10, 3, 8, '55'); c.fillStyle = '#d4ae48'; c.fillRect(0, 46, 16, 2); }, 'ldrape');
  const valance = canvasTex(32, 8, (c) => { c.fillStyle = '#c890c8'; c.fillRect(0, 0, 32, 4); for (let i = 0; i < 4; i++) { c.beginPath(); c.arc(4 + i * 8, 4, 4, 0, Math.PI); c.fill(); } c.fillStyle = '#d4ae48'; c.fillRect(0, 0, 32, 1); for (let i = 0; i < 4; i++) c.fillRect(4 + i * 8, 7, 1, 1); }, 'lvalance');
  const bx = (w: number, h: number, d: number, px: number, py: number, pz: number, m: THREE.Material | THREE.Material[]) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(px, py, pz); b.castShadow = true; b.receiveShadow = true; g.add(b); return b; };
  bx(3.1, 0.5, 2.3, 0, 0.35, 0, wood); bx(2.9, 0.35, 2.1, 0, 0.77, 0, lam({ map: linen }));
  bx(3.0, 0.14, 1.45, 0, 0.98, 0.35, lam({ map: quilt })); { const fall = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 0.55), lam({ map: quilt })); fall.position.set(0, 0.72, 1.08); g.add(fall); }
  for (const sx of [-0.65, 0.65]) { const p = bx(0.95, 0.28, 0.55, sx, 1.07, -0.65, lam({ map: linen })); p.rotation.x = -0.35; }
  bx(3.1, 1.7, 0.16, 0, 1.25, -1.1, wood); { const panel = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.9), lam({ map: canvasTex(32, 12, (c) => { c.fillStyle = '#e8c890'; c.fillRect(0, 0, 32, 12); flower(c, 16, 6, 2.4, '#e86080'); vine(c, 4, 11, 3, rng(3)); vine(c, 28, 11, 3, rng(4)); c.strokeStyle = '#5a3a22'; c.strokeRect(0.5, 0.5, 31, 11); }, 'lheadpanel') })); panel.position.set(0, 1.55, -1.01); g.add(panel); }
  for (const [px, pz] of [[-1.5, -1.1], [1.5, -1.1], [-1.5, 1.08], [1.5, 1.08]]) { bx(0.16, 3.6, 0.16, px, 1.8, pz, wood); const f = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6), gold); f.position.set(px, 3.85, pz); g.add(f); }
  bx(3.3, 0.16, 2.5, 0, 3.66, 0, lam({ map: drape }));
  const vm = lam({ map: valance, transparent: true, alphaTest: 0.3, side: THREE.DoubleSide }); { const v = new THREE.Mesh(new THREE.PlaneGeometry(3.3, 0.5), vm); v.position.set(0, 3.35, 1.26); g.add(v); for (const s of [-1, 1]) { const v2 = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 0.5), vm); v2.position.set(s * 1.66, 3.35, 0); v2.rotation.y = Math.PI / 2; g.add(v2); } }
  const dm = lam({ map: drape, side: THREE.DoubleSide }); const mk = (w: number, h: number) => { const cg = new THREE.PlaneGeometry(w, h, 8, 1); const pos = cg.attributes.position; for (let i = 0; i < pos.count; i++) pos.setZ(i, Math.sin(pos.getX(i) * 12) * 0.06); cg.computeVertexNormals(); return new THREE.Mesh(cg, dm); };
  { const back = mk(3.2, 3.4); back.position.set(0, 1.95, -1.22); g.add(back); }
  for (const s of [-1, 1]) { const d = mk(0.75, 3.2); d.position.set(s * 1.5, 2.0, 1.16); d.scale.x = 0.9; g.add(d); const tie = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.035, 4, 10), gold); tie.position.set(s * 1.5, 1.4, 1.22); g.add(tie); const sd = mk(0.8, 3.2); sd.rotation.y = Math.PI / 2; sd.position.set(s * 1.58, 2.0, -0.7); g.add(sd); }
  g.position.set(x, 0, z); g.rotation.y = ry; R.room.group.add(g); const sw = Math.abs(Math.sin(ry)) > 0.5; const hw = sw ? 1.2 : 1.6, hd = sw ? 1.6 : 1.2; R.collider(x - hw, z - hd, x + hw, z + hd); return g;
}
/** Круглый сказочный ковёр: солнце, звёзды, цветочный орнамент (не путать с ковром в особняке). */
function fairyRug(R: Builder, x: number, z: number, w: number, d: number, pal: { a: string; b: string; c: string; d: string }, key: string) {
  const t = canvasTex(96, 96, (c) => { const rnd = rng(seedOf(key)); const cx = 48, cy = 48;
    const ring = (r: number, col: string) => { c.fillStyle = col; c.beginPath(); c.arc(cx, cy, r, 0, 7); c.fill(); };
    ring(47, pal.d); ring(44, pal.a); for (let k = 0; k < 24; k++) { const a = k / 24 * Math.PI * 2; flower(c, cx + Math.cos(a) * 40, cy + Math.sin(a) * 40, 1.6, k % 2 ? pal.c : '#f4ecd8', pal.d); }
    ring(35, pal.b); ring(32, pal.a); c.strokeStyle = pal.c; c.lineWidth = 1; for (let k = 0; k < 16; k++) { const a = k / 16 * Math.PI * 2; c.beginPath(); c.moveTo(cx + Math.cos(a) * 12, cy + Math.sin(a) * 12); c.lineTo(cx + Math.cos(a) * 29, cy + Math.sin(a) * 29); c.stroke(); }
    for (let k = 0; k < 8; k++) { const a = k / 8 * Math.PI * 2 + 0.2; const sx = cx + Math.cos(a) * 24, sy = cy + Math.sin(a) * 24; c.fillStyle = '#f4d878'; c.fillRect(Math.round(sx) - 2, Math.round(sy), 5, 1); c.fillRect(Math.round(sx), Math.round(sy) - 2, 1, 5); }
    ring(11, pal.c); ring(8, '#f4d060'); for (let k = 0; k < 10; k++) { const a = k / 10 * Math.PI * 2; c.fillStyle = '#f4d060'; c.beginPath(); c.moveTo(cx + Math.cos(a) * 10, cy + Math.sin(a) * 10); c.lineTo(cx + Math.cos(a + 0.2) * 15, cy + Math.sin(a + 0.2) * 15); c.lineTo(cx + Math.cos(a + 0.4) * 10, cy + Math.sin(a + 0.4) * 10); c.fill(); }
    blots(c, 96, 96, rnd, [pal.a, pal.b, '#ffffff'], 18, 4, 12, '33'); c.globalCompositeOperation = 'destination-in'; c.beginPath(); c.arc(cx, cy, 47.5, 0, 7); c.fill(); c.globalCompositeOperation = 'source-over';
    for (let k = 0; k < 48; k++) { const a = k / 48 * Math.PI * 2; c.fillStyle = pal.d; c.fillRect(Math.round(cx + Math.cos(a) * 47), Math.round(cy + Math.sin(a) * 47), 1, 1); }
    grain(c, 96, 96, rnd, 0.8);
  }, 'lrug' + key);
  return R.decal(t, { flat: true, x, z, y: 0.025, w, h: d });
}
/** Нарисованный вид из окна башни: облака ниже подоконника, далеко внизу холмы и река. */
function towerView() {
  return canvasTex(32, 44, (c) => { const g = c.createLinearGradient(0, 0, 0, 44); g.addColorStop(0, '#7aa8e0'); g.addColorStop(0.5, '#cfe0f0'); g.addColorStop(1, '#f0e0c8'); c.fillStyle = g; c.fillRect(0, 0, 32, 44); const rnd = rng(21);
    c.fillStyle = 'rgba(255,255,255,.85)'; for (const [x, y, w] of [[2, 8, 10], [18, 5, 12], [6, 22, 14], [20, 25, 10]]) { c.fillRect(x, y, w, 2); c.fillRect(x + 2, y - 1, w - 4, 1); }
    for (const [col, y0] of [['#a8c090', 30], ['#88a870', 34], ['#6a9058', 38]] as [string, number][]) { c.fillStyle = col; c.beginPath(); c.moveTo(0, 44); for (let x = 0; x <= 32; x += 4) c.lineTo(x, y0 + Math.sin(x / 5 + y0) * 2); c.lineTo(32, 44); c.fill(); }
    c.fillStyle = '#9ac0e0'; c.beginPath(); c.moveTo(10, 44); c.quadraticCurveTo(16, 38, 22, 36); c.lineTo(23, 37); c.quadraticCurveTo(17, 40, 13, 44); c.fill();
    for (let i = 0; i < 9; i++) { c.fillStyle = '#3e6a30'; c.fillRect(Math.floor(rnd() * 32), 36 + Math.floor(rnd() * 7), 1, 1); }
    c.fillStyle = '#4a4050'; c.fillRect(8, 15, 2, 1); c.fillRect(10, 14, 1, 1); c.fillRect(24, 18, 2, 1); c.fillRect(23, 17, 1, 1);
  }, 'ltowerview');
}
const ink = (R: Builder, text: string, x: number, y: number, w = 6, z?: number) => R.decal(canvasTex(Math.round(w * 16), 14, (c) => ptext(c, text, Math.round(w * 8), 2, { size: 9, col: '#3a2a14', align: 'center', font: '"Marck Script", cursive' }), 'ink' + text), { x, y, w, h: 0.9, z, noSlot: true });
const lizaNPC = (R: Builder, G: any, x: number, z: number) => { const a = R.actor('liza_long', x, z, { id: 'liza' }); G.follow(a); return a; };
const BOOK = { sat: 0.95, tint: [1.06, 1.0, 0.88], vig: 0.6, bright: 1.0, bloom: 0.3, contrast: 1.05 };

// ---------------- подножие башни ----------------
const TX = 4, TZ = -2.4, TR = 2.3;
function towerTex() {
  return canvasTex(128, 160, (c) => { const rnd = rng(1201); c.fillStyle = '#8a7060'; c.fillRect(0, 0, 128, 160);
    for (let r = 0; r < 15; r++) { const y = r * 11; let x = -Math.floor(rnd() * 10); while (x < 128) { const w = 13 + Math.floor(rnd() * 13); c.fillStyle = ['#ecdcc4', '#dcc4ac', '#e4cccc', '#cebeac', '#dcd4b4', '#ccbcd4', '#e8c8b0'][Math.floor(rnd() * 7)]; c.beginPath(); c.moveTo(x + 2, y + 1); c.lineTo(x + w - 1, y + 1); c.lineTo(x + w - 1, y + 10); c.lineTo(x + 1, y + 10); c.fill();
      c.fillStyle = 'rgba(255,250,235,.4)'; c.fillRect(x + 2, y + 2, w - 5, 2); c.fillStyle = 'rgba(120,70,50,.28)'; c.fillRect(x + 2, y + 8, w - 3, 2); c.fillRect(x + w - 3, y + 2, 2, 8); c.strokeStyle = 'rgba(60,38,24,.75)'; c.lineWidth = 1; c.strokeRect(x + 1.5, y + 0.5, w - 2, 10); x += w; } }
    blots(c, 128, 160, rnd, ['#f0c8b8', '#c8b8d8', '#e0d0a0'], 20, 6, 16, '44');
    for (const [vx, top] of [[12, 70], [40, 110], [70, 60], [100, 96], [122, 80]]) { c.strokeStyle = '#3e5a28'; c.lineWidth = 1; let px = vx, py = 160; c.beginPath(); c.moveTo(px, py); while (py > 160 - top) { const nx = px + (rnd() - 0.5) * 10, ny = py - 5 - rnd() * 5; c.quadraticCurveTo(px + (rnd() - 0.5) * 10, (py + ny) / 2, nx, ny); px = nx; py = ny; } c.stroke();
      for (let k = 0; k < top / 2.2; k++) { const lx = vx + (rnd() - 0.5) * 16, ly = 160 - rnd() * top; c.fillStyle = ['#4e7a34', '#6a9a44', '#86b058', '#3a6028'][k % 4]; c.beginPath(); c.ellipse(lx, ly, 2.6, 1.6, rnd() * 3, 0, 7); c.fill(); if (k % 7 === 0) { c.fillStyle = '#c8304a'; c.fillRect(Math.floor(lx), Math.floor(ly), 2, 2); } } }
    grain(c, 128, 160, rnd, 1);
  }, 'ltower2');
}
function roofTex() { return canvasTex(64, 64, (c) => { c.fillStyle = '#3a5a90'; c.fillRect(0, 0, 64, 64); for (let r = 0; r < 10; r++) for (let i = 0; i < 9; i++) { const x = i * 8 - (r % 2) * 4, y = r * 7; c.fillStyle = ['#5a7ab8', '#4a6aa8', '#6a8ac8'][(i + r) % 3]; c.beginPath(); c.arc(x + 4, y + 2, 4, 0, Math.PI); c.fill(); c.strokeStyle = 'rgba(20,30,60,.6)'; c.beginPath(); c.arc(x + 4, y + 2, 4, 0, Math.PI); c.stroke(); } grain(c, 64, 64, rng(8)); }, 'lroof2'); }
function paintedBackdrop(R: Builder) {
  const sky = canvasTex(256, 128, (c) => { const g = c.createLinearGradient(0, 0, 0, 128); g.addColorStop(0, '#7aa4d4'); g.addColorStop(0.55, '#e8d0c0'); g.addColorStop(1, '#f0d8a8'); c.fillStyle = g; c.fillRect(0, 0, 256, 128); const rnd = rng(66);
    for (let i = 0; i < 14; i++) { const gr = c.createRadialGradient(0, 0, 0, 0, 0, 1); gr.addColorStop(0, 'rgba(255,250,245,.8)'); gr.addColorStop(1, 'rgba(255,250,245,0)'); c.save(); c.translate((i * 53) % 256, 14 + (i * 23) % 40); c.scale(26 + (i % 4) * 8, 9 + (i % 3) * 3); c.fillStyle = gr; c.beginPath(); c.arc(0, 0, 1, 0, 7); c.fill(); c.restore(); }
    c.fillStyle = 'rgba(190,160,200,.8)'; for (const [x, h] of [[188, 26], [200, 34], [212, 22]]) { c.fillRect(x, 92 - h, 8, h); c.beginPath(); c.moveTo(x - 2, 92 - h); c.lineTo(x + 4, 92 - h - 10); c.lineTo(x + 10, 92 - h); c.fill(); }
    for (const [col, y0, a] of [['rgba(150,170,140,.85)', 92, 9], ['rgba(110,140,100,.95)', 102, 7], ['rgba(90,120,80,1)', 112, 6]] as [string, number, number][]) { c.fillStyle = col; c.beginPath(); c.moveTo(0, 128); for (let x = 0; x <= 256; x += 8) c.lineTo(x, y0 + Math.sin(x / 23 + y0) * a); c.lineTo(256, 128); c.fill(); }
    grain(c, 256, 128, rnd, 0.4); }, 'wcsky2');
  plane(R, 200, 100, new THREE.MeshBasicMaterial({ map: sky, fog: false }), 0, 30, -60);
  const line = canvasTex(128, 24, (c) => { const rnd = rng(12); for (let i = 0; i < 46; i++) { const x = i * 2.9, r = 4 + rnd() * 6; c.fillStyle = ['#5a7a58', '#6a8a64', '#4a6a50'][i % 3]; c.beginPath(); c.arc(x, 24 - r * 0.8 - rnd() * 6, r, 0, 7); c.fill(); } c.fillRect(0, 18, 128, 6); blots(c, 128, 24, rnd, ['#8aa080', '#3a5a40'], 14, 3, 8, '55'); }, 'ltreeline');
  plane(R, 180, 16, new THREE.MeshBasicMaterial({ map: line, transparent: true, alphaTest: 0.2 }), 0, 6, -30);
}
const base: RoomDef = {
  card: (G) => G.f.intro_liz ? null : [[actOf(G), 'act'], ['THE TOWER IS NOT A HOME', 'big'], ['сказка · тушь и акварель · с мотивами «Рапунцель»', 'sm']],
  name: 'Подножие башни', chapter: 'Акт II · Лиза', w: 30, d: 12, music: 'fairy', amb: 'wind', step: 'grass', grade: BOOK, camDist: 28,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0xe8dab0; G.cam.pitch = 0.27; G.cam.yOff = 4.4; // низкий ракурс: башня с окном и косой целиком в кадре
    R.ambient(0x6a6040, 1.6, 0xfff4d8); R.sun(0xfff0d0, 1.9, -6, 14, 8); R.particles('petals', { count: 50, top: 8, color: 0xd8b0d0 });
    { const mead = plane(R, 220, 130, lam({ map: rep(meadowTex(), 55, 32) }), 0, 0, -20, -Math.PI / 2); void mead; }
    // тропинка через луг к башне
    { const path = canvasTex(160, 24, (c) => { const rnd = rng(42); for (let i = 0; i < 26; i++) { const x = 4 + i * 6 + (rnd() - 0.5) * 2, y = 12 + Math.sin(i * 0.45) * 5; c.fillStyle = 'rgba(200,160,110,.5)'; c.beginPath(); c.ellipse(x, y, 7, 5, 0, 0, 7); c.fill(); } for (let i = 0; i < 26; i++) { const x = 4 + i * 6, y = 12 + Math.sin(i * 0.45) * 5 + (rnd() - 0.5) * 3; c.fillStyle = ['#d8c8a8', '#c8b898', '#e0d0b8'][i % 3]; c.beginPath(); c.ellipse(x, y, 2.6, 1.8, rnd(), 0, 7); c.fill(); c.strokeStyle = 'rgba(70,50,30,.6)'; c.stroke(); } }, 'lpath');
      R.decal(path, { flat: true, x: -6, z: 1.6, y: 0.02, w: 20, h: 3, opacity: 1 }); }
    // башня
    { const twr = new THREE.Mesh(new THREE.CylinderGeometry(TR, TR + 0.25, 13, 28), lam({ map: rep(towerTex(), 2, 1) })); twr.position.set(TX, 6.5, TZ); twr.castShadow = true; twr.receiveShadow = true; R.room.group.add(twr); R.collider(TX - TR - 0.1, TZ - TR, TX + TR + 0.1, TZ + TR);
      const plinth = new THREE.Mesh(new THREE.CylinderGeometry(TR + 0.45, TR + 0.6, 0.8, 28), lam({ map: rep(towerTex(), 3, 0.08) })); plinth.position.set(TX, 0.4, TZ); R.room.group.add(plinth);
      const ring = new THREE.Mesh(new THREE.CylinderGeometry(TR + 0.3, TR + 0.3, 0.4, 28), lam({ map: tex('darkwood'), color: 0xc8a080 })); ring.position.set(TX, 13, TZ); R.room.group.add(ring);
      const roof = new THREE.Mesh(new THREE.ConeGeometry(TR + 1, 4.6, 28), lam({ map: rep(roofTex(), 4, 1) })); roof.position.set(TX, 15.5, TZ); R.room.group.add(roof);
      const fz = TZ + TR + 0.2;
      const win = canvasTex(24, 36, (c) => { c.fillStyle = '#3a2414'; c.beginPath(); c.moveTo(3, 36); c.lineTo(3, 12); c.quadraticCurveTo(12, -2, 21, 12); c.lineTo(21, 36); c.fill(); c.fillStyle = '#ffe2a8'; c.beginPath(); c.moveTo(5, 34); c.lineTo(5, 13); c.quadraticCurveTo(12, 1, 19, 13); c.lineTo(19, 34); c.fill(); c.fillStyle = '#f0b860'; c.fillRect(5, 26, 14, 8); c.fillStyle = '#3a2414'; c.fillRect(11, 4, 2, 30); c.fillRect(5, 20, 14, 1);
        c.fillStyle = '#6a9a58'; c.fillRect(0, 12, 3, 22); c.fillRect(21, 12, 3, 22); c.fillStyle = '#4a7a40'; for (let y = 14; y < 34; y += 4) { c.fillRect(0, y, 3, 1); c.fillRect(21, y, 3, 1); } }, 'ltwin3');
      R.decal(win, { x: TX, y: 8.9, z: fz, w: 1.8, h: 2.7, glow: true, noSlot: true });
      const box = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.45, 0.6), lam({ map: wc('fbox', '#8a5a34', ['#6a4020', '#a87a4a'], 32, 16, { edge: true }) })); box.position.set(TX, 7.45, fz + 0.15); R.room.group.add(box);
      R.sprite(flTex('rosebush'), TX, fz + 0.2, { y: 7.6, scale: 1.0, thin: true });
      R.sprite(flTex('rosebush'), TX - 2.0, TZ + TR - 0.1, { scale: 1.6, solid: 0.6 }); R.sprite(flTex('rosebush'), TX + 2.2, TZ + TR - 0.2, { scale: 1.4, flipX: true });
    }
    if (f.liz_hair) { const fz = TZ + TR + 0.35; R.room.group.add(braidTube([new THREE.Vector3(TX + 0.2, 8.2, fz + 0.1), new THREE.Vector3(TX + 0.5, 6.5, fz + 0.15), new THREE.Vector3(TX + 0.3, 4, fz + 0.1), new THREE.Vector3(TX + 0.6, 1.6, fz + 0.2), new THREE.Vector3(TX + 0.9, 0.12, fz + 0.9), new THREE.Vector3(TX + 2.2, 0.1, fz + 1.6), new THREE.Vector3(TX + 3.6, 0.1, fz + 1.0), new THREE.Vector3(TX + 3.2, 0.1, fz + 0.2), new THREE.Vector3(TX + 2.4, 0.1, fz + 0.7)], 0.3)); }
    fog(R, 0xf0e0c8, 40, 120); paintedBackdrop(R);
    // знак «Глава I» на столбике
    R.box(-10, -4.4, 0.2, 0.2, 3.4, { tex: 'darkwood', solid: false });
    R.decal(canvasTex(40, 30, (c) => { c.fillStyle = '#3a2a14'; c.fillRect(0, 0, 40, 30); c.fillStyle = '#efe0b8'; c.fillRect(2, 2, 36, 26); ptext(c, 'Глава I', 20, 6, { size: 8, col: '#5a0c18', align: 'center', font: '"Marck Script", cursive' }); ptext(c, 'в которой ждут', 20, 17, { size: 6, col: '#3a2a14', align: 'center' }); }, 'chap1'), { x: -10, y: 3.3, z: -4.25, w: 2.4, h: 1.8, noSlot: true });
    // деревья, кусты, цветы
    for (const [x, z, s, seed] of [[-12.5, -4.6, 1.5, 1], [-15.5, 1.2, 1.3, 2], [12.4, -4.2, 1.6, 3], [14.2, 2.6, 1.2, 4]] as number[][]) R.sprite(treeTex(seed, seed % 2 === 0), x, z, { scale: s, solid: 0.4 });
    for (let i = 0; i < 12; i++) { const x = -26 + i * 4.6 + (i % 3), z = -10 - (i % 4) * 1.6; R.sprite(treeTex(10 + i, i % 3 === 0), x, z, { scale: 1.4 + (i % 3) * 0.25 }); }
    R.sprite(flTex('cottage'), -19, -9.5, { scale: 1.5 });
    R.sprite(flTex('fence'), -6, -4.6, { scale: 1.2 }); R.sprite(flTex('fence'), -2.8, -4.6, { scale: 1.2 });
    for (const [x, z] of [[-13.6, -2.2], [-8.2, -3.4], [-4.8, -3.8], [9.2, -4.4], [-0.8, -4.2]]) R.sprite(flTex('sunflower'), x, z, { scale: 1.2 });
    for (const [x, z] of [[-11.2, -0.4], [-7, -2.2], [10.6, -1.6], [8.4, 3.6]]) R.sprite(flTex('lily'), x, z, { scale: 1.1 });
    for (const [x, z] of [[-9.2, -1.4], [-14, 3.4], [-5, 4.4], [0.8, 4.8], [-11, 5], [9.6, 1.4], [12, 5], [-1.8, -1.6], [-6.6, 0]]) R.sprite(flTex('daisies'), x, z, { scale: 1.3, thin: true });
    for (const [x, z] of [[-8.6, 3.8], [6.6, 4.4], [-3.4, -3]]) R.sprite(flTex('rosebush'), x, z, { scale: 1.1, thin: true });
    for (const [x, z] of [[-12.2, 2.4], [-4.2, 5.2], [10.8, 4.4]]) R.sprite(flTex('mushroom'), x, z, { scale: 1, thin: true });
    ink(R, 'облака', -7, 9.6, 4, -8); ink(R, 'башня (очень высокая)', 10.4, 9.6, 8, -4);
    R.npc('fairy', -3, 1.4, { talk: async (G: any) => { await G.run(L.drapIdle);
      if (G.state.mask === 'comedy' && !G.f.liz_fairy_c) { G.f.liz_fairy_c = 1; const p0 = G.cam.pitch, y0 = G.cam.yOff; G.sfx('laugh', { n: 5, f: 700, vol: 0.3 }); await camMove(G, { x: -3, z: 2, dist: 9, pitch: 0.36, yOff: 2 }, 0.9); await G.run(L.fairyC); G.toast('Мадам Драп проболталась: это пригодится внизу', '◐'); await camBack(G, p0, y0); }
      else if (!G.state.mask) maskHint(G, 'liz_c', 'Мадам Драп что-то недоговаривает. Маска Комедии (1) развязывает язык'); } });
    warmRig(R, 5.4, 1, { kind: 'petals', pcol: 0xffd0a0, count: 90, col: 0xffc070, y: 4 });
    R.inter('call', TX, TZ + TR + 0.7, { label: f.liz_hair ? 'Подняться по косе' : 'Позвать Лизу', fn: async (G) => { if (!f.liz_hair) { await G.run(L.call); f.liz_hair = 1; G.sfx('rope'); await G.rebuild(); return; } await G.run(L.climb); G.sfx('rope'); await G.goto('liz_top', 'start', { fade: 'page' }); } });
    R.spawn('start', -2, 3, 'r'); R.spawn('ground', TX, TZ + TR + 1.6);
  },
  async enter(G) { hud(G); if (!G.f.intro_liz) G.f.intro_liz = 1; if (G.f.intro_liz === 1 && (G.f.intro_liz = 2)) { G.focus(TX - 1, TZ - 1, 44); G.camSnap(); void camMove(G, { x: TX - 1, z: TZ + 1, dist: 30 }, 9); await G.run(L.arrive); G.unfocus(); } },
};
// ---------------- покои принцессы ----------------
const top: RoomDef = {
  name: 'Покои принцессы', w: 16, d: 10, music: 'fairy', amb: 'wind', step: 'wood', grade: BOOK,
  build(R, G) {
    fairyRoom(R, G); R.light(0, 5, 1, 0xfff0d0, 10, 12); warmRig(R, -2.6, 1.2, { kind: 'petals', pcol: 0xffc8d8, count: 60 });
    hairTrail(R, G); fairyRug(R, -0.6, 1.4, 6, 4.4, { a: '#7a5a9a', b: '#e8c890', c: '#c86a8a', d: '#4a2a5a' }, 'top');
    { const w = window3D(R, -4, { wall: 'n', y: 3.2, w: 2, h: 2.8, night: false, curtains: true }); const v = towerView(); w.traverse((o: any) => { if (o.isMesh && o.material?.isMeshBasicMaterial && o.material.map) o.material.map = v; }); }
    bookshelf(R, -6.7, -4.5, { w: 1.9, h: 3.4, shelves: 4 }); armchair(R, -5.4, 2.6, { col: 0xb58ad0, ry: 0.5 });
    canopyBed(R, 6.4, 0.4, -Math.PI / 2);
    // туалетный столик с лампочками
    R.table(1, -4.3, 1.9, 0.8, { tex: 'wood' }); mirror3D(R, 1, 2.75, -4.88, 1.1, 1.4, { bulbs: true });
    for (const [k, dx] of [['perfume', -0.6], ['powder', -0.2], ['comb', 0.25], ['bottle2', 0.6]] as [string, number][]) R.sprite(clutterTex(k), 1 + dx, -4.2, { y: 1.15, scale: 0.9 });
    R.sprite(PROPTEX.stool(), 1, -3.1, { scale: 1.1 });
    // мольберт с недописанным солнцем
    R.sprite(canvasTex(24, 40, (c) => { c.fillStyle = '#6a4428'; c.fillRect(4, 8, 2, 32); c.fillRect(18, 8, 2, 32); c.fillRect(11, 2, 2, 38); c.fillStyle = '#f4ecd8'; c.fillRect(2, 6, 20, 18); c.fillStyle = '#f2c230'; c.beginPath(); c.arc(12, 14, 4, 0, 7); c.fill(); c.strokeStyle = '#e8a030'; for (let k = 0; k < 8; k++) { const a = k / 8 * Math.PI * 2; c.beginPath(); c.moveTo(12 + Math.cos(a) * 5, 14 + Math.sin(a) * 5); c.lineTo(12 + Math.cos(a) * 7, 14 + Math.sin(a) * 7); c.stroke(); } c.fillStyle = '#86b058'; c.fillRect(2, 20, 20, 4); c.fillStyle = '#5a3a22'; c.fillRect(2, 24, 20, 2); }, 'leasel'), 3.4, -3.8, { scale: 1.3, solid: 0.4 });
    // прялка
    { const sp = new THREE.Group(); const wm = lam({ map: tex('wood') }), dm = lam({ map: tex('darkwood') }); const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.06, 6, 20), wm); wheel.position.y = 1.2; sp.add(wheel); for (let k = 0; k < 4; k++) { const s = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.04, 0.04), dm); s.rotation.z = k * Math.PI / 4; wheel.add(s); } const st = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.3, 0.35), dm); st.position.y = 0.4; sp.add(st); for (const sx of [-0.35, 0.35]) { const l = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.6, 0.07), dm); l.position.set(sx, 0.15, 0); sp.add(l); } const dist = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.12, 0.6, 6), lam({ color: 0xf0e0b0 })); dist.position.set(0.5, 1.0, 0); sp.add(dist); sp.position.set(-6.5, 0, 0.1); sp.rotation.y = 0.5; R.room.group.add(sp); R.onUpdate((dt) => { wheel.rotation.z += dt * 0.8; }); R.collider(-7.1, -0.3, -5.9, 0.5); }
    R.look('mirror', 1, -4, 'Зеркальце', L.mirror, { mask: 'none', egg: 'mirror_tale' }); R.look('mirrorC', 1, -4, 'Зеркальце', L.mirror, { mask: 'comedy', egg: 'mirror_tale' }); R.look('mirrorT', 1, -4, 'Зеркальце', L.mirror, { mask: 'tragedy' }); R.look('mirrorDr', 1, -4, 'Зеркальце', L.mirrorDr, { mask: 'drama' });
    // люстра, ключ висит в центре и светится
    chandelier(R, -1, 5.4, 0.3, 0.75, { light: 8 });
    if (!G.has('tower_key')) { const k = R.sprite('key', -1, 0.3, { y: 3.85, scale: 1.8, name: 'keySpr', glow: true });
      const halo = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 2.2), new THREE.MeshBasicMaterial({ map: canvasTex(32, 32, (c) => { const g = c.createRadialGradient(16, 16, 1, 16, 16, 16); g.addColorStop(0, 'rgba(255,230,140,.9)'); g.addColorStop(0.4, 'rgba(255,200,90,.35)'); g.addColorStop(1, 'rgba(255,200,90,0)'); c.fillStyle = g; c.fillRect(0, 0, 32, 32); }, 'lhalo'), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); halo.position.set(0, 0.45, -0.05); k.add(halo);
      const kl = new THREE.PointLight(0xffd070, 4, 4, 1.5); kl.position.set(0, 0.4, 0.4); k.add(kl);
      const string = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.8, 3), lam({ color: 0xd4ae48 })); string.position.set(0, 1.25, 0); k.add(string);
      R.onUpdate((_, t) => { k.position.y = 3.85 + Math.sin(t * 1.6) * 0.06; k.rotation.z = Math.sin(t * 1.1) * 0.08; }); }
    R.inter('lasso', -1, 1.4, { label: 'Ключ на люстре', cond: () => !G.has('tower_key'), fn: async (G) => { await G.run(L.lassoAsk); const r = await timing({ title: 'Лассо из косы', sub: 'Лиза бросает, скажи «сейчас!»', zone: 0.2, speed: 1.1 }); if (r === 'miss') { G.sfx('crash'); return G.run(L.lassoMiss); } G.sfx('rope'); const p0 = G.cam.pitch, y0 = G.cam.yOff; await camMove(G, { x: -1, z: 0.6, dist: 8.5, pitch: 0.3, yOff: 3.2 }, 0.6); G.flash(0.35); G.sfx('bell'); G.room.named.keySpr.visible = false; G.give('tower_key'); await G.wait(0.4); await G.run(L.lassoOk); await camBack(G, p0, y0, 0.8); } });
    R.door('down', 5.6, { label: 'Дверь вниз', z: -4.96, col: '#6a4a2a', cond: () => G.has('tower_key'), locked: ['~: Заперто. Ключ, на люстре.'], fn: async (G) => { if (!G.f.liz_win) await windowScene(G); if (!G.f.liz_door) { G.f.liz_door = 1; const dr = G.actor('drap'); if (dr) dr.hidden = false; void camMove(G, { x: 4.6, z: -2.6, dist: 9.5, pitch: 0.4, yOff: 1.8 }, 1.2); await G.run(L.door); await G.run(L.doorChoice); await camBack(G); } G.sfx('door'); await G.goto('liz_mid', 'start', { fade: 'page' }); } });
    { const dr = R.actor('fairy', 5.6, -3.4, { id: 'drap', dir: 'f' }); dr.hidden = true; }
    // книга сказки на пюпитре и окно, под которым лезет сэр Галахад
    R.sprite(canvasTex(18, 30, (c) => { c.fillStyle = '#5a3a20'; c.fillRect(8, 12, 2, 16); c.fillRect(4, 27, 10, 3); c.fillStyle = '#7a4a2a'; c.fillRect(1, 8, 16, 5); c.fillStyle = '#f4ecd8'; c.fillRect(2, 3, 7, 6); c.fillRect(9, 3, 7, 6); c.fillStyle = '#d4ae48'; c.fillRect(2, 9, 14, 1); c.fillStyle = '#8a7a60'; for (let y = 4; y < 8; y += 2) { c.fillRect(3, y, 5, 1); c.fillRect(10, y, 5, 1); } c.fillStyle = '#8e1830'; c.fillRect(8, 3, 2, 8); }, 'lbookstand'), 4.2, 2.2, { scale: 1.1, solid: 0.3 });
    R.inter('book', 4.2, 3.0, { label: 'Книга сказки', fn: async (G) => { if (G.f.liz_book) return G.run(L.bookAfter); G.f.liz_book = 1; G.sfx('note'); await G.run(L.book); await G.run(L.bookChoice); if (G.f.liz_page) { G.sfx('snip'); G.shake(0.3); } G.note('n_liz_book'); } });
    R.inter('window', -4, -3.5, { label: 'Окно: внизу кричат', fn: async (G) => { if (G.f.liz_win) return G.run(L.windowAgain); await windowScene(G); } });
    lizaNPC(R, G, -2.6, 1.6); R.spawn('start', -4, 2.4, 'b');
  },
  async enter(G) { hud(G); if (!G.f.liz_top) { G.f.liz_top = 1; // встреча: тёплый свет и лепестки на объятии
      void camMove(G, { x: -3, z: 1.8, dist: 10, pitch: 0.42, yOff: 1.8 }, 1.4); await warmOn(G, { int: 14, dur: 1.2 }); await G.run(L.top.slice(0, 2)); await warmOff(G); await camBack(G); await G.run(L.top.slice(2));
      maskHint(G, 'liz_dr', 'Зеркальце врёт по сюжету. Маска Драмы (3) покажет, как всё на самом деле'); } },
};
// ---------------- механизм башни ----------------
const mid: RoomDef = {
  name: 'Механизм башни', w: 28, d: 10, music: 'fairy', amb: 'wind', step: 'wood', grade: { ...BOOK, tint: [1.02, 0.98, 0.9] },
  async enter(G) { hud(G); if (!G.f.liz_res) { G.f.liz_res = 1; G.shake(0.3); G.sfx('gear'); await G.run(L.resist); } maskHint(G, 'liz_tr', 'На стенах башни кто-то что-то закрасил. Маска Трагедии (2) видит спрятанное'); },
  build(R, G) {
    const f = G.f; const W = R.w, D = R.d, H = 16, F = 26; R.room.group.userData.bg = 0x0c0810;
    // стены как в fairyRoom, но пол только по берегам провала
    const wt = muralTex(true); plane(R, W + 2, H, lam({ map: rep(wt, (W + 2) / 8, 1) }), 0, H / 2, -D / 2 + 0.01); for (const s of [-1, 1]) plane(R, D + F, H, lam({ map: rep(wt, (D + F) / 8, 1) }), s * W / 2, H / 2, F / 2, 0, -s * Math.PI / 2);
    const pt = plankTex(); for (const [x0, x1] of [[-W / 2, -3], [1, W / 2]]) plane(R, x1 - x0, D + F, lam({ map: rep(pt, (x1 - x0) / 4, (D + F) / 4) }), (x0 + x1) / 2, 0.004, F / 2, -Math.PI / 2);
    for (const s of [-1, 1]) { R.box(s * (W / 2 - 0.2), 0, 0.4, D, 0.5, { tex: 'darkwood', y: 7.2, solid: false, cast: false }); } R.box(0, -D / 2 + 0.22, W, 0.45, 0.5, { tex: 'darkwood', y: 7.2, solid: false, cast: false });
    R.ambient(0x7a6a50, 2.1, 0xfff0d0); R.particles('dust', { count: 60, top: 6, color: 0xb89858 }); R.light(-8, 4, -1, 0xffe0b0, 12, 12); R.light(8, 4, -1, 0xffe0b0, 12, 12);
    // провал
    abyss(R, -3, 1); R.collider(-3, -5, 1, -1.1); R.collider(-3, 1.1, 1, 5); const mid = R.collider(-3, -1.1, 1, 1.1); mid.on = !f.liz_bridge;
    R.box(1.4, -4.4, 0.3, 0.3, 0.3, { tex: 'metal', y: 2 }); R.sprite('hook', 1.5, -4.2, { y: 1.6, scale: 1.4 });
    if (f.liz_bridge) { R.room.group.add(braidTube([new THREE.Vector3(-3.4, 0.25, -0.3), new THREE.Vector3(-1, 0.05, -0.3), new THREE.Vector3(1.4, 0.25, -0.3)], 0.32)); R.room.group.add(braidTube([new THREE.Vector3(-3.4, 0.25, 0.4), new THREE.Vector3(-1, 0.05, 0.4), new THREE.Vector3(1.4, 0.25, 0.4)], 0.32)); }
    // механизм: сцепленные латунные шестерни на задней стене и одна огромная в провале
    paintedGear(R, -7, 4.4, -4.5, 1.8, 0.3); paintedGear(R, -4.3, 5.4, -4.6, 1.1, -0.49); paintedGear(R, -9.9, 2.6, -4.55, 1.2, -0.45);
    paintedGear(R, 4.6, 4.8, -4.5, 1.5, 0.22); paintedGear(R, 7.0, 3.2, -4.6, 0.9, -0.37); paintedGear(R, -1, -2.2, -3.6, 2.6, 0.12, { depth: 0.5 });
    { const chain = canvasTex(4, 32, (c) => { for (let y = 0; y < 32; y += 4) { c.fillStyle = '#5a5a60'; c.fillRect(1, y, 2, 3); c.fillStyle = '#9a9aa0'; c.fillRect(1, y, 1, 1); } }, 'lchain'); for (const x of [-5.6, 2.4, 9.8]) R.decal(chain, { x, y: 4.4, z: -4.9, w: 0.16, h: 5, noSlot: true }); }
    hairTrail(R, G, { xMax: -3.6 });
    R.inter('gap', -3.8, 0, { label: f.liz_bridge ? 'Мост из косы' : 'Провал', fn: async (G) => { if (f.liz_bridge) return G.run(L.bridgeAgain); await G.run(L.gap); await G.run(L.plan); await G.run(L.bridge); G.sfx('rope'); f.liz_bridge = 1; await G.rebuild(); } });
    // шестерня и гиря
    if (!G.has('gear') && !f.liz_gear) { R.sprite('gear', -9, -3, { scale: 1.3, name: 'gearSpr' }); R.inter('gear', -9, -2.2, { label: 'Груда шпилек', fn: async (G) => { await G.run(L.gearGot); G.give('gear'); G.room.named.gearSpr.visible = false; } }); }
    if (!G.has('weight') && !f.liz_weight) { R.sprite('weight', -11, 2, { scale: 1.6, name: 'wSpr' }); R.inter('weight', -11, 2.8, { label: 'Тяжёлая гиря', fn: async (G) => { await G.run(L.weightGot); G.give('weight'); G.room.named.wSpr.visible = false; } }); }
    R.sprite(PROPTEX.sandbag(), -12.4, -3.8, { scale: 1.4 }); R.sprite(PROPTEX.trunk(), -6.2, -4.2, { scale: 1.3 }); R.sprite(PROPTEX.coil(), 12.4, 3.4, { scale: 1.6, thin: true });
    // лифт
    R.box(8, -1, 4, 4, 0.3, { tex: 'wood', solid: false }); for (const [x, z] of [[6.2, -2.8], [9.8, -2.8]]) R.box(x, z, 0.2, 0.2, 6, { tex: 'darkwood' });
    R.sprite('wheel', 8, -2.9, { y: 4.4, scale: 1.8 }); R.box(11.6, -1, 1.2, 1.2, 0.4, { tex: 'metal' }); if (f.liz_weight) R.sprite('weight', 11.6, -1, { y: 0.4, scale: 1.4 });
    R.inter('lift', 8, 0.4, { label: 'Лифт-противовес', fn: async (G) => {
      if (G.has('gear')) { G.take('gear'); f.liz_gear = 1; G.sfx('gear'); } if (G.has('weight')) { G.take('weight'); f.liz_weight = 1; G.sfx('crash'); }
      if (!f.liz_gear || !f.liz_weight) { if (!f.liz_seen_lift) { f.liz_seen_lift = 1; await G.run(L.gearHole); } await G.rebuild(); return G.run(L.liftNeed(!!f.liz_gear, !!f.liz_weight)); }
      await G.run(L.liftReady); G.sfx('gear'); G.shake(0.2); await G.goto('liz_ground', 'start', { fade: 'page' }); } });
    // Трагедия: закрашенные палочки-дни на стене, видны только в маске
    R.decal(canvasTex(64, 32, (c) => { c.clearRect(0, 0, 64, 32); c.fillStyle = '#5a2a2a'; for (let i = 0; i < 46; i++) { const gx = (i % 10) * 6 + 2, gy = Math.floor(i / 10) * 6 + 2; for (let k = 0; k < 4; k++) c.fillRect(gx + k, gy, 1, 5); c.fillRect(gx - 1, gy + 2 + (i % 2), 6, 1); } }, 'ltally'), { x: -8, y: 2.4, z: -4.94, w: 3.2, h: 1.6, mask: 'tragedy', noSlot: true });
    R.look('tally', -8, -3.8, 'Царапины на стене', [(G: any) => { void camMove(G, { x: -8, z: -3.4, dist: 8, pitch: 0.32, yOff: 2.4 }, 1); G.sfx('mask'); }, ...L.tallyTr, (G: any) => { G.f.liz_tally = 1; return camBack(G); }], { mask: 'tragedy' });
    lizaNPC(R, G, -10.8, -1); R.spawn('start', -12, -1, 'r');
  },
};
// ---------------- нижний ярус ----------------
const ground: RoomDef = {
  name: 'Нижний ярус', w: 26, d: 11, music: 'fairy', amb: 'wind', step: 'stone', grade: BOOK,
  build(R, G) {
    const f = G.f; warmRig(R, -2, 1, { kind: 'petals', pcol: 0xffd8a0, count: 100, col: 0xffc880 }); fairyRoom(R, G, { cold: true, floor: tileTex('cold', ['#c89a78', '#b88a6a', '#d0a888', '#bc9478'], ['#8aa0c0', '#e8d8b8'], '#5a4030') }); R.light(0, 4, 0.5, 0xfff0d0, 14, 14);
    hairTrail(R, G); fairyRug(R, 0, 1.4, 7, 4.6, { a: '#3a6a6a', b: '#e8d0a0', c: '#d86a5a', d: '#1e3a3a' }, 'ground');
    R.door('exit', 0, { label: f.liz_cut ? 'Наружу' : 'Дверь «Только принцам»', col: '#6a4a2a', w: 3.2, h: 4.0, sign: 'ПРИНЦАМ', cond: () => !!f.liz_cut, locked: L.exitLocked, fn: outside });
    ink(R, 'ВЫХОД ТОЛЬКО ПРИНЦАМ', 0, 4.95, 8, -5.45);
    { const w = window3D(R, -6.5, { wall: 'n', y: 3.4, w: 1.4, h: 2.2, night: false, curtains: false }); const v = towerView(); w.traverse((o: any) => { if (o.isMesh && o.material?.isMeshBasicMaterial && o.material.map) o.material.map = v; }); }
    R.stairs(-10.4, -1.6, 2.4, 7, { tex: 'wood' });
    R.npc('fairy', 4, -1.4, { talk: async (G: any) => { if (f.liz_cut) return G.run(L.drapAfter); await groundScene(G); } });
    R.sprite('basket', 5, -0.6, { scale: 1.2 });
    for (const [x, z] of [[9.6, -4.3], [10.8, -3.6], [11.4, -4.6]]) { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.42, 1.2, 12), lam({ map: rep(plankTex(), 0.6, 0.4) })); b.position.set(x, 0.6, z); b.castShadow = true; R.room.group.add(b); for (const y of [0.2, 1.0]) { const hoop = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.03, 4, 16), lam({ map: tex('metal') })); hoop.rotation.x = Math.PI / 2; hoop.position.set(x, y, z); R.room.group.add(hoop); } R.collider(x - 0.5, z - 0.5, x + 0.5, z + 0.5); }
    R.sprite(PROPTEX.sandbag(), 8.4, -4.4, { scale: 1.3 }); R.sprite(flTex('lily'), -7.2, -4.4, { scale: 1.1 }); R.sprite('flowerpot', 7, -4.4, { scale: 1.4 }); R.sprite('flowerpot', -4.4, -4.5, { scale: 1.2 });
    for (const x of [-3.6, 3.6]) { R.decal(canvasTex(10, 14, (c) => { c.fillStyle = '#3a2414'; c.fillRect(4, 6, 2, 8); c.fillRect(1, 9, 8, 2); c.fillStyle = '#ffe0a0'; c.fillRect(2, 2, 6, 6); c.fillStyle = '#3a2414'; c.fillRect(1, 1, 8, 1); c.fillRect(1, 8, 8, 1); c.fillStyle = '#fff4c8'; c.fillRect(4, 3, 2, 3); }, 'llantern'), { x, y: 3.0, z: -5.45, w: 0.7, h: 1, glow: true, noSlot: true }); }
    R.light(-3.6, 3, -4.6, 0xffc880, 3, 6, { flicker: 0.06 }); R.light(3.6, 3, -4.6, 0xffc880, 3, 6, { flicker: 0.06 });
    if (f.liz_cut) braidCoil(R, -2, -3);
    const lz = R.actor(f.liz_cut ? 'liza_short' : 'liza_long', -2, 1, { id: 'liza' }); G.follow(lz); R.spawn('start', -6, 2, 'r');
  },
  async enter(G) { hud(G); if (!G.f.liz_gr) { G.f.liz_gr = 1; await groundScene(G); } },
};
async function groundScene(G: any) {
  if (G.f.liz_cut) return; void camMove(G, { x: 1, z: 0, dist: 15, pitch: 0.46, yOff: 1.6 }, 1.6); await G.run(L.ground); await G.run(L.groundMask); G.audio.music('fairy', { fade: 1.5 }); await G.run(L.choice);
  // стрижка: низкий крупный план, тишина, щелчок, вспышка; потом тёплый свет и музыкальная шкатулка
  G.audio.music(null, { fade: 0.8 }); { const lz = G.actor('liza'), p = G.player; await camMove(G, { x: lz ? (lz.x + p.x) / 2 : p.x, z: (lz ? Math.max(lz.z, p.z) : p.z) + 0.4, dist: 8.8, pitch: 0.3, yOff: 1.7 }, 1.2); } await G.wait(0.9);
  G.sfx('snip'); G.flash(0.45); G.shake(0.15); await G.run(L.cut.slice(0, 1)); G.f.liz_cut = 1; G.actor('liza').setChar('liza_short'); G.sfx('snip'); await G.wait(0.5);
  void warmOn(G, { int: 18, dur: 2.2, music: 'musicbox' }); void camMove(G, { dist: 9.5, pitch: 0.4, yOff: 1.8 }, 5); await G.run(L.cut.slice(1)); await warmOff(G, 0.6); await camBack(G, 0.56, 1.2, 0.6); await G.rebuild();
}
/** Сэр Галахад лезет спасать: правило «принц спасает». */
async function windowScene(G: any) {
  const f = G.f; f.liz_win = 1; void camMove(G, { x: -3.4, z: -2.4, dist: 10, pitch: 0.38, yOff: 2.2 }, 1.2); await G.run(L.window); await G.run(L.windowChoice); G.sfx('crash'); G.shake(0.25); await G.run(L.windowEnd); await camBack(G);
}
/** Лес: сэр Галахад опоздал, страницы белеют, все смотрят на Варю. Потом выбирает Лиза. */
async function outside(G: any) {
  const f = G.f; await G.goto('liz_base', 'ground', { fade: 'page' }); const B = new (await import('../world/room')).Builder(G.room, G);
  const lz = B.actor('liza_short', 5.4, 1.6, { id: 'liza2' }); lz.face(-10, 2); const drap = G.room.actors.find((a: any) => a.id === 'fairy')!; drap.hidden = true;
  const horse = B.sprite('horse', -18, 3, { scale: 1.6 }); const pr = B.actor('prince', -18, 3.2, { id: 'prince' }); pr.y = 0.9; G.focus(-2, 2, 22);
  await G.wait(0.4); G.sfx('engine'); const t0 = performance.now();
  if (!G.fast) await new Promise<void>((res) => { const tick = () => { const k = Math.min(1, (performance.now() - t0) / 1800); horse.position.x = -18 + k * 16; pr.x = horse.position.x; if (k < 1) requestAnimationFrame(tick); else res(); }; tick(); }); else { horse.position.x = -2; pr.x = -2; }
  pr.face(lz.x, lz.z); await G.run(L.out1.slice(0, 5)); pr.face(G.player.x, G.player.z); await G.run(L.out1.slice(5)); G.note('n_liz_saved');
  // страницы белеют: цвет уходит из кадра, Мадам Драп выбегает с книгой
  drap.place(TX - 2.2, TZ + TR + 1.4, 'r'); drap.hidden = false; const g0 = { ...G.gradeBase }; G.grade({ sat: 0.45, bright: 1.12 }); await G.run(L.out2);
  let k = 0; await G.run([{ c: [['«Лиза, вернись. Пусть сказка сойдётся»', [() => { k = 1; }]], ['Молчать. Это не моя реплика', [() => { k = 2; }]]] }]);
  if (k === 1) { f.liz_back = 1; inc(G, 'liz_script'); await G.run(L.outBack.slice(0, 2)); lz.hidden = true; G.grade({ sat: 1.25, bright: 1.0 }); G.audio.music('fairy'); await G.run(L.outBack.slice(2, 8)); G.audio.music(null); G.flash(0.6); await G.run(L.outBack.slice(8, 9)); lz.hidden = false; G.grade({ sat: 0.45, bright: 1.12 }); await G.run(L.outBack.slice(9)); }
  else { inc(G, 'liz_ask'); await G.run(L.outSilent); }
  // выбор Лизы: шаг на ненарисованную бумагу или своя сказка на обороте последней страницы
  await camMove(G, { x: 4.4, z: 1.6, dist: 11, pitch: 0.3, yOff: 2.2 }, 1.4); await G.wait(0.6); f.liz_endk = f.liz_back ? 'back' : (f.liz_pen && (f.liz_ask || 0) >= 2) ? 'newtale' : 'free';
  const tale = !!f.liz_pen && (f.liz_ask || 0) >= 2; await G.run((tale ? L.endTale : L.endFree).slice(0, 4)); G.gradeBase = g0; G.applyGrade(); void warmOn(G, { int: 20, dur: 2.4, music: 'musicbox', grade: { bloom: 1.0 } });
  await G.run((tale ? L.endTale : L.endFree).slice(4)); void lz.walkTo(9.5, 2.2, 1.6); await G.run(L.outEnd); await camBack(G, 0.27, 4.4, 1.4); G.sfx('applause', { dur: 3 });
  await finishChapter(G, 'liza', [['THE TOWER IS NOT A HOME', 'act'], f.liz_endk === 'back' ? 'Ты вернула Лизу в башню. Сказка сошлась, а Лиза нет. Хорошо, что страницу можно перелистнуть.' : f.liz_endk === 'newtale' ? '«Жила-была Лиза. Дальше она сама».' : 'Лиза ушла сама. Туда, где ещё ничего не нарисовано.', ['Дом это не место, где тебя заперли. Дом это то, что выбираешь.', 'sm']]);
}
export const rooms: Record<string, RoomDef> = { liz_base: base, liz_top: top, liz_mid: mid, liz_ground: ground };
