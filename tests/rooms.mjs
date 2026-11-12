// Проверка всех комнат: точки появления свободны, все двери и интерактивные объекты достижимы.
import { createRequire } from 'module'; const { chromium } = createRequire('/')('/opt/node-tools/node_modules/playwright');
const BASE = process.argv[2] || 'http://localhost:5173/';
const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] }); const p = await b.newPage({ viewport: { width: 800, height: 450 } });
const errs = []; p.on('pageerror', (e) => errs.push(e.message));
await p.goto(BASE + '?debug=1'); await p.waitForSelector('.menu-screen', { timeout: 30000 });
const out = await p.evaluate(async () => {
  const G = window.__G; G.fast = true; document.querySelector('.menu-screen')?.remove();
  const loaders = ['hub', 'pol', 'rub', 'mat', 'eri', 'liz', 'ang', 'fin']; const ids = [];
  for (const l of loaders) { const any = { hub: 'hub_dressing', pol: 'pol_porch', rub: 'rub_hideout', mat: 'mat_yard', eri: 'eri_office', liz: 'liz_base', ang: 'ang_lobby', fin: 'fin_diva' }[l]; await G.loadRoom(any); }
  const ROOMS = G.__rooms(); const res = [];
  const states = { early: { woke: 1, read_invite: 1, met_cast: 1 }, mid: { woke: 1, read_invite: 1, met_cast: 1, act1: 1, back_seen: 1, masks: 1, bridge: 1, cut: 1, spot: 2, done_polina: 1, done_ruben: 1, done_matvey: 1, pol_dark: 1, mat_a1: 1, mat_a2: 1, rub_plan: 1, rub_route: 'service', liz_bridge: 1, liz_cut: 1, liz_gear: 1, liz_weight: 1, eri_board: 1 }, late: { woke: 1, read_invite: 1, met_cast: 1, act1: 1, back_seen: 1, masks: 1, bridge: 1, done_polina: 1, done_ruben: 1, done_matvey: 1, done_erika: 1, done_liza: 1, done_angelina: 1, act4: 1, office_open: 1, braid_used: 1, c_gap: 1, c_lights: 1, mat_arch_down: 1, pol_light: 1, cake_out: 1 } };
  for (const id of Object.keys(ROOMS)) for (const [sn, fl] of Object.entries(states)) {
    G.running = true; G.state = { v: 3, room: id, spot: 'start', chapter: '', f: { ...fl, foyer0: 1, mezz0: 1, reh0: 1, cost0: 1, trap0: 1, intro_pol: 1, intro_rub: 1, intro_mat: 1, intro_eri: 1, intro_liz: 1, intro_ang: 1, diva_done: 1, show_done: 1, party0: 1, wake0: 1, c_in: 1, pre_show: 1 }, inv: ['camera', 'marionette', 'archive_card', 'braid'], notes: [], photos: [], seen: {}, mask: null, time: 0 };
    const def = ROOMS[id]; const enter = def.enter; def.enter = undefined;
    try { await G.goto(id, 'start', { fade: 'none', silent: true }); for (const sp of Object.keys(G.room.spawns)) { const s = G.room.spawns[sp]; G.player.place(s.x, s.z); const fp = G.freeSpot(s.x, s.z); G.player.place(fp.x, fp.z); const pr = G.reachCheck(); for (const m of pr) res.push(`${id} [${sn}] от «${sp}»: ${m}`); } }
    catch (e) { res.push(`${id} [${sn}]: ОШИБКА ${e.message}`); } finally { def.enter = enter; }
  }
  return [...new Set(res)];
});
console.log(out.length ? out.join('\n') : 'все комнаты проходимы'); if (errs.length) console.log('ошибки:', errs.slice(0, 5).join('\n'));
await b.close();
