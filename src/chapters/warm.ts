// Кинематограф глав (Эрика, Лиза, Ангелина): заранее заведённый тёплый свет комнаты, плавная камера, паузы.
import * as THREE from 'three';
import type { Builder } from '../world/room';
export const WARM = { tint: [1.12, 1.0, 0.86], sat: 1.1, bloom: 0.9, vig: 0.35, bright: 1.05 };
export function tween(G: any, dur: number, fn: (k: number) => void): Promise<void> {
  const room = G.room; if (G.fast || !room || dur <= 0) { fn(1); return Promise.resolve(); }
  return new Promise((res) => { let t = 0, done = false; const u = (dt: number) => { t += dt; const k = Math.min(1, t / dur); fn(k * k * (3 - 2 * k)); if (k >= 1) end(); };
    const end = () => { if (done) return; done = true; if (G.room === room) fn(1); const i = room.updaters.indexOf(u); if (i >= 0) room.updaters.splice(i, 1); res(); };
    room.updaters.push(u); setTimeout(end, dur * 1000 + 1500); });
}
/** Медленный наезд/отъезд: фокус, дистанция и ракурс камеры плавно меняются за dur секунд. */
export let camTok = 0;
export function camMove(G: any, to: { x?: number; z?: number; dist?: number; pitch?: number; yOff?: number }, dur = 2): Promise<void> {
  const my = ++camTok, c = G.cam, f0 = c.focus ? { ...c.focus } : { x: c.x, z: c.z, dist: c.dist }, p0 = c.pitch, y0 = c.yOff, L = (a: number, b: number | undefined, k: number) => b === undefined ? a : a + (b - a) * k;
  return tween(G, dur, (k) => { if (my !== camTok) return; G.focus(L(f0.x, to.x, k), L(f0.z, to.z, k), L(f0.dist, to.dist, k)); c.pitch = L(p0, to.pitch, k); c.yOff = L(y0, to.yOff, k); });
}
/** Вернуть ракурс комнаты и отпустить фокус. */
export async function camBack(G: any, pitch = 0.56, yOff = 1.2, dur = 1.2) { const my = ++camTok, p0 = G.cam.pitch, y0 = G.cam.yOff; await tween(G, dur, (k) => { if (my !== camTok) return; G.cam.pitch = p0 + (pitch - p0) * k; G.cam.yOff = y0 + (yOff - y0) * k; }); G.unfocus(); }
/** Тёплый «ключевой» свет и золотые пылинки: спрятаны, пока не наступит нежный момент. */
export function warmRig(R: Builder, x: number, z: number, o: { col?: number; kind?: 'dust' | 'petals' | 'sparks'; pcol?: number; y?: number; count?: number } = {}) {
  R.light(x, o.y ?? 3.4, z + 1.6, o.col ?? 0xffc078, 0, 13, { name: 'warmKey', force: true });
  const m = R.particles(o.kind || 'dust', { count: o.count ?? 90, top: 6, color: o.pcol ?? 0xffd890, name: 'warmMotes' }); m.visible = false; const mm = m.material as THREE.PointsMaterial; mm.opacity = 0; if ((o.kind || 'dust') === 'dust') mm.size = 0.12;
}
export let warmPrev: any = null;
/** Нежный момент: грейд теплеет, загорается тёплый ключ, в воздухе золотая пыль; по желанию, тихая музыка. */
export async function warmOn(G: any, o: { int?: number; grade?: any; music?: string; dur?: number } = {}) {
  if (!G.room) return; if (!warmPrev || warmPrev.room !== G.room) warmPrev = { room: G.room, grade: { ...G.gradeBase }, music: G.audio.cur?.id ?? null, noir: document.body.classList.contains('noir-mode') };
  G.grade({ ...WARM, ...o.grade }); if ((o.grade?.sat ?? WARM.sat) > 0.3) document.body.classList.remove('noir-mode'); if (o.music) G.audio.music(o.music, { fade: 2.5 });
  const l = G.room.named.warmKey, m = G.room.named.warmMotes; if (m) m.visible = true; const i0 = l?.intensity || 0, o0 = m?.material.opacity || 0, I = o.int ?? 16;
  await tween(G, o.dur ?? 1.6, (k) => { if (l) l.intensity = i0 + (I - i0) * k; if (m) m.material.opacity = o0 + (0.75 - o0) * k; });
}
export async function warmOff(G: any, dur = 1.4) {
  const p = warmPrev; warmPrev = null; if (!p || G.room !== p.room) return;
  G.gradeBase = p.grade; G.applyGrade(); if (p.noir) document.body.classList.add('noir-mode'); if (p.music !== (G.audio.cur?.id ?? null)) G.audio.music(p.music, { fade: 2 });
  const l = G.room.named.warmKey, m = G.room.named.warmMotes, i0 = l?.intensity || 0, o0 = m?.material.opacity || 0;
  await tween(G, dur, (k) => { if (l) l.intensity = i0 * (1 - k); if (m) m.material.opacity = o0 * (1 - k); }); if (m && !warmPrev) m.visible = false;
}
