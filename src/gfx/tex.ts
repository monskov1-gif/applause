// Процедурные пиксельные текстуры (рампа + шум + дизеринг Bayer 4×4), декали с текстом и спрайты реквизита.
// Единая плотность: 16 текселей на мировую единицу.
import * as THREE from 'three';
export const PPU = 16;
const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
function hash(x: number, y: number, s = 0) { let h = (x * 374761393 + y * 668265263 + s * 982451653) | 0; h = (h ^ (h >> 13)) * 1274126177 | 0; return ((h ^ (h >> 16)) >>> 0) / 4294967295; }
function vnoise(x: number, y: number, per: number, s = 0) { // бесшовный value-noise
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi, m = (a: number) => ((a % per) + per) % per;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash(m(xi), m(yi), s), b = hash(m(xi + 1), m(yi), s), c = hash(m(xi), m(yi + 1), s), d = hash(m(xi + 1), m(yi + 1), s);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
function fbm(x: number, y: number, size: number, s = 0) { return vnoise(x / size * 4, y / size * 4, 4, s) * 0.55 + vnoise(x / size * 8, y / size * 8, 8, s + 1) * 0.3 + vnoise(x / size * 16, y / size * 16, 16, s + 2) * 0.15; }
const hex = (h: string) => { const n = parseInt(h, 16); return [n >> 16, (n >> 8) & 255, n & 255]; };
const ramp = (s: string) => s.split(' ').map(hex);

const RAMPS: Record<string, number[][]> = {
  wood: ramp('2e1f15 45301f 5a4029 6e5133 82623f 98764d'), floor: ramp('3d2817 53371f 684628 7c5631 8f673c'),
  darkwood: ramp('1c130e 2a1c14 38261a 453021 543b28'), velvet: ramp('3a0810 560c18 721022 8e1830 a82840'),
  plaster: ramp('8a7a68 9c8c78 ad9d88 bcae98 cabda8'), stone: ramp('3c3a37 524f4a 69655e 807b72 978f84'),
  brick: ramp('3a1c18 54261e 6e3226 86402e 9a5038'), gold: ramp('5a4010 86641c b08a2c d4ae48 f0d478'),
  carpet: ramp('4a0c14 62101c 7a1626 8e2030'), metal: ramp('23262c 343841 484e59 5e6673 78818f'),
  black: ramp('0c0a0c 141216 1c1a20 24222a'), neon: ramp('0a0a18 12122a 1c1c40 2a2a5a'),
  asphalt: ramp('16181c 1e2126 282c33 343943 444a56'), grass: ramp('1f2e18 283a1e 334823 3e5629 4b6431'),
  dirt: ramp('2b2019 35281e 403024 4b392a 574332'), paper: ramp('c9b88a d6c79a e2d5ac ecdfbc f4eacb'),
  white: ramp('b8b8c4 cacad4 dadae2 e8e8ee f4f4f8'), tileb: ramp('18181c 26262c'), concrete: ramp('4a4a4e 5a5a5e 6a6a6e 7a7a7e'),
  schoolfloor: ramp('a88a5a b89a68 c8aa78 d6ba88'), pink: ramp('c85a90 d870a4 e888b8 f4a4cc'), sky: ramp('6a9ad8 82aee4 9cc2ee b8d6f6'),
  night: ramp('0a0e1c 101628 182036 222c48'), green: ramp('24402e 2e5038 3a6244 48745a'), blue: ramp('1a2440 24325a 304274 3e548e'),
};
const cache = new Map<string, THREE.CanvasTexture>();
function finish(cv: HTMLCanvasElement, repeat = true) {
  const t = new THREE.CanvasTexture(cv); t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.generateMipmaps = false;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; return t;
}
type PatFn = (x: number, y: number, S: number) => number | [number, number[][]];
const PAT: Record<string, { size: number; ramp: string; fn: PatFn; dither?: number; u?: number }> = {
  floor: { u: 0.6, size: 64, ramp: 'floor', fn: (x, y, S) => { const row = Math.floor(y / 8), off = (row * 23) % 32, px = (x + off) % 32; if (y % 8 === 0 || px === 0) return 0.05; return 0.35 + fbm(x * 3, y + row * 40, S, row) * 0.55 + hash(Math.floor((x + off) / 32), row) * 0.2; } },
  parquet: { u: 0.45, size: 32, ramp: 'wood', fn: (x, y, S) => { const bx = Math.floor(x / 16), by = Math.floor(y / 16), v = (bx + by) % 2; const u = v ? x % 16 : y % 16, w = v ? y % 4 : x % 4; if (u === 0 || w === 0) return 0.1; return 0.4 + fbm(v ? x : y * 3, v ? y * 3 : x, S, 3) * 0.5 + v * 0.08; } },
  wood: { size: 32, ramp: 'wood', fn: (x, y, S) => { const row = Math.floor(y / 8); if (y % 8 === 0) return 0.05; return 0.3 + fbm(x * 2, y + row * 30, S, row + 50) * 0.6; } },
  darkwood: { size: 32, ramp: 'darkwood', fn: (x, y, S) => { const col = Math.floor(x / 8); if (x % 8 === 0) return 0.05; return 0.3 + fbm(x + col * 30, y * 2, S, col + 60) * 0.6; } },
  stage: { size: 64, ramp: 'darkwood', fn: (x, y, S) => { const col = Math.floor(x / 8); if (x % 8 === 0) return 0.05; return 0.3 + fbm(x + col * 30, y * 3, S, col) * 0.6; } },
  woodwall: { size: 32, ramp: 'darkwood', fn: (x, y, S) => { if (x % 16 === 0 || y % 32 === 31) return 0.02; if (x % 16 === 1) return 0.9; return 0.35 + fbm(x * 2, y, S, 5) * 0.5; } },
  velvet: { size: 32, ramp: 'velvet', fn: (x, y) => 0.5 + Math.sin(x / 32 * Math.PI * 6) * 0.42 + hash(x, y) * 0.08 },
  plaster: { size: 64, ramp: 'plaster', fn: (x, y, S) => 0.3 + fbm(x, y, S, 7) * 0.6 },
  wallpaper: { size: 32, ramp: 'velvet', dither: 0.1, fn: (x, y) => { const u = (x % 16) - 8, v = ((y + (Math.floor(x / 16) % 2) * 8) % 16) - 8; const d = Math.abs(u) + Math.abs(v); return d < 3 ? 0.75 : d < 5 ? 0.15 : 0.35 + hash(x, y) * 0.1; } },
  wallgreen: { size: 32, ramp: 'green', dither: 0.1, fn: (x, y) => { const u = (x % 16) - 8, v = (y % 16) - 8; const d = Math.abs(u) + Math.abs(v); if (x % 16 === 0) return 0.1; return d < 3 ? 0.85 : 0.4 + hash(x, y) * 0.15; } },
  brick: { size: 32, ramp: 'brick', fn: (x, y, S) => { const row = Math.floor(y / 8), px = (x + (row % 2) * 8) % 16; if (y % 8 === 0 || px === 0) return [0.3, RAMPS.stone]; return 0.3 + hash(Math.floor((x + (row % 2) * 8) / 16), row) * 0.45 + fbm(x, y, S, 2) * 0.25; } },
  stone: { size: 32, ramp: 'stone', fn: (x, y, S) => { const row = Math.floor(y / 11), px = (x + (row % 2) * 9) % 18; if (y % 11 === 0 || px === 0) return 0.02; return 0.3 + hash(Math.floor((x + (row % 2) * 9) / 18), row, 4) * 0.4 + fbm(x, y, S, 9) * 0.3; } },
  gold: { size: 16, ramp: 'gold', fn: (x, y) => 0.5 + Math.sin((x + y) / 16 * Math.PI * 2) * 0.35 + hash(x, y) * 0.15 },
  carpet: { u: 0.55, size: 32, ramp: 'carpet', dither: 0.35, fn: (x, y) => { const d1 = (x + y) % 16, d2 = (x - y + 64) % 16; if ((d1 === 0 || d2 === 0) && (x % 16 < 8) === (y % 16 < 8)) return [0.45, RAMPS.gold]; if (x % 16 === 8 && y % 16 === 0) return [0.8, RAMPS.gold]; return 0.42 + hash(x, y) * 0.32; } },
  metal: { size: 32, ramp: 'metal', fn: (x, y, S) => { if (x % 32 === 0 || y % 32 === 0) return 0.05; if ((x % 32 === 3 || x % 32 === 28) && (y % 32 === 3 || y % 32 === 28)) return 0.95; return 0.45 + fbm(x * 4, y, S, 11) * 0.35; } },
  black: { size: 16, ramp: 'black', fn: (x, y) => 0.3 + hash(x, y) * 0.5 },
  neon: { size: 32, ramp: 'neon', dither: 0.05, fn: (x, y) => (x % 16 === 0 || y % 16 === 0) ? [0.9, [[30, 220, 230]]] : 0.3 + hash(x, y) * 0.2 },
  asphalt: { size: 64, ramp: 'asphalt', fn: (x, y, S) => { const v = fbm(x, y, S, 13); return v > 0.62 ? 0.95 : 0.2 + v * 0.6; } },
  cobble: { size: 32, ramp: 'asphalt', fn: (x, y) => { const row = Math.floor(y / 8), px = (x + (row % 2) * 5) % 10; if (y % 8 === 0 || px === 0) return 0.02; return 0.35 + hash(Math.floor((x + (row % 2) * 5) / 10), row, 6) * 0.6; } },
  grass: { size: 64, ramp: 'grass', dither: 0.35, fn: (x, y, S) => 0.2 + fbm(x, y, S, 17) * 0.6 + (hash(x, y) > 0.9 ? 0.25 : 0) },
  dirt: { size: 64, ramp: 'dirt', dither: 0.3, fn: (x, y, S) => 0.2 + fbm(x, y, S, 19) * 0.7 },
  paper: { size: 64, ramp: 'paper', dither: 0.3, fn: (x, y, S) => 0.35 + fbm(x, y, S, 23) * 0.5 + (hash(x, y) > 0.97 ? -0.3 : 0) },
  paperstone: { size: 32, ramp: 'paper', fn: (x, y, S) => { const row = Math.floor(y / 11), px = (x + (row % 2) * 9) % 18; if (y % 11 === 0 || px === 0) return [0.4, RAMPS.wood]; return 0.3 + hash(Math.floor((x + (row % 2) * 9) / 18), row, 4) * 0.5; } },
  white: { size: 32, ramp: 'white', fn: (x, y, S) => 0.5 + fbm(x, y, S, 29) * 0.4 },
  gloss: { size: 32, ramp: 'white', dither: 0.1, fn: (x, y) => (x % 32 === 0 || y % 32 === 0) ? 0.1 : 0.75 + ((x + y) % 32 < 4 ? 0.25 : 0) },
  checker: { u: 0.5, size: 32, ramp: 'tileb', dither: 0, fn: (x, y) => ((Math.floor(x / 16) + Math.floor(y / 16)) % 2) ? [0.5, RAMPS.white] : 0.5 },
  concrete: { size: 64, ramp: 'concrete', fn: (x, y, S) => 0.3 + fbm(x, y, S, 31) * 0.6 },
  schoolfloor: { size: 32, ramp: 'schoolfloor', fn: (x, y, S) => (y % 16 === 0 || (x + Math.floor(y / 16) * 16) % 32 === 0) ? 0.1 : 0.45 + fbm(x * 3, y, S, 37) * 0.45 },
  schoolwall: { size: 32, ramp: 'white', dither: 0.15, fn: (x, y) => 0.65 + hash(x, y) * 0.2 },
  led: { size: 16, ramp: 'pink', dither: 0, fn: (x, y) => (x % 4 === 0 || y % 4 === 0) ? [0.2, RAMPS.black] : 0.3 + hash(Math.floor(x / 4), Math.floor(y / 4), 2) * 0.7 },
  sky: { size: 64, ramp: 'sky', dither: 0.4, fn: (x, y, S) => 0.2 + (1 - y / S) * 0.6 + fbm(x, y, S, 41) * 0.2 },
  night: { size: 64, ramp: 'night', dither: 0.4, fn: (x, y, S) => hash(x, y) > 0.992 ? [0.9, RAMPS.white] : 0.2 + (y / S) * 0.5 + fbm(x, y, S, 43) * 0.2 },
  blue: { size: 32, ramp: 'blue', fn: (x, y, S) => 0.3 + fbm(x, y, S, 47) * 0.6 },
  mirror: { size: 32, ramp: 'white', dither: 0.2, fn: (x, y) => { const d = (x + y * 2) % 32; return d < 3 ? 0.95 : d < 14 ? 0.5 : 0.3; } },
};
export function tex(kind: string, tint?: string): THREE.CanvasTexture {
  const key = kind + (tint || ''); let t = cache.get(key); if (t) return t;
  const p = PAT[kind]; if (!p) { console.warn('[tex] нет текстуры', kind); return tex('plaster'); }
  const S = p.size, cv = document.createElement('canvas'); cv.width = cv.height = S; const c = cv.getContext('2d')!, img = c.createImageData(S, S);
  const tn = tint ? hex(tint.replace('#', '')) : null;
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    let r = p.fn(x, y, S), rp = RAMPS[p.ramp], v: number;
    if (Array.isArray(r)) { v = r[0]; rp = r[1]; } else v = r;
    v += (BAYER[(y & 3) * 4 + (x & 3)] / 16 - 0.5) * (p.dither ?? 0.22);
    let col = rp[Math.max(0, Math.min(rp.length - 1, Math.floor(v * rp.length)))];
    if (tn && rp === RAMPS[p.ramp]) { const l = (col[0] * 0.3 + col[1] * 0.6 + col[2] * 0.1) / 160; col = [Math.min(255, tn[0] * l), Math.min(255, tn[1] * l), Math.min(255, tn[2] * l)]; }
    const i = (y * S + x) * 4; img.data[i] = col[0]; img.data[i + 1] = col[1]; img.data[i + 2] = col[2]; img.data[i + 3] = 255;
  }
  c.putImageData(img, 0, 0); t = finish(cv); (t as any).unit = S / PPU * (p.u ?? 1); cache.set(key, t); return t;
}
export function canvasTex(w: number, h: number, draw: (c: CanvasRenderingContext2D, w: number, h: number) => void, key?: string): THREE.CanvasTexture {
  if (key && cache.has(key)) return cache.get(key)!;
  let cv = document.createElement('canvas'); cv.width = w; cv.height = h; const c = cv.getContext('2d')!; c.imageSmoothingEnabled = false;
  // текст на мелком холсте превращается в кашу: если в рисунке есть текст, перерисовываем в 3x (пиксель-арт остаётся тем же)
  let usedText = false, usedPixels = false; const ft = c.fillText.bind(c), st = c.strokeText.bind(c), gi = c.getImageData.bind(c);
  c.fillText = (...a: any[]) => { usedText = true; return (ft as any)(...a); }; c.strokeText = (...a: any[]) => { usedText = true; return (st as any)(...a); }; c.getImageData = (...a: any[]) => { usedPixels = true; return (gi as any)(...a); };
  draw(c, w, h);
  if (usedText && !usedPixels && w * h <= 512 * 512) { const k = 3; const cv2 = document.createElement('canvas'); cv2.width = w * k; cv2.height = h * k; const c2 = cv2.getContext('2d')!; c2.imageSmoothingEnabled = false; c2.scale(k, k); draw(c2, w, h); cv = cv2; }
  const t = finish(cv, false); t.userData.lw = w; t.userData.lh = h; if (key) cache.set(key, t); return t;
}
export const PIX = '"Pixelify Sans", monospace';
/** Пиксельный текст с переносом строк. */
export function ptext(c: CanvasRenderingContext2D, s: string, x: number, y: number, o: { size?: number; col?: string; w?: number; align?: CanvasTextAlign; font?: string; lh?: number } = {}) {
  const size = o.size || 8; c.font = `${size}px ${o.font || PIX}`; c.fillStyle = o.col || '#111'; c.textAlign = o.align || 'left'; c.textBaseline = 'top';
  const lines: string[] = [];
  for (const para of s.split('\n')) { if (!o.w) { lines.push(para); continue; } let cur = ''; for (const wd of para.split(' ')) { const t = cur ? cur + ' ' + wd : wd; if (c.measureText(t).width > o.w && cur) { lines.push(cur); cur = wd; } else cur = t; } lines.push(cur); }
  lines.forEach((l, i) => c.fillText(l, x, y + i * (o.lh || size + 2)));
  return lines.length * (o.lh || size + 2);
}
type DC = CanvasRenderingContext2D;
const r = (c: DC, x: number, y: number, w: number, h: number, col: string) => { c.fillStyle = col; c.fillRect(x, y, w, h); };
/** Афиша / вывеска / записка. */
export function poster(title: string, sub = '', o: { bg?: string; fg?: string; w?: number; h?: number; frame?: string; size?: number; face?: string; motif?: string } = {}) {
  const w = o.w ? Math.max(40, Math.round(o.w * 22)) : 40, h = o.h ? Math.max(56, Math.round(o.h * 22)) : 56;
  let hsh = 0; for (const ch of title) hsh = (hsh * 31 + ch.charCodeAt(0)) >>> 0; const motif = o.motif || ['mask', 'crown', 'rose', 'dancer', 'moon', 'curtain'][hsh % 6];
  return canvasTex(w, h, (c) => {
    r(c, 0, 0, w, h, o.frame || '#3a2a14'); const g = c.createLinearGradient(0, 0, 0, h); const bg = o.bg || ['#e2d5ac', '#f0e0c0', '#d8c8a0', '#e8d0c0'][hsh % 4]; g.addColorStop(0, bg); g.addColorStop(1, '#a8906a'); c.fillStyle = g; c.fillRect(1, 1, w - 2, h - 2);
    c.strokeStyle = 'rgba(90,12,24,.6)'; c.strokeRect(3.5, 3.5, w - 7, h - 7);
    const cx = w / 2, my = h * 0.38, fg = o.fg || '#5a0c18'; c.fillStyle = fg;
    if (o.face) { r(c, cx - 7, my - 10, 14, 16, o.face); r(c, cx - 9, my - 12, 18, 6, '#2a1512'); r(c, cx - 10, my - 8, 3, 18, '#2a1512'); r(c, cx + 7, my - 8, 3, 18, '#2a1512'); r(c, cx - 8, my + 6, 16, 9, '#a3122a'); r(c, cx - 4, my - 4, 2, 2, '#2a1512'); r(c, cx + 2, my - 4, 2, 2, '#2a1512'); r(c, cx - 2, my + 1, 4, 1, '#b3122e'); }
    else if (motif === 'mask') { c.beginPath(); c.ellipse(cx - 4, my, 7, 9, -0.2, 0, 7); c.fill(); c.fillStyle = bg; c.fillRect(cx - 8, my - 3, 3, 2); c.fillRect(cx - 2, my - 3, 3, 2); c.fillStyle = '#b08a2c'; c.beginPath(); c.ellipse(cx + 5, my + 3, 6, 8, 0.3, 0, 7); c.fill(); }
    else if (motif === 'crown') { c.beginPath(); c.moveTo(cx - 10, my + 6); c.lineTo(cx - 10, my - 6); c.lineTo(cx - 5, my); c.lineTo(cx, my - 9); c.lineTo(cx + 5, my); c.lineTo(cx + 10, my - 6); c.lineTo(cx + 10, my + 6); c.fill(); }
    else if (motif === 'rose') { for (let k = 0; k < 5; k++) { c.beginPath(); c.arc(cx + Math.cos(k * 1.26) * 4, my + Math.sin(k * 1.26) * 4, 5, 0, 7); c.fill(); } r(c, cx - 1, my + 6, 2, 12, '#2e5038'); }
    else if (motif === 'dancer') { r(c, cx - 1, my - 10, 3, 3, fg); r(c, cx - 1, my - 7, 3, 9, fg); r(c, cx - 7, my - 9, 6, 1, fg); r(c, cx + 2, my - 12, 1, 6, fg); c.beginPath(); c.ellipse(cx, my + 2, 8, 2, 0, 0, 7); c.fill(); r(c, cx - 1, my + 3, 1, 9, fg); r(c, cx + 1, my + 3, 5, 1, fg); }
    else if (motif === 'moon') { c.beginPath(); c.arc(cx, my, 9, 0, 7); c.fill(); c.fillStyle = bg; c.beginPath(); c.arc(cx + 4, my - 2, 8, 0, 7); c.fill(); }
    else { for (let k = 0; k < 6; k++) r(c, 5 + k * ((w - 10) / 6), 5, (w - 10) / 12, h * 0.55, k % 2 ? '#8e1830' : '#5a0c18'); }
    const y0 = h * 0.6; const hh = ptext(c, title, cx, y0, { size: o.size || 8, col: fg, w: w - 6, align: 'center' });
    if (sub) ptext(c, sub, cx, y0 + hh + 1, { size: 6, col: '#3a2a14', w: w - 6, align: 'center', lh: 7 });
    r(c, 6, h - 7, w - 12, 1, 'rgba(58,42,20,.5)'); r(c, 9, h - 5, w - 18, 1, 'rgba(58,42,20,.35)');
  }, 'poster|' + title + sub + JSON.stringify(o));
}
// ---------- спрайты реквизита ----------
export const PROPS: Record<string, { w: number; h: number; draw: (c: DC) => void }> = {
  tree: { w: 48, h: 72, draw: (c) => { r(c, 21, 40, 6, 32, '#2c2019'); r(c, 23, 40, 2, 32, '#3a2b21'); for (const [x, y, w, h, col] of [[6, 8, 36, 30, '#1c2a16'], [2, 18, 44, 20, '#26381b'], [10, 4, 26, 14, '#324820'], [8, 14, 18, 12, '#405a27'], [26, 22, 14, 10, '#324820']] as any) r(c, x, y, w, h, col); } },
  pine: { w: 40, h: 80, draw: (c) => { r(c, 18, 60, 4, 20, '#1e1612'); for (let i = 0; i < 6; i++) { r(c, 20 - 4 - i * 3, 6 + i * 10, 8 + i * 6, 12, i % 2 ? '#16241d' : '#1d3024'); r(c, 20 - 3 - i * 3, 6 + i * 10, 3, 2, '#263c2c'); } } },
  bush: { w: 24, h: 16, draw: (c) => { r(c, 2, 5, 20, 11, '#26381b'); r(c, 5, 2, 14, 6, '#324820'); r(c, 6, 3, 4, 2, '#405a27'); } },
  sakura: { w: 48, h: 72, draw: (c) => { r(c, 21, 40, 6, 32, '#4a382a'); for (const [x, y, w, h, col] of [[6, 8, 36, 28, '#e888b8'], [2, 18, 44, 18, '#f4a4cc'], [10, 4, 26, 14, '#f8c0dc'], [8, 14, 12, 8, '#fde0ee'], [28, 24, 12, 8, '#d870a4']] as any) r(c, x, y, w, h, col); } },
  lamp: { w: 12, h: 44, draw: (c) => { r(c, 5, 10, 2, 32, '#2a2a2e'); r(c, 2, 42, 8, 2, '#2a2a2e'); r(c, 1, 2, 10, 9, '#f4d890'); r(c, 2, 1, 8, 1, '#c8a850'); r(c, 3, 4, 6, 5, '#fff4c8'); } },
  streetlamp: { w: 14, h: 64, draw: (c) => { r(c, 6, 10, 2, 54, '#1a1a1e'); r(c, 3, 62, 8, 2, '#1a1a1e'); r(c, 2, 2, 10, 9, '#f0f0d8'); r(c, 1, 0, 12, 2, '#1a1a1e'); } },
  chair: { w: 14, h: 22, draw: (c) => { r(c, 2, 0, 10, 12, '#721022'); r(c, 1, 0, 1, 22, '#86641c'); r(c, 12, 0, 1, 22, '#86641c'); r(c, 1, 12, 12, 3, '#8e1830'); r(c, 3, 2, 8, 8, '#8e1830'); } },
  plant: { w: 16, h: 28, draw: (c) => { r(c, 4, 20, 8, 8, '#7a4a2a'); r(c, 7, 8, 2, 12, '#2e5038'); r(c, 2, 4, 5, 10, '#3a6244'); r(c, 9, 2, 5, 12, '#48745a'); r(c, 5, 0, 4, 8, '#3a6244'); } },
  bust: { w: 16, h: 30, draw: (c) => { r(c, 2, 20, 12, 10, '#69655e'); r(c, 1, 19, 14, 2, '#807b72'); r(c, 4, 4, 8, 10, '#cabda8'); r(c, 3, 14, 10, 5, '#bcae98'); r(c, 4, 2, 8, 3, '#ad9d88'); r(c, 6, 8, 1, 1, '#555'); r(c, 9, 8, 1, 1, '#555'); r(c, 6, 11, 4, 1, '#8a7a68'); } },
  bustfun: { w: 16, h: 30, draw: (c) => { PROPS.bust.draw(c); r(c, 5, 7, 3, 3, '#fff'); r(c, 9, 7, 3, 3, '#fff'); r(c, 6, 8, 1, 1, '#000'); r(c, 10, 8, 1, 1, '#000'); r(c, 5, 11, 6, 1, '#a22'); r(c, 6, 12, 4, 1, '#a22'); r(c, 3, 0, 10, 3, '#e84a6f'); r(c, 6, -1, 4, 2, '#f2c230'); } },
  masks: { w: 30, h: 14, draw: (c) => { for (const [x, col, m] of [[0, '#f2c230', 0], [10, '#6a8ad0', 1], [20, '#d86a8a', 2]] as any) { r(c, x + 1, 1, 8, 11, col); r(c, x + 2, 0, 6, 1, col); r(c, x + 2, 12, 6, 1, col); r(c, x + 2, 4, 2, 2, '#111'); r(c, x + 6, 4, 2, 2, '#111'); if (m === 0) { r(c, x + 2, 8, 6, 1, '#111'); r(c, x + 3, 9, 4, 1, '#111'); } if (m === 1) { r(c, x + 3, 8, 4, 1, '#111'); r(c, x + 2, 9, 1, 1, '#111'); r(c, x + 7, 9, 1, 1, '#111'); } if (m === 2) r(c, x + 3, 9, 4, 1, '#111'); } } },
  ladder: { w: 20, h: 60, draw: (c) => { r(c, 2, 0, 2, 60, '#5a4029'); r(c, 16, 0, 2, 60, '#5a4029'); for (let i = 0; i < 9; i++) r(c, 2, 4 + i * 6, 16, 2, '#6e5133'); } },
  bridgecut: { w: 72, h: 30, draw: (c) => { r(c, 0, 8, 72, 5, '#5a4029'); for (let i = 0; i < 9; i++) r(c, 2 + i * 8, 0, 3, 30, '#45301f'); r(c, 0, 0, 72, 3, '#6e5133'); r(c, 30, 13, 12, 17, '#45301f'); } },
  marionette: { w: 16, h: 30, draw: (c) => { r(c, 2, 0, 12, 2, '#5a4029'); r(c, 7, 0, 2, 3, '#5a4029'); for (const x of [3, 8, 12]) r(c, x, 2, 1, 8, '#ddd'); r(c, 5, 8, 6, 6, '#e8d8c0'); r(c, 5, 8, 3, 6, '#f4ecd8'); r(c, 6, 10, 1, 1, '#111'); r(c, 9, 10, 1, 1, '#111'); r(c, 5, 14, 6, 8, '#a3122a'); r(c, 5, 14, 3, 8, '#2f7f82'); r(c, 3, 14, 2, 7, '#e8d8c0'); r(c, 11, 14, 2, 7, '#e8d8c0'); r(c, 5, 22, 2, 7, '#333'); r(c, 9, 22, 2, 7, '#333'); r(c, 6, 15, 4, 2, '#f4d060'); } },
  bookstand: { w: 16, h: 28, draw: (c) => { r(c, 7, 10, 2, 16, '#2a1c14'); r(c, 3, 26, 10, 2, '#2a1c14'); r(c, 1, 4, 14, 7, '#4a0c14'); r(c, 2, 5, 5, 5, '#e2d5ac'); r(c, 9, 5, 5, 5, '#e2d5ac'); r(c, 7, 4, 2, 7, '#86641c'); } },
  candle: { w: 6, h: 16, draw: (c) => { r(c, 2, 6, 2, 8, '#e8e0c8'); r(c, 1, 14, 4, 2, '#86641c'); r(c, 2, 2, 2, 4, '#ffd060'); r(c, 2, 1, 1, 2, '#fff4c8'); } },
  flowerpot: { w: 12, h: 16, draw: (c) => { r(c, 2, 9, 8, 7, '#8a4a2a'); r(c, 1, 8, 10, 2, '#9a5a3a'); r(c, 5, 3, 2, 6, '#2e5038'); r(c, 3, 0, 6, 4, '#d86a8a'); r(c, 5, 1, 2, 2, '#f2c230'); } },
  umbrella: { w: 22, h: 26, draw: (c) => { r(c, 10, 6, 2, 18, '#333'); r(c, 8, 24, 3, 2, '#333'); r(c, 1, 4, 20, 5, '#e84a6f'); r(c, 4, 1, 14, 3, '#f06a88'); r(c, 9, 0, 4, 1, '#f06a88'); for (const x of [1, 7, 13, 19]) r(c, x, 9, 2, 1, '#c03050'); } },
  cake: { w: 26, h: 26, draw: (c) => { r(c, 2, 14, 22, 10, '#f4e8d8'); r(c, 2, 18, 22, 2, '#e888b8'); r(c, 4, 10, 18, 5, '#fff8f0'); r(c, 0, 24, 26, 2, '#d4ae48'); for (let i = 0; i < 9; i++) { r(c, 3 + i * 2 + (i % 2), 5 + (i % 2) * 2, 1, 6, ['#5fd0c8', '#f2c230', '#e84a6f'][i % 3]); r(c, 3 + i * 2 + (i % 2), 3 + (i % 2) * 2, 1, 2, '#ffd060'); } for (let i = 0; i < 9; i++) { r(c, 4 + i * 2, 11, 1, 3, ['#f2c230', '#e84a6f', '#5fd0c8'][i % 3]); r(c, 4 + i * 2, 9, 1, 2, '#ffd060'); } } },
  cakeout: { w: 26, h: 26, draw: (c) => { PROPS.cake.draw(c); for (let i = 0; i < 9; i++) { r(c, 3 + i * 2 + (i % 2), 3 + (i % 2) * 2, 1, 2, '#888'); r(c, 4 + i * 2, 9, 1, 2, '#888'); } } },
  bouquet: { w: 24, h: 30, draw: (c) => { r(c, 8, 16, 8, 12, '#e2d5ac'); r(c, 10, 28, 4, 2, '#a3122a'); r(c, 9, 20, 6, 2, '#a3122a'); const cols = ['#e84a6f', '#f2c230', '#f8c0dc', '#fff', '#c03050', '#ff9a3c']; for (let i = 0; i < 14; i++) { const x = 2 + (i * 7) % 18, y = 1 + (i * 5) % 13; r(c, x, y, 5, 5, cols[i % 6]); r(c, x + 2, y + 2, 1, 1, '#5a4010'); } r(c, 4, 13, 3, 4, '#2e5038'); r(c, 17, 12, 3, 5, '#3a6244'); } },
  mic: { w: 8, h: 34, draw: (c) => { r(c, 3, 6, 2, 26, '#555'); r(c, 1, 32, 6, 2, '#333'); r(c, 2, 0, 4, 6, '#888'); r(c, 2, 1, 4, 1, '#bbb'); } },
  speaker: { w: 16, h: 26, draw: (c) => { r(c, 0, 0, 16, 26, '#18181c'); r(c, 1, 1, 14, 24, '#26262c'); r(c, 4, 3, 8, 8, '#111'); r(c, 6, 5, 4, 4, '#444'); r(c, 3, 13, 10, 10, '#111'); r(c, 6, 16, 4, 4, '#444'); } },
  stagelight: { w: 14, h: 16, draw: (c) => { r(c, 2, 2, 10, 9, '#222'); r(c, 4, 11, 6, 3, '#fff4c8'); r(c, 6, 0, 2, 2, '#444'); r(c, 1, 5, 1, 3, '#555'); r(c, 12, 5, 1, 3, '#555'); } },
  stall: { w: 56, h: 52, draw: (c) => { r(c, 2, 14, 2, 38, '#5a4029'); r(c, 52, 14, 2, 38, '#5a4029'); for (let i = 0; i < 7; i++) r(c, i * 8, 2, 8, 12, i % 2 ? '#e84a6f' : '#fff8f0'); for (let i = 0; i < 7; i++) r(c, i * 8 + 1, 14, 6, 2, i % 2 ? '#c03050' : '#ddd'); r(c, 2, 34, 52, 18, '#6e5133'); r(c, 2, 32, 52, 3, '#98764d'); for (let i = 0; i < 5; i++) r(c, 8 + i * 9, 26, 5, 6, ['#f2c230', '#e84a6f', '#5fd0c8', '#f8c0dc', '#ff9a3c'][i]); for (let i = 0; i < 6; i++) r(c, 5 + i * 9, 17, 3, 4, ['#f2c230', '#e84a6f'][i % 2]); } },
  lantern: { w: 10, h: 14, draw: (c) => { r(c, 4, 0, 2, 2, '#333'); r(c, 1, 2, 8, 10, '#e84a6f'); r(c, 3, 3, 4, 8, '#ffd060'); r(c, 2, 12, 6, 1, '#333'); } },
  gear: { w: 14, h: 14, draw: (c) => { r(c, 3, 3, 8, 8, '#b08a2c'); r(c, 5, 0, 4, 14, '#b08a2c'); r(c, 0, 5, 14, 4, '#b08a2c'); r(c, 5, 5, 4, 4, '#3a2a14'); r(c, 1, 1, 3, 3, '#86641c'); r(c, 10, 1, 3, 3, '#86641c'); r(c, 1, 10, 3, 3, '#86641c'); r(c, 10, 10, 3, 3, '#86641c'); } },
  key: { w: 12, h: 8, draw: (c) => { r(c, 0, 1, 5, 6, '#d4ae48'); r(c, 1, 3, 2, 2, '#000'); r(c, 5, 3, 7, 2, '#d4ae48'); r(c, 9, 5, 1, 2, '#d4ae48'); r(c, 11, 5, 1, 2, '#d4ae48'); c.clearRect(1, 3, 2, 2); } },
  weight: { w: 14, h: 14, draw: (c) => { r(c, 1, 4, 12, 10, '#484e59'); r(c, 3, 2, 8, 3, '#5e6673'); r(c, 5, 0, 4, 3, '#343841'); r(c, 2, 5, 2, 8, '#78818f'); } },
  basket: { w: 18, h: 16, draw: (c) => { r(c, 1, 6, 16, 10, '#8a6a3a'); for (let i = 0; i < 4; i++) r(c, 1, 7 + i * 3, 16, 1, '#6a4a2a'); r(c, 0, 5, 18, 2, '#a88a4a'); r(c, 2, 0, 1, 6, '#f0d98a'); r(c, 15, 0, 1, 6, '#f0d98a'); } },
  hook: { w: 10, h: 12, draw: (c) => { r(c, 3, 0, 4, 3, '#484e59'); r(c, 4, 3, 2, 5, '#78818f'); r(c, 4, 8, 5, 2, '#78818f'); r(c, 8, 6, 1, 2, '#78818f'); } },
  slot: { w: 16, h: 30, draw: (c) => { r(c, 0, 0, 16, 30, '#3a1a5a'); r(c, 1, 1, 14, 6, '#ff4fa0'); r(c, 2, 9, 12, 8, '#111'); for (let i = 0; i < 3; i++) r(c, 3 + i * 4, 10, 3, 6, ['#f2c230', '#40e0d0', '#f2c230'][i]); r(c, 2, 19, 12, 2, '#40e0d0'); r(c, 4, 23, 8, 5, '#222'); } },
  holo: { w: 24, h: 30, draw: (c) => { c.globalAlpha = 0.7; r(c, 0, 0, 24, 30, '#0a3a4a'); for (let i = 0; i < 8; i++) r(c, 2, 2 + i * 3.5, 4 + (i * 7) % 16, 1, '#40e0d0'); r(c, 14, 16, 8, 10, '#40e0d0'); c.globalAlpha = 1; } },
  typewriter: { w: 16, h: 10, draw: (c) => { r(c, 1, 4, 14, 6, '#2a2a2e'); r(c, 3, 0, 10, 4, '#e8e8e8'); for (let i = 0; i < 5; i++) r(c, 3 + i * 2, 6, 1, 1, '#aaa'); for (let i = 0; i < 5; i++) r(c, 4 + i * 2, 8, 1, 1, '#aaa'); } },
  cam: { w: 12, h: 10, draw: (c) => { r(c, 0, 2, 12, 8, '#222'); r(c, 2, 0, 4, 2, '#333'); r(c, 4, 3, 5, 5, '#557'); r(c, 5, 4, 3, 3, '#9bd'); r(c, 10, 3, 1, 1, '#f33'); } },
  filmcam: { w: 22, h: 36, draw: (c) => { r(c, 4, 6, 14, 10, '#2a2a2e'); r(c, 0, 8, 4, 6, '#444'); r(c, 6, 0, 5, 6, '#3a3a40'); r(c, 12, 1, 5, 5, '#3a3a40'); r(c, 10, 16, 2, 6, '#555'); r(c, 10, 22, 1, 14, '#555'); r(c, 6, 22, 1, 14, '#555'); r(c, 15, 22, 1, 14, '#555'); } },
  suitcase: { w: 16, h: 12, draw: (c) => { r(c, 0, 2, 16, 10, '#6a6a6a'); r(c, 6, 0, 4, 2, '#333'); r(c, 0, 6, 16, 1, '#333'); r(c, 3, 5, 2, 3, '#bbb'); r(c, 11, 5, 2, 3, '#bbb'); } },
  book: { w: 10, h: 8, draw: (c) => { r(c, 0, 1, 10, 7, '#4a0c14'); r(c, 1, 0, 8, 2, '#e2d5ac'); r(c, 3, 3, 4, 2, '#d4ae48'); } },
  wheel: { w: 20, h: 20, draw: (c) => { r(c, 2, 2, 16, 16, '#5a4029'); r(c, 6, 0, 8, 20, '#5a4029'); r(c, 0, 6, 20, 8, '#5a4029'); r(c, 5, 5, 10, 10, '#2a1c14'); r(c, 9, 2, 2, 16, '#98764d'); r(c, 2, 9, 16, 2, '#98764d'); } },
  hoverbike: { w: 36, h: 18, draw: (c) => { r(c, 2, 8, 32, 6, '#26262e'); r(c, 6, 4, 14, 5, '#ff9a3c'); r(c, 20, 2, 6, 6, '#343841'); r(c, 0, 10, 4, 3, '#40e0d0'); r(c, 4, 15, 28, 2, '#40e0d0'); r(c, 28, 6, 6, 3, '#78818f'); } },
  horse: { w: 36, h: 30, draw: (c) => { r(c, 6, 10, 22, 10, '#f0f0f0'); r(c, 24, 2, 8, 12, '#f0f0f0'); r(c, 30, 4, 5, 5, '#e0e0e0'); r(c, 8, 20, 3, 10, '#ddd'); r(c, 22, 20, 3, 10, '#ddd'); r(c, 2, 10, 4, 10, '#e8c36a'); r(c, 23, 0, 3, 10, '#e8c36a'); r(c, 31, 5, 1, 1, '#111'); r(c, 10, 9, 12, 3, '#3a6ab0'); } },
  spotcone: { w: 4, h: 4, draw: (c) => r(c, 0, 0, 4, 4, '#fff') },
};
export function propTex(kind: string): THREE.CanvasTexture {
  const p = PROPS[kind]; if (!p) throw new Error('Нет реквизита: ' + kind);
  const t = canvasTex(p.w, p.h, (c) => p.draw(c), 'prop|' + kind); (t as any).pw = p.w; (t as any).ph = p.h; return t;
}
