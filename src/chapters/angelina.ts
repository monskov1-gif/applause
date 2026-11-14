// Глава Ангелины, DEBUT: THE IDOL PROJECT. Из спального района на большую сцену.
// Механики: концепт агентства, танцевальная связка (повтори), вокальная ритм-сцена, выбор образа (решает Ангелина),
// микшерный пульт, живое сведение её собственного трека, дебют: решение о фонограмме и ритм-сцена с текстом песни.
// Визуально: каждая комната, узнаваемое реальное место (панельная кухня, холл агентства, танцкласс, фотостудия, студия звукозаписи, концерт).
import * as THREE from 'three';
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext, tex } from '../gfx/tex';
import { A } from '../data/dialogue/angelina';
import { pick, rhythm, sequence, timing } from '../ui/minigames';
import { window3D, sofa, palm } from '../world/decor3d';
import { vanity, clutterTex, costumeRack, PROPTEX } from '../world/decor';
import { finishChapter, actOf } from './common';

// ---------- кино: тёплый свет в нежные моменты, медленная камера, паузы (всё мгновенно в G.fast) ----------
const WARM = { tint: [1.12, 1.0, 0.86], sat: 1.1, bloom: 0.9, vig: 0.35, bright: 1.05 };
function tween(G: any, dur: number, fn: (k: number) => void): Promise<void> {
  const room = G.room; if (G.fast || !room || dur <= 0) { fn(1); return Promise.resolve(); }
  return new Promise((res) => { let t = 0, done = false; const u = (dt: number) => { t += dt; const k = Math.min(1, t / dur); fn(k * k * (3 - 2 * k)); if (k >= 1) end(); };
    const end = () => { if (done) return; done = true; if (G.room === room) fn(1); const i = room.updaters.indexOf(u); if (i >= 0) room.updaters.splice(i, 1); res(); };
    room.updaters.push(u); setTimeout(end, dur * 1000 + 1500); });
}
/** Медленный наезд/отъезд: фокус, дистанция и ракурс камеры плавно меняются за dur секунд. */
let camTok = 0;
function camMove(G: any, to: { x?: number; z?: number; dist?: number; pitch?: number; yOff?: number }, dur = 2): Promise<void> {
  const my = ++camTok, c = G.cam, f0 = c.focus ? { ...c.focus } : { x: c.x, z: c.z, dist: c.dist }, p0 = c.pitch, y0 = c.yOff, L = (a: number, b: number | undefined, k: number) => b === undefined ? a : a + (b - a) * k;
  return tween(G, dur, (k) => { if (my !== camTok) return; G.focus(L(f0.x, to.x, k), L(f0.z, to.z, k), L(f0.dist, to.dist, k)); c.pitch = L(p0, to.pitch, k); c.yOff = L(y0, to.yOff, k); });
}
/** Вернуть ракурс комнаты и отпустить фокус. */
async function camBack(G: any, pitch = 0.56, yOff = 1.2, dur = 1.2) { const my = ++camTok, p0 = G.cam.pitch, y0 = G.cam.yOff; await tween(G, dur, (k) => { if (my !== camTok) return; G.cam.pitch = p0 + (pitch - p0) * k; G.cam.yOff = y0 + (yOff - y0) * k; }); G.unfocus(); }
/** Тёплый «ключевой» свет и золотые пылинки: спрятаны, пока не наступит нежный момент. */
function warmRig(R: Builder, x: number, z: number, o: { col?: number; kind?: 'dust' | 'petals' | 'sparks'; pcol?: number; y?: number; count?: number } = {}) {
  R.light(x, o.y ?? 3.4, z + 1.6, o.col ?? 0xffc078, 0, 13, { name: 'warmKey', force: true });
  const m = R.particles(o.kind || 'dust', { count: o.count ?? 90, top: 6, color: o.pcol ?? 0xffd890, name: 'warmMotes' }); m.visible = false; const mm = m.material as THREE.PointsMaterial; mm.opacity = 0; if ((o.kind || 'dust') === 'dust') mm.size = 0.12;
}
let warmPrev: any = null;
/** Нежный момент: грейд теплеет, загорается тёплый ключ, в воздухе золотая пыль; по желанию, тихая музыка. */
async function warmOn(G: any, o: { int?: number; grade?: any; music?: string; dur?: number } = {}) {
  if (!G.room) return; if (!warmPrev || warmPrev.room !== G.room) warmPrev = { room: G.room, grade: { ...G.gradeBase }, music: G.audio.cur?.id ?? null, noir: document.body.classList.contains('noir-mode') };
  G.grade({ ...WARM, ...o.grade }); if ((o.grade?.sat ?? WARM.sat) > 0.3) document.body.classList.remove('noir-mode'); if (o.music) G.audio.music(o.music, { fade: 2.5 });
  const l = G.room.named.warmKey, m = G.room.named.warmMotes; if (m) m.visible = true; const i0 = l?.intensity || 0, o0 = m?.material.opacity || 0, I = o.int ?? 16;
  await tween(G, o.dur ?? 1.6, (k) => { if (l) l.intensity = i0 + (I - i0) * k; if (m) m.material.opacity = o0 + (0.75 - o0) * k; });
}
async function warmOff(G: any, dur = 1.4) {
  const p = warmPrev; warmPrev = null; if (!p || G.room !== p.room) return;
  G.gradeBase = p.grade; G.applyGrade(); if (p.noir) document.body.classList.add('noir-mode'); if (p.music !== (G.audio.cur?.id ?? null)) G.audio.music(p.music, { fade: 2 });
  const l = G.room.named.warmKey, m = G.room.named.warmMotes, i0 = l?.intensity || 0, o0 = m?.material.opacity || 0;
  await tween(G, dur, (k) => { if (l) l.intensity = i0 * (1 - k); if (m) m.material.opacity = o0 * (1 - k); }); if (m && !warmPrev) m.visible = false;
}
/** Первая подсказка про маски в главе (один раз). */
function maskHint(G: any, key: string, text: string) { if (G.f['mhint_' + key]) return; G.f['mhint_' + key] = 1; G.toast(text, '◐'); }

const GLOSS = { sat: 1.1, tint: [1.04, 0.99, 1.04], vig: 0.35, bright: 1.0, bloom: 0.55 };
const STAGE = { sat: 1.3, tint: [1.05, 0.95, 1.1], vig: 0.5, bloom: 1.0, contrast: 1.08 };
const angelChar = (G: any) => G.f.ang_look_own ? 'angelina_own' : G.f.ang_concept ? 'angelina_idol' : 'angelina';

// ---------------- пиксельные кисти ----------------
type DC = CanvasRenderingContext2D;
const rng = (s: number) => () => ((s = (s * 9301 + 49297) % 233280) / 233280);
const r_ = (c: DC, x: number, y: number, w: number, h: number, col: string) => { c.fillStyle = col; c.fillRect(x, y, w, h); };
function noise(c: DC, w: number, h: number, a = 0.06, seed = 1) { const r = rng(seed); for (let i = 0; i < w * h / 4; i++) { c.fillStyle = r() > 0.5 ? `rgba(255,255,255,${a})` : `rgba(0,0,0,${a})`; c.fillRect(Math.floor(r() * w), Math.floor(r() * h), 1, 1); } }
const lam = (o: THREE.MeshLambertMaterialParameters) => new THREE.MeshLambertMaterial(o);
const T = (key: string, w: number, h: number, draw: (c: DC) => void) => canvasTex(w, h, (c) => draw(c), 'ang_' + key);
function rep(t: THREE.Texture, rx: number, ry: number) { const c = t.clone(); c.wrapS = c.wrapT = THREE.RepeatWrapping; c.repeat.set(rx, ry); c.needsUpdate = true; return c; }
function plane(R: Builder, w: number, h: number, m: THREE.Material, x: number, y: number, z: number, rx = 0, ry = 0) { const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m); p.position.set(x, y, z); p.rotation.set(rx, ry, 0); p.receiveShadow = true; R.room.group.add(p); return p; }
/** Коробка с отдельной текстурой фасада (+Z) и простыми боками. */
function fbox(R: Builder, x: number, y: number, z: number, w: number, h: number, d: number, front: THREE.Texture | null, side: THREE.Material, o: { solid?: boolean; top?: THREE.Material; ry?: number; emissive?: boolean } = {}) {
  const fm = front ? (o.emissive ? new THREE.MeshBasicMaterial({ map: front }) : lam({ map: front })) : side;
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [side, side, o.top || side, side, fm, side]); m.position.set(x, y + h / 2, z); if (o.ry) m.rotation.y = o.ry; m.castShadow = true; m.receiveShadow = true; R.room.group.add(m);
  if (o.solid) { const sw = o.ry && Math.abs(Math.sin(o.ry)) > 0.5; const hw = sw ? d / 2 : w / 2, hd = sw ? w / 2 : d / 2; R.collider(x - hw, z - hd, x + hw, z + hd); } return m;
}
/** Комната без краёв: высокие стены (боковые уходят за камеру), пол далеко вперёд. Текстура стены, столбец 2×16 ед. (32×256 px). */
function shell(R: Builder, o: { wall: THREE.Texture; floor: THREE.Texture; fu?: number; bg: number; side?: THREE.Texture; noBack?: boolean }) {
  const W = R.w, D = R.d, H = 16, F = 26; R.room.group.userData.bg = o.bg;
  if (!o.noBack) plane(R, W + 2, H, lam({ map: rep(o.wall, (W + 2) / 2, 1) }), 0, H / 2, -D / 2 + 0.01);
  for (const s of [-1, 1]) plane(R, D + F, H, lam({ map: rep(o.side || o.wall, (D + F) / 2, 1) }), s * W / 2, H / 2, F / 2, 0, -s * Math.PI / 2);
  const fu = o.fu || 2; plane(R, W + 2, D + F, lam({ map: rep(o.floor, (W + 2) / fu, (D + F) / fu) }), 0, 0.004, F / 2, -Math.PI / 2);
  const ao = canvasTex(4, 32, (c) => { const g = c.createLinearGradient(0, 0, 0, 32); g.addColorStop(0, 'rgba(20,10,10,.5)'); g.addColorStop(1, 'rgba(20,10,10,0)'); c.fillStyle = g; c.fillRect(0, 0, 4, 32); }, 'ang_ao');
  const aoM = new THREE.MeshBasicMaterial({ map: ao, transparent: true, depthWrite: false }); plane(R, W, 1.2, aoM, 0, 0.012, -D / 2 + 0.6, -Math.PI / 2);
  for (const s of [-1, 1]) { const p = plane(R, D + F, 1.2, aoM, s * (W / 2 - 0.6), 0.012, F / 2, -Math.PI / 2); p.rotation.z = s * Math.PI / 2; }
}
/** Столбец стены 32×256 (2×16 ед.): fn рисует по «высоте в единицах» yU (0 у пола). */
function wallCol(key: string, draw: (c: DC, Y: (u: number) => number) => void) { return T('w' + key, 32, 256, (c) => { draw(c, (u) => Math.round((16 - u) * 16)); noise(c, 32, 256, 0.05, key.length * 13); }); }

// ---------------- экран с «Энджел» ----------------
function screenTex(txt = 'ANGEL♡') { return T('scr' + txt, 80, 48, (c) => { r_(c, 0, 0, 80, 48, '#1a0a1a'); const g = c.createLinearGradient(0, 0, 0, 48); g.addColorStop(0, '#5a1a4a'); g.addColorStop(1, '#1a0a2a'); c.fillStyle = g; c.fillRect(2, 2, 76, 44); r_(c, 30, 6, 20, 22, '#ff9ad8'); r_(c, 33, 10, 14, 14, '#ffc8e8'); r_(c, 36, 15, 2, 2, '#111'); r_(c, 42, 15, 2, 2, '#111'); r_(c, 38, 20, 4, 1, '#e84a8f'); for (let i = 0; i < 6; i++) r_(c, 8 + i * 12, 8 + (i % 2) * 6, 2, 2, '#ffe0f4'); ptext(c, txt, 40, 31, { size: txt.length > 6 ? 7 : 9, col: '#fff', align: 'center' }); for (let i = 0; i < 48; i += 2) r_(c, 0, i, 80, 1, 'rgba(0,0,0,.22)'); r_(c, 0, 0, 80, 2, '#333'); r_(c, 0, 46, 80, 2, '#333'); }); }
const screen = (R: Builder, x: number, y: number, w: number, h: number, txt = 'ANGEL♡', z?: number) => R.decal(screenTex(txt), { x, y, w, h, z, glow: true });

// ---------------- общие пиксельные предметы ----------------
const SPR: Record<string, [number, number, (c: DC) => void]> = {
  kettle: [12, 10, (c) => { r_(c, 2, 3, 8, 7, '#d8d8e0'); r_(c, 3, 2, 6, 1, '#b8b8c0'); r_(c, 5, 0, 2, 2, '#2a2a2e'); r_(c, 10, 4, 2, 2, '#b8b8c0'); r_(c, 3, 4, 2, 4, '#ffffff'); r_(c, 4, 6, 4, 2, '#e84a6f'); }],
  pot: [12, 8, (c) => { r_(c, 1, 2, 10, 6, '#8a8a98'); r_(c, 0, 2, 12, 1, '#5a5a68'); r_(c, 2, 3, 2, 4, '#b8b8c8'); r_(c, 4, 0, 4, 2, '#3a3a40'); }],
  teapot: [12, 9, (c) => { r_(c, 2, 2, 7, 7, '#f4f0e8'); r_(c, 9, 4, 3, 1, '#f4f0e8'); r_(c, 4, 0, 3, 2, '#d04a4a'); r_(c, 3, 4, 5, 2, '#d04a4a'); for (let i = 0; i < 3; i++) r_(c, 3 + i * 2, 5, 1, 1, '#fff'); }],
  cups: [14, 6, (c) => { for (const x of [1, 8]) { r_(c, x, 1, 5, 5, '#f4f0e8'); r_(c, x + 1, 2, 3, 2, '#d04a4a'); r_(c, x + 5, 2, 1, 2, '#f4f0e8'); } }],
  plant: [14, 18, (c) => { r_(c, 4, 12, 6, 6, '#c86a3a'); r_(c, 3, 11, 8, 2, '#a85a30'); for (let i = 0; i < 7; i++) r_(c, 2 + (i * 5) % 10, (i * 3) % 9, 3, 5, i % 2 ? '#3a7a3a' : '#5a9a48'); }],
  shoes: [20, 6, (c) => { for (const [x, col] of [[0, '#2a2a30'], [5, '#2a2a30'], [11, '#e84a8f'], [15, '#e84a8f']] as [number, string][]) { r_(c, x, 2, 4, 4, col); r_(c, x, 5, 5, 1, '#111'); } }],
  laundry: [32, 30, (c) => { r_(c, 1, 8, 30, 1, '#c8c8d0'); r_(c, 1, 14, 30, 1, '#c8c8d0'); r_(c, 2, 8, 1, 22, '#a8a8b0'); r_(c, 29, 8, 1, 22, '#a8a8b0'); r_(c, 2, 29, 28, 1, '#a8a8b0'); for (const [x, y, w, h, col] of [[4, 8, 6, 9, '#7aa0d8'], [11, 8, 5, 6, '#f4f0f8'], [17, 8, 7, 11, '#e888b8'], [5, 14, 4, 7, '#f2c230'], [20, 14, 6, 5, '#ffffff'], [25, 8, 3, 5, '#3a3a48']] as [number, number, number, number, string][]) { r_(c, x, y, w, h, col); r_(c, x, y, w, 1, 'rgba(0,0,0,.2)'); } }],
  mcase: [26, 22, (c) => { r_(c, 1, 10, 24, 12, '#1a1a20'); r_(c, 0, 9, 26, 2, '#c8c8d0'); r_(c, 2, 4, 22, 6, '#26262e'); r_(c, 3, 0, 20, 4, '#1a1a20'); for (let i = 0; i < 10; i++) r_(c, 3 + i * 2, 5, 2, 3, ['#e84a6f', '#f2c230', '#c8a0e0', '#e8b090', '#6a3a2a', '#40e0d0', '#ff9ad8', '#f4e8d8', '#b3122e', '#8a6a5a'][i]); for (let i = 0; i < 4; i++) { r_(c, 3 + i * 5.5, 13, 4, 4, ['#d8a088', '#c88070', '#f0c0a8', '#a87060'][i]); r_(c, 4 + i * 5.5, 14, 2, 1, 'rgba(255,255,255,.4)'); } r_(c, 11, 18, 4, 2, '#c8c8d0'); }],
  brushes: [12, 16, (c) => { r_(c, 2, 8, 8, 8, '#e8e0f0'); r_(c, 2, 8, 8, 1, '#c8c0d8'); for (let i = 0; i < 5; i++) { r_(c, 3 + i * 1.4, 1 + (i % 2) * 2, 1, 8, '#2a1a14'); r_(c, 2.5 + i * 1.4, 0 + (i % 2) * 2, 2, 2, ['#5a3a28', '#c8a080', '#1a1214', '#e8b0a0', '#3a2a24'][i]); } }],
  palette: [16, 8, (c) => { r_(c, 0, 1, 16, 7, '#1a1a1e'); for (let i = 0; i < 8; i++) r_(c, 1 + (i % 4) * 4, 2 + Math.floor(i / 4) * 3, 3, 2, ['#e8a0a0', '#c86a8a', '#a84a6a', '#f2d0b0', '#b08a6a', '#6a4a3a', '#f4e8e0', '#e84a6f'][i]); }],
  facechart: [16, 20, (c) => { r_(c, 0, 0, 16, 20, '#f4f0e8'); c.strokeStyle = '#555'; c.beginPath(); c.ellipse(8, 10, 5, 7, 0, 0, 7); c.stroke(); r_(c, 5, 8, 2, 1, '#6a4a8a'); r_(c, 9, 8, 2, 1, '#6a4a8a'); r_(c, 4, 11, 2, 1, '#e8a0a0'); r_(c, 10, 11, 2, 1, '#e8a0a0'); r_(c, 7, 14, 2, 1, '#c8304a'); r_(c, 1, 1, 6, 1, '#999'); }],
  wig: [12, 12, (c) => { r_(c, 4, 6, 4, 6, '#d8c8b0'); r_(c, 1, 0, 10, 8, '#ff9ad8'); r_(c, 0, 3, 3, 8, '#ff9ad8'); r_(c, 9, 3, 3, 8, '#ff9ad8'); r_(c, 3, 1, 4, 2, '#ffc8e8'); r_(c, 3, 11, 6, 1, '#3a2a1a'); }],
  ringlight: [20, 44, (c) => { c.strokeStyle = '#fff8ec'; c.lineWidth = 3; c.beginPath(); c.arc(10, 9, 7, 0, 7); c.stroke(); r_(c, 9, 16, 2, 26, '#2a2a2e'); r_(c, 4, 41, 12, 2, '#2a2a2e'); r_(c, 8, 7, 4, 4, '#2a2a2e'); }],
  cooler: [12, 30, (c) => { r_(c, 2, 0, 8, 10, 'rgba(120,180,230,.85)'); r_(c, 3, 1, 2, 8, 'rgba(255,255,255,.5)'); r_(c, 1, 10, 10, 20, '#e8e8f0'); r_(c, 3, 14, 2, 2, '#3a7ae0'); r_(c, 7, 14, 2, 2, '#e04a4a'); r_(c, 2, 18, 8, 1, '#b8b8c8'); }],
  magazines: [16, 6, (c) => { r_(c, 0, 3, 9, 3, '#ff4fa0'); r_(c, 5, 1, 9, 3, '#40e0d0'); r_(c, 7, 0, 9, 2, '#f2c230'); r_(c, 1, 4, 3, 1, '#fff'); }],
  floorlamp: [12, 50, (c) => { r_(c, 1, 0, 10, 8, '#f4e8d0'); r_(c, 0, 7, 12, 1, '#c8b890'); r_(c, 5, 8, 2, 40, '#c8a050'); r_(c, 2, 48, 8, 2, '#c8a050'); }],
  trophy: [10, 16, (c) => { r_(c, 1, 1, 8, 6, '#f0d060'); r_(c, 0, 2, 1, 3, '#d4ae48'); r_(c, 9, 2, 1, 3, '#d4ae48'); r_(c, 3, 2, 2, 3, '#fff4c0'); r_(c, 4, 7, 2, 4, '#d4ae48'); r_(c, 2, 11, 6, 2, '#b08a2c'); r_(c, 1, 13, 8, 3, '#2a2a30'); }],
  boombox: [24, 14, (c) => { r_(c, 0, 3, 24, 11, '#2a2a30'); r_(c, 4, 0, 16, 3, '#3a3a40'); for (const x of [5, 19]) { c.fillStyle = '#111'; c.beginPath(); c.arc(x, 9, 4, 0, 7); c.fill(); r_(c, x - 1, 8, 2, 2, '#666'); } r_(c, 10, 5, 4, 3, '#40e0d0'); r_(c, 10, 9, 4, 2, '#ff4fa0'); }],
  bottles: [14, 10, (c) => { for (let i = 0; i < 3; i++) { r_(c, 1 + i * 4, 2, 3, 8, ['#7ac0f0', '#ff9ad8', '#a0f0c0'][i]); r_(c, 1 + i * 4, 0, 3, 2, '#2a2a30'); r_(c, 2 + i * 4, 3, 1, 5, 'rgba(255,255,255,.5)'); } }],
  bag: [18, 10, (c) => { r_(c, 1, 3, 16, 7, '#3a2a5a'); r_(c, 4, 0, 10, 3, '#2a2a30'); r_(c, 1, 6, 16, 1, '#ff4fa0'); r_(c, 7, 4, 4, 2, '#f4f4f8'); }],
  towel: [14, 8, (c) => { r_(c, 0, 2, 14, 6, '#f4f0f8'); r_(c, 0, 4, 14, 1, '#ff9ad8'); r_(c, 2, 0, 10, 2, '#e8e0f0'); }],
  tripodcam: [16, 40, (c) => { r_(c, 3, 2, 10, 7, '#1a1a1e'); r_(c, 0, 4, 4, 4, '#333'); c.fillStyle = '#6a8ab0'; c.beginPath(); c.arc(2, 6, 2, 0, 7); c.fill(); r_(c, 6, 0, 4, 2, '#2a2a2e'); r_(c, 7, 9, 2, 18, '#3a3a40'); c.strokeStyle = '#3a3a40'; c.beginPath(); c.moveTo(8, 26); c.lineTo(1, 40); c.moveTo(8, 26); c.lineTo(15, 40); c.moveTo(8, 26); c.lineTo(8, 40); c.stroke(); }],
  laptop: [16, 10, (c) => { r_(c, 2, 0, 12, 8, '#2a2a30'); r_(c, 3, 1, 10, 6, '#e8d0e0'); r_(c, 5, 2, 4, 4, '#ff9ad8'); r_(c, 0, 8, 16, 2, '#b8b8c0'); }],
  applebox: [16, 8, (c) => { r_(c, 0, 0, 16, 8, '#c89a60'); r_(c, 0, 0, 16, 1, '#e8b880'); r_(c, 5, 3, 6, 2, '#3a2a1a'); r_(c, 0, 7, 16, 1, '#8a6a40'); }],
  guitar: [12, 34, (c) => { r_(c, 5, 0, 2, 4, '#2a1a10'); r_(c, 5, 4, 2, 14, '#4a3020'); c.fillStyle = '#c8302a'; c.beginPath(); c.ellipse(6, 23, 5, 5, 0, 0, 7); c.fill(); c.beginPath(); c.ellipse(6, 29, 6, 5, 0, 0, 7); c.fill(); r_(c, 4, 24, 4, 2, '#1a1a1a'); r_(c, 3, 29, 6, 1, '#d4ae48'); }],
  goldrec: [16, 20, (c) => { r_(c, 0, 0, 16, 20, '#1a1a20'); r_(c, 1, 1, 14, 18, '#2a2a34'); c.fillStyle = '#f0c840'; c.beginPath(); c.arc(8, 8, 6, 0, 7); c.fill(); c.fillStyle = '#b08a2c'; c.beginPath(); c.arc(8, 8, 2, 0, 7); c.fill(); c.strokeStyle = 'rgba(255,240,180,.6)'; c.beginPath(); c.arc(8, 8, 4, 3.6, 5); c.stroke(); r_(c, 3, 16, 10, 2, '#f4f4f8'); }],
  rack: [20, 36, (c) => { r_(c, 0, 0, 20, 36, '#1a1a1e'); for (let i = 0; i < 7; i++) { r_(c, 1, 1 + i * 5, 18, 4, i % 2 ? '#2a2a32' : '#24242a'); r_(c, 2, 2 + i * 5, 2, 2, ['#40e0d0', '#ff4fa0', '#f2c230', '#6af06a'][i % 4]); for (let k = 0; k < 4; k++) r_(c, 6 + k * 3, 2 + i * 5, 1, 2, '#888'); } }],
  drums: [44, 30, (c) => { const d = (x: number, y: number, rx: number, ry: number, col: string) => { c.fillStyle = col; c.beginPath(); c.ellipse(x, y, rx, ry, 0, 0, 7); c.fill(); }; r_(c, 15, 12, 14, 14, '#c8304a'); d(22, 19, 7, 7, '#f4f0f8'); d(22, 19, 5, 5, '#e8e0e8'); ptext(c, 'A', 22, 15, { size: 6, col: '#ff4fa0', align: 'center' }); r_(c, 6, 14, 8, 6, '#c8304a'); d(10, 14, 5, 2, '#e8e0e8'); r_(c, 30, 14, 8, 6, '#c8304a'); d(34, 14, 5, 2, '#e8e0e8'); for (const x of [3, 41]) { r_(c, x, 4, 1, 24, '#888'); d(x, 4, 5, 1.2, '#f0c840'); } r_(c, 8, 20, 1, 8, '#888'); r_(c, 34, 20, 1, 8, '#888'); }],
  keys: [36, 22, (c) => { r_(c, 0, 4, 36, 6, '#1a1a1e'); r_(c, 1, 6, 34, 3, '#f4f4f8'); for (let i = 0; i < 34; i += 2) if (i % 7 !== 4) r_(c, 2 + i, 6, 1, 2, '#111'); r_(c, 2, 10, 2, 12, '#3a3a40'); r_(c, 32, 10, 2, 12, '#3a3a40'); r_(c, 2, 16, 32, 1, '#3a3a40'); r_(c, 26, 4, 6, 2, '#ff4fa0'); }],
  amp: [18, 16, (c) => { r_(c, 0, 0, 18, 16, '#1a1a1e'); r_(c, 1, 4, 16, 11, '#3a3a40'); for (let y = 5; y < 15; y += 2) r_(c, 1, y, 16, 1, '#2a2a30'); r_(c, 1, 1, 16, 2, '#c8a050'); for (let i = 0; i < 5; i++) r_(c, 3 + i * 3, 1, 1, 2, '#111'); }],
  wedge: [20, 8, (c) => { c.fillStyle = '#1a1a1e'; c.beginPath(); c.moveTo(0, 8); c.lineTo(4, 0); c.lineTo(20, 0); c.lineTo(20, 8); c.fill(); r_(c, 6, 2, 12, 5, '#2a2a30'); c.fillStyle = '#111'; c.beginPath(); c.arc(12, 4.5, 2.4, 0, 7); c.fill(); }],
  linearray: [22, 40, (c) => { for (let i = 0; i < 6; i++) { r_(c, 1 + i * 0.3, i * 6.5, 20, 6, '#16161a'); r_(c, 3, i * 6.5 + 1, 16, 4, '#26262c'); for (let k = 0; k < 4; k++) r_(c, 4 + k * 4, i * 6.5 + 2, 2, 2, '#0a0a0c'); } r_(c, 10, 0, 2, 2, '#888'); }],
};
const spr = (k: string) => { const [w, h, d] = SPR[k]; return T('s' + k, w, h, d); };

// ---------------- дом: панельная кухня в Северном районе ----------------
const homeWall = () => wallCol('home', (c, Y) => { r_(c, 0, 0, 32, 256, '#3a2a28'); const y0 = Y(5.6), y1 = Y(0.15);
  r_(c, 0, y0, 32, y1 - y0, '#cdb894'); for (let x = 0; x < 32; x += 8) r_(c, x, y0, 1, y1 - y0, 'rgba(150,120,80,.25)');
  for (let y = y0 + 6; y < y1; y += 14) for (let x = (Math.floor((y - y0) / 14) % 2) * 8 + 4; x < 32; x += 16) { r_(c, x, y, 2, 2, '#b8706a'); r_(c, x - 1, y + 2, 4, 1, '#8a9a6a'); r_(c, x + 1, y - 1, 1, 1, '#d89a8a'); }
  const g = c.createLinearGradient(0, y0, 0, y0 + 30); g.addColorStop(0, 'rgba(90,70,40,.35)'); g.addColorStop(1, 'rgba(90,70,40,0)'); c.fillStyle = g; c.fillRect(0, y0, 32, 30);
  r_(c, 0, y0 - 3, 32, 3, '#e8e0d0'); r_(c, 0, y1, 32, 256 - y1, '#6a4a30'); r_(c, 0, y1, 32, 1, '#8a6a48'); });
const lino = () => T('lino', 32, 32, (c) => { for (let j = 0; j < 4; j++) for (let i = 0; i < 4; i++) { r_(c, i * 8, j * 8, 8, 8, (i + j) % 2 ? '#b89a70' : '#a8885e'); r_(c, i * 8 + 2, j * 8 + 2, 4, 4, (i + j) % 2 ? '#c4a87e' : '#b4946a'); } c.strokeStyle = 'rgba(60,40,20,.35)'; c.beginPath(); c.moveTo(3, 30); c.lineTo(14, 22); c.stroke(); noise(c, 32, 32, 0.07, 3); r_(c, 18, 8, 6, 2, 'rgba(70,50,30,.25)'); });
const home: RoomDef = {
  card: (G) => G.f.intro_ang ? null : (G.f.intro_ang = 2, [[actOf(G), 'act'], ['DEBUT: FROM NOBODY TO ANGEL', 'big'], ['дорама · из спального района на большую сцену', 'sm']]),
  name: 'Кухня в Северном районе', chapter: 'Ангелина', w: 16, d: 10, music: 'idol_own', amb: 'city', step: 'wood', grade: { sat: 1.0, tint: [1.08, 1.0, 0.92], vig: 0.45, bloom: 0.5 },
  build(R, G) {
    const f = G.f; shell(R, { wall: homeWall(), floor: lino(), bg: 0x100c10 }); warmRig(R, 0.6, -1.6, { count: 70, col: 0xffb870, y: 3 }); R.ambient(0x6a5048, 2.2, 0xffe0c8);
    // абажур под потолком
    { const shade = new THREE.Mesh(new THREE.ConeGeometry(0.7, 0.5, 12, 1, true), lam({ map: T('shade', 16, 8, (c) => { r_(c, 0, 0, 16, 8, '#e8a060'); for (let x = 0; x < 16; x += 3) r_(c, x, 0, 1, 8, '#c87a40'); r_(c, 0, 7, 16, 1, '#f4d090'); }), side: THREE.DoubleSide, emissive: 0x6a3a10 })); shade.position.set(-1, 4.7, 0.5); R.room.group.add(shade); R.light(-1, 4.2, 0.5, 0xffd8a8, 11, 12); }
    // окно с тюлем и батареей
    { const w = window3D(R, -4, { wall: 'n', y: 3, w: 2, h: 2.4, night: true, curtains: false }); void w; 
      fbox(R, -4, 0.5, -4.85, 1.8, 0.8, 0.12, T('radiator', 24, 10, (c) => { r_(c, 0, 0, 24, 10, '#e8e4dc'); for (let x = 1; x < 24; x += 3) r_(c, x, 0, 1, 10, '#b8b0a8'); }), lam({ color: 0xe8e4dc }));
      R.sprite(spr('plant'), -4.6, -4.6, { y: 1.78, scale: 0.9, thin: true }); R.sprite(spr('plant'), -3.4, -4.6, { y: 1.78, scale: 0.8, thin: true, flipX: true }); }
    // мамино рабочее место визажиста: гримёрное зеркало с лампочками
    vanity(R, 1.2, -4.3, { w: 3, clutter: 7, photos: 3 });
    R.sprite(spr('brushes'), 0.2, -4.15, { y: 1.15, scale: 1 }); R.sprite(spr('palette'), 2.2, -3.95, { y: 1.15, scale: 1, thin: true }); R.sprite(spr('wig'), 2.6, -4.3, { y: 1.15, scale: 1.1 });
    for (const [x, y] of [[-0.9, 3.6], [-0.9, 2.3], [3.3, 3.6], [3.3, 2.3]]) R.decal(spr('facechart'), { x, y, w: 0.8, h: 1, z: -4.97, noSlot: true });
    R.sprite(spr('ringlight'), 3.6, -3.4, { scale: 1.1 }); R.light(3.6, 2.6, -2.8, 0xfff0e0, 3, 4);
    R.sprite(spr('mcase'), -0.6, -3.2, { scale: 1.1 }); R.sprite(PROPTEX.stool(), 1.2, -3.1, { scale: 1.2 });
    R.inter('makeup', 1.2, -2.6, { label: f.ang_mirror ? 'Мамин кейс' : 'Мамин кейс визажиста', fn: async (G) => { if (G.state.mask === 'drama' && !f.ang_mem) return memoryReplay(G); if (f.ang_mirror) return G.run(['~: Кисти разложены по размеру, как инструменты хирурга. Мама говорит, что лицо, это самая честная сцена.']); await mirrorScene(G); f.ang_mirror = 1; maskHint(G, 'ang_dr', 'Мамин кейс помнит больше. Маска Драмы (3) покажет, как было на самом деле'); } });
    // кухонный гарнитур: тумбы, мойка, плита, навесные шкафы, кафель
    { const wood = lam({ color: 0xe8dcc8 }), top = lam({ map: T('ctop', 16, 16, (c) => { r_(c, 0, 0, 16, 16, '#a8a098'); noise(c, 16, 16, 0.1, 9); }) });
      const door = T('cab', 16, 16, (c) => { r_(c, 0, 0, 16, 16, '#e8dcc8'); c.strokeStyle = '#b8a890'; c.strokeRect(1.5, 1.5, 13, 13); r_(c, 12, 6, 1, 4, '#8a8a90'); r_(c, 0, 0, 1, 16, '#c8bca8'); });
      plane(R, 4.8, 1.6, lam({ map: rep(T('tiles', 16, 16, (c) => { r_(c, 0, 0, 16, 16, '#9a9a9a'); for (let j = 0; j < 2; j++) for (let i = 0; i < 2; i++) { r_(c, i * 8, j * 8, 7, 7, (i + j) % 2 ? '#e8eef4' : '#c8d8e8'); r_(c, i * 8 + 1, j * 8 + 1, 2, 1, '#ffffff'); } }), 9.6, 3.2) }), 5.4, 1.85, -4.97);
      for (const x of [3.6, 4.8, 7.2]) fbox(R, x, 0, -4.45, 1.18, 1.0, 0.9, door, wood, { solid: true, top });
      fbox(R, 6.0, 0, -4.45, 1.18, 1.0, 0.9, T('oven', 16, 16, (c) => { r_(c, 0, 0, 16, 16, '#f0f0f0'); r_(c, 2, 5, 12, 9, '#2a2a30'); r_(c, 3, 6, 10, 2, '#5a5a68'); r_(c, 2, 4, 12, 1, '#888'); for (let i = 0; i < 4; i++) r_(c, 2 + i * 3.5, 1, 2, 2, '#333'); }), lam({ color: 0xf0f0f0 }), { solid: true, top: lam({ map: T('hob', 16, 16, (c) => { r_(c, 0, 0, 16, 16, '#e8e8e8'); for (const [x, y] of [[4, 4], [12, 4], [4, 12], [12, 12]]) { c.fillStyle = '#2a2a2e'; c.beginPath(); c.arc(x, y, 3, 0, 7); c.fill(); r_(c, x - 1, y - 1, 2, 2, '#5a6ab0'); } }) }) });
      fbox(R, 4.8, 1.0, -4.45, 0.7, 0.04, 0.5, null, lam({ color: 0x8a8a98 })); { const tap = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.03, 4, 8, Math.PI), lam({ color: 0xc8c8d0 })); tap.position.set(4.8, 1.3, -4.75); R.room.group.add(tap); }
      for (const x of [3.6, 4.8, 6.0, 7.2]) fbox(R, x, 2.75, -4.7, 1.18, 1.1, 0.55, door, wood);
      R.sprite(spr('kettle'), 6.0, -4.4, { y: 1.0, scale: 1.1 }); R.sprite(spr('pot'), 6.4, -4.2, { y: 1.0, scale: 1 }); R.sprite(spr('cups'), 3.6, -4.3, { y: 1.0, scale: 1 }); }
    // холодильник с магнитами и листовкой
    { const fr = fbox(R, -6.8, 0, -4.2, 1.2, 2.4, 1.1, T('fridge', 16, 32, (c) => { r_(c, 0, 0, 16, 32, '#ecece6'); r_(c, 0, 10, 16, 1, '#b8b8b0'); r_(c, 13, 3, 1, 5, '#8a8a90'); r_(c, 13, 13, 1, 8, '#8a8a90'); r_(c, 4, 6, 7, 2, '#c8c8c0'); for (const [x, y, col] of [[2, 14, '#e84a4a'], [9, 24, '#4a8ae8'], [3, 26, '#f2c230'], [10, 15, '#6ac06a']] as [number, number, string][]) r_(c, x, y, 2, 2, col); r_(c, 1, 0, 1, 32, '#ffffff'); }), lam({ color: 0xe0e0da }), { solid: true }); void fr;
      R.decal(T('flyer', 10, 12, (c) => { r_(c, 0, 0, 10, 12, '#fff0f8'); r_(c, 0, 0, 10, 3, '#ff4fa0'); r_(c, 1, 5, 8, 1, '#333'); r_(c, 1, 7, 6, 1, '#333'); }), { x: -6.8, y: 1.3, z: -3.63, w: 0.6, h: 0.75, noSlot: true }); R.look('flyer', -6.8, -3.2, 'Листовка на холодильнике', A.homeFlyer); }
    // старый телевизор на тумбе
    fbox(R, -2.0, 0, -4.4, 2.0, 0.8, 0.6, T('tvstand', 24, 10, (c) => { r_(c, 0, 0, 24, 10, '#5a3a24'); r_(c, 1, 1, 10, 8, '#6a4a30'); r_(c, 13, 1, 10, 8, '#6a4a30'); r_(c, 10, 4, 1, 2, '#c8a050'); r_(c, 13, 4, 1, 2, '#c8a050'); }), lam({ map: tex('darkwood') }), { solid: true });
    fbox(R, -2.0, 0.8, -4.45, 1.5, 1.2, 1.0, T('crt', 24, 20, (c) => { r_(c, 0, 0, 24, 20, '#2a2a2e'); r_(c, 2, 2, 17, 14, '#111'); r_(c, 20, 3, 3, 2, '#666'); r_(c, 20, 7, 3, 2, '#666'); r_(c, 21, 16, 1, 1, '#f04040'); }), lam({ color: 0x2a2a2e }));
    R.decal(screenTex(), { x: -2.17, y: 1.53, z: -3.94, w: 1.04, h: 0.82, glow: true, noSlot: true }); R.look('tv', -2.2, -3.2, 'Телевизор', A.homeTV);
    { const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.9, 3), lam({ color: 0x888888 })); ant.position.set(-1.8, 2.4, -4.5); ant.rotation.z = 0.5; R.room.group.add(ant); }
    // ковёр на стене над диваном (честная деталь спального района)
    R.decal(T('wallrug', 48, 32, (c) => { r_(c, 0, 0, 48, 32, '#8a1a24'); c.strokeStyle = '#e8c070'; c.strokeRect(2.5, 2.5, 43, 27); r_(c, 5, 5, 38, 22, '#6a1018'); for (let i = 0; i < 5; i++) { c.strokeStyle = i % 2 ? '#e8c070' : '#2a4a6a'; c.beginPath(); c.moveTo(24, 6 + i * 2); c.lineTo(41 - i * 3, 16); c.lineTo(24, 26 - i * 2); c.lineTo(7 + i * 3, 16); c.closePath(); c.stroke(); } for (let x = 0; x < 48; x += 3) { r_(c, x, 0, 1, 1, '#e8c070'); r_(c, x, 31, 1, 1, '#e8c070'); } noise(c, 48, 32, 0.08, 4); }), { wall: 'w', at: 0.8, y: 2.8, w: 3.6, h: 2.4 });
    sofa(R, -7.0, 0.8, { w: 2.6, col: 0x8a7058, ry: Math.PI / 2 });
    plane(R, 1.0, 1.4, lam({ map: T('blanket', 12, 16, (c) => { for (let j = 0; j < 4; j++) for (let i = 0; i < 3; i++) r_(c, i * 4, j * 4, 4, 4, ['#e8a040', '#6a9ad0', '#e84a6f', '#8ac060', '#f4e8d0'][(i + j * 2) % 5]); c.strokeStyle = '#fff'; for (let i = 0; i < 12; i += 2) r_(c, i, 0, 1, 1, '#fff'); }), side: THREE.DoubleSide }), -6.75, 0.8, 1.4, -1.2, Math.PI / 2);
    // стол с клеёнкой, чайник, табуретки
    R.table(-3.6, 1.2, 1.8, 1.1, { tex: 'wood' }); plane(R, 1.9, 1.2, lam({ map: rep(T('oilcloth', 8, 8, (c) => { for (let j = 0; j < 2; j++) for (let i = 0; i < 2; i++) r_(c, i * 4, j * 4, 4, 4, (i + j) % 2 ? '#f4f0e8' : '#d86060'); }), 4, 3) }), -3.6, 1.16, 1.2, -Math.PI / 2);
    R.sprite(spr('teapot'), -3.9, 1.1, { y: 1.16, scale: 1 }); R.sprite(spr('cups'), -3.1, 1.3, { y: 1.16, scale: 1 }); R.sprite(PROPTEX.stool(), -4.8, 1.9, { scale: 1.1 }); R.sprite(PROPTEX.stool(), -2.4, 2.0, { scale: 1.1 });
    R.sprite(spr('laundry'), -6.4, -2.4, { scale: 1.3, solid: 0.6 }); R.sprite(spr('shoes'), 7.2, 2.8, { scale: 1.1, thin: true });
    R.decal(T('calendar', 12, 16, (c) => { r_(c, 0, 0, 12, 16, '#fff'); r_(c, 0, 0, 12, 6, '#4a8ac8'); for (let j = 0; j < 4; j++) for (let i = 0; i < 4; i++) r_(c, 1 + i * 3, 7 + j * 2, 2, 1, '#888'); r_(c, 7, 9, 2, 1, '#e04040'); }), { x: -5.5, y: 3.4, z: -4.97, w: 0.6, h: 0.8, noSlot: true });
    R.decal(T('clock', 12, 12, (c) => { c.fillStyle = '#f4f0e8'; c.beginPath(); c.arc(6, 6, 5.5, 0, 7); c.fill(); c.strokeStyle = '#3a2a1a'; c.stroke(); r_(c, 6, 2, 1, 4, '#111'); r_(c, 6, 6, 3, 1, '#111'); }), { x: 2.4, y: 4.5, z: -4.97, w: 0.6, h: 0.6, noSlot: true });
    R.decal(T('hooks', 24, 24, (c) => { r_(c, 0, 2, 24, 2, '#5a3a24'); for (const [x, col] of [[2, '#3a3a48'], [9, '#c86a3a'], [16, '#e888b8']] as [number, string][]) { r_(c, x + 2, 4, 1, 2, '#888'); r_(c, x, 6, 6, 16, col); r_(c, x, 6, 6, 1, 'rgba(255,255,255,.3)'); } }), { wall: 'e', at: -2.6, y: 2.4, w: 1.6, h: 1.6 });
    if (f.ang_photo && !f.ang_double) R.sprite(spr('wig'), 1.2, 1.0, { y: 0.7, scale: 1.1, thin: true });
    R.npc('ang_mom', 2.7, -2.9, { dir: 'l', talk: (G: any) => G.run(f.ang_double ? ['ang_mom/smile: Песню допиши. Я хочу её услышать живьём. Не в записи.'] : ['ang_mom: Кисть номер четыре для теней, номер семь для румян. А для голоса, Анжик, кисти не нужны.']) });
    R.npc(f.ang_photo && !f.ang_double ? 'angelina_idol' : 'angelina', -0.8, 0.4, { id: 'angelina', dir: 'r', talk: async (G: any) => { if (f.ang_photo && !f.ang_double) return doubleLife(G); if (!f.ang_home0) return; await G.run(A.homeGo); } });
    R.door('agency', 0, { wall: 'e', label: 'В агентство «GLOSS»', col: '#5a4a6a', sign: 'GLOSS', fn: (G) => G.goto('ang_lobby', 'home', { fade: 'mirror' }) });
    R.spawn('start', 6.6, 1.4, 'l'); R.spawn('lobby', 6.6, 0, 'l');
  },
  async enter(G) { if (!G.f.ang_home0) { G.f.ang_home0 = 1; await G.run(A.home0); } else if (G.f.ang_photo && !G.f.ang_double) await doubleLife(G); },
};
/** Мама красит Ангелину: на «Это ты, я только подсветила» кухня теплеет, на «Это не я» тепло уходит. */
async function mirrorScene(G: any) {
  const p0 = G.cam.pitch, y0 = G.cam.yOff; void camMove(G, { x: 0.4, z: -0.6, dist: 9, pitch: 0.42, yOff: 1.8 }, 1.4); await G.run(A.homeMirror.slice(0, 3));
  await G.wait(0.6); void warmOn(G, { int: 16, dur: 1.8, music: 'musicbox' }); void camMove(G, { dist: 7.6 }, 4); await G.run(A.homeMirror.slice(3, 4));
  await warmOff(G, 1.0); await G.run(A.homeMirror.slice(4)); await camBack(G, p0, y0);
}
/** Драма у маминого кейса: воспоминание, как было на самом деле (тёплое, как старая плёнка). */
async function memoryReplay(G: any) {
  G.f.ang_mem = 1; const p0 = G.cam.pitch, y0 = G.cam.yOff; G.sfx('mask'); G.flash(0.5); await camMove(G, { x: 1.2, z: -1.8, dist: 7.4, pitch: 0.36, yOff: 1.6 }, 1.0);
  void warmOn(G, { grade: { sat: 0.7, tint: [1.2, 1.02, 0.8], vig: 0.7, bloom: 1.0 }, int: 18, dur: 1.2, music: 'musicbox' }); await G.run(A.memoryDr); G.flash(0.3); await warmOff(G); await camBack(G, p0, y0);
  G.toast('Воспоминание сохранено: оно прозвучит на сцене', '◐');
}
async function doubleLife(G: any) {
  const f = G.f; if (f.ang_double) return; await G.run(A.double0); await G.run(A.doubleChange);
  const r = await timing({ title: 'Быстрое переодевание', sub: 'Сорвать парик, пока Лусинэ поднимается по лестнице', zone: 0.24, speed: 1.2 });
  const B = new (await import('../world/room')).Builder(G.room, G); const lu = B.actor('lusine', 7, 0.6, { id: 'lusine', dir: 'l' }); G.actor('angelina')?.setChar(r === 'miss' ? 'angelina_idol' : 'angelina');
  await lu.walkTo(2, 0.8, 3); await G.run(r === 'miss' ? A.doubleMiss : A.doubleOk); await lu.walkTo(7, 0.6, 3); lu.hidden = true;
  const an = G.actor('angelina'); void camMove(G, { x: 1, z: -1, dist: 11, pitch: 0.44, yOff: 1.7 }, 1.4); await G.run(A.doubleAfter.slice(0, 4));
  G.audio.music(null, { fade: 2 }); await G.wait(1.2); // мама ушла: тишина, холодный свет, Ангелина одна в кадре
  G.grade({ tint: [0.86, 0.92, 1.12], sat: 0.6, vig: 0.8, bright: 0.85 }); void camMove(G, { x: an?.x ?? -0.8, z: (an?.z ?? 0.4) + 0.4, dist: 7.2, pitch: 0.32, yOff: 1.6 }, 3);
  await G.run(A.doubleAfter.slice(4)); await camBack(G); f.ang_double = 1; await G.rebuild();
}
/** Кастинг: крупный план, тишина перед первой нотой, вспышка и тёплый свет на «Меня взяли!». */
async function castingScene(G: any) {
  void camMove(G, { x: 1.4, z: 0, dist: 15, pitch: 0.48, yOff: 1.6 }, 2); await G.run(A.arrive.slice(0, 5));
  const mus = G.audio.cur?.id ?? null; G.audio.music(null, { fade: 1 }); await camMove(G, { x: -1.2, z: 1.4, dist: 7.4, pitch: 0.3, yOff: 1.9 }, 1.4); await G.wait(1.1);
  G.sfx('note'); await G.run(A.arrive.slice(5, 6)); await G.wait(0.8); G.audio.music(mus, { fade: 2 }); void camMove(G, { x: 1.4, z: 0, dist: 12, pitch: 0.42, yOff: 1.7 }, 2.5); await G.run(A.arrive.slice(6, 8));
  G.flash(0.35); void warmOn(G, { int: 18, dur: 1.4 }); await G.run(A.arrive.slice(8)); await warmOff(G); await camBack(G);
}
// ---------------- агентство ----------------
const glossWall = (accent = '#ff4fa0') => wallCol('gloss' + accent, (c, Y) => { r_(c, 0, 0, 32, 256, '#2a2030'); const y0 = Y(6.2), y1 = Y(0.25);
  r_(c, 0, y0, 32, y1 - y0, '#f2eef2'); r_(c, 0, y0, 1, y1 - y0, '#d8d0dc'); r_(c, 16, y0, 1, y1 - y0, '#e0d8e4'); const g = c.createLinearGradient(0, y0, 0, y1); g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(1, 'rgba(200,180,210,.35)'); c.fillStyle = g; c.fillRect(0, y0, 32, y1 - y0);
  r_(c, 0, Y(1.1), 32, 2, accent); r_(c, 0, y0 - 4, 32, 4, '#c8c0cc'); r_(c, 0, y1, 32, 256 - y1, '#3a3040'); r_(c, 0, y1, 32, 1, '#6a6070'); for (let x = 2; x < 32; x += 16) r_(c, x, Y(5.9), 6, 1, '#fff8e0'); });
const marble = () => T('marble', 32, 32, (c) => { r_(c, 0, 0, 32, 32, '#e8e2e8'); c.strokeStyle = 'rgba(160,140,170,.45)'; c.beginPath(); c.moveTo(0, 6); c.quadraticCurveTo(12, 14, 32, 4); c.moveTo(4, 32); c.quadraticCurveTo(16, 20, 28, 30); c.stroke(); r_(c, 0, 0, 32, 1, '#b8b0c0'); r_(c, 0, 0, 1, 32, '#b8b0c0'); r_(c, 18, 20, 8, 2, 'rgba(255,255,255,.6)'); noise(c, 32, 32, 0.05, 5); });
const lobby: RoomDef = {
  name: 'Агентство «GLOSS»', chapter: 'Акт II · Ангелина', w: 30, d: 12, music: 'idol_agency', amb: null, step: 'stone', grade: { ...GLOSS, bloom: 0.28, bright: 0.93, contrast: 1.06 },
  build(R, G) {
    const f = G.f; shell(R, { wall: glossWall(), floor: marble(), bg: 0x100810 }); warmRig(R, -1.2, 0.4, { count: 60, pcol: 0xffd0b0 }); R.ambient(0x7a6a80, 1.0, 0xe8d8e8); R.particles('dust', { count: 30, top: 6, color: 0xffc0e0 });
    R.light(-8, 5, -1, 0xfff4f0, 7, 14); R.light(6, 5, -1, 0xfff4f0, 7, 14);
    // ресепшен на фоне тёмной акцентной стены с неоном
    plane(R, 8.4, 6.2, lam({ map: rep(T('slats2', 16, 32, (c) => { r_(c, 0, 0, 16, 32, '#4a2e3e'); for (let x = 0; x < 16; x += 4) { r_(c, x, 0, 3, 32, '#7a5260'); r_(c, x, 0, 1, 32, '#a07888'); r_(c, x + 2, 0, 1, 32, '#5a3a4a'); } noise(c, 16, 32, 0.06, 41); }), 8.4, 1) }), -1.6, 3.1, -5.95);
    for (const sx of [-5.9, 2.7]) R.box(sx, -5.9, 0.08, 0.08, 6.2, { color: 0xff8ac8, emissive: 0xff4fa0, solid: false, cast: false }); R.box(-1.6, -5.9, 8.4, 0.08, 0.08, { color: 0xff8ac8, emissive: 0xff4fa0, y: 6.1, solid: false, cast: false });
    for (const x of [6.8]) R.decal(T('idolposter', 20, 28, (c) => { r_(c, 0, 0, 20, 28, '#2a0a3a'); const g = c.createLinearGradient(0, 0, 0, 28); g.addColorStop(0, '#ff6ab8'); g.addColorStop(1, '#3a0a5a'); c.fillStyle = g; c.fillRect(1, 1, 18, 20); r_(c, 7, 4, 6, 7, '#ffd8e8'); r_(c, 6, 3, 8, 3, '#1a1a2a'); r_(c, 5, 11, 10, 10, '#f4f4f8'); ptext(c, 'STARLIT', 10, 22, { size: 4, col: '#fff', align: 'center' }); }), { x, y: 2.8, w: 1.4, h: 2, z: -5.97, noSlot: true });
    { const white = lam({ color: 0xf4f0f4 }); fbox(R, -1.6, 0, -4.2, 5, 1.2, 1.1, T('recep', 64, 16, (c) => { r_(c, 0, 0, 64, 16, '#f4f0f4'); r_(c, 0, 12, 64, 4, '#ff4fa0'); ptext(c, 'GLOSS', 32, 2, { size: 9, col: '#c02878', align: 'center' }); r_(c, 0, 0, 64, 1, '#d8d0dc'); }), white, { solid: true, top: lam({ color: 0xe0d8e8 }) });
      R.sprite(spr('laptop'), -2.6, -4.2, { y: 1.2, scale: 1 }); R.sprite(T('bouq', 12, 16, (c) => { r_(c, 4, 8, 4, 8, 'rgba(200,230,255,.8)'); for (let i = 0; i < 7; i++) r_(c, 1 + (i * 3) % 10, (i * 2) % 8, 3, 3, ['#ff9ad8', '#fff', '#ffc8e8'][i % 3]); }), -0.2, -4.2, { y: 1.2, scale: 1 });
      R.decal(T('neon2', 96, 20, (c) => { c.clearRect(0, 0, 96, 20); ptext(c, 'GLOSS ENTERTAINMENT', 48, 5, { size: 8, col: '#ff8ac8', align: 'center' }); r_(c, 4, 17, 88, 1, '#ff4fa0'); }), { x: -1.6, y: 4.7, w: 6.4, h: 1.35, glow: true, z: -5.97, noSlot: true }); R.light(-1.6, 4.4, -4.6, 0xff6ab8, 4, 6); }
    // стена наград
    for (let i = 0; i < 6; i++) R.decal(spr(i % 3 === 2 ? 'facechart' : 'goldrec'), { x: -10.2 + (i % 3) * 1.25, y: 3.0 + Math.floor(i / 3) * 1.4, w: 0.9, h: 1.1, z: -5.97, noSlot: true });
    fbox(R, -9, 0, -5.55, 3.4, 0.9, 0.8, T('cab', 32, 8, (c) => { r_(c, 0, 0, 32, 8, '#f4f0f4'); r_(c, 0, 0, 32, 1, '#d4ae48'); for (let x = 4; x < 32; x += 8) r_(c, x, 3, 1, 2, '#b8b0c0'); }), lam({ color: 0xf4f0f4 }), { solid: true });
    for (let i = 0; i < 4; i++) R.sprite(spr('trophy'), -10.3 + i * 0.85, -5.5, { y: 0.9, scale: 1 + (i % 2) * 0.2 });
    // концепт на стене
    R.inter('concept', -5.2, -4.6, { label: 'Концепт дебюта на стене', fn: async (G) => { await G.ui.paper(A.concept); if (!f.ang_concept) { f.ang_concept = 1; await G.run(A.conceptAfter); }
      if (G.state.mask === 'tragedy' && !f.ang_ctr) { f.ang_ctr = 1; const p0 = G.cam.pitch, y0 = G.cam.yOff; G.sfx('mask'); await camMove(G, { x: -5.2, z: -3.8, dist: 7.4, pitch: 0.34, yOff: 2.4 }, 0.9); await G.wait(0.5); G.sfx('heart'); await G.run(A.conceptTr); G.toast('Пункт 14 найден. Ангелина узнает о нём на сцене', '◐'); await camBack(G, p0, y0); }
      else if (!G.state.mask) maskHint(G, 'ang_tr', 'На концепте что-то приколото под листом. Маска Трагедии (2) видит спрятанное'); } });
    R.decal(T('cposter', 24, 32, (c) => { r_(c, 0, 0, 24, 32, '#fff0f8'); r_(c, 2, 2, 20, 14, '#ff9ad8'); r_(c, 8, 4, 8, 10, '#ffc8e8'); r_(c, 10, 8, 1, 1, '#111'); r_(c, 13, 8, 1, 1, '#111'); ptext(c, 'КОНЦЕПТ', 12, 18, { size: 5, col: '#a03060', align: 'center' }); for (let i = 0; i < 3; i++) r_(c, 3, 26 + i * 2, 18 - i * 4, 1, '#c8a0b8'); }), { x: -5.2, y: 2.4, w: 1.5, h: 2, z: -5.97, noSlot: true });
    // экраны на боковых стенах, step-and-repeat у фотозоны
    R.decal(screenTex(), { wall: 'w', at: -3.2, y: 3.6, w: 3.6, h: 2.2, glow: true }); R.decal(screenTex(), { wall: 'e', at: -3, y: 3.8, w: 3.6, h: 2.2, glow: true });
    R.decal(T('steprep2', 112, 84, (c) => { r_(c, 0, 0, 112, 84, '#fff4fa'); r_(c, 0, 0, 112, 2, '#c02878'); r_(c, 0, 82, 112, 2, '#c02878'); for (let j = 0; j < 4; j++) for (let i = 0; i < 2; i++) ptext(c, j % 2 ? 'ANGEL' : 'GLOSS', 30 + i * 52 + (j % 2) * 8 - 4, 6 + j * 19, { size: 14, col: j % 2 ? '#e8307a' : '#6a2a8a', align: 'center' }); }), { wall: 'e', at: 2.4, y: 2.4, w: 4, h: 3 });
    // зона ожидания: диваны, столик с журналами, пальмы, торшер, кулер
    sofa(R, -10.6, 0.4, { w: 2.8, col: 0xf0c8dc }); sofa(R, -13.6, 2.6, { w: 2.4, col: 0xf0c8dc, ry: Math.PI / 2 });
    fbox(R, -10.6, 0, 2.2, 1.8, 0.45, 0.9, null, lam({ color: 0xf4f0f4 }), { solid: true }); R.sprite(spr('magazines'), -10.8, 2.2, { y: 0.45, scale: 1.1, thin: true });
    palm(R, -13.8, -4.6); palm(R, 13.6, -4.6); R.sprite(spr('floorlamp'), -12.6, -0.8, { scale: 1.1 }); R.sprite(spr('cooler'), 11.8, -4.9, { scale: 1.1, solid: 0.3 });
    R.sprite('plant', 14.2, 3.4, { scale: 1.3, solid: 0.3 }); R.sprite('plant', 2.6, -5.3, { scale: 1.2 });
    { const posts = lam({ map: tex('gold') }); for (const x of [8.6, 10.6, 12.6]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1, 8), posts); p.position.set(x, 0.5, 1.2); R.room.group.add(p); } const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 4, 6), lam({ color: 0xc02060 })); rope.rotation.z = Math.PI / 2; rope.position.set(10.6, 0.85, 1.2); R.room.group.add(rope); }
    R.npc('glyants', 4, -1, { talk: ['glyants: Мы не продаём музыку, стажёр. Мы продаём ощущение, что музыка тебя любит. Это разные бизнесы.'] });
    R.npc('stylist', 6.4, 1, { talk: async (G: any) => { if (G.state.mask === 'comedy' && !f.ang_sty_c) { f.ang_sty_c = 1; const p0 = G.cam.pitch, y0 = G.cam.yOff; G.sfx('laugh', { n: 4, f: 420, vol: 0.3 }); await camMove(G, { x: 6.4, z: 1.8, dist: 8, pitch: 0.38, yOff: 1.9 }, 0.9); await G.run(A.stylistC); await camBack(G, p0, y0); return; } if (f.ang_photo && !f.ang_sty_c) maskHint(G, 'ang_c', 'Ассистентка явно что-то знает. Маска Комедии (1) развязывает язык'); if (!f.ang_assist && f.ang_photo) { f.ang_assist = 1; return G.run(A.assist); } await G.run(['stylist/smirk: Не стой столбом, дорогуша. Столбы у нас тоже по контракту.']); } });
    R.npc(angelChar(G), -1.2, 1, { id: 'angelina', talk: (G: any) => G.run(f.ang_mix ? ['angelina: Дебют. Сцена за последней дверью. Пульт будет справа.'] : ['angelina: Тренировка, запись, фото. Делаем всё честно, чтобы потом никто не сказал, что я не старалась.']) });
    const left = () => [!f.ang_dance && 'танец в зале тренировок', !f.ang_vocal && 'запись в вокальной будке', !f.ang_photo && 'съёмка в фотостудии', !f.ang_mix && 'сведение демо в студии звукозаписи', f.ang_photo && !f.ang_double && 'заехать домой, к маме'].filter(Boolean).join(', ');
    const D = [['ang_practice', -12.6, 'Зал тренировок', 'DANCE', () => true, ''], ['ang_photo', 9.6, 'Фотостудия', 'PHOTO', () => true, ''], ['ang_record', 13, 'Студия звукозаписи', 'REC', () => true, ''], ['ang_stage', 4, 'Сцена шоукейса', 'DEBUT', () => !!(f.ang_dance && f.ang_vocal && f.ang_photo && f.ang_mix && f.ang_double), 'До шоукейса осталось: ']] as const;
    for (const [to, x, label, sg, cond, lk] of D) R.door(to, x, { label, z: -5.96, col: '#f0e8f0', sign: sg, cond, locked: [() => ['~: ' + lk + left() + '.']] as any, fn: (G) => G.goto(to, 'start', { fade: 'mirror' }) });
    R.door('home', 0, { wall: 'w', label: 'Домой, в Северный район', col: '#5a4a6a', fn: (G) => G.goto('ang_home', 'lobby', { fade: 'mirror' }) });
    R.spawn('start', 0, 3.6, 'b'); R.spawn('home', -13.4, 0, 'r'); for (const [to, x] of D) R.spawn(to, x, -4.4);
  },
  async enter(G, from) { if (!G.f.ang_aud) { G.f.ang_aud = 1; await castingScene(G); } const sp = G.room.spawns[from]; if (sp) { G.player.place(sp.x, sp.z, 'f'); G.camSnap(); } },
};
// ---------------- стеклянная будка (зал тренировок и студия) ----------------
function booth(R: Builder, x: number, z: number, w: number, d: number) {
  const frame = lam({ color: 0x2a2a30 }), h = 3.4; const g = new THREE.Group();
  const foam = T('foam', 16, 16, (c) => { for (let j = 0; j < 4; j++) for (let i = 0; i < 4; i++) { const v = (i + j) % 2; r_(c, i * 4, j * 4, 4, 4, '#3a3048'); for (let k = 0; k < 4; k++) r_(c, i * 4 + (v ? k : 0), j * 4 + (v ? 0 : k), v ? 1 : 4, v ? 4 : 1, k % 2 ? '#4a3e5a' : '#2a2238'); } });
  const back = new THREE.Mesh(new THREE.PlaneGeometry(w, h), lam({ map: rep(foam, w, h) })); back.position.set(0, h / 2, -d / 2 + 0.02); g.add(back);
  for (const s of [-1, 1]) { const sd = new THREE.Mesh(new THREE.PlaneGeometry(d, h), lam({ map: rep(foam, d, h), side: THREE.DoubleSide })); sd.position.set(s * w / 2, h / 2, 0); sd.rotation.y = Math.PI / 2; g.add(sd); }
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(w, h - 0.6), new THREE.MeshLambertMaterial({ color: 0xa8d0e8, transparent: true, opacity: 0.22, emissive: 0x203040, depthWrite: false })); glass.position.set(0, h / 2 + 0.2, d / 2); g.add(glass);
  for (const [bw, bh, bx, by] of [[w + 0.1, 0.12, 0, h], [w + 0.1, 0.5, 0, 0.25], [0.12, h, -w / 2, h / 2], [0.12, h, w / 2, h / 2], [0.08, h, 0, h / 2]]) { const b = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, 0.14), frame); b.position.set(bx, by, d / 2); b.castShadow = true; g.add(b); }
  const roof = new THREE.Mesh(new THREE.BoxGeometry(w + 0.2, 0.15, d + 0.2), frame); roof.position.y = h + 0.07; g.add(roof);
  const onair = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.36), new THREE.MeshBasicMaterial({ map: T('onair', 24, 8, (c) => { r_(c, 0, 0, 24, 8, '#3a0808'); r_(c, 1, 1, 22, 6, '#e82030'); ptext(c, 'ON AIR', 12, 0, { size: 6, col: '#fff', align: 'center' }); }) })); onair.position.set(0, h + 0.4, d / 2); g.add(onair);
  // микрофон со стойкой и поп-фильтром
  const metal = lam({ color: 0x3a3a40 }); const st = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.6, 6), metal); st.position.set(0, 0.8, 0); g.add(st); const base = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.04, 10), metal); base.position.y = 0.02; g.add(base);
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.6, 6), metal); arm.rotation.x = Math.PI / 2; arm.position.set(0, 1.6, 0.3); g.add(arm);
  const mic = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.32, 10), lam({ color: 0xc8c8d0, emissive: 0x202020 })); mic.position.set(0, 1.6, 0.62); g.add(mic);
  const pop = new THREE.Mesh(new THREE.CircleGeometry(0.17, 14), new THREE.MeshLambertMaterial({ map: T('pop', 8, 8, (c) => { for (let y = 0; y < 8; y++) for (let xx = 0; xx < 8; xx++) r_(c, xx, y, 1, 1, (xx + y) % 2 ? '#1a1a1e' : '#4a4a50'); }), transparent: true, opacity: 0.75, side: THREE.DoubleSide })); pop.position.set(0, 1.62, 0.95); g.add(pop);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.015, 4, 14), metal); ring.position.copy(pop.position); g.add(ring);
  const stand = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.35, 0.03), lam({ color: 0x1a1a1e })); stand.position.set(0.7, 1.3, 0.4); stand.rotation.x = -0.4; g.add(stand);
  g.position.set(x, 0, z); R.room.group.add(g); R.light(x, h - 0.4, z, 0xffe0c0, 3, 4); R.collider(x - w / 2, z - d / 2, x + w / 2, z + d / 2); return g;
}
// ---------------- зал тренировок ----------------
const maple = () => T('maple', 32, 32, (c) => { for (let r = 0; r < 8; r++) { let x = -(r * 7) % 16; while (x < 32) { const w = 10 + ((x * 7 + r * 13) % 9); r_(c, x, r * 4, w, 4, ['#e0b880', '#d8ac70', '#e8c490'][(r + x) % 3]); r_(c, x, r * 4, 1, 4, '#b08850'); x += w; } r_(c, 0, r * 4 + 3, 32, 1, 'rgba(140,100,50,.4)'); } r_(c, 4, 12, 18, 2, 'rgba(255,255,255,.25)'); noise(c, 32, 32, 0.04, 7); });
const practice: RoomDef = {
  name: 'Зал тренировок', w: 22, d: 10, music: 'idol_agency', amb: null, step: 'wood', grade: { ...GLOSS, bloom: 0.25, bright: 0.92, contrast: 1.06 },
  build(R, G) {
    const f = G.f; const wall = wallCol('dance2', (c, Y) => { r_(c, 0, 0, 32, 256, '#6a5a78'); for (let y = 0; y < Y(6.4); y += 16) { r_(c, 0, y, 32, 1, '#5a4a68'); r_(c, 15, y, 1, 16, '#5a4a68'); } r_(c, 0, Y(6.9), 32, 6, '#4a3a58'); r_(c, 0, Y(6.9), 32, 1, '#8a7a98'); r_(c, 0, Y(6.4), 32, Y(0.2) - Y(6.4), '#d8c8e8'); r_(c, 0, Y(6.4), 32, 3, '#b8a8c8'); r_(c, 0, Y(0.2), 32, 256 - Y(0.2), '#5a4a6a'); });
    shell(R, { wall, floor: maple(), bg: 0x100810 }); R.ambient(0x8a7a90, 1.3, 0xe8dce8); R.light(-4, 5.2, 0, 0xfff4e8, 7, 14); R.light(5, 5.2, 0, 0xfff4e8, 6, 14);
    // зеркальная стена: панели в алюминиевых рамах (без двери и будки)
    const mt = T('mirror2', 32, 48, (c) => { const g = c.createLinearGradient(0, 0, 32, 48); g.addColorStop(0, '#d8e4ee'); g.addColorStop(0.45, '#9aaabb'); g.addColorStop(1, '#c8d4e0'); c.fillStyle = g; c.fillRect(0, 0, 32, 48); c.fillStyle = 'rgba(255,255,255,.55)'; for (let k = 0; k < 2; k++) { c.beginPath(); c.moveTo(4 + k * 10, 48); c.lineTo(10 + k * 10, 48); c.lineTo(22 + k * 10, 0); c.lineTo(16 + k * 10, 0); c.fill(); } c.fillStyle = 'rgba(200,160,220,.25)'; c.fillRect(0, 34, 32, 14); });
    const mm = new THREE.MeshLambertMaterial({ map: mt, emissive: 0x404858, emissiveMap: mt }); const alu = lam({ map: tex('metal'), color: 0xd8d8e0 });
    for (let x = -10.4; x < 10.4; x += 2.1) { const cx = x + 1.05; if (cx > -9.8 && cx < -6.2) continue; plane(R, 2.0, 3.6, mm, cx, 2.15, -4.97); const fr = new THREE.Mesh(new THREE.BoxGeometry(0.1, 3.8, 0.08), alu); fr.position.set(x, 2.15, -4.95); R.room.group.add(fr); }
    for (const y of [0.3, 4.0]) { R.box(-8.3 - 3.8, -4.93, 4.6, 0.08, 0.1, { tex: 'metal', y, solid: false, cast: false }); R.box(3.2, -4.93, 14.6, 0.08, 0.1, { tex: 'metal', y, solid: false, cast: false }); }
    // станок
    { const bar = lam({ map: tex('wood') }); for (const [x0, x1] of [[-11, -9.8], [-6.2, 11]]) { const len = x1 - x0; const b = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, len, 8), bar); b.rotation.z = Math.PI / 2; b.position.set((x0 + x1) / 2, 1.15, -4.6); R.room.group.add(b); for (let x = x0 + 0.5; x < x1; x += 3) { const br = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.4), alu); br.position.set(x, 1.15, -4.78); R.room.group.add(br); } } }
    R.decal(T('dlogo', 64, 12, (c) => { c.clearRect(0, 0, 64, 12); ptext(c, 'GLOSS DANCE LAB', 32, 2, { size: 7, col: '#7a3a9a', align: 'center' }); }), { x: 0, y: 4.7, w: 5.6, h: 1.05, z: -4.97, noSlot: true });
    R.decal(T('clock2', 12, 12, (c) => { c.fillStyle = '#fff'; c.beginPath(); c.arc(6, 6, 5.5, 0, 7); c.fill(); c.strokeStyle = '#333'; c.stroke(); r_(c, 6, 2, 1, 4, '#111'); r_(c, 6, 6, 3, 1, '#e04040'); }), { x: -4.5, y: 4.8, z: -4.97, w: 0.6, h: 0.6, noSlot: true });
    // разметка, коврики, реквизит
    for (const [x, z] of [[-4, -1], [0, -1], [4, -1], [-2, 1.2], [2, 1.2]]) R.decal(T('tapeX', 8, 8, (c) => { c.clearRect(0, 0, 8, 8); for (let i = 0; i < 8; i++) { r_(c, i, i, 1, 1, '#ffd040'); r_(c, 7 - i, i, 1, 1, '#ffd040'); } }), { flat: true, x, z, y: 0.02, w: 0.5, h: 0.5 });
    for (const [x, col] of [[-9.6, '#7a5aa8'], [-8.4, '#e86a9a']] as [number, string][]) R.decal(T('mat' + col, 8, 24, (c) => { r_(c, 0, 0, 8, 24, col); for (let y = 2; y < 24; y += 4) r_(c, 0, y, 8, 1, 'rgba(0,0,0,.15)'); }), { flat: true, x, z: 2.4, y: 0.02, w: 1, h: 2.8 });
    { const ball = new THREE.Mesh(new THREE.SphereGeometry(0.45, 14, 10), lam({ map: T('ball', 16, 8, (c) => { r_(c, 0, 0, 16, 8, '#ff8ac8'); r_(c, 0, 2, 16, 1, '#ffb8e0'); }) })); ball.position.set(-10, 0.45, 0.6); R.room.group.add(ball); }
    fbox(R, 0, 0, 3.8, 3, 0.45, 0.6, null, lam({ map: tex('wood') }), { solid: true }); R.sprite(spr('towel'), -0.8, 3.8, { y: 0.45, scale: 1 }); R.sprite(spr('bottles'), 0.6, 3.8, { y: 0.45, scale: 1 });
    R.sprite(spr('boombox'), 5.2, -4.2, { scale: 1.2 }); R.sprite(spr('bag'), -10.2, -3.6, { scale: 1.2 }); R.sprite('speaker', -10.4, -2.4, { scale: 1.3, solid: 0.4 }); R.sprite('speaker', 10.4, 2.0, { scale: 1.3, solid: 0.4 });
    R.decal(T('dposter', 20, 28, (c) => { r_(c, 0, 0, 20, 28, '#1a0a2a'); r_(c, 2, 2, 16, 16, '#7a3aaa'); r_(c, 8, 4, 4, 6, '#ffc8e8'); r_(c, 6, 10, 8, 6, '#ff4fa0'); ptext(c, 'AUDITION', 10, 20, { size: 4, col: '#fff', align: 'center' }); }), { wall: 'w', at: -2, y: 3.0, w: 1.4, h: 2 });
    const an = R.npc(angelChar(G), -2, -1.6, { id: 'angelina', talk: ['angelina: В зеркале проще. Видишь сразу, где врёшь телом.'] });
    R.npc('trainer', 2, -2.4, { talk: async (G: any) => { if (f.ang_dance) return G.run(['trainer: Связка выучена. Теперь, вокальная будка, справа.']); await G.run(A.trainer0); const ok = await sequence({ title: 'Танцевальная связка', sub: 'повтори за Ангелиной', bpm: 128, rounds: [['left', 'right', 'up', 'down'], ['up', 'up', 'left', 'right', 'down', 'up'], ['left', 'down', 'right', 'up', 'left', 'left', 'down', 'up']], onShow: (d) => { an.pose = 'dance'; an.danceBeat++; an.dir = d === 'left' ? 'l' : d === 'right' ? 'r' : 'f'; }, onInput: () => { G.player.pose = 'dance'; G.player.danceBeat++; } }); an.pose = null; G.player.pose = null; if (ok) { f.ang_dance = 1; await G.run(A.danceOk); } } });
    booth(R, 8.2, -3.2, 3.6, 3.2);
    // середина зала не пустая: скамья с сумками, доска с хореографией, конусы, ринглайт для видео, ковёр-растяжка
    fbox(R, -6.4, 0, 3.6, 2.6, 0.45, 0.6, null, lam({ map: tex('wood') }), { solid: true }); R.sprite(spr('bag'), -7.2, 3.6, { y: 0.45, scale: 0.9 }); R.sprite(spr('towel'), -5.8, 3.6, { y: 0.45, scale: 0.9 });
    R.sprite(T('wboard', 28, 32, (c) => { r_(c, 0, 0, 28, 20, '#8a8a96'); r_(c, 1, 1, 26, 18, '#f8f8fc'); for (let i = 0; i < 4; i++) { r_(c, 3 + i * 6, 4, 4, 4, ['#ff4fa0', '#7a3aaa', '#40a0e0', '#ff4fa0'][i]); r_(c, 3 + i * 6, 10, 5, 1, '#3a3a4a'); r_(c, 3 + i * 6, 12, 3, 1, '#3a3a4a'); } r_(c, 3, 15, 20, 1, '#ff4fa0'); ptext(c, '8×8', 24, 13, { size: 4, col: '#7a3aaa', align: 'center' }); r_(c, 3, 20, 2, 12, '#5a5a66'); r_(c, 23, 20, 2, 12, '#5a5a66'); r_(c, 1, 30, 6, 2, '#5a5a66'); r_(c, 21, 30, 6, 2, '#5a5a66'); }), 3.2, -2.6, { scale: 1.3, solid: 0.7 });
    for (const [x, z] of [[-3.6, 2.6], [3.4, 2.4], [6.4, 0.6]]) R.sprite(T('cone', 6, 6, (c) => { r_(c, 2, 0, 2, 2, '#ff8a2a'); r_(c, 1, 2, 4, 2, '#ff8a2a'); r_(c, 0, 4, 6, 2, '#e8662a'); r_(c, 1, 2, 4, 1, '#fff'); }), x, z, { scale: 0.9, thin: true });
    R.sprite(T('ringlight', 16, 40, (c) => { c.strokeStyle = '#fff8f4'; c.lineWidth = 2; c.beginPath(); c.arc(8, 8, 6, 0, 7); c.stroke(); r_(c, 7, 7, 2, 3, '#2a2a30'); r_(c, 7, 14, 2, 22, '#2a2a30'); r_(c, 2, 36, 12, 2, '#2a2a30'); r_(c, 4, 34, 2, 2, '#2a2a30'); r_(c, 10, 34, 2, 2, '#2a2a30'); }), -0.6, 1.6, { scale: 1.2, glow: true, thin: true });
    R.decal(T('stretch', 12, 20, (c) => { r_(c, 0, 0, 12, 20, '#5a8ac8'); for (let y = 2; y < 20; y += 3) r_(c, 0, y, 12, 1, 'rgba(0,0,0,.15)'); r_(c, 0, 0, 12, 1, '#8ab0e0'); }), { flat: true, x: 1.0, z: 0.4, y: 0.02, w: 1.2, h: 2.4 });
    R.inter('vocal', 8.2, -1.0, { label: 'Вокальная будка', fn: async (G) => { await G.run(A.vocal0); const r = await rhythm({ track: 'idol_agency', part: 4, loops: 2, title: '«Sugar Sugar Heart»', sub: 'D F J K или стрелки, держи ритм для Ангелины', onBeat: () => { an.danceBeat++; an.pose = 'dance'; } }); an.pose = null; G.audio.music('idol_agency'); f.ang_vocal = 1; await G.run(A.vocalAfter(r.score > 0.6)); } });
    R.door('out', -8, { label: 'В холл', z: -4.96, col: '#f0e8f0', fn: (G) => G.goto('ang_lobby', 'ang_practice', { fade: 'mirror' }) }); R.spawn('start', -8, -3.4);
  },
};
// ---------------- фотостудия ----------------
function softbox(R: Builder, x: number, z: number, ry: number, o: { h?: number; umbrella?: boolean } = {}) {
  const g = new THREE.Group(); const metal = lam({ color: 0x2a2a30 }); const h = o.h || 2.8;
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, h, 6), metal); pole.position.y = h / 2; g.add(pole);
  for (let k = 0; k < 3; k++) { const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.9, 4), metal); const a = k / 3 * Math.PI * 2; leg.position.set(Math.cos(a) * 0.3, 0.35, Math.sin(a) * 0.3); leg.rotation.set(Math.sin(a) * 0.7, 0, -Math.cos(a) * 0.7); g.add(leg); }
  if (o.umbrella) { const um = new THREE.Mesh(new THREE.ConeGeometry(0.95, 0.5, 16, 1, true), new THREE.MeshBasicMaterial({ color: 0xfaf6f0, side: THREE.DoubleSide })); um.rotation.x = Math.PI / 2; um.position.set(0, h + 0.1, 0.1); g.add(um); const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 1.1, 4), metal); shaft.rotation.x = Math.PI / 2; shaft.position.set(0, h + 0.1, 0); g.add(shaft); }
  else { const head = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.7, 0.5), [metal, metal, metal, metal, new THREE.MeshBasicMaterial({ map: T('softface', 16, 20, (c) => { r_(c, 0, 0, 16, 20, '#fffaf4'); r_(c, 0, 0, 16, 1, '#d8d0c8'); r_(c, 0, 19, 16, 1, '#d8d0c8'); r_(c, 0, 0, 1, 20, '#d8d0c8'); r_(c, 15, 0, 1, 20, '#d8d0c8'); r_(c, 7, 0, 2, 20, 'rgba(220,210,200,.5)'); }) }), metal]); head.position.set(0, h + 0.2, 0); g.add(head); }
  g.position.set(x, 0, z); g.rotation.y = ry; R.room.group.add(g); R.collider(x - 0.35, z - 0.35, x + 0.35, z + 0.35); return g;
}
const photo: RoomDef = {
  name: 'Фотостудия', w: 18, d: 10, music: 'idol_agency', amb: null, step: 'stone', grade: { ...GLOSS, bright: 1.0, bloom: 0.45, contrast: 1.04 },
  build(R, G) {
    const f = G.f; const wall = wallCol('photo', (c, Y) => { r_(c, 0, 0, 32, 256, '#2a282c'); r_(c, 0, Y(6.6), 32, Y(0.2) - Y(6.6), '#4a464e'); for (let y = Y(6.6); y < Y(0.2); y += 32) r_(c, 0, y, 32, 1, '#3a363e'); r_(c, 0, Y(6.4), 32, 3, '#1a1a1e'); r_(c, 0, Y(0.2), 32, 256 - Y(0.2), '#1a1a1e'); });
    const conc = T('conc', 32, 32, (c) => { r_(c, 0, 0, 32, 32, '#8a8690'); noise(c, 32, 32, 0.12, 11); r_(c, 0, 0, 32, 1, '#6a6670'); c.strokeStyle = 'rgba(40,40,40,.25)'; c.beginPath(); c.moveTo(4, 20); c.lineTo(28, 24); c.stroke(); });
    shell(R, { wall, floor: conc, bg: 0x0c080c }); R.ambient(0x8a7a90, 2.2, 0xfff4fa);
    // бумажный фон: рулон на стойках, плавный загиб на пол
    { const paper = lam({ map: T('paper', 16, 16, (c) => { r_(c, 0, 0, 16, 16, '#f6e6ee'); noise(c, 16, 16, 0.03, 2); }), side: THREE.DoubleSide }); const PW = 7.2;
      plane(R, PW, 4.4, paper, 0, 3.1, -4.8); const curve = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, PW, 12, 1, true, 0, Math.PI / 2), paper); curve.rotation.z = Math.PI / 2; curve.rotation.y = 0; curve.position.set(0, 0.9, -3.9); curve.rotation.x = Math.PI; R.room.group.add(curve);
      plane(R, PW, 2.6, paper, 0, 0.015, -2.6, -Math.PI / 2);
      const roll = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, PW + 0.4, 12), lam({ color: 0xf0dce6 })); roll.rotation.z = Math.PI / 2; roll.position.set(0, 5.4, -4.7); R.room.group.add(roll);
      for (const s of [-1, 1]) R.box(s * (PW / 2 + 0.3), -4.7, 0.08, 0.08, 5.6, { tex: 'metal', solid: false }); }
    R.spot(-5, 6, 3, 0, -2.6, 0xfff4f0, 26, { angle: 0.5, cone: 0.02 }); R.spot(5, 6, 3, 0, -2.6, 0xffe8f4, 18, { angle: 0.5, shadow: false });
    softbox(R, -4.4, -1.4, 0.7); softbox(R, 4.4, -1.2, -0.7, { umbrella: true }); softbox(R, -2.6, -4.2, 0.3, { h: 3.4 });
    R.light(-3.8, 3, -0.8, 0xfff8f0, 4, 6); R.light(3.8, 3, -0.6, 0xfff8f0, 4, 6);
    { const ref = new THREE.Mesh(new THREE.CircleGeometry(0.6, 16), new THREE.MeshBasicMaterial({ color: 0xf0d080, side: THREE.DoubleSide })); ref.position.set(2.0, 0.7, -0.6); ref.rotation.set(-0.9, -0.5, 0); R.room.group.add(ref); }
    R.sprite(spr('tripodcam'), 0, 2.8, { scale: 1.2, solid: 0.4 });
    R.table(6.6, 2.4, 2, 1, { tex: 'metal' }); R.sprite(spr('laptop'), 6.4, 2.4, { y: 1.15, scale: 1.2 }); R.sprite(spr('cups'), 7.2, 2.5, { y: 1.15, scale: 0.9 });
    costumeRack(R, -6.4, -3.2, 3, 2); R.sprite(spr('applebox'), 1.4, -3.4, { scale: 1.1 }); R.sprite(spr('applebox'), 1.6, -3.4, { y: 0.5, scale: 1.1 }); R.sprite(PROPTEX.sandbag(), -4.0, -0.6, { scale: 1 }); R.sprite(PROPTEX.sandbag(), 4.8, -0.4, { scale: 1 });
    R.sprite(PROPTEX.mannequin(), -7.8, 0.6, { scale: 1.2, solid: 0.3 });
    for (const [x, z] of [[-3, 0.6], [3.4, 1.4]]) R.decal(T('cable', 32, 8, (c) => { c.clearRect(0, 0, 32, 8); c.strokeStyle = '#111'; c.beginPath(); c.moveTo(0, 4); c.bezierCurveTo(10, 0, 20, 8, 32, 3); c.stroke(); }), { flat: true, x, z, y: 0.02, w: 3, h: 0.7 });
    R.decal(T('mood', 32, 20, (c) => { r_(c, 0, 0, 32, 20, '#c8a878'); for (let i = 0; i < 8; i++) r_(c, 1 + (i % 4) * 8, 1 + Math.floor(i / 4) * 10, 6, 8, ['#ff9ad8', '#2a2a30', '#f4f0f8', '#7a3a9a', '#40e0d0', '#ffc8e8', '#e8b090', '#f2c230'][i]); }), { wall: 'e', at: -1, y: 2.8, w: 2.6, h: 1.6 });
    const an = R.actor(angelChar(G), 0, -2.8, { id: 'angelina' }); R.photo('angelina', 'Ангелина в кадре', 0, -2.8);
    R.npc('stylist', 6.4, -2, { talk: async (G: any) => { if (f.ang_photo) return G.run(['stylist: Снято. Иди. Не мешай свет.']); await G.run(A.photo0); const r = await pick({ ...A.look, confirm: 'Ангелина утверждает' } as any, ); const own = ['hair', 'outfit', 'name'].filter((k) => r[k] === 'own').length; f.ang_look_own = own >= 2 ? 1 : 0; f.ang_look = r; an.setChar(angelChar(G)); G.sfx('shutter'); G.flash(0.6); await G.run(own >= 2 ? A.lookAfterOwn : A.lookAfterMix); f.ang_photo = 1; } });
    R.door('out', -6.6, { label: 'В холл', z: -4.96, col: '#f0e8f0', fn: (G) => G.goto('ang_lobby', 'ang_photo', { fade: 'mirror' }) }); R.spawn('start', -6.6, -3.4);
  },
  async photo(G, subs) { if (subs.includes('angelina')) await G.run(['angelina: Этот снимок, мой. Не отдавай его агентству.']); },
};
// ---------------- студия звукозаписи ----------------
const TAGS: [string, string][] = [['drums', 'Барабаны'], ['bass', 'Бас'], ['keys', 'Клавиши'], ['arp', 'Арпеджио'], ['lead', 'Голос / сакс-соло']];
const record: RoomDef = {
  name: 'Студия звукозаписи', w: 16, d: 10, music: null, amb: 'hum', step: 'carpet', grade: { ...GLOSS, tint: [1.0, 0.95, 1.04], bright: 1.0, bloom: 0.6 },
  build(R, G) {
    const f = G.f; const wall = wallCol('rec', (c, Y) => { r_(c, 0, 0, 32, 256, '#1a1418'); const y0 = Y(6.2), y1 = Y(0.3); r_(c, 0, y0, 32, y1 - y0, '#5a3a2a');
      for (let j = 0; y0 + j * 32 < y1; j++) for (let i = 0; i < 2; i++) { const x = i * 16, y = y0 + j * 32; r_(c, x + 1, y + 1, 14, 30, (i + j) % 2 ? '#6a2a34' : '#3a3440'); r_(c, x + 1, y + 1, 14, 1, 'rgba(255,255,255,.12)'); for (let k = 3; k < 30; k += 3) r_(c, x + 2, y + k, 12, 1, 'rgba(0,0,0,.15)'); }
      r_(c, 0, y1, 32, 256 - y1, '#2a2024'); for (let x = 0; x < 32; x += 4) r_(c, x, Y(7.2), 2, Y(6.2) - Y(7.2), '#7a5434'); });
    const carpet = T('reccarpet', 32, 32, (c) => { r_(c, 0, 0, 32, 32, '#3a3448'); noise(c, 32, 32, 0.1, 13); for (let y = 0; y < 32; y += 8) r_(c, 0, y, 32, 1, 'rgba(0,0,0,.12)'); });
    shell(R, { wall, floor: carpet, bg: 0x080610 }); R.ambient(0x6a5a7a, 2.1, 0xe0d0f0); R.light(-1, 4.6, 0, 0xffd8b0, 9, 12);
    booth(R, 4.6, -3.2, 4, 3.2);
    // микшерный пульт: наклонная консоль, фейдеры, VU-метры
    { const side = lam({ map: tex('darkwood') }); fbox(R, 0, 0, -2.6, 4.6, 0.95, 1.5, T('consolefront', 32, 8, (c) => { r_(c, 0, 0, 32, 8, '#3a2a20'); r_(c, 0, 0, 32, 1, '#7a5434'); }), side, { solid: true });
      const top = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 1.5), new THREE.MeshLambertMaterial({ map: T('desk', 64, 24, (c) => { r_(c, 0, 0, 64, 24, '#26262c'); for (let i = 0; i < 16; i++) { const x = 2 + i * 3.8; r_(c, x + 1, 9, 1, 13, '#111'); r_(c, x, 12 + ((i * 7) % 8), 3, 2, i % 4 === 3 ? '#ff4fa0' : '#d8d8e0'); for (let k = 0; k < 3; k++) r_(c, x + 0.5, 2 + k * 2.2, 2, 2, ['#40e0d0', '#f2c230', '#8a8a90'][k]); } }), emissive: 0x1a1a24 })); top.rotation.x = -Math.PI / 2 + 0.35; top.position.set(0, 1.05, -2.5); R.room.group.add(top);
      const vu = T('vu', 48, 12, (c) => { r_(c, 0, 0, 48, 12, '#0a0a10'); for (let m = 0; m < 4; m++) for (let k = 0; k < 10; k++) r_(c, 2 + m * 12, 10 - k, 9, 1, k < 6 ? '#40f070' : k < 8 ? '#f2d030' : '#f04040'); });
      const meter = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.65), new THREE.MeshBasicMaterial({ map: vu })); meter.position.set(0, 1.55, -3.3); R.room.group.add(meter); R.onUpdate((_, t) => { meter.scale.y = 0.75 + Math.abs(Math.sin(t * 5)) * 0.25; });
      R.light(0, 1.8, -1.9, 0x60f0a0, 2, 3);
      for (const s of [-1, 1]) { R.sprite('speaker', s * 2.6, -3.0, { y: 1.0, scale: 0.8 }); }
      R.decal(T('daw', 48, 28, (c) => { r_(c, 0, 0, 48, 28, '#14141c'); for (let t = 0; t < 5; t++) { r_(c, 1, 2 + t * 5, 6, 4, ['#ff4fa0', '#40e0d0', '#f2c230', '#8a6af0', '#6af06a'][t]); for (let x = 8; x < 47; x++) { const a = Math.abs(Math.sin(x * 0.7 + t)) * 2; r_(c, x, 4 + t * 5 - a, 1, a * 2 + 1, ['#ff8ac8', '#80f0e0', '#f8e070', '#b8a8f8', '#a0f8a0'][t]); } } r_(c, 26, 0, 1, 28, '#fff'); }), { x: -1.4, y: 2.1, z: -3.4, w: 1.6, h: 0.95, glow: true, noSlot: true }); }
    R.sprite(spr('rack'), -3.4, -3.8, { scale: 1.1, solid: 0.5 }); R.sprite(spr('guitar'), -7.6, -1.2, { scale: 1.1 }); R.sprite(spr('guitar'), -7.6, 0.4, { scale: 1.1, flipX: true });
    for (let i = 0; i < 3; i++) R.decal(spr('goldrec'), { x: -2.4 + i * 1.2, y: 4.6, w: 0.9, h: 1.1, z: -4.97, noSlot: true });
    sofa(R, -6.8, 2.6, { w: 2.4, col: 0x4a3a5a, ry: Math.PI / 2 }); R.sprite(spr('cups'), -5.6, 0.6, { scale: 0.9, thin: true });
    R.sprite(spr('plant'), 7.2, 1.8, { scale: 1.4 });
    R.npc(angelChar(G), 3.4, 0.6, { id: 'angelina', dir: 'l', talk: ['angelina: Включай, что слышишь. Я скажу, если неправда.'] });
    R.inter('mixer', 0, -1.4, { label: 'Микшерный пульт', fn: mixer });
    R.door('out', -5.6, { label: 'В холл', z: -4.96, col: '#3a2a4a', fn: (G) => G.goto('ang_lobby', 'ang_record', { fade: 'mirror' }) }); R.spawn('start', -5.6, -3.4);
  },
  async enter(G) { if (!G.f.ang_rec0) { G.f.ang_rec0 = 1; await G.run(A.mixer0); } },
};
function mixer(G: any): Promise<void> {
  const f = G.f, on: Record<string, boolean> = { drums: false, bass: false, keys: false, arp: false, lead: false }; G.audio.partFilter = (id: string, p: any) => id !== 'idol_own' || on[p.tag]; G.audio.music('idol_own', { restart: true });
  return new Promise((res) => {
    const m = G.ui.open(`<h2>Микшерный пульт <small>демо Ангелины</small></h2><div class="body"><p>Песня играет по кругу. Включай дорожки, пока она не зазвучит как правда. Ангелина слушает.</p><div class="opts" style="gap:.6rem">${TAGS.map(([t, n]) => `<button class="opt" data-t="${t}" style="min-width:8rem;text-align:center">${n}<small>выкл</small></button>`).join('')}</div><p data-msg style="font-style:italic;min-height:2.6rem;margin-top:1rem"></p></div><div class="foot"><button class="btn small red" data-ok>Записать демо</button></div>`, { noClose: true });
    const msg = m.querySelector('[data-msg]') as HTMLElement; const CMT: Record<string, string> = { drums: 'Ангелина начинает отстукивать ногой.', bass: '«Вот. Теперь у неё есть пол под ногами».', keys: '«Это как свет в окне. Оставь».', arp: '«Это мои автобусы. Я так слышала город».', lead: 'Ангелина закрывает глаза и беззвучно поёт вместе с записью.' };
    m.addEventListener('click', (e: Event) => { const b = (e.target as HTMLElement).closest('[data-t]') as HTMLElement | null; if (!b) return; const t = b.dataset.t!; on[t] = !on[t]; b.classList.toggle('on', on[t]); b.querySelector('small')!.textContent = on[t] ? 'вкл' : 'выкл'; G.sfx('switch'); msg.textContent = on[t] ? CMT[t] : '«Без этого, пусто. Но решай».'; });
    (m.querySelector('[data-ok]') as HTMLElement).onclick = async () => { if (!on.drums || !on.bass || !on.lead) { msg.textContent = 'Ангелина: «Без барабанов, баса и голоса это не песня, а настроение»'; G.sfx('error'); return; } G.ui.close(m); G.audio.partFilter = null; f.ang_mix = Object.keys(on).filter((k) => on[k]).join(','); G.sfx('stamp'); await G.run(A.mixerDone); res(); };
    if (G.fast) { for (const k in on) on[k] = true; (m.querySelector('[data-ok]') as HTMLElement).click(); }
  });
}
// ---------------- концерт ----------------
const stage: RoomDef = {
  name: 'Шоукейс', w: 30, d: 14, music: null, amb: 'crowd', step: 'wood', grade: STAGE, camZMax: 1, camDist: 23,
  build(R, G) {
    const f = G.f; const drape = wallCol('drape', (c) => { for (let x = 0; x < 32; x++) r_(c, x, 0, 1, 256, Math.sin(x / 32 * Math.PI * 4) > 0 ? '#1a1020' : '#120a18'); });
    const deck = T('deck2', 32, 32, (c) => { for (let x = 0; x < 32; x += 4) { r_(c, x, 0, 4, 32, (x / 4) % 2 ? '#4a3a42' : '#42343c'); r_(c, x, 0, 1, 32, '#1e1418'); } for (let i = 0; i < 6; i++) r_(c, (i * 11) % 32, (i * 7) % 32, 3, 1, '#f2e060'); noise(c, 32, 32, 0.06, 17); });
    shell(R, { wall: drape, floor: deck, bg: 0x05030a }); R.ambient(0x6a5a7a, 2.8, 0xd0b0f0); R.light(-6, 3, -3, 0xff4fa0, 7, 10); R.light(6, 3, -3, 0x40e0d0, 7, 10); R.light(10.5, 4, -1.5, 0xc8a0ff, 9, 12); R.light(0, 3.2, 9.5, 0xffc8e8, 7, 14);
    // кулисы и порталы по бокам, расширенный настил сцены, задник за экранами — сцена не обрывается в черноту
    for (const sx of [-1, 1]) { R.drape(sx * 14.2, -3.2, 2.4, 8.5, { tint: '#6a1a5a', folds: 6 }); R.drape(sx * 14.6, 1.2, 1.8, 8.5, { tint: '#5a1450', folds: 5 }); R.box(sx * 14.4, -1, 0.4, 0.4, 8.5, { tex: 'metal', tint: '#3a3040', solid: false }); }
    { const deckW = new THREE.Mesh(new THREE.PlaneGeometry(80, 16), lam({ map: rep(deck, 40, 8), color: 0x9a8aa0 })); deckW.rotation.x = -Math.PI / 2; deckW.position.set(0, -0.01, -1); R.room.group.add(deckW); }
    { const cc = T('crowdcard', 128, 24, (c) => { c.clearRect(0, 0, 128, 24); const cols = ['#2a1a3a', '#3a2440', '#24182e', '#4a2a48']; for (let i = 0; i < 40; i++) { const x = (i * 3.3) % 128, y = 6 + (i % 3) * 3; r_(c, x, y + 4, 5, 14, cols[i % 4]); r_(c, x + 1, y, 3, 4, cols[(i + 1) % 4]); r_(c, x + 1, y, 3, 1, '#6a4a7a'); if (i % 4 === 0) r_(c, x + 4, y - 4, 1, 4, ['#ff4fa0', '#40e0d0', '#f2e060'][i % 3]); } });
      for (const [z, y, k] of [[8.6, 0, 1], [10.4, 0.15, 0.8], [12.2, 0.3, 0.6]]) { const m = new THREE.Mesh(new THREE.PlaneGeometry(34, 3.6), new THREE.MeshLambertMaterial({ map: rep(cc, 2, 1), transparent: true, alphaTest: 0.3, color: new THREE.Color().setScalar(k) })); m.position.set(0, y + 1.8, z); R.room.group.add(m); } }
    { const floorA = T('audfloor', 16, 16, (c) => { r_(c, 0, 0, 16, 16, '#0e0c12'); noise(c, 16, 16, 0.08, 19); }); plane(R, 34, 30, lam({ map: rep(floorA, 17, 15) }), 0, 0.01, 16, -Math.PI / 2); }
    // край сцены: подиум со светодиодной полосой
    fbox(R, 0, 0, 0.9, 30, 0.35, 0.3, T('lip', 32, 4, (c) => { r_(c, 0, 0, 32, 4, '#1a1418'); for (let x = 0; x < 32; x += 2) r_(c, x, 1, 1, 2, x % 4 ? '#ff4fa0' : '#40e0d0'); }), lam({ color: 0x1a1418 }), { emissive: true });
    // главный LED-экран и боковые
    screen(R, 0, 4.6, 9, 4.2, f.ang_done ? 'АНГЕЛИНА' : 'ANGEL♡', -6.95); screen(R, -10, 4.2, 4.2, 2.6, f.ang_done ? 'АНГЕЛИНА' : 'ANGEL♡', -6.95); screen(R, 10, 4.2, 4.2, 2.6, f.ang_done ? 'АНГЕЛИНА' : 'ANGEL♡', -6.95);
    // ферма с приборами
    { const truss = T('truss', 16, 16, (c) => { c.clearRect(0, 0, 16, 16); c.strokeStyle = '#a8a8b0'; c.lineWidth = 1; c.strokeRect(0.5, 0.5, 15, 15); c.beginPath(); c.moveTo(0, 0); c.lineTo(16, 16); c.moveTo(16, 0); c.lineTo(0, 16); c.stroke(); });
      const tm = new THREE.MeshLambertMaterial({ map: rep(truss, 26, 1), transparent: true, alphaTest: 0.3, side: THREE.DoubleSide }); for (const z of [-5.6, -1.4]) { const b = new THREE.Mesh(new THREE.BoxGeometry(26, 0.5, 0.5), tm); b.position.set(0, 7.6, z); R.room.group.add(b); }
      const tv = new THREE.MeshLambertMaterial({ map: rep(truss, 1, 16), transparent: true, alphaTest: 0.3, side: THREE.DoubleSide }); for (const x of [-13, 13]) for (const z of [-5.6, -1.4]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.5, 8, 0.5), tv); p.position.set(x, 4, z); R.room.group.add(p); }
      for (let i = 0; i < 10; i++) { const x = -11 + i * 2.45; const can = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.26, 0.5, 8), lam({ color: 0x1a1a1e })); can.position.set(x, 7.1, -1.4); can.rotation.x = 0.6; R.room.group.add(can); const lens = new THREE.Mesh(new THREE.CircleGeometry(0.18, 8), new THREE.MeshBasicMaterial({ color: i % 2 ? 0xff4fa0 : 0x40e0d0 })); lens.position.set(x, 6.85, -1.2); lens.rotation.x = 0.6 - Math.PI / 2 + Math.PI; R.room.group.add(lens); } }
    for (const x of [-13.6, 13.6]) R.sprite(spr('linearray'), x, -2, { y: 3.6, scale: 1.6 });
    for (const x of [-12.4, 12.4]) R.sprite('speaker', x, -4.6, { scale: 2 });
    // бэнд: барабаны, клавиши, усилители, мониторы
    R.sprite(spr('drums'), -4.8, -5.6, { scale: 1.6 }); R.sprite(spr('keys'), 5, -5.4, { scale: 1.4 }); R.sprite(spr('amp'), -8, -5.8, { scale: 1.4 }); R.sprite(spr('amp'), 8.4, -5.8, { scale: 1.4 });
    for (const x of [-2.2, 2.2]) R.sprite(spr('wedge'), x, 0.3, { scale: 1.1, thin: true });
    R.sprite('mic', 0.7, -3.3, { scale: 1.2 });
    // свет: главный луч на Ангелину и цветные контровые
    R.spot(0, 11, 1, 0, -3, 0xffe8f4, 60, { angle: 0.22, cone: 0.07, name: 'main' }); R.spot(-8, 9, 0, -1, -3, 0xff4fa0, 40, { angle: 0.3, cone: 0.05, shadow: false }); R.spot(8, 9, 0, 1, -3, 0x40e0d0, 40, { angle: 0.3, cone: 0.05, shadow: false });
    R.light(0, 2.4, -1.2, 0xffd8e8, 5, 5);
    R.particles('dust', { count: 90, top: 8, color: 0xff9ad8 });
    // пульт звукорежиссёра (FOH)
    R.table(11, 2.6, 3, 1.4, { tex: 'metal' }); { const d = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 1.2), new THREE.MeshBasicMaterial({ map: T('foh', 32, 12, (c) => { r_(c, 0, 0, 32, 12, '#16161c'); for (let i = 0; i < 12; i++) { r_(c, 1 + i * 2.6, 4, 1, 7, '#000'); r_(c, 0.5 + i * 2.6, 5 + (i * 3) % 5, 2, 1, i % 2 ? '#ff4fa0' : '#40e0d0'); r_(c, 1 + i * 2.6, 1, 1, 2, '#6af06a'); } }) })); d.rotation.x = -Math.PI / 2; d.position.set(11, 1.16, 2.6); R.room.group.add(d); }
    // ограждение и зрители с лайтстиками (каждый второй в тени)
    { const rail = lam({ map: tex('metal'), color: 0xc8c8d0 }); const b = new THREE.Mesh(new THREE.BoxGeometry(22, 0.08, 0.08), rail); b.position.set(-2.5, 1.1, 3.4); R.room.group.add(b); for (let x = -13.5; x <= 8.5; x += 1.5) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.1, 0.06), rail); p.position.set(x, 0.55, 3.4); R.room.group.add(p); } }
    R.actor(angelChar(G), 0, -3, { id: 'angelina' }); R.actor('stylist', -13, -4.4, { id: 'stylist', dir: 'r' }); R.actor('ang_mom', -1.6, 5.6, { id: 'ang_mom', dir: 'b' }); R.actor('glyants', -11.6, -4.6, { id: 'glyants', dir: 'r' });
    const ids = ['dancer', 'student', 'student2', 'courtier', 'cashier']; const crowd: string[] = []; for (let i = 0; i < 28; i++) crowd.push(ids[(i * 3) % ids.length]);
    const sticks: THREE.Mesh[] = [];
    crowd.forEach((id, i) => { const row = Math.floor(i / 14), col = i % 14; const x = -13.2 + col * 1.5 + row * 0.75, z = 4.4 + row * 1.5; if (Math.abs(x + 1.6) < 0.9 && row === 1) return; if (x > 8.6 && row === 0) return; const a = R.actor(id, x, z, { dir: 'b', id: 'crowd_' + i + '_' + id }); if ((col + row) % 2) (a.mesh.material as THREE.MeshLambertMaterial).color.setScalar(0.72);
      if (i % 3 === 0) { const s = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.4, 0.06), new THREE.MeshBasicMaterial({ color: [0xff4fa0, 0x40e0d0, 0xf2e060][i % 3 === 0 ? (i / 3) % 3 : 0] })); s.position.set(x + 0.3, 2.9, z); R.room.group.add(s); sticks.push(s); } });
    R.onUpdate((_, t) => sticks.forEach((s, i) => { s.rotation.z = Math.sin(t * 4 + i) * 0.6; }));
    warmRig(R, -1.2, 3.6, { col: 0xffc080, y: 3.2, count: 120 });
    R.particles('confetti', { count: 70, top: 8, name: 'conf' }); R.room.named.conf.visible = false;
    R.inter('desk', 11, 3.8, { label: 'Пульт', cond: () => !f.ang_done, fn: showcase }); R.spawn('start', 10, 2.6, 'b');
  },
  async enter(G) { if (!G.f.ang_st0) { G.f.ang_st0 = 1; G.audio.music('idol_agency'); G.focus(0, -2.5, 15); await G.run(A.showcase); G.unfocus(); } },
};
async function showcase(G: any) {
  const f = G.f, an = G.actor('angelina'), main = G.room.named.main as THREE.SpotLight | undefined, mi = main?.intensity ?? 60; G.player.place(11, 3.8, 'l');
  void camMove(G, { x: 4.5, z: -0.6, dist: 15, pitch: 0.42, yOff: 1.8 }, 1.5); await G.run(A.showChoice.slice(0, 1)); G.audio.music(null); G.sfx('switch');
  // тишина: фонограмма оборвалась, зал замер, остаётся один софит и низкий крупный план
  const g0 = { ...G.gradeBase }; G.grade({ vig: 0.92, bright: 0.82 }); G.sfx('gasp'); await camMove(G, { x: 0, z: -2.4, dist: 7.6, pitch: 0.24, yOff: 2.1 }, 1.6); await G.wait(1.4);
  an.setChar('angelina_own'); G.flash(0.2); void tween(G, 1.2, (k) => { if (main) main.intensity = mi * (1 + 0.6 * k); }); await G.run(A.showChoice.slice(1));
  G.gradeBase = g0; G.applyGrade(); if (main) main.intensity = mi; void camMove(G, { x: 0, z: -1.5, dist: 15, pitch: 0.5, yOff: 1.4 }, 1.2); G.R.flash = 0.5;
  const r = await rhythm({ track: 'idol_own', part: 4, loops: 2, title: 'Своя песня', sub: 'держи ритм у пульта, D F J K или стрелки', lyrics: A.lyrics as any, onBeat: (b) => { an.pose = 'dance'; an.danceBeat++; if (b % 4 === 0) G.flash(0.08); } });
  an.pose = 'arms'; G.room.named.conf.visible = true; G.sfx('applause', { dur: 5, dens: 70 }); f.ang_done = 1; G.audio.music('idol_own');
  // мама в третьем ряду: кадр через её плечо на сцену, тёплый свет
  await camMove(G, { x: -1.4, z: 3.6, dist: 6.6, pitch: 0.2, yOff: 2.1 }, 2); void warmOn(G, { int: 20, dur: 2 }); await G.run(A.showMom); await G.run(A.showMask);
  const aft = A.after(r.score > 0.55); void camMove(G, { x: 0, z: -1, dist: 13, pitch: 0.42, yOff: 1.6 }, 2); await G.run(aft.slice(0, 6));
  // «Спасибо, что была у пульта»: крупно, самый тёплый свет главы
  void camMove(G, { x: 1.2, z: -1.6, dist: 8.4, pitch: 0.34, yOff: 1.8 }, 2); void warmOn(G, { int: 26, grade: { bloom: 1.1 }, dur: 1.6 }); await G.run(aft.slice(6)); await camBack(G); an.pose = 'bow';
  await finishChapter(G, 'angelina', [['DEBUT: THE IDOL PROJECT', 'act'], 'Ангелина выступила на своих условиях.', ['Фонограмма, это когда поют за тебя. Она, спела сама.', 'sm']]);
}
export const rooms: Record<string, RoomDef> = { ang_home: home, ang_lobby: lobby, ang_practice: practice, ang_photo: photo, ang_record: record, ang_stage: stage };
