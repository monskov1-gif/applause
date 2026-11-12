// Theater Hub: Театр имени М. Ковалевского. Акты I–IV: гримёрка, коридор, сцена, закулисье, мастерская, архив, кабинет.
import * as THREE from 'three';
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext, tex } from '../gfx/tex';
import { D, PAPERS } from '../data/dialogue/hub';
import { pick } from '../ui/minigames';
import { CHARS } from '../data/chars';
import { sconce, rug, PROPTEX, seatRows, theatreBox, chandelier, vanity, costumeRack, photoWall, column, clutterTex, photoTex as photoTexV, gear, windowBeam } from '../world/decor';
import { extraRooms } from './hubplus';

const FRIENDS = ['polina', 'ruben', 'matvey', 'erika', 'liza', 'angelina'];
export const ROLES: Record<string, [string, string]> = {
  polina: ['Фрейлина со свечой', 'Смотрительница маяка, которая всех выводит'], ruben: ['Капитан стражи', 'Механик сцены, которого наконец видно'],
  matvey: ['Придворный поэт (без слов)', 'Шут, который говорит правду'], erika: ['Советница Королевы', 'Летописец, который записывает как было'],
  liza: ['Дама в окне', 'Дама, которая вышла из окна'], angelina: ['Придворная певица', 'Голос, который поёт своё'],
};
const mirrorTex = (w = 48, h = 64, bulbs = true) => canvasTex(w, h, (c) => {
  c.fillStyle = '#86641c'; c.fillRect(0, 0, w, h); c.fillStyle = '#d4ae48'; c.fillRect(1, 1, w - 2, h - 2); c.fillStyle = '#9fb4c8'; c.fillRect(4, 4, w - 8, h - 8);
  c.fillStyle = '#c8d8e8'; for (let i = 0; i < w; i += 9) c.fillRect(4 + i, 4, 3, h - 8); c.fillStyle = '#e8f0f8'; c.fillRect(8, 6, 2, h - 14);
  if (bulbs) { c.fillStyle = '#fff4c8'; for (let y = 6; y < h - 4; y += 8) { c.fillRect(1, y, 3, 3); c.fillRect(w - 4, y, 3, 3); } }
}, 'mirror' + w + h + bulbs);
const figTex = (col: string, hair: string) => canvasTex(24, 44, (c) => { c.fillStyle = hair; c.fillRect(5, 0, 14, 22); c.fillStyle = col; c.fillRect(6, 12, 12, 30); c.fillRect(3, 30, 18, 14); c.fillStyle = 'rgba(0,0,0,0.25)'; c.fillRect(8, 3, 8, 8); }, 'fig' + col + hair);
const photoTex = (key: string, draw: (c: CanvasRenderingContext2D) => void) => canvasTex(28, 22, (c) => { c.fillStyle = '#3a2a14'; c.fillRect(0, 0, 28, 22); c.fillStyle = '#d8ccb0'; c.fillRect(2, 2, 24, 18); draw(c); }, 'photo' + key);
const people = (c: CanvasRenderingContext2D, cols: string[], y = 9) => cols.forEach((col, i) => { const x = 4 + i * (20 / cols.length); c.fillStyle = col; c.fillRect(x, y + 3, 3, 7); c.fillStyle = '#d8a888'; c.fillRect(x, y, 3, 3); });

function dustAndBase(R: Builder, warm = true) { R.particles('dust', { count: 90, top: 6 }); R.ambient(warm ? 0x4a3830 : 0x30344a, 1.1, warm ? 0xffe6c8 : 0xc8d8ff); }

const dressing: RoomDef = {
  name: 'Гримёрка режиссёра', chapter: 'Акт I · Приглашение', w: 16, d: 10, music: 'backstage', amb: 'hall', step: 'wood', grade: { tint: [1.05, 0.98, 0.9], vig: 0.45 },
  build(R, G) {
    const f = G.f; R.floor('parquet'); R.walls('wallpaper', { h: 6, trim: 'darkwood' }); dustAndBase(R);
    R.decal(canvasTex(96, 64, (c) => { c.fillStyle = '#4a0c14'; c.fillRect(0, 0, 96, 64); c.strokeStyle = '#d4ae48'; c.strokeRect(3.5, 3.5, 89, 57); c.strokeRect(8.5, 8.5, 79, 47); }, 'rug'), { flat: true, x: 0, z: 1, w: 9, h: 5 });
    // диван, на котором просыпается Варя
    R.box(-5.4, -3.3, 4.2, 1.5, 0.9, { tex: 'velvet' }); R.box(-5.4, -4.3, 4.2, 0.5, 1.9, { tex: 'velvet' }); R.box(-7.7, -3.5, 0.4, 1.9, 1.4, { tex: 'darkwood' }); R.box(-3.1, -3.5, 0.4, 1.9, 1.4, { tex: 'darkwood' });
    R.look('bed', -5.4, -2.2, 'Осмотреть диван', D.bedLook, { quiet: true });
    // гримёрный столик с зеркалом
    R.table(-0.2, -4.1, 3.4, 1.2); R.decal(mirrorTex(), { x: -0.2, y: 3.4, w: 3, h: 4 });
    for (const dx of [-1.6, 1.6]) R.light(-0.2 + dx, 3.4, -3.4, 0xffd9a0, 5, 8, { flicker: 0.04 });
    R.decal(figTex('#a3122a', '#2a1512'), { x: 0.4, y: 3.3, z: -4.94, w: 1.2, h: 2.4, mask: 'tragedy', opacity: 0.75 });
    R.inter('mirror', -0.2, -3.1, { label: 'Посмотреть в зеркало', mask: 'none', fn: async () => { await G.run(f.mirror_n ? D.mirror1 : D.mirror0); f.mirror_n = 1; } });
    R.inter('mirrorTr', -0.2, -3.1, { label: 'Зеркало', mask: 'tragedy', photo: 'Силуэт в зеркале', fn: () => G.run(D.mirrorTr) });
    R.decal(photoTex('family', (c) => people(c, ['#7a9ab8', '#4a5a4a', '#c2452d', '#b8a8c8', '#e8884a', '#e8b0c8', '#6a9a7a'])), { x: -1.3, y: 1.55, z: -4.3, w: 0.9, h: 0.7 });
    R.look('family', -1.5, -3.1, 'Фотография в рамке', D.family, { r: 1.1 });
    R.look('cardDr', 1.2, -3.1, 'Открытка', D.cardDr, { mask: 'drama', r: 1.2 });
    R.sprite(canvasTex(10, 7, (c) => { c.fillStyle = '#fff8e8'; c.fillRect(0, 0, 10, 7); c.fillStyle = '#e84a6f'; c.fillRect(2, 2, 6, 1); c.fillRect(2, 4, 4, 1); }, 'card'), 1.2, -4, { y: 1.15, mask: 'drama', glow: true });
    // стол с письмами
    R.table(6.6, 0.5, 1.4, 3.2);
    R.sprite(canvasTex(10, 8, (c) => { c.fillStyle = '#f4ecd4'; c.fillRect(0, 1, 10, 7); c.fillStyle = '#a3122a'; c.fillRect(4, 3, 2, 2); }, 'env'), 6.5, 0.2, { y: 1.15 });
    R.inter('invite', 5.6, 0.2, { label: 'Конверт «Варваре»', fn: async () => { await G.ui.paper(PAPERS.invite); if (!f.read_invite) await G.run(D.inviteAfter); } });
    R.inter('recs', 5.6, 1.4, { label: 'Рекомендательный лист', fn: async () => { await G.ui.paper(PAPERS.recs); if (!f.read_recs) { f.read_recs = 1; await G.run(D.recsAfter); } } });
    // камера Василисы
    R.box(4, -4.5, 2, 0.6, 2.2, { tex: 'darkwood' });
    if (!G.has('camera')) { R.sprite('cam', 4, -4.3, { y: 2.2, name: 'camSpr' }); R.inter('cam', 4, -3.6, { label: 'Фотоаппарат с запиской', fn: async () => { await G.ui.paper(PAPERS.camnote); await G.run(D.camAfter); G.toast('C — достать фотоаппарат, E — снимок', '◉'); G.room.named.camSpr.visible = false; G.room.inter('cam').enabled = false; G.ui.hud(); } }); }
    // вешалка
    R.sprite(canvasTex(20, 44, (c) => { c.fillStyle = '#2a1c14'; c.fillRect(9, 4, 2, 40); c.fillRect(4, 42, 12, 2); c.fillRect(3, 6, 14, 2); c.fillStyle = '#3a3a40'; c.fillRect(2, 0, 9, 5); c.fillRect(0, 4, 13, 2); c.fillStyle = '#8e1830'; c.fillRect(11, 8, 6, 18); c.fillStyle = '#2f7f82'; c.fillRect(3, 8, 6, 14); }, 'rack'), -7.2, 2.5, { solid: 0.4 });
    R.look('rack', -7.2, 3.1, 'Вешалка', ['~: Вешалка. Чужая шляпа, чей-то красный шарф и бирюзовый свитер. Мой. Я его сюда не вешала.'], { mask: 'none', r: 1.3 });
    R.look('rackCom', -7.2, 3.1, 'Шляпа (она шевелится)', D.rackCom, { mask: 'comedy', r: 1.3 });
    R.sprite('plant', 7.2, -4.2, { solid: 0.3 }); R.sprite('lamp', -2.6, -4.4); R.light(-2.6, 2.6, -4, 0xffc890, 8, 8);
    // лампочки вокруг зеркала, бусы, фото за рамой, костюмы на стойке, перья, шляпные коробки, ширма
    const bulbs = new THREE.InstancedMesh(new THREE.SphereGeometry(0.1, 8, 6), new THREE.MeshLambertMaterial({ color: 0xfff4d8, emissive: 0xffc070 }), 24); const m4 = new THREE.Matrix4(); let bi = 0;
    for (let i = 0; i < 7; i++) for (const sx of [-1, 1]) { m4.makeTranslation(-0.2 + sx * 1.6, 1.6 + i * 0.55, -4.85); bulbs.setMatrixAt(bi++, m4); } for (let i = 0; i < 9; i++) { m4.makeTranslation(-1.6 + i * 0.35, 5.45, -4.85); bulbs.setMatrixAt(bi++, m4); } bulbs.count = bi; R.room.group.add(bulbs);
    for (let i = 0; i < 4; i++) R.decal(photoTexV(i), { x: -1.4 + i * 0.75 + (i % 2) * 0.1, y: 4.9 - (i % 2) * 0.3, z: -4.9, w: 0.5, h: 0.62 });
    for (let i = 0; i < 5; i++) R.sprite(clutterTex(['bottle', 'powder', 'brushes', 'perfume', 'lipstick'][i]), -1.4 + i * 0.6, -4.2 + (i % 2) * 0.25, { y: 1.15, scale: 0.9 });
    costumeRack(R, 3.6, 4.2, 3.4, 2); R.sprite(PROPTEX.feathers(), 6.6, 4.4, { scale: 1.4 }); R.sprite(PROPTEX.screen(), -7, -1.4, { scale: 1.5 });
    for (let i = 0; i < 3; i++) R.sprite(PROPTEX.hatbox(), 7 + (i % 2) * 0.15, -2.6, { y: i * 1.05, scale: 1 }); R.sprite(PROPTEX.boa(), 4.1, -4.4, { y: 2.2, scale: 1.1 }); R.sprite(PROPTEX.stool(), -0.2, -2.8, {});
    photoWall(R, -4.6, 2.6, 6); R.sprite(PROPTEX.trunk(), 1.6, 4.4, { scale: 1.3, solid: 0.8 }); R.light(-0.2, 2, -2.6, 0xffc070, 4, 6);
    R.poster('ЗАВТРА', 'премьера', { x: 2.2, y: 3.6, w: 1.6, h: 2.2 });
    R.inter('journal', 2.2, -4.0, { label: 'Журнал помрежа (сохранить)', y: 1.4, fn: () => G.ui.saveLoad('save') });
    R.sprite('book', 2.2, -4.5, { y: 0.0, scale: 1.4 });
    R.door('door', 6, { to: 'hub_corridor', spot: 'dressing', label: 'В коридор', cond: () => !!f.read_invite, locked: 'Сначала — конверт на столе. Не люблю выходить, не зная, куда.' });
    R.spawn('start', -5.4, -2); R.spawn('door', 6, -3.4);
  },
  async enter(G) {
    const f = G.f; if (f.woke) return;
    const p = G.player; p.place(-5.4, -3.3); p.y = 0.9; p.pose = 'lie'; G.camSnap(); G.R.setGrade({ bright: 0, vig: 1 }, true);
    G.audio.music(null); await G.ui.card([['СИДНЕЙ · 23:41', 'act'], 'Завтра Варе исполняется восемнадцать.', 'План праздника расписан по минутам. Гости рассажены. Тост отрепетирован перед зеркалом.', ['Осталось только уснуть.', 'sm']]);
    G.sfx('knock', { n: 3 }); await G.wait(2.4); await G.ui.card([['АКТ I', 'act'], ['THE INVITATION', 'big'], ['Три удара в пол. Так начинают спектакли.', 'sm']]);
    G.audio.music('backstage'); G.applyGrade(); await G.wait(1.6);
    p.pose = null; p.y = 0; p.place(-5.4, -2, 'f'); await G.run(D.wake); f.woke = 1; G.toast('WASD / стрелки — ходить · E — действие · Esc — пауза', '✦');
  },
};

const corridor: RoomDef = {
  name: 'Служебный коридор', floor: 'Партер', w: 40, d: 20, music: 'backstage', amb: 'hall', step: 'carpet', grade: { tint: [1.02, 0.96, 0.92], vig: 0.5 },
  build(R, G) {
    const f = G.f, n = G.doneCount(); R.floor('carpet'); R.walls('woodwall', { h: 6 }); dustAndBase(R); R.ambient(0x6a5040, 1.4, 0xffe0c0);
    // Т-образная развилка: верхняя галерея гримёрок, центральный проход, нижняя галерея с лестницами
    // два «разрезанных» помещения между галереями: реквизиторская и склад декораций (за низкими стенками)
    for (const [x0, x1] of [[-20, -2.6], [2.6, 20]]) { R.collider(x0, -4.5, x1, 3); R.floor('floor', { x: (x0 + x1) / 2, w: x1 - x0, z: -0.75, d: 7.5, y: 0.02 }); for (const [a, b, c, d] of [[x0, -4.5, x1, -4.2], [x0, 2.7, x1, 3], [x1 - 0.3, -4.5, x1, 3]]) R.box((a + c) / 2, (b + d) / 2, Math.abs(c - a), Math.abs(d - b), 1.3, { tex: 'woodwall', solid: false }); }
    R.sprite(PROPTEX.trunk(), -17, -2, { scale: 1.4 }); R.sprite(PROPTEX.hatbox(), -14.6, -2.8, { scale: 1.1 }); R.sprite(PROPTEX.hatbox(), -14.4, -2.8, { y: 1, scale: 1 }); R.sprite('masks', -12, -1.6, { scale: 1.6 }); R.sprite(PROPTEX.mannequin(), -9.5, -2.5, { scale: 1.3 }); R.sprite('bust', -6.6, -1, { scale: 1.4 }); R.sprite(PROPTEX.feathers(), -5, -2.6, {}); R.sprite('wheel', -15.5, 1.4, { scale: 1.4 }); R.sprite(PROPTEX.screen(), -10.6, 1.2, { scale: 1.2 });
    R.sprite('tree', 5.6, -2.4, { scale: 0.9 }); R.sprite('ladder', 8.4, -3.6, { scale: 1.2 }); R.sprite('bridgecut', 12.5, -1.6, { scale: 0.9 }); R.sprite('pine', 16.6, -2.6, { scale: 0.8 }); R.sprite('stagelight', 18, 1.4, { scale: 1.4 }); R.sprite('horse', 9.8, 1.1, { scale: 1 }); R.sprite('gear', 6, 1.5, { scale: 1.4 });
    R.decal(canvasTex(40, 10, (c) => { c.fillStyle = '#e2d5ac'; c.fillRect(0, 0, 40, 10); ptext(c, 'РЕКВИЗИТ', 20, 1, { size: 7, col: '#3a1a14', align: 'center' }); }, 'lblR'), { x: -11, y: 1.0, z: 3.04, w: 2.6, h: 0.65 }); R.decal(canvasTex(40, 10, (c) => { c.fillStyle = '#e2d5ac'; c.fillRect(0, 0, 40, 10); ptext(c, 'ДЕКОРАЦИИ', 20, 1, { size: 7, col: '#3a1a14', align: 'center' }); }, 'lblD'), { x: 11, y: 1.0, z: 3.04, w: 2.6, h: 0.65 });
    for (const x of [-11, 11]) R.light(x, 3, -1, 0xffd8a0, 4, 8, { flicker: 0.05 }); for (const x of [-11, 11]) R.light(x, 3.6, -1, 0xffd0a0, 5, 9);
    for (let x = -17; x <= 17; x += 6.8) { sconce(R, x, 3.3, -9.96, { light: n >= 1 ? 6 : 3.5 }); }
    for (const x of [-15, -6, 6, 15]) R.light(x, 2.6, 6.5, n >= 1 ? 0xffc880 : 0xc8b8a0, n >= 1 ? 9 : 5, 9, { flicker: n >= 1 ? 0.03 : 0.12 });
    rug(R, -11, -7.2, 16, 2.4, { col: '#4a0c14' }); rug(R, 11, -7.2, 16, 2.4, { col: '#4a0c14' }); rug(R, 0, 0, 3.4, 6.4, { col: '#4a0c14' });
    R.door('d_dress', -16, { to: 'hub_dressing', spot: 'door', label: 'Гримёрка режиссёра', sign: 'РЕЖИССЁР' });
    R.door('d_diva', -10, { label: 'Гримёрка примы', sign: 'АЛЛА ЕВА', col: '#721022', cond: () => !!f.act4, locked: D.divaDoorLocked, fn: (G) => G.goto('fin_diva', 'start', { fade: 'fade' }) });
    R.door('d_costume', -4, { to: 'hub_costume', label: 'Костюмерная', sign: 'КОСТЮМЫ', col: '#3a2a4a' });
    R.decal(canvasTex(56, 40, (c) => { c.fillStyle = '#5a4029'; c.fillRect(0, 0, 56, 40); c.fillStyle = '#8a6a3a'; c.fillRect(2, 2, 52, 36); const cols = ['#f4ecd4', '#e2d5ac', '#fff']; for (let i = 0; i < 7; i++) { c.fillStyle = cols[i % 3]; c.fillRect(4 + (i % 4) * 12, 4 + Math.floor(i / 4) * 16, 10, 13); c.fillStyle = '#a3122a'; c.fillRect(8 + (i % 4) * 12, 4 + Math.floor(i / 4) * 16, 2, 2); } if (G.done('matvey')) { for (let i = 0; i < 24; i++) { c.fillStyle = ['#f2c230', '#e84a6f', '#5fd0c8'][i % 3]; c.fillRect((i * 13) % 54, (i * 7) % 38, 2, 2); } } }, 'board' + G.done('matvey')), { x: 0.8, y: 2.8, w: 3.2, h: 2.3 });
    R.inter('board', 0.8, -8.6, { label: 'Доска объявлений', fn: async (G) => { await G.ui.paper(PAPERS.board); G.note('troupe'); } });
    R.door('d_work', 10, { to: 'hub_workshop', label: 'Мастерская', sign: 'ЦЕХ', cond: () => G.done('polina'), locked: D.workshopLocked });
    R.door('d_closet', 16, { label: 'Подсобка', sign: 'ИНВЕНТАРЬ', col: '#3a3a3a', fn: (G) => G.run(['~: Подсобка. Вёдра, швабры и надпись мелом на двери изнутри: «Не забудь, что ты здесь уже была». Почерк… знакомый.']) });
    R.poster('ВИШНЁВЫЙ САД', 'АЛЛА ЕВА', { x: -13, y: 2.7, w: 1.6, h: 2.3, face: '#b9794f' }); R.look('p1', -13, -8.6, 'Афиша', D.posterAlla, { photo: 'Афиша с Аллой Евой', r: 1.2 });
    R.poster('ГАМЛЕТ', 'все роли — АЛЛА ЕВА', { x: 13, y: 2.7, w: 1.6, h: 2.3, bg: '#d8c8a0' }); R.look('p2', 13, -8.6, 'Афиша', D.posterAlla2, { r: 1.2 });
    R.poster('СНЕЖНАЯ КОРОЛЕВА', 'гастроли', { x: 7, y: 2.9, w: 1.4, h: 2, bg: '#cfe0f0', fg: '#1a2a5a' }); R.look('p3', 7, -8.6, 'Афиша гастролей', ['~: «Снежная королева». Гастрольный состав: Василиса, Дана, Нина, Аня, Оля. На полях приписка Даны: «Вернёмся — и чтоб финал был с блёстками».'], { r: 1.2 });
    // нижняя галерея: лестницы и выходы
    R.door('up', 6.5, { wall: 'w', to: 'hub_mezz', spot: 'stair', label: 'Служебная лестница — на бельэтаж', sign: '↑ 2' });
    R.door('d_stage', 6.5, { wall: 'e', to: 'hub_stage', spot: 'corridor', label: 'В кулисы сцены', sign: 'СЦЕНА', col: '#5a4029', fade: 'curtain' });
    R.door('d_foyer', -6, { wall: 's', to: 'hub_foyer', spot: 'service', label: 'В фойе' });
    R.door('d_trap', 14, { wall: 's', to: 'hub_trap', spot: 'stairs', label: 'Лестница вниз — в трюм', cond: () => !!f.act1, locked: ['~: Решётка на лестнице в трюм заперта. Табличка: «Только после первой репетиции».'] });
    R.sprite('chair', -17, 8.6, { solid: 0.4 }); R.sprite('plant', 18.4, 8.4, { solid: 0.3 }); R.sprite(PROPTEX.trunk(), -8, 8.6, { solid: 0.8, scale: 1.2 }); R.sprite('flowerpot', 4, 8.9, { scale: 1.4 }); R.sprite(PROPTEX.stool(), -18, -8.8, {}); R.sprite('plant', 18.6, -9, { solid: 0.3 });
    R.decal(canvasTex(72, 14, (c) => { c.fillStyle = '#1a1a1a'; c.fillRect(0, 0, 72, 14); c.strokeStyle = '#d4ae48'; c.strokeRect(0.5, 0.5, 71, 13); ptext(c, '→ СЦЕНА · ↓ ФОЙЕ', 36, 3, { size: 8, col: '#e8d8a8', align: 'center' }); }, 'csign2'), { flat: true, x: 0, z: 1.6, y: 0.04, w: 4.6, h: 0.9 });
    if (G.done('matvey')) { for (let x = -18; x <= 18; x += 2.6) R.sprite('lantern', x, -9.3, { y: 4.4 + Math.sin(x) * 0.2, glow: true }); R.npc('matvey', -7, -7.4, { talk: (G: any) => G.run(G.state.mask === 'drama' ? D.h_matveyDr : D.h_matvey) }); }
    R.spawn('start', 0, -7); R.spawn('dressing', -16, -8.4); R.spawn('diva', -10, -8.4); R.spawn('costume', -4, -8.4); R.spawn('work', 10, -8.4); R.spawn('stage', 18.2, 6.5, 'l'); R.spawn('stair', -18.2, 6.5, 'r'); R.spawn('foyer', -6, 8.4, 'b'); R.spawn('trap', 14, 8.4, 'b');
  },
};
const stage: RoomDef = {
  name: 'Главная сцена', w: 34, d: 18, camZMax: 0.5, camDist: 22, music: 'theater', amb: 'hall', step: 'wood', grade: { vig: 0.5, bloom: 0.6 },
  build(R, G) {
    const f = G.f, n = G.doneCount();
    R.floor('stage'); R.floor('carpet', { z: 6.2, d: 5.6, y: 0.02 }); R.walls('black', { h: 9 }); R.ambient(0x3a2c30, 1.5, 0x8a7480); R.particles('dust', { count: 140, top: 8 });
    R.box(0, 3.3, 34, 0.25, 0.12, { tex: 'gold', solid: false, cast: false });
    for (let x = -15.5; x <= 15.5; x += 3.1) R.curtain(x, -8.6, 3.0, 9, { tint: x % 2 ? undefined : undefined });
    R.box(0, -8.2, 34, 0.5, 1.4, { tex: 'gold', y: 7.6, solid: false });
    for (const sx of [-1, 1]) { R.box(sx * 16.2, 2.6, 1.2, 1.2, 9, { tex: 'gold' }); R.curtain(sx * 15, -3, 1.2, 9, { solid: true }); }
    R.spot(0, 14, 6, 0, -3, 0xffe2b0, 75, { angle: 0.62, cone: 0.05, pen: 0.8 }); R.spot(-9, 12, 4, -9, 0, 0xffd0a0, 40, { angle: 0.5, shadow: false, cone: 0.035, pen: 0.9 }); R.spot(9, 12, 4, 8, -2, 0xc0d0ff, 40, { angle: 0.5, shadow: false, cone: 0.035, pen: 0.9 });
    R.sprite('lamp', 0, -5.5); R.light(0, 2.8, -4.6, 0xffe0a0, 4, 8, { flicker: 0.05 });
    seatRows(R, 4.6, 3, { x0: -12.5, x1: 12.5, aisle: 2.2, dz: 1.5 }); theatreBox(R, -15.6, 1.5, 'w', 3.6); theatreBox(R, 15.6, 1.5, 'e', 3.6); theatreBox(R, -15.6, 6, 'w', 3.6); theatreBox(R, 15.6, 6, 'e', 3.6); chandelier(R, -9, 11.5, 8, 0.9, { light: 8 }); chandelier(R, 9, 11.5, 8, 0.9, { light: 8 });
    // портал сцены: золотая арка, ламбрекен, рампа с софитами
    R.box(0, 3.3, 32, 0.6, 1.6, { tex: 'gold', y: 8.4, solid: false }); for (const sx of [-1, 1]) R.box(sx * 13.6, 3.3, 1.4, 0.6, 9.8, { tex: 'gold', solid: false }); for (let x = -12; x <= 12; x += 2) R.box(x, 3.25, 2, 0.3, 1.2, { tex: 'velvet', y: 7.2, solid: false }); for (let x = -13; x <= 13; x += 1.3) R.box(x, 3.2, 0.3, 0.2, 0.18, { color: 0xfff0c0, emissive: 0xffc060, y: 0.08, solid: false, cast: false });
    R.box(0, 3.6, 22, 0.6, 0.6, { tex: 'darkwood', solid: false });
    R.door('d_cor', -4.5, { wall: 'w', to: 'hub_corridor', spot: 'stage', label: 'В служебный коридор', col: '#2a1c14', fade: 'curtain' });
    R.door('d_foyer', -4, { wall: 's', to: 'hub_foyer', spot: 'stalls', label: 'Через партер — в фойе' });
    R.inter('hatch', 5.4, -1.2, { label: 'Люк в полу сцены', cond: () => !!f.act1, y: 1, fn: (G) => G.goto('hub_trap', 'hatch', { fade: 'fade' }) }); R.decal(canvasTex(16, 16, (c) => { c.fillStyle = '#1a120c'; c.fillRect(0, 0, 16, 16); c.fillStyle = '#3a2a1a'; c.fillRect(1, 1, 14, 14); c.fillStyle = '#86641c'; c.fillRect(6, 7, 4, 2); }, 'hatchd'), { flat: true, x: 5.4, z: -1.6, y: 0.03, w: 1.6, h: 1.6 });
    R.door('d_back', 12, { to: 'hub_backstage', label: 'За кулисы', z: -8.4, col: '#2a1c14', cond: () => !!f.act1, locked: 'Сначала разберусь с тем, что на сцене.' });
    // режиссёрский столик
    R.table(-10.5, 1, 2.6, 1.3); R.sprite('book', -10.8, 1.1, { y: 1.15 }); R.sprite('lamp', -9.6, 0.7, { y: 1.1, scale: 0.4 }); R.light(-10.2, 2.2, 1.2, 0xffd090, 6, 6);
    R.inter('script', -10.5, 2.1, { label: f.act1 ? 'Сценарий' : 'Взять сценарий и начать репетицию', cond: () => !!f.met_cast, fn: async (G) => { if (!f.act1) return rehearsal(G); await G.ui.paper(PAPERS.script1); if (!f.read_script) { f.read_script = 1; await G.run(D.scriptAfter); } if (f.act4 || n >= 6) { await G.ui.paper(PAPERS.page8); G.note('page8'); } } });
    R.inter('casting', -9.2, 2.1, { label: 'Лист распределения ролей', cond: () => FRIENDS.some((x) => G.done(x) && !f['cast_' + x]), fn: casting });
    const kn = n >= 5 ? 5 : n >= 3 ? 3 : n >= 1 ? 1 : 0;
    if (kn && !f['kn' + kn]) { R.sprite(canvasTex(8, 6, (c) => { c.fillStyle = '#f4ecd4'; c.fillRect(0, 0, 8, 6); c.fillStyle = '#3a2a5a'; c.fillRect(1, 1, 5, 1); c.fillRect(1, 3, 4, 1); }, 'knote'), -11.4, 1.3, { y: 1.15, glow: true }); R.inter('knote', -11.8, 2.1, { label: 'Записка от К.', r: 1.3, fn: async (G) => { await G.ui.paper((D as any)['kNote' + kn]); f['kn' + kn] = 1; G.note('knotes'); await G.rebuild(); } }); }
    // репетиционное зеркало на колёсах — рядом с ним появляется Алла Ева
    R.box(9.6, -2.5, 0.3, 3, 4.2, { tex: 'mirror' }); R.box(9.6, -2.5, 0.5, 3.3, 0.3, { tex: 'gold', solid: false }); R.box(9.6, -2.5, 0.5, 3.3, 0.25, { tex: 'gold', y: 4.2, solid: false });
    for (let x = -14; x <= 14; x += 2) { R.light(x, 0.4, 3.1, 0xffc070, 1.6, 5); } R.box(0, 3.1, 30, 0.2, 0.25, { tex: 'gold', solid: false, cast: false });
    if (!f.met_cast || !f.act1) { const pos: any = { polina: [-5.5, -1.5], ruben: [-3.2, -4], matvey: [1.4, -2.4], erika: [2.4, -5], liza: [4.6, -1.8], angelina: [6.6, -4.2] }; for (const id of FRIENDS) R.npc(id, pos[id][0], pos[id][1], { talk: (D as any)['t_' + id + '0'] }); }
    else {
      if (G.done('polina')) { R.npc('polina_coat', -4, 1.6, { id: 'polina', talk: (G: any) => G.run(G.state.mask === 'drama' ? D.h_polinaDr : D.h_polina) }); R.light(-3.2, 1.2, 2.6, 0xffd070, 2.5, 4, { flicker: 0.08 }); R.sprite('lantern', -3.2, 1.9); }
      if (G.done('angelina')) { R.npc('angelina', 4.5, -4.5, { talk: (G: any) => G.run(G.state.mask === 'drama' ? D.h_angelinaDr : D.h_angelina) }); R.sprite('mic', 5.4, -3.9); }
      if (!f.act4) { R.npc('alla', 8.8, -1.2, { dir: 'r', mask: 'none', talk: (G: any) => G.run((D as any)['alla' + Math.min(5, n)]) }); R.npc('alla', 8.8, -1.2, { id: 'allaDr', dir: 'r', mask: 'drama', talk: D.allaDr }); R.npc('alla', 8.8, -1.2, { id: 'allaX', dir: 'r', mask: 'comedy', talk: ['alla/smirk: Сними это. В Комедии у меня дрожит левая бровь, а я не давала согласия на бровь.'] }); R.npc('alla', 8.8, -1.2, { id: 'allaT', dir: 'r', mask: 'tragedy', talk: ['~: В маске Трагедии её почти не видно. Контур, как у декорации на просвет. И на полу под ней — одна тень. Моя.', { note: 'one_shadow' }] }); }
    }
    R.spawn('start', -15, -4.5, 'r'); R.spawn('corridor', -15, -4.5, 'r'); R.spawn('back', 12, -7); R.spawn('center', 0, 0); R.spawn('stalls', -4, 8, 'b'); R.spawn('hatch', 5.4, -0.4);
  },
  async enter(G, from) {
    const f = G.f;
    if (!f.met_cast) { G.focus(0, -2.5, 20); await G.wait(0.8); await G.run(D.stageFirst); G.unfocus(); return; }
    if (G.doneCount() >= 6 && !f.act4 && !f.ret) return act4(G);
  },
};
async function rehearsal(G: any) {
  const f = G.f, p = G.player; await p.walkTo(-7, 0.5, 4); p.face(0, -3); G.focus(0, -1.5, 21);
  const run1 = (D.rehearsal as any[]).slice(0, 12), run2 = (D.rehearsal as any[]).slice(12);
  await G.run(run1.slice(0, 9));
  const alla = G.room.actor('alla') || (await (async () => { const B = new (await import('../world/room')).Builder(G.room, G); return B.actor('alla', 0, 8.5, { dir: 'b' }); })());
  await G.run(run1.slice(9)); G.audio.music('diva');
  await alla.walkTo(0, 4, 2.6); await alla.walkTo(8.8, -1.2, 3.2); alla.dir = 'l';
  await G.run(run2);
  G.sfx('switch'); G.audio.music(null); G.R.setGrade({ bright: 0.02 }, true); await G.wait(1.2); G.sfx('whoosh'); await G.wait(1.0);
  f.act1 = 1; f.playerX = 1; await G.rebuild(); G.player.place(-7, 0.5, 'r'); G.shake(0.3); G.sfx('spot');
  const B = new (await import('../world/room')).Builder(G.room, G); const pages = B.particles('confetti', { count: 40, color: 0xf4ecd4, top: 5 });
  G.focus(0, -1.5, 21); await G.wait(0.8); await G.run(D.blackout); G.unfocus(); G.audio.music('theater'); pages.visible = false; delete f.playerX;
}
async function casting(G: any) {
  const f = G.f; await G.run(D.castIntro);
  const todo = FRIENDS.filter((x) => G.done(x) && !f['cast_' + x]);
  const res = await pick({ title: 'Распределение ролей', sub: "The Queen's Last Curtain", intro: 'Напротив каждого имени — либо роль, которую ты выбрала сама, либо пометка «спросить».', rows: todo.map((x) => ({ id: x, label: CHARS[x].name, options: [{ id: 'assigned', text: `Вписать: «${ROLES[x][0]}»`, hint: 'я лучше знаю, где он(а) смотрится' }, { id: 'asked', text: 'Оставить пустым и спросить', hint: 'пусть выберет сам(а)' }] })), confirm: 'В работу' });
  let a = 0, q = 0; for (const x of todo) { f['cast_' + x] = res[x]; if (res[x] === 'asked') q++; else a++; }
  if (a) await G.run(D.cast_assigned); if (q) await G.run(D.cast_asked); G.note('casting');
}
async function act4(G: any) {
  const B = new (await import('../world/room')).Builder(G.room, G); const pos: any = { polina: [-5, -1], ruben: [-3, -3.4], matvey: [-0.8, -1.6], erika: [1.4, -3.6], liza: [3.4, -1.4], angelina: [5.4, -3.2] };
  for (const id of FRIENDS) { const a = G.room.actor(id); if (a) a.place(pos[id][0], pos[id][1], 'f'); else B.actor(id === 'polina' ? 'polina_coat' : id, pos[id][0], pos[id][1], { id }); }
  for (const id of ['alla', 'allaDr', 'allaX', 'allaT']) { const a = G.room.actor(id); if (a) a.hidden = true; }
  if (G.state.mask) G.setMask(G.state.mask);
  await G.ui.card([['АКТ IV', 'act'], ['THE DIVA', 'big']]); const p = G.player; p.place(0, 1.5, 'b'); G.focus(0, -1.5, 21);
  const nodes = D.act4 as any[], k = nodes.findIndex((n) => n && n.sfx === 'spot');
  await G.run(nodes.slice(0, k)); G.audio.music('diva');
  const alla = B.actor('alla', 13, -7.5, { id: 'allaB' }); alla.y = 4.2; B.spot(13, 11, -2, 13, -7.5, 0xffd0d0, 200, { angle: 0.3, cone: 0.08, shadow: false }); G.focus(6, -3, 26);
  await G.run(nodes.slice(k, nodes.length - 7)); alla.hidden = true; G.focus(0, -1.5, 21); await G.run(nodes.slice(nodes.length - 7)); G.unfocus(); G.audio.music('theater'); await G.save('auto'); await G.rebuild();
}

const DOORS: { id: string; x: number; to: string; label: string; col: string; sign: string; fade: string; glow?: number; ask: string }[] = [
  { id: 'polina', x: 1.5, to: 'pol_porch', label: 'Мокрая дверь', col: '#2a3a34', sign: '', fade: 'fade', ask: '' },
  { id: 'ruben', x: 5.5, to: 'rub_hideout', label: 'Двери лифта с неоновой рамкой', col: '#1c2438', sign: '↑↓', fade: 'glitch', glow: 0x40e0d0, ask: 'Лифт гудит. На табло вместо этажа — «ПЛАН Б». Изнутри пахнет озоном и чужими деньгами.' },
  { id: 'matvey', x: 9.5, to: 'mat_yard', label: 'Раздвижная школьная дверь', col: '#c8aa78', sign: '2-Б', fade: 'flash', glow: 0xffc0dc, ask: 'За дверью звенит школьный звонок и падают лепестки. Слишком красиво падают. Как по команде.' },
  { id: 'erika', x: 13.5, to: 'eri_office', label: 'Дверь с матовым стеклом', col: '#3a3a3a', sign: 'СЫСК', fade: 'iris', ask: 'За стеклом — силуэт в шляпе и дождь. Цвета вокруг двери выцветают, как на старой плёнке.' },
  { id: 'liza', x: 17.5, to: 'liz_base', label: 'Огромная книга на подставке', col: '#b89858', sign: 'ЖИЛА-БЫЛА', fade: 'page', glow: 0xffe9a0, ask: 'Книга в рост человека. На обложке — башня. Страницы шелестят сами, будто их кто-то торопит.' },
  { id: 'angelina', x: 20.8, to: 'ang_lobby', label: 'Гримёрное зеркало с лампами', col: '#ff9ad8', sign: 'DEBUT', fade: 'mirror', glow: 0xff80c0, ask: 'В зеркале вместо отражения — коридор агентства. Белый, глянцевый, с экранами. На каждом — одно и то же улыбающееся лицо. Не Ангелины.' },
];
const backstage: RoomDef = {
  name: 'Карман сцены', w: 46, d: 12, music: 'backstage', amb: 'hall', step: 'wood', grade: { tint: [0.92, 0.96, 1.08], vig: 0.6 },
  build(R, G) {
    const f = G.f;
    R.floor('stage', { x: -14.5, w: 17 }); R.floor('stage', { x: 10.5, w: 25 }); R.walls('brick', { h: 8 }); R.ambient(0x2e3040, 2.2, 0x8a90b0); R.particles('dust', { count: 110, top: 7 });
    const voidP = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 12), new THREE.MeshBasicMaterial({ color: 0x141c30 })); voidP.rotation.x = -Math.PI / 2; voidP.position.set(-4, -3, 0); R.room.group.add(voidP);
    for (const [x, z] of [[-6, 0], [-2, 0]]) R.box(x, z, 0.12, 12, 3, { color: 0x0a0c14, y: -3, solid: false, cast: false });
    R.collider(-6, -6, -2, -1.1); R.collider(-6, 1.1, -2, 6); const mid = R.collider(-6, -1.1, -2, 1.1); mid.on = !f.bridge;
    const shadow = R.decal(canvasTex(64, 34, (c) => { c.fillStyle = 'rgba(4,3,8,0.92)'; c.fillRect(0, 8, 64, 20); for (let i = 0; i < 8; i++) c.fillRect(2 + i * 8, 0, 3, 34); c.fillRect(0, 0, 64, 3); c.fillRect(0, 31, 64, 3); }, 'shadowbridge'), { flat: true, x: -4, z: 0, y: 0.02, w: 4.4, h: 2.3, glow: true }); shadow.visible = !!f.bridge; R.room.named.shadow = shadow; R.room.named.mid = mid;
    for (let x = -20; x <= 20; x += 4.4) R.box(x, -5.6, 0.1, 0.1, 8, { color: 0x6a5a3a, solid: false, cast: false });
    for (const x of [-21, 8, 16]) R.box(x, 4.2, 1.6, 1.4, 1.4, { tex: 'wood' }); R.box(-21, 4.2, 1.2, 1, 1, { tex: 'wood', y: 1.4, solid: false });
    R.sprite('ladder', 22, -5.3, { scale: 1.3 }); R.sprite('tree', -22, -2, { scale: 0.9 });
    R.light(-14, 5, -2, 0xffc890, 22, 16, { flicker: 0.05 }); R.light(10, 5.5, -2, 0x90a8ff, 16, 22);
    R.door('d_stage', -20, { to: 'hub_stage', spot: 'back', label: 'На сцену', col: '#2a1c14' });
    // реквизиторский стол с масками
    R.table(-12.5, -4.3, 3, 1.2);
    if (!f.masks) { R.sprite('masks', -12.5, -4.2, { y: 1.15, name: 'masksSpr' }); R.inter('masks', -12.5, -3.2, { label: 'Три маски и записка', fn: async (G) => { await G.run(D.masksGet); await G.ui.paper(PAPERS.masks); await G.run(D.masksAfter); G.room.named.masksSpr.visible = false; G.room.inter('masks').enabled = false; G.ui.hud(); } }); }
    else R.look('ptable', -12.5, -3.2, 'Реквизиторский стол', ['~: Стол реквизитора. Всё подписано: «кинжал (не настоящий)», «яд (чай)», «корона (не трогать, Алла Ева)».'], { quiet: true });
    R.sprite('bust', -9.2, -4.8, { scale: 1.5, mask: 'none', solid: 0.5 }); R.sprite('bust', -9.2, -4.8, { scale: 1.5, mask: 'tragedy' }); R.sprite('bust', -9.2, -4.8, { scale: 1.5, mask: 'drama' }); R.sprite('bustfun', -9.2, -4.8, { scale: 1.5, mask: 'comedy' });
    R.look('bust', -9.2, -3.8, 'Бюст основателя', D.bust, { mask: 'none' }); R.look('bustCom', -9.2, -3.8, 'Бюст (он подмигивает)', D.bustCom, { mask: 'comedy' });
    R.decal(canvasTex(72, 20, (c) => { ptext(c, 'Тени здесь держат.', 2, 1, { size: 8, col: '#cfe0ff' }); ptext(c, 'Проверено. — К.', 2, 10, { size: 8, col: '#cfe0ff' }); }, 'chalk'), { x: -7.2, y: 2.6, w: 4.5, h: 1.25, mask: 'tragedy', glow: true });
    R.decal(canvasTex(48, 12, (c) => { c.fillStyle = '#9ad0ff'; for (let i = 0; i < 6; i++) { c.fillRect(2 + i * 8, i % 2 ? 2 : 7, 4, 2); c.fillRect(2 + i * 8, i % 2 ? 5 : 10, 2, 1); } }, 'steps'), { flat: true, x: -4.6, z: 0, y: 0.04, w: 4.6, h: 1.1, mask: 'tragedy', glow: true });
    R.look('wallTr', -6.9, -1.6, 'Надпись мелом и следы', D.wallTr, { mask: 'tragedy', photo: 'Следы на тени' });
    R.sprite(canvasTex(12, 5, (c) => { c.fillStyle = '#c9a7ff'; c.fillRect(0, 1, 12, 3); c.fillStyle = '#8f7fc4'; c.fillRect(5, 0, 3, 5); }, 'scarf'), -7.3, 3.4, { mask: 'drama', glow: true, y: 0.1 }); R.look('scarf', -7.3, 3.6, 'Шарф', D.scarfDr, { mask: 'drama', r: 1.3 });
    // головоломка: тень-мост
    const cutPos = [[-13.5, 3.2], [-8.4, 0]], cp = cutPos[f.cut ? 1 : 0];
    const cut = R.sprite('bridgecut', cp[0], cp[1], { scale: 0.75, solid: 1.2 }); R.room.named.cut = cut;
    const cutI = R.inter('cut', cp[0], cp[1] + 0.8, { label: 'Фанерный мостик на колёсах (катить)', cond: () => !f.bridge, fn: async (G) => { if (!f.cut_seen) { f.cut_seen = 1; await G.run(D.cutMove); } f.cut = f.cut ? 0 : 1; G.sfx('gear'); f.spot = 0; await G.rebuild(); } });
    R.box(-10.6, 0, 0.3, 0.3, 2.2, { tex: 'metal' }); R.sprite('stagelight', -10.6, 0.1, { y: 2.2, scale: 1.3 });
    const aims = [[-10.6, -5], [-14, -4], [-2, 0]]; const aim = aims[f.spot || 0];
    R.spot(-10.6, 2.9, 0, aim[0], aim[1], 0xfff0d0, 320, { angle: 0.32, cone: 0.09, pen: 0.3 });
    R.inter('spot', -10.6, 1, { label: 'Прожектор (повернуть)', cond: () => !f.bridge, fn: async (G) => { f.spot = ((f.spot || 0) + 1) % 3; G.sfx('spot'); await G.rebuild(); if (f.spot === 0) await G.run(D.spotAim0); else if (f.spot === 1) await G.run(D.bridgeWrong); else if (!f.cut) await G.run(D.bridgeNoCut); else { G.focus(-4, 0, 16); await G.wait(0.8); await G.run(D.bridgeOn); G.unfocus(); await G.rebuild(); } } });
    // зеркальная рама под колосниками (после главы Лизы)
    if (G.done('liza')) {
      R.npc('liza_short', -15.5, 2.6, { id: 'liza', talk: (G: any) => G.run(G.state.mask === 'drama' ? D.h_lizaDr : D.h_liza) });
      if (!f.braid_used) { R.decal(mirrorTex(64, 80, false), { x: -16.5, y: 9.5, w: 4, h: 5 }); R.sprite('hook', -18.2, -5.2, { y: 2, scale: 1.4 }); R.inter('block', -18.2, -4.4, { label: 'Блок и гнилой трос', fn: async (G) => { await G.run(D.frameDown); G.sfx('rope'); G.shake(0.2); await G.rebuild(); } }); }
      else { R.decal(mirrorTex(64, 80, false), { x: -16.5, y: 2.6, w: 4, h: 5 }); R.inter('frame', -16.5, -4.4, { label: 'Репетиционное зеркало', photo: 'Зеркало: одинаковые позы', fn: (G) => G.run(D.frameLook) }); }
    }
    // двери жанровых миров
    for (const d of DOORS) {
      if (d.id !== 'polina' && !G.done('polina')) continue; const done = G.done(d.id);
      R.door('w_' + d.id, d.x, { label: done ? d.label + ' (история сыграна)' : d.label, col: d.col, sign: d.sign, glow: undefined, fn: async (G) => {
        if (done) return G.run(['~: Эта история сыграна. Дверь тёплая на ощупь и больше не открывается — как книга, которую дочитали.']);
        if (d.id === 'polina') { await G.run(D.polinaDoor); if (!f.go) return; } else { await G.run(['~: ' + d.ask, { c: [['Войти', [{ set: { go: 1 } }]], ['Позже', [{ set: { go: 0 } }]]] }]); if (!f.go) return; }
        if (G.state.mask) G.setMask(G.state.mask); G.sfx(d.id === 'polina' ? 'thunder' : 'door');
        try { await G.goto(d.to, 'start', { fade: d.fade }); } catch (e) { console.warn('[hub] глава ещё не собрана', d.id, e); await G.run(['~: Ручка поворачивается, но дверь не поддаётся. Изнутри слышно, как кто-то торопливо двигает декорации.', '~: За этой дверью ещё репетируют.']); } } });
      if (d.glow && !done) R.light(d.x, 2.5, -4.6, d.glow, 12, 7, { flicker: 0.1 }); if (d.id === 'polina' && !done) { R.light(d.x, 2.5, -4.6, 0x6080c0, 10, 7, { flicker: 0.3 }); R.decal(canvasTex(32, 16, (c) => { c.fillStyle = 'rgba(120,160,220,0.5)'; c.fillRect(4, 2, 24, 12); c.fillRect(0, 6, 32, 5); }, 'puddle'), { flat: true, x: d.x, z: -4.6, y: 0.03, w: 3, h: 1.5 }); }
      R.spawn('ret_' + d.id, d.x, -3.4);
    }
    R.spawn('start', -20, -3.6);
  },
  async enter(G, from) {
    const f = G.f;
    if (!f.back_seen) { f.back_seen = 1; G.focus(-4, 0, 22); await G.wait(1); await G.run(D.backstageFirst); G.unfocus(); return; }
    if (f.ret) { const who = f.ret; delete f.ret; G.audio.music('theater'); await G.wait(0.5); await G.run((D as any)['ret_' + who]); if (G.doneCount() >= 6) await G.run(D.preAct4); else if (!f.afterRet) { f.afterRet = 1; await G.run(D.afterRet); } G.audio.music('backstage'); await G.save('auto'); await G.rebuild(); }
  },
};

const workshop: RoomDef = {
  name: 'Мастерская декораций', w: 18, d: 10, music: 'backstage', amb: 'hall', step: 'wood', grade: { tint: [1.04, 1, 0.92] },
  build(R, G) {
    const f = G.f; R.floor('floor'); R.walls('plaster', { h: 6, tint: '#b8a888' }); dustAndBase(R); R.light(0, 4.5, -1, 0xffe0b0, 30, 16); R.light(-6, 3, 2, 0xffc080, 10, 9);
    R.door('door', -6.5, { to: 'hub_corridor', spot: 'work', label: 'В коридор' });
    R.table(0, -0.5, 4, 2.4, { tex: 'wood' });
    R.box(0, -0.5, 2.6, 1.5, 0.5, { tex: 'stage', y: 1.15, solid: false }); for (let i = 0; i < 6; i++) R.box(-1.5 + i * 0.6, 0.4, 0.3, 0.3, 0.3, { color: [0xe8c230, 0x40e0d0, 0x2c3550, 0x888888, 0xc9a0dc, 0xff9ad8][i], y: 1.15, solid: false });
    R.box(0, -0.9, 0.15, 0.15, 0.5, { color: 0xa3122a, y: 1.65, solid: false, mask: 'tragedy' }); R.box(0.14, -0.9, 0.15, 0.15, 0.5, { color: 0x2f7f82, y: 1.65, solid: false, mask: 'tragedy' });
    R.inter('maq', 0, 1.2, { label: 'Макет сцены', mask: 'none', photo: 'Макет с шестью коробочками', fn: async (G) => { await G.run(D.maquette); if (!f.clock) { f.clock = 1; await G.wait(0.5); G.sfx('bell'); await G.run(D.clock); } } });
    R.inter('maqTr', 0, 1.2, { label: 'Макет: след от клея', mask: 'tragedy', photo: 'Две склеенные фигурки', fn: (G) => G.run(D.maquetteTr) });
    R.look('maqO', 0, 1.2, 'Макет сцены', D.maquette, { mask: 'drama' }); R.look('maqC', 0, 1.2, 'Макет сцены', ['varya=Макет: Меня никто не спрашивал, хочу ли я быть в масштабе один к двадцати. Я хотел быть настоящим залом.'], { mask: 'comedy' });
    for (const [i, col] of [0xa3122a, 0x2f7f82, 0xe8c36a].entries()) R.box(6 + i * 0.7, -4, 0.5, 0.5, 0.6, { color: col }); R.look('paint', 6.7, -3.2, 'Банки с краской', ['~: Красная, бирюзовая, золотая. Красной израсходовано втрое больше.'], { mask: 'none' }); R.look('paintC', 6.7, -3.2, 'Банки (спорят)', D.paintCom, { mask: 'comedy' });
    R.sprite('tree', -7.5, -3.5); R.sprite('pine', 7.6, 1); R.sprite('ladder', 4, -4.6); R.sprite('wheel', -4, -4.6, { scale: 1.6 }); R.box(-7, 2.5, 2, 1.6, 1.2, { tex: 'wood' });
    // верстаки, инструменты, висящие задники, шестерни механики поворотного круга
    R.table(-5.5, 1.8, 3, 1.3, { tex: 'wood' }); for (let i = 0; i < 4; i++) R.sprite(['gear', 'key', 'candle', 'book'][i], -6.6 + i * 0.7, 1.8, { y: 1.15, scale: 1.1 });
    for (const [x, col] of [[-3, '#5a7a4a'], [0, '#4a5a8a'], [3, '#8a5a3a']] as [number, string][]) R.decal(canvasTex(48, 32, (c) => { c.fillStyle = col; c.fillRect(0, 0, 48, 32); c.fillStyle = 'rgba(255,255,255,.15)'; for (let k = 0; k < 6; k++) c.fillRect(k * 8, 18 + (k % 2) * 4, 6, 14); c.fillStyle = '#2a1c14'; c.fillRect(0, 0, 48, 2); }, 'drop' + x), { x, y: 4.8, z: -4.7, w: 3.2, h: 2 });
    gear(R, 6.4, 3.6, -4.7, 1.2, { speed: 0.2 }); gear(R, 7.6, 2.4, -4.6, 0.7, { teeth: 10, speed: -0.34 });
    R.sprite(PROPTEX.coil(), 2, 3.6, { scale: 1.5 }); R.sprite(PROPTEX.sandbag(), 5, 3.8, { scale: 1.3 }); R.sprite(PROPTEX.sandbag(), 5.5, 4, { scale: 1.2 });
    R.decal(canvasTex(16, 16, (c) => { c.fillStyle = '#e8e0c8'; c.fillRect(0, 0, 16, 16); c.fillStyle = '#111'; c.fillRect(7, 3, 2, 6); c.fillRect(7, 8, 5, 2); c.strokeStyle = '#3a2a14'; c.strokeRect(0.5, 0.5, 15, 15); }, 'clock'), { x: -3.5, y: 4.6, w: 1, h: 1 });
    if (G.done('ruben')) R.npc('ruben', 3.6, 1.6, { talk: (G: any) => G.run(G.state.mask === 'drama' ? D.h_rubenDr : D.h_ruben) });
    R.spawn('start', -6.5, -3.4);
  },
};
const archive: RoomDef = {
  name: 'Архив театра', chapter: 'Акт III · Сценарий знает', w: 18, d: 10, music: 'backstage', amb: 'hall', step: 'wood', grade: { tint: [0.96, 0.98, 1.06], vig: 0.6 },
  build(R, G) {
    const f = G.f; R.floor('parquet'); R.walls('woodwall', { h: 6 }); dustAndBase(R, false); R.light(0, 4, 0, 0xfff0d0, 24, 14, { flicker: 0.04 }); R.light(-6, 3, -2, 0x90a8ff, 8, 9);
    R.door('door', 7, { to: 'hub_mezz', spot: 'arch', label: 'На бельэтаж' });
    for (const x of [-7, -3.4, 0.2]) { R.box(x, -4.3, 3, 0.8, 4.4, { tex: 'darkwood' }); for (let s = 0; s < 4; s++) R.box(x, -3.88, 2.7, 0.06, 0.5, { tex: s % 2 ? 'paper' : 'carpet', y: 0.5 + s, solid: false, cast: false }); }
    R.table(0, 1, 4.4, 1.8); R.sprite('lamp', 1.8, 0.7, { y: 1.1, scale: 0.45 }); R.sprite('typewriter', -1.4, 0.9, { y: 1.15 });
    const doc = (id: string, x: number, z: number, label: string, paper: any, after: any[], note: string) => R.inter(id, x, z, { label, fn: async (G) => { await G.ui.paper(paper); if (!f['a_' + id]) { f['a_' + id] = 1; await G.run(after); G.note(note); } } });
    doc('ledger', -0.6, 2.1, 'Протокол собрания труппы', PAPERS.ledger, ['varya/worried: «Не могу голосовать за себя».', '~: Худрук воздержался, потому что голосовали… за него? За неё?', '~: Оля не поняла шутку. Кажется, я тоже не хочу её понимать.'], 'ledger');
    doc('contract', 1.2, 2.1, 'Ангажемент Аллы Евы', PAPERS.contract, ['~: Две подписи. Размашистая «Алла Ева» и скромная «К.».', '~: Чернила одни. Нажим один. Наклон один. Разные только росчерки — как если бы человек расписался дважды, очень стараясь, чтобы было непохоже.'], 'contract');
    doc('program', -7, -3.3, 'Программка', PAPERS.program, ['varya/scared: «На сцене стоит один человек».', '~: Программка завтрашней премьеры. С финалом, который я ещё не поставила.'], 'program');
    doc('seating', -3.4, -3.3, 'Папка «Утренники»', PAPERS.seating, ['varya/sad: «Рот открывать, звук не давать».', '~: Я помню, кто это сказал. Не со зла. Просто чтобы хор звучал ровнее.', '~: Дальше не помню. Как будто кто-то вырезал кусок плёнки.'], 'seating');
    R.decal(photoTex('choir', (c) => { for (let r = 0; r < 3; r++) people(c, ['#fff', '#fff', '#fff', '#fff', r === 2 ? '#2f7f82' : '#fff'], 3 + r * 5); }), { x: 3.4, y: 2.6, w: 1.6, h: 1.25 }); R.look('choir', 3.4, -3.6, 'Школьная фотография', D.archPhoto, { photo: 'Хор: третий ряд' });
    if (G.done('polina')) { R.decal(photoTex('mansion', (c) => { c.fillStyle = '#1a2238'; c.fillRect(2, 2, 24, 18); people(c, ['#2f7f82', '#e8c230'], 8); }), { x: 5, y: 2.6, w: 1.4, h: 1.1 }); R.look('polph', 5, -3.6, 'Снимок из особняка', D.archPolina); }
    R.npc('erika', -5.6, 1.4, { talk: (G: any) => G.run(G.state.mask === 'drama' ? D.h_erikaDr : D.h_erika) });
    R.spawn('start', 7, -3.4);
  },
  async enter(G) { if (!G.f.act3) { G.f.act3 = 1; await G.ui.card([['АКТ III', 'act'], ['THE SCRIPT KNOWS', 'big']]); } },
};
const office: RoomDef = {
  name: 'Кабинет худрука', w: 14, d: 9, music: 'dressing', amb: 'hall', step: 'carpet', grade: { tint: [0.98, 0.94, 1.02], vig: 0.7, sat: 0.85 },
  build(R, G) {
    const f = G.f; R.floor('carpet'); R.walls('wallgreen', { h: 6, trim: 'darkwood' }); dustAndBase(R, false); R.light(-1, 3.2, -1, 0xffe0a0, 16, 10, { flicker: 0.06 });
    R.door('door', 5, { to: 'hub_mezz', spot: 'office', label: 'На бельэтаж' });
    R.table(-1, -1.6, 3.6, 1.6, { tex: 'darkwood' }); R.sprite('lamp', 0.4, -1.8, { y: 1.1, scale: 0.45 }); R.sprite('candle', -2.3, -1.6, { y: 1.15 });
    R.inter('desk', -1, -0.4, { label: 'Стол: черновики', fn: async (G) => { await G.run(D.officeDesk); await G.ui.paper(PAPERS.drafts); if (!f.o_desk) { f.o_desk = 1; await G.run(D.officeAfter); } } });
    R.box(-1, -3.2, 1.2, 1, 1, { tex: 'velvet' }); R.box(-1, -3.7, 1.2, 0.2, 2.4, { tex: 'velvet' }); R.look('chair', -2.4, -3, 'Кресло с жакетом', D.officeChair, { r: 1.4 });
    R.box(-5.2, -3.9, 2.6, 0.8, 1.2, { tex: 'darkwood' }); for (let i = 0; i < 6; i++) R.sprite('marionette', -6.2 + i * 0.42, -3.7, { y: 1.2, scale: 0.55 }); for (let i = 0; i < 6; i++) R.box(-6.2 + i * 0.42, -3.7, 0.02, 0.02, 3.2, { color: 0xdddddd, y: 2.1, solid: false, cast: false });
    R.look('puppets', -5.2, -2.9, 'Кукольный театр', D.officePuppets, { photo: 'Шесть марионеток на одной ваге' });
    R.decal(mirrorTex(40, 60, false), { x: 2, y: 2.5, w: 2.4, h: 3.6 });
    if (!f.know_k) R.box(2, -4.3, 2.6, 0.12, 3.8, { tex: 'velvet', tint: '#6a6a8a', y: 0.6, solid: false, name: 'cloth' });
    R.inter('omirror', 2, -3.3, { label: f.know_k ? 'Зеркало' : 'Зеркало под тканью', fn: async (G) => { if (f.know_k) return G.run(['~: Я. В жакете худрука. Он мне идёт. Это-то и пугает.']); await G.run(D.officeMirror); G.room.named.cloth.visible = false; G.sfx('curtain'); await G.ui.paper(D.kNoteMirror); await G.run(D.officeMirrorAfter); } });
    R.sprite('plant', 6, -3.6, { solid: 0.3 }); rug(R, -1, 0.6, 7, 4, { col: '#2a3a2a', border: '#b89858' }); photoWall(R, -4.6, 3.2, 3); sconce(R, -6.96, 3, 0, { wall: 'w', light: 4 });
    for (let i = 0; i < 4; i++) R.sprite('book', 4.2 + (i % 2) * 0.3, 2.6, { y: i * 0.45, scale: 1.4 }); R.sprite(PROPTEX.trunk(), 5, 3.4, { scale: 1.2 });
    R.spawn('start', 5, -3);
  },
};
export const rooms: Record<string, RoomDef> = { ...extraRooms, hub_dressing: dressing, hub_corridor: corridor, hub_stage: stage, hub_backstage: backstage, hub_workshop: workshop, hub_archive: archive, hub_office: office };
