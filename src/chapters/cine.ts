// Кинематограф глав (Полина, Рубен, Матвей): тёплые моменты с лучами и свечением, наезд и ракурс камеры, подсказки масок.
import * as THREE from 'three';
import type { Builder } from '../world/room';
import { canvasTex } from '../gfx/tex';
// ---------------- кинематограф (локально): тёплые моменты, камера, подсказки масок ----------------
// Все твины пропускаются в быстром режиме (G.fast) и не зависают, если комната сменилась посреди движения.
export const WARM = { tint: [1.12, 1.0, 0.86], sat: 1.1, bloom: 0.9, vig: 0.35, bright: 1.05 };
export function ctw(G: any, dur: number, fn: (k: number) => void): Promise<void> {
  const room = G.room; if (G.fast || !room || dur <= 0) { fn(1); return Promise.resolve(); }
  return new Promise((res) => { let t = 0, done = false; const fin = () => { if (done) return; done = true; const i = room.updaters.indexOf(u); if (i >= 0) room.updaters.splice(i, 1); res(); };
    const u = (dt: number) => { t += dt; const k = Math.min(1, t / dur); fn(k * k * (3 - 2 * k)); if (k >= 1) fin(); }; room.updaters.push(u); setTimeout(() => { if (G.room !== room) fin(); }, dur * 1000 + 600); });
}
/** Медленный наезд/отъезд камеры на точку. */
export async function dolly(G: any, x: number, z: number, d0: number, d1: number, dur: number) { G.focus(x, z, d0); const fo = G.cam.focus; await ctw(G, dur, (k) => { if (G.cam.focus === fo) fo.dist = d0 + (d1 - d0) * k; }); }
/** Ракурс: наклон и высота камеры плавно; возвращает функцию возврата к прежнему ракурсу. */
export async function angle(G: any, pitch: number, yOff: number, dur = 1.2) {
  const p0 = G.cam.pitch, y0 = G.cam.yOff; await ctw(G, dur, (k) => { G.cam.pitch = p0 + (pitch - p0) * k; G.cam.yOff = y0 + (yOff - y0) * k; });
  return (d = 1.2) => { const p1 = G.cam.pitch, y1 = G.cam.yOff; return ctw(G, d, (k) => { G.cam.pitch = p1 + (p0 - p1) * k; G.cam.yOff = y1 + (y0 - y1) * k; }); };
}
export const glowTex = () => canvasTex(32, 32, (c) => { const g = c.createRadialGradient(16, 16, 0, 16, 16, 16); g.addColorStop(0, 'rgba(255,214,150,1)'); g.addColorStop(0.4, 'rgba(255,190,120,0.45)'); g.addColorStop(1, 'rgba(255,170,100,0)'); c.fillStyle = g; c.fillRect(0, 0, 32, 32); }, 'cine_glow');
export const shaftTex = () => canvasTex(16, 64, (c) => { for (let y = 0; y < 64; y++) for (let x = 0; x < 16; x++) { const e = Math.sin((x + 0.5) / 16 * Math.PI), v = Math.pow(1 - y / 64, 0.7) * 0.25 + 0.75 * Math.sin(y / 64 * Math.PI); const a = e * e * v; if (a > 0.02) { c.fillStyle = `rgba(255,220,160,${a.toFixed(3)})`; c.fillRect(x, y, 1, 1); } } }, 'cine_shaft');
export const additive = (map: THREE.Texture, color = 0xffffff) => new THREE.MeshBasicMaterial({ map, color, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
/**
 * Тёплый момент: грейд теплее и мягче, золотое свечение у героев, косые лучи, тёплые пылинки/светлячки,
 * по желанию тихая музыка. Возвращает функцию, которая плавно всё возвращает (грейд главы, музыку).
 */
export async function warmOn(G: any, x: number, z: number, o: { music?: string; back?: string | null; shafts?: number; motes?: 'dust' | 'fireflies' | 'petals'; glow?: number; y?: number; grade?: any; key?: number } = {}) {
  const room = G.room; if (!room) return async () => {};
  const saved = { ...G.gradeBase, tint: G.gradeBase.tint ? [...G.gradeBase.tint] : undefined }; G.grade(o.grade || WARM);
  if (o.music) G.audio.music(o.music);
  const grp = new THREE.Group(); grp.position.set(x, 0, z); room.group.add(grp); const mats: { m: THREE.Material & { opacity: number }; a: number }[] = [];
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex(), color: 0xffd8a0, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: false })); halo.position.set(0, o.y ?? 2.0, 0.2); halo.scale.set(9, 7, 1); grp.add(halo); mats.push({ m: halo.material as any, a: o.glow ?? 0.32 });
  for (let i = 0; i < (o.shafts ?? 3); i++) { const m = additive(shaftTex(), 0xffe0b0); const s = new THREE.Mesh(new THREE.PlaneGeometry(1.4 + i * 0.5, 10), m); s.position.set(-2.4 + i * 2.2, 4.6, -1.6 - i * 0.3); s.rotation.z = 0.38; grp.add(s); mats.push({ m: m as any, a: 0.16 - i * 0.03 }); }
  const n = 46, pos = new Float32Array(n * 3), ph = new Float32Array(n); for (let i = 0; i < n; i++) { pos[i * 3] = (Math.random() - 0.5) * 9; pos[i * 3 + 1] = Math.random() * 4.5; pos[i * 3 + 2] = (Math.random() - 0.5) * 4; ph[i] = Math.random() * 6.28; }
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); const kind = o.motes || 'dust';
  const pm = new THREE.PointsMaterial({ color: kind === 'petals' ? 0xffc8d8 : kind === 'fireflies' ? 0xffe890 : 0xffd8a0, size: kind === 'dust' ? 0.09 : 0.14, transparent: true, opacity: 0, depthWrite: false, blending: kind === 'petals' ? THREE.NormalBlending : THREE.AdditiveBlending }); grp.add(new THREE.Points(geo, pm)); mats.push({ m: pm as any, a: kind === 'fireflies' ? 0.95 : 0.7 });
  const upd = (dt: number, t: number) => { for (let i = 0; i < n; i++) { const vy = kind === 'petals' ? -0.5 : kind === 'fireflies' ? Math.sin(t * 0.8 + ph[i]) * 0.25 : 0.12; pos[i * 3 + 1] += vy * dt; pos[i * 3] += Math.sin(t * 0.6 + ph[i]) * dt * 0.25; if (pos[i * 3 + 1] > 4.6) pos[i * 3 + 1] = 0.1; if (pos[i * 3 + 1] < 0) pos[i * 3 + 1] = 4.5; } geo.attributes.position.needsUpdate = true; if (kind === 'fireflies') pm.size = 0.12 + Math.sin(t * 5) * 0.04; };
  room.updaters.push(upd);
  const key = room.named.warmKey as THREE.PointLight | undefined; const kInt = o.key ?? 6;
  await ctw(G, 1.4, (k) => { for (const e of mats) e.m.opacity = e.a * k; if (key) key.intensity = kInt * k; });
  return async () => {
    if (G.room === room) { G.gradeBase = saved; G.applyGrade(); if (o.back !== undefined) G.audio.music(o.back); await ctw(G, 1.6, (k) => { for (const e of mats) e.m.opacity = e.a * (1 - k); if (key) key.intensity = kInt * (1 - k); }); }
    const i = room.updaters.indexOf(upd); if (i >= 0) room.updaters.splice(i, 1); grp.parent?.remove(grp); geo.dispose();
  };
}
/** Тёплый «ключевой» свет комнаты: заранее заведён с нулевой яркостью (без перекомпиляции шейдеров посреди сцены). */
export function warmKey(R: Builder, x: number, y: number, z: number, dist = 11) { R.light(x, y, z, 0xffc890, 0, dist, { name: 'warmKey' }); }
/** Подсказка о маске: один раз за игру для каждого ключа. */
export function maskHint(G: any, key: string, text: string, icon = '❖') { const h = (G.f.maskHints ||= {}); if (h[key] || G.fast) return; h[key] = 1; G.toast(text, icon); }
