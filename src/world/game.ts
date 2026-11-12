// Главный игровой объект G: цикл, управление, камера, переходы между комнатами, маски, фотоаппарат,
// исполнитель диалоговых данных, флаги и сохранения. Главы получают G и строят на нём свои сцены.
import * as THREE from 'three';
import { Renderer, Grade } from '../gfx/render';
import { Room, RoomDef, Builder, Actor, Inter } from './room';
import { audio } from '../core/audio';
import * as input from '../core/input';
import { GameState, newState, writeSave, settings } from '../core/state';
import { CHARS } from '../data/chars';
import { portrait } from '../gfx/portraits';
import { NOTES, ITEMS } from '../data/notes';
import { MECH, EGGS } from '../data/quests';
import { ui } from '../ui/ui';

const LOADERS: Record<string, () => Promise<{ rooms: Record<string, RoomDef> }>> = {
  hub: () => import('../chapters/hub'), pol: () => import('../chapters/polina'), rub: () => import('../chapters/ruben'), mat: () => import('../chapters/matvey'),
  eri: () => import('../chapters/erika'), liz: () => import('../chapters/lisa'), ang: () => import('../chapters/angelina'), fin: () => import('../chapters/finale'),
};
const ROOMS: Record<string, RoomDef> = {};
const MASK_GRADE: Record<string, Grade> = {
  comedy: { sat: 1.35, tint: [1.08, 1.02, 0.86], vig: 0.2, bright: 1.08 },
  tragedy: { sat: 0.35, tint: [0.82, 0.9, 1.12], vig: 0.6, bright: 0.9, contrast: 1.1 },
  drama: { sat: 0.9, tint: [1.1, 0.9, 0.92], vig: 0.55, bright: 1.0 },
};
export const MASK_NAMES: Record<string, string> = { comedy: 'Комедия', tragedy: 'Трагедия', drama: 'Драма' };
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

class Game {
  R!: Renderer; state: GameState = newState(); room: Room | null = null; player!: Actor; lock = 0; paused = false; running = false; t = 0;
  cam = { x: 0, z: 0, dist: 24, focus: null as null | { x: number; z: number; dist: number }, shake: 0, roll: 0, pitch: 0.56, yOff: 1.2 };
  near: Inter | null = null; trail: { x: number; z: number }[] = []; followers: Actor[] = []; stepT = 0; busy = false; inPhoto = false; fast = false;
  playerSpeed = 5.6; override: null | ((dt: number) => void) = null; debug = false; gradeBase: Grade = {};
  audio = audio; ui = ui; menuScene: any = null; questT = 0;

  boot(canvas: HTMLCanvasElement) {
    this.R = new Renderer(canvas); this.debug = new URLSearchParams(location.search).has('debug');
    let last = performance.now();
    const loop = (now: number) => { const dt = Math.min(0.05, (now - last) / 1000); last = now; try { this.frame(dt); } catch (e) { console.error('[game] ошибка кадра', e); } requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
    input.onAction((a) => this.onAction(a));
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.running && !this.paused && !ui.modal) ui.pause(); });
    window.addEventListener('beforeunload', (e) => { if (this.running && this.lock > 0 && !this.debug) { e.preventDefault(); e.returnValue = ''; } });
  }
  // ---------- флаги, предметы, блокнот ----------
  get f() { return this.state.f; }
  flag(k: string) { return this.state.f[k]; }
  set(k: string | Record<string, any>, v: any = true) { if (typeof k === 'string') this.state.f[k] = v; else Object.assign(this.state.f, k); }
  has(item: string) { return this.state.inv.includes(item); }
  give(item: string, quiet = false) { if (this.has(item)) return; this.state.inv.push(item); if (!ITEMS[item]) console.warn('[game] нет описания предмета', item); if (item === 'camera') this.mech('camera'); if (!quiet) { this.sfx('pickup'); ui.showItem(item); } else ui.toast('В инвентаре: ' + (ITEMS[item]?.name || item), '✦'); ui.hud(); }
  /** Открыть гайд механики (один раз) и сообщить, где его перечитать. */
  mech(id: string) { const m = (this.state.f.mech ||= {}); if (m[id] || !MECH[id]) return; m[id] = 1; if (!this.fast) ui.toast(`Механика: ${MECH[id].title}. Гайд — в журнале (Tab)`, '❖'); }
  egg(id: string) { const e = (this.state.f.eggs ||= {}); if (e[id] || !EGGS[id]) return; e[id] = 1; this.sfx('note'); ui.toast(`Находка: ${EGGS[id].title} (${Object.keys(e).length}/${Object.keys(EGGS).length})`, '★'); }
  take(item: string) { const i = this.state.inv.indexOf(item); if (i >= 0) this.state.inv.splice(i, 1); }
  note(id: string) { if (this.state.notes.includes(id)) return; if (!NOTES[id]) { console.warn('[game] нет записи блокнота', id); return; } this.state.notes.push(id); this.sfx('pencil'); ui.toast('Блокнот: ' + NOTES[id].title, '✎'); }
  done(ch: string) { return !!this.state.f['done_' + ch]; }
  doneCount() { return ['polina', 'ruben', 'matvey', 'erika', 'liza', 'angelina'].filter((c) => this.done(c)).length; }
  sfx(n: string, o?: any) { audio.sfx(n, o); }
  toast(t: string, icon?: string) { ui.toast(t, icon); }
  waits: { t: number; res: () => void }[] = [];
  /** Пауза сцены по игровому времени: стоит, пока игра на паузе. */
  wait(s: number): Promise<void> { if (this.fast) return Promise.resolve(); return new Promise((res) => this.waits.push({ t: s, res })); }

  // ---------- жизненный цикл ----------
  async start(state: GameState) {
    if (this.menuScene) { this.menuScene.dispose(); this.menuScene = null; }
    this.state = state; this.running = true; this.lock = 0; this.paused = false; ui.hudShow(true); setTimeout(() => { this.mech('move'); this.mech('act'); this.mech('journal'); }, 4000);
    await this.goto(state.room, state.spot, { fade: 'fade', load: true });
  }
  stopToMenu() { this.running = false; this.clearRoom(); audio.music(null); audio.ambience(null); ui.hudShow(false); }
  async save(slot = 'auto') {
    if (!this.running) return; const s = this.state; if (this.player) { s.px = this.player.x; s.pz = this.player.z; }
    try { await writeSave(slot, s); ui.saved(slot); } catch (e) { console.error('[save] не удалось сохранить', e); ui.toast('Не удалось сохранить игру: хранилище браузера недоступно', '⚠'); }
  }
  private clearRoom() { for (const w of this.waits) w.res(); this.waits = []; if (this.room) { this.R.scene.remove(this.room.group); this.room.dispose(); this.room = null; } this.followers = []; this.trail = []; this.near = null; this.override = null; ui.prompt(null); }
  async loadRoom(id: string): Promise<RoomDef> {
    if (ROOMS[id]) return ROOMS[id];
    const pre = id.split('_')[0], ld = LOADERS[pre]; if (!ld) throw new Error('Неизвестная локация: ' + id);
    ui.loading(true);
    try { const mod = await ld(); Object.assign(ROOMS, mod.rooms); } finally { ui.loading(false); }
    if (!ROOMS[id]) throw new Error('Глава не содержит локацию: ' + id); return ROOMS[id];
  }
  /** Переход в комнату. fade: fade | curtain | iris | flash | glitch | mirror | page | none */
  async goto(id: string, spot = 'start', o: { fade?: string; load?: boolean; silent?: boolean } = {}) {
    this.lock++; const from = this.room ? this.room.id : (o.load ? 'load' : '');
    const fade = this.fast ? 'none' : (o.fade || 'fade');
    try {
      if (fade !== 'none') await ui.transition(fade, 'out');
      let def: RoomDef;
      try { def = await this.loadRoom(id); } catch (e) { if (fade !== 'none') await ui.transition(fade, 'in'); throw e; }
      this.clearRoom(); this.cam.focus = null; this.cam.roll = 0;
      const room = this.room = new Room(id, def); const B = new Builder(room, this);
      this.player = new Actor(this.state.f.playerChar || 'varya', 'player');
      def.build(B, this);
      room.actors.push(this.player); room.group.add(this.player.group);
      const key = new THREE.PointLight(0xfff0dc, 2.2, 4.5, 1.5); key.position.set(0.6, 2.4, 1.6); this.player.group.add(key);
      const sp = room.spawns[spot] || room.spawns.start || { x: 0, z: 0, dir: 'f' };
      if (!room.spawns[spot] && spot !== 'start') console.warn(`[game] в ${id} нет точки появления ${spot}`);
      if (o.load && this.state.room === id && this.state.px != null && !this.hits(this.state.px, this.state.pz!)) this.player.place(this.state.px, this.state.pz!, 'f'); else this.player.place(sp.x, sp.z, sp.dir);
      { const fp = this.freeSpot(this.player.x, this.player.z); if (fp.x !== this.player.x || fp.z !== this.player.z) { if (this.debug) console.warn(`[room] ${id}: точка «${spot}» занята, героиня сдвинута`); this.player.place(fp.x, fp.z); } }
      for (const a of this.followers) { const fp = this.freeSpot(this.player.x + 0.8, this.player.z + 0.3); a.place(fp.x, fp.z); }
      if (room.guards.length) this.mech('stealth'); if (room.lasers.length) this.mech('lasers');
      this.R.scene.add(room.group); this.R.scene.background = new THREE.Color(room.group.userData.bg ?? 0x050406); this.R.scene.fog = room.group.userData.fog || null;
      this.gradeBase = def.grade || {}; this.applyMask(true); this.applyGrade(true);
      this.cam.dist = def.camDist || 24; this.camSnap();
      if (def.music !== undefined) audio.music(def.music); audio.ambience(def.amb ?? null);
      this.state.room = id; this.state.spot = spot; (this.state.f.visited ||= {})[id] = 1; if (def.chapter) this.state.chapter = def.chapter;
      ui.hud(); if (!o.load && !this.fast) await this.save('auto');
      const cardLines = def.card?.(this); if (cardLines) { await ui.card(cardLines); }
      if (fade !== 'none') await ui.transition(fade, 'in');
      if (!o.silent && from !== id) ui.place(def.name);
    } finally { this.lock--; }
    const def = this.room!.def;
    if (def.enter) await this.cut(() => def.enter!(this, from));
  }
  /** Перестроить текущую комнату (после изменения флагов), сохранив положение героини. */
  async rebuild() { const p = this.player, x = p.x, z = p.z, d = p.dir; await this.goto(this.room!.id, this.state.spot, { fade: 'none', silent: true }); this.player.place(x, z, d); this.camSnap(); }
  async cut<T>(fn: () => T | Promise<T>): Promise<T> { this.lock++; ui.prompt(null); try { return await fn(); } finally { this.lock--; } }

  // ---------- диалоги ----------
  async say(who: string, text: string, expr = 'neutral', nameOverride?: string) {
    const thought = who === '~', narr = who === '*', id = thought ? 'varya' : who, d = CHARS[id];
    if (!narr && !d) console.warn('[dialogue] неизвестный говорящий', who);
    const key = who + ':' + text; const seen = !!this.state.seen[hash(key)];
    await ui.say({ name: narr ? '' : (nameOverride || d?.name || who), color: d?.color || '#e8d8a8', portrait: narr || !d ? '' : portrait(id, expr as any), text, italic: thought || narr, pitch: d?.pitch || 300, seen });
    this.state.seen[hash(key)] = 1;
  }
  async line(s: string) {
    const m = /^([\w*~]+)(?:=([^/:]+))?(?:\/(\w+))?:\s([\s\S]*)$/.exec(s);
    if (!m) { console.warn('[dialogue] не разобрана реплика:', s); return; }
    await this.say(m[1], m[4], m[3] || 'neutral', m[2]);
  }
  async choice(opts: (string | { text: string; mask?: boolean })[]): Promise<number> { return ui.choice(opts.map((o) => typeof o === 'string' ? { text: o } : o)); }
  /** Исполняет диалоговые данные (см. src/data/dialogue). */
  private runDepth = 0;
  async run(nodes: any[]): Promise<void> {
    this.lock++; this.runDepth++; audio.duck(true);
    try {
      for (const n of nodes) {
        if (typeof n === 'string') await this.line(n);
        else if (typeof n === 'function') { const r = await n(this); if (Array.isArray(r)) await this.run(r); }
        else if (n.c) {
          const opts = (n.c as any[]).filter((o) => { const m = o[2] || {}; if (m.if && !m.if(this.state.f, this)) return false; if (m.mask && this.state.mask !== m.mask) return false; return true; });
          const i = await this.choice(opts.map((o) => ({ text: o[0], mask: !!(o[2] && o[2].mask) }))); const pick = opts[i];
          if (pick[2] && pick[2].set) this.set(pick[2].set); await this.run(pick[1] || []);
        }
        else if (n.if) { await this.run(n.if(this.state.f, this) ? (n.t || []) : (n.e || [])); }
        else {
          if (n.set) this.set(n.set); if (n.note) this.note(n.note); if (n.give) this.give(n.give); if (n.sfx) this.sfx(n.sfx); if (n.music !== undefined) audio.music(n.music);
          if (n.wait) await this.wait(n.wait); if (n.pose) { const a = this.actor(n.pose[0]); if (a) a.pose = n.pose[1]; }
          if (n.shake) this.shake(n.shake); if (n.flash) this.flash();
        }
      }
    } finally { this.lock--; this.runDepth--; if (this.runDepth === 0) { audio.duck(false); ui.sayHide(); } }
  }
  actor(id: string): Actor | undefined { return id === 'player' ? this.player : this.room?.actor(id); }

  // ---------- маски ----------
  setMask(m: string | null) {
    if (!this.state.f.masks || this.room?.def.noMasks) return; this.mech('masks'); if (this.state.mask === m) m = null;
    this.state.mask = m; this.sfx('mask'); this.applyMask(); this.applyGrade(); ui.hud();
    audio.muffle(m === 'tragedy' ? 900 : m === 'drama' ? 2600 : 20000);
  }
  applyMask(silent = false) {
    const room = this.room; if (!room) return; const m = room.def.noMasks ? null : this.state.mask;
    if (room.def.noMasks) audio.muffle(20000);
    for (const e of room.masked) { const on = e.mask === 'none' ? !m : e.mask === m; e.obj.visible = on; if (e.box) e.box.on = on; }
    for (const it of room.inters) { if (it.mask) { it.enabled = it.mask === 'none' ? !m : it.mask === m; if (it.marker) it.marker.visible = it.enabled; } }
  }
  applyGrade(instant = false) { const m = this.room?.def.noMasks ? null : this.state.mask; const g = { ...this.gradeBase, ...(m ? mix(this.gradeBase, MASK_GRADE[m]) : {}) }; this.R.setGrade(g, instant); }
  grade(g: Grade, instant = false) { this.gradeBase = { ...this.gradeBase, ...g }; this.applyGrade(instant); }

  // ---------- камера и эффекты ----------
  camBounds() { const d = this.room!.def; const mx = Math.max(0, d.w / 2 - 9); const z0 = Math.min(0, -d.d / 2 + 4.5), z1 = d.camZMax ?? Math.max(z0, d.d / 2 - 7); return { mx, z0, z1 }; }
  camSnap() { const p = this.player, b = this.camBounds(); this.cam.x = clamp(p.x, -b.mx, b.mx); this.cam.z = clamp(p.z, b.z0, b.z1); }
  focus(x: number, z: number, dist = 18) { this.cam.focus = { x, z, dist }; }
  unfocus() { this.cam.focus = null; }
  shake(a = 0.4) { if (!settings.reduceShake) this.cam.shake = Math.max(this.cam.shake, a); }
  flash(v = 0.9) { this.R.flash = v; }

  // ---------- фотоаппарат ----------
  async photoMode() {
    if (!this.has('camera') || this.inPhoto || this.room?.def.noCamera) return; this.inPhoto = true; this.lock++;
    const p = this.player, v = dirVec(p.dir); this.focus(p.x + v.x * 3, p.z + v.z * 3, 15); ui.viewfinder(true);
    try {
      const k = await this.key(['act', 'camera', 'pause']);
      if (k === 'act') {
        const room = this.room!; const m = room.def.noMasks ? null : this.state.mask;
        const subs = room.photos.filter((s) => { if (s.cond && !s.cond()) return false; if (s.mask && (s.mask === 'none' ? !!m : s.mask !== m)) return false; const dx = s.x - p.x, dz = s.z - p.z, l = Math.hypot(dx, dz); if (l < 1.8) return true; return l < 8 && (dx * v.x + dz * v.z) / l > 0.6; });
        ui.viewfinder(false); const img = this.R.snapshot(); this.sfx('shutter'); this.flash(0.8);
        const caption = subs.length ? subs.map((s) => s.name).join(', ') : room.def.name;
        this.state.photos.push({ id: 'p' + Date.now().toString(36), img, caption, subjects: subs.map((s) => s.id), room: room.id });
        while (this.state.photos.length > 36) { const i = this.state.photos.findIndex((ph) => !ph.subjects.length); this.state.photos.splice(i >= 0 ? i : 0, 1); }
        ui.showPhoto(img, caption); this.unfocus();
        if (room.def.photo) await room.def.photo(this, subs.map((s) => s.id));
      }
    } finally { ui.viewfinder(false); this.unfocus(); this.lock--; this.inPhoto = false; }
  }
  photographed(subject: string) { return this.state.photos.some((p) => p.subjects.includes(subject)); }
  key(actions: string[]): Promise<string> { return new Promise((res) => { const off = input.onAction((a) => { if (actions.includes(a)) { off(); setTimeout(() => res(a), 0); } }); }); }
  follow(a: Actor) { this.followers.push(a); }
  unfollow(a?: Actor) { if (!a) return; this.followers = this.followers.filter((f) => f !== a); a.moving = false; }
  setPlayerChar(id: string) { this.state.f.playerChar = id; this.player.setChar(id); }

  // ---------- кадр ----------
  private onAction(a: string) {
    if (!this.running || ui.modal || this.paused) return;
    if (a === 'pause' && !this.inPhoto) { ui.pause(); return; }
    if (a === 'history') { ui.history(); return; }
    if (this.lock > 0) return;
    if (a === 'act' && this.near) { const it = this.near; this.sfx('click'); (this.state.f.used ||= {})[this.room!.id + ':' + it.id] = 1; this.cut(() => it.fn(this)).catch((e) => console.error('[game] ошибка взаимодействия', it.id, e)); }
    else if (a === 'mask1') this.setMask('comedy'); else if (a === 'mask2') this.setMask('tragedy'); else if (a === 'mask3') this.setMask('drama'); else if (a === 'mask0') { if (this.state.mask) this.setMask(this.state.mask); }
    else if (a === 'camera') this.photoMode(); else if (a === 'notebook') ui.notebook(); else if (a === 'inventory') ui.notebook('items');
    else if (this.room?.def.onKey) this.room.def.onKey(this, a);
  }
  /** Ближайшая свободная точка (спираль), чтобы героиня никогда не появлялась внутри мебели. */
  freeSpot(x: number, z: number) { if (!this.hits(x, z)) return { x, z }; for (let r = 0.25; r < 8; r += 0.25) for (let a = 0; a < 16; a++) { const nx = x + Math.cos(a / 16 * Math.PI * 2) * r, nz = z + Math.sin(a / 16 * Math.PI * 2) * r; if (!this.hits(nx, nz)) return { x: nx, z: nz }; } return { x, z }; }
  /** Проверка проходимости: какие точки взаимодействия недостижимы от героини (сетка 0.25). */
  reachCheck() {
    const room = this.room!, p = this.player, st = 0.25, w = room.def.w, d = room.def.d, nx = Math.ceil(w / st), nz = Math.ceil(d / st); const seen = new Uint8Array(nx * nz);
    const idx = (x: number, z: number) => Math.floor((z + d / 2) / st) * nx + Math.floor((x + w / 2) / st); const q: number[][] = [[p.x, p.z]]; const out: string[] = [];
    if (this.hits(p.x, p.z)) out.push('героиня внутри коллизии');
    while (q.length) { const [x, z] = q.pop()!; const i = idx(x, z); if (i < 0 || i >= seen.length || seen[i]) continue; seen[i] = 1; for (const [dx, dz] of [[st, 0], [-st, 0], [0, st], [0, -st]]) { const X = x + dx, Z = z + dz; if (!this.hits(X, Z)) q.push([X, Z]); } }
    const reach = (x: number, z: number, r: number) => { for (let zz = z - r; zz <= z + r; zz += st) for (let xx = x - r; xx <= x + r; xx += st) { if (Math.hypot(xx - x, zz - z) > r - 0.2) continue; const i = idx(xx, zz); if (i >= 0 && i < seen.length && seen[i]) return true; } return false; };
    for (const it of room.inters) if (!it.mask && !(it.cond && !it.cond()) && !reach(it.x, it.z, it.r)) out.push('недостижимо: ' + it.id + ' (' + it.label + ')');
    for (const [k, sp] of Object.entries(room.spawns)) if (this.hits(sp.x, sp.z)) out.push('точка появления в коллизии: ' + k);
    return out;
  }
  hits(x: number, z: number, r = 0.38): boolean {
    const room = this.room!; const hw = room.def.w / 2 - r, hd = room.def.d / 2 - r;
    if (x < -hw || x > hw || z < -hd || z > hd) return true;
    for (const b of room.boxes) if (b.on && x > b.x0 - r && x < b.x1 + r && z > b.z0 - r && z < b.z1 + r) return true;
    return false;
  }
  private los(x0: number, z0: number, x1: number, z1: number) { for (let i = 1; i < 8; i++) { const x = x0 + (x1 - x0) * i / 8, z = z0 + (z1 - z0) * i / 8; for (const b of this.room!.boxes) if (b.on && b.x1 - b.x0 > 0.9 && x > b.x0 && x < b.x1 && z > b.z0 && z < b.z1) return false; } return true; }
  private frame(dt: number) {
    const room = this.room; if (!room || !this.running) { if (this.menuScene && !this.running) { this.menuScene.update(dt); this.R.render(dt); } input.endFrame(); return; }
    if (this.paused) { this.R.render(0); input.endFrame(); return; }
    this.t += dt; this.state.time += dt; const p = this.player;
    if (this.waits.length) { for (const w of this.waits) w.t -= dt; const done = this.waits.filter((w) => w.t <= 0); this.waits = this.waits.filter((w) => w.t > 0); for (const w of done) w.res(); }
    // управление
    if (this.override) this.override(dt);
    else if (this.lock === 0 && !ui.modal) {
      const ax = input.axis(); const moving = Math.hypot(ax.x, ax.y) > 0.15;
      if (moving) {
        const sp = this.playerSpeed * (input.isDown('run') ? 1.35 : 1) * dt; const nx = p.x + ax.x * sp, nz = p.z + ax.y * sp;
        if (!this.hits(nx, p.z)) p.x = nx; if (!this.hits(p.x, nz)) p.z = nz;
        p.dir = Math.abs(ax.x) > Math.abs(ax.y) ? (ax.x > 0 ? 'r' : 'l') : (ax.y > 0 ? 'f' : 'b');
        this.stepT -= dt; if (this.stepT <= 0) { this.stepT = 0.3; this.sfx('step', { mat: room.def.step || 'wood' }); }
        const last = this.trail[this.trail.length - 1]; if (!last || Math.hypot(last.x - p.x, last.z - p.z) > 0.35) { this.trail.push({ x: p.x, z: p.z }); if (this.trail.length > 40) this.trail.shift(); }
      }
      p.moving = moving;
      // триггеры
      for (const tr of room.triggers) { const inside = p.x > tr.x0 && p.x < tr.x1 && p.z > tr.z0 && p.z < tr.z1; if (inside && !tr.inside && !(tr.once && tr.done)) { tr.done = true; tr.inside = true; this.cut(() => tr.fn(this)).catch((e) => console.error('[game] ошибка триггера', e)); break; } tr.inside = inside; }
    } else if (!p.target) p.moving = false;
    // спутники
    this.followers.forEach((a, i) => { const tp = this.trail[this.trail.length - 1 - (i + 1) * 3]; if (tp && Math.hypot(tp.x - a.x, tp.z - a.z) > 0.25 && Math.hypot(p.x - a.x, p.z - a.z) > 1.3) { const dx = tp.x - a.x, dz = tp.z - a.z, l = Math.hypot(dx, dz), s = Math.min(l, this.playerSpeed * 1.05 * dt); a.x += dx / l * s; a.z += dz / l * s; a.face(tp.x, tp.z); a.moving = true; } else if (!a.target) a.moving = false; });
    for (const a of room.actors) a.update(dt);
    // стражи и лазеры
    if (this.lock === 0) {
      for (const g of room.guards) {
        if (!g.active) { g.cone.visible = false; continue; } g.cone.visible = true; const a = g.actor;
        if (g.off > 0) { g.off -= dt; g.cone.visible = Math.floor(g.off * 8) % 2 === 0; }
        if (g.wait > 0) g.wait -= dt; else if (!a.target && g.path.length > 1) { g.i = (g.i + 1) % g.path.length; const [tx, tz] = g.path[g.i]; g.ang = Math.atan2(tz - a.z, tx - a.x); a.walkTo(tx, tz, g.speed).then(() => { g.wait = g.pause; }); }
        g.cone.position.set(a.x, 0.05, a.z); g.cone.rotation.y = -g.ang;
        if (g.off <= 0 && !p.hidden && !(p as any).stealth) { const dx = p.x - a.x, dz = p.z - a.z, l = Math.hypot(dx, dz); let da = Math.atan2(dz, dx) - g.ang; while (da > Math.PI) da -= Math.PI * 2; while (da < -Math.PI) da += Math.PI * 2; if (l < g.range && Math.abs(da) < g.half && this.los(a.x, a.z, p.x, p.z)) { this.cut(() => g.onCatch(this)).catch((e) => console.error(e)); break; } }
      }
      for (const lz of room.lasers) { lz.on = lz.active && ((this.t + lz.phase) % lz.period) < lz.duty * lz.period; lz.mesh.visible = lz.on; if (lz.on && !p.hidden && !(p as any).stealth) { const vx = lz.x1 - lz.x0, vz = lz.z1 - lz.z0, l2 = vx * vx + vz * vz; let u = ((p.x - lz.x0) * vx + (p.z - lz.z0) * vz) / l2; u = clamp(u, 0, 1); if (Math.hypot(p.x - lz.x0 - vx * u, p.z - lz.z0 - vz * u) < 0.4) { this.cut(() => lz.onHit(this)).catch((e) => console.error(e)); break; } } }
    } else { for (const a of room.actors) if (!a.target && a !== p && !this.followers.includes(a)) a.moving = false; }
    for (const fl of room.flick) fl.l.intensity = fl.base * (1 + (Math.sin(this.t * 13 + fl.base) * 0.5 + Math.sin(this.t * 31) * 0.5) * fl.s);
    for (const oc of room.occluders) { const hide = p.z < oc.z - 0.2 && p.z > oc.z - 7 && p.x > oc.x0 - 0.8 && p.x < oc.x1 + 0.8; const m = oc.mesh.material as THREE.MeshLambertMaterial; const tgt = hide ? 0.18 : 1; m.opacity += (tgt - m.opacity) * Math.min(1, dt * 8); m.depthWrite = m.opacity > 0.9; }
    for (const u of room.updaters) u(dt, this.t);
    if (room.def.update) room.def.update(this, dt, this.t);
    this.questT -= dt; if (this.questT < 0) { this.questT = 0.5; ui.quest(); }
    // ближайший интерактивный объект
    let best: Inter | null = null, bd = 1e9;
    if (this.lock === 0 && !ui.modal) for (const it of room.inters) { if (!it.enabled || (it.cond && !it.cond())) { if (it.marker) it.marker.visible = false; continue; } const d = Math.hypot(it.x - p.x, it.z - p.z); if (it.marker) { it.marker.visible = d < 5; it.marker.position.y = it.y + 0.5 + Math.sin(this.t * 3 + it.x) * 0.08; it.marker.rotation.y = this.t * 2; } if (d < it.r && d < bd) { bd = d; best = it; } }
    this.near = best;
    // камера
    const c = this.cam, f = c.focus; const cb = this.camBounds();
    const tx = f ? f.x : clamp(p.x, -cb.mx, cb.mx), tz = f ? f.z : clamp(p.z, cb.z0, cb.z1), td = f ? f.dist : (room.def.camDist || 24); const k = Math.min(1, dt * 3.5);
    c.x += (tx - c.x) * k; c.z += (tz - c.z) * k; c.dist += (td - c.dist) * k; c.shake = Math.max(0, c.shake - dt * 1.2);
    const sx = (Math.random() - 0.5) * c.shake, sy = (Math.random() - 0.5) * c.shake; const aspectFix = this.R.cam.aspect < 1 ? 1.25 : 1;
    this.R.cam.position.set(c.x + sx, c.yOff + Math.sin(c.pitch) * c.dist * aspectFix + sy, c.z + Math.cos(c.pitch) * c.dist * aspectFix);
    this.R.cam.up.set(Math.sin(c.roll), Math.cos(c.roll), 0); this.R.cam.lookAt(c.x + sx, c.yOff, c.z);
    this.R.render(dt);
    if (best) { const v = new THREE.Vector3(best.x, best.y + 0.9, best.z).project(this.R.cam); ui.prompt(best.label, (v.x + 1) / 2, (1 - v.y) / 2); } else ui.prompt(null);
    input.endFrame();
  }
}
function clamp(v: number, a: number, b: number) { return Math.max(a, Math.min(b, v)); }
function dirVec(d: string) { return d === 'l' ? { x: -1, z: 0 } : d === 'r' ? { x: 1, z: 0 } : d === 'b' ? { x: 0, z: -1 } : { x: 0, z: 1 }; }
function hash(s: string) { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); }
function mix(a: Grade, b: Grade): Grade { const t = a.tint || [1, 1, 1], u = b.tint || [1, 1, 1]; return { sat: (a.sat ?? 1) * (b.sat ?? 1), tint: [t[0] * u[0], t[1] * u[1], t[2] * u[2]], vig: Math.max(a.vig ?? 0.35, b.vig ?? 0), bright: (a.bright ?? 1) * (b.bright ?? 1), contrast: (a.contrast ?? 1) * (b.contrast ?? 1) }; }
export const G = new Game();
(G as any).__rooms = () => ROOMS;
(window as any).__G = G;
