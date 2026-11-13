// Мир: комнаты-диорамы, акторы-билборды, построитель локаций, коллизии, интерактивные объекты, стражи.
import * as THREE from 'three';
import { tex, canvasTex, propTex, poster, PPU, ptext } from '../gfx/tex';
import { door3D, swingDoor } from './decor3d';
import { charSheet, FW, FH, FRAMES } from '../gfx/sprites';
import { CHARS } from '../data/chars';
import type { Grade } from '../gfx/render';

export interface Box { x0: number; z0: number; x1: number; z1: number; on: boolean; }
export interface Inter { id: string; x: number; z: number; r: number; label: string; fn: (G: any) => any; mask?: string; cond?: () => boolean; marker?: THREE.Object3D; y: number; enabled: boolean; quiet?: boolean; }
export interface Trigger { x0: number; z0: number; x1: number; z1: number; fn: (G: any) => any; once: boolean; done: boolean; inside: boolean; }
export interface RoomDef {
  name: string; chapter?: string; floor?: string; w: number; d: number; music?: string | null; amb?: string | null; grade?: Grade; step?: string;
  camDist?: number; camZMax?: number; noMasks?: boolean; noCamera?: boolean; dark?: boolean; maskGrade?: Record<string, Grade>; noTilt?: boolean;
  card?: (G: any) => any[] | null;
  build: (R: Builder, G: any) => void; enter?: (G: any, from: string) => any; update?: (G: any, dt: number, t: number) => void; onKey?: (G: any, action: string) => any; photo?: (G: any, subjects: string[]) => any;
}
const sheetTex = new Map<string, THREE.CanvasTexture>();
let shadowTex: THREE.CanvasTexture | null = null;
function blobTex() {
  if (!shadowTex) shadowTex = canvasTex(32, 32, (c) => { const g = c.createRadialGradient(16, 16, 2, 16, 16, 16); g.addColorStop(0, 'rgba(0,0,0,0.6)'); g.addColorStop(1, 'rgba(0,0,0,0)'); c.fillStyle = g; c.fillRect(0, 0, 32, 32); });
  return shadowTex;
}
function litNormals(g: THREE.BufferGeometry) { const n = g.attributes.normal; for (let i = 0; i < n.count; i++) n.setXYZ(i, 0, 0.75, 0.66); n.needsUpdate = true; }

export class Actor {
  mesh: THREE.Mesh; shadow: THREE.Mesh; map: THREE.CanvasTexture; x = 0; z = 0; y = 0; dir = 'f'; pose: string | null = null; moving = false; t = Math.random() * 3;
  target: { x: number; z: number; speed: number; res: () => void } | null = null; hidden = false; charId = ''; group = new THREE.Group(); mask?: string; roll = 0; alpha = 1; float = 0; danceBeat = 0;
  constructor(charId: string, public id = charId) {
    const geo = new THREE.PlaneGeometry(FW / PPU, FH / PPU); geo.translate(0, FH / PPU / 2, 0); litNormals(geo);
    this.map = null as any; this.mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ alphaTest: 0.5, side: THREE.DoubleSide, transparent: false }));
    this.mesh.castShadow = true; this.setChar(charId);
    this.shadow = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.9), new THREE.MeshBasicMaterial({ map: blobTex(), transparent: true, depthWrite: false })); this.shadow.rotation.x = -Math.PI / 2; this.shadow.position.y = 0.03;
    this.group.add(this.mesh, this.shadow);
  }
  setChar(charId: string) {
    if (this.charId === charId) return; this.charId = charId;
    let base = sheetTex.get(charId);
    if (!base) { base = new THREE.CanvasTexture(charSheet(charId)); base.magFilter = base.minFilter = THREE.NearestFilter; base.generateMipmaps = false; base.colorSpace = THREE.SRGBColorSpace; sheetTex.set(charId, base); }
    if (this.map) this.map.dispose(); this.map = base.clone(); this.map.needsUpdate = true; this.map.repeat.set(1 / FRAMES.length, 1 / 3);
    (this.mesh.material as THREE.MeshLambertMaterial).map = this.map; (this.mesh.material as any).needsUpdate = true;
  }
  get def() { return CHARS[this.charId]; }
  place(x: number, z: number, dir?: string) { this.x = x; this.z = z; if (dir) this.dir = dir; this.sync(); return this; }
  face(tx: number, tz: number) { const dx = tx - this.x, dz = tz - this.z; this.dir = Math.abs(dx) > Math.abs(dz) ? (dx > 0 ? 'r' : 'l') : (dz > 0 ? 'f' : 'b'); }
  walkTo(x: number, z: number, speed = 4): Promise<void> { if (this.target) this.target.res(); if ((globalThis as any).__G?.fast) { this.place(x, z, this.dir); return Promise.resolve(); } return new Promise((res) => { this.target = { x, z, speed, res }; }); }
  stop() { if (this.target) { const r = this.target.res; this.target = null; r(); } this.moving = false; }
  update(dt: number) {
    this.t += dt;
    if (this.target) {
      const dx = this.target.x - this.x, dz = this.target.z - this.z, l = Math.hypot(dx, dz), s = this.target.speed * dt;
      if (l <= s) { this.x = this.target.x; this.z = this.target.z; const r = this.target.res; this.target = null; this.moving = false; r(); }
      else { this.x += dx / l * s; this.z += dz / l * s; this.face(this.target.x, this.target.z); this.moving = true; }
    }
    this.sync();
  }
  sync() {
    let frame = this.pose || (this.moving ? 'walk' + (Math.floor(this.t * 8) % 4) : 'idle' + (Math.floor(this.t * 1.6) % 2));
    if (this.pose === 'dance') frame = (Math.floor(this.danceBeat) % 2) ? 'dance1' : 'dance2';
    const col = Math.max(0, FRAMES.indexOf(frame)), row = this.dir === 'f' ? 0 : this.dir === 'b' ? 1 : 2, n = FRAMES.length;
    const flip = this.dir === 'l';
    this.map.repeat.x = (flip ? -1 : 1) / n; this.map.offset.set((col + (flip ? 1 : 0)) / n, 1 - (row + 1) / 3);
    this.group.position.set(this.x, this.y + this.float, this.z); this.mesh.rotation.z = this.roll;
    this.group.visible = !this.hidden; this.shadow.visible = this.y + this.float < 0.6;
    const m = this.mesh.material as THREE.MeshLambertMaterial; if (this.alpha < 1) { m.transparent = true; m.opacity = this.alpha; m.alphaTest = 0.05; } else if (m.transparent) { m.transparent = false; m.opacity = 1; m.alphaTest = 0.5; }
  }
  dispose() { this.map.dispose(); this.mesh.geometry.dispose(); (this.mesh.material as THREE.Material).dispose(); this.shadow.geometry.dispose(); (this.shadow.material as THREE.Material).dispose(); }
}

export interface Guard { actor: Actor; path: number[][]; i: number; speed: number; range: number; half: number; cone: THREE.Mesh; wait: number; onCatch: (G: any) => any; ang: number; off: number; pause: number; active: boolean; }
export interface Laser { mesh: THREE.Mesh; x0: number; z0: number; x1: number; z1: number; period: number; duty: number; phase: number; on: boolean; onHit: (G: any) => any; active: boolean; }

export class Room {
  group = new THREE.Group(); boxes: Box[] = []; inters: Inter[] = []; triggers: Trigger[] = []; actors: Actor[] = []; spawns: Record<string, { x: number; z: number; dir: string }> = {};
  masked: { obj: THREE.Object3D; mask: string; box?: Box }[] = []; updaters: ((dt: number, t: number) => void)[] = []; photos: { id: string; name: string; x: number; z: number; cond?: () => boolean; mask?: string }[] = [];
  guards: Guard[] = []; lasers: Laser[] = []; occluders: { mesh: THREE.Mesh; x0: number; x1: number; z: number; h: number }[] = []; props: { x: number; z: number; y: number; w: number; kind: string; box?: Box }[] = []; flick: { l: THREE.Light; base: number; s: number }[] = []; named: Record<string, any> = {};
  constructor(public id: string, public def: RoomDef) {}
  actor(id: string) { return this.actors.find((a) => a.id === id); }
  inter(id: string) { return this.inters.find((a) => a.id === id); }
  dispose() {
    this.group.traverse((o: any) => { if (o.geometry) o.geometry.dispose(); if (o.material) { const ms = Array.isArray(o.material) ? o.material : [o.material]; for (const m of ms) { if (m.map && m.map.userData.own) m.map.dispose(); m.dispose(); } } });
    for (const a of this.actors) a.dispose();
  }
}

/** Объёмный луч: мягкое затухание к краям конуса (по углу к камере) и по длине, аддитивно, как свет в пыли. */
function volumeMat(color: number, strength: number) {
  return new THREE.ShaderMaterial({ transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
    uniforms: { col: { value: new THREE.Color(color) }, k: { value: strength }, time: { value: 0 } },
    vertexShader: 'varying vec3 vN; varying vec3 vV; varying float vL; void main(){ vec4 wp = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); vL = uv.y; gl_Position = projectionMatrix * viewMatrix * wp; }',
    fragmentShader: 'uniform vec3 col; uniform float k; varying vec3 vN; varying vec3 vV; varying float vL; float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); } void main(){ float edge = pow(abs(dot(normalize(vN), vV)), 1.6); float along = pow(clamp(vL, 0.0, 1.0), 0.8); float n = 0.85 + 0.15 * h(floor(gl_FragCoord.xy / 3.0)); gl_FragColor = vec4(col * edge * along * k * n, 1.0); }' });
}
export class Builder {
  constructor(public room: Room, public G: any) {}
  slots: Record<string, { a0: number; a1: number; y0: number; y1: number; fixed: boolean; obj?: THREE.Object3D; axis?: 'x' | 'z'; follow: THREE.Object3D[] }[]> = { n: [], w: [], e: [] };
  private overlaps(wall: string, a0: number, a1: number, y0: number, y1: number, skip?: any) { return this.slots[wall].some((q) => q !== skip && a0 < q.a1 - 0.02 && a1 > q.a0 + 0.02 && y0 < q.y1 - 0.02 && y1 > q.y0 + 0.02); }
  /** Найти свободное место на стене рядом с желаемым; вернуть смещение. */
  private freeAlong(wall: string, a: number, half: number, y0: number, y1: number, skip?: any) {
    const lim = (wall === 'n' ? this.w : this.d) / 2 - half - 0.1;
    for (let k = 0; k < 60; k++) { const d = (k % 2 ? 1 : -1) * Math.ceil(k / 2) * 0.2; const c = Math.max(-lim, Math.min(lim, a + d)); if (!this.overlaps(wall, c - half, c + half, y0, y1, skip)) return c; }
    return a;
  }
  /** Регистрирует предмет на стене. fixed (двери, окна) сдвигают уже стоящий декор. Возвращает итоговую координату вдоль стены. */
  wallSlot(wall: 'n' | 'w' | 'e', a: number, w: number, y: number, h: number, o: { fixed?: boolean; obj?: THREE.Object3D } = {}) {
    const half = w / 2, y0 = y - h / 2, y1 = y + h / 2; const list = this.slots[wall]; const axis = wall === 'n' ? 'x' : 'z';
    if (o.fixed) {
      const slot = { a0: a - half, a1: a + half, y0, y1, fixed: true, obj: o.obj, axis, follow: [] as THREE.Object3D[] }; list.push(slot as any);
      for (const q of list) if (q !== slot && !q.fixed && q.a0 < slot.a1 && q.a1 > slot.a0 && q.y0 < y1 && q.y1 > y0) { const c0 = (q.a0 + q.a1) / 2, hw = (q.a1 - q.a0) / 2; const c = this.freeAlong(wall, c0, hw, q.y0, q.y1, q); const dd = c - c0; q.a0 += dd; q.a1 += dd; for (const ob of [q.obj, ...q.follow]) if (ob) (ob.position as any)[axis] += dd; }
      return a;
    }
    const c = this.freeAlong(wall, a, half, y0, y1); const slot = { a0: c - half, a1: c + half, y0, y1, fixed: false, obj: o.obj, axis, follow: [] as THREE.Object3D[] }; list.push(slot as any); if (o.obj) o.obj.userData.slot = slot; return c;
  }
  get w() { return this.room.def.w; } get d() { return this.room.def.d; }
  private mat(o: any, fallback = 'plaster'): THREE.MeshLambertMaterial {
    if (o.color && !o.tex) return new THREE.MeshLambertMaterial({ color: o.color, emissive: o.emissive || 0, emissiveIntensity: o.ei ?? 1, transparent: o.opacity != null, opacity: o.opacity ?? 1 });
    return new THREE.MeshLambertMaterial({ map: tex(o.tex || fallback, o.tint), emissive: o.emissive || 0, emissiveIntensity: o.ei ?? 1, transparent: o.opacity != null, opacity: o.opacity ?? 1 });
  }
  private texBox(w: number, h: number, d: number, o: any, fallback?: string) {
    const g = new THREE.BoxGeometry(w, h, d), m = this.mat(o, fallback);
    if (m.map) { const u = (m.map as any).unit || 2, uv = g.attributes.uv, dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]]; for (let f = 0; f < 6; f++) for (let i = 0; i < 4; i++) { const k = f * 4 + i; uv.setXY(k, uv.getX(k) * dims[f][0] / u, uv.getY(k) * dims[f][1] / u); } }
    return new THREE.Mesh(g, m);
  }
  private tag(obj: THREE.Object3D, o: any, box?: Box) { if (o.mask) this.room.masked.push({ obj, mask: o.mask, box }); if (o.name) this.room.named[o.name] = obj; }
  floor(t = 'floor', o: any = {}) {
    const apron = o.apron ?? (o.d == null && o.z == null && !o.y ? 7 : 0); // продлеваем пол к зрителю (визуально, без коллизий)
    const m = this.texBox(o.w || this.w, 0.4, (o.d || this.d) + apron, { tex: t, ...o }); m.position.set(o.x || 0, -0.2 + (o.y || 0), (o.z || 0) + apron / 2); m.receiveShadow = true; this.room.group.add(m); this.tag(m, o); return m;
  }
  /** Стены-«разрез»: задняя и боковые, передняя — открыта к камере. */
  walls(t = 'plaster', o: any = {}) {
    const h = o.h || 5, w = this.w, d = this.d, th = 0.4;
    const mk = (ww: number, dd: number, x: number, z: number) => { const m = this.texBox(ww, h, dd, { tex: t, ...o }); m.position.set(x, h / 2, z); m.receiveShadow = true; this.room.group.add(m); return m; };
    if (o.n !== false) mk(w + th * 2, th, 0, -d / 2 - th / 2);
    if (o.w !== false) mk(th, d, -w / 2 - th / 2, 0);
    if (o.e !== false) mk(th, d, w / 2 + th / 2, 0);
    if (o.trim) { const tr = this.texBox(w, 0.5, 0.1, { tex: o.trim }); tr.position.set(0, 0.25, -d / 2 + 0.05); this.room.group.add(tr); const t2 = this.texBox(w, 0.3, 0.15, { tex: o.trim }); t2.position.set(0, h - 0.15, -d / 2 + 0.07); this.room.group.add(t2); }
  }
  collider(x0: number, z0: number, x1: number, z1: number): Box { const b = { x0: Math.min(x0, x1), z0: Math.min(z0, z1), x1: Math.max(x0, x1), z1: Math.max(z0, z1), on: true }; this.room.boxes.push(b); return b; }
  box(x: number, z: number, w: number, d: number, h: number, o: any = {}) {
    const m = this.texBox(w, h, d, o, 'wood'); m.position.set(x, (o.y || 0) + h / 2, z); m.castShadow = o.cast !== false; m.receiveShadow = true; if (o.ry) m.rotation.y = o.ry; this.room.group.add(m);
    let b: Box | undefined; if (o.solid !== false && !(o.y > 2.2)) { b = this.collider(x - w / 2, z - d / 2, x + w / 2, z + d / 2); (m.userData as any).box = b; }
    this.tag(m, o, b); return m;
  }
  /** Плоская картинка: на стене ('n' | 'w' | 'e') или в произвольном месте. */
  decal(t: THREE.Texture, o: any = {}) {
    const img: any = t.image, w = o.w || (t.userData.lw ?? img.width) / PPU, h = o.h || (t.userData.lh ?? img.height) / PPU;
    const mat = o.glow ? new THREE.MeshBasicMaterial({ map: t, transparent: true, alphaTest: 0.1, color: o.color || 0xffffff }) : new THREE.MeshLambertMaterial({ map: t, transparent: true, alphaTest: 0.1 });
    if (o.opacity != null) { mat.opacity = o.opacity; mat.alphaTest = 0.01; }
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat); const y = (o.y ?? 2.4);
    const onWall = !o.flat && !o.noSlot && (o.wall === 'w' || o.wall === 'e' || (o.z == null || Math.abs(o.z - (-this.d / 2 + 0.03)) < 0.15));
    if (o.wall === 'w') { m.position.set(-this.w / 2 + 0.03, y, onWall ? this.wallSlot('w', o.at || 0, w, y, h, { obj: m }) : o.at || 0); m.rotation.y = Math.PI / 2; }
    else if (o.wall === 'e') { m.position.set(this.w / 2 - 0.03, y, onWall ? this.wallSlot('e', o.at || 0, w, y, h, { obj: m }) : o.at || 0); m.rotation.y = -Math.PI / 2; }
    else if (o.flat) { m.position.set(o.x || 0, o.y ?? 0.03, o.z || 0); m.rotation.x = -Math.PI / 2; }
    else { const x0 = o.x ?? o.at ?? 0; m.position.set(onWall && w < this.w * 0.6 ? this.wallSlot('n', x0, w, y, h, { obj: m }) : x0, y, o.z ?? (-this.d / 2 + 0.03)); }
    if (o.ry) m.rotation.y = o.ry; m.receiveShadow = !o.glow; this.room.group.add(m); this.tag(m, o); return m;
  }
  poster(title: string, sub: string, o: any = {}) { return this.decal(poster(title, sub, o), o); }
  /** Билборд-реквизит (спрайт стоит на полу лицом к камере). */
  sprite(kind: string | THREE.Texture, x: number, z: number, o: any = {}) {
    const t = typeof kind === 'string' ? propTex(kind) : kind, img: any = t.image, s = o.scale || 1, w = (t.userData.lw ?? img.width) / PPU * s, h = (t.userData.lh ?? img.height) / PPU * s;
    const g = new THREE.PlaneGeometry(w, h); g.translate(0, h / 2, 0); if (!o.glow) litNormals(g);
    const mat = o.glow ? new THREE.MeshBasicMaterial({ map: t, alphaTest: 0.3, side: THREE.DoubleSide, transparent: o.opacity != null, opacity: o.opacity ?? 1 }) : new THREE.MeshLambertMaterial({ map: t, alphaTest: 0.3, side: THREE.DoubleSide, emissive: o.emissive || 0 });
    const m = new THREE.Mesh(g, mat); m.position.set(x, o.y || 0, z); m.castShadow = o.cast !== false && !o.glow; if (o.flipX) m.scale.x = -1; this.room.group.add(m);
    if (!o.glow && !o.thin && h > 0.8 && !o.mask) { // толщина «картонки»: несколько тёмных слоёв позади, чтобы мебель не читалась плоской
      const n = Math.min(4, 2 + Math.floor(h / 2)); for (let i = 1; i <= n; i++) { const bm = new THREE.MeshLambertMaterial({ map: t, alphaTest: 0.3, side: THREE.DoubleSide, color: new THREE.Color().setScalar(0.62 - i * 0.07) }); const back = new THREE.Mesh(g, bm); back.position.z = -0.055 * i; back.castShadow = false; m.add(back); }
    }
    let b: Box | undefined; if (o.solid) { const r = o.solid === true ? Math.min(w, 1.2) / 2 : o.solid; b = this.collider(x - r, z - 0.3, x + r, z + 0.3); (m.userData as any).box = b; }
    this.room.props.push({ x, z, y: o.y || 0, w, kind: typeof kind === 'string' ? kind : 'tex', box: b }); this.tag(m, o, b); return m;
  }
  actor(charId: string, x: number, z: number, o: any = {}) {
    const a = new Actor(charId, o.id || charId); a.place(x, z, o.dir || 'f'); if (o.pose) a.pose = o.pose; a.mask = o.mask; if (o.hidden) a.hidden = true;
    this.room.actors.push(a); this.room.group.add(a.group); if (o.mask) this.room.masked.push({ obj: a.group, mask: o.mask }); return a;
  }
  inter(id: string, x: number, z: number, o: { label: string; fn: (G: any) => any; r?: number; mask?: string; cond?: () => boolean; y?: number; quiet?: boolean; photo?: string }): Inter {
    const it: Inter = { id, x, z, r: o.r || 1.7, label: o.label, fn: o.fn, mask: o.mask, cond: o.cond, y: o.y ?? 2.2, enabled: true, quiet: o.quiet };
    if (!o.quiet) { const mk = new THREE.Mesh(new THREE.OctahedronGeometry(0.13), new THREE.MeshBasicMaterial({ color: 0xffe9a0 })); mk.position.set(x, it.y + 0.5, z); it.marker = mk; this.room.group.add(mk); }
    this.room.inters.push(it); if (o.photo) this.photo(id, o.photo, x, z, { cond: o.cond, mask: o.mask }); return it;
  }
  /** Осмотр: объект с репликами. */
  look(id: string, x: number, z: number, label: string, lines: any[] | ((G: any) => any), o: any = {}) { const base = typeof lines === 'function' ? lines : (G: any) => G.run(lines); const fn = o.egg ? async (G: any) => { await base(G); G.egg(o.egg); } : base; const it = this.inter(id, x, z, { label, ...o, fn }); if (o.egg) (it as any).egg = o.egg; return it; }
  npc(charId: string, x: number, z: number, o: any = {}) {
    const a = this.actor(charId, x, z, o); const b = this.collider(x - 0.4, z - 0.25, x + 0.4, z + 0.25); (a as any).box = b;
    if (o.mask) this.room.masked.push({ obj: new THREE.Object3D(), mask: o.mask, box: b });
    if (o.talk) this.inter(o.id || charId, x, z + 0.2, { label: o.label || ('Поговорить: ' + CHARS[charId].name), fn: async (G) => { a.face(G.player.x, G.player.z); G.player.face(a.x, a.z); await (typeof o.talk === 'function' ? o.talk(G, a) : G.run(o.talk)); }, r: 1.9, y: 2.6, mask: o.mask, cond: o.cond });
    return a;
  }
  /** Дверь на задней стене или в произвольном месте. */
  door(id: string, x: number, o: { to?: string; spot?: string; label: string; cond?: () => boolean; locked?: string | any[]; z?: number; col?: string; fn?: (G: any) => any; fade?: string; mask?: string; sign?: string; glow?: string; w?: number; h?: number; wall?: 'w' | 'e' | 's'; double?: boolean }) {
    const W = o.w || 2.2, H = o.h || 3.4; let ix = x, iz: number; let g: THREE.Object3D;
    if (o.wall === 's') { g = this.southExit(x, o.sign || o.label); iz = this.d / 2 - 1.7; }
    else {
      g = door3D(W, H, o.col || '#5a3a22', o.sign, !!o.double || W > 2.6, o.glow);
      if (o.wall === 'w' || o.wall === 'e') { const s = o.wall === 'w' ? -1 : 1; const at = this.wallSlot(o.wall, x, W + 0.8, H / 2, H + 0.6, { fixed: true, obj: g }); g.position.set(s * (this.w / 2), 0, at); g.rotation.y = -s * Math.PI / 2; ix = s * (this.w / 2 - 0.9); iz = at; }
      else { const z = o.z ?? (-this.d / 2); g.position.set(x, 0, z); if (o.z == null) this.wallSlot('n', x, W + 0.8, H / 2, H + 0.6, { fixed: true, obj: g }); iz = z + 0.9; }
      this.room.group.add(g); this.tag(g, { mask: o.mask });
    }
    this.inter(id, ix, iz, { label: o.label, mask: o.mask, y: o.wall === 's' ? 2.7 : 3.2, fn: async (G) => {
      if (o.cond && !o.cond()) { G.sfx('locked'); if (o.locked) await G.run(typeof o.locked === 'string' ? ['~: ' + o.locked] : o.locked); return; }
      if (o.fn) return o.fn(G); if (o.wall !== 's') { G.sfx('door'); swingDoor(g); } else G.sfx('step'); await G.goto(o.to!, o.spot || 'start', { fade: o.fade });
    } });
    return g;
  }
  /** Выход у открытой (южной) стороны: проём-арка с табличкой и ступенями, видимый камерой. */
  southExit(x: number, label: string) {
    // низкий порог у открытой стороны: ковровая дорожка за край, светящаяся стрелка, латунные столбики и наклонная табличка (ничего не закрывает героиню)
    const g = new THREE.Group(); const z = this.d / 2 - 1.2; const gold = new THREE.MeshLambertMaterial({ map: tex('gold') });
    const run = this.texBox(2.2, 0.03, 3.2, { tex: 'carpet' }); run.position.set(x, 0.015, z + 1.2); run.receiveShadow = true; g.add(run);
    for (const sx of [-1, 1]) {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.95, 8), gold); p.position.set(x + sx * 1.35, 0.48, z); p.castShadow = true; g.add(p);
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 0.06, 12), gold); base.position.set(x + sx * 1.35, 0.03, z); g.add(base);
      const ball = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), gold); ball.position.set(x + sx * 1.35, 1.0, z); g.add(ball);
    }
    const txt = label.length > 24 ? label.slice(0, 23) + '…' : label; const tw = Math.max(64, Math.min(140, txt.length * 6 + 26));
    const plate = new THREE.Mesh(new THREE.PlaneGeometry(tw / 40, 0.42), new THREE.MeshBasicMaterial({ map: canvasTex(tw, 17, (c) => { c.fillStyle = '#123a22'; c.fillRect(0, 0, tw, 17); c.strokeStyle = '#d4ae48'; c.strokeRect(0.5, 0.5, tw - 1, 16); c.fillStyle = '#7dffb0'; c.fillRect(4, 7, 7, 3); c.fillRect(6, 5, 2, 7); c.fillRect(5, 6, 4, 5); ptext(c, txt, tw / 2 + 5, 5, { size: 7, col: '#e8fff0', align: 'center' }); }, 'sexit2' + label) }));
    plate.position.set(x, 0.32, z + 0.25); plate.rotation.x = -1.0; g.add(plate);
    const stand = new THREE.Mesh(new THREE.BoxGeometry(tw / 40 + 0.1, 0.06, 0.4), gold); stand.position.set(x, 0.1, z + 0.18); g.add(stand);
    const arrow = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.9), new THREE.MeshBasicMaterial({ map: canvasTex(16, 16, (c) => { c.fillStyle = '#ffe9a8'; for (let i = 0; i < 6; i++) c.fillRect(2 + i, 4 + i, 12 - i * 2, 1); c.fillRect(6, 0, 4, 5); }, 'sarrow'), transparent: true, opacity: 0.85 }));
    arrow.rotation.x = -Math.PI / 2; arrow.position.set(x, 0.035, z + 1.3); g.add(arrow);
    const l = new THREE.PointLight(0x9fffc8, 3, 4, 1.6); l.position.set(x, 0.8, z + 0.6); g.add(l);
    this.room.group.add(g); return g;
  }
  /** Внутренняя стена: коллизия + становится полупрозрачной, когда заслоняет героиню. */
  wall(x0: number, z0: number, x1: number, z1: number, o: any = {}) {
    const w = Math.abs(x1 - x0) || 0.4, d = Math.abs(z1 - z0) || 0.4, h = o.h || 4.2;
    const m = this.box((x0 + x1) / 2, (z0 + z1) / 2, w, d, h, { tex: o.tex || 'plaster', tint: o.tint, ...o }); const mat = m.material as THREE.MeshLambertMaterial; mat.transparent = true;
    const ox0 = o.wide ? -this.w / 2 : Math.min(x0, x1) - 0.4, ox1 = o.wide ? this.w / 2 : Math.max(x0, x1) + 0.4; this.room.occluders.push({ mesh: m, x0: ox0, x1: ox1, z: Math.max(z0, z1), h, depth: o.depth } as any);
    if (o.trim !== false) { const tr = this.box((x0 + x1) / 2, (z0 + z1) / 2, w + 0.06, d + 0.06, 0.25, { tex: 'darkwood', y: h - 0.25, solid: false, cast: false }); const tm = tr.material as THREE.MeshLambertMaterial; tm.transparent = true; this.room.occluders.push({ mesh: tr, x0: ox0, x1: ox1, z: Math.max(z0, z1), h, depth: o.depth } as any); }
    return m;
  }
  /** Ступени: визуальная лестница вверх вдоль -Z (без коллизии подъёма — это переход между этажами). */
  stairs(x: number, z: number, w: number, n = 8, o: any = {}) {
    const g = new THREE.Group(); for (let i = 0; i < n; i++) { const s = this.texBox(w, 0.28, 0.5, { tex: o.tex || 'stage' }); s.position.set(x, 0.14 + i * 0.28, z - i * 0.5); s.receiveShadow = true; s.castShadow = true; g.add(s); if (o.runner !== false) { const r = this.texBox(w * 0.55, 0.02, 0.52, { tex: 'carpet' }); r.position.set(x, 0.29 + i * 0.28, z - i * 0.5); g.add(r); } }
    this.room.group.add(g); this.collider(x - w / 2, z - n * 0.5, x + w / 2, z - 0.6); return g;
  }
  spawn(name: string, x: number, z: number, dir = 'f') { this.room.spawns[name] = { x, z, dir }; }
  ambient(color: number, int: number, sky?: number) { const l = sky != null ? new THREE.HemisphereLight(sky, color, int) : new THREE.AmbientLight(color, int); this.room.group.add(l); return l; }
  sun(color: number, int: number, x = 6, y = 14, z = 8) { const l = new THREE.DirectionalLight(color, int); l.position.set(x, y, z); l.castShadow = true; l.shadow.mapSize.set(1024, 1024); const s = Math.max(this.w, this.d) / 2 + 4; Object.assign(l.shadow.camera, { left: -s, right: s, top: s, bottom: -s, near: 1, far: 60 }); l.shadow.bias = -0.002; this.room.group.add(l, l.target); return l; }
  light(x: number, y: number, z: number, color: number, int: number, dist = 12, o: any = {}) { const l = new THREE.PointLight(color, int, dist, 1.4); l.position.set(x, y, z); this.room.group.add(l); if (o.flicker) this.room.flick.push({ l, base: int, s: o.flicker }); if (o.mask) this.room.masked.push({ obj: l, mask: o.mask }); if (o.name) this.room.named[o.name] = l; return l; }
  spot(x: number, y: number, z: number, tx: number, tz: number, color: number, int: number, o: any = {}) {
    const l = new THREE.SpotLight(color, int, o.dist || 40, o.angle || 0.45, o.pen ?? 0.5, 1.1); l.position.set(x, y, z); l.target.position.set(tx, 0, tz);
    if (o.shadow !== false) { l.castShadow = true; l.shadow.mapSize.set(1024, 1024); l.shadow.bias = -0.003; l.shadow.camera.near = 1; l.shadow.camera.far = 50; }
    this.room.group.add(l, l.target);
    if (o.cone) { // видимый «объёмный» луч
      const len = Math.hypot(tx - x, y, tz - z), rad = Math.tan(o.angle || 0.45) * len; const g = new THREE.ConeGeometry(rad, len, 32, 8, true); g.translate(0, -len / 2, 0); g.rotateX(-Math.PI / 2);
      const cm = new THREE.Mesh(g, volumeMat(color, (o.cone === true ? 0.07 : o.cone) * 2.2));
      cm.position.set(x, y, z); cm.lookAt(tx, 0, tz); cm.rotateY(Math.PI); this.room.group.add(cm); (l as any).cone = cm;
    }
    if (o.name) this.room.named[o.name] = l; if (o.mask) this.room.masked.push({ obj: l, mask: o.mask }); return l;
  }
  trigger(x0: number, z0: number, x1: number, z1: number, fn: (G: any) => any, once = true) { const t = { x0, z0, x1, z1, fn, once, done: false, inside: false }; this.room.triggers.push(t); return t; }
  photo(id: string, name: string, x: number, z: number, o: any = {}) { this.room.photos.push({ id, name, x, z, cond: o.cond, mask: o.mask, any: o.any } as any); }
  onUpdate(fn: (dt: number, t: number) => void) { this.room.updaters.push(fn); }
  /** Частицы: пыль в лучах, дождь, лепестки, искры, снег. */
  particles(kind: 'dust' | 'rain' | 'petals' | 'sparks' | 'snow' | 'confetti' | 'glitch', o: any = {}) {
    const n = o.count || (kind === 'rain' ? 500 : 120), w = this.w + 4, d = this.d + 4, top = o.top || 9;
    const pos = new Float32Array(n * 3), vel = new Float32Array(n);
    for (let i = 0; i < n; i++) { pos[i * 3] = (Math.random() - 0.5) * w; pos[i * 3 + 1] = Math.random() * top; pos[i * 3 + 2] = (Math.random() - 0.5) * d; vel[i] = 0.5 + Math.random(); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const col: any = { dust: 0xffe8c0, rain: 0x9ab8e0, petals: 0xf8b0d0, sparks: 0xffc060, snow: 0xffffff, confetti: 0xffd060, glitch: 0x60ffe0 }[kind];
    const m = new THREE.Points(g, new THREE.PointsMaterial({ color: o.color || col, size: kind === 'rain' ? 0.09 : kind === 'dust' ? 0.07 : 0.14, transparent: true, opacity: kind === 'dust' ? 0.5 : 0.8, depthWrite: false, blending: kind === 'petals' || kind === 'snow' ? THREE.NormalBlending : THREE.AdditiveBlending }));
    this.room.group.add(m); const sp = { dust: 0.15, rain: 18, petals: 1.2, sparks: -1.5, snow: 1, confetti: 2, glitch: -3 }[kind];
    this.onUpdate((dt, t) => { if (!m.visible) return; for (let i = 0; i < n; i++) { pos[i * 3 + 1] -= sp * vel[i] * dt; if (kind !== 'rain') pos[i * 3] += Math.sin(t * vel[i] + i) * dt * 0.3; if (pos[i * 3 + 1] < 0) pos[i * 3 + 1] = top; if (pos[i * 3 + 1] > top) pos[i * 3 + 1] = 0; } g.attributes.position.needsUpdate = true; });
    if (o.name) this.room.named[o.name] = m; this.tag(m, o); return m;
  }
  /** Страж с конусом зрения, ходит по маршруту. */
  guard(charId: string, path: number[][], o: { speed?: number; range?: number; half?: number; onCatch: (G: any) => any; id?: string; pause?: number; color?: number }) {
    const a = this.actor(charId, path[0][0], path[0][1], { id: o.id }); (a.mesh.material as THREE.MeshLambertMaterial).emissive.set(0x3a3438); const eye = new THREE.PointLight(o.color || 0xff4040, 3, 3, 1.5); eye.position.set(0, 2.6, 0.4); a.group.add(eye); const range = o.range || 5, half = o.half || 0.5;
    const g = new THREE.CircleGeometry(range, 16, -half, half * 2); g.rotateX(-Math.PI / 2);
    const cone = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: o.color || 0xff4040, transparent: true, opacity: 0.14, depthWrite: false })); cone.position.y = 0.05; this.room.group.add(cone);
    const gd: Guard = { actor: a, path, i: 0, speed: o.speed || 2.2, range, half, cone, wait: 0, onCatch: o.onCatch, ang: 0, off: 0, pause: o.pause ?? 0.8, active: true }; this.room.guards.push(gd); return gd;
  }
  laser(x0: number, z0: number, x1: number, z1: number, o: { period?: number; duty?: number; phase?: number; onHit: (G: any) => any; color?: number }) {
    const len = Math.hypot(x1 - x0, z1 - z0); const m = new THREE.Mesh(new THREE.BoxGeometry(len, 0.08, 0.08), new THREE.MeshBasicMaterial({ color: o.color || 0xff2050 }));
    m.position.set((x0 + x1) / 2, 1.0, (z0 + z1) / 2); m.rotation.y = -Math.atan2(z1 - z0, x1 - x0); this.room.group.add(m);
    const m2 = m.clone(); m2.position.y = 1.9; m.add(m2); m2.position.set(0, 0.9, 0); m2.rotation.set(0, 0, 0);
    const l: Laser = { mesh: m, x0, z0, x1, z1, period: o.period || 3, duty: o.duty ?? 0.5, phase: o.phase || 0, on: true, onHit: o.onHit, active: true }; this.room.lasers.push(l); return l;
  }
  /** Набор зрителей в зале (спины). */
  crowd(ids: string[], x0: number, z0: number, cols: number, dx = 1.5, dz = 1.6, dir = 'b') { ids.forEach((id, i) => this.actor(id, x0 + (i % cols) * dx + (Math.floor(i / cols) % 2) * 0.5, z0 + Math.floor(i / cols) * dz, { dir, id: 'crowd_' + i + '_' + id })); }
  table(x: number, z: number, w = 2.4, d = 1.2, o: any = {}) { const top = this.box(x, z, w, d, 0.15, { tex: o.tex || 'wood', y: 1.0, ...o }); for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) this.box(x + sx * (w / 2 - 0.15), z + sz * (d / 2 - 0.15), 0.15, 0.15, 1, { tex: 'darkwood', solid: false, mask: o.mask }); return top; }
  curtain(x: number, z: number, w: number, h = 6, o: any = {}) { return this.box(x, z, w, 0.3, h, { tex: 'velvet', solid: o.solid ?? false, ...o }); }
}
(globalThis as any).__charSheet = charSheet; // отладка: листы спрайтов
