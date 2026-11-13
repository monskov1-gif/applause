// Спрайты персонажей HD-2D: настоящий пиксель-арт на фиксированной сетке.
// Кадр = FW×FH пикселей (1 пиксель листа = 1 логический пиксель мира, NearestFilter → чёткая сетка).
// Фигурка собирается из целочисленных пиксельных слоёв: тело (ноги, юбка, торс, руки) задаётся профилями ширин
// и суставами поз, голова (лицо анфас/профиль/затылок) и причёски — авторские ASCII-маски из pixelchars.ts.
// Каждая часть тонируется 4 тонами своей палитры (свет сверху-слева), снаружи — цветной контур (sel-out).
import { CharDef, CHARS } from '../data/chars';
import { HEAD_F, HEAD_S, HEAD_B, hairMask, HairSet, HAT, FEDORA, CROWN } from './pixelchars';

export const FW = 32, FH = 48, SS = 1;
export const FRAMES = ['idle0', 'idle1', 'walk0', 'walk1', 'walk2', 'walk3', 'arms', 'bow', 'fear', 'sit', 'point', 'dance1', 'dance2', 'lie', 'hug'];
export const DIRS = ['f', 'b', 's'];

function shade(hex: string, k: number): string {
  const n = parseInt(hex.slice(1), 16); let r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  if (k < 0) { r *= 1 + k; g *= 1 + k; b *= 1 + k * 0.8; } else { r += (255 - r) * k; g += (255 - g) * k; b += (255 - b) * k; }
  return `rgb(${r | 0},${g | 0},${b | 0})`;
}

// ---------------------------------------------------------------- палитры
type RGB = [number, number, number];
function hex2rgb(h: string): RGB { if (h.length === 4) h = '#' + h[1] + h[1] + h[2] + h[2] + h[3] + h[3]; const n = parseInt(h.slice(1), 16); return [n >> 16, (n >> 8) & 255, n & 255]; }
function rgb2hsl([r, g, b]: RGB): RGB {
  r /= 255; g /= 255; b /= 255; const mx = Math.max(r, g, b), mn = Math.min(r, g, b); let h = 0, s = 0; const l = (mx + mn) / 2;
  if (mx !== mn) { const d = mx - mn; s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn); h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h *= 60; }
  return [h, s, l];
}
function hsl2rgb([h, s, l]: RGB): RGB {
  h = ((h % 360) + 360) % 360; s = Math.max(0, Math.min(1, s)); l = Math.max(0, Math.min(1, l));
  const c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(((h / 60) % 2) - 1)), m = l - c / 2;
  const [r, g, b] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)];
}
function towards(h: number, target: number, amt: number) { let d = ((target - h + 540) % 360) - 180; return h + Math.sign(d) * Math.min(Math.abs(d), amt); }
/** 4 тона: 0 свет, 1 база, 2 тень, 3 глубокая тень; свет теплеет, тени уходят в холодный пурпур. */
function ramp(hex: string): RGB[] {
  const base = hex2rgb(hex); const [h, s, l] = rgb2hsl(base);
  const grey = s < 0.08; const dl = Math.min(0.12, l * 0.3), dd = Math.min(0.24, l * 0.5);
  const hi = hsl2rgb([grey ? h : towards(h, 48, 10), s * (grey ? 1 : 0.95), l + (l > 0.85 ? 0.06 : Math.max(0.08, 0.12 * (1 - l)))]);
  const sh = hsl2rgb([grey ? h : towards(h, 265, 9), Math.min(1, s * 1.05 + (grey ? 0 : 0.04)), l - (l > 0.8 ? 0.13 : dl)]);
  const dp = hsl2rgb([grey ? h : towards(h, 270, 16), Math.min(1, s * 1.08 + (grey ? 0 : 0.05)), l - (l > 0.8 ? 0.26 : dd)]);
  return [hi, base, sh, dp];
}
function outlineOf(c: RGB): RGB { const [h, s, l] = rgb2hsl(c); return hsl2rgb([towards(h, 280, 20), Math.min(1, s * 0.9 + 0.1), Math.min(0.2, l * 0.42)]); }

// ---------------------------------------------------------------- буфер кадра
class Buf {
  m = new Int16Array(FW * FH).fill(-1); t = new Int8Array(FW * FH);
  get(x: number, y: number) { return x < 0 || y < 0 || x >= FW || y >= FH ? -1 : this.m[y * FW + x]; }
  set(x: number, y: number, m: number, t: number) { if (x < 0 || y < 0 || x >= FW || y >= FH) return; this.m[y * FW + x] = m; this.t[y * FW + x] = t; }
  clear(x: number, y: number) { if (x < 0 || y < 0 || x >= FW || y >= FH) return; this.m[y * FW + x] = -1; }
  /** сдвинуть тон уже нарисованного пикселя */
  tone(x: number, y: number, dt: number) { if (this.get(x, y) < 0) return; const i = y * FW + x; this.t[i] = Math.max(0, Math.min(3, this.t[i] + dt)); }
}
/** Часть фигуры: набор пикселей одного-двух материалов; тон по форме (свет слева-сверху, тень справа). */
class Part {
  px = new Map<number, [number, number]>(); // key → [mat, tone (-1 авто)]
  constructor(public wide = false, public flat = false) {}
  k(x: number, y: number) { return (y + 64) * 256 + (x + 64); }
  has(x: number, y: number) { return this.px.has(this.k(x, y)); }
  add(x: number, y: number, m: number, t = -1) { this.px.set(this.k(x, y), [m, t]); }
  rect(x: number, y: number, w: number, h: number, m: number, t = -1) { for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) this.add(x + i, y + j, m, t); }
  hline(x0: number, x1: number, y: number, m: number, t = -1) { for (let x = Math.min(x0, x1); x <= Math.max(x0, x1); x++) this.add(x, y, m, t); }
  /** толстая линия кистью w×w (верхний левый угол кисти идёт по Брезенхэму) */
  line(x0: number, y0: number, x1: number, y1: number, w: number, m: number | ((f: number) => number), t = -1) {
    const dx = Math.abs(x1 - x0), dy = Math.abs(y1 - y0), sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1; let err = dx - dy, x = x0, y = y0; const n = Math.max(dx, dy) || 1; let i = 0;
    for (;;) { const mm = typeof m === 'number' ? m : m(i / n); this.rect(x, y, w, w, mm, t); if (x === x1 && y === y1) break; const e2 = 2 * err; if (e2 > -dy) { err -= dy; x += sx; } if (e2 < dx) { err += dx; y += sy; } i++; }
  }
  commit(b: Buf, dark = 0) {
    for (const [key, [m, t]] of this.px) {
      const x = (key % 256) - 64, y = Math.floor(key / 256) - 64; let tt = t;
      if (tt < 0) {
        if (this.flat) tt = 1;
        else {
          const L = !this.has(x - 1, y), R = !this.has(x + 1, y), U = !this.has(x, y - 1), D = !this.has(x, y + 1);
          tt = 1; if (L || (U && !R)) tt = 0; if (R || (this.wide && !this.has(x + 2, y))) tt = 2; if (R && D) tt = 3;
        }
        tt = Math.min(3, tt + dark);
      }
      b.set(x, y, m, tt);
    }
  }
}

// ---------------------------------------------------------------- материалы персонажа
interface Mats { list: RGB[][]; id: (hex: string) => number; }
function makeMats(): Mats { const list: RGB[][] = []; const idx = new Map<string, number>(); return { list, id: (hex: string) => { let i = idx.get(hex); if (i === undefined) { i = list.length; list.push(ramp(hex)); idx.set(hex, i); } return i; } }; }

// ---------------------------------------------------------------- позы
interface Arm { e: [number, number]; h: [number, number]; }
interface Pose {
  bob: number; legs: string; aL: Arm; aR: Arm; eyes: 'o' | 'c' | 'w'; mouth: 'n' | 'o' | 's'; lean: number; headDy: number; armsOver: boolean; sit: boolean;
}
const A = (ex: number, ey: number, hx: number, hy: number): Arm => ({ e: [ex, ey], h: [hx, hy] });
function pose(frame: string, dir: string, AL: number): Pose {
  const side = dir === 's'; const rest = A(0, AL >> 1, 0, AL);
  const p: Pose = { bob: 0, legs: 'stand', aL: rest, aR: rest, eyes: 'o', mouth: 'n', lean: 0, headDy: 0, armsOver: false, sit: false };
  switch (frame) {
    case 'idle1': p.bob = 1; break;
    case 'walk0': case 'walk2': {
      const s = frame === 'walk0' ? 1 : -1; p.legs = frame;
      if (side) { p.aL = A(-1 * s, AL >> 1, -3 * s, AL - 1); p.aR = A(1 * s, AL >> 1, 3 * s, AL - 1); }
      else { p.aL = A(0, AL >> 1, s > 0 ? 1 : -1, s > 0 ? AL - 1 : AL); p.aR = A(0, AL >> 1, s > 0 ? 1 : -1, s > 0 ? AL : AL - 1); }
      break;
    }
    case 'walk1': case 'walk3': p.bob = -1; p.legs = frame; break;
    case 'arms': p.aL = side ? A(1, -4, 2, -AL + 1) : A(-2, -3, -4, -AL + 1); p.aR = side ? A(-1, -4, -1, -AL + 1) : A(-2, -3, -4, -AL + 1); p.mouth = 'o'; p.armsOver = true; break;
    case 'bow': p.eyes = 'c'; if (side) { p.lean = 1; p.aL = A(1, AL >> 1, 2, AL); p.aR = p.aL; } else { p.headDy = 3; p.bob = 1; } break;
    case 'fear': p.bob = 2; p.legs = 'crouch'; p.mouth = 'o'; p.eyes = 'w'; p.armsOver = true;
      p.aL = side ? A(2, 3, 4, -2) : A(-1, 3, 3, -3); p.aR = side ? A(1, 3, 3, -1) : A(-1, 3, 3, -3); break;
    case 'sit': p.sit = true; p.legs = 'sit'; p.aL = side ? A(1, 4, 3, 5) : A(0, 4, 2, 5); p.aR = p.aL; break;
    case 'point': p.aR = side ? A(4, 1, 9, 1) : A(-3, 1, -8, 1); if (side) p.aL = rest; p.armsOver = true; break;
    case 'dance1': p.bob = -1; p.legs = 'kickL'; p.mouth = 's'; p.armsOver = true;
      p.aL = side ? A(-2, 2, -5, 4) : A(-2, -4, -3, -AL + 1); p.aR = side ? A(1, -4, 3, -AL + 1) : A(-3, 1, -6, 3); break;
    case 'dance2': p.bob = 1; p.legs = 'kickR'; p.mouth = 's'; p.armsOver = true;
      p.aL = side ? A(-3, 1, -7, 0) : A(-3, 1, -7, 1); p.aR = side ? A(3, 1, 7, 0) : A(-3, 1, -7, 1); break;
    case 'lie': p.eyes = 'c'; break;
    case 'hug': p.mouth = 's'; p.eyes = 'c'; p.armsOver = true; p.aL = side ? A(3, 3, 7, 3) : A(-1, 4, 4, 5); p.aR = side ? A(2, 4, 6, 4) : A(-1, 4, 4, 5); if (side) p.lean = 0; break;
  }
  return p;
}

// ---------------------------------------------------------------- телосложение
interface Body { T: number; L: number; lw: number; aw: number; ws: number; rows: number[]; depth: number; kid: boolean; male: boolean; }
function body(d: CharDef): Body {
  const kid = d.h < 26, male = !!d.male;
  const b = kid ? 'kid' : d.build;
  const T = kid ? 7 : d.h >= 37 || d.build === 'strong' || d.build === 'big' ? 10 : 9;
  const L = kid ? 7 : Math.max(11, Math.min(16, Math.round(12 + (d.h - 31) * 0.42)));
  const lw = b === 'strong' ? 5 : b === 'big' ? 6 : b === 'kid' ? 3 : 4;
  const aw = b === 'thin' || b === 'kid' ? 2 : 3;
  const ws = b === 'thin' ? 10 : b === 'mid' ? 12 : b === 'kid' ? 8 : 14;
  const rows: number[] = [];
  for (let r = 0; r < T; r++) {
    if (b === 'thin') rows.push(r === 0 ? 8 : r < 4 ? 10 : male ? 10 : 8);
    else if (b === 'mid') rows.push(r === 0 ? 10 : r < 4 ? 12 : 10);
    else if (b === 'strong') rows.push(r === 0 ? 12 : r < 5 ? 14 : 12);
    else if (b === 'big') rows.push(r === 0 ? 12 : 14);
    else rows.push(8);
  }
  const depth = b === 'thin' || b === 'kid' ? 6 : b === 'mid' ? 7 : b === 'strong' ? 8 : 10;
  return { T, L, lw, aw, ws, rows, depth, kid, male };
}

// ---------------------------------------------------------------- отрисовка кадра
const CX = 16, FOOT = 46;
const WHITE = '#fff6ec';

function drawFrame(d: CharDef, M: Mats, frame: string, dirIn: string, legOverride?: number, torsoOverride?: number): Buf {
  const dir = dirIn; const side = dir === 's', back = dir === 'b', front = dir === 'f';
  const B = body(d); const L = legOverride ?? B.L; const T = torsoOverride ?? B.T; const AL = T - 1;
  const p = pose(frame, dir, AL);
  const acc = d.acc || []; const has = (a: string) => acc.includes(a);
  const buf = new Buf();
  const skin = M.id(d.skin), top = M.id(d.top), bot = M.id(d.bottom), shoe = M.id(d.shoes || '#2a2228');
  const hairM = M.id(d.hair);
  const trim = d.trim ? M.id(d.trim) : top;
  const black = M.id('#1c1820'), gold = M.id('#e8c060'), silver = M.id('#d8dce8'), white = M.id('#f2ece2');
  const sleeve: 'long' | 'short' | 'none' = has('tank') ? 'none' : has('jacket') || has('coat') || has('hoodie') ? 'long' : (d.sleeve || 'long');
  const coat = has('coat'); const coatM = coat ? (d.id.startsWith('owner') ? top : M.id(shade2(d.top, -0.05))) : top;
  const armTop = coat ? coatM : top;

  // вертикаль
  let hipY = FOOT - L + 1; if (p.sit) hipY = FOOT - Math.ceil(L * 0.5) + 1;
  hipY += p.legs === 'crouch' ? 1 : 0;
  const up = p.bob; // смещение верха
  const torsoTop = hipY - T + up;
  const headY = torsoTop - 14 + p.headDy;
  const lean = side && p.lean ? 1 : 0;
  const shearX = (row: number) => lean ? Math.round((T - 1 - row) * 0.6) : 0; // поклон в профиль
  const headX = CX - 7 + (side ? 1 : 0) + (lean ? shearX(0) + 1 : 0);
  const headYl = headY + (lean ? 3 : 0);

  const hs: HairSet = hairMask(d);
  const hairDraw = (layer: 'front' | 'back') => {
    const mask = side ? hs.s : back ? hs.b : hs.f; if (!mask) return;
    const ox = headX - 3, oy = headYl - 3;
    for (let y = 0; y < mask.length; y++) { const row = mask[y]; for (let x = 0; x < row.length; x++) {
      const ch = row[x]; let t = -1, isBack = false;
      if (ch >= '1' && ch <= '4') t = ch.charCodeAt(0) - 49; else if (ch >= 'a' && ch <= 'd') { t = ch.charCodeAt(0) - 97; isBack = true; }
      else if ('LlVvCc'.includes(ch)) { isBack = ch === 'l' || ch === 'v' || ch === 'c'; t = hairTex(mask, x, y, ch.toUpperCase()); }
      else if (ch === 'k') { if (layer === 'front') buf.set(ox + x, oy + y, gold, 1); continue; }
      else if (ch === 'w') { if (layer === 'front') buf.set(ox + x, oy + y, white, 1); continue; }
      else if (ch === 'r') { if (layer === 'front') buf.set(ox + x, oy + y, M.id(d.trim || '#e84a6f'), 1); continue; }
      if (t < 0) continue; if ((layer === 'back') !== isBack) continue;
      buf.set(ox + x, oy + y, hairM, t);
    } }
  };

  // --- задние слои: плащ, крылья, волосы за спиной
  if (has('cape')) { const cp = new Part(true); const cm = M.id(d.trim && d.trim !== '#e8c36a' ? d.trim : '#8a1426'); const w0 = B.ws + 2, w1 = B.ws + 8;
    for (let y = torsoTop; y <= FOOT - 1; y++) { const f = (y - torsoTop) / (FOOT - torsoTop); const w = Math.round(w0 + (w1 - w0) * f) & ~1; if (side) cp.hline(CX - 4 - Math.round(f * 5), CX + 1, y, cm); else cp.hline(CX - w / 2, CX + w / 2 - 1, y, cm); }
    if (!back && !side) for (let y = torsoTop + 2; y <= FOOT - 1; y++) { cp.add(CX - 1, y, M.id('#d8c8b0'), 2); } // подкладка
    cp.commit(buf); if (front) { const lin = M.id('#e8d8c0'); for (let y = torsoTop + 3; y <= FOOT - 1; y++) { const f = (y - torsoTop) / (FOOT - torsoTop); const w = Math.round(B.ws + 2 + 6 * f) & ~1; buf.set(CX - w / 2, y, lin, 2); buf.set(CX + w / 2 - 1, y, lin, 3); } } }
  if (has('wings') && !side) { const wm = M.id('#d8ccf4'); const wp = new Part(true);
    for (const s of [-1, 1]) for (let j = 0; j < 12; j++) { const w = j < 2 ? 3 + j * 2 : j < 8 ? 7 : 7 - (j - 7); for (let i = 0; i < w; i++) wp.add(CX + (s < 0 ? -B.ws / 2 - 2 - i : B.ws / 2 + 1 + i), torsoTop - 2 + j, wm); }
    wp.commit(buf); }
  if (!back) hairDraw('back');

  // --- ноги
  const legMat = d.skirt === 'short' || d.skirt === 'long' ? skin : bot;
  const drawLegs = () => {
    const lw = B.lw; const lp = new Part();
    const legPants = (x: number, y0: number, y1: number, far = false) => { // вертикальная нога + ботинок
      const P = new Part(); for (let y = y0; y <= y1 - 2; y++) P.hline(x, x + lw - 1, y, legMat); P.rect(x, y1 - 1, lw, 2, shoe); if (front || back) { P.add(x + (x < CX ? -1 : lw), y1, shoe); }
      P.commit(buf, far ? 1 : 0);
    };
    if (front || back) {
      if (p.legs === 'sit') { // бёдра на зрителя, голени вниз
        const blk = new Part(true); blk.rect(CX - lw - 1, hipY, lw * 2 + 2, 3, legMat); blk.commit(buf);
        legPants(CX - lw, hipY + 3, FOOT); legPants(CX, hipY + 3, FOOT); return;
      }
      if (!d.skirt) { const cr = new Part(true); const w = B.rows[T - 1]; cr.rect(CX - w / 2, hipY, w, 2, bot); cr.commit(buf); }
      let yl = FOOT, yr = FOOT; let xl = CX - lw, xr = CX;
      if (p.legs === 'walk0') yl = FOOT - 2; if (p.legs === 'walk2') yr = FOOT - 2;
      if (p.legs === 'crouch') { xl -= 1; xr += 1; }
      if (p.legs === 'kickL') { yl = FOOT - 3; xl -= 2; } if (p.legs === 'kickR') { yr = FOOT - 3; xr += 2; }
      const hy = hipY + (p.legs.startsWith('walk1') || p.legs === 'walk3' ? -1 : 0);
      legPants(xl, hy, yl); legPants(xr, hy, yr); void lp; return;
    }
    // профиль: суставы бедро→колено→лодыжка, ближняя нога поверх
    const slw = Math.max(3, lw - 1), hx = CX - (slw >> 1) - 1, K = Math.floor((L - 2) / 2), hy = hipY + (p.legs === 'walk1' || p.legs === 'walk3' ? -1 : 0);
    const leg = (kx: number, ky: number, ax: number, ay: number, far: boolean) => {
      const P = new Part(); P.line(hx, hy, hx + kx, hy + ky, slw, legMat); P.line(hx + kx, hy + ky, hx + ax, ay - 1, slw, legMat);
      P.rect(hx + ax, ay - 1, slw + 2, 2, shoe); P.rect(hx + ax - 1, ay, 1, 1, shoe); P.commit(buf, far ? 1 : 0);
    };

    switch (p.legs) {
      case 'walk0': leg(-1, K, -3, FOOT, true); leg(1, K, 3, FOOT, false); break;
      case 'walk2': leg(1, K, 3, FOOT, true); leg(-1, K, -3, FOOT, false); break;
      case 'walk1': leg(-1, K, -2, FOOT - 1, true); leg(0, K, 0, FOOT, false); break;
      case 'walk3': leg(0, K, 0, FOOT, true); leg(-1, K, -2, FOOT - 1, false); break;
      case 'sit': { const P = new Part(); P.rect(hx, hipY, slw + 6, slw, legMat); P.rect(hx + 5, hipY, slw, FOOT - hipY - 1, legMat); P.rect(hx + 5, FOOT - 1, slw + 2, 2, shoe); P.commit(buf); break; }
      case 'crouch': leg(2, K, 0, FOOT, true); leg(3, K, 1, FOOT, false); break;
      case 'kickL': leg(0, K, 0, FOOT, true); leg(3, K - 1, 6, FOOT - 3, false); break;
      case 'kickR': leg(-3, K - 1, -5, FOOT - 3, true); leg(0, K, 0, FOOT, false); break;
      default: leg(0, K, 0, FOOT, true); leg(0, K, 0, FOOT, false);
    }
  };

  // --- юбка / подол
  const drawSkirt = () => {
    if (!d.skirt) return; const P = new Part(true); const long = d.skirt === 'long';
    const w0 = side ? B.depth + 1 : B.rows[T - 1] + (long ? 2 : 0); const y0 = hipY - 1 + (p.bob > 0 ? 0 : 0), y1 = long ? (p.sit ? FOOT - 1 : FOOT - 2) : hipY + (B.kid ? 3 : 5);
    for (let y = y0; y <= y1; y++) { const f = (y - y0) / Math.max(1, y1 - y0); let w = Math.round(w0 + f * (long ? 8 : 4)); if (side) { const x0 = CX - (B.depth >> 1) - 1 - Math.round(f * (long ? 3 : 1)); P.hline(x0, x0 + w - 1 - Math.round(f * (long ? 2 : 2)), y, bot); } else { w += w & 1; P.hline(CX - w / 2, CX + w / 2 - 1, y, bot); } }
    P.commit(buf);
    if (d.trim && long && d.trim !== d.bottom) for (let x = 0; x < FW; x++) if (buf.get(x, y1) === bot) buf.set(x, y1, trim, 1);
    // складки
    if (!side) for (let y = y0 + 2; y <= y1; y++) { if (buf.get(CX - 3, y) === bot) buf.tone(CX - 3, y, 1); if (long && buf.get(CX + 2, y) === bot) buf.tone(CX + 2, y, 1); }
  };

  // --- торс
  const drawTorso = () => {
    const P = new Part(true); const tm = coat ? coatM : top;
    for (let r = 0; r < T; r++) {
      const y = torsoTop + r; let x0: number, x1: number;
      if (side) { const dpt = B.depth; x0 = CX - (dpt >> 1) - 1; x1 = x0 + dpt - 1; if (r === 0) { x0++; x1--; } if (!B.male && !B.kid && r >= 2 && r <= 3) x1++; x0 += shearX(r); x1 += shearX(r); }
      else { const w = B.rows[r]; x0 = CX - w / 2; x1 = CX + w / 2 - 1; }
      // пояс брюк: две нижние строки — низ (если нет юбки и не платье)
      const isBot = !d.skirt && !coat && r >= T - 1;
      P.hline(x0, x1, y, isBot ? bot : tm);
    }
    if (coat && !p.sit) { // полы пальто до колен
      const y1 = hipY + Math.floor(L * 0.6); for (let y = hipY; y <= y1; y++) { const f = (y - hipY) / (y1 - hipY); if (side) { const x0 = CX - (B.depth >> 1) - 2 - Math.round(f * 2); P.hline(x0, x0 + B.depth + 1 + Math.round(f * 2), y, coatM); } else { const w = B.rows[T - 1] + 2 + Math.round(f * 3) * 2; P.hline(CX - w / 2, CX + w / 2 - 1, y, coatM); } }
    }
    P.commit(buf);
    const at = (x: number, y: number) => buf.get(x, y) >= 0;
    // декольте и детали одежды (анфас)
    if (front) {
      const neckL = CX - 2, y = torsoTop;
      if (has('offshoulder')) { // открытые плечи: кожа сверху, вырез
        const w = B.rows[1]; for (let x = CX - w / 2; x < CX + w / 2; x++) { buf.set(x, y, skin, x < CX - 2 ? 0 : 1); buf.set(x, y + 1, skin, 1); }
        buf.set(CX - w / 2, y + 1, skin, 0); buf.set(CX + w / 2 - 1, y + 1, skin, 2); buf.set(CX + w / 2 - 1, y, skin, 2);
        for (let x = CX - w / 2; x < CX + w / 2; x++) buf.set(x, y + 2, top, 0); // кромка
        if (has('buckle')) { // лямки-портупея от выреза вниз, пряжка на правой лямке, пуговицы по планке
          for (let yy = y + 2; yy < hipY; yy++) { buf.set(CX - 3, yy, top, 3); buf.set(CX + 2, yy, top, 3); }
          buf.set(CX - 4, y + 4, gold, 0); buf.set(CX - 3, y + 4, gold, 1); buf.set(CX - 4, y + 5, gold, 2); buf.set(CX - 3, y + 5, top, 3);
          for (let yy = y + 3; yy < hipY - 1; yy++) { buf.set(CX - 1, yy, top, yy % 2 ? 2 : 1); } for (let yy = y + 4; yy < hipY - 1; yy += 2) buf.set(CX - 1, yy, top, 3); }
        else for (let yy = y + 3; yy < hipY; yy++) for (let x = CX - 4; x < CX + 4; x += 2) if (buf.get(x, yy) === top && buf.t[yy * FW + x] === 1) buf.tone(x, yy, 1); // рубчик
      } else if (has('tank')) { for (let x = CX - 3; x < CX + 3; x++) buf.set(x, y, skin, 1); for (let x = CX - 2; x < CX + 2; x++) buf.set(x, y + 1, skin, 1); buf.set(CX - B.ws / 2 + 1, y, top, 2); buf.set(CX + B.ws / 2 - 2, y, top, 2); }
      else if (d.id === 'alla' || d.id === 'queen' || has('strapless')) { const w = B.rows[1]; for (let x = CX - w / 2; x < CX + w / 2; x++) { buf.set(x, y, skin, 1); buf.set(x, y + 1, skin, x < CX - 3 ? 0 : 1); } buf.set(CX - 1, y + 2, skin, 2); buf.set(CX, y + 2, skin, 2); for (let x = CX - w / 2; x < CX + w / 2; x++) if (x !== CX - 1 && x !== CX) buf.set(x, y + 2, top, 0); }
      else if (has('vneck')) { for (let r = 0; r < 4; r++) for (let x = CX - 3 + r; x < CX + 3 - r; x++) buf.set(x, y + r, skin, r === 3 ? 2 : 1); }
      else if (has('open')) { // распахнутый кардиган/куртка, рубашка внутри
        const inner = M.id(d.inner || '#ecebe6'); const iw = B.rows[1] >= 12 ? 4 : 4; for (let yy = y; yy < hipY - (d.skirt ? 0 : 1); yy++) for (let x = CX - iw / 2; x < CX + iw / 2; x++) buf.set(x, yy, inner, has('stripes') && (x & 1) ? 2 : x === CX - iw / 2 ? 0 : 1);
        for (let yy = y + 1; yy < hipY - 1; yy++) { buf.set(CX - iw / 2 - 1, yy, top, 2); buf.set(CX + iw / 2, yy, top, 3); }
        buf.set(CX - 1, y, skin, 1); buf.set(CX, y, skin, 2); buf.set(CX - 3, y, inner, 0); buf.set(CX + 2, y, inner, 1); // воротник
        if (has('suspenders')) for (let yy = y + 1; yy < hipY; yy++) { buf.set(CX - iw / 2, yy, black, 1); buf.set(CX + iw / 2 - 1, yy, black, 1); }
      } else if (has('jacket')) { const sh = M.id(d.trim || '#f4f0e8'); for (let r = 0; r < T - 2; r++) { const w = Math.max(2, 6 - r); for (let x = CX - w / 2; x < CX + w / 2; x++) buf.set(x, y + r, sh, x === CX - w / 2 ? 0 : 1); } for (let r = 0; r < 5; r++) { buf.set(CX - 3 + (r >> 1), y + r + 1, top, 0); buf.set(CX + 2 - (r >> 1), y + r + 1, top, 2); } }
      else if (has('hoodie')) { const hd = M.id(shade2(d.top, -0.1)); for (let x = CX - 5; x < CX + 5; x++) buf.set(x, y - 1, hd, x < CX - 2 ? 1 : 2); for (let x = CX - 4; x < CX + 4; x++) buf.set(x, y, hd, x < CX ? 2 : 3); buf.set(CX - 5, y, hd, 2); buf.set(CX + 4, y, hd, 3); const pk = hipY - 4; for (let x = CX - 3; x < CX + 3; x++) { buf.set(x, pk, top, 2); } for (let yy = pk + 1; yy < hipY - 1; yy++) { buf.set(CX - 4, yy, top, 2); buf.set(CX + 3, yy, top, 3); } buf.set(CX - 2, y + 1, white, 1); buf.set(CX - 2, y + 2, white, 1); buf.set(CX + 1, y + 1, white, 1); buf.set(CX + 1, y + 2, white, 2); buf.set(CX - 2, y + 3, white, 2); buf.set(CX + 1, y + 3, white, 2); }
      else { // круглый вырез
        buf.set(CX - 2, y, skin, 1); buf.set(CX - 1, y, skin, 1); buf.set(CX, y, skin, 2); buf.set(CX + 1, y, skin, 2);
        if (d.trim && d.trim !== d.top && !has('scarf') && !has('bowtie') && !has('tie')) { buf.set(CX - 3, y, trim, 0); buf.set(CX + 2, y, trim, 1); buf.set(CX - 2, y + 1, trim, 1); buf.set(CX + 1, y + 1, trim, 1); buf.set(CX - 1, y + 1, skin, 2); buf.set(CX, y + 1, skin, 2); }
      }
      if (has('collar')) { buf.set(CX - 2, y, white, 0); buf.set(CX - 1, y, white, 1); buf.set(CX, y, white, 1); buf.set(CX + 1, y, white, 2); buf.set(CX - 2, y + 1, white, 1); buf.set(CX + 1, y + 1, white, 2); }
      if (has('tie')) { const tie = M.id('#b3172e'); buf.set(CX - 1, y + 1, tie, 0); buf.set(CX, y + 1, tie, 1); for (let r = 2; r < 7; r++) { buf.set(CX - 1, y + r, tie, 1); buf.set(CX, y + r, tie, 2); } buf.set(CX - 1, y + 7, tie, 2); }
      if (has('bowtie')) { const bt = has('jacket') ? black : black; buf.set(CX - 2, y + 1, bt, 1); buf.set(CX - 1, y + 1, bt, 2); buf.set(CX, y + 1, bt, 2); buf.set(CX + 1, y + 1, bt, 1); buf.set(CX - 2, y, bt, 1); buf.set(CX + 1, y, bt, 1); }
      if (has('scarf')) { const sc = M.id(d.trim || '#e84a6f'); for (let x = CX - B.ws / 2 + 1; x < CX + B.ws / 2 - 1; x++) buf.set(x, y, sc, x < CX ? 0 : 1); for (let r = 1; r < 6; r++) { buf.set(CX + 1, y + r, sc, r & 1 ? 1 : 2); buf.set(CX + 2, y + r, sc, 2); } buf.set(CX + 1, y + 6, sc, 3); }
      if (has('suspenders') && !has('open')) for (let yy = y + 1; yy < hipY; yy++) { buf.set(CX - 3, yy, black, 1); buf.set(CX + 2, yy, black, 1); }
      if (has('stripes') && !has('open')) for (let yy = y + 1; yy < hipY - 1; yy++) for (let x = CX - 4; x < CX + 4; x += 2) if (buf.get(x, yy) === top) buf.tone(x, yy, 1);
      if (has('pins')) { buf.set(CX + 3, y + 3, white, 0); buf.set(CX - 4, y + 4, gold, 0); buf.set(CX + 4, y + 5, M.id('#4ae0c0'), 0); }
      if (has('belt') || (!d.skirt && !coat && !has('open') && T > 0)) { /* пояс: строка низа уже есть */ }
      if (coat) { for (let yy = y + 1; yy <= hipY + Math.floor(L * 0.6) && !p.sit; yy++) if (at(CX - 1, yy)) buf.set(CX - 1, yy, coatM, 3); buf.set(CX - 3, hipY - 1, black, 1); buf.set(CX - 2, hipY - 1, black, 1); buf.set(CX + 1, hipY - 1, black, 1); buf.set(CX + 2, hipY - 1, black, 1); buf.set(CX - 2, y, coatM, 0); buf.set(CX + 1, y, coatM, 2); buf.set(CX - 1, y, top === coatM ? white : top, 1); buf.set(CX, y, top === coatM ? white : top, 2); }
    } else if (back) {
      if (has('offshoulder') || d.id === 'alla' || d.id === 'queen') { const w = B.rows[1]; for (let x = CX - w / 2; x < CX + w / 2; x++) buf.set(x, torsoTop, skin, x < CX - 2 ? 0 : 1); for (let x = CX - w / 2; x < CX + w / 2; x++) buf.set(x, torsoTop + 1, top, 0); }
      if (has('hoodie')) { const hd = M.id(shade2(d.top, -0.1)); for (let r = 0; r < 4; r++) for (let x = CX - 4 + r; x < CX + 4 - r; x++) buf.set(x, torsoTop + r, hd, r === 0 ? 1 : 2); }
      if (has('suspenders')) for (let yy = torsoTop + 1; yy < hipY; yy++) { buf.set(CX - 3, yy, black, 1); buf.set(CX + 2, yy, black, 1); }
      if (has('tank')) { for (let x = CX - 3; x < CX + 3; x++) buf.set(x, torsoTop, skin, 1); }
    } else { // профиль
      const y = torsoTop; const fx = (r: number) => { let x1 = -99; for (let x = 0; x < FW; x++) if (buf.get(x, y + r) >= 0) x1 = x; return x1; };
      if (has('offshoulder') || d.id === 'alla' || d.id === 'queen') { for (let x = CX - 4 + shearX(0); x <= fx(0); x++) buf.set(x, y, skin, 1); for (let x = CX - 4 + shearX(1); x <= fx(1); x++) buf.set(x, y + 1, skin, 1); for (let x = CX - 4 + shearX(2); x <= fx(2); x++) buf.set(x, y + 2, top, 0); }
      if (has('tank') || has('vneck')) { buf.set(fx(0), y, skin, 1); buf.set(fx(0) - 1, y, skin, 1); buf.set(fx(1), y + 1, skin, 2); }
      if (has('open')) { const inner = M.id(d.inner || '#ecebe6'); for (let r = 0; r < T - 1; r++) { const x = fx(r); buf.set(x, y + r, inner, has('stripes') && r & 1 ? 2 : 1); buf.set(x - 1, y + r, top, 3); } }
      if (has('tie')) for (let r = 1; r < 7; r++) buf.set(fx(r), y + r, M.id('#b3172e'), 1);
      if (has('collar')) { buf.set(fx(0), y, white, 1); buf.set(fx(0) - 1, y, white, 1); }
      if (has('hoodie')) { const hd = M.id(shade2(d.top, -0.1)); for (let r = 0; r < 4; r++) buf.set(CX - 4 + shearX(r) + (r > 1 ? 0 : 0), y + r, hd, 2); buf.set(CX - 3, y, hd, 2); buf.set(CX - 2, y, hd, 1); }
      if (has('jacket')) { const sh = M.id(d.trim || '#f4f0e8'); for (let r = 0; r < 4; r++) buf.set(fx(r), y + r, sh, 1); }
      if (has('suspenders')) for (let yy = y + 1; yy < hipY; yy++) buf.set(CX + shearX(yy - y), yy, black, 1);
      if (has('scarf')) { const sc = M.id(d.trim || '#e84a6f'); for (let x = CX - 3; x <= fx(0); x++) buf.set(x, y, sc, 1); buf.set(fx(1), y + 1, sc, 2); buf.set(fx(2), y + 2, sc, 2); }
    }
  };

  // --- шея
  const drawNeck = () => { const P = new Part(); const nx = side ? headX + 5 : CX - 2; P.rect(nx, torsoTop - 2, side ? 3 : 4, 2, skin, 2); P.commit(buf); };

  // --- руки
  const shY = torsoTop;
  const furAt: [number, number, number][] = [];
  const drawFur = () => { const fur = M.id('#f4efe8'); // меховой палантин лежит на локтях, поверх волос
    for (const [ex, ey, aw] of furAt) for (let j = -2; j <= 3; j++) for (let i = -1; i <= aw; i++) { if ((j === -2 || j === 3) && (i === -1 || i === aw)) continue; buf.set(ex + i, ey + j, fur, j === -2 ? 0 : (i + j * 2) % 3 === 0 ? 2 : i === aw ? 2 : 1); } };
  const drawArm = (s: number, a: Arm, far: boolean) => {
    const aw = B.aw; let sx: number;
    if (side) sx = CX - (aw >> 1) - 1 + shearX(1) + (far ? 1 : 0);
    else sx = s < 0 ? CX - B.ws / 2 - aw + 1 : CX + B.ws / 2 - 1;
    const mx = (v: number) => (side ? v : s < 0 ? v : -v);
    const ex = sx + mx(a.e[0]), ey = shY + a.e[1], hx = sx + mx(a.h[0]) + (side || s < 0 ? 0 : 0), hy = shY + a.h[1];
    const P = new Part();
    const glove = has('gloves') ? black : skin;
    const bare = has('offshoulder') || d.id === 'alla' || d.id === 'queen' || has('strapless');
    const upperM = (f: number) => (bare && f < 0.3) || sleeve === 'none' ? skin : sleeve === 'short' && f > 0.75 ? skin : armTop;
    const lowerM = (f: number) => sleeve === 'long' ? armTop : has('gloves') && (f > 0.1 || sleeve === 'none') ? black : skin;
    P.line(sx, shY, ex, ey, aw, upperM); P.line(ex, ey, hx, hy, aw, lowerM);
    // кисть: на конце предплечья, по направлению
    const dx = Math.sign(hx - ex), dy = Math.sign(hy - ey);
    const kx = hx + (Math.abs(hx - ex) > Math.abs(hy - ey) ? dx * aw : 0) + (aw === 3 && Math.abs(hx - ex) <= Math.abs(hy - ey) ? (side ? 1 : s < 0 ? 0 : 1) : 0);
    const ky = hy + (Math.abs(hx - ex) > Math.abs(hy - ey) ? 0 : dy * aw);
    P.rect(kx, ky, 2, 2, glove);
    P.commit(buf, far ? 1 : 0);
    if (has('fur') && !far && !back) furAt.push([ex, ey, aw]);
    if (has('bracelets') && !far) { const by = sleeve === 'long' ? -1 : 0; if (Math.abs(hx - ex) <= Math.abs(hy - ey)) { buf.set(hx, hy + aw - 1 + by, gold, 0); buf.set(hx + 1, hy + aw - 1 + by, M.id('#4ae0c0'), 1); } }
  };
  const armsPass = () => {
    if (side) { drawArm(1, p.aL, false); }
    else { drawArm(-1, p.aL, false); drawArm(1, p.aR, false); }
  };

  // --- голова
  const drawHead = () => {
    const tpl = side ? HEAD_S : back ? HEAD_B : HEAD_F; const hx0 = headX, hy0 = headYl;
    for (let y = 0; y < tpl.length; y++) for (let x = 0; x < tpl[y].length; x++) {
      const ch = tpl[y][x]; if (ch === '.') continue;
      const t = ch === 'L' ? 0 : ch === 'S' ? 1 : ch === 'D' ? 2 : ch === 'E' ? 2 : ch === 'X' ? 3 : 1; buf.set(hx0 + x, hy0 + y, skin, t);
    }
    if (back) return;
    const eyeM = M.id(d.eyes), lid = M.id(shade2(mix(d.eyes, d.hair, 0.5), -0.55)), lips = M.id(d.lips || shade2(d.skin, -0.28)), wh = M.id(WHITE);
    const blush = M.id(mix(d.skin, '#e86a70', 0.45)); const browM = M.id(shade2(d.hair, -0.35));
    const fem = !B.male;
    if (front) {
      const ey = hy0 + 5; const L0 = hx0 + 4, R0 = hx0 + 8;
      // брови
      const bY = ey - 1; if (d.brows === 'arch') { buf.set(L0, bY, browM, 1); buf.set(L0 + 1, bY - 1, browM, 1); buf.set(R0 + 1, bY, browM, 1); buf.set(R0, bY - 1, browM, 1); }
      else if (d.brows === 'strict') { buf.set(L0, bY, browM, 2); buf.set(L0 + 1, bY, browM, 2); buf.set(R0, bY, browM, 2); buf.set(R0 + 1, bY, browM, 2); }
      else { buf.set(L0, bY, browM, 0); buf.set(L0 + 1, bY, browM, 0); buf.set(R0, bY, browM, 0); buf.set(R0 + 1, bY, browM, 0); }
      if (p.eyes === 'c') { for (const x0 of [L0, R0]) { buf.set(x0, ey + 1, lid, 1); buf.set(x0 + 1, ey + 1, lid, 1); } if (fem) { buf.set(L0 - 1, ey + 1, lid, 1); buf.set(R0 + 2, ey + 1, lid, 1); } }
      else for (const [x0, s] of [[L0, -1], [R0, 1]] as [number, number][]) {
        buf.set(x0, ey, lid, 1); buf.set(x0 + 1, ey, lid, 1);
        if (fem) buf.set(s < 0 ? x0 - 1 : x0 + 2, ey, lid, 1);
        buf.set(x0, ey + 1, s < 0 ? wh : eyeM, s < 0 ? 1 : 3); buf.set(x0 + 1, ey + 1, s < 0 ? eyeM : wh, s < 0 ? 3 : 1);
        buf.set(x0, ey + 2, eyeM, 1); buf.set(x0 + 1, ey + 2, eyeM, 2);
        if (p.eyes === 'w') { buf.set(x0, ey + 2, wh, 1); buf.set(x0 + 1, ey + 2, eyeM, 3); }
      }
      buf.set(hx0 + 3, ey + 3, blush, 1); buf.set(hx0 + 10, ey + 3, blush, 1);
      buf.set(hx0 + 7, ey + 3, skin, 2); // нос
      const my = hy0 + 10;
      if (p.mouth === 'o') { buf.set(hx0 + 6, my - 1, M.id('#6a1a24'), 2); buf.set(hx0 + 7, my - 1, M.id('#6a1a24'), 2); buf.set(hx0 + 6, my, M.id('#6a1a24'), 1); buf.set(hx0 + 7, my, M.id('#6a1a24'), 1); }
      else if (p.mouth === 's') { buf.set(hx0 + 5, my - 1, lips, 2); buf.set(hx0 + 6, my, lips, 2); buf.set(hx0 + 7, my, lips, 2); buf.set(hx0 + 8, my - 1, lips, 2); }
      else { buf.set(hx0 + 6, my, lips, d.lips ? 1 : 2); buf.set(hx0 + 7, my, lips, d.lips ? 1 : 2); }
      if (has('freckles')) for (const fx of [3, 5, 8, 10]) buf.set(hx0 + fx, ey + 3 + (fx === 5 || fx === 8 ? 1 : 0), skin, 3);
      if (has('mole')) buf.set(hx0 + 9, ey + 4, M.id('#3a1a14'), 1);
      if (has('glasses')) { const g = M.id('#3a2a32'); for (const [x0, o] of [[L0, -1], [R0, 2]] as [number, number][]) { for (let k = 0; k <= 1; k++) buf.set(x0 + k, ey + 3, g, 1); buf.set(x0 + o, ey + 2, g, 1); buf.set(x0 + o, ey + 1, g, 0); } buf.set(hx0 + 6, ey + 1, g, 1); buf.set(hx0 + 7, ey + 1, g, 1); }
      if (has('visor')) { const vm = M.id(d.trim || '#40e0d0'); for (let x = hx0 + 1; x <= hx0 + 12; x++) { buf.set(x, ey, vm, 0); buf.set(x, ey + 1, vm, 1); buf.set(x, ey + 2, vm, 2); } }
      if (has('maskface')) { const mk = M.id('#ece8dc'); for (let y = 2; y < 13; y++) for (let x = 0; x < 14; x++) if (tpl[y][x] !== '.' && tpl[y][x] !== 'E') buf.set(hx0 + x, hy0 + y, mk, x < 4 ? 0 : x > 10 ? 2 : 1); for (const x0 of [L0, R0]) { buf.set(x0, ey + 1, black, 1); buf.set(x0 + 1, ey + 1, black, 1); buf.set(x0, ey + 2, black, 1); buf.set(x0 + 1, ey + 2, black, 1); } for (let x = hx0 + 5; x <= hx0 + 8; x++) buf.set(x, my, black, 1); buf.set(hx0 + 4, my - 1, black, 1); buf.set(hx0 + 9, my - 1, black, 1); }
      if (has('maskhalf')) { const mk = gold; for (let x = hx0 + 1; x <= hx0 + 12; x++) for (let j = -1; j <= 3; j++) buf.set(x, ey + j, mk, j < 0 ? 0 : j > 2 ? 2 : 1); for (const x0 of [L0, R0]) { buf.set(x0, ey + 1, black, 1); buf.set(x0 + 1, ey + 1, black, 1); } buf.set(hx0 + 12, ey - 2, M.id('#c41e3a'), 1); buf.set(hx0 + 13, ey - 3, M.id('#c41e3a'), 1); }
      if (has('monocle')) { for (let i = -1; i <= 2; i++) { buf.set(R0 + i, ey - 1, gold, 0); buf.set(R0 + i, ey + 3, gold, 1); } for (let j = 0; j < 3; j++) { buf.set(R0 - 1, ey + j, gold, 1); buf.set(R0 + 2, ey + j, gold, 1); } for (let j = 4; j < 9; j++) buf.set(R0 + 2, ey + j, gold, 2); }
      if (has('sunglasses')) for (const x0 of [L0, R0]) for (let i = -1; i <= 2; i++) { buf.set(x0 + i, ey, black, 1); buf.set(x0 + i, ey + 1, black, 0); }
    } else { // профиль
      const ey = hy0 + 5, ex = hx0 + 10;
      if (p.eyes === 'c') { buf.set(ex, ey + 1, lid, 1); buf.set(ex - 1, ey + 1, lid, 1); }
      else { buf.set(ex, ey, lid, 1); buf.set(ex + 1, ey, lid, 1); if (fem) buf.set(ex - 1, ey, lid, 1); buf.set(ex, ey + 1, eyeM, 3); buf.set(ex + 1, ey + 1, wh, 1); buf.set(ex, ey + 2, eyeM, 1); if (p.eyes === 'w') buf.set(ex + 1, ey + 2, wh, 1); }
      if (d.brows === 'strict') { buf.set(ex, ey - 1, browM, 2); buf.set(ex + 1, ey - 1, browM, 2); } else { buf.set(ex, ey - 1, browM, 0); buf.set(ex + 1, ey - 1, browM, 0); }
      buf.set(ex - 1, ey + 3, blush, 1);
      const my = hy0 + 10; if (p.mouth === 'o') { buf.set(hx0 + 11, my, M.id('#6a1a24'), 1); buf.set(hx0 + 12, my, M.id('#6a1a24'), 1); } else buf.set(hx0 + 11, my, lips, d.lips ? 1 : 2);
      if (p.mouth === 's') buf.set(hx0 + 10, my - 1, lips, 2);
      if (has('freckles')) { buf.set(ex - 1, ey + 3, skin, 3); buf.set(ex + 1, ey + 3, skin, 3); }
      if (has('glasses')) { const gm = M.id('#2a2028'); for (let x = hx0 + 6; x < ex - 1; x++) buf.set(x, ey, gm, 1); buf.set(ex - 1, ey + 1, gm, 1); buf.set(ex - 1, ey + 2, gm, 1); buf.set(ex, ey + 3, gm, 1); buf.set(ex + 1, ey + 3, gm, 1); buf.set(ex + 2, ey + 2, gm, 1); }
      if (has('visor')) { const vm = M.id(d.trim || '#40e0d0'); for (let x = hx0 + 6; x <= hx0 + 13; x++) for (let j = 0; j < 3; j++) buf.set(x, ey + j, vm, j); }
      if (has('maskface')) { const mk = M.id('#ece8dc'); for (let y = 2; y < 13; y++) for (let x = 7; x < 14; x++) if (tpl[y][x] !== '.') buf.set(hx0 + x, hy0 + y, mk, 1); buf.set(ex, ey + 1, black, 1); buf.set(ex, ey + 2, black, 1); buf.set(hx0 + 11, my, black, 1); }
      if (has('maskhalf')) for (let x = hx0 + 7; x <= hx0 + 13; x++) for (let j = -1; j <= 3; j++) if (buf.get(x, ey + j) === skin) buf.set(x, ey + j, gold, 1);
      if (has('monocle')) { buf.set(ex + 1, ey, gold, 0); buf.set(ex + 1, ey + 2, gold, 1); buf.set(ex + 2, ey + 1, gold, 1); }
      if (has('sunglasses')) for (let i = 0; i < 3; i++) buf.set(ex - 1 + i, ey + 1, black, 0);
    }
  };

  // --- украшения на груди (после рук-по-бокам, т.к. на груди)
  const drawNeckwear = () => {
    const y = torsoTop;
    if (side) {
      const fx = (r: number) => { let x1 = -99; for (let x = 0; x < FW; x++) { const m = buf.get(x, y + r); if (m === top || m === skin || m === coatM) x1 = x; } return x1; };
      if (has('necklace') || has('cross') || has('pearls') || has('pendant')) buf.set(fx(1), y + 1, has('pearls') ? white : gold, 0);
      if (has('camera')) { const cam = M.id('#2a2a30'); for (let j = 0; j < 4; j++) for (let i = 0; i < 3; i++) buf.set(fx(4) - 1 + i, y + 4 + j, cam, j === 0 ? 0 : 1); buf.set(fx(4) + 2, y + 5, M.id('#7ab0d0'), 0); }
      if (has('fur')) { const fur = M.id('#f4efe8'); for (let x = CX - 4; x <= CX + 2; x++) buf.set(x, y, fur, 0); for (let x = CX - 5; x <= CX + 3; x++) buf.set(x, y + 1, fur, x > CX ? 2 : 1); }
      return;
    }
    if (back) { if (has('fur')) { const fur = M.id('#f4efe8'); for (let x = CX - B.ws / 2 - 1; x < CX + B.ws / 2 + 1; x++) { buf.set(x, y + 1, fur, 0); buf.set(x, y + 2, fur, (x & 1) ? 1 : 2); } } return; }
    if (has('fur')) { const fur = M.id('#f4efe8'); // меховой палантин: на плечах и локтях
      void fur;
    }
    if (has('necklace') && !has('cross') && !has('pendant')) { if (d.id === 'alla' || d.id === 'queen' || has('fur')) { for (const x of [CX - 2, CX - 1, CX, CX + 1]) buf.set(x, y + 1, silver, x === CX - 1 ? 0 : 1); buf.set(CX - 1, y + 2, silver, 0); buf.set(CX, y + 2, M.id('#bfe8ff'), 0); } else { const ch = has('open') ? silver : gold; buf.set(CX - 2, y, ch, 1); buf.set(CX + 1, y, ch, 1); buf.set(CX - 1, y + 1, ch, 0); buf.set(CX, y + 1, ch, 1); if (has('open')) { buf.set(CX - 1, y + 3, ch, 1); buf.set(CX, y + 2, ch, 0); } } }
    if (has('pendant')) { buf.set(CX - 2, y, black, 1); buf.set(CX + 1, y, black, 1); buf.set(CX - 1, y + 1, black, 1); buf.set(CX, y + 1, black, 1); buf.set(CX - 1, y + 2, gold, 0); buf.set(CX, y + 2, gold, 1); }
    if (has('pearls')) { for (const [x, yy] of [[CX - 3, 0], [CX - 2, 1], [CX - 1, 1], [CX, 1], [CX + 1, 1], [CX + 2, 0]] as [number, number][]) buf.set(x, y + yy, white, 0); }
    if (has('cross')) { buf.set(CX - 2, y, gold, 1); buf.set(CX + 1, y, gold, 1); buf.set(CX - 1, y + 1, gold, 2); buf.set(CX - 1, y + 2, gold, 0); buf.set(CX - 2, y + 3, gold, 1); buf.set(CX - 1, y + 3, gold, 0); buf.set(CX, y + 3, gold, 1); buf.set(CX - 1, y + 4, gold, 1); }
    if (has('camera')) { const cam = M.id('#2a2a30'); for (let x = CX - 3; x < CX + 3; x++) for (let j = 0; j < 4; j++) buf.set(x, y + 5 + j, cam, j === 0 ? 0 : x === CX + 2 ? 2 : 1); buf.set(CX - 1, y + 6, M.id('#7ab0d0'), 0); buf.set(CX, y + 6, M.id('#7ab0d0'), 1); buf.set(CX - 1, y + 7, M.id('#7ab0d0'), 2); buf.set(CX, y + 7, M.id('#7ab0d0'), 2); buf.set(CX + 1, y + 5, M.id('#c8c8d0'), 0);
      for (let r = 1; r < 5; r++) { buf.set(CX - 4 + (r >> 2), y + r, black, 2); buf.set(CX + 3 - (r >> 2), y + r, black, 2); } }
  };

  // --- головные уборы
  const drawHeadwear = () => {
    const put = (art: string[][] | undefined, ox: number, oy: number, pal: Record<string, [number, number]>) => { if (!art) return; const g = side ? art[2] : back ? art[1] : art[0]; if (!g) return; for (let y = 0; y < g.length; y++) for (let x = 0; x < g[y].length; x++) { const c = pal[g[y][x]]; if (c) buf.set(ox + x, oy + y, c[0], c[1]); } };
    const ox = headX - 3, oy = headYl - 3;
    if (has('hat')) { const hm = M.id(d.id.startsWith('cashier') ? '#3a4a6a' : '#2c2a30'), band = M.id(d.id.startsWith('cashier') ? '#e8e8e8' : '#7a1a22'); put(d.id.startsWith('cashier') ? HAT : FEDORA, ox, oy, { '1': [hm, 0], '2': [hm, 1], '3': [hm, 2], '4': [hm, 3], b: [band, 1], c: [band, 2] }); }
    if (has('crown')) put(CROWN, ox, oy, { '1': [gold, 0], '2': [gold, 1], '3': [gold, 2], r: [M.id('#c41e3a'), 1], w: [white, 0] });
    if (has('headphones')) { const hp = M.id('#26242a'); if (side) { for (let j = 0; j < 4; j++) for (let i = 0; i < 3; i++) buf.set(headX + 4 + i, headYl + 5 + j, hp, i === 0 ? 0 : 1); for (let j = -2; j < 5; j++) buf.set(headX + 5, headYl + j, hp, 1); } else { for (let x = headX; x <= headX + 13; x++) buf.set(x, headYl - 2 + (x === headX || x === headX + 13 ? 1 : 0), hp, 1); for (const x0 of [headX - 1, headX + 13]) for (let j = 0; j < 4; j++) { buf.set(x0, headYl + 5 + j, hp, 1); buf.set(x0 + 1, headYl + 5 + j, hp, 2); } } }
    if (has('shadesup')) { if (front) { for (const x0 of [headX + 3, headX + 8]) for (let i = 0; i < 3; i++) { buf.set(x0 + i, headYl - 1, black, 0); buf.set(x0 + i, headYl, black, 1); } buf.set(headX + 6, headYl - 1, black, 1); buf.set(headX + 7, headYl - 1, black, 1); buf.set(headX + 4, headYl - 1, M.id('#6a6a7a'), 0); buf.set(headX + 9, headYl - 1, M.id('#6a6a7a'), 0); } else if (side) { for (let i = 0; i < 4; i++) buf.set(headX + 8 + i, headYl - 1, black, i === 3 ? 0 : 1); buf.set(headX + 7, headYl - 1, black, 1); buf.set(headX + 9, headYl, black, 1); } }
    if (has('earrings') && front) { buf.set(headX, headYl + 8, gold, 0); buf.set(headX + 13, headYl + 8, gold, 1); }
    if (has('earrings') && side) buf.set(headX + 5, headYl + 9, gold, 0);
  };

  // ======== порядок слоёв ========
  if (side) {
    // дальняя рука за телом
    if (frame !== 'lie') { const far = { ...p.aR }; drawArmFar(far); }
  }
  function drawArmFar(a: Arm) { const sv = buf; void sv; drawArm(1, a, true); }
  drawLegs(); drawSkirt(); drawTorso(); drawNeck();
  if (!p.armsOver) armsPass();
  drawNeckwear();
  if (front && !has('fur') && (has('fur'))) void 0;
  drawHead(); hairDraw('front'); drawHeadwear();
  if (p.armsOver) armsPass();
  drawFur();
  return buf;
}
const isHair = (mask: string[], x: number, y: number) => { const c = mask[y]?.[x]; return !!c && c !== '.' && c !== 'k' && c !== 'w' && c !== 'r'; };
/** Тон текстурных прядей: прямые (L), волна (V), кудри (C); свет слева, тень справа и на кончиках. */
function hairTex(mask: string[], x: number, y: number, k: string): number {
  let t: number;
  if (k === 'L') t = x % 3 === 2 ? 2 : (y % 9 === 1 && x % 3 === 0 ? 0 : 1);
  else if (k === 'V') { // волна: S-образные тёмные пряди с периодом 4, фаза у каждой пряди своя
    const strand = Math.floor((x + 1) / 4); const ph = (strand * 3) % 8; const w = [0, 0, 1, 1, 1, 1, 0, 0][(y + ph) % 8]; const u = ((x + w) % 4 + 4) % 4;
    t = u === 3 ? 2 : u === 1 && (y + ph) % 8 === 1 ? 0 : 1; if (u === 3 && (y + ph) % 8 === 4) t = 3; if (y >= 6 && y <= 7 && u !== 3) t = 0; }
  else { // кудри: неровные завитки 4×3 с собственным сдвигом
    const band = Math.floor(y / 3); const sh = hash(band, 3) % 4; const cell = Math.floor((x + sh) / 4); const j = hash(cell, band) % 3; const u = (x + sh) % 4, v = (y + (j === 2 ? 1 : 0)) % 3;
    t = [[2, 1, 0, 1], [1, 1, 1, 2], [3, 2, 2, 3]][v][u]; if (j === 1 && v === 2 && u === 1) t = 1; }
  const L = !isHair(mask, x - 1, y), R = !isHair(mask, x + 1, y), R2 = !isHair(mask, x + 2, y), D = !isHair(mask, x, y + 1), U = !isHair(mask, x, y - 1);
  if (L) t = Math.max(0, t - 1); if (U && !R) t = Math.max(0, t - 1);
  if (R) t = Math.min(3, Math.max(t, 2) + (t >= 2 ? 1 : 0)); else if (R2) t = Math.max(t, 2);
  if (D) t = Math.min(3, t + 1);
  return t;
}
function hash(a: number, b: number) { let h = (a * 374761393 + b * 668265263) | 0; h = (h ^ (h >>> 13)) * 1274126177; return (h ^ (h >>> 16)) >>> 0; }
function shade2(hex: string, k: number): string { const m = shade(hex, k).match(/\d+/g)!.map(Number); return '#' + m.map((v) => v.toString(16).padStart(2, '0')).join(''); }
function mix(a: string, b: string, t: number): string { const A = hex2rgb(a), Bc = hex2rgb(b); return '#' + A.map((v, i) => Math.round(v + (Bc[i] - v) * t).toString(16).padStart(2, '0')).join(''); }

/** Лёжа: профиль стоя с укороченными ногами, повёрнутый на 90° (голова слева, лицом вверх). */
function lieFrame(d: CharDef, M: Mats): Buf {
  const B = body(d); const T = Math.max(6, B.T - 2), L = Math.max(4, Math.min(B.L, 30 - 17 - T));
  const src = drawFrame(d, M, 'lie', 's', L, T);
  let minX = FW, minY = FH, maxX = 0; for (let y = 0; y < FH; y++) for (let x = 0; x < FW; x++) if (src.get(x, y) >= 0) { minX = Math.min(minX, x); minY = Math.min(minY, y); maxX = Math.max(maxX, x); }
  const out = new Buf();
  for (let y = 0; y < FH; y++) for (let x = 0; x < FW; x++) { const m = src.get(x, y); if (m < 0) continue; const nx = y - minY + 1, ny = FOOT - (x - minX); if (nx >= 1 && nx < FW - 1) out.set(nx, ny, m, src.t[y * FW + x]); }
  return out;
}

/** Цветной контур снаружи силуэта (sel-out): тон соседнего пикселя, сильно затемнённый. */
function finish(b: Buf, M: Mats, out: Uint8ClampedArray, ox: number, oy: number, W: number) {
  for (let y = 0; y < FH; y++) for (let x = 0; x < FW; x++) {
    const i = (oy + y) * W + ox + x; const m = b.get(x, y);
    if (m >= 0) { const c = M.list[m][b.t[y * FW + x]]; out[i * 4] = c[0]; out[i * 4 + 1] = c[1]; out[i * 4 + 2] = c[2]; out[i * 4 + 3] = 255; continue; }
    let nb = -1, nt = 0; for (const [dx, dy] of [[0, 1], [0, -1], [-1, 0], [1, 0]]) { const mm = b.get(x + dx, y + dy); if (mm >= 0) { nb = mm; nt = b.t[(y + dy) * FW + x + dx]; break; } }
    if (nb < 0 || x === 0 || y === 0 || x === FW - 1 || y === FH - 1) continue; void nt;
    const c = outlineOf(M.list[nb][2]); out[i * 4] = c[0]; out[i * 4 + 1] = c[1]; out[i * 4 + 2] = c[2]; out[i * 4 + 3] = 255;
  }
}

/** Пиксели листа персонажа (FW·кадры × FH·3, RGBA). Чистая функция — годится и для Node-превью. */
export function sheetPixels(d: CharDef): { w: number; h: number; data: Uint8ClampedArray } {
  const W = FW * FRAMES.length, H = FH * DIRS.length; const data = new Uint8ClampedArray(W * H * 4); const M = makeMats();
  DIRS.forEach((dir, r) => FRAMES.forEach((f, i) => {
    const special = i >= 6; const dd = special && dir === 'b' && f !== 'sit' && f !== 'arms' && f !== 'dance1' && f !== 'dance2' ? 'f' : dir;
    const b = f === 'lie' ? lieFrame(d, M) : drawFrame(d, M, f, dd);
    finish(b, M, data, i * FW, r * FH, W);
  }));
  if (d.id === 'kukolnik' || d.id === 'narrator') for (let i = 0; i < data.length; i += 4) if (data[i + 3]) { data[i] = 10; data[i + 1] = 8; data[i + 2] = 8; }
  return { w: W, h: H, data };
}

const sheets = new Map<string, HTMLCanvasElement>();
export function charSheet(id: string): HTMLCanvasElement {
  let cv = sheets.get(id); if (cv) return cv;
  const d = CHARS[id]; if (!d) throw new Error('Нет персонажа: ' + id);
  const px = sheetPixels(d);
  cv = document.createElement('canvas'); cv.width = px.w; cv.height = px.h;
  const c = cv.getContext('2d', { willReadFrequently: true })!; c.imageSmoothingEnabled = false;
  const img = c.createImageData(px.w, px.h); img.data.set(px.data); c.putImageData(img, 0, 0);
  sheets.set(id, cv); return cv;
}
export { shade };
