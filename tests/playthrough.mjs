// Полное автоматическое прохождение в ускоренном режиме (G.fast): проверяет, что все главы, двери, флаги,
// мини-игры и переходы проходимы, и что сохранения переживают перезагрузку. Запуск: node tests/playthrough.mjs [BASE]
import { createRequire } from 'module'; const { chromium } = createRequire('/')('/opt/node-tools/node_modules/playwright');
const BASE = process.argv[2] || 'http://localhost:5173/';
const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] }); const p = await b.newPage({ viewport: { width: 960, height: 540 } });
const errors = []; p.on('pageerror', (e) => errors.push('pageerror: ' + e.message)); p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); if (m.type() === 'warning' && /нет |не разобрана|неизвестн/.test(m.text())) errors.push('warn: ' + m.text()); });
await p.goto(BASE + '?debug=1'); await p.waitForSelector('#boot.ready', { timeout: 30000 }); await p.mouse.click(5, 5); await p.waitForSelector('.menu-screen', { timeout: 30000 });
const log = await p.evaluate(async () => {
  const G = window.__G, out = [];
  const tick = (ms = 120) => new Promise((r) => setTimeout(r, ms));
  const room = () => G.room.id;
  const act = async (id) => { const it = G.room.inters.find((i) => i.id === id); if (!it) throw new Error(`[${room()}] нет взаимодействия ${id}. Есть: ${G.room.inters.map((i) => i.id).join(',')}`); await G.cut(() => it.fn(G)); await tick(30); };
  const talk = act; const at = async (x, z) => { G.player.place(x, z); await tick(250); while (G.lock > 0) await tick(50); };
  const expect = (cond, msg) => { if (!cond) throw new Error(`[${room()}] ожидалось: ${msg}`); };
  const photo = async (subs) => { await G.room.def.photo(G, subs); };
  document.querySelector('.menu-screen')?.remove(); G.fast = true;
  G.autoChoice = (opts) => 0;
  await G.start({ v: 3, room: 'hub_dressing', spot: 'start', chapter: 'test', f: {}, inv: [], notes: [], photos: [], seen: {}, mask: null, time: 0 });
  // ---- Акт I ----
  await act('invite'); await act('recs'); await act('cam'); expect(G.has('camera'), 'камера'); await act('door'); expect(room() === 'hub_corridor', 'коридор');
  await act('d_stage'); expect(G.f.met_cast, 'знакомство с труппой'); await act('script'); expect(G.f.act1, 'акт I'); await act('d_back'); expect(room() === 'hub_backstage', 'закулисье');
  await act('masks'); expect(G.f.masks, 'маски'); await act('cut'); await act('spot'); await act('spot'); expect(G.f.bridge, 'тень-мост'); out.push('Акт I ✓');
  // ---- Полина ----
  await act('w_polina'); expect(room() === 'pol_porch', 'особняк'); await act('pot1'); await act('front'); await act('lib'); await act('book');
  await photo(['lady', 'kids', 'owner', 'cap']); expect(G.f.pol_photos, 'три аномалии'); await act('back'); await act('basement'); expect(G.f.pol_dark, 'Полина одна');
  await act('gal'); await act('g-3.5'); expect(room() === 'pol_kitchen', 'кухня'); await act('fuse'); await act('back'); await act('basement'); expect(G.f.done_polina, 'глава Полины'); expect(room() === 'hub_backstage', 'возврат'); out.push('Полина ✓');
  // ---- Рубен ----
  await act('w_ruben'); await act('plan'); expect(G.f.rub_plan, 'план'); await act('lift'); expect(room() === 'rub_casino', 'казино'); await act('desk'); await act('lift'); await act('vault'); await act('puppet'); expect(G.f.done_ruben, 'глава Рубена'); expect(G.has('marionette'), 'марионетка'); out.push('Рубен ✓');
  // ---- Матвей ----
  await act('w_matvey'); await act('umb'); await act('signal'); expect(G.f.mat_s1, 'зонт'); await act('school'); await act('note'); expect(G.f.mat_s2, 'записка'); await act('out'); await act('fest');
  await talk('matvey'); await talk('artemiy'); expect(G.f.mat_both, 'оба под аркой'); await photo(['pair']); expect(G.f.mat_arch_down, 'арка рухнула'); await talk('matvey'); expect(G.f.mat_steps, 'сто шагов');
  G.player.x -= 45; await tick(400); while (G.lock > 0 || room() !== 'hub_backstage') await tick(80); expect(G.f.done_matvey, 'глава Матвея'); out.push('Матвей ✓');
  // ---- Эрика ----
  await act('w_erika'); await act('out'); await act('d_eri_club'); await talk('barman'); await talk('singer'); await act('back'); G.setMask('tragedy'); await act('frameTr'); G.setMask('tragedy'); expect(G.has('e_photo'), 'фото Мэй');
  await act('out'); await act('out'); await act('d_eri_studio'); await talk('director'); await act('desk'); await act('out'); await act('d_eri_collector'); await talk('collector'); await act('desk'); await act('out');
  await act('d_eri_station'); await talk('cashier'); await act('locker'); await act('matches'); await act('out'); await act('d_eri_office'); await act('board'); expect(G.f.eri_board, 'доска'); await act('out'); await act('d_eri_station'); await act('platform');
  await at(3, 0); while (room() !== 'hub_backstage') await tick(80); expect(G.f.done_erika && G.has('archive_card'), 'глава Эрики'); out.push('Эрика ✓');
  // ---- Лиза ----
  await act('w_liza'); await act('call'); await act('call'); expect(room() === 'liz_top', 'башня'); await act('lasso'); expect(G.has('tower_key'), 'ключ'); await act('down'); await act('gap'); await act('gear'); await act('weight'); await act('lift');
  expect(room() === 'liz_ground' && G.f.liz_cut, 'Лиза срезала косу'); await act('exit'); expect(G.f.done_liza && G.has('braid'), 'глава Лизы'); out.push('Лиза ✓');
  // ---- Ангелина ----
  await act('w_angelina'); await act('concept'); await act('ang_practice'); await talk('trainer'); await act('vocal'); expect(G.f.ang_vocal, 'вокал'); await act('out'); await act('ang_photo'); await talk('stylist'); await act('out');
  await act('ang_record'); await act('mixer'); expect(G.f.ang_mix, 'демо'); await act('out'); await act('ang_stage'); await act('desk'); expect(G.f.done_angelina, 'глава Ангелины'); out.push('Ангелина ✓');
  // ---- Сохранение / загрузка посреди игры ----
    G.state.px = G.player.x; await G.save('slot1'); out.push('сохранение в слот ✓');
  // ---- Акты III–IV ----
  await act('d_stage'); expect(G.f.act4, 'акт IV'); await act('d_foyer'); expect(room() === 'hub_foyer', 'фойе'); await act('guest'); await act('up'); expect(room() === 'hub_mezz', 'бельэтаж'); await act('d_reh'); await act('piano'); await act('out'); await act('d_box'); await act('view'); await act('out');
  await act('d_arch'); for (const id of ['ledger', 'contract', 'program', 'seating']) await act(id); await act('door'); expect(room() === 'hub_mezz', 'назад на бельэтаж');
  G.setMask('tragedy'); await act('officeTr'); expect(G.f.office_open, 'кабинет'); await act('desk'); await act('omirror'); expect(G.f.know_k, 'Кукольник'); await act('door'); await act('stair'); expect(room() === 'hub_corridor', 'коридор'); await act('d_costume'); await act('rackAlla'); await act('out'); await act('d_trap'); await act('crate'); await act('hatch'); expect(room() === 'hub_stage', 'люк на сцену'); await act('d_cor'); out.push('Акты III–IV и здание театра ✓');
  // ---- Финал ----
  await act('d_diva'); expect(room() === 'fin_collapse', 'обрушение'); await at(-20, 0); expect(G.f.c_gap, 'мост'); await at(-8, 0); G.setMask('tragedy'); await at(1, 0); await at(12, 0); expect(G.f.c_lights, 'фонари'); G.setMask('tragedy');
  await act('cB'); expect(room() === 'fin_backstage', 'кулисы'); await act('go'); expect(G.f.show_done && room() === 'fin_party', 'мюзикл'); await act('cake'); await photo(['group']); await act('end'); expect(room() === 'fin_bedroom', 'спальня');
  await act('mirror'); expect(G.f.game_done, 'конец игры'); out.push('Финал и эпилог ✓');
  out.push('записей в блокноте: ' + G.state.notes.length + ', предметов: ' + G.state.inv.length + ', фото: ' + G.state.photos.length);
  return out;
}).catch((e) => ['ОШИБКА: ' + e.message]);
console.log(log.join('\n'));
// сохранение переживает перезагрузку + повреждённый слот не ломает меню
await p.reload(); await p.waitForSelector('#boot.ready', { timeout: 30000 }); await p.mouse.click(5, 5); await p.waitForSelector('.menu-screen', { timeout: 30000 });
const reload = await p.evaluate(async () => { const s = window.__S; const r = await s.readSave('slot1'); const db = await new Promise((res) => { const q = indexedDB.open('the-other-me-applause', 1); q.onsuccess = () => res(q.result); }); await new Promise((res) => { const tx = db.transaction('saves', 'readwrite'); tx.objectStore('saves').put('{битые данные', 'slot2'); tx.oncomplete = res; }); const r2 = await s.readSave('slot2'); return { slot1: !!r.state && r.state.f.done_angelina === 1, broken: r2.broken }; }).catch((e) => ({ err: e.message }));
console.log('после перезагрузки:', JSON.stringify(reload));
console.log(errors.length ? 'ОШИБКИ КОНСОЛИ:\n' + [...new Set(errors)].slice(0, 30).join('\n') : 'консоль чистая');
await b.close();
