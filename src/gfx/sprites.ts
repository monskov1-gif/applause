// Процедурные пиксельные спрайты персонажей (HD-2D: плоские фигурки-билборды в объёмной сцене).
// Кадр 32×48, опора — низ по центру, тёмная обводка, 3 направления (анфас, спина, профиль).
import { CharDef, CHARS } from '../data/chars';

export const FW = 32, FH = 48;
export const FRAMES = ['idle0', 'idle1', 'walk0', 'walk1', 'walk2', 'walk3', 'arms', 'bow', 'fear', 'sit', 'point', 'dance1', 'dance2', 'lie'];
export const DIRS = ['f', 'b', 's'];
const OUT = [22, 17, 20];

function shade(hex: string, k: number): string {
  const n = parseInt(hex.slice(1), 16); let r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  if (k < 0) { r *= 1 + k; g *= 1 + k; b *= 1 + k * 0.8; } else { r += (255 - r) * k; g += (255 - g) * k; b += (255 - b) * k; }
  return `rgb(${r | 0},${g | 0},${b | 0})`;
}
type Ctx = CanvasRenderingContext2D;
function R(c: Ctx, x: number, y: number, w: number, h: number, col: string) { if (w <= 0 || h <= 0) return; c.fillStyle = col; c.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h)); }
/** Прямоугольник с объёмом: светлая кромка слева, тёмная справа, затемнённый низ. */
function V(c: Ctx, x: number, y: number, w: number, h: number, col: string) {
  R(c, x, y, w, h, col); if (w >= 3) { R(c, x, y, 1, h, shade(col, 0.16)); R(c, x + w - 1, y, 1, h, shade(col, -0.22)); } if (h >= 4) R(c, x, y + h - 1, w, 1, shade(col, -0.25));
}

function drawFrame(c: Ctx, ox: number, oy: number, d: CharDef, frame: string, dir: string) {
  c.save(); c.translate(ox, oy);
  const cx = 16, foot = 47, H = d.h;
  const tw = d.build === 'thin' ? 7 : d.build === 'mid' ? 8 : d.build === 'strong' ? 11 : 11;
  const legW = d.build === 'thin' ? 2 : 3;
  let legH = Math.round(H * 0.37), torsoH = Math.round(H * 0.33); const headH = 9;
  const acc = d.acc || [];
  const walk = frame.startsWith('walk') ? parseInt(frame[4]) : -1;
  let bob = frame === 'idle1' ? 1 : (walk === 1 || walk === 3) ? -1 : 0;
  let lean = 0, armMode = 'down', sit = false;
  if (frame === 'arms' || frame === 'dance1') armMode = 'up';
  if (frame === 'dance2') { armMode = 'side'; bob = -1; }
  if (frame === 'dance1') bob = 1;
  if (frame === 'bow') { lean = 3; bob = 3; armMode = 'side'; }
  if (frame === 'fear') { armMode = 'face'; bob = 1; }
  if (frame === 'point') armMode = 'point';
  if (frame === 'sit') { sit = true; legH = Math.round(legH * 0.45); }
  if (frame === 'lie') { // лежит: рисуем стоящую фигуру и поворачиваем
    c.translate(cx, foot - 4); c.rotate(-Math.PI / 2); c.translate(-cx - 10, -foot + 12);
  }
  const hipY = foot - legH, shY = hipY - torsoH + bob, headY = shY - headH + (lean ? 1 : 0);
  const side = dir === 's', back = dir === 'b';
  const hx = cx - 4 + (side ? 1 : 0) + lean;
  const hair = d.hair, hairD = shade(hair, -0.3), hairL = shade(hair, 0.22);
  const st = d.style;
  const longLen: Record<string, number> = { long: 16, longStyled: 17, glam: 19, rapunzel: H - 9, bob: 9, bobLong: 11, curlyMid: 10, fluffy: 7, twin: 6, ponytail: 6, short: 4, curlyShort: 5, bun: 5 };
  const hl = longLen[st] || 0, wide = (st === 'glam' || st === 'fluffy' || st === 'curlyMid' || st === 'rapunzel') ? 1 : 0;
  // --- волосы сзади (за телом) ---
  if (!side && !back && hl > 8) { V(c, hx - 1 - wide, headY + 2, 10 + wide * 2, Math.min(hl, H - 2), hair); if (st === 'glam' || st === 'rapunzel') { R(c, hx - 2 - wide, headY + 8, 1, hl - 10, hairD); R(c, hx + 9 + wide, headY + 10, 1, hl - 12, hairD); } }
  if (side && hl > 8) V(c, hx - 2 - wide, headY + 2, 5 + wide, hl, hair);
  if (acc.includes('cape')) { const cw = tw + 4; V(c, cx - cw / 2 + lean, shY + 1, cw, torsoH + legH - 3, shade(d.trim || '#a22', -0.1)); }
  if (acc.includes('wings') && !side) { R(c, cx - tw / 2 - 5, shY, 5, 7, 'rgba(230,220,255,0.85)'); R(c, cx + tw / 2, shY, 5, 7, 'rgba(230,220,255,0.85)'); R(c, cx - tw / 2 - 4, shY + 7, 3, 3, 'rgba(210,200,245,0.8)'); R(c, cx + tw / 2 + 1, shY + 7, 3, 3, 'rgba(210,200,245,0.8)'); }
  // --- ноги ---
  const legCol = d.skirt ? (d.skirt === 'long' ? d.bottom : d.skin) : d.bottom, shoe = d.shoes || '#222';
  const gap = side ? 0 : 1;
  let l1 = 0, l2 = 0, f1 = 0, f2 = 0;
  if (walk === 0) { l1 = -2; f1 = side ? 3 : 0; f2 = side ? -2 : 0; } if (walk === 2) { l2 = -2; f2 = side ? 3 : 0; f1 = side ? -2 : 0; }
  if (side) { V(c, cx - legW + f2, hipY, legW, legH + l2 - 1, shade(legCol, -0.15)); R(c, cx - legW + f2, foot - 1 + l2, legW + 1, 1, shoe); V(c, cx - 1 + f1, hipY, legW, legH + l1 - 1, legCol); R(c, cx - 1 + f1, foot - 1 + l1, legW + 1, 1, shoe); }
  else if (sit) { V(c, cx - legW - gap, hipY, legW, legH, legCol); V(c, cx + gap, hipY, legW, legH, legCol); R(c, cx - legW - gap, foot - 1, legW, 1, shoe); R(c, cx + gap, foot - 1, legW, 1, shoe); }
  else { V(c, cx - legW - gap + (gap ? 0 : 0), hipY, legW, legH + l1 - 1, legCol); V(c, cx + gap, hipY, legW, legH + l2 - 1, legCol); R(c, cx - legW - gap, foot - 1 + l1, legW, 1, shoe); R(c, cx + gap, foot - 1 + l2, legW, 1, shoe); }
  // --- юбка ---
  if (d.skirt) { const sl = d.skirt === 'long' ? legH - 2 : Math.round(legH * 0.45); for (let i = 0; i < sl; i++) { const w = (side ? tw - 2 : tw) + Math.min(3, Math.floor(i / 3) + 1) * (d.skirt === 'long' ? 1 : 1); R(c, cx - w / 2 + lean * (1 - i / sl), hipY - 1 + i, w, 1, i === sl - 1 ? shade(d.bottom, -0.25) : d.bottom); } R(c, cx - tw / 2 + lean, hipY - 1, 1, sl, shade(d.bottom, 0.15)); }
  // --- торс ---
  const bw = side ? Math.max(5, tw - 3) : tw, bx = cx - bw / 2 + lean;
  V(c, bx, shY, bw, torsoH + (d.skirt ? 0 : 1), d.top);
  if (acc.includes('coat')) V(c, bx - 1, shY, bw + 2, torsoH + 6, d.top);
  if (d.trim && !back) { R(c, cx - 1 + lean, shY, side ? 1 : 2, d.skirt ? 2 : 1, d.trim); if (d.build === 'strong') R(c, bx + 1, shY + torsoH - 2, bw - 2, 1, d.trim); }
  if (acc.includes('scarf')) { R(c, bx, shY, bw, 2, d.trim || '#e84a6f'); if (!back) R(c, bx + 1, shY + 2, 2, 4, d.trim || '#e84a6f'); }
  if (acc.includes('pins') && !back && !side) { R(c, bx + bw - 3, shY + 3, 1, 1, '#fff'); R(c, bx + bw - 2, shY + 5, 1, 1, '#4ae0c0'); }
  if (acc.includes('camera') && !back) { R(c, cx - 2 + lean, shY + 4, 4, 3, '#222'); R(c, cx - 1 + lean, shY + 5, 2, 1, '#8ac'); R(c, bx + 1, shY, 1, 4, '#333'); R(c, bx + bw - 2, shY, 1, 4, '#333'); }
  // --- руки ---
  const armL = torsoH - 1, sw = walk === 0 ? 1 : walk === 2 ? -1 : 0;
  const armCol = (d.build === 'strong' && !acc.includes('visor')) ? d.top : d.top;
  const arm = (x: number, up: string, swing: number) => {
    if (up === 'up') { V(c, x, shY - armL + 3, 2, armL - 1, armCol); R(c, x, shY - armL + 1, 2, 2, d.skin); }
    else if (up === 'side') { R(c, x < cx ? x - 3 : x + 1, shY + 1, 4, 2, armCol); R(c, x < cx ? x - 5 : x + 5, shY + 1, 2, 2, d.skin); }
    else if (up === 'face') { V(c, x, shY + 1, 2, 3, armCol); R(c, x < cx ? x + 1 : x - 1, shY - 2, 2, 3, d.skin); }
    else { V(c, x, shY + 1 + swing, 2, armL - 2, armCol); R(c, x, shY + armL - 1 + swing, 2, 2, d.skin); if (acc.includes('bracelets')) R(c, x, shY + armL - 2 + swing, 2, 1, '#4ae0c0'); }
  };
  if (side) { arm(cx - 1 + lean + (walk >= 0 ? sw * 2 : 0), armMode === 'point' ? 'side' : armMode, 0); }
  else { arm(bx - 2, armMode === 'point' ? 'down' : armMode, sw); arm(bx + bw, armMode === 'point' ? 'side' : armMode, -sw); }
  // --- голова ---
  R(c, hx + 3, headY + headH - 1, 2, 2, shade(d.skin, -0.2)); // шея
  if (d.style !== 'none' || d.id !== 'kukolnik') {
    R(c, hx + 1, headY, 6, 1, d.skin); R(c, hx, headY + 1, 8, headH - 3, d.skin); R(c, hx + 1, headY + headH - 2, 6, 1, d.skin);
    R(c, hx + 7, headY + 2, 1, headH - 5, shade(d.skin, -0.15));
  }
  if (!back) {
    const ey = headY + 4, ec = shade(d.eyes, -0.25);
    if (side) { R(c, hx + 6, ey, 1, 2, ec); R(c, hx + 8, ey + 1, 1, 1, shade(d.skin, -0.12)); }
    else { R(c, hx + 1, ey, 2, 2, '#f4efe6'); R(c, hx + 5, ey, 2, 2, '#f4efe6'); R(c, hx + 2, ey, 1, 2, ec); R(c, hx + 5, ey, 1, 2, ec);
      if (d.brows === 'strict') { R(c, hx + 1, ey - 1, 2, 1, shade(d.hair, -0.4)); R(c, hx + 5, ey - 1, 2, 1, shade(d.hair, -0.4)); }
      if (d.lips) R(c, hx + 3, headY + 7, 2, 1, d.lips); else if (frame === 'fear') R(c, hx + 3, headY + 7, 2, 1, '#412'); 
      if (acc.includes('freckles')) { R(c, hx + 1, ey + 2, 1, 1, shade(d.skin, -0.25)); R(c, hx + 6, ey + 2, 1, 1, shade(d.skin, -0.25)); }
      if (acc.includes('mole')) R(c, hx + 6, ey + 3, 1, 1, '#3a1a14');
      if (acc.includes('glasses')) { R(c, hx, ey, 8, 1, '#222'); R(c, hx + 1, ey + 1, 2, 1, 'rgba(180,220,255,0.6)'); R(c, hx + 5, ey + 1, 2, 1, 'rgba(180,220,255,0.6)'); }
      if (acc.includes('visor')) R(c, hx, ey, 8, 2, d.trim || '#40e0d0');
      if (acc.includes('maskface')) { R(c, hx, headY + 1, 8, 7, '#e8e4d8'); R(c, hx + 1, ey, 2, 2, '#111'); R(c, hx + 5, ey, 2, 2, '#111'); R(c, hx + 2, headY + 7, 4, 1, '#111'); R(c, hx + 1, headY + 6, 1, 1, '#111'); R(c, hx + 6, headY + 6, 1, 1, '#111'); }
      if (acc.includes('maskhalf')) { R(c, hx, ey - 1, 8, 3, '#e8c36a'); R(c, hx + 2, ey, 1, 1, '#111'); R(c, hx + 5, ey, 1, 1, '#111'); }
    }
  }
  // --- волосы спереди ---
  if (st !== 'none') {
    const curly = st === 'curlyMid' || st === 'curlyShort';
    if (back) { R(c, hx + 1, headY - 1, 6, 1, hair); V(c, hx - wide, headY, 8 + wide * 2, Math.max(headH - 2, Math.min(hl, H - 2)), hair); if (hl > 9) R(c, hx + 3, headY + 4, 1, hl - 6, hairD); }
    else if (side) { R(c, hx + 1, headY - 1, 6, 1, hair); R(c, hx - 1 - wide, headY, 6 + wide, Math.min(Math.max(hl, 4), 8), hair); R(c, hx + 5, headY, 3, d.bangs ? 3 : 2, hair); R(c, hx, headY, 1, 5, hairD); }
    else {
      R(c, hx + 1, headY - 1, 6, 1, hair); R(c, hx - wide, headY, 8 + wide * 2, d.bangs ? 4 : 2, hair); R(c, hx + 1, headY, 3, 1, hairL);
      const sl = Math.min(hl, st === 'ponytail' || st === 'twin' || st === 'short' || st === 'bun' ? 4 : hl);
      R(c, hx - 1 - wide, headY + 1, 1 + wide, sl, hair); R(c, hx + 8, headY + 1, 1 + wide, sl, hairD);
      if (!d.bangs && (st === 'bob' || st === 'bobLong' || st === 'longStyled' || st === 'glam')) { R(c, hx, headY + 2, 2, 2, hair); R(c, hx + 6, headY + 2, 2, 1, hair); }
      if (st === 'fluffy') { R(c, hx - 2, headY + 1, 1, 4, hairL); R(c, hx + 9, headY + 2, 1, 3, hair); R(c, hx, headY - 2, 7, 1, hairL); R(c, hx + 1, headY + 2, 2, 1, hair); R(c, hx + 5, headY + 2, 2, 1, hair); }
    }
    if (curly) { for (let i = 0; i < 6; i++) { R(c, hx - 1 + i * 2 - (i % 2), headY - 2 + (i % 2), 2, 2, i % 2 ? hair : hairL); } if (!side) { R(c, hx - 2, headY + 2, 1, 2, hair); R(c, hx + 9, headY + 4, 1, 2, hair); if (st === 'curlyMid') { R(c, hx - 2, headY + 6, 2, 2, hair); R(c, hx + 8, headY + 7, 2, 2, hairD); } } }
    if (st === 'twin') { if (side) V(c, hx - 2, headY + 2, 2, 8, hair); else { V(c, hx - 3, headY + 2, 2, 8, hair); V(c, hx + 9, headY + 2, 2, 8, hair); R(c, hx - 2, headY + 2, 1, 1, '#e84a6f'); R(c, hx + 9, headY + 2, 1, 1, '#e84a6f'); } }
    if (st === 'ponytail') { if (side) { V(c, hx - 3, headY + 1, 3, 3, hair); V(c, hx - 4, headY + 3, 2, 9, hair); } else if (back) V(c, hx + 3, headY + 2, 2, 12, hairD); else R(c, hx + 8, headY - 1, 2, 3, hair); }
    if (st === 'bun') R(c, hx + 2, headY - 3, 4, 2, hair);
    if (st === 'rapunzel' && !back) { R(c, hx + 8, headY + H - 12, 6, 2, hair); R(c, hx + 12, headY + H - 11, 4, 2, hairD); }
    if (st === 'longStyled' || st === 'glam') R(c, hx + 2, headY, 1, 2, hairL);
  }
  if (acc.includes('earrings') && !back && !side) { R(c, hx - 1, headY + 6, 1, 2, '#f4d060'); R(c, hx + 8, headY + 6, 1, 2, '#f4d060'); }
  if (acc.includes('hat')) { R(c, hx - 2, headY, 12, 1, '#2a2a2e'); V(c, hx, headY - 3, 8, 3, '#3a3a40'); R(c, hx, headY - 1, 8, 1, '#111'); }
  if (acc.includes('crown')) { R(c, hx + 1, headY - 2, 6, 2, '#f4d060'); R(c, hx + 1, headY - 4, 1, 2, '#f4d060'); R(c, hx + 3, headY - 4, 2, 2, '#f4d060'); R(c, hx + 6, headY - 4, 1, 2, '#f4d060'); R(c, hx + 3, headY - 2, 2, 1, '#d02040'); }
  if (acc.includes('headphones')) { R(c, hx, headY - 2, 8, 1, '#222'); R(c, hx - 2, headY + 2, 2, 4, '#222'); R(c, hx + 8, headY + 2, 2, 4, '#222'); }
  c.restore();
}

function outline(c: Ctx, w: number, h: number) {
  const img = c.getImageData(0, 0, w, h), a = img.data, src = new Uint8ClampedArray(a);
  const op = (x: number, y: number) => x >= 0 && y >= 0 && x < w && y < h && src[(y * w + x) * 4 + 3] > 40;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    if (op(x, y)) continue;
    // обводка не пересекает границы кадров
    const fx = x % FW, fy = y % FH; if (fx === 0 || fx === FW - 1 || fy === 0 || fy === FH - 1) continue;
    if (op(x - 1, y) || op(x + 1, y) || op(x, y - 1) || op(x, y + 1)) { const i = (y * w + x) * 4; a[i] = OUT[0]; a[i + 1] = OUT[1]; a[i + 2] = OUT[2]; a[i + 3] = 255; }
  }
  c.putImageData(img, 0, 0);
}

const sheets = new Map<string, HTMLCanvasElement>();
export function charSheet(id: string): HTMLCanvasElement {
  let cv = sheets.get(id); if (cv) return cv;
  const d = CHARS[id]; if (!d) throw new Error('Нет персонажа: ' + id);
  cv = document.createElement('canvas'); cv.width = FW * FRAMES.length; cv.height = FH * DIRS.length;
  const c = cv.getContext('2d', { willReadFrequently: true })!;
  DIRS.forEach((dir, r) => FRAMES.forEach((f, i) => {
    const special = i >= 6; drawFrame(c, i * FW, r * FH, d, f, special && dir === 'b' && f !== 'sit' && f !== 'arms' && f !== 'dance1' && f !== 'dance2' ? 'f' : dir);
  }));
  outline(c, cv.width, cv.height);
  if (id === 'kukolnik' || id === 'narrator') { c.globalCompositeOperation = 'source-in'; c.fillStyle = '#0a0808'; c.fillRect(0, 0, cv.width, cv.height); }
  sheets.set(id, cv); return cv;
}
export { shade };
