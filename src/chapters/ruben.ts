// Глава Рубена — THE LAST HEIST. Футуристическое ограбление.
// Механики: доска плана (выбор маршрута/гаджета/времени влияет на прохождение), скрытность против охраны с конусами зрения,
// гаджеты (G), коридор лазеров по ритму, слом плана в хранилище (решение принимает Рубен), погоня на ховербайке.
import type { RoomDef, Builder } from '../world/room';
import { canvasTex, ptext } from '../gfx/tex';
import { R as D } from '../data/dialogue/ruben';
import { pick, runner } from '../ui/minigames';
import { chapterIntro, finishChapter, fog } from './common';

const GRADE = { sat: 1.25, tint: [0.92, 0.95, 1.12], vig: 0.5, bloom: 0.9, contrast: 1.08 };
const neonSign = (text: string, col: string, w = 64) => canvasTex(w, 14, (c) => { c.fillStyle = '#0a0a18'; c.fillRect(0, 0, w, 14); c.strokeStyle = col; c.strokeRect(0.5, 0.5, w - 1, 13); ptext(c, text, w / 2, 3, { size: 8, col, align: 'center' }); }, 'neon' + text + col);
function neonBase(R: Builder, floor = 'metal') {
  R.room.group.userData.bg = 0x05040c; R.floor(floor); R.walls('neon', { h: 7 }); R.ambient(0x30304a, 2.2, 0x8090c0);
  R.particles('glitch', { count: 50, top: 6, color: 0x40e0d0 });
}

const hideout: RoomDef = {
  name: 'Гараж под эстакадой', chapter: 'Акт II · Рубен', w: 22, d: 11, music: 'heist', amb: 'city', step: 'metal', grade: GRADE,
  build(R, G) {
    const f = G.f; neonBase(R, 'concrete');
    R.light(-6, 4, -2, 0xff4fa0, 18, 12); R.light(6, 4, -2, 0x40e0d0, 18, 12); R.light(0, 4, 2, 0xffe0c0, 10, 12);
    R.decal(neonSign('ПЛАН Б', '#ff4fa0'), { x: -4, y: 5, w: 4, h: 0.9, glow: true }); R.decal(neonSign('НЕ ЗВОНИТЬ', '#40e0d0', 80), { x: 6, y: 5.4, w: 5, h: 0.9, glow: true });
    R.sprite('hoverbike', 6.5, 2.4, { scale: 1.6, solid: 1.2 }); R.sprite('speaker', -9, -4.6, { scale: 1.2 }); R.sprite('holo', 0, -4.6, { scale: 2.2, glow: true });
    R.table(0, -1, 4, 1.8, { tex: 'metal' });
    R.inter('plan', 0, 0.3, { label: f.rub_plan ? 'Доска плана (утверждено)' : 'Доска плана', fn: async (G) => {
      if (f.rub_plan) return G.run(['~: План утверждён. ' + f.rub_route_t + ', ' + f.rub_gadget_t + ', ' + f.rub_time_t + '. Красиво. Как сценарий.']);
      await G.run(D.planIntro);
      const r = await pick({ title: 'План ограбления', sub: 'казино «Фортуна»', intro: 'Ты предлагаешь — Рубен утверждает.', rows: [
        { id: 'route', label: 'Маршрут', options: [{ id: 'vent', text: 'Вентиляция', hint: 'тихо, тесно, мимо главного поста' }, { id: 'service', text: 'Служебный вход', hint: 'через кухню, меньше охраны' }, { id: 'front', text: 'Парадный зал', hint: 'нагло, на виду у хозяйки' }] },
        { id: 'gadget', label: 'Гаджет', options: [{ id: 'emp', text: 'Глушилка Ноля', hint: 'ослепить визоры охраны' }, { id: 'holo', text: 'Голо-маска', hint: 'на пару секунд стать невидимой' }, { id: 'key', text: 'Магнитный ключ', hint: 'лифт без ключ-карты' }] },
        { id: 'time', label: 'Время', options: [{ id: 'shift', text: 'Пересменка', hint: 'охрана медленнее' }, { id: 'show', text: 'Во время шоу', hint: 'хозяйка занята на сцене' }] }], confirm: 'Предложить Рубену' });
      const RT: any = { vent: D.routeVent, service: D.routeService, front: D.routeFront }, GT: any = { emp: 'глушилка', holo: 'голо-маска', key: 'магнитный ключ' }, TT: any = { shift: 'в пересменку', show: 'во время шоу' };
      G.set({ rub_plan: 1, rub_route: r.route, rub_gadget: r.gadget, rub_time: r.time, rub_route_t: RT[r.route], rub_gadget_t: GT[r.gadget], rub_time_t: TT[r.time], rub_charges: r.gadget === 'emp' ? 3 : r.gadget === 'holo' ? 2 : 0 });
      await G.run(D.planAfter(RT[r.route], GT[r.gadget], TT[r.time])); G.toast(D.gadgetHint[r.gadget as 'emp'], '⚙'); } });
    R.npc('ruben_heist', -2.4, -2.6, { id: 'ruben', talk: (G: any) => G.run(f.rub_plan ? ['ruben: Готова? Лифт до «Фортуны» — за дверью. Если что — я в наушнике.'] : ['ruben: Сначала план. Потом лифт. Потом — от чего отступать.']) });
    R.npc('nol', 2.6, -2.8, { talk: ['nol: Я взломала камеры казино. Все показывают одно и то же: женщину в золотой полумаске. Она смотрит прямо в объектив.', 'nol: Это не запись. Она смотрит на меня сейчас.'] });
    R.npc('kasseta', 8.4, 0.6, { dir: 'l', talk: ['kasseta: Байк заправлен. Плейлист собран. Если начнётся погоня — я включу что-нибудь, под что приятно уворачиваться.'] });
    R.door('lift', -8, { label: 'Лифт в «Фортуну»', col: '#1c2438', sign: '↑ 88', glow: '#40e0d0', cond: () => !!f.rub_plan, locked: D.planNo, fn: async (G) => { G.sfx('engine'); await G.goto('rub_casino', f.rub_route, { fade: 'glitch' }); } });
    R.spawn('start', 4, 3, 'b');
  },
  async enter(G) { if (await chapterIntro(G, 'rub', [['АКТ II · THE MISSING CAST', 'act'], ['THE LAST HEIST', 'big'], ['неон · стекло · металл · план, от которого придётся отступить', 'sm']])) await G.run(D.arrive); },
};
const casino: RoomDef = {
  name: 'Казино «Фортуна»', w: 40, d: 16, music: 'heist', amb: 'crowd', step: 'carpet', grade: GRADE, camDist: 26,
  build(R, G) {
    const f = G.f; neonBase(R, 'carpet'); R.floor('checker', { x: 0, z: -2, w: 16, d: 6, y: 0.01 });
    for (let x = -16; x <= 16; x += 8) R.light(x, 5, -3, x % 16 ? 0xff4fa0 : 0x40e0d0, 16, 14);
    R.light(0, 5, 3, 0xffe0b0, 14, 16);
    R.decal(neonSign('ФОРТУНА', '#f2c230', 96), { x: 0, y: 6, w: 8, h: 1.2, glow: true });
    for (const x of [-18, -16, -14, 14, 16, 18]) R.sprite('slot', x, -7, { scale: 1.5, solid: 0.5, emissive: 0x220022 });
    for (const [x, z] of [[-9, 2], [9, 2], [-9, -3], [9, -3]]) { R.box(x, z, 3, 1.6, 1, { color: 0x1f6a45 }); R.sprite('chair', x - 2, z, { scale: 0.9 }); R.sprite('chair', x + 2, z, { scale: 0.9 }); }
    R.sprite('holo', -4, -7.3, { scale: 2, glow: true }); R.sprite('holo', 4, -7.3, { scale: 2, glow: true });
    // хозяйка зала — Алла Ева в роли Леди Фортуны
    R.box(0, -2.5, 4, 1.8, 1, { color: 0x1f6a45 }); const host = R.npc('hostess', 0, -4.2, { talk: async (G: any) => { await G.run(D.fortuna); if (!f.rub_fort) { f.rub_fort = 1; await G.run(D.fortunaAfter); } } }); R.spot(0, 8, -1, 0, -4.2, 0xffe0a0, 60, { angle: 0.25, cone: 0.06, shadow: false });
    R.photo('fortuna', 'Леди Фортуна', 0, -4.2);
    // пост охраны и карта
    R.box(17, 4, 2.4, 1.6, 1.2, { tex: 'metal' });
    if (!f.rub_card && f.rub_gadget !== 'key') { R.sprite(canvasTex(8, 5, (c) => { c.fillStyle = '#40e0d0'; c.fillRect(0, 0, 8, 5); c.fillStyle = '#111'; c.fillRect(1, 1, 3, 1); }, 'card'), 17, 4.2, { y: 1.25, glow: true, name: 'cardSpr' });
      R.inter('desk', 17, 5.5, { label: 'Пост охраны', fn: async (G) => { await G.run(D.desk); f.rub_card = 1; G.room.named.cardSpr.visible = false; await G.run(D.deskGot); G.sfx('pickup'); } }); }
    R.door('lift', 17, { label: 'Лифт в хранилище', col: '#2a2a3a', sign: 'ВАЛЮТА', glow: '#ff4fa0', cond: () => !!f.rub_card || f.rub_gadget === 'key', locked: D.elevatorLocked, fn: async (G) => { G.sfx('engine'); await G.goto('rub_lasers', 'start', { fade: 'glitch' }); } });
    // охрана: количество и скорость зависят от плана
    const slow = f.rub_time === 'shift' ? 0.75 : 1; const catchFn = async (G: any) => { G.sfx('alarm'); G.flash(0.3); await G.run(D.caught); const sp = G.room.spawns[f.rub_route] || G.room.spawns.start; G.player.place(sp.x, sp.z, 'b'); G.camSnap(); };
    R.guard('guard', [[-12, 6], [-12, -5], [-4, -5], [-4, 6]], { speed: 2.4 * slow, range: 5.5, half: 0.42, onCatch: catchFn, id: 'g1', color: 0xff3050 });
    R.guard('guard', [[4, 6], [12, 6], [12, -5], [4, -5]], { speed: 2.2 * slow, range: 5.5, half: 0.42, onCatch: catchFn, id: 'g2', color: 0xff3050 });
    if (f.rub_route !== 'vent') R.guard('guard', [[14, -5], [14, 6]], { speed: 2 * slow, range: 5, half: 0.4, onCatch: catchFn, id: 'g3', color: 0xff3050, pause: 1.4 });
    if (f.rub_time !== 'show') R.guard('guard', [[-6, -6], [6, -6]], { speed: 2.6 * slow, range: 4.5, half: 0.5, onCatch: catchFn, id: 'g4', color: 0xff3050 });
    else host.hidden = false;
    R.spawn('start', -18, 6, 'r'); R.spawn('vent', -18, -6.5, 'r'); R.spawn('service', -18, 6.5, 'r'); R.spawn('front', 0, 7, 'b');
  },
  async enter(G) { if (!G.f.rub_cas) { G.f.rub_cas = 1; await G.run(D.casinoIn); if (G.f.rub_route === 'front') { await G.run(D.fortuna); G.f.rub_fort = 1; await G.run(D.fortunaAfter); } } },
  onKey(G, a) {
    if (a !== 'laneG') return; const f = G.f;
    if (!(f.rub_charges > 0)) return G.toast(f.rub_gadget === 'key' ? 'Магнитный ключ работает только на лифте' : 'Зарядов нет', '⚙');
    f.rub_charges--; const p = G.player;
    if (f.rub_gadget === 'emp') { G.sfx('emp'); G.flash(0.2); for (const g of G.room.guards) if (Math.hypot(g.actor.x - p.x, g.actor.z - p.z) < 9) g.off = 5; G.toast('Глушилка: зарядов ' + f.rub_charges, '⚡'); }
    else { G.sfx('glitch'); (p as any).stealth = true; p.alpha = 0.35; setTimeout(() => { (p as any).stealth = false; p.alpha = 1; }, 4000); G.toast('Голо-маска: зарядов ' + f.rub_charges, '◐'); }
  },
};
const lasers: RoomDef = {
  name: 'Коридор хранилища', w: 30, d: 8, music: 'heist', amb: 'hum', step: 'metal', grade: { ...GRADE, tint: [1.05, 0.9, 1] },
  build(R, G) {
    neonBase(R); R.light(0, 4, 0, 0xff3050, 14, 20); R.light(-10, 4, 0, 0x40e0d0, 10, 12); R.light(10, 4, 0, 0x40e0d0, 10, 12);
    const hit = async (G: any) => { G.sfx('alarm'); G.flash(0.4); await G.run(D.laserHit); G.player.place(-13, 0, 'r'); G.camSnap(); };
    [-8, -4, 0, 4, 8].forEach((x, i) => R.laser(x, -3.6, x, 3.6, { period: 2.4, duty: 0.55, phase: i * 0.48, onHit: hit }));
    R.laser(11, -3.6, 11, 0.4, { period: 1.6, duty: 0.5, phase: 0.2, onHit: hit }); R.laser(11, -0.4, 11, 3.6, { period: 1.6, duty: 0.5, phase: 1.0, onHit: hit });
    R.door('vault', 14.2, { label: 'Хранилище', col: '#3a3a4a', sign: '◎', z: -3.96, fn: (G) => G.goto('rub_vault', 'start', { fade: 'fade' }) });
    R.spawn('start', -13, 0, 'r');
  },
  async enter(G) { if (!G.f.rub_las) { G.f.rub_las = 1; await G.run(D.lasers); } },
};
const vault: RoomDef = {
  name: 'Хранилище', w: 18, d: 12, music: null, amb: 'hum', step: 'metal', grade: { ...GRADE, tint: [1.1, 1, 0.85] },
  build(R, G) {
    neonBase(R); R.light(0, 5, 0, 0xffd890, 30, 16);
    for (let i = 0; i < 6; i++) { const x = -6 + (i % 3) * 6 * (i < 3 ? 1 : 1), z = i < 3 ? -4 : 3; R.box(x, z, 2.4, 1.2, 0.9 + (i % 2) * 0.5, { tex: 'gold' }); R.box(x, z, 1.8, 0.9, 0.4, { tex: 'gold', y: 0.9 + (i % 2) * 0.5, solid: false }); }
    R.box(0, -0.5, 1.4, 1.4, 1.1, { tex: 'velvet' }); if (!G.has('marionette')) R.sprite('marionette', 0, -0.5, { y: 1.1, scale: 1.4, name: 'puppet' });
    R.spot(0, 8, 2, 0, -0.5, 0xffffff, 80, { angle: 0.22, cone: 0.1, shadow: false });
    R.inter('puppet', 0, 0.6, { label: 'Марионетка на подушке', cond: () => !G.flag('rub_vault'), fn: vaultScene });
    R.actor('ruben_heist', -2.2, 1.6, { id: 'ruben', dir: 'r' });
    R.spawn('start', 0, 4.6, 'b');
  },
};
async function vaultScene(G: any) {
  G.set('rub_vault', 1); const rub = G.actor('ruben'); await rub.walkTo(-0.8, 0.4, 3); rub.face(0, -0.5);
  await G.run(D.vault.slice(0, 4)); G.room.named.puppet.visible = false; G.give('marionette', true);
  G.sfx('switch'); G.grade({ bright: 0.5, tint: [1.3, 0.5, 0.55], sat: 1.4 }); G.sfx('alarm'); G.shake(0.3); G.audio.music('chase');
  await G.run(D.vault.slice(4)); await G.run(D.vaultChoice);
  await G.ui.card([['КРЫША «ФОРТУНЫ»', 'act'], ['план ушёл — люди остались', 'sm']]);
  await G.run(D.chaseIntro);
  let ok = false; while (!ok) { const r = await runner({ track: 'chase', title: 'Погоня', sub: '← → или A / D — уворачиваться от дронов', duration: 32 }); ok = r.ok; if (!ok) await G.run(D.chaseLose); }
  G.audio.music('heist'); await G.run(D.end); G.sfx('applause', { dur: 3 });
  await finishChapter(G, 'ruben', [['THE LAST HEIST', 'act'], 'Рубен отказался от золота и от чужого плана.', ['Самое ценное в сейфе — то, что выходит из него живым.', 'sm']]);
}
export const rooms: Record<string, RoomDef> = { rub_hideout: hideout, rub_casino: casino, rub_lasers: lasers, rub_vault: vault };
