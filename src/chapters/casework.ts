// «Дело Аллы Евы»: доска улик в гримёрке Вари, свидетели-«призраки» театра, улики от друзей.
import type { Builder } from '../world/room';
import { canvasTex } from '../gfx/tex';
import { CASE } from '../data/dialogue/case';
import { ITEMS } from '../data/notes';

const CLUE_IDS = ['c_photo', 'c_powder', 'c_fortuna', 'c_darling', 'c_contract', 'c_poster', 'c_mirror', 'c_usher', 'c_letters', 'c_loop', 'c_prompter', 'c_script', 'c_light'];
const owned = (G: any) => CLUE_IDS.filter((id) => G.has(id));

/** Улика от вернувшегося друга. */
export async function returnClue(G: any, who: string) {
  const c = CASE.clues[who]; if (!c || G.has(c.id)) return;
  G.give(c.id, true); await G.run([`~: ${c.text} В дело.`]);
  if (G.doneCount() >= 4 && !G.has('c_letters')) await G.run(CASE.letters);
}

/** Доска улик: игрок соединяет две улики нитью. */
async function useBoard(G: any) {
  const f = G.f; if (!f.case0) { f.case0 = 1; await G.run(CASE.board0); }
  const have = owned(G); if (have.length < 2) return G.run(CASE.boardEmpty);
  const open = CASE.links.filter((l) => !f[l.flag]);
  if (!open.length) return G.run(['~: Все нити натянуты. Доска сказала всё, что могла. Дальше только вопрос, который я боюсь задать вслух.']);
  await G.run(['~: Какую улику взять первой?']);
  const names = have.map((id) => ITEMS[id]?.name || id); const i = await G.choice([...names, 'Отойти от доски']); if (i >= have.length) return;
  const rest = have.filter((_, k) => k !== i); await G.run([`~: «${names[i]}». А нить тянется к…`]);
  const j = await G.choice([...rest.map((id) => ITEMS[id]?.name || id), 'Передумать']); if (j >= rest.length) return;
  const a = have[i], b = rest[j]; const link = open.find((l) => (l.a === a && l.b === b) || (l.a === b && l.b === a));
  if (!link) { G.sfx('error'); return G.run([CASE.linkWrong[Math.floor(Math.random() * CASE.linkWrong.length)]]); }
  G.sfx('pencil'); f[link.flag] = 1; await G.run([`~: ${link.text}`]); G.note('case_board');
  const n = (act: number) => CASE.links.filter((l) => l.act === act).every((l) => f[l.flag]);
  if (n(2) && !f.case_a2) { f.case_a2 = 1; await G.run(CASE.boardAct2); }
  if (n(3) && !f.case_a3) { f.case_a3 = 1; await G.run(CASE.boardAct3); }
  if (n(4) && !f.case_a4) { f.case_a4 = 1; await G.run(CASE.boardAct4); }
}
export function caseBoard(R: Builder, G: any, x: number, y: number, z: number) {
  const f = G.f; const n = CASE.links.filter((l) => f[l.flag]).length;
  R.decal(canvasTex(40, 28, (c) => { c.fillStyle = '#5a3a1e'; c.fillRect(0, 0, 40, 28); c.fillStyle = '#b8844c'; c.fillRect(2, 2, 36, 24); for (let k = 0; k < 60; k++) { c.fillStyle = k % 2 ? '#a87840' : '#c89458'; c.fillRect((k * 13) % 36 + 2, (k * 7) % 24 + 2, 1, 1); }
    const pins = [[7, 7], [20, 6], [32, 9], [9, 19], [22, 20], [33, 20]]; c.strokeStyle = '#c4122a'; c.lineWidth = 1; for (let k = 0; k < n; k++) { const [a, b] = [pins[k % 6], pins[(k + 2) % 6]]; c.beginPath(); c.moveTo(a[0] + 2, a[1] + 2); c.lineTo(b[0] + 2, b[1] + 2); c.stroke(); }
    for (const [px, py] of pins) { c.fillStyle = '#efe6d2'; c.fillRect(px - 2, py - 2, 8, 7); c.fillStyle = '#2a2a3a'; c.fillRect(px - 1, py, 6, 1); c.fillRect(px - 1, py + 2, 5, 1); c.fillStyle = '#e82a3a'; c.fillRect(px + 1, py - 3, 2, 2); }
    c.fillStyle = '#c4122a'; c.fillRect(14, 12, 12, 3); }, 'caseboard' + n), { x, y, z, w: 2.4, h: 1.7 });
  R.inter('caseboard', x, z + 1.1, { label: 'Доска улик «Дело Аллы Евы»', fn: useBoard });
}
type Wit = 'usher' | 'stagehand' | 'prompter';
const W: Record<Wit, { first: any[]; mask: string; masked: any[]; plain: any[]; clue: string }> = {
  usher: { first: CASE.usher0, mask: 'comedy', masked: CASE.usherComedy, plain: CASE.usherNoMask, clue: 'c_usher' },
  stagehand: { first: CASE.hand0, mask: 'tragedy', masked: CASE.handTragedy, plain: CASE.handNoMask, clue: 'c_light' },
  prompter: { first: CASE.prompter0, mask: 'drama', masked: CASE.prompterDrama, plain: CASE.prompterNoMask, clue: 'c_prompter' },
};
/** Свидетель: первый разговор, потом допрос нужной маской. */
export function witness(R: Builder, G: any, who: Wit, x: number, z: number, o: any = {}) {
  if (!G.done('polina') && who !== 'usher') return; // призраки «просыпаются» постепенно
  const w = W[who];
  R.npc(who, x, z, { dir: o.dir || 'f', talk: async (G: any) => {
    const f = G.f; if (!f['w_' + who]) { f['w_' + who] = 1; await G.run(w.first); G.toast(`Свидетель. Попробуй поговорить в маске: ${w.mask === 'comedy' ? 'Комедии' : w.mask === 'tragedy' ? 'Трагедии' : 'Драмы'}`, '?'); return; }
    if (G.has(w.clue)) return G.run(['~: Больше ничего не скажет. Но и сказанного хватит.']);
    if (G.state.mask === w.mask) return G.run(w.masked);
    return G.run(w.plain);
  } });
}
/** Находка-улика в комнате. */
export function caseFind(R: Builder, G: any, id: string, x: number, z: number, label: string, lines: any[], cond?: () => boolean) {
  if (G.has(id)) return; R.inter('cf_' + id, x, z, { label, cond, fn: (G: any) => G.run(lines) });
}
