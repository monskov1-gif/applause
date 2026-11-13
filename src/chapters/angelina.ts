// Глава Ангелины, DEBUT: THE IDOL PROJECT. K-pop / индустриальная драма.
// Механики: концепт агентства, танцевальная связка (повтори), вокальная ритм-сцена, выбор образа (решает Ангелина),
// микшерный пульт, живое сведение её собственного трека, дебют: решение о фонограмме и ритм-сцена с текстом песни.
import * as THREE from 'three';
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext } from '../gfx/tex';
import { A } from '../data/dialogue/angelina';
import { pick, rhythm, sequence, timing } from '../ui/minigames';
import { window3D, sofa, mirror3D } from '../world/decor3d';
import { rug } from '../world/decor';
import { chapterIntro, finishChapter, actOf } from './common';

const GLOSS = { sat: 1.15, tint: [1.04, 0.98, 1.06], vig: 0.3, bright: 1.0, bloom: 0.7 };
const STAGE = { sat: 1.3, tint: [1.05, 0.95, 1.1], vig: 0.55, bloom: 1.0, contrast: 1.08 };
const angelChar = (G: any) => G.f.ang_look_own ? 'angelina_own' : G.f.ang_concept ? 'angelina_idol' : 'angelina';
const screen = (R: Builder, x: number, y: number, w: number, h: number, txt = 'ANGEL♡', z?: number) => R.decal(canvasTex(64, 40, (c) => { c.fillStyle = '#1a0a1a'; c.fillRect(0, 0, 64, 40); c.fillStyle = '#ff9ad8'; c.fillRect(22, 4, 20, 22); c.fillStyle = '#ffc8e8'; c.fillRect(26, 9, 12, 13); c.fillStyle = '#111'; c.fillRect(28, 13, 2, 2); c.fillRect(34, 13, 2, 2); c.fillStyle = '#e84a8f'; c.fillRect(30, 18, 4, 1); ptext(c, txt, 32, 29, { size: 8, col: '#fff', align: 'center' }); for (let i = 0; i < 64; i += 2) { c.fillStyle = 'rgba(0,0,0,.25)'; c.fillRect(0, i, 64, 1); } }, 'screen' + txt), { x, y, w, h, z, glow: true });
function glossRoom(R: Builder) { R.room.group.userData.bg = 0x100810; R.floor('gloss'); R.walls('white', { h: 6.5 }); R.ambient(0x8a7a90, 1.7, 0xfff0fa); R.particles('dust', { count: 40, top: 6, color: 0xffc0e0 }); }

// ---------------- дом: панельная кухня в Северном районе ----------------
const home: RoomDef = {
  card: (G) => G.f.intro_ang ? null : (G.f.intro_ang = 2, [[actOf(G), 'act'], ['DEBUT: FROM NOBODY TO ANGEL', 'big'], ['дорама · из спального района на большую сцену', 'sm']]),
  name: 'Кухня в Северном районе', chapter: 'Ангелина', w: 16, d: 10, music: 'idol_own', amb: 'city', step: 'wood', grade: { sat: 1.0, tint: [1.08, 1.0, 0.92], vig: 0.45, bloom: 0.5 },
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x100c10; R.floor('parquet', { tint: '#a87a50' }); R.walls('wallpaper', { h: 5.5, tint: '#c8a890', trim: 'darkwood' }); R.ambient(0x6a5048, 2.4, 0xffe0c8); R.light(0, 4.4, 0, 0xffd8a8, 12, 12);
    rug(R, -3, 1.2, 4, 3, { col: '#5a2a3a', border: '#e8c36a' }); window3D(R, -4, { wall: 'n', y: 3, w: 2, h: 2.4, night: true, curtains: true });
    // кухонный стол с кейсом визажиста и лампой-кольцом
    R.table(1.4, -1.2, 3, 1.4, { tex: 'wood' }); for (let i = 0; i < 6; i++) R.box(0.4 + i * 0.3, -1.4, 0.12, 0.12, 0.28 + (i % 3) * 0.08, { color: [0xe84a6f, 0x2a2a2e, 0xf2c230, 0xc8a0e0][i % 4], y: 1.1, solid: false, cast: false });
    R.box(2.4, -1.3, 0.9, 0.5, 0.35, { color: 0x1a1a1e, y: 1.1, solid: false }); { const ring = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.06, 8, 24), new THREE.MeshBasicMaterial({ color: 0xfff4e0 })); ring.position.set(1.0, 1.9, -1.7); R.room.group.add(ring); } R.light(1.0, 1.9, -1.2, 0xfff0e0, 4, 4);
    R.inter('makeup', 1.4, 0.2, { label: f.ang_mirror ? 'Мамин кейс' : 'Мамин кейс визажиста', fn: async (G) => { if (f.ang_mirror) return G.run(['~: Кисти разложены по размеру, как инструменты хирурга. Мама говорит, что лицо, это самая честная сцена.']); await G.run(A.homeMirror); f.ang_mirror = 1; } });
    // кухонный гарнитур, холодильник с листовкой, телевизор с идол-шоу
    for (let x = 3.6; x <= 7.2; x += 1.2) { R.box(x, -4.4, 1.15, 0.9, 1.0, { tex: 'wood', tint: '#e8dcc8' }); R.box(x, -4.4, 1.2, 1.0, 0.06, { color: 0xc8c0b8, y: 1.0, solid: false }); }
    R.box(-6.8, -4.2, 1.2, 1.1, 2.4, { color: 0xe8e8e8 }); R.decal(canvasTex(10, 12, (c) => { c.fillStyle = '#fff0f8'; c.fillRect(0, 0, 10, 12); c.fillStyle = '#ff4fa0'; c.fillRect(0, 0, 10, 3); c.fillStyle = '#333'; c.fillRect(1, 5, 8, 1); c.fillRect(1, 7, 6, 1); }, 'flyer'), { x: -6.8, y: 1.6, z: -3.62, w: 0.6, h: 0.75, noSlot: true }); R.look('flyer', -6.8, -3.2, 'Листовка на холодильнике', A.homeFlyer);
    R.box(-2.4, -4.4, 2.4, 0.5, 0.8, { tex: 'darkwood' }); screen(R, -2.4, 2.0, 2.2, 1.4); R.look('tv', -2.4, -3.4, 'Телевизор', A.homeTV);
    sofa(R, -4.6, 3.4, { w: 2.6, col: 0x5a6a8a, ry: Math.PI }); mirror3D(R, 5.6, 2.6, -4.95, 1.2, 1.6, {});
    if (f.ang_photo && !f.ang_double) R.sprite(canvasTex(12, 10, (c) => { c.fillStyle = '#ff9ad8'; c.fillRect(1, 2, 10, 8); c.fillStyle = '#ffc8e8'; c.fillRect(2, 1, 8, 3); }, 'wig'), 1.2, 1.0, { y: 0.7, scale: 1.1, thin: true });
    R.npc('ang_mom', 3.2, -0.2, { dir: 'l', talk: (G: any) => G.run(f.ang_double ? ['ang_mom/smile: Песню допиши. Я хочу её услышать живьём. Не в записи.'] : ['ang_mom: Кисть номер четыре для теней, номер семь для румян. А для голоса, Анжик, кисти не нужны.']) });
    R.npc(f.ang_photo && !f.ang_double ? 'angelina_idol' : 'angelina', -0.8, 0.4, { id: 'angelina', dir: 'r', talk: async (G: any) => { if (f.ang_photo && !f.ang_double) return doubleLife(G); if (!f.ang_home0) return; await G.run(A.homeGo); } });
    R.door('agency', 0, { wall: 'e', label: 'В агентство «GLOSS»', col: '#5a4a6a', sign: 'GLOSS', fn: (G) => G.goto('ang_lobby', 'home', { fade: 'mirror' }) });
    R.spawn('start', 6.6, 1.4, 'l'); R.spawn('lobby', 6.6, 0, 'l');
  },
  async enter(G) { if (!G.f.ang_home0) { G.f.ang_home0 = 1; await G.run(A.home0); } else if (G.f.ang_photo && !G.f.ang_double) await doubleLife(G); },
};
async function doubleLife(G: any) {
  const f = G.f; if (f.ang_double) return; await G.run(A.double0); await G.run(A.doubleChange);
  const r = await timing({ title: 'Быстрое переодевание', sub: 'Сорвать парик, пока Лусинэ поднимается по лестнице', zone: 0.24, speed: 1.2 });
  const B = new (await import('../world/room')).Builder(G.room, G); const lu = B.actor('lusine', 7, 0.6, { id: 'lusine', dir: 'l' }); G.actor('angelina')?.setChar(r === 'miss' ? 'angelina_idol' : 'angelina');
  await lu.walkTo(2, 0.8, 3); await G.run(r === 'miss' ? A.doubleMiss : A.doubleOk); await lu.walkTo(7, 0.6, 3); lu.hidden = true;
  await G.run(A.doubleAfter); f.ang_double = 1; await G.rebuild();
}
const lobby: RoomDef = {
  name: 'Агентство «GLOSS»', chapter: 'Акт II · Ангелина', w: 30, d: 12, music: 'idol_agency', amb: null, step: 'stone', grade: GLOSS,
  build(R, G) {
    const f = G.f; glossRoom(R); for (const x of [-8, 0, 8]) { screen(R, x, 3.6, 4.6, 2.9); R.light(x, 3.6, -3.8, 0xff80c0, 8, 8); }
    R.light(0, 5.5, -1, 0xffffff, 5, 14);
    R.box(-9, 1.6, 4, 1.2, 1.1, { tex: 'gloss' }); R.decal(canvasTex(32, 10, (c) => { c.fillStyle = '#ff4fa0'; c.fillRect(0, 0, 32, 10); ptext(c, 'GLOSS', 16, 1, { size: 8, col: '#fff', align: 'center' }); }, 'glosslogo'), { x: -9, y: 0.9, z: 2.22, w: 3, h: 0.7, glow: true });
    R.sprite('plant', 14.4, -1.5, { scale: 1.3, solid: 0.3 }); R.sprite('plant', -14, -4.6, { scale: 1.3, solid: 0.3 });
    R.inter('concept', -4, -4, { label: 'Концепт дебюта на стене', fn: async (G) => { await G.ui.paper(A.concept); if (!f.ang_concept) { f.ang_concept = 1; await G.run(A.conceptAfter); } } });
    R.decal(canvasTex(20, 28, (c) => { c.fillStyle = '#fff0f8'; c.fillRect(0, 0, 20, 28); c.fillStyle = '#ff9ad8'; c.fillRect(2, 2, 16, 10); ptext(c, 'КОНЦЕПТ', 10, 15, { size: 5, col: '#a03060', align: 'center' }); }, 'cposter'), { x: -4, y: 2.2, w: 1.3, h: 1.8 });
    R.npc('glyants', 4, -1, { talk: ['glyants: Мы не продаём музыку, стажёр. Мы продаём ощущение, что музыка тебя любит. Это разные бизнесы.'] });
    R.npc('stylist', 6.4, 1, { talk: async (G: any) => { if (!f.ang_assist && f.ang_photo) { f.ang_assist = 1; return G.run(A.assist); } await G.run(['stylist/smirk: Не стой столбом, дорогуша. Столбы у нас тоже по контракту.']); } });
    R.npc(angelChar(G), -1.2, 1, { id: 'angelina', talk: (G: any) => G.run(f.ang_mix ? ['angelina: Дебют. Сцена за последней дверью. Пульт будет справа.'] : ['angelina: Тренировка, запись, фото. Делаем всё честно, чтобы потом никто не сказал, что я не старалась.']) });
    const left = () => [!f.ang_dance && 'танец в зале тренировок', !f.ang_vocal && 'запись в вокальной будке', !f.ang_photo && 'съёмка в фотостудии', !f.ang_mix && 'сведение демо в студии звукозаписи', f.ang_photo && !f.ang_double && 'заехать домой, к маме'].filter(Boolean).join(', ');
    const D = [['ang_practice', -12.6, 'Зал тренировок', 'DANCE', () => true, ''], ['ang_photo', 9.6, 'Фотостудия', 'PHOTO', () => true, ''], ['ang_record', 13, 'Студия звукозаписи', 'REC', () => true, ''], ['ang_stage', 4, 'Сцена шоукейса', 'DEBUT', () => !!(f.ang_dance && f.ang_vocal && f.ang_photo && f.ang_mix && f.ang_double), 'До шоукейса осталось: ']] as const;
    for (const [to, x, label, sg, cond, lk] of D) R.door(to, x, { label, z: -5.96, col: '#f0e8f0', sign: sg, cond, locked: [() => ['~: ' + lk + left() + '.']] as any, fn: (G) => G.goto(to, 'start', { fade: 'mirror' }) });
    R.door('home', 0, { wall: 'w', label: 'Домой, в Северный район', col: '#5a4a6a', fn: (G) => G.goto('ang_home', 'lobby', { fade: 'mirror' }) });
    R.spawn('start', 0, 3.6, 'b'); R.spawn('home', -13.4, 0, 'r'); for (const [to, x] of D) R.spawn(to, x, -4.4);
  },
  async enter(G, from) { if (!G.f.ang_aud) { G.f.ang_aud = 1; await G.run(A.arrive); } const sp = G.room.spawns[from]; if (sp) { G.player.place(sp.x, sp.z, 'f'); G.camSnap(); } },
};
const practice: RoomDef = {
  name: 'Зал тренировок', w: 22, d: 10, music: 'idol_agency', amb: null, step: 'wood', grade: GLOSS,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x100810; R.floor('parquet'); R.walls('mirror', { h: 6 }); R.ambient(0x9a8aa0, 2.2, 0xfff0fa); R.light(0, 5, 0, 0xffffff, 16, 14);
    R.box(0, -4.6, 22, 0.15, 0.15, { tex: 'metal', y: 1.2, solid: false });
    const an = R.npc(angelChar(G), -2, -1.6, { id: 'angelina', talk: ['angelina: В зеркале проще. Видишь сразу, где врёшь телом.'] });
    R.npc('trainer', 2, -2.4, { talk: async (G: any) => { if (f.ang_dance) return G.run(['trainer: Связка выучена. Теперь, вокальная будка, справа.']); await G.run(A.trainer0); const ok = await sequence({ title: 'Танцевальная связка', sub: 'повтори за Ангелиной', bpm: 128, rounds: [['left', 'right', 'up', 'down'], ['up', 'up', 'left', 'right', 'down', 'up'], ['left', 'down', 'right', 'up', 'left', 'left', 'down', 'up']], onShow: (d) => { an.pose = 'dance'; an.danceBeat++; an.dir = d === 'left' ? 'l' : d === 'right' ? 'r' : 'f'; }, onInput: () => { G.player.pose = 'dance'; G.player.danceBeat++; } }); an.pose = null; G.player.pose = null; if (ok) { f.ang_dance = 1; await G.run(A.danceOk); } } });
    R.box(8, -3, 4, 3.6, 3.4, { tex: 'gloss', tint: '#c8b0d0' }); R.sprite('mic', 8, -0.7, { scale: 1.2 });
    R.inter('vocal', 8, -0.6, { label: 'Вокальная будка', fn: async (G) => { await G.run(A.vocal0); const r = await rhythm({ track: 'idol_agency', part: 4, loops: 2, title: '«Sugar Sugar Heart»', sub: 'D F J K или стрелки, держи ритм для Ангелины', onBeat: () => { an.danceBeat++; an.pose = 'dance'; } }); an.pose = null; G.audio.music('idol_agency'); f.ang_vocal = 1; await G.run(A.vocalAfter(r.score > 0.6)); } });
    R.door('out', -8, { label: 'В холл', z: -4.96, col: '#f0e8f0', fn: (G) => G.goto('ang_lobby', 'ang_practice', { fade: 'mirror' }) }); R.spawn('start', -8, -3.4);
  },
};
const photo: RoomDef = {
  name: 'Фотостудия', w: 18, d: 10, music: 'idol_agency', amb: null, step: 'stone', grade: { ...GLOSS, bright: 0.92, bloom: 0.4, contrast: 1.06 },
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x0c080c; R.floor('white', { tint: '#aaa2ac' }); R.walls('white', { h: 6, tint: '#bcb4bc' }); R.ambient(0x6a5a70, 1.3, 0xfff0fa);
    R.box(0, -4, 10, 2, 0.05, { tex: 'white', tint: '#d8d0d8', solid: false }); R.spot(-5, 6, 3, 0, -2, 0xfff4f0, 22, { angle: 0.5, cone: 0.02 }); R.spot(5, 6, 3, 0, -2, 0xffe0f0, 14, { angle: 0.5, shadow: false });
    R.sprite('stagelight', -5, 2, { scale: 2 }); R.sprite('stagelight', 5, 2, { scale: 2, flipX: true }); R.sprite('filmcam', 0, 3.4, { scale: 1.2, solid: 0.4 });
    const an = R.actor(angelChar(G), 0, -2.8, { id: 'angelina' }); R.photo('angelina', 'Ангелина в кадре', 0, -2.8);
    R.npc('stylist', 6.4, -2, { talk: async (G: any) => { if (f.ang_photo) return G.run(['stylist: Снято. Иди. Не мешай свет.']); await G.run(A.photo0); const r = await pick({ ...A.look, confirm: 'Ангелина утверждает' } as any, ); const own = ['hair', 'outfit', 'name'].filter((k) => r[k] === 'own').length; f.ang_look_own = own >= 2 ? 1 : 0; f.ang_look = r; an.setChar(angelChar(G)); G.sfx('shutter'); G.flash(0.6); await G.run(own >= 2 ? A.lookAfterOwn : A.lookAfterMix); f.ang_photo = 1; } });
    R.door('out', -6.6, { label: 'В холл', z: -4.96, col: '#f0e8f0', fn: (G) => G.goto('ang_lobby', 'ang_photo', { fade: 'mirror' }) }); R.spawn('start', -6.6, -3.4);
  },
  async photo(G, subs) { if (subs.includes('angelina')) await G.run(['angelina: Этот снимок, мой. Не отдавай его агентству.']); },
};
const TAGS: [string, string][] = [['drums', 'Барабаны'], ['bass', 'Бас'], ['keys', 'Клавиши'], ['arp', 'Арпеджио'], ['lead', 'Голос / сакс-соло']];
const record: RoomDef = {
  name: 'Студия звукозаписи', w: 16, d: 10, music: null, amb: 'hum', step: 'carpet', grade: { ...GLOSS, tint: [0.92, 0.9, 1.12], bright: 0.95 },
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x080610; R.floor('carpet', { tint: '#4a3a6a' }); R.walls('neon', { h: 6 }); R.ambient(0x4a3a6a, 2.0, 0xb0a0e0); R.light(0, 4, 0, 0xc0a0ff, 12, 12);
    R.table(0, -2.6, 5, 1.6, { tex: 'metal' }); for (let i = 0; i < 10; i++) R.box(-2 + i * 0.45, -2.6, 0.2, 0.9, 0.08, { color: i % 2 ? 0xff4fa0 : 0x40e0d0, y: 1.15, solid: false });
    R.sprite('speaker', -3.6, -4.4, { scale: 1.2 }); R.sprite('speaker', 3.6, -4.4, { scale: 1.2 });
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
const stage: RoomDef = {
  name: 'Шоукейс', w: 30, d: 14, music: null, amb: 'crowd', step: 'wood', grade: STAGE, camZMax: 1,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x05030a; R.floor('stage', { d: 8, z: -3 }); R.floor('black', { d: 6, z: 4 }); R.walls('led', { h: 8 }); R.ambient(0x3a2a4a, 1.8, 0xc0a0e0);
    screen(R, -8, 4.4, 6, 3.8, f.ang_done ? 'АНГЕЛИНА' : 'ANGEL♡'); screen(R, 8, 4.4, 6, 3.8, f.ang_done ? 'АНГЕЛИНА' : 'ANGEL♡');
    R.spot(0, 10, 2, 0, -3, 0xffe0f0, 32, { angle: 0.3, cone: 0.06, name: 'main' }); R.spot(-8, 9, 3, -2, -2, 0xff4fa0, 40, { angle: 0.35, cone: 0.05, shadow: false }); R.spot(8, 9, 3, 2, -2, 0x40e0d0, 40, { angle: 0.35, cone: 0.05, shadow: false });
    for (let x = -12; x <= 12; x += 4) { R.box(x, 1.2, 3, 0.15, 0.08, { color: x % 8 ? 0xff4fa0 : 0x40e0d0, emissive: x % 8 ? 0xff4fa0 : 0x40e0d0, solid: false }); R.light(x, 0.6, 3, x % 8 ? 0xff4fa0 : 0x40e0d0, 3, 6); }
    R.sprite('mic', 0, -2.4, { scale: 1.2 }); for (const x of [-12, 12]) R.sprite('speaker', x, -4.6, { scale: 1.8 });
    R.table(11, 2.6, 3, 1.4, { tex: 'metal' }); for (let i = 0; i < 6; i++) R.box(10 + i * 0.4, 2.6, 0.2, 0.8, 0.08, { color: i % 2 ? 0xff4fa0 : 0x40e0d0, y: 1.15, solid: false });
    R.actor(angelChar(G), 0, -3, { id: 'angelina' }); R.actor('stylist', -13, -4.4, { id: 'stylist', dir: 'r' }); R.actor('ang_mom', -1.6, 5.6, { id: 'ang_mom', dir: 'b' }); R.actor('glyants', -11.6, -4.6, { id: 'glyants', dir: 'r' });
    R.crowd(['dancer', 'student', 'student2', 'courtier', 'cashier', 'dancer', 'student2', 'student', 'courtier', 'dancer'], -10, 4.2, 10, 2, 1.8, 'b');
    R.particles('confetti', { count: 70, top: 8, name: 'conf' }); R.room.named.conf.visible = false;
    R.inter('desk', 11, 3.8, { label: 'Пульт', cond: () => !f.ang_done, fn: showcase }); R.spawn('start', 12, 5, 'b');
  },
  async enter(G) { if (!G.f.ang_st0) { G.f.ang_st0 = 1; G.audio.music('idol_agency'); G.focus(0, -2, 20); await G.run(A.showcase); G.unfocus(); } },
};
async function showcase(G: any) {
  const f = G.f, an = G.actor('angelina'); G.player.place(11, 3.8, 'l');
  await G.run(A.showChoice.slice(0, 1)); G.audio.music(null); G.sfx('switch'); an.setChar('angelina_own'); await G.run(A.showChoice.slice(1));
  G.focus(0, -1, 18); G.R.flash = 0.5;
  const r = await rhythm({ track: 'idol_own', part: 4, loops: 2, title: 'Своя песня', sub: 'держи ритм у пульта, D F J K или стрелки', lyrics: A.lyrics as any, onBeat: (b) => { an.pose = 'dance'; an.danceBeat++; if (b % 4 === 0) G.flash(0.08); } });
  an.pose = 'arms'; G.room.named.conf.visible = true; G.sfx('applause', { dur: 5, dens: 70 }); f.ang_done = 1; G.audio.music('idol_own');
  await G.run(A.showMom);
  await G.run(A.after(r.score > 0.55)); G.unfocus(); an.pose = 'bow';
  await finishChapter(G, 'angelina', [['DEBUT: THE IDOL PROJECT', 'act'], 'Ангелина выступила на своих условиях.', ['Фонограмма, это когда поют за тебя. Она, спела сама.', 'sm']]);
}
export const rooms: Record<string, RoomDef> = { ang_home: home, ang_lobby: lobby, ang_practice: practice, ang_photo: photo, ang_record: record, ang_stage: stage };
