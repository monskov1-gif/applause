// Глава Матвея, 100 STEPS TO THE INEVITABLE. Школьная романтическая мелодрама / аниме-фанфик / комедия.
// Каркас: жанр даёт Матвею роль-ловушку («влюблённый школьник из клише»), у него своё желание (решиться самому),
// Варя помогает режиссурой, и это становится контролем; кульминация, выбор Матвея, Варя отступает.
// Механики: раскадровка (клише-карточки), «Постановочность / Искренность» (мир картонеет от идеальных дублей),
// дубли, которые герои начинают замечать, «идеальный кадр» камерой, финальный выбор: реплика или закрыть раскадровку.
import * as THREE from 'three';
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext, tex } from '../gfx/tex';
import { M } from '../data/dialogue/matvey';
import { pick, timing } from '../ui/minigames';
import { finishChapter, actOf, fog } from './common';
import { window3D, corkBoard } from '../world/decor3d';
import { costumeRack } from '../world/decor';
import { WARM, dolly, angle, warmOn, warmKey, maskHint } from './cine';


const fakeGrade = (n: number) => ({ sat: 1.05 + n * 0.12, tint: [1.04 + n * 0.03, 1.0, 1.03 + n * 0.04], vig: 0.28 + n * 0.08, bright: 0.96, contrast: 1.06, bloom: 0.3 + n * 0.1, wave: n >= 3 ? 0.25 : 0 });
const L = (c: number, o: any = {}) => new THREE.MeshLambertMaterial({ color: c, ...o });

// ---------------- манга-инструментарий (локально для главы) ----------------
type DC = CanvasRenderingContext2D;
const px = (c: DC, x: number, y: number, w: number, h: number, col: string) => { c.fillStyle = col; c.fillRect(x, y, w, h); };
/** Пиксельный диск без сглаживания. */
const disc = (c: DC, cx: number, cy: number, r: number, col: string) => { c.fillStyle = col; for (let y = Math.floor(-r); y <= r; y++) { const hw = Math.floor(Math.sqrt(Math.max(0, r * r - y * y))); c.fillRect(Math.round(cx - hw), Math.round(cy + y), hw * 2 + 1, 1); } };
const hsh = (i: number, s = 0) => { const v = Math.sin(i * 127.1 + s * 311.7) * 43758.5453; return v - Math.floor(v); };
/** Повторяющаяся пиксельная плитка из canvas. */
function tile(key: string, size: number, draw: (c: DC, s: number) => void) { const t = canvasTex(size, size, (c) => draw(c, size), 'mt_' + key); t.wrapS = t.wrapT = THREE.RepeatWrapping; return t; }
/** Плоскость земли/пола с повторяющейся пиксельной плиткой (unit — мировой размер плитки). */
function ground(R: Builder, t: THREE.Texture, x: number, z: number, w: number, d: number, unit = 2, y = 0, col = 0xffffff) {
  const tt = t.clone(); tt.wrapS = tt.wrapT = THREE.RepeatWrapping; tt.repeat.set(w / unit, d / unit); tt.needsUpdate = true;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshLambertMaterial({ map: tt, color: col })); m.rotation.x = -Math.PI / 2; m.position.set(x, y, z); m.receiveShadow = true; R.room.group.add(m); return m;
}
/** Плоскость-картинка (задник, вывеска) в произвольном месте. */
function plane(R: Builder, t: THREE.Texture, x: number, y: number, z: number, w: number, h: number, o: { basic?: boolean; ry?: number; rx?: number; col?: number; opacity?: number; rep?: [number, number] } = {}) {
  let map = t; if (o.rep) { map = t.clone(); map.wrapS = map.wrapT = THREE.RepeatWrapping; map.repeat.set(o.rep[0], o.rep[1]); map.needsUpdate = true; }
  const mat = o.basic ? new THREE.MeshBasicMaterial({ map, transparent: true, alphaTest: 0.05, color: o.col ?? 0xffffff, opacity: o.opacity ?? 1 }) : new THREE.MeshLambertMaterial({ map, transparent: true, alphaTest: 0.05, color: o.col ?? 0xffffff });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat); m.position.set(x, y, z); if (o.ry) m.rotation.y = o.ry; if (o.rx) m.rotation.x = o.rx; m.receiveShadow = !o.basic; R.room.group.add(m); return m;
}
/** Коробка, у которой лицевая сторона (+z) расписана пиксельной текстурой, остальные — однотонный «картон». */
function pbox(R: Builder, x: number, z: number, w: number, d: number, h: number, front: THREE.Texture, o: { side?: number; top?: THREE.Texture | number; y?: number; solid?: boolean; ry?: number } = {}) {
  const side = L(o.side ?? 0x8a8a90); const top = o.top instanceof THREE.Texture ? new THREE.MeshLambertMaterial({ map: o.top }) : L((o.top as number) ?? o.side ?? 0x8a8a90);
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [side, side, top, side, new THREE.MeshLambertMaterial({ map: front }), side]); m.position.set(x, (o.y || 0) + h / 2, z); if (o.ry) m.rotation.y = o.ry; m.castShadow = true; m.receiveShadow = true; R.room.group.add(m);
  if (o.solid !== false) R.collider(x - w / 2, z - d / 2, x + w / 2, z + d / 2); return m;
}
/** Чернильный контур (inverted hull) вокруг объёмных предметов: манга-линия без постобработки. */
function inkOutline(R: Builder, col = 0x1c1424, k = 0.035) {
  const mat = new THREE.MeshBasicMaterial({ color: col, side: THREE.BackSide });
  mat.onBeforeCompile = (s) => { s.vertexShader = s.vertexShader.replace('#include <begin_vertex>', `vec3 transformed = vec3(position) + normalize(normal) * ${k.toFixed(3)};`); };
  const list: THREE.Mesh[] = [];
  R.room.group.traverse((o: any) => { if (!o.isMesh || o.userData.noInk || o.isInstancedMesh) return; const g = o.geometry; if (!(g instanceof THREE.BoxGeometry || g instanceof THREE.CylinderGeometry || g instanceof THREE.ConeGeometry || g instanceof THREE.SphereGeometry || g instanceof THREE.TorusGeometry)) return; const ms = Array.isArray(o.material) ? o.material : [o.material]; if (ms.some((m: any) => m.transparent || m.side === THREE.BackSide)) return; g.computeBoundingBox(); const sz = new THREE.Vector3(); g.boundingBox.getSize(sz); if (Math.max(sz.x * o.scale.x, sz.z * o.scale.z) > 24 || sz.y < 0.02) return; list.push(o); });
  for (const o of list) { const h = new THREE.Mesh(o.geometry, mat); h.userData.noInk = true; h.castShadow = false; h.receiveShadow = false; o.add(h); }
}
const fxCache: Record<string, THREE.Texture> = {};
/** Наклейка из набора манга-эффектов (public/fx/m_*.png). */
function fxTex(name: string) { if (!fxCache[name]) { const t = new THREE.TextureLoader().load('fx/' + name + '.png'); t.colorSpace = THREE.SRGBColorSpace; fxCache[name] = t; } return fxCache[name]; }
function sticker(R: Builder, name: string, x: number, y: number, z: number, w: number, h = w, o: { ry?: number; basic?: boolean } = {}) { return plane(R, fxTex(name), x, y, z, w, h, { ry: o.ry, basic: o.basic }); }
/** Экранный слой манги: скринтон по краям кадра и «линии скорости» на ключевых битах. Показывается только в комнатах главы. */
let mangaEl: HTMLDivElement | null = null, speedEl: HTMLCanvasElement | null = null;
function mangaOverlay(G: any) {
  if (mangaEl || typeof document === 'undefined') return;
  const el = document.createElement('div'); el.id = 'mangaFX'; el.style.cssText = 'position:fixed;inset:0;pointer-events:none;';
  const tone = document.createElement('div'); tone.style.cssText = 'position:absolute;inset:0;background-image:radial-gradient(circle, rgba(28,20,40,.9) 0 1.3px, transparent 1.6px);background-size:7px 7px;-webkit-mask-image:radial-gradient(ellipse at center, transparent 58%, rgba(0,0,0,.55) 82%, #000 100%);mask-image:radial-gradient(ellipse at center, transparent 58%, rgba(0,0,0,.55) 82%, #000 100%);opacity:.28;mix-blend-mode:multiply;';
  const sp = document.createElement('canvas'); sp.width = 640; sp.height = 360; sp.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;opacity:0;transition:opacity .25s;';
  const c = sp.getContext('2d')!; c.fillStyle = '#16101e'; for (let i = 0; i < 150; i++) { const a = hsh(i, 3) * Math.PI * 2, r0 = 150 + hsh(i, 5) * 90, w = 0.008 + hsh(i, 7) * 0.02; c.beginPath(); c.moveTo(320 + Math.cos(a) * r0, 180 + Math.sin(a) * r0 * 0.62); c.lineTo(320 + Math.cos(a - w) * 600, 180 + Math.sin(a - w) * 600); c.lineTo(320 + Math.cos(a + w) * 600, 180 + Math.sin(a + w) * 600); c.fill(); }
  el.append(tone, sp); document.body.insertBefore(el, document.getElementById('ui')); mangaEl = el; speedEl = sp;
  const tick = () => { const on = !!G.room && String(G.room.id).startsWith('mat_') && !(G.room.id === 'mat_fest' && G.f.mat_break); el.style.display = on ? '' : 'none'; requestAnimationFrame(tick); }; tick();
}
/** «Линии скорости»: короткая вспышка на драматическом бите. */
function speedLines(dur = 0.9) { if (!speedEl) return; speedEl.style.opacity = '0.85'; setTimeout(() => { if (speedEl) speedEl.style.opacity = '0'; }, dur * 1000); }
/** Общий финиш каждой комнаты главы: контур, оверлей. */
function mangaFinish(R: Builder, G: any) { inkOutline(R); mangaOverlay(G); }

// ---------------- общие декорации ----------------
/** Японская школа: три этажа, ряды окон, часы, баннер фестиваля. Тянется за края комнаты. */
function schoolFacade(R: Builder, w: number, z = -6.3, night = false) {
  const W = w + 40; R.box(0, z, W, 0.8, 10, { tex: 'schoolwall', tint: night ? '#a8a4b8' : '#f4f0e8', solid: false }); R.collider(-w / 2, z - 0.4, w / 2, z + 0.4);
  for (const y of [3.4, 6.6, 9.7]) R.box(0, z + 0.45, W, 0.24, 0.28, { tex: 'concrete', tint: '#d8ccbc', y, solid: false, cast: false });
  for (let x = -W / 2 + 0.4; x < W / 2; x += 3.2) R.box(x, z + 0.48, 0.32, 0.18, 10, { tex: 'concrete', tint: '#e4d8c8', solid: false, cast: false });
  // центральная башня с часами и козырёк над входом, как у настоящей школы
  R.box(0, z - 0.1, 6.4, 1.6, 11.6, { tex: 'schoolwall', tint: night ? '#a8a0b0' : '#efd8c4', solid: false }); R.box(0, z + 0.2, 6.8, 1.8, 0.3, { tex: 'concrete', tint: '#c8bcac', y: 11.6, solid: false });
  if (!night) { R.box(-6, z + 1.3, 4.2, 2.0, 0.16, { tex: 'concrete', tint: '#d0c8bc', y: 3.7, solid: false }); for (const sx of [-1.9, 1.9]) R.box(-6 + sx, z + 2.1, 0.16, 0.16, 3.7, { tex: 'metal', tint: '#c8c8d0', solid: false }); R.decal(canvasTex(48, 10, (c) => { px(c, 0, 0, 48, 10, '#3a3a48'); px(c, 1, 1, 46, 8, '#f8f4ea'); ptext(c, '私立 桜 高等学校', 24, 1, { size: 7, col: '#2a2a3a', align: 'center' }); }, 'mschoolname'), { x: 0, y: 8.1, z: z + 0.72, w: 4.4, h: 0.9, noSlot: true }); }
  const win = canvasTex(24, 16, (c) => { c.fillStyle = '#d8d8e0'; c.fillRect(0, 0, 24, 16); c.fillStyle = night ? '#ffd890' : '#9cc8f0'; c.fillRect(1, 1, 22, 14); c.fillStyle = '#d8d8e0'; c.fillRect(11, 1, 2, 14); c.fillRect(1, 7, 22, 1); c.fillStyle = night ? '#fff0c0' : '#f0f8ff'; c.fillRect(3, 2, 3, 4); c.fillStyle = 'rgba(255,255,255,.35)'; c.fillRect(15, 2, 5, 3); }, 'jwin' + night);
  for (let x = -W / 2 + 2; x < W / 2 - 1; x += 3.2) for (const y of [1.9, 5.0, 8.1]) { if (Math.abs(x) < 2.4 && y < 3) continue; R.decal(win, { x, y, z: z + 0.42, w: 2.6, h: 1.7, noSlot: true, glow: night }); }
  R.decal(canvasTex(20, 20, (c) => { c.fillStyle = '#f8f8f0'; c.beginPath(); c.arc(10, 10, 9, 0, 7); c.fill(); c.strokeStyle = '#2a2a3a'; c.lineWidth = 1.5; c.stroke(); c.fillStyle = '#2a2a3a'; c.fillRect(9.5, 4, 1, 6.5); c.fillRect(10, 9.5, 4, 1); }, 'jclock'), { x: 0, y: 10.0, z: z + 0.73, w: 1.6, h: 1.6, noSlot: true });
  R.decal(canvasTex(60, 12, (c) => { c.fillStyle = '#fff0f4'; c.fillRect(0, 0, 60, 12); c.fillStyle = '#e84a6f'; c.fillRect(0, 0, 60, 2); c.fillRect(0, 10, 60, 2); ptext(c, '祝 文化祭 · ШКОЛЬНЫЙ ФЕСТИВАЛЬ', 30, 3, { size: 6, col: '#c41e3a', align: 'center' }); }, 'jbanner'), { x: 0, y: 5.2, z: z + 0.74, w: 6.2, h: 1.1, noSlot: true });
}
/** Большая сакура из объёмных розовых облаков, с падающими лепестками. */
/** Нарисованная пиксельная сакура (как фон аниме): ствол с ветвями и пышная крона из облачков с контуром и бликами. */
function sakuraTex(seed = 0) {
  return canvasTex(96, 100, (c) => {
    const bark = (x0: number, y0: number, x1: number, y1: number, w: number) => { const n = Math.ceil(Math.hypot(x1 - x0, y1 - y0)); for (let i = 0; i <= n; i++) { const t = i / n, x = x0 + (x1 - x0) * t, y = y0 + (y1 - y0) * t, ww = Math.max(1, w * (1 - t * 0.5)); px(c, Math.round(x - ww / 2) - 1, Math.round(y), Math.round(ww) + 2, 1, '#2a1810'); px(c, Math.round(x - ww / 2), Math.round(y), Math.round(ww), 1, '#5a3828'); px(c, Math.round(x - ww / 2), Math.round(y), 1, 1, '#7a5038'); } };
    bark(48, 99, 47, 56, 9); bark(47, 64, 30, 42, 4); bark(48, 62, 66, 40, 4); bark(47, 58, 50, 30, 3); bark(36, 50, 22, 44, 2); bark(60, 48, 74, 46, 2);
    const B: [number, number, number][] = []; for (let i = 0; i < 20; i++) { const a = hsh(i, seed) * Math.PI * 2, rr = Math.sqrt(hsh(i, seed + 9)); B.push([48 + Math.cos(a) * rr * 30, 36 + Math.sin(a) * rr * 20, 8 + hsh(i, seed + 4) * 6]); }
    B.push([48, 22, 13], [30, 38, 11], [66, 38, 11], [48, 46, 10], [20, 50, 7], [76, 50, 7]);
    B.sort((a, b) => a[1] - b[1]);
    for (const [x, y, r] of B) disc(c, x, y, r + 1.2, '#7a2a4c');
    for (const [x, y, r] of B) disc(c, x, y + 1, r, '#d86a98');
    for (const [x, y, r] of B) disc(c, x - 1, y - 1, r - 1.5, '#f094bc');
    for (const [x, y, r] of B) disc(c, x - 2, y - 3, r * 0.55, '#ffbcd6');
    for (const [x, y, r] of B) disc(c, x - 3, y - 4, r * 0.22, '#fff0f6');
    for (let i = 0; i < 90; i++) { const x = Math.floor(hsh(i, seed + 20) * 96), y = Math.floor(hsh(i, seed + 21) * 70); const d = c.getImageData(x, y, 1, 1).data; if (d[3] > 200) px(c, x, y, 1, 1, hsh(i, 2) > 0.5 ? '#fff4f8' : '#c05080'); }
    for (let i = 0; i < 12; i++) px(c, Math.floor(hsh(i, seed + 30) * 90) + 3, 72 + Math.floor(hsh(i, seed + 31) * 24), 2, 1, '#ffb8d0');
  }, 'msakura' + seed);
}
/** Сакура-билборд в стиле HD-2D: стоит в глубине, ствол — коллизия. */
function sakura(R: Builder, x: number, z: number, s = 1, seed = 0) {
  const m = R.sprite(sakuraTex(seed % 3), x, z, { scale: s, thin: true }); R.collider(x - 0.3 * s, z - 0.25, x + 0.3 * s, z + 0.25); return m;
}
// ----- пиксельные текстуры школы -----
const T = {
  paving: () => tile('paving', 32, (c) => { px(c, 0, 0, 32, 32, '#9c948c'); for (let r = 0; r < 4; r++) for (let k = 0; k < 2; k++) { const x = k * 16 + (r % 2) * 8, y = r * 8; const v = hsh(r * 2 + k, 3); const col = v > 0.66 ? '#d8d0c4' : v > 0.33 ? '#cfc6b8' : '#c4baac'; for (const ox of [0, -32, 32]) { px(c, x + ox + 1, y + 1, 14, 6, col); px(c, x + ox + 1, y + 1, 14, 1, '#e4dcd0'); px(c, x + ox + 1, y + 6, 14, 1, '#aca294'); } } for (let i = 0; i < 18; i++) px(c, Math.floor(hsh(i, 9) * 32), Math.floor(hsh(i, 8) * 32), 1, 1, '#9a9086'); }),
  grass: () => tile('grass', 32, (c) => { px(c, 0, 0, 32, 32, '#6aa84e'); for (let i = 0; i < 70; i++) { const x = Math.floor(hsh(i, 1) * 32), y = Math.floor(hsh(i, 2) * 32); px(c, x, y, 1, 2, hsh(i, 3) > 0.5 ? '#80c060' : '#548c40'); } for (let i = 0; i < 6; i++) { const x = Math.floor(hsh(i, 5) * 30), y = Math.floor(hsh(i, 6) * 30); px(c, x, y, 2, 2, '#ffd0e0'); } }),
  hallFloor: () => tile('hallfloor', 32, (c) => { for (let r = 0; r < 4; r++) { const base = ['#b88c60', '#c09468', '#b48458', '#bc9064'][r]; px(c, 0, r * 8, 32, 8, base); px(c, 0, r * 8, 32, 1, '#a07040'); px(c, 0, r * 8 + 1, 32, 1, '#e0b880'); const sx = (r * 13) % 32; px(c, sx, r * 8, 1, 8, '#a07040'); for (let i = 0; i < 6; i++) px(c, Math.floor(hsh(i + r * 7, 4) * 32), r * 8 + 2 + Math.floor(hsh(i, r) * 5), 3, 1, 'rgba(120,80,40,.35)'); } }),
  lockers: () => canvasTex(64, 40, (c) => { px(c, 0, 0, 64, 40, '#2a3440'); for (let k = 0; k < 4; k++) { const x = k * 16; px(c, x + 1, 1, 14, 38, '#7a96b0'); px(c, x + 1, 1, 14, 1, '#a8c0d4'); px(c, x + 1, 1, 1, 38, '#98b2c8'); px(c, x + 14, 1, 1, 38, '#5a7488'); for (let v = 0; v < 3; v++) px(c, x + 4, 4 + v * 2, 8, 1, '#3a4a5a'); px(c, x + 4, 12, 8, 3, '#e8e4d8'); px(c, x + 5, 13, 5, 1, '#5a5a6a'); px(c, x + 12, 20, 2, 5, '#c8ccd4'); px(c, x + 12, 25, 2, 1, '#3a4a5a'); for (let v = 0; v < 3; v++) px(c, x + 4, 31 + v * 2, 8, 1, '#3a4a5a'); px(c, x + 2, 37, 12, 1, '#5a7488'); } }, 'mlockers'),
  hallWin: () => canvasTex(40, 30, (c) => { px(c, 0, 0, 40, 30, '#5a6a78'); for (let y = 0; y < 26; y++) px(c, 2, 2 + y, 36, 1, ['#5aa0e8', '#68aaec', '#78b4f0', '#88c0f4', '#9acaf6', '#acd4f8', '#bcdcf8'][Math.floor(y / 4)]); for (const [x, y, w] of [[6, 5, 10], [22, 8, 12], [9, 7, 5]]) { px(c, x, y, w, 2, '#ffffff'); px(c, x + 1, y + 2, w - 2, 1, '#dceaf8'); } for (let i = 0; i < 9; i++) disc(c, 4 + i * 4.4, 26 + hsh(i, 2) * 2, 3 + hsh(i, 3) * 2, i % 2 ? '#f4a8c8' : '#e890b8'); px(c, 2, 27, 36, 1, '#c8789e'); px(c, 19, 2, 2, 26, '#6a7a88'); px(c, 2, 14, 36, 1, '#6a7a88'); px(c, 0, 28, 40, 2, '#8a96a2'); px(c, 2, 2, 1, 26, 'rgba(255,255,255,.5)'); }, 'mhallwin'),
  ext: () => canvasTex(10, 22, (c) => { px(c, 0, 0, 10, 6, '#c41e3a'); ptext(c, '消', 5, -1, { size: 6, col: '#fff', align: 'center' }); px(c, 2, 8, 6, 13, '#1a1014'); px(c, 3, 8, 4, 12, '#d02a2a'); px(c, 3, 9, 1, 10, '#ff7060'); px(c, 4, 6, 2, 2, '#2a2a2a'); px(c, 6, 7, 3, 1, '#2a2a2a'); px(c, 8, 7, 1, 6, '#2a2a2a'); px(c, 3, 13, 4, 2, '#e8e0c8'); }, 'mext'),
};
/** Столб с проводами, как на каждой японской улице. */
function pole(R: Builder, x: number, z: number) { R.box(x, z, 0.22, 0.22, 7, { tex: 'concrete', tint: '#b8b4ac', solid: false }); R.box(x, z, 1.6, 0.1, 0.1, { tex: 'metal', y: 6.4, solid: false, cast: false }); R.box(x, z, 1.2, 0.1, 0.1, { tex: 'metal', y: 5.8, solid: false, cast: false }); }
function vending(R: Builder, x: number, z: number) {
  R.box(x, z, 1.1, 0.8, 2.1, { tex: 'white', tint: '#e8f0f8' }); R.decal(canvasTex(16, 28, (c) => { c.fillStyle = '#e8f0f8'; c.fillRect(0, 0, 16, 28); c.fillStyle = '#c41e3a'; c.fillRect(0, 0, 16, 4); for (let r = 0; r < 3; r++) for (let k = 0; k < 4; k++) { c.fillStyle = ['#e84a6f', '#40a0e0', '#f2c230', '#5fd0c8'][(r + k) % 4]; c.fillRect(1 + k * 4, 6 + r * 6, 3, 5); } c.fillStyle = '#2a2a3a'; c.fillRect(2, 24, 12, 3); }, 'vend'), { x, y: 1.05, z: z + 0.41, w: 1.0, h: 1.9, noSlot: true, glow: true }); R.light(x, 1.4, z + 0.8, 0xc8e8ff, 2.5, 3);
}
/** Ряд домиков с черепичными крышами за воротами: уходит далеко в дымку. */
function street(R: Builder, x0: number, x1: number, z: number) {
  for (let x = x0; x < x1; x += 4.4) { const k = Math.abs(Math.sin(x * 3.1)); const h = 3.2 + k * 1.8; R.box(x, z, 3.8, 3, h, { tex: 'plaster', tint: ['#f0e0c8', '#e0d4c0', '#f4ecdc'][Math.floor(k * 3) % 3], solid: false }); const roof = new THREE.Mesh(new THREE.ConeGeometry(2.9, 1.3, 4), new THREE.MeshLambertMaterial({ map: tex('metal', k > 0.5 ? '#4a5a6e' : '#7a4a44'), flatShading: true })); roof.rotation.y = Math.PI / 4; roof.scale.z = 0.6; roof.position.set(x, h + 0.62, z); R.room.group.add(roof); R.decal(canvasTex(8, 6, (c) => { c.fillStyle = '#5a4029'; c.fillRect(0, 0, 8, 6); c.fillStyle = '#9cc8f0'; c.fillRect(1, 1, 6, 4); c.fillStyle = '#5a4029'; c.fillRect(4, 1, 1, 4); }, 'hwin'), { x, y: h * 0.55, z: z + 1.52, w: 1.2, h: 0.9, noSlot: true }); }
}

/** Ларёк с навесом-норэн, фонарями и вывеской. */
function stall(R: Builder, x: number, z: number, kind: number, face = 1) {
  const cols = [[0x8e1830, '#c41e3a', 'ТАКОЯКИ'], [0x22507e, '#2f6fb0', 'КИНГЁ'], [0x9a6a18, '#d8901c', 'ВАТА'], [0x4a2a70, '#6a3aa0', 'МАСКИ'], [0x1f5a44, '#2f8f6a', 'ДАНГО']][kind % 5] as [number, string, string];
  const k5 = kind % 5, col = cols[1];
  // прилавок: дерево + ткань + товар, нарисованный пикселями
  const front = canvasTex(48, 16, (c) => { px(c, 0, 0, 48, 16, '#3a2414'); for (let i = 0; i < 6; i++) px(c, i * 8 + 1, 1, 7, 15, i % 2 ? '#8a5a34' : '#9a6a3c'); px(c, 0, 0, 48, 5, col); px(c, 0, 5, 48, 1, '#1a1010'); for (let i = 0; i < 12; i++) px(c, i * 4 + 1, 1, 2, 3, 'rgba(255,255,255,.25)'); px(c, 18, 7, 12, 8, '#f4ecd8'); px(c, 19, 8, 10, 6, col); disc(c, 24, 11, 2, '#fff8e8'); }, 'mstallf' + k5);
  pbox(R, x, z, 3.2, 1.4, 1.0, front, { side: 0x6a4428, top: tile('stalltop', 16, (c) => { px(c, 0, 0, 16, 16, '#d8c8a0'); px(c, 0, 0, 16, 1, '#a89870'); }) });
  const goods = canvasTex(48, 12, (c) => { for (let i = 0; i < 6; i++) { const gx = 3 + i * 7.5; if (k5 === 0) { disc(c, gx + 2, 8, 2.5, '#5a3018'); disc(c, gx + 1, 7, 1, '#c88a40'); } else if (k5 === 1) { px(c, gx, 4, 6, 7, '#5ab0e8'); px(c, gx + 2, 7, 2, 1, '#ff6a2a'); px(c, gx, 4, 6, 1, '#d8f0ff'); } else if (k5 === 2) { disc(c, gx + 2, 5, 3, ['#ffc8dc', '#c8e8ff', '#fff4c0'][i % 3]); px(c, gx + 2, 8, 1, 4, '#e8e0c8'); } else if (k5 === 3) { disc(c, gx + 2, 6, 3, ['#f8f8f0', '#ffd040', '#e84a6f'][i % 3]); px(c, gx + 1, 5, 1, 1, '#111'); px(c, gx + 3, 5, 1, 1, '#111'); } else { for (let j = 0; j < 3; j++) disc(c, gx + 2, 3 + j * 3, 1.5, ['#ffc8dc', '#f8f8f0', '#7ac060'][j]); px(c, gx + 2, 1, 1, 11, '#c8a070'); } } }, 'mgoods' + k5);
  plane(R, goods, x, 1.25, z + face * 0.3, 3, 0.75);
  for (const sx of [-1.5, 1.5]) R.box(x + sx, z - face * 0.6, 0.14, 0.14, 2.9, { tex: 'wood', tint: '#a07040', solid: false });
  const awn = tile('awn' + k5, 16, (c) => { for (let i = 0; i < 4; i++) px(c, i * 4, 0, 4, 16, i % 2 ? '#f4ecd8' : col); px(c, 0, 15, 16, 1, 'rgba(0,0,0,.3)'); }); const at = awn.clone(); at.repeat.set(4, 1); at.needsUpdate = true;
  const roof = new THREE.Mesh(new THREE.BoxGeometry(3.7, 0.12, 1.9), new THREE.MeshLambertMaterial({ map: at })); roof.position.set(x, 2.95, z); roof.rotation.x = face * 0.2; roof.castShadow = true; R.room.group.add(roof);
  // норэн (полосы ткани) и вывеска в 2× с тёмным контуром: читается, не светится
  const noren = canvasTex(48, 14, (c) => { for (let i = 0; i < 6; i++) { px(c, i * 8, 0, 7, 14, col); px(c, i * 8, 0, 7, 2, 'rgba(0,0,0,.25)'); px(c, i * 8 + 6, 2, 1, 12, 'rgba(0,0,0,.18)'); } disc(c, 24, 7, 4, '#fff8e8'); disc(c, 24, 7, 2, col); }, 'mnoren' + k5);
  plane(R, noren, x, 2.45, z + face * 0.97, 3.2, 0.85);
  const sw = 112, sign = canvasTex(sw, 26, (c) => { px(c, 0, 0, sw, 26, '#2a1810'); px(c, 2, 2, sw - 4, 22, '#fff4e0'); px(c, 4, 4, sw - 8, 18, '#fffaf0'); otext(c, cols[2], sw / 2, 5, 16, col, '#2a1810'); }, 'msign' + k5);
  plane(R, sign, x, 3.45, z + face * 0.75, 2.6, 0.6);
  for (const sx of [-1.25, 1.25]) R.sprite(chochin(), x + sx, z + face * 1.0, { y: 1.6, glow: true, scale: 0.85, thin: true });
  if (Math.abs(x) < 24) R.light(x, 2.2, z + face * 1.6, 0xffb060, 6, 7);
}
/** Текст с тёмной обводкой (читаемый поверх фона). */
function otext(c: DC, s: string, x: number, y: number, size: number, col: string, ol: string) { for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [1, 1], [-1, 1], [1, -1]]) ptext(c, s, x + dx, y + dy, { size, col: ol, align: 'center' }); ptext(c, s, x, y, { size, col, align: 'center' }); }
/** Бумажный фонарик-тётин. */
const chochin = () => canvasTex(12, 18, (c) => { px(c, 3, 0, 6, 2, '#1a1010'); disc(c, 6, 9, 5.5, '#8a1a10'); disc(c, 6, 9, 4.6, '#e8442a'); disc(c, 5, 8, 2.5, '#ff8a50'); disc(c, 4, 7, 1, '#ffd0a0'); for (const y of [5, 9, 13]) px(c, 1, y, 10, 1, 'rgba(90,20,10,.6)'); px(c, 3, 15, 6, 2, '#1a1010'); px(c, 5, 17, 2, 1, '#e8c040'); }, 'mchochin');

// ---------------- состояние главы ----------------
/** «Постановочность»: сколько идеальных дублей Варя навязала. Мир от них картонеет. */
const staged = (f: any) => f.mat_st || 0;
const stage = (G: any, n = 1) => { G.f.mat_st = staged(G.f) + n; G.grade(fakeGrade(Math.min(4, staged(G.f)))); G.sfx('glitch'); speedLines(); G.toast('Постановочность растёт: мир становится глаже и фальшивее', '✂'); };
const sincere = (G: any) => { G.f.mat_sin = (G.f.mat_sin || 0) + 1; G.toast('Искренность: сцена живая, хоть и неловкая', '♡'); };
/** Выбор раскадровки: варианты Вари с последствиями. Возвращает индекс. */
async function board(G: any, opts: string[]) { let r = 0; await G.run([{ c: opts.map((t, i) => [t, [() => { r = i; }]]) }]); return r; }

// ---------------- 1. школьный двор ----------------
const yard: RoomDef = {
  card: (G) => G.f.intro_mat ? null : [[actOf(G), 'act'], ['100 STEPS TO THE INEVITABLE', 'big'], ['школьная мелодрама · аниме-фанфик · сакура и клише', 'sm']],
  name: 'Школа Сакура', chapter: 'Матвей', w: 36, d: 15, music: 'school', amb: null, step: 'stone', grade: fakeGrade(0), camDist: 23,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x9cc8ec; fog(R, 0xc8dcf0, 40, 110);
    R.floor('grass', { tint: '#8ac070', w: 160, d: 70, z: 10, y: -0.06 }); ground(R, T.grass(), 0, 10, 160, 70, 2, -0.02);
    ground(R, T.paving(), 0, -3.9, 160, 4.6, 2, 0.005); ground(R, T.paving(), -6, 12, 4, 30, 2, 0.006);
    for (const zz of [-1.55, -6.2]) R.box(0, zz, 160, 0.14, 0.12, { tex: 'concrete', tint: '#e8e0d4', solid: false, cast: false });
    R.ambient(0x8a8aa8, 1.7, 0xfff0f4); R.sun(0xfff0e0, 1.8, 10, 16, 12); schoolFacade(R, 36);
    R.particles('petals', { count: 160, top: 9 }); const rain = R.particles('rain', { count: 400, top: 9, name: 'rain' }); rain.visible = false;
    // центральная сакура в круглой клумбе (как на референсе), в глубине кадра
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 2.4, 0.4, 24), new THREE.MeshLambertMaterial({ map: tex('stone', '#d8d0c4') })); ring.position.set(3, 0.2, -1.6); ring.receiveShadow = true; R.room.group.add(ring);
    const soil = new THREE.Mesh(new THREE.CircleGeometry(2.05, 24), new THREE.MeshLambertMaterial({ map: T.grass() })); soil.rotation.x = -Math.PI / 2; soil.position.set(3, 0.41, -1.6); R.room.group.add(soil); R.collider(1, -3.4, 5, 0.4);
    sakura(R, 3, -1.8, 1.25, 0);
    for (const [x, z, ry] of [[-0.6, 2.4, 0.3], [6.6, 2.4, -0.3]]) { R.box(x, z, 2.2, 0.6, 0.12, { tex: 'wood', tint: '#c88a50', y: 0.55, ry }); R.box(x, z - 0.25, 2.2, 0.1, 0.5, { tex: 'wood', tint: '#c88a50', y: 0.6, ry, solid: false }); for (const sx of [-0.9, 0.9]) R.box(x + sx * Math.cos(ry), z - sx * Math.sin(ry), 0.12, 0.5, 0.55, { color: 0x3a3a44, solid: false }); }
    for (const [x, z, s, k] of [[-15.5, -2.4, 0.95, 1], [-21, -2.8, 0.85, 2], [21.5, -2.6, 0.9, 1], [27, -3, 0.8, 2], [-30, -3, 0.9, 0]]) sakura(R, x, z, s, k);
    // живая изгородь вдоль фасада (пиксельная)
    const hedge = canvasTex(32, 12, (c) => { px(c, 0, 0, 32, 12, '#2e5a2a'); for (let i = 0; i < 14; i++) disc(c, 1 + i * 2.4, 3 + hsh(i, 4) * 2, 3, i % 2 ? '#4a8a3a' : '#3e7a34'); for (let i = 0; i < 20; i++) px(c, Math.floor(hsh(i, 6) * 32), Math.floor(hsh(i, 7) * 6), 1, 1, '#7cc060'); }, 'mhedge');
    for (const x0 of [-30, -22, 18, 24, 30]) pbox(R, x0, -5.2, 5, 0.8, 0.9, hedge, { side: 0x3a6a32, top: 0x4a8a3a, solid: false });
    vending(R, -9.6, -5.4); vending(R, -8.4, -5.4); R.look('vend', -9, -4.4, 'Автоматы с напитками', ['~: Клубничное молоко, дынная газировка, персиковый чай. В тетради Матвея: «Шаг 1. Случайно встретиться у автомата». Шаг пропущен. Автомат стоит одиноко.']);
    for (let i = 0; i < 5; i++) R.box(-16 + i * 0.9, -4.6, 0.08, 1.4, 0.9, { tex: 'metal', tint: '#a8acb4', solid: false });
    for (const x of [11.2, 16.8]) R.box(x, -1.2, 0.7, 0.7, 2.6, { tex: 'concrete', tint: '#e8e0d8' }); R.box(14, -1.2, 5.2, 0.3, 0.3, { tex: 'metal', y: 2.4, solid: false });
    street(R, 20, 80, -9); street(R, -80, -20, -9); for (let x = -70; x <= 70; x += 9) pole(R, x, -7.6);
    R.door('school', -6, { label: 'В школу', z: -5.86, col: '#c8aa78', sign: 'ВХОД', fn: (G) => G.goto('mat_hall', 'yard') });
    R.door('fest', 14, { label: 'На фестиваль (вечер)', z: -1.35, col: '#e8888a', sign: 'МАЦУРИ', w: 2.4, cond: () => !!f.mat_note, locked: ['~: Фестиваль вечером. До него в тетради ещё «Закрытый класс» и «Записка».'], fn: (G) => G.goto('mat_fest', 'start', { fade: 'iris' }) });
    // шаг 12: один зонт
    R.box(-2, -4.6, 1.2, 0.6, 1.1, { tex: 'metal' }); for (let i = 0; i < (f.mat_umb ? 1 : 4); i++) R.sprite('umbrella', -2.4 + i * 0.3, -4.5, { scale: 0.7, y: 0.4 });
    R.inter('umb', -2, -3.6, { label: f.mat_umb ? 'Стойка (один зонт)' : 'Стойка с зонтами', cond: () => !!f.mat_book && !f.mat_s1, fn: async (G) => { if (!f.mat_umbI) { f.mat_umbI = 1; await G.run(M.umbIntro); } if (!f.mat_umb) { f.mat_umb = 1; await G.run(M.umbTake); await G.rebuild(); } } });
    R.inter('signal', 14, 1.6, { label: 'Дать знак дождю', cond: () => !!f.mat_umb && !f.mat_s1, fn: rainScene });
    R.sprite(canvasTex(14, 10, (c) => { c.fillStyle = '#e88a3a'; c.fillRect(2, 3, 10, 6); c.fillRect(1, 1, 4, 4); c.fillStyle = '#111'; c.fillRect(2, 2, 1, 1); c.fillStyle = '#e88a3a'; c.fillRect(11, 1, 2, 4); }, 'cat'), 6.4, 4.0, { scale: 1.2, y: 0.65 }); R.look('cat', 6.4, 4.8, 'Кот', ['~: Школьный кот, рыжий и круглый. Ему всё равно, кто в кого влюблён, так что он тут самый мудрый персонаж.'], { r: 1.2, egg: 'cat' });
    if (f.mat_book && !f.mat_s1) R.npc('artemiy', 15.4, 2.0, { dir: 'l', talk: async (G: any) => { if (G.state.mask === 'tragedy') { G.focus(15, 1.6, 10); await G.run(M.artTr); G.f.mat_artTr = 1; G.unfocus(); return; } await G.run(['artemiy/smile: Жду, когда кончится урок у всего мира. Ну, или дождь. Хотя дождя нет.']); maskHint(G, 'mat_tr', 'Маска Трагедии (2) видит, что прячут. Даже загадочные переводные ученики', '☹'); } });
    warmKey(R, 15, 3.2, 3.2, 11);
    if (!f.mat_s1) R.npc('matvey_school', f.mat_book ? -8.6 : -4.6, f.mat_book ? 2.4 : 3.6, { id: 'matvey', talk: (G: any) => G.run(f.mat_book ? ['matvey/worried: Он у ворот. Он всегда уходит через ворота в 15:40. Я не следил. Я просто… знаю.'] : ['matvey/worried: Пойдём внутрь? Только не смотри на того, кто у окна. И на меня не смотри.']) });
    R.npc('student2', 0, 5.6, { talk: ['student2: Вчера у ворот трижды шёл дождь. Над воротами. Только над ними. У нас тут вечно какие-то случайные события.'] }); R.actor('student', -14, -2.6, { dir: 'r' });
    R.spawn('start', -10, 4, 'r'); R.spawn('back', -6, -4.6); R.spawn('gate', 14, 1.2); mangaFinish(R, G);
  },
  async enter(G) { if (!G.f.mat_arr) { G.f.mat_arr = 1; G.f.intro_mat = 1; await G.run(M.arrive); } },
};
async function rainScene(G: any) {
  const f = G.f, mat = G.actor('matvey'), art = G.actor('artemiy'); if (!mat || !art) return; G.focus(14, 1.4, 13);
  mat.walkTo(12.2, 1.6, 2.6); await G.run(['~: Матвей идёт к воротам с розовым зонтом. Сейчас… сейчас…']);
  const r = await timing({ title: 'Сигнал дождю', sub: 'Щёлкни пальцами, когда Матвей поравняется с Арутеми', zone: 0.2 });
  if (r === 'miss') { G.room.named.rain.visible = true; G.sfx('thunder'); await G.run(['*: Дождь начинается раньше, и Матвей стоит под ним, как мокрый попугайчик.', 'matvey/angry: Варя!']); G.room.named.rain.visible = false; mat.place(-8.6, 2.4); G.unfocus(); return; }
  G.room.named.rain.visible = true; G.audio.ambience('rain'); await mat.walkTo(14.4, 1.9, 2.5); art.face(mat.x, mat.z); mat.face(art.x, art.z);
  await G.run(M.umbRain); await G.run(M.umbChoicePrompt);
  let c = await board(G, ['Дать Матвею идеальную реплику', 'Не вмешиваться', 'Дубль!']);
  if (c === 2) { G.flash(0.4); stage(G); await G.run(M.retake); c = await board(G, ['Дать Матвею идеальную реплику', 'Не вмешиваться']); }
  let off: null | (() => Promise<void>) = null;
  if (c === 0) { stage(G); await G.run(M.umbPerfect); await art.walkTo(19, 3, 2.4); }
  else { sincere(G); await G.run(M.umbSelf.slice(0, 2)); off = await warmOn(G, 15, 2.0, { shafts: 3, motes: 'petals', glow: 0.3, key: 6 }); dolly(G, 15.6, 2, 13, 10, 2.5);
    await G.run(M.umbSelf.slice(2)); await Promise.all([art.walkTo(19, 3, 2.4), mat.walkTo(18.4, 3.2, 2.4)]); mat.hidden = true; }
  art.hidden = true; G.room.named.rain.visible = false; G.audio.ambience(null);
  await G.run(M.umbAfter); if (off) await off(); f.mat_s1 = 1; G.unfocus(); G.note('n_mat_fake');
}

// ---------------- 2. коридор: столкновение, тетрадь ----------------
const hall: RoomDef = {
  name: 'Коридор второго этажа', w: 40, d: 11, music: 'school_soft', amb: null, step: 'wood', grade: fakeGrade(0), camDist: 22,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0xd8dce4; fog(R, 0xd8dce4, 28, 80);
    ground(R, T.hallFloor(), 0, 6, 160, 34, 1.8, 0, 0xc8c0b4); R.ambient(0x6a6a88, 1.15, 0xe8dcc8); R.sun(0xfff0d0, 1.05, -6, 12, 8);
    // стена: кремовая штукатурка, серо-голубая панель снизу, деревянный поручень, высокий карниз
    R.box(0, -5.85, 160, 0.4, 9, { tex: 'schoolwall', tint: '#eee2cc', solid: false }); R.box(0, -5.6, 160, 0.12, 1.2, { tex: 'schoolwall', tint: '#9aaabc', solid: false, cast: false });
    R.box(0, -5.5, 160, 0.14, 0.12, { tex: 'darkwood', y: 1.2, solid: false, cast: false }); R.box(0, -5.6, 160, 0.3, 0.3, { tex: 'schoolwall', tint: '#d8ccb8', y: 7.4, solid: false, cast: false });
    const sunPatch = canvasTex(16, 16, (c) => { for (let y = 0; y < 16; y++) px(c, Math.floor(y * 0.4), y, 11, 1, 'rgba(255,236,190,1)'); c.clearRect(7, 0, 1, 16); }, 'msunpatch');
    // окна (на улицу), блоки шкафчиков, доски объявлений, растения, огнетушители: коридор уходит за края кадра
    for (let x = -64; x <= 64; x += 4) {
      if (Math.abs(x - -12) < 2.4 || Math.abs(x - 12) < 2.4) continue;
      if ((x / 4) % 2 === 0) { R.decal(T.hallWin(), { x, y: 3.6, z: -5.62, w: 3.4, h: 2.55, noSlot: true, glow: true, color: 0xdcdcdc }); R.box(x, -5.5, 3.6, 0.3, 0.1, { tex: 'darkwood', y: 2.25, solid: false, cast: false }); plane(R, sunPatch, x + 1, 0.02, -2.6, 3.2, 3.6, { basic: true, rx: -Math.PI / 2, opacity: 0.1 }); if ((x / 8) % 2 === 0) R.sprite('plant', x + 1.9, -5.0, { scale: 1.1 }); else R.sprite(T.ext(), x + 1.95, -5.45, { y: 0.9, scale: 0.9, thin: true }); }
      else { pbox(R, x, -5.25, 3.3, 0.6, 2.2, T.lockers(), { side: 0x5a7488, top: 0x7a96b0, solid: false }); corkBoard(R, x, 3.6, 2.6, 1.7, (x + 64) % 7, { z: -5.63 }); }
    }
    for (const x of [-12, 12]) { const sg = canvasTex(32, 10, (c) => { px(c, 0, 0, 32, 10, '#2a3a5a'); px(c, 1, 1, 30, 8, '#f4f0e4'); ptext(c, x < 0 ? '2-Б' : 'ДРАМА', 16, 1, { size: 7, col: '#2a3a5a', align: 'center' }); }, 'mhsign' + x); plane(R, sg, x + 1.8, 4.3, -4.9, 1.6, 0.5, { ry: Math.PI / 2 }); plane(R, sg, x + 1.8, 4.3, -4.9, 1.6, 0.5, { ry: -Math.PI / 2 }); R.box(x + 1.8, -5.2, 0.06, 0.8, 0.06, { tex: 'metal', y: 4.6, solid: false, cast: false }); }
    // реквизит подготовки к фестивалю: коробки, ведро со шваброй, гирлянда
    for (const [x, z, s] of [[-17, -4.2, 0.8], [-16.2, -4.0, 0.6], [17.4, -4.1, 0.7]]) R.box(x, z, s, s, s, { tex: 'paper', tint: '#c8a070' });
    R.box(4.2, -4.4, 0.6, 0.6, 0.5, { tex: 'metal', tint: '#5a8ac8' }); R.box(4.4, -4.5, 0.06, 0.06, 1.8, { tex: 'wood', solid: false });
    const flags = canvasTex(64, 8, (c) => { for (let i = 0; i < 16; i++) { c.fillStyle = ['#e84a6f', '#f2c230', '#40a0e0', '#5fd0c8'][i % 4]; c.beginPath(); c.moveTo(i * 4, 0); c.lineTo(i * 4 + 4, 0); c.lineTo(i * 4 + 2, 6); c.fill(); } px(c, 0, 0, 64, 1, '#3a2a2a'); }, 'mbunting');
    plane(R, flags, 0, 6.4, -5.5, 40, 1.2, { rep: [5, 1] });
    sticker(R, 'm_sparkle', -8.6, 4.6, -5.6, 0.7); sticker(R, 'm_stars', 7.5, 5.6, -5.6, 1.6, 0.55);
    R.collider(-20, -5.6, 20, -4.6);
    // мебель коридора: скамейки, витрина с кубками, доска объявлений на ножках, табличка «мокрый пол», стопка афиш
    const benchT = canvasTex(32, 12, (c) => { px(c, 0, 0, 32, 12, 'rgba(0,0,0,0)'); px(c, 0, 2, 32, 3, '#5a3a24'); px(c, 0, 2, 32, 1, '#a07048'); px(c, 1, 5, 30, 1, '#2a1a10'); px(c, 2, 6, 2, 6, '#3a3e48'); px(c, 28, 6, 2, 6, '#3a3e48'); px(c, 3, 9, 26, 1, '#3a3e48'); }, 'mbench');
    for (const [x, z] of [[-7.6, -3.9], [15.2, -3.9], [-26, -3.9]]) R.sprite(benchT, x, z, { scale: 1.3, solid: 0.9 });
    const troph = canvasTex(28, 40, (c) => { px(c, 0, 0, 28, 40, '#2a1a10'); px(c, 1, 1, 26, 38, '#6a4428'); px(c, 3, 3, 22, 26, '#1a2430'); for (const y of [11, 20, 29]) px(c, 3, y, 22, 1, '#8a6040'); for (let i = 0; i < 9; i++) { const x = 5 + (i % 3) * 7, y = 4 + Math.floor(i / 3) * 9; const col = ['#e8c23a', '#c8ccd4', '#c87a3a'][i % 3]; px(c, x + 1, y + 1, 3, 3, col); px(c, x, y + 1, 1, 2, col); px(c, x + 4, y + 1, 1, 2, col); px(c, x + 2, y + 4, 1, 2, col); px(c, x + 1, y + 6, 3, 1, '#3a2a1a'); px(c, x + 2, y + 1, 1, 1, '#fff6c8'); } px(c, 4, 4, 1, 24, 'rgba(255,255,255,.35)'); px(c, 3, 31, 22, 6, '#6a4428'); px(c, 3, 31, 22, 1, '#8a6040'); px(c, 3, 36, 22, 1, '#3a2414'); }, 'mtrophy');
    R.sprite(troph, -19.6, -4.0, { scale: 1.4, solid: 0.8 }); R.sprite(troph, 21.6, -4.0, { scale: 1.4, solid: 0.8 });
    const nb = canvasTex(30, 34, (c) => { px(c, 0, 0, 30, 24, '#5a3a24'); px(c, 1, 1, 28, 22, '#b88a58'); for (let i = 0; i < 7; i++) { const x = 2 + Math.floor(hsh(i, 51) * 20), y = 2 + Math.floor(hsh(i, 52) * 13); px(c, x, y, 7, 7, ['#f4f0e4', '#ffe48a', '#a8d8ff', '#ffb4c8'][i % 4]); px(c, x + 1, y + 2, 5, 1, '#6a6a7a'); px(c, x + 1, y + 4, 4, 1, '#6a6a7a'); px(c, x + 3, y, 1, 1, '#c41e3a'); } px(c, 4, 24, 2, 10, '#3a3e48'); px(c, 24, 24, 2, 10, '#3a3e48'); px(c, 2, 32, 6, 2, '#3a3e48'); px(c, 22, 32, 6, 2, '#3a3e48'); }, 'mnotice');
    R.sprite(nb, 9.4, -3.6, { scale: 1.3, solid: 0.9 }); R.look('notice', 9.4, -2.6, 'Доска объявлений', ['~: «Фестиваль: каждый класс готовит номер». «Потерян кот, зовут Тофу». И чья-то записка: «Не сдавайся, 2-Б!»'], { quiet: true });
    R.sprite(canvasTex(12, 16, (c) => { px(c, 2, 0, 8, 2, '#c89a10'); px(c, 1, 2, 10, 12, '#f2c230'); px(c, 1, 2, 1, 12, '#ffe070'); px(c, 5, 4, 2, 5, '#1a1a1a'); px(c, 4, 10, 4, 2, '#1a1a1a'); px(c, 0, 14, 12, 2, '#a07a10'); }, 'mwet'), -2.6, 1.6, { scale: 1, thin: true });
    for (const [x, z, k] of [[-15, 2.4, 0], [16.4, 2.2, 1]]) { R.box(x, z, 1.1, 0.8, 0.5, { tex: 'paper', tint: k ? '#c8a070' : '#b89060' }); R.sprite(canvasTex(10, 6, (c) => { px(c, 0, 0, 10, 6, '#f4f0e4'); px(c, 1, 1, 8, 3, k ? '#e84a6f' : '#40a0e0'); px(c, 2, 4, 6, 1, '#2a2a3a'); }, 'mposters' + k), x, z, { y: 0.5, scale: 1.1, thin: true }); }
    R.particles('petals', { count: 50, top: 5 });
    R.door('d_class', -12, { label: 'Класс 2-Б', z: -5.36, col: '#c8aa78', sign: '2-Б', cond: () => !!f.mat_s1, locked: ['~: Сначала шаг 12, «Один зонт». Он у ворот, во дворе.'], fn: (G) => G.goto('mat_class') });
    R.door('d_club', 12, { label: 'Кабинет драмкружка', z: -5.36, col: '#8a3a4a', sign: 'ДРАМКРУЖОК', cond: () => !!f.mat_roof, locked: ['~: Кабинет драмкружка. Заперт, пока идёт подготовка к спектаклю.'], fn: (G) => G.goto('mat_club') });
    R.door('out', 0, { wall: 's', to: 'mat_yard', spot: 'back', label: 'Во двор' });
    if (!f.mat_c1) { R.npc('artemiy', 6, -3.6, { dir: 'f', talk: async (G: any) => collide(G) }); R.npc('matvey_school', -6, -2, { id: 'matvey', talk: (G: any) => collide(G) }); R.trigger(-2.5, -3.6, 2.5, 0.6, (G: any) => collide(G)); }
    if (f.mat_c1 && !f.mat_book) { R.sprite(canvasTex(10, 7, (c) => { c.fillStyle = '#ff9ac0'; c.fillRect(0, 0, 10, 7); c.fillStyle = '#fff'; c.fillRect(2, 2, 6, 1); c.fillRect(2, 4, 4, 1); }, 'pinkbook'), 0.6, -1.4, { y: 0.03, glow: true, thin: true }); R.inter('book', 0.6, -0.8, { label: 'Розовая тетрадь', fn: bookScene }); R.npc('matvey_school', -3, -2.6, { id: 'matvey', talk: ['matvey/scared: Я… я собираю учебники. Не смотри.'] }); }
    R.spawn('start', 0, 2.0, 'b'); R.spawn('yard', 0, 2.0, 'b'); R.spawn('class', -12, -4.0); R.spawn('club', 12, -4.0); mangaFinish(R, G);
  },
  async enter(G) { if (!G.f.mat_hallI) { G.f.mat_hallI = 1; await G.run(M.hallIntro); } },
};
async function collide(G: any) {
  const f = G.f; if (f.mat_c1) return; f.mat_c1 = 1; const mat = G.actor('matvey'), art = G.actor('artemiy'); G.focus(0, -2, 13);
  await G.run(M.collide0); mat.walkTo(-0.5, -2.6, 2.4); await art.walkTo(0.5, -2.6, 2.4); mat.face(art.x, art.z); art.face(mat.x, mat.z);
  const back = await angle(G, 0.32, 1.7, 0.9); G.focus(0, -2.4, 10);
  const c = await board(G, ['Включить «идеальный дубль»', 'Усилить эффект', 'Не вмешиваться']);
  if (c === 0) { stage(G); G.audio.music(null); G.flash(0.5); speedLines(1.6); await dolly(G, 0, -2.4, 10, 7, 1.6); await G.wait(0.6); await G.run(M.collidePerfect); G.audio.music('school_soft'); }
  else if (c === 1) { stage(G); await G.run(M.collideBoost); } else { sincere(G); G.shake(0.2); await G.run(M.collideNone); }
  await back(1);
  await G.run(M.collideAfter); await art.walkTo(-12, -4.2, 2.6); art.hidden = true; mat.walkTo(-3, -2.6, 2); G.unfocus(); await G.rebuild();
}
async function bookScene(G: any) {
  const f = G.f; await G.run(M.bookFind); await G.ui.paper(M.bookText); await G.run(M.bookAgree); f.mat_book = 1; G.mech('storyboard'); await G.rebuild();
  maskHint(G, 'mat_masks', 'Маски работают и в аниме: Комедия (1) разряжает неловкость, Трагедия (2) видит спрятанное, Драма (3) показывает, как было', '❖');
}

// ---------------- 3. класс: закрытая дверь и записка ----------------
const klass: RoomDef = {
  name: 'Класс 2-Б', w: 20, d: 12, music: 'school_soft', amb: null, step: 'wood', grade: fakeGrade(1),
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x1c1a24; R.floor('schoolfloor', { tint: '#d8b080' }); ground(R, T.hallFloor(), 0, 12, 60, 24, 2.4, -0.03); R.walls('schoolwall', { h: 7.5, tint: '#ece0cc' }); R.ambient(0x8a8aa8, 1.7, 0xfff4e8);
    // панель снизу по трём стенам
    R.box(0, -5.92, 20, 0.12, 1.1, { tex: 'schoolwall', tint: '#9aaabc', solid: false, cast: false }); R.box(-9.94, 0, 0.12, 12, 1.1, { tex: 'schoolwall', tint: '#9aaabc', solid: false, cast: false }); R.box(9.94, 0, 0.12, 12, 1.1, { tex: 'schoolwall', tint: '#9aaabc', solid: false, cast: false });
    for (let z = -4; z <= 3; z += 2.4) { R.decal(T.hallWin(), { wall: 'w', at: z, y: 3, w: 2.2, h: 2.4, glow: true, color: 0xd4d4d4 }); }
    const curtain = canvasTex(8, 32, (c) => { px(c, 0, 0, 8, 32, '#f4ecd8'); for (let x = 1; x < 8; x += 3) px(c, x, 0, 1, 32, '#d8ccb0'); px(c, 0, 0, 8, 2, '#c8b890'); }, 'mcurtain');
    for (const z of [-5.6, -2.6, -0.2, 2.2, 4.6]) plane(R, curtain, -9.9, 3, z, 0.5, 2.9, { ry: Math.PI / 2 });
    R.sun(0xfff0d0, 1.7, -14, 12, 2); R.light(-6, 3, 0, 0xfff0d8, 6, 12);
    // доска в 2× разрешении: строки не налезают друг на друга
    R.decal(canvasTex(180, 76, (c) => { px(c, 0, 0, 180, 76, '#5a4029'); px(c, 1, 1, 178, 1, '#7a5a3a'); px(c, 4, 4, 172, 64, '#2e5038'); for (let i = 0; i < 40; i++) px(c, 4 + Math.floor(hsh(i, 2) * 170), 4 + Math.floor(hsh(i, 3) * 62), 3, 1, 'rgba(255,255,255,.06)');
      ptext(c, 'Тема урока:', 10, 8, { size: 14, col: '#f0f0e8' }); ptext(c, '«Не всё, что поставлено, правда»', 10, 26, { size: 13, col: '#ffd8ea', w: 165, lh: 15 });
      ptext(c, 'дежурные: Матвей, Арутеми', 172, 58, { size: 9, col: '#e8e8e0', align: 'right' }); ptext(c, '11月13日', 172, 8, { size: 10, col: '#f0f0e8', align: 'right' });
      for (const [x, y] of [[150, 30], [140, 40], [160, 40]]) disc(c, x, y, 3, '#ffc0d8'); px(c, 149, 39, 3, 3, '#fff4a0');
      px(c, 0, 68, 180, 8, '#7a5a3a'); px(c, 20, 66, 8, 3, '#f8f8f0'); px(c, 34, 66, 6, 3, '#ffc8dc'); px(c, 130, 66, 14, 3, '#3a3a3a'); }, 'jboard3'), { x: 0, y: 2.6, w: 8, h: 3.4 });
    R.decal(canvasTex(20, 20, (c) => { disc(c, 10, 10, 9.5, '#2a2a3a'); disc(c, 10, 10, 8.5, '#f8f8f0'); px(c, 9, 4, 2, 7, '#2a2a3a'); px(c, 10, 9, 5, 2, '#2a2a3a'); }, 'mclock2'), { x: 0, y: 4.85, w: 0.75, h: 0.75 });
    corkBoard(R, -7.2, 3, 2.6, 1.8, 3); sticker(R, 'm_sparkle', 3.6, 4.1, -5.9, 0.6); sticker(R, 'm_excl', -4.3, 1.6, -5.9, 0.35, 0.55);
    for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) { const x = -5.4 + c * 3.4, z = -0.6 + r * 2.3; R.table(x, z, 1.5, 0.9, { tex: 'wood', tint: '#d0a070' }); R.box(x, z + 0.75, 0.6, 0.5, 0.5, { tex: 'wood', tint: '#c8a070', solid: false }); R.box(x, z + 0.98, 0.6, 0.08, 0.6, { tex: 'wood', tint: '#c8a070', y: 0.5, solid: false }); if ((r + c) % 3 === 0) R.sprite('book', x + 0.3, z, { y: 1.08, scale: 0.8 }); if ((r * 4 + c) % 4 === 1) R.box(x + 0.7, z, 0.12, 0.5, 0.45, { tex: 'darkwood', tint: '#3a3a5a', y: 0.4, solid: false }); }
    R.table(-5, -4.4, 2.4, 1, { tex: 'darkwood' }); R.sprite('book', -5, -4.4, { y: 1.15 }); R.box(-3.2, -4.6, 0.9, 0.7, 1.3, { tex: 'wood', tint: '#a07040' });
    R.sprite('plant', -8.9, -5.1, { scale: 1.2 }); R.sprite('plant', 8.8, 4.8, { scale: 1.1 });
    R.look('manga', -6.2, -3.3, 'Томик сёдзё-манги', ['~: На учительском столе томик сёдзё-манги. На закладке рукой Алёны-сэнсэй: «Не путать жанр и жизнь».'], { r: 1.0, egg: 'manga' });
    for (const z of [-2.4, 0.9]) pbox(R, 9.55, z, 3.3, 0.6, 2.2, T.lockers(), { side: 0x5a7488, top: 0x7a96b0, solid: false, ry: -Math.PI / 2 }); R.collider(9.2, -4.1, 9.95, 2.6); sticker(R, 'm_blush', 9.22, 1.9, 1.4, 0.5, 0.6, { ry: -Math.PI / 2 }); R.look('lockers', 7.8, 1.6, 'Шкафчики', ['~: Шкафчик Матвея: двадцать значков и наклейка «НЕ ОТКРЫВАТЬ, ТАМ ЧУВСТВА».']);
    if (!f.mat_lock) { R.npc('matvey_school', 1.6, 0.6, { id: 'matvey', dir: 'l', talk: ['matvey/worried: Мы дежурим. Вдвоём. Я протираю одну и ту же парту уже пять минут.'] }); R.npc('artemiy', -1.6, -1.6, { dir: 'r', talk: ['artemiy/smile: Если вытирать доску по сценарию, она чище? Проверяю.'] }); R.inter('lock', 6, -3.8, { label: 'Дверь класса (запереть «случайно»)', fn: lockScene }); }
    if (f.mat_lock && !f.mat_note) R.inter('note', -5, -3.3, { label: 'Записка «от Матвея»', fn: noteScene });
    R.door('out', 6, { label: 'В коридор', z: -5.96, col: '#c8aa78', fn: (G) => G.goto('mat_hall', 'class') });
    R.spawn('start', 6, -4.6); mangaFinish(R, G);
  },
  async enter(G) { if (!G.f.mat_cl) { G.f.mat_cl = 1; await G.run(M.classIntro); maskHint(G, 'mat_com', 'Маска Комедии (1) спасает неловкие сцены. Попробуй её у двери класса', '☺'); } },
};
async function lockScene(G: any) {
  const f = G.f; G.focus(0, -0.6, 14); G.sfx('locked'); await G.run(M.classLock); G.sfx('door');
  const com = G.state.mask === 'comedy'; const c = await board(G, ['Удержать сцену (запереть снова)', 'Отпустить', ...(com ? ['Пошутить через дверь (маска Комедии)'] : [])]);
  if (c === 0) { stage(G); G.sfx('locked'); await G.run(M.classHold); } else if (c === 2) { sincere(G); G.f.mat_joke = 1; await G.run(M.classJoke); } else { sincere(G); await G.run(M.classLet); }
  await G.run(M.classAfter); f.mat_lock = 1; G.unfocus(); await G.rebuild();
}
async function noteScene(G: any) {
  const f = G.f; await G.run(M.noteIntro); const r = await pick({ ...M.s2note, confirm: 'Подбросить в учебник' } as any); f.mat_note = r || 1; G.sfx('pencil'); stage(G);
  const B = new (await import('../world/room')).Builder(G.room, G); const tch = B.actor('teacher', 6, -4.4, { id: 'teacher' }); const mat = B.actor('matvey_school', 2, 0.6, { id: 'matvey' }); G.focus(0, -2, 14);
  await tch.walkTo(-3.6, -3.4, 2.4); tch.face(0, 3); await G.run(M.noteWrong); await tch.walkTo(6, -4.8, 3); tch.hidden = true; mat.face(G.player.x, G.player.z); G.unfocus();
}

// ---------------- 4. мацури: бэнто, тетрадь, картонный мир ----------------
const fest: RoomDef = {
  name: 'Школьный мацури', w: 52, d: 14, music: 'school', amb: 'crowd', step: 'stone', grade: { ...fakeGrade(2), sat: 1.0, tint: [1.04, 0.94, 1.08], bright: 1.0, bloom: 0.7 }, camDist: 22,
  build(R, G) {
    const f = G.f, broken = !!f.mat_break; R.room.group.userData.bg = broken ? 0x3a3448 : 0x1a1030; fog(R, broken ? 0x5a5468 : 0x2a1a40, 30, 80);
    R.floor('cobble', { w: 160, d: 40, z: 4, y: -0.04, tint: broken ? '#a8a0a0' : '#8a7a8a' }); ground(R, T.paving(), 0, 6, 160, 44, 1.6, -0.01, broken ? 0xd8d0c8 : 0x8a8098); R.ambient(broken ? 0x8a8478 : 0x3a2c58, 1.9, broken ? 0xd8d0c0 : 0x9a88c8);
    R.particles('petals', { count: broken ? 160 : 90, top: 8 });
    if (!broken) { // нарисованное ночное небо: звёзды, луна, силуэт холма с храмом и деревьями
      const sky = canvasTex(256, 64, (c) => { const cols = ['#0c0a26', '#141036', '#1e1644', '#2a1c52', '#3a2260', '#4e2a66', '#6a3468']; for (let y = 0; y < 64; y++) px(c, 0, y, 256, 1, cols[Math.min(6, Math.floor(y / 9.2))]); for (let i = 0; i < 160; i++) px(c, Math.floor(hsh(i, 1) * 256), Math.floor(hsh(i, 2) * 40), 1, 1, hsh(i, 3) > 0.8 ? '#fff8d8' : '#9a90c8'); disc(c, 200, 12, 6, '#fff4d0'); disc(c, 202, 11, 5, '#fffbe8');
        for (let x = 0; x < 256; x++) { const h = 10 + Math.sin(x * 0.05) * 4 + Math.sin(x * 0.17) * 2 + (hsh(x >> 2, 4) * 3); px(c, x, 64 - h, 1, h, '#0e0a1c'); } px(c, 120, 38, 18, 3, '#0e0a1c'); px(c, 123, 34, 12, 4, '#0e0a1c'); px(c, 126, 31, 6, 3, '#0e0a1c'); for (let i = 0; i < 18; i++) px(c, Math.floor(hsh(i, 6) * 256), 54 + Math.floor(hsh(i, 7) * 6), 1, 1, '#ffb060'); }, 'mfestsky');
      (plane(R, sky, 0, -16, -34, 260, 65, { basic: true }).material as THREE.MeshBasicMaterial).fog = false;
      for (const [x, s, k] of [[-30, 1.1, 0], [-12, 1, 1], [8, 1.05, 2], [30, 1, 0], [-46, 1, 2], [46, 1.1, 1]]) sakura(R, x, -9.5, s, k);
    }
    let k = 0; for (let x = -76; x <= 76; x += 4.6) { if (Math.abs(x) < 26) { if (x > -24 && x < 18 && Math.abs(x - 2) > 4) stall(R, x, -4.6, k, 1); } else { stall(R, x, -4.6, k, 1); stall(R, x, 8.6, k + 2, -1); } k++; }
    for (const zz of [-2.6, 2.4]) { R.box(0, zz, 160, 0.03, 0.03, { color: 0x2a2018, y: 5.2, solid: false, cast: false }); for (let x = -76; x <= 76; x += 1.6) { if (broken && Math.sin(x * 7) > 0.3) continue; R.sprite(chochin(), x, zz, { y: 4.3 + Math.sin(x * 0.7) * 0.18, glow: !broken, scale: 0.7, thin: true }); } }
    for (let x = -20; x <= 20; x += 13.3) R.light(x, 4.6, 0, broken ? 0xd8d0c0 : 0xffa070, broken ? 6 : 10, 14);
    if (broken) { // картонный мир: задники на подпорках, нарисованное небо
      R.box(0, -12, 140, 0.2, 12, { color: 0xc8b898, solid: false }); R.decal(canvasTex(64, 24, (c) => { c.fillStyle = '#d8c8a8'; c.fillRect(0, 0, 64, 24); c.strokeStyle = '#6a5a4a'; c.lineWidth = 1; for (let i = 0; i < 6; i++) { c.beginPath(); c.arc(8 + i * 10, 12, 4, 0, 7); c.stroke(); } ptext(c, 'ФОН №3: «ВЕЧЕР»', 32, 18, { size: 4, col: '#6a5a4a', align: 'center' }); }, 'cardsky'), { x: 0, y: 6, z: -11.85, w: 60, h: 22, noSlot: true });
      for (let x = -20; x <= 20; x += 8) { const s = R.box(x, -6.6, 0.1, 1.6, 2.6, { tex: 'wood', solid: false }); s.rotation.x = -0.5; }
    }
    // тории и лестница к холму
    const torii = new THREE.Group(); const red = new THREE.MeshLambertMaterial({ map: tile('torii', 16, (c) => { px(c, 0, 0, 16, 16, '#d0302a'); for (let i = 0; i < 10; i++) px(c, Math.floor(hsh(i, 2) * 16), Math.floor(hsh(i, 3) * 16), 1, 3, '#a82018'); px(c, 0, 0, 1, 16, '#ff6a50'); px(c, 15, 0, 1, 16, '#7a140c'); }), color: broken ? 0xc8b8b0 : 0xffffff, emissive: broken ? 0 : 0x2a0604 }); const B = (w: number, h: number, d: number, x: number, y: number, z: number) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), red); b.position.set(x, y, z); b.castShadow = true; torii.add(b); };
    B(0.5, 6, 0.5, -2.4, 3, 0); B(0.5, 6, 0.5, 2.4, 3, 0); B(7.4, 0.5, 0.6, 0, 6.2, 0); B(6.2, 0.35, 0.4, 0, 5.2, 0); torii.position.set(21, 0, -3.4); R.room.group.add(torii); R.collider(18.4, -3.8, 18.8, -3.0); R.collider(23.2, -3.8, 23.6, -3.0);
    for (let i = 0; i < 10; i++) R.box(21, -6 - i * 0.6, 5, 0.6, 0.3 + i * 0.3, { tex: 'stone', tint: '#a8a0a8', solid: false });
    R.box(-16, 3.4, 6, 3, 0.6, { tex: 'stage', solid: false }); R.collider(-19, 1.9, -13, 4.9); R.decal(canvasTex(176, 32, (c) => { px(c, 0, 0, 176, 32, '#3a1020'); px(c, 2, 2, 172, 28, '#fff0f4'); px(c, 2, 2, 172, 3, '#e84a6f'); px(c, 2, 27, 172, 3, '#e84a6f'); otext(c, 'ДРАМКРУЖОК ★ СПЕКТАКЛЬ', 88, 8, 15, '#e84a6f', '#3a1020'); }, 'clubstage2'), { x: -16, y: 3.0, z: 2.05, w: 5.6, h: 1.0, noSlot: true }); for (const sx of [-18.9, -13.1]) R.box(sx, 2.0, 0.14, 0.14, 3.5, { tex: 'wood', solid: false }); R.box(-16, 4.95, 6, 0.1, 0.6, { tex: 'velvet', y: 0.0, solid: false, cast: false });
    if (!broken) { let next = 2, t = 9; const l = R.light(0, 12, -14, 0xff6080, 0, 60); R.onUpdate((dt) => { next -= dt; t += dt; if (next < 0) { next = 3 + Math.random() * 3; t = 0; l.color.setHex([0xff6080, 0x80c0ff, 0xffe070][Math.floor(Math.random() * 3)]); l.position.x = -20 + Math.random() * 40; } l.intensity = Math.max(0, 40 - t * 40); }); }
    // стол для бэнто у ларька
    R.table(2, 0.2, 2.4, 1.2, { tex: 'wood' }); R.photo('pair', 'Идеальный кадр', 2, 0.2, { cond: () => !!f.mat_bentoG && !f.mat_shot });
    if (!f.mat_bento) { R.npc('matvey_school', 0.6, 1.4, { id: 'matvey', talk: (G: any) => bentoScene(G) }); R.npc('artemiy', 3.4, 1.4, { dir: 'l', talk: (G: any) => bentoScene(G) }); }
    if (f.mat_bento && !f.mat_break) R.trigger(-4, -2, 8, 4, (G: any) => notebookScene(G));
    if (f.mat_break && !f.mat_roof) R.look('benchDr', 2, 1.4, 'Место, где лежала тетрадь (Драма)', async (G: any) => { G.focus(2, 1.2, 10); await G.run(M.benchDr); G.f.mat_benchD = 1; G.unfocus(); }, { mask: 'drama', r: 1.8 });
    warmKey(R, 2, 3.2, 3.0, 11);
    if (f.mat_break) { R.npc('matvey_school', 19.4, 0.8, { id: 'matvey', dir: 'l', talk: ['matvey/sad: Крыша. Шаг 100. Ты же всё рассчитала. Пойдём, раз рассчитала.'] }); R.door('roof', 21, { z: -3.6, label: 'Лестница на крышу школы', col: '#8a3a4a', sign: 'КРЫША', fn: (G) => G.goto('mat_roof') }); }
    R.crowd(['student', 'student2', 'dancer', 'student', 'courtier', 'student2'], -22, 4.6, 6, 3.6, 1.4, 'f');
    R.spawn('start', -9, 1.6, 'r'); mangaFinish(R, G);
  },
  async enter(G) { if (!G.f.mat_f) { G.f.mat_f = 1; await G.run(M.festIntro); } },
  async photo(G, subs) { const f = G.f; if (!subs.includes('pair') || f.mat_shot) return; f.mat_shot = 1; stage(G); await G.run(M.photoAnime); await bentoTaste(G); },
};
async function bentoScene(G: any) {
  const f = G.f; if (f.mat_bentoG) return G.run(M.bentoShot); f.mat_bentoG = 1; const mat = G.actor('matvey'), art = G.actor('artemiy'); mat.face(art.x, art.z); art.face(mat.x, mat.z);
  await G.run(M.bentoGive); await G.run(M.bentoShot); G.toast('C: поднять камеру. Или просто подождать', '◉');
  const c = await board(G, ['Поставить идеальный кадр (камера)', 'Не мешать, пусть едят']); if (c === 1) { sincere(G); await bentoTaste(G); }
}
async function bentoTaste(G: any) {
  const f = G.f; if (f.mat_bento) return; const k = M.bentoTaste.findIndex((s: any) => typeof s === 'string' && s.startsWith('*: Матвей смеётся'));
  G.focus(2, 1.2, 11); await G.run(M.bentoTaste.slice(0, k)); const off = await warmOn(G, 2, 1.2, { shafts: 2, motes: 'fireflies', glow: 0.34, key: 7 }); dolly(G, 2, 1.2, 11, 9, 2.5);
  await G.run(M.bentoTaste.slice(k)); await G.wait(0.8); await off(); G.unfocus(); f.mat_bento = 1; G.give('mat_photo' as any, true); await G.rebuild();
}
async function notebookScene(G: any) {
  const f = G.f; if (f.mat_break) return; const B = new (await import('../world/room')).Builder(G.room, G); const mat = B.actor('matvey_school', 0.6, 1.4, { id: 'matvey' }); const art = B.actor('artemiy', 3.4, 1.4, { id: 'artemiy', dir: 'l' }); G.focus(2, 0.8, 13);
  // наезд на Арутеми-куна с тетрадью, музыка уходит, тишина перед приговором
  await G.run(M.notebook.slice(0, 1)); G.audio.music(null); await dolly(G, 3.2, 1.0, 13, 8, 2); await G.wait(1.0); await G.run(M.notebook.slice(1, 3));
  G.focus(3.4, 1.2, 7); await G.wait(0.8); await G.run(M.notebook.slice(3)); G.focus(1.6, 1.0, 12);
  await art.walkTo(-24, 2, 3); art.hidden = true; mat.face(G.player.x, G.player.z); await G.run(M.matveyAngry);
  // мир трескается: камера отъезжает и поднимается, герои становятся маленькими среди гаснущих фонариков
  G.sfx('crash'); G.shake(0.6); G.flash(0.4); f.mat_break = 1; G.grade({ ...fakeGrade(3), sat: 0.55, wave: 0.1 });
  const back = angle(G, 0.82, 0.8, 2.6); dolly(G, 1.4, 0.8, 12, 20, 2.6); await G.run(M.worldBreaks); await (await back)(0.6); G.unfocus(); await G.rebuild(); G.audio.music('school_soft');
  maskHint(G, 'mat_dr', 'Маска Драмы (3) показывает, как всё было на самом деле. Например, с тетрадью', '♦');
}

// ---------------- 5. крыша: шаг 100 ----------------
const roof: RoomDef = {
  name: 'Крыша школы', w: 24, d: 12, music: 'school_soft', amb: 'wind', step: 'stone', grade: { sat: 0.9, tint: [0.94, 0.95, 1.08], vig: 0.5, bright: 1.0, bloom: 0.32 }, camDist: 21,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x0c1430; fog(R, 0x18183a, 34, 90);
    const slab = tile('roofslab', 32, (c) => { px(c, 0, 0, 32, 32, '#5a5e6e'); for (const [x, y] of [[0, 0], [16, 0], [0, 16], [16, 16]]) { const v = hsh(x + y, 5); px(c, x + 1, y + 1, 15, 15, v > 0.5 ? '#8a8e9c' : '#82869a'); px(c, x + 1, y + 1, 15, 1, '#9a9eac'); for (let i = 0; i < 5; i++) px(c, x + 2 + Math.floor(hsh(i + x, y) * 12), y + 2 + Math.floor(hsh(i + y, x + 1) * 12), 1, 1, '#6e7282'); } });
    R.floor('concrete', { tint: '#5a5e6e', w: 90, d: 30, z: 6, y: -0.04 }); ground(R, slab, 0, 4, 90, 22, 2, 0);
    R.ambient(0x3a4468, 2.2, 0x8aa0d8); R.light(0, 4.5, 2, 0xc8d8ff, 7, 14);
    // парапет и сетчатый забор (как на любой школьной крыше в аниме), тянется за края кадра
    R.box(0, -5.9, 90, 0.5, 0.6, { tex: 'concrete', tint: '#9a9eac', solid: false });
    const mesh = tile('fence', 16, (c) => { c.clearRect(0, 0, 16, 16); c.fillStyle = '#4a7a6a'; for (let i = 0; i < 16; i++) { c.fillRect(i, i, 1, 1); c.fillRect(15 - i, i, 1, 1); } });
    plane(R, mesh, 0, 1.9, -5.7, 90, 2.6, { rep: [90 / 0.7, 2.6 / 0.7] });
    for (const y of [0.6, 3.2]) R.box(0, -5.7, 90, 0.08, 0.08, { tex: 'metal', tint: '#5a9a84', y, solid: false, cast: false }); for (let x = -44; x <= 44; x += 3) R.box(x, -5.7, 0.1, 0.1, 2.7, { tex: 'metal', tint: '#5a9a84', y: 0.6, solid: false, cast: false });
    R.collider(-12, -6, 12, -5.3);
    // ночное небо: градиент, звёзды, луна, горы, два слоя города с окнами
    const city = canvasTex(320, 100, (c) => { const cols = ['#060a1e', '#0a1028', '#101834', '#182040', '#22284c', '#2e3058', '#3e3862', '#54406a']; for (let y = 0; y < 100; y++) px(c, 0, y, 320, 1, cols[Math.min(7, Math.floor(y / 9))]); for (let i = 0; i < 150; i++) px(c, Math.floor(hsh(i, 11) * 320), Math.floor(hsh(i, 12) * 50), 1, 1, hsh(i, 13) > 0.85 ? '#fffbe0' : '#8a90c0');
      disc(c, 250, 22, 11, '#d8d0b0'); disc(c, 249, 21, 10, '#fff6d8'); disc(c, 246, 18, 2, '#e8dcb8'); disc(c, 254, 25, 1.5, '#e8dcb8');
      for (let x = 0; x < 320; x++) { const h = 22 + Math.sin(x * 0.03) * 6 + Math.sin(x * 0.11) * 2; px(c, x, 100 - h - 14, 1, h, '#1a1e3e'); }
      for (let x = 0; x < 320; x += 6) { const h = 10 + Math.floor(hsh(x, 3) * 18); px(c, x, 100 - h, 6, h, '#141634'); }
      for (let x = 2; x < 320; x += 9) { const h = 6 + Math.floor(hsh(x, 4) * 22); px(c, x, 100 - h, 8, h, '#0c0e24'); px(c, x, 100 - h, 8, 1, '#22264a'); for (let y = 100 - h + 3; y < 99; y += 3) for (let k = 1; k < 7; k += 2) if (hsh(x * 7 + y, k) > 0.62) px(c, x + k, y, 1, 1, hsh(y, x) > 0.3 ? '#ffd890' : '#a8d8ff'); }
      px(c, 150, 40, 2, 60, '#0c0e24'); px(c, 147, 60, 8, 2, '#0c0e24'); px(c, 150, 38, 2, 2, '#ff3a3a'); }, 'roofcity2');
    for (const cx of [-90, -30, 30, 90]) (plane(R, city, cx, -10, -40, 60, 18.75, { basic: true }).material as THREE.MeshBasicMaterial).fog = false;
    // водонапорный бак на опорах, вентиляционные блоки, трубы: всё с пиксельными текстурами
    const tankT = tile('tank', 32, (c) => { px(c, 0, 0, 32, 32, '#c8ccd4'); for (let x = 0; x < 32; x += 8) { px(c, x, 0, 1, 32, '#8a8e9a'); px(c, x + 1, 0, 1, 32, '#e4e8ee'); } for (let y = 4; y < 32; y += 10) for (let x = 3; x < 32; x += 8) px(c, x, y, 1, 1, '#6a6e7a'); px(c, 0, 14, 32, 3, '#4a7aa8'); for (let i = 0; i < 6; i++) px(c, Math.floor(hsh(i, 8) * 32), 18 + Math.floor(hsh(i, 9) * 12), 1, 4, 'rgba(120,80,50,.4)'); });
    const tank = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 2.2, 16), new THREE.MeshLambertMaterial({ map: tankT })); tank.position.set(-8.6, 2.6, -3.4); tank.castShadow = true; R.room.group.add(tank);
    const cap = new THREE.Mesh(new THREE.ConeGeometry(1.3, 0.5, 16), new THREE.MeshLambertMaterial({ map: tex('metal', '#9aa0ac') })); cap.position.set(-8.6, 3.95, -3.4); R.room.group.add(cap);
    for (const [sx, sz] of [[-0.9, -0.9], [0.9, -0.9], [-0.9, 0.9], [0.9, 0.9]]) R.box(-8.6 + sx, -3.4 + sz, 0.16, 0.16, 1.5, { tex: 'metal', tint: '#6a7080', solid: false }); R.collider(-9.9, -4.7, -7.3, -2.1);
    R.box(-6.9, -3.4, 0.08, 0.5, 3.6, { tex: 'metal', tint: '#6a7080', solid: false });
    const fan = canvasTex(32, 24, (c) => { px(c, 0, 0, 32, 24, '#3a3e4a'); px(c, 1, 1, 30, 22, '#b8bcc6'); px(c, 1, 1, 30, 1, '#dce0e8'); disc(c, 10, 12, 8, '#2a2e3a'); disc(c, 10, 12, 7, '#4a4e5a'); for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2 + 0.4; for (let r = 1; r < 6; r++) px(c, Math.round(10 + Math.cos(a) * r), Math.round(12 + Math.sin(a) * r), 2, 2, '#8a8e9a'); } disc(c, 10, 12, 1.5, '#2a2e3a'); for (let y = 4; y < 21; y += 2) px(c, 21, y, 8, 1, '#7a7e8a'); }, 'mfan');
    for (const [x, z] of [[6.2, -4.2], [8.6, -4.2]]) pbox(R, x, z, 2.2, 1.0, 1.6, fan, { side: 0x9a9eaa, top: 0xb8bcc6 });
    R.box(0, -5.0, 24, 0.25, 0.25, { tex: 'metal', tint: '#8a6a5a', y: 0.2, solid: false }); R.box(-4, -5.0, 0.25, 0.25, 1.6, { tex: 'metal', tint: '#8a6a5a', solid: false });
    R.box(-3.4, 3.6, 2.4, 0.6, 0.12, { tex: 'wood', tint: '#a07050', y: 0.5 }); for (const sx of [-1, 1]) R.box(-3.4 + sx, 3.6, 0.12, 0.5, 0.5, { tex: 'metal', solid: false });
    // лестничная будка с дверью вниз (на восточной стороне)
    const shT = canvasTex(32, 32, (c) => { px(c, 0, 0, 32, 32, '#8a8c9a'); for (let i = 0; i < 160; i++) px(c, Math.floor(hsh(i, 61) * 32), Math.floor(hsh(i, 62) * 32), 1, 1, hsh(i, 63) > 0.5 ? '#7a7c8a' : '#9a9caa'); for (let x = 0; x < 32; x += 3) if (hsh(x, 64) > 0.4) px(c, x, 0, 1, 6 + Math.floor(hsh(x, 65) * 14), 'rgba(40,40,56,.35)'); px(c, 0, 0, 32, 1, '#b8bac6'); px(c, 0, 31, 32, 1, '#4a4c5a'); }, 'mstairh');
    const shM = pbox(R, 14.2, -1, 4, 8, 4.2, shT, { side: 0x7a7c8a, top: 0x6a6c78, solid: false }); const shSide = new THREE.MeshLambertMaterial({ map: shT }); shM.material = [shSide, shSide, L(0x6a6c78), shSide, shSide, shSide]; R.box(14.2, -1, 4.4, 8.4, 0.3, { tex: 'concrete', tint: '#6a6e7c', y: 4.2, solid: false });
    R.box(12.15, -1.4, 0.12, 0.5, 0.3, { color: 0xfff0b0, emissive: 0xffd890, y: 3.4, solid: false, cast: false }); R.light(11.6, 3.2, -1.4, 0xffd8a0, 5, 7);
    // бельевая верёвка с полотенцами, ведро, конусы, лужи, мишень для мяча
    R.box(-2, -4.6, 0.08, 0.08, 2.6, { tex: 'metal', solid: false }); R.box(4.4, -4.6, 0.08, 0.08, 2.6, { tex: 'metal', solid: false }); R.box(1.2, -4.6, 6.4, 0.03, 0.03, { color: 0xd8d8d8, y: 2.5, solid: false, cast: false });
    for (let i = 0; i < 5; i++) plane(R, canvasTex(8, 12, (c) => { px(c, 0, 0, 8, 12, ['#f4f0e4', '#a8d8ff', '#ffb4c8', '#f2c230', '#5fd0c8'][i]); px(c, 0, 9, 8, 1, '#ffffff'); px(c, 0, 0, 8, 1, '#6a6a7a'); px(c, 7, 0, 1, 12, 'rgba(0,0,0,.2)'); }, 'mtowel' + i), -1.2 + i * 1.2, 2.05, -4.6, 0.8, 0.9, {});
    R.box(-3.4, -1.8, 0.5, 0.5, 0.55, { tex: 'metal', tint: '#4a7aa8' }); for (const [x, z] of [[8.4, 3.2], [9.0, 3.5]]) R.box(x, z, 0.4, 0.4, 0.6, { color: 0xe8662a, solid: false });
    for (const [x, z, w] of [[-1.6, 1.2, 2.4], [5, 0.6, 1.6], [-10, 2.4, 2]]) plane(R, canvasTex(16, 8, (c) => { c.fillStyle = 'rgba(140,160,220,.5)'; c.beginPath(); c.ellipse(8, 4, 7, 3, 0, 0, 7); c.fill(); px(c, 5, 3, 4, 1, 'rgba(255,240,200,.7)'); }, 'mpuddle'), x, 0.02, z, w, w / 2, { rx: -Math.PI / 2, basic: true });
    for (const [x, z] of [[-11, -1.2], [10.4, 3.6]]) pbox(R, x, z, 1.4, 0.9, 0.8, fan, { side: 0x9a9eaa, top: 0xb8bcc6 });
    R.box(-11, 4.6, 6, 0.2, 0.2, { tex: 'metal', tint: '#8a6a5a', y: 0.15, solid: false }); R.box(-14, 1, 0.2, 7.2, 0.2, { tex: 'metal', tint: '#8a6a5a', y: 0.15, solid: false });
    sticker(R, 'm_sparkle', 2.6, 4.4, -5.5, 0.6, 0.6, { basic: true }); R.door('down', -2, { wall: 'e', label: 'Лестница вниз', col: '#5a5a66', cond: () => !!f.mat_roof, locked: ['~: Сначала шаг 100. Матвей ждёт.'], fn: (G) => G.goto('mat_hall', 'club') });
    R.npc('matvey_school', 1.4, -3.6, { id: 'matvey', dir: 'b', talk: (G: any) => roofScene(G) });
    R.spawn('start', 9.6, -2, 'l'); mangaFinish(R, G);
  },
  async enter(G) { if (!G.f.mat_roofI) { G.f.mat_roofI = 1; await G.run(M.roofIntro); } },
};
async function roofScene(G: any) {
  const f = G.f; if (f.mat_roof) return G.run(['matvey/worried: Он в кабинете драмкружка. Я знаю. Он всегда там, когда ему грустно. Я… пойду сам.']);
  G.focus(1, -3, 13); await G.run(M.roofWait.slice(0, 1)); await G.wait(1.2); await G.run(M.roofWait.slice(1)); await G.run(M.roofChoice);
  const back = await angle(G, 0.18, 2.8, 1.4); G.focus(1, -3.6, 18); await G.wait(0.9); G.sfx('firework'); G.flash(0.3); speedLines(1.4); await G.run(M.roofFire); await back(1.2);
  f.mat_roof = 1; G.unfocus(); await G.run(['matvey: Он в кабинете драмкружка. Я знаю. Он всегда там, когда ему грустно.']);
}

// ---------------- 6. кабинет драмкружка: настоящий шаг ----------------
const club: RoomDef = {
  name: 'Кабинет драмкружка', w: 18, d: 11, music: null, amb: null, step: 'wood', grade: { sat: 1.0, tint: [1.08, 0.98, 0.9], vig: 0.5, bright: 0.94, contrast: 1.08, bloom: 0.22 }, noTilt: false,
  build(R, G) {
    R.room.group.userData.bg = 0x1a1410; ground(R, T.hallFloor(), 0, 6, 60, 36, 1.8, 0.0, 0xd8c8b0); R.walls('schoolwall', { h: 7.5, tint: '#a8947c' }); R.ambient(0x4a3e38, 1.7, 0xd8bca0); R.light(-3, 3.4, 3, 0xffc890, 6, 10);
    R.box(0, -5.42, 18, 0.12, 1.1, { tex: 'wood', tint: '#a07050', solid: false, cast: false }); R.box(-8.94, 0, 0.12, 11, 1.1, { tex: 'wood', tint: '#a07050', solid: false, cast: false }); R.box(8.94, 0, 0.12, 11, 1.1, { tex: 'wood', tint: '#a07050', solid: false, cast: false });
    R.poster('РОМЕО И ДЖУЛЬЕТТА', 'весенний спектакль', { x: -1.2, y: 3.2, w: 1.5, h: 2.1, motif: 'rose' }); R.poster('100 ШАГОВ', 'премьера!', { x: 7.4, y: 3.4, w: 1.4, h: 1.9, motif: 'moon' }); corkBoard(R, 0, 3.2, 2.4, 1.6, 5, { wall: 'w', at: -1.5 });
    R.decal(canvasTex(36, 20, (c) => { px(c, 0, 0, 36, 20, '#2a1810'); px(c, 1, 1, 34, 18, '#f4ecd8'); ptext(c, 'ДРАМКРУЖОК', 18, 2, { size: 7, col: '#8e1830', align: 'center' }); for (let i = 0; i < 5; i++) disc(c, 6 + i * 6, 14, 2, ['#e84a6f', '#f2c230', '#40a0e0', '#5fd0c8', '#e84a6f'][i]); }, 'mclubsign'), { wall: 'e', at: -2, y: 3.6, w: 2.2, h: 1.2 }); sticker(R, 'm_stars', 8.9, 4.6, 1.6, 1.8, 0.6, { ry: -Math.PI / 2 }); sticker(R, 'm_haha', -8.9, 3.6, 1.4, 0.7, 1.4, { ry: Math.PI / 2 });
    window3D(R, -5, { wall: 'n', y: 3, w: 2.4, h: 2.4, night: true }); R.light(-5, 3, -3, 0xffc890, 8, 10);
    // школьные стулья кругом (пиксельные, с разными сумками/сценариями на сиденьях)
    const chairT = (v: number) => canvasTex(14, 22, (c) => { const W = ['#b07a48', '#a06a3a', '#c08a58'][v % 3]; px(c, 2, 0, 10, 8, '#2a1a10'); px(c, 3, 1, 8, 6, W); px(c, 3, 1, 8, 1, '#e0b080'); px(c, 3, 8, 1, 4, '#5a5e6a'); px(c, 10, 8, 1, 4, '#5a5e6a'); px(c, 1, 11, 12, 3, '#2a1a10'); px(c, 2, 11, 10, 2, W); px(c, 2, 14, 1, 8, '#5a5e6a'); px(c, 11, 14, 1, 8, '#5a5e6a'); px(c, 4, 14, 1, 6, '#3a3e48'); px(c, 9, 14, 1, 6, '#3a3e48');
      if (v % 3 === 1) { px(c, 4, 9, 6, 3, '#f4f0e4'); px(c, 5, 10, 4, 1, '#8e1830'); } if (v % 4 === 2) { px(c, 3, 8, 7, 4, '#2a3a5a'); px(c, 4, 7, 4, 1, '#2a3a5a'); } }, 'mchair' + v);
    for (let i = 0; i < 9; i++) { const a = i / 9 * Math.PI * 2; const x = Math.cos(a) * 3.2, z = 0.4 + Math.sin(a) * 2.2; R.sprite(chairT(i), x, z, { scale: 1.1, solid: 0.3, flipX: Math.cos(a) > 0 }); }
    R.box(6.4, -4.6, 4.4, 1.6, 0.35, { tex: 'stage', tint: '#8a5a3a' }); R.box(6.4, -3.78, 4.4, 0.06, 0.35, { tex: 'velvet', solid: false, cast: false });
    for (let i = 0; i < 4; i++) R.box(5.2 + (i % 2) * 1.1 + (i > 1 ? 1.4 : 0), -4.7, 1, 0.8, 0.8 + (i % 2) * 0.3, { tex: 'paper', tint: '#d8b888', y: 0.35, solid: false });
    R.sprite('masks', 6.8, -4.5, { y: 1.5, scale: 1.2 }); costumeRack(R, -7.3, -4.5, 2.6, 3); R.sprite('plant', 8.3, 4.6, { scale: 1.2 }); R.sprite('chair', -8.2, 2.6, { scale: 1.2 }); R.light(3, 4, 1, 0xffd8a8, 5, 12);
    // зеркало: на миг в нём две девушки в школьной форме
    const mir = R.decal(canvasTex(24, 36, (c) => { px(c, 0, 0, 24, 36, '#4a3010'); px(c, 1, 1, 22, 34, '#c89a3a'); px(c, 1, 1, 22, 1, '#f0d478'); px(c, 2, 2, 20, 32, '#3a2a14'); for (let y = 3; y < 33; y++) { const k = y / 33; px(c, 3, y, 18, 1, k < 0.45 ? '#8a7a68' : k < 0.5 ? '#5a4a40' : '#6a5440'); } px(c, 3, 15, 18, 1, '#a07048'); for (let x = 5; x < 19; x += 4) { px(c, x, 17, 2, 6, '#8a5a3a'); px(c, x, 16, 2, 1, '#c08a58'); } px(c, 9, 5, 6, 8, '#b8a890'); px(c, 10, 6, 4, 3, '#2a3a5a'); for (let i = 0; i < 9; i++) px(c, 4 + i, 3 + i * 3, 1, 3, 'rgba(255,255,255,.28)'); px(c, 17, 4, 1, 26, 'rgba(255,255,255,.15)'); px(c, 2, 34, 20, 1, '#2a1a08'); }, 'clubmirror2'), { x: 3, y: 2.6, w: 2, h: 3 });
    const ghost = R.decal(canvasTex(24, 36, (c) => { c.fillStyle = '#86641c'; c.fillRect(0, 0, 24, 36); c.fillStyle = '#7a8898'; c.fillRect(2, 2, 20, 32); const girl = (x: number, hair: string, long: boolean) => { c.fillStyle = hair; c.fillRect(x, 10, 6, long ? 12 : 6); c.fillStyle = '#e8c8a8'; c.fillRect(x + 1, 11, 4, 4); c.fillStyle = '#2a3050'; c.fillRect(x, 16, 6, 10); c.fillStyle = '#c41e3a'; c.fillRect(x + 2, 16, 2, 2); c.fillStyle = '#2a2a3a'; c.fillRect(x, 26, 6, 6); }; girl(5, '#5a341f', false); girl(13, '#8a3a1e', true); }, 'clubghost'), { x: 3, y: 2.6, w: 2, h: 3, noSlot: true }); ghost.visible = false; R.room.named.ghost = ghost; void mir;
    R.look('mirror', 3, -4.4, 'Зеркало', ['~: Обычное зеркало для репетиций. В углу наклейка: «Улыбайся глазами».']);
    R.npc('artemiy', -4.6, -4.0, { dir: 'f', talk: (G: any) => clubScene(G) }); warmKey(R, -2.4, 3.2, -1.0, 11);
    R.spawn('start', 7.4, 3.6, 'l'); mangaFinish(R, G);
  },
  async enter(G) { if (!G.f.mat_clubI) { G.f.mat_clubI = 1; await clubScene(G); } },
};
async function clubScene(G: any) {
  const f = G.f; if (f.mat_done) return; const B = new (await import('../world/room')).Builder(G.room, G); const mat = B.actor('matvey_school', 2.6, 2.6, { id: 'matvey' }); const art = G.actor('artemiy');
  G.player.place(8.2, 4.4, 'l'); G.focus(-1, -1.4, 17); G.audio.music(null); const back = await angle(G, 0.4, 1.6, 0);
  await G.run(M.clubIntro); await Promise.all([mat.walkTo(-2.6, -2.4, 1.6), dolly(G, -3.4, -2.6, 17, 12, 3)]); mat.face(art.x, art.z); art.face(mat.x, mat.z);
  if (f.mat_artTr) await G.run(M.clubArt); G.audio.music('school_soft');
  // искушение вмешаться: каждый раз можно промолчать
  let fails = 0; for (const [line, bad, good] of M.tempt as string[][]) { await G.run([line]); const c = await board(G, [good, bad]); if (c === 1) { fails++; stage(G); G.flash(0.3); await G.run(M.temptFail); } else sincere(G); }
  const ending = f.mat_perfect ? 'perfect' : staged(f) >= 4 ? 'tear' : 'real'; f.mat_end = ending;
  // тишина и крупный план на двоих перед признанием; потом тёплый закатный свет из окна
  G.audio.music(null); await dolly(G, -3.6, -3.0, 12, 8.5, 1.6); await G.wait(1.2);
  const conf = ending === 'perfect' ? M.confPerfect : ending === 'tear' ? M.confTear : M.confReal;
  await G.run(conf.slice(0, 1)); const off = await warmOn(G, -3.6, -3.0, ending === 'perfect' ? { shafts: 2, motes: 'dust', glow: 0.2, key: 4, music: 'school_soft', grade: { ...WARM, sat: 0.95, bloom: 0.6 } } : { shafts: 3, motes: 'dust', glow: 0.34, key: 8, music: 'school_soft' });
  await G.run(conf.slice(1)); if (G.f.mat_benchD && ending !== 'perfect') await G.run(M.clubBench); await G.wait(0.6);
  G.focus(3, -3.4, 9); await G.wait(0.4); G.room.named.ghost.visible = true; G.sfx('glitch'); G.flash(0.15); await G.wait(0.8); G.room.named.ghost.visible = false; await G.run(M.mirror); G.focus(-3.6, -3.0, 11); await G.run(M.clue);
  void fails; f.mat_done = 1; await mat.walkTo(7, 3.6, 3); mat.face(G.player.x, G.player.z); G.player.face(mat.x, mat.z); G.focus(7.6, 3.6, 10);
  await G.run(M.end); G.give('lantern', true); G.sfx('applause', { dur: 3 }); await G.wait(1); await off(); await back(); G.unfocus();
  const title = ending === 'perfect' ? 'Идеальная сцена' : ending === 'tear' ? 'Неизбежный шаг' : 'Настоящий кадр';
  await finishChapter(G, 'matvey', [['100 STEPS TO THE INEVITABLE', 'act'], 'Финал: «' + title + '».', ['Матвей сделал шаг сам. Варя не режиссировала.', 'sm']]);
}
export const rooms: Record<string, RoomDef> = { mat_yard: yard, mat_hall: hall, mat_class: klass, mat_fest: fest, mat_roof: roof, mat_club: club };
