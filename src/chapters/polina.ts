// Глава Полины — THE HOUSE THAT LAUGHS. Хоррор/слэшер/комедия.
// Механики: дождь и свет/тень, звук-подсказка (смех), прятки в шкафу, фото-аномалии (камера), выбор маршрута,
// кульминация — Варя заперта, игрок управляет Полиной, которая сама находит закономерность в обоях.
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext } from '../gfx/tex';
import { P } from '../data/dialogue/polina';
import { lock } from '../ui/minigames';
import { chapterIntro, finishChapter, carriedLight, rainy, fog } from './common';

const GRADE = { sat: 0.55, tint: [0.84, 0.92, 1.12], vig: 0.7, bright: 0.95, contrast: 1.08 };
const DARK = { sat: 0.45, tint: [0.8, 0.88, 1.12], vig: 0.8, bright: 1.0, contrast: 1.12 };
const PORTRAITS = [
  { id: 'cap', name: 'Капитан с трубкой', year: '1902', sym: '✶', anom: '' },
  { id: 'lady', name: 'Дама с веером', year: '1931', sym: '☾', anom: 'в зеркале за дамой её отражение стоит к зрителю спиной' },
  { id: 'kids', name: 'Дети на качелях', year: '1897', sym: '♣', anom: 'качели отбрасывают тень, а дети — нет' },
  { id: 'owner', name: 'Хозяин дома', year: '1922', sym: '⚷', anom: 'часы за спиной хозяина показывают тринадцать' },
  { id: 'dog', name: 'Собака у камина', year: '1910', sym: '◉', anom: '' },
];
const SYMS = ['☾', '✶', '♣', '⚷', '◉'];
const ANSWER = ['♣', '⚷', '☾'];

function portraitTex(i: number) {
  return canvasTex(26, 32, (c) => {
    c.fillStyle = '#5a4010'; c.fillRect(0, 0, 26, 32); c.fillStyle = '#86641c'; c.fillRect(1, 1, 24, 30); c.fillStyle = '#2a2a2e'; c.fillRect(3, 3, 20, 22);
    const sk = '#c8b8a0';
    if (i === 0) { c.fillStyle = '#1c2a44'; c.fillRect(7, 14, 12, 11); c.fillStyle = sk; c.fillRect(9, 7, 8, 8); c.fillStyle = '#fff'; c.fillRect(8, 5, 10, 3); c.fillStyle = '#5a4029'; c.fillRect(16, 12, 4, 2); }
    if (i === 1) { c.fillStyle = '#6a3a5a'; c.fillRect(6, 14, 10, 11); c.fillStyle = sk; c.fillRect(8, 7, 7, 8); c.fillStyle = '#2a1a14'; c.fillRect(7, 5, 9, 4); c.fillStyle = '#9fb4c8'; c.fillRect(17, 5, 5, 10); c.fillStyle = '#c8a0c0'; c.fillRect(12, 16, 5, 4); }
    if (i === 2) { c.fillStyle = '#5a4029'; c.fillRect(5, 4, 1, 14); c.fillRect(20, 4, 1, 14); c.fillRect(5, 4, 16, 1); c.fillRect(7, 18, 12, 1); c.fillStyle = '#d8d0c0'; c.fillRect(8, 12, 3, 6); c.fillRect(14, 12, 3, 6); c.fillStyle = sk; c.fillRect(8, 9, 3, 3); c.fillRect(14, 9, 3, 3); c.fillStyle = '#111'; c.fillRect(7, 22, 13, 2); }
    if (i === 3) { c.fillStyle = '#111'; c.fillRect(7, 13, 12, 12); c.fillStyle = sk; c.fillRect(9, 6, 8, 8); c.fillStyle = '#111'; c.fillRect(6, 4, 14, 3); c.fillStyle = '#e8e0c8'; c.fillRect(18, 5, 4, 4); }
    if (i === 4) { c.fillStyle = '#8a5a2a'; c.fillRect(6, 15, 12, 7); c.fillRect(15, 11, 5, 6); c.fillStyle = '#c86a2a'; c.fillRect(3, 19, 4, 6); }
    c.fillStyle = '#e8d8a8'; c.fillRect(8, 26, 10, 4); ptext(c, PORTRAITS[i].year, 13, 26, { size: 5, col: '#3a2a14', align: 'center' });
  }, 'portrait' + i);
}
function wallpaper(R: Builder, x: number, up: boolean, mask?: string) {
  R.decal(canvasTex(16, 16, (c) => { c.fillStyle = '#2e5038'; c.fillRect(7, up ? 6 : 2, 2, 8); c.fillStyle = '#d86a8a'; c.fillRect(5, up ? 1 : 11, 6, 4); c.fillRect(6, up ? 0 : 15, 4, 1); c.fillStyle = '#48745a'; c.fillRect(up ? 9 : 4, 9, 3, 2); }, 'flower' + up), { x, y: 5.3, w: 1, h: 1, mask });
}
const mansionFacade = (R: Builder) => {
  R.box(0, -5.6, 22, 1, 7.5, { tex: 'woodwall', tint: '#5a5a6a' }); R.box(0, -5.9, 24, 1.8, 0.5, { tex: 'darkwood', y: 7.5 });
  R.box(-6, -5.6, 7, 1, 3, { tex: 'darkwood', tint: '#3a3a4a', y: 8 }); R.box(6, -5.6, 7, 1, 3, { tex: 'darkwood', tint: '#3a3a4a', y: 8 });
  for (const x of [-8, -4, 4, 8]) for (const y of [2, 5.5]) { const lit = x === 4 && y === 5.5; R.decal(canvasTex(16, 22, (c) => { c.fillStyle = '#2a1c14'; c.fillRect(0, 0, 16, 22); c.fillStyle = lit ? '#e8b860' : '#141c2a'; c.fillRect(2, 2, 12, 18); c.fillStyle = '#2a1c14'; c.fillRect(7, 2, 2, 18); c.fillRect(2, 10, 12, 2); }, 'win' + lit), { x, y, z: -5.05, w: 1.4, h: 1.9, glow: lit }); if (lit) R.light(x, y, -4.4, 0xe8a850, 4, 6, { flicker: 0.2 }); }
  R.box(0, -4.3, 5, 1.6, 0.3, { tex: 'darkwood' }); for (const x of [-2.3, 2.3]) R.box(x, -4.3, 0.3, 0.3, 3.6, { tex: 'darkwood', solid: false }); R.box(0, -4.3, 5.4, 1.8, 0.2, { tex: 'darkwood', y: 3.6, solid: false });
};

const porch: RoomDef = {
  name: 'Особняк в лесу', chapter: 'Акт II · Полина', w: 30, d: 14, music: 'horror', amb: 'rain', step: 'grass', grade: GRADE, camDist: 25,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x0a0e1c; fog(R, 0x0a0e1c, 20, 50);
    R.floor('grass'); R.floor('dirt', { w: 3, d: 9, z: 1.5, y: 0.01 }); R.ambient(0x2a3450, 2.6, 0x8aa0d0); R.sun(0x9ab0f0, 1.4, -6, 14, 10);
    rainy(R, G, { thunder: true }); mansionFacade(R); R.light(0, 3, -3.6, 0xffc070, 8, 8, { flicker: 0.1 });
    for (const [x, z] of [[-13, -2], [-11, 3], [12, -3], [13, 2.5], [-14, 5.5], [10, 5.5]]) R.sprite('pine', x, z, { scale: 1.3, solid: 0.4 });
    R.sprite('streetlamp', -3.5, 0.6, { solid: 0.2 }); R.light(-3.5, 3.8, 0.8, 0xffd890, 10, 9, { flicker: 0.25 });
    R.door('front', 0, { label: 'Входная дверь', z: -5.05, col: '#2a1c14', cond: () => G.has('porch_key'), locked: P.frontLocked, fn: async (G) => { G.sfx('creak'); await G.goto('pol_hall', 'front'); } });
    [[-2.6, -3.2, 0], [2.6, -3.2, 1], [3.6, -1.6, 0]].forEach(([x, z, k], i) => { R.sprite('flowerpot', x, z, { scale: 1.6 }); R.inter('pot' + i, x, z + 0.8, { label: 'Цветочный горшок', r: 1.2, fn: async (G) => { if (k && !G.has('porch_key')) { await G.run(P.pot); G.give('porch_key'); } else await G.run(P.potNot); } }); });
    R.photo('window', 'Силуэт в окне', 4, -5);
    const pol = R.actor('polina_coat', 1.4, 5.4, { id: 'polina' }); G.follow(pol);
    R.spawn('start', 0, 5.5, 'b'); R.spawn('back', 0, -2.5);
  },
  async enter(G) {
    if (await chapterIntro(G, 'pol', [['АКТ II · THE MISSING CAST', 'act'], ['THE HOUSE THAT LAUGHS', 'big'], ['хоррор · слэшер · немного комедии', 'sm']])) { await G.run(P.arrive); await G.run(P.porchPhoto); G.toast('C — фотоаппарат', '◉'); }
  },
  async photo(G, subs) { if (subs.includes('window') && !G.f.pol_win) { G.f.pol_win = 1; await G.run(P.porchPhotoTaken); } },
};

function hallBuild(R: Builder, G: any) {
  const f = G.f, dark = !!f.pol_dark && !f.pol_light; R.room.group.userData.bg = 0x05060a;
  R.floor('floor'); R.walls('wallgreen', { h: 6, trim: 'darkwood' }); R.particles('dust', { count: 60, top: 5 });
  if (dark) { R.ambient(0x2a3048, 2.6, 0x6a7aa8); carriedLight(R, G); R.light(0, 4, -3, 0x7088d0, 8, 12); }
  else { R.ambient(0x2a2e3e, 2.2, 0x8090b0); R.light(0, 4.6, -1, f.pol_light ? 0xffe0b0 : 0xd8b880, f.pol_light ? 24 : 12, 14, { flicker: f.pol_light ? 0.02 : 0.35 }); R.sprite(canvasTex(20, 12, (c) => { c.fillStyle = '#86641c'; c.fillRect(9, 0, 2, 4); c.fillRect(2, 4, 16, 2); c.fillStyle = '#fff4c8'; for (let i = 0; i < 4; i++) c.fillRect(2 + i * 5, 6, 2, 4); }, 'chand'), 0, -0.5, { y: 4.4, glow: true }); }
  R.door('front', 0, { label: 'На крыльцо', z: -5.96, col: '#2a1c14', fn: async (G) => { if (f.pol_dark && !f.pol_light) return G.run(['~: [Полина] Убежать? Варя внизу. Нет. Хи-хи. Нет-нет.']); await G.goto('pol_porch', 'back'); } });
  R.door('lib', -8, { to: 'pol_library', label: 'Библиотека', col: '#3a2a1c', cond: () => !f.pol_dark, locked: ['~: [Полина] В библиотеке что-то ходит. Тяжело. Как метроном. Не туда.'] });
  R.door('gal', 8, { to: 'pol_gallery', label: 'Галерея', col: '#3a2a1c', cond: () => !!f.pol_dark && !f.pol_light, locked: ['polina/worried: Варь, там галерея. Давай не будем туда, пока можно не туда.'] });
  R.box(-11, -4, 2.2, 1.6, 0.4, { tex: 'darkwood' }); for (let i = 0; i < 6; i++) R.box(-11, -4.6 + i * 0.01, 2.2, 0.4, 0.4, { tex: 'darkwood', y: 0.4 + i * 0.55, solid: false });
  R.look('stairs', -11, -2.6, 'Лестница наверх', P.stairs, { mask: 'none' }); R.look('stairsTr', -11, -2.6, 'Следы на лестнице', P.stairsTr, { mask: 'tragedy' });
  // подвал
  R.box(4.5, -5.6, 2.2, 0.3, 3.4, { tex: 'metal', tint: '#6a6a7a' }); R.sprite(canvasTex(6, 6, (c) => { c.fillStyle = f.pol_light ? '#40e040' : '#601010'; c.fillRect(0, 0, 6, 6); }, 'boltled' + !!f.pol_light), 5.4, -5.3, { y: 2.2, glow: true });
  R.inter('basement', 4.5, -4.3, { label: f.pol_dark ? 'Засов подвала' : 'Дверь в подвал (замок с дисками)', fn: async (G) => {
    if (f.pol_dark) { if (!f.pol_light) return G.run(['~: [Полина] Засов электрический. Над ним лампочка — не горит. Нужен ток.', 'varya: (снизу, глухо) Поль? Ты здесь? Я слышу шаги!', 'polina/worried: Это я! Я… сейчас. Мне надо найти, откуда тут берётся свет.']); return polinaFree(G); }
    if (f.pol_open) return G.goto('pol_basement'); if (!f.pol_book) return G.run(P.basementLocked);
    const r = await lock({ title: 'Замок подвала', hint: 'Три диска. Знаки тушью — как на обороте портретов.', symbols: SYMS, len: 3, answer: ANSWER });
    if (!r) return; if (r.join() === ANSWER.join()) { G.sfx('ok'); await G.run(P.lockRight); f.pol_open = 1; await G.goto('pol_basement'); } else { G.sfx('laugh', { n: 7 }); G.shake(0.2); await G.run(P.lockWrong); } } });
  R.sprite(canvasTex(14, 40, (c) => { c.fillStyle = '#3a2a1c'; c.fillRect(0, 0, 14, 40); c.fillStyle = '#e8e0c8'; c.fillRect(2, 2, 10, 10); c.fillStyle = '#111'; c.fillRect(6, 3, 1, 5); c.fillRect(6, 7, 4, 1); c.fillStyle = '#86641c'; c.fillRect(5, 16, 4, 14); }, 'gclock'), 11, -5, { scale: 1.3, solid: 0.5 });
  R.look('clock', 11, -4, 'Напольные часы', P.clock, { mask: 'none' }); R.look('clockC', 11, -4, 'Часы (кашляют)', P.clockCom, { mask: 'comedy' });
  R.decal(canvasTex(20, 28, (c) => { c.fillStyle = '#86641c'; c.fillRect(0, 0, 20, 28); c.fillStyle = '#5a6a7a'; c.fillRect(2, 2, 16, 24); c.fillStyle = '#7a8a9a'; c.fillRect(4, 3, 2, 22); }, 'hmirror'), { x: -3.5, y: 2.6, w: 1.6, h: 2.3 });
  R.look('hmirror', -3.5, -4.4, 'Зеркало', P.mirrorHall);
  wallpaper(R, -6, true); wallpaper(R, 6, true);
  R.spawn('front', 0, -4.2); R.spawn('start', 0, -4.2); R.spawn('lib', -8, -4.2); R.spawn('gal', 8, -4.2); R.spawn('base', 4.5, -3.8);
}
const hall: RoomDef = {
  name: 'Прихожая', w: 26, d: 12, music: 'horror', amb: 'rain', step: 'wood', grade: GRADE,
  build(R, G) { hallBuild(R, G); if (!G.f.pol_dark) { const pol = R.actor('polina_coat', 1, -3.4, { id: 'polina' }); G.follow(pol); } },
  async enter(G, from) {
    const f = G.f; if (f.pol_dark && !f.pol_dark_seen) { f.pol_dark_seen = 1; G.grade(DARK, true); await G.run(P.polinaStart); return; }
    if (f.pol_dark && !f.pol_light) G.grade(DARK, true);
    if (from === 'pol_porch' && !f.pol_hall_seen) { f.pol_hall_seen = 1; G.sfx('laugh', { n: 5, f: 380, vol: 0.18 }); await G.run(P.enterHall); }
  },
};
async function hide(G: any, actorsToHide: string[] = ['polina']) {
  const p = G.player;
  if (!p.hidden) { await G.run(P.hideIn); p.hidden = true; for (const id of actorsToHide) { const a = G.actor(id); if (a) a.hidden = true; } G.override = () => {}; G.grade({ vig: 0.95, bright: 0.7 }); }
  else { p.hidden = false; for (const id of actorsToHide) { const a = G.actor(id); if (a) a.hidden = false; } G.override = null; G.grade(G.f.pol_dark ? DARK : GRADE); }
}
const library: RoomDef = {
  name: 'Библиотека', w: 26, d: 12, music: 'horror', amb: 'rain', step: 'carpet', grade: GRADE,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x05060a; R.floor('carpet'); R.walls('woodwall', { h: 6 }); R.ambient(0x2a2e3e, 2.2, 0x8090b0); R.particles('dust', { count: 60, top: 5 });
    R.light(-6, 3.5, -3, 0xe8b070, 10, 10, { flicker: 0.3 }); R.light(6, 3.5, -3, 0xe8b070, 10, 10, { flicker: 0.3 }); R.sprite('candle', -6, -5.3, { y: 2, scale: 1.4 }); R.sprite('candle', 6, -5.3, { y: 2, scale: 1.4 });
    PORTRAITS.forEach((pt, i) => { const x = -8 + i * 4; R.decal(portraitTex(i), { x, y: 3, w: 1.9, h: 2.4 }); R.inter('pt_' + pt.id, x, -4.4, { label: 'Портрет: ' + pt.name, fn: (G) => G.run(P.portrait(pt.name, pt.year, pt.sym)) }); R.photo(pt.id, pt.name, x, -5.5); });
    for (const x of [-12, 12]) { R.box(x, -2, 1, 4, 4.6, { tex: 'darkwood' }); for (let s = 0; s < 4; s++) R.box(x + (x > 0 ? -0.5 : 0.5), -2, 0.06, 3.6, 0.6, { tex: 'carpet', y: 0.5 + s * 1.05, solid: false }); }
    R.sprite('bookstand', 0, 1.6, { scale: 1.4, solid: 0.4 });
    R.inter('book', 0, 2.4, { label: 'Проклятая книга', fn: async (G) => { await G.run(P.book); await G.ui.paper(P.bookText); if (!f.pol_book) { f.pol_book = 1; await G.run(P.bookAfter); G.room.guards[0].active = true; G.sfx('creak'); await G.run(P.ownerSeen); } } });
    for (const x of [-9, 9]) { R.box(x, 4.3, 1.8, 1, 3.2, { tex: 'darkwood', tint: '#5a3a2a' }); R.inter('wd' + x, x, 3.3, { label: 'Шкаф (спрятаться / выйти)', r: 1.4, fn: (G) => hide(G) }); }
    const g = R.guard('owner', [[-10, 1], [10, 1]], { speed: 1.7, range: 5.5, half: 0.45, pause: 1.6, onCatch: async (G) => { G.sfx('laugh', { n: 6, f: 300, vol: 0.35 }); G.flash(0.6); G.shake(0.4); await G.run(P.caught); G.player.place(-8, -4.2, 'f'); G.actor('polina')?.place(-7.2, -3.8); G.room.guards[0].actor.place(10, 1); G.camSnap(); } });
    g.active = !!f.pol_book;
    R.door('back', -8, { to: 'pol_hall', spot: 'lib', label: 'В прихожую', z: 5.96, col: '#3a2a1c' }); R.room.inter('back')!.z = 4.6;
    const pol = R.actor('polina_coat', -7, 4, { id: 'polina' }); G.follow(pol); R.spawn('start', -8, 4.4, 'b');
  },
  async photo(G, subs) {
    const f = G.f; const anoms = PORTRAITS.filter((p) => p.anom && subs.includes(p.id)); const normals = PORTRAITS.filter((p) => !p.anom && subs.includes(p.id));
    for (const a of anoms) { await G.run(P.anomalyFound(a.anom)); f['pol_an_' + a.id] = 1; } if (!anoms.length && normals.length) await G.run(P.noAnomaly);
    if (PORTRAITS.every((p) => !p.anom || f['pol_an_' + p.id]) && !f.pol_photos) { f.pol_photos = 1; G.note('n_pol_photos'); await G.run(['polina: Три лгуна. Капитан и собака честные. Теперь — годы на рамах. От самого давнего.']); }
  },
};
const basement: RoomDef = {
  name: 'Подвал', w: 14, d: 10, music: 'horror', amb: null, step: 'stone', grade: { ...GRADE, tint: [1.0, 0.92, 0.9] }, noMasks: true,
  build(R, G) {
    R.room.group.userData.bg = 0x05060a; R.floor('stone'); R.walls('stone', { h: 5 }); R.ambient(0x3a2c30, 2.0, 0x8a7480);
    R.table(0, -3.6, 3, 1); R.decal(canvasTex(48, 56, (c) => { c.fillStyle = '#86641c'; c.fillRect(0, 0, 48, 56); c.fillStyle = '#9fb4c8'; c.fillRect(4, 4, 40, 48); c.fillStyle = '#fff4c8'; for (let y = 6; y < 52; y += 8) { c.fillRect(1, y, 3, 3); c.fillRect(44, y, 3, 3); } }, 'bmirror'), { x: 0, y: 3, w: 2.6, h: 3 });
    R.light(-1.3, 3, -3.8, 0xffd9a0, 6, 7, { flicker: 0.08 }); R.light(1.3, 3, -3.8, 0xffd9a0, 6, 7, { flicker: 0.08 });
    R.sprite(canvasTex(10, 7, (c) => { c.fillStyle = '#fff8e8'; c.fillRect(0, 0, 10, 7); c.fillStyle = '#e84a6f'; c.fillRect(2, 2, 6, 1); }, 'card'), 0.8, -3.6, { y: 1.15, glow: true });
    R.look('card', 0.8, -2.6, 'Открытка', ['~: «Варюш, восемнадцать — это не экзамен…» Мамина открытка. Та же, что в моей гримёрке.', '~: Кто-то развесил по чужим историям кусочки меня. Как метки на карте.'], { r: 1.3 });
    R.decal(canvasTex(16, 10, (c) => { c.fillStyle = '#3a3a40'; c.fillRect(0, 0, 16, 10); c.fillStyle = '#111'; for (let i = 0; i < 4; i++) c.fillRect(2, 1 + i * 2.3, 12, 1); }, 'vent'), { x: 5, y: 3.2, w: 1.5, h: 1 });
    R.inter('vent', 5, -4.3, { label: 'Вентиляционная решётка', fn: (G) => G.run(['~: Решётка. Сквозь неё слышен дождь и скрип половиц наверху.']) });
    R.box(-5, 3.2, 1.6, 1, 1, { tex: 'wood' }); R.box(5.2, 3.6, 1.3, 1.3, 1.3, { tex: 'wood' }); R.spawn('start', -4, -3.6);
  },
  async enter(G) {
    const f = G.f; if (f.pol_trapped) return; f.pol_trapped = 1; const pol = G.actor('polina'); G.unfollow?.(pol);
    await G.run(P.basementDown.slice(0, 3)); G.sfx('door'); G.shake(0.5); G.flash(0.3); await G.run(P.basementDown.slice(3)); G.sfx('laugh', { n: 8, f: 260, vol: 0.4 });
    await G.player.walkTo(5, -3.8, 4); G.player.dir = 'b'; await G.run(P.vent);
    f.pol_dark = 1; G.setPlayerChar('polina_coat'); G.give('flashlight', true); await G.ui.card([['ПОЛИНА', 'act'], ['Страшно — и всё равно идти.', 'sm']]);
    await G.goto('pol_hall', 'base', { fade: 'fade' });
  },
};
// ----- Полина одна: галерея с обоями и Хозяином -----
const DOORS_G = [{ x: -10.5, up: false }, { x: -3.5, up: true }, { x: 3.5, up: false }, { x: 10.5, up: false }];
const gallery: RoomDef = {
  name: 'Галерея', w: 32, d: 11, music: 'horror', amb: 'rain', step: 'wood', grade: DARK, noMasks: true,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x05060a; R.floor('floor'); R.walls('wallgreen', { h: 6, trim: 'darkwood' }); R.ambient(0x2a3048, 2.6, 0x6a7aa8); carriedLight(R, G); for (const x of [-12, -1, 9]) { R.light(x + 2.5, 4.2, -3.6, 0x7088d0, 9, 10); R.decal(canvasTex(16, 24, (c) => { c.fillStyle = '#2a1c14'; c.fillRect(0, 0, 16, 24); c.fillStyle = '#3a5080'; c.fillRect(2, 2, 12, 20); c.fillStyle = '#2a1c14'; c.fillRect(7, 2, 2, 20); c.fillRect(2, 11, 12, 2); }, 'mwin'), { x: x + 2.5, y: 4.3, w: 1.2, h: 1.8, glow: true, color: 0x8090c0 }); }
    for (const d of DOORS_G) { wallpaper(R, d.x, d.up); R.door('g' + d.x, d.x, { label: 'Дверь', col: '#3a2a1c', fn: async (G) => {
      if (!f.pol_gal_hint) { f.pol_gal_hint = 1; await G.run(P.galleryHint); }
      if (d.up) { G.sfx('creak'); return G.goto('pol_kitchen'); }
      G.sfx('creak'); await G.run(P.fakeDoor.slice(0, 1)); G.sfx('laugh', { n: 6, f: 420, vol: 0.3 }); G.flash(0.4); G.shake(0.3); await G.run(P.fakeDoor.slice(1)); } });
      R.look('wp' + d.x, d.x + 1.4, -4.2, 'Обои над дверью', d.up ? P.wallpaperUp : P.wallpaperDown, { r: 1.0, y: 4.6 }); }
    for (const [i, x] of [-7, 0, 7].entries()) { R.box(x, -4.6, 1.8, 0.9, 3.2, { tex: 'darkwood', tint: '#5a3a2a' }); R.inter('wd' + i, x, -3.6, { label: 'Шкаф (спрятаться / выйти)', r: 1.3, fn: (G) => hide(G, []) }); }
    for (const x of [-14, 14]) R.sprite('candle', x, -5, { y: 1.6, scale: 1.4 });
    R.guard('owner', [[-13, 1.6], [13, 1.6]], { speed: 2.1, range: 6.5, half: 0.5, pause: 1.2, onCatch: async (G) => { G.sfx('laugh', { n: 6, f: 300, vol: 0.35 }); G.flash(0.6); G.shake(0.4); await G.run(['*: Белая маска поворачивается к Полине. Смех — её собственный, только медленнее.', '*: Свет фонаря гаснет и загорается. Полина снова у входа в галерею.', 'polina/scared: Хорошо. Ещё раз. Медленнее. Держаться у шкафов.']); G.player.place(-14, 3.5, 'r'); G.room.guards[0].actor.place(13, 1.6); G.camSnap(); } });
    R.door('back', -14, { to: 'pol_hall', spot: 'gal', label: 'В прихожую', z: 5.46, col: '#3a2a1c' }); R.room.inter('back')!.z = 4.2;
    R.spawn('start', -14, 3.8, 'r');
  },
  async enter(G) { if (!G.f.pol_gal_seen) { G.f.pol_gal_seen = 1; G.sfx('heart'); await G.run(['~: [Полина] Галерея. Четыре двери. Над каждой — свой кусок обоев. И Хозяин, который ходит туда-обратно, как маятник.', 'varya: (далеко, сквозь стены) Поль, ты как?', 'polina/worried: Я… смотрю. Ты же просила, чтобы я смотрела.']); } },
};
const kitchen: RoomDef = {
  name: 'Кухня', w: 16, d: 10, music: 'horror', amb: 'rain', step: 'stone', grade: DARK, noMasks: true,
  build(R, G) {
    const f = G.f; R.room.group.userData.bg = 0x05060a; R.floor('checker'); R.walls('plaster', { h: 5, tint: '#8a9aa0' }); R.ambient(0x2a3048, 2.6, 0x6a7aa8); if (!f.pol_light) carriedLight(R, G); else { R.ambient(0x40382c, 1.5, 0xffe0c0); R.light(0, 4, 0, 0xffe8c0, 20, 14); }
    R.table(-2, 0, 3, 1.4); R.box(-6, -4.3, 3, 1, 1.2, { tex: 'wood' }); R.sprite('basket', -6, -4.2, { y: 1.2 });
    R.box(5, -4.6, 1.4, 0.4, 2, { tex: 'metal' }); R.sprite(canvasTex(10, 14, (c) => { c.fillStyle = '#484e59'; c.fillRect(0, 0, 10, 14); c.fillStyle = f.pol_light ? '#40e040' : '#601010'; c.fillRect(2, 2, 2, 2); c.fillStyle = '#e8e0c8'; c.fillRect(5, 1, 4, 4); c.fillStyle = '#111'; c.fillRect(3, f.pol_light ? 5 : 9, 4, 3); }, 'fuse' + !!f.pol_light), 5, -4.3, { y: 1.6, scale: 1.2 });
    R.inter('fuse', 5, -3.4, { label: f.pol_light ? 'Щиток (включён)' : 'Электрощиток', fn: async (G) => { if (f.pol_light) return; await G.run(P.fuse); f.pol_light = 1; G.flash(0.7); G.grade({ ...GRADE, bright: 1.05, sat: 0.7 }, false); await G.run(P.lightsOn); await G.rebuild();
      const B = new (await import('../world/room')).Builder(G.room, G); B.sprite(canvasTex(24, 12, (c) => { c.fillStyle = '#1c1614'; c.fillRect(0, 6, 24, 6); c.fillStyle = '#111'; c.fillRect(2, 2, 14, 3); c.fillRect(5, 0, 8, 3); c.fillStyle = '#e8e4d8'; c.fillRect(15, 4, 7, 7); c.fillStyle = '#111'; c.fillRect(16, 6, 2, 2); c.fillRect(19, 6, 2, 2); }, 'ownerpile'), 1, 2.6, { scale: 1.3 });
      G.focus(1, 2.4, 14); await G.wait(0.6); await G.run(P.owner); G.unfocus(); G.give('owner_mask' as any, true); } });
    if (f.pol_light) R.look('pile', 1, 3.2, 'Плащ, шляпа и маска', ['~: [Полина] Пустой плащ. Я его… выключила? Хи-хи. Звучит как подвиг. Не буду так говорить, а то сглажу.']);
    R.door('back', -5.5, { to: 'pol_gallery', label: 'В галерею', z: 4.96, col: '#3a2a1c', fn: async (G) => G.goto(f.pol_light ? 'pol_hall' : 'pol_gallery', f.pol_light ? 'gal' : 'start') }); R.room.inter('back')!.z = 3.8;
    R.spawn('start', -5.5, 3.6, 'b');
  },
  async enter(G) { if (!G.f.pol_k_seen) { G.f.pol_k_seen = 1; G.sfx('ok'); await G.run(['~: [Полина] Кухня. Настоящая. Не кирпичная стена. Обои с бутоном вверх — не обманули.', 'polina/laugh: Хи-хи. Варя, я догадалась сама! …Она меня не слышит. Ну и ладно. Я слышу.']); } },
};
async function polinaFree(G: any) {
  G.sfx('gear'); await G.wait(0.4); G.setPlayerChar('varya'); G.set('pol_dark', 0);
  await G.goto('pol_basement', 'start', { fade: 'fade', silent: true });
  const B = new (await import('../world/room')).Builder(G.room, G); const pol = B.actor('polina_coat', -5.5, 3.8, { id: 'polina', dir: 'b' }); G.player.place(-1, -2, 'f'); G.camSnap();
  await pol.walkTo(-2, 0, 3); pol.face(G.player.x, G.player.z); G.player.face(pol.x, pol.z); G.audio.music('school_soft');
  await G.run(P.free); G.sfx('applause', { dur: 4 });
  await finishChapter(G, 'polina', [['THE HOUSE THAT LAUGHS', 'act'], 'Полина заметила то, чего не заметил никто.', ['Смелость — это идти, когда страшно.', 'sm']]);
}
export const rooms: Record<string, RoomDef> = { pol_porch: porch, pol_hall: hall, pol_library: library, pol_basement: basement, pol_gallery: gallery, pol_kitchen: kitchen };
