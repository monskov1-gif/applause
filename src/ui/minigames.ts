// Мини-игры поверх сцены: лист выбора (сценарий/план), замок, доска расследования, ритм, зеркальная
// последовательность, тайминг, калибровка задержки звука.
import { ui, el } from './ui';
import { audio, freq } from '../core/audio';
import * as input from '../core/input';
import { settings } from '../core/state';
import { G } from '../world/game';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
export interface PickRow { id: string; label: string; hint?: string; options: { id: string; text: string; hint?: string }[]; }
/** Лист с вариантами: правка сценария, план ограбления, выбор образа. */
export function pick(o: { title: string; sub?: string; intro?: string; rows: PickRow[]; confirm?: string; cls?: string; preset?: Record<string, string> }): Promise<Record<string, string>> {
  G.mech('pick');
  if (G.fast) { const r: Record<string, string> = {}; for (const row of o.rows) r[row.id] = (G as any).autoPick?.(row) ?? o.preset?.[row.id] ?? row.options[0].id; return Promise.resolve(r); }
  return new Promise((res) => {
    const sel: Record<string, string> = { ...(o.preset || {}) };
    const m = ui.open(`<h2>${o.title}${o.sub ? ` <small>${o.sub}</small>` : ''}</h2><div class="body">${o.intro ? `<p>${o.intro}</p>` : ''}${o.rows.map((r) => `<div class="opt-row"><h4>${esc(r.label)}${r.hint ? `<small>${esc(r.hint)}</small>` : ''}</h4><div class="opts">${r.options.map((op) => `<button class="opt" data-r="${r.id}" data-o="${op.id}">${esc(op.text)}${op.hint ? `<small>${esc(op.hint)}</small>` : ''}</button>`).join('')}</div></div>`).join('')}</div><div class="foot"><button class="btn small red" data-ok disabled>${o.confirm || 'Утвердить'}</button></div>`, { noClose: true, cls: o.cls });
    const ok = m.querySelector('[data-ok]') as HTMLButtonElement;
    const upd = () => { m.querySelectorAll('.opt').forEach((b) => { const d = (b as HTMLElement).dataset; b.classList.toggle('on', sel[d.r!] === d.o); }); ok.disabled = o.rows.some((r) => !sel[r.id]); };
    m.addEventListener('click', (e) => { const b = (e.target as HTMLElement).closest('.opt') as HTMLElement | null; if (b) { sel[b.dataset.r!] = b.dataset.o!; audio.sfx('pencil'); upd(); } });
    ok.onclick = () => { audio.sfx('stamp'); ui.close(m); res(sel); }; upd();
  });
}
/** Кодовый замок из символов. Возвращает введённую комбинацию или null при отмене. */
export function lock(o: { title: string; hint?: string; symbols: string[]; len: number; answer?: string[] }): Promise<string[] | null> {
  G.mech('lock');
  if (G.fast) return Promise.resolve(o.answer || null);
  return new Promise((res) => {
    const cur = Array(o.len).fill(0); let out: string[] | null = null;
    const m = ui.open(`<h2>${o.title}</h2><div class="body">${o.hint ? `<p>${o.hint}</p>` : ''}<div class="lock">${cur.map((_, i) => `<div class="cell"><button class="btn small" data-i="${i}" data-d="-1">▲</button><div class="sym" data-s="${i}"></div><button class="btn small" data-i="${i}" data-d="1">▼</button></div>`).join('')}</div></div><div class="foot"><button class="btn small" data-x>Отойти</button><button class="btn small red" data-ok>Проверить</button></div>`, { cls: 'narrow', onClose: () => res(out) });
    const upd = () => cur.forEach((v, i) => (m.querySelector(`[data-s="${i}"]`)!.textContent = o.symbols[v])); upd();
    m.addEventListener('click', (e) => { const d = (e.target as HTMLElement).dataset; if (d?.i != null) { const i = +d.i; cur[i] = (cur[i] + +d.d! + o.symbols.length) % o.symbols.length; audio.sfx('switch'); upd(); } });
    (m.querySelector('[data-ok]') as HTMLElement).onclick = () => { out = cur.map((v) => o.symbols[v]); ui.close(m); };
  });
}
export interface BoardItem { id: string; title: string; text: string; }
/** Доска расследования: игрок сам сопоставляет показание и улику, которая ему противоречит. */
export function board(o: { title: string; sub?: string; intro: string; left: { title: string; items: BoardItem[] }; right: { title: string; items: BoardItem[] }; pairs: [string, string, string][]; wrong: string[]; found?: string[]; canLeave?: boolean }): Promise<{ done: boolean; found: string[] }> {
  G.mech('board');
  if (G.fast) return Promise.resolve({ done: true, found: o.pairs.map((p) => p[0] + '+' + p[1]) });
  return new Promise((res) => {
    const found = new Set(o.found || []); let a: string | null = null, b: string | null = null, wi = 0;
    const m = ui.open(`<h2>${o.title}${o.sub ? ` <small>${o.sub}</small>` : ''}</h2><div class="body"><p>${o.intro}</p><div class="board"><div><h4>${o.left.title}</h4>${o.left.items.map((i) => `<button class="pin" data-l="${i.id}"><b>${esc(i.title)}</b>${esc(i.text)}</button>`).join('')}</div><div><h4>${o.right.title}</h4>${o.right.items.map((i) => `<button class="pin" data-r="${i.id}"><b>${esc(i.title)}</b>${esc(i.text)}</button>`).join('')}</div></div><div class="board-msg" data-msg>Найдено противоречий: <b data-n>0</b> из ${o.pairs.length}</div></div><div class="foot">${o.canLeave !== false ? '<button class="btn small" data-x>Отойти от доски</button>' : ''}<button class="btn small red" data-ok disabled>Связать ниткой</button></div>`, { onClose: () => res({ done: found.size >= o.pairs.length, found: [...found] }), noClose: o.canLeave === false });
    const msg = m.querySelector('[data-msg]') as HTMLElement, ok = m.querySelector('[data-ok]') as HTMLButtonElement;
    const upd = () => { m.querySelectorAll('.pin').forEach((p) => { const d = (p as HTMLElement).dataset; p.classList.toggle('on', d.l === a || d.r === b); const used = [...found].some((f) => { const [x, y] = f.split('+'); return d.l === x || d.r === y; }); p.classList.toggle('done', used); }); ok.disabled = !(a && b); };
    m.addEventListener('click', (e) => { const p = (e.target as HTMLElement).closest('.pin') as HTMLElement | null; if (!p) return; if (p.dataset.l) a = a === p.dataset.l ? null : p.dataset.l; if (p.dataset.r) b = b === p.dataset.r ? null : p.dataset.r!; audio.sfx('paper'); upd(); });
    ok.onclick = () => { const key = a + '+' + b, pr = o.pairs.find((p) => p[0] === a && p[1] === b);
      if (pr && !found.has(key)) { found.add(key); audio.sfx('ok'); msg.innerHTML = `<b>Противоречие!</b> ${esc(pr[2])} <br>Найдено: ${found.size} из ${o.pairs.length}`; }
      else if (pr) msg.textContent = 'Эта нитка уже натянута.'; else { audio.sfx('error'); msg.textContent = o.wrong[wi++ % o.wrong.length]; }
      a = b = null; upd(); if (found.size >= o.pairs.length) setTimeout(() => ui.close(m), 1800); };
    upd();
  });
}

const LANE_KEYS: Record<string, number> = { KeyD: 0, KeyF: 1, KeyJ: 2, KeyK: 3, ArrowLeft: 0, ArrowDown: 1, ArrowUp: 2, ArrowRight: 3 };
const LANE_COL = ['#ff5d8f', '#ffd166', '#5fd0c8', '#b48cff'], LANE_LBL = ['D ←', 'F ↓', 'J ↑', 'K →'];
export interface RhythmResult { score: number; hits: number; total: number; maxCombo: number; }
/** Ритм-сцена, синхронизированная с аудио-временем. Музыка трека запускается внутри. */
export function rhythm(o: { track: string; part: number; loops?: number; title: string; sub?: string; onBeat?: (beat: number) => void; onHit?: (lane: number, ok: boolean) => void; lyrics?: { t: number; text: string; who?: string }[]; skipFirst?: number; tail?: number }): Promise<RhythmResult> {
  G.mech('rhythm');
  const loops = o.loops || 2;
  if (G.fast) { return Promise.resolve({ score: 1, hits: 1, total: 1, maxCombo: 1 }); }
  return new Promise((res) => {
    const easy = settings.rhythmEasy, win = easy ? 0.24 : 0.14, lead = 1.9;
    let chart = audio.chart(o.track, o.part, loops).filter((n) => n.t >= (o.skipFirst || 0));
    const minGap = easy ? 0.5 : 0.17; const notes: { t: number; lane: number; hit: number }[] = []; let lastT = -9;
    for (const n of chart) { if (n.t - lastT < minGap) continue; lastT = n.t; const semi = Math.round(12 * Math.log2(freq(n.note) / 110)); notes.push({ t: n.t, lane: ((semi % 4) + 4) % 4, hit: 0 }); }
    const end = (chart.length ? chart[chart.length - 1].t : 0) + (o.tail ?? 2.2);
    const wrap = el('div', 'mg clear', '', document.getElementById('ui')!); const cv = el('canvas', '', '', wrap) as HTMLCanvasElement; const W = cv.width = 420, H = cv.height = 620; cv.style.height = 'min(92vh, 620px)'; const c = cv.getContext('2d')!;
    const t0 = audio.music(o.track, { restart: true, fade: 0.3, delay: lead }); const bpm = 60 / (audio.stepDur((audio as any).cur?.tr || { bpm: 120 } as any) * 4);
    let hits = 0, combo = 0, maxCombo = 0, lastBeat = -1, fb = '', fbT = 0, raf = 0; const flashL = [0, 0, 0, 0]; const hitY = H - 110, speed = 330;
    const now = () => audio.now() - t0 - settings.rhythmOffset / 1000;
    const press = (lane: number) => { const t = now(); flashL[lane] = 1; let best: any = null, bd = 9; for (const n of notes) { if (n.hit || n.lane !== lane) continue; const d = Math.abs(n.t - t); if (d < bd) { bd = d; best = n; } }
      if (best && bd < win) { best.hit = 1; hits++; combo++; maxCombo = Math.max(maxCombo, combo); fb = bd < win * 0.45 ? 'БРАВО!' : 'Хорошо'; fbT = 0.5; audio.sfx('hit', { f: [660, 784, 880, 1046][lane] }); o.onHit?.(lane, true); } else { combo = 0; fb = 'мимо'; fbT = 0.3; audio.sfx('miss'); o.onHit?.(lane, false); } };
    const kd = (e: KeyboardEvent) => { const l = LANE_KEYS[e.code]; if (l != null && !e.repeat && !ui.modal) { e.preventDefault(); press(l); } }; window.addEventListener('keydown', kd, true);
    cv.addEventListener('pointerdown', (e) => { const r = cv.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width; press(Math.max(0, Math.min(3, Math.floor((x * W - 50) / 80)))); });
    let prev = performance.now();
    const frame = () => { const pn = performance.now(), dt = (pn - prev) / 1000; prev = pn; const t = now();
      if (!G.paused) { const beat = Math.floor(t * bpm / 60); if (beat !== lastBeat && t >= 0) { lastBeat = beat; o.onBeat?.(beat); }
        for (const n of notes) if (!n.hit && t - n.t > win) { n.hit = -1; combo = 0; }
        if (o.lyrics) { let cur: any = null; for (const l of o.lyrics) if (t >= l.t) cur = l; ui.lyric(cur ? cur.text : null, cur?.who); } }
      c.clearRect(0, 0, W, H); const g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, 'rgba(10,4,8,0)'); g.addColorStop(0.5, 'rgba(10,4,8,0.55)'); g.addColorStop(1, 'rgba(10,4,8,0.9)'); c.fillStyle = g; c.fillRect(40, 0, 340, H);
      for (let l = 0; l < 4; l++) { const x = 50 + l * 80; c.fillStyle = `rgba(255,255,255,${0.04 + flashL[l] * 0.18})`; c.fillRect(x + 2, 0, 76, H); flashL[l] = Math.max(0, flashL[l] - dt * 5); c.strokeStyle = LANE_COL[l]; c.lineWidth = 3; c.strokeRect(x + 6, hitY - 14, 68, 28); c.fillStyle = LANE_COL[l]; c.font = '14px "Pixelify Sans", monospace'; c.textAlign = 'center'; c.fillText(LANE_LBL[l], x + 40, hitY + 44); }
      for (const n of notes) { if (n.hit === 1) continue; const y = hitY - (n.t - t) * speed; if (y < -30 || y > H + 20) continue; const x = 50 + n.lane * 80; c.globalAlpha = n.hit === -1 ? 0.25 : 1; c.fillStyle = LANE_COL[n.lane]; c.fillRect(x + 10, y - 10, 60, 20); c.fillStyle = 'rgba(255,255,255,0.7)'; c.fillRect(x + 10, y - 10, 60, 4); c.globalAlpha = 1; }
      c.textAlign = 'center'; c.fillStyle = '#f0d478'; c.font = '22px "Playfair Display", serif'; c.fillText(o.title, W / 2, 34); if (o.sub) { c.font = 'italic 14px Lora, serif'; c.fillStyle = '#efe3c4'; c.fillText(o.sub, W / 2, 56); }
      if (t < 0) { c.font = '54px "Playfair Display", serif'; c.fillStyle = '#fff'; c.fillText(String(Math.ceil(-t)), W / 2, H / 2); }
      if (fbT > 0) { fbT -= dt; c.font = '26px "Playfair Display", serif'; c.fillStyle = fb === 'мимо' ? '#a0a0a0' : '#fff4c8'; c.fillText(fb, W / 2, hitY - 50); }
      if (combo > 2) { c.font = '18px "Pixelify Sans", monospace'; c.fillStyle = '#5fd0c8'; c.fillText('×' + combo, W / 2, hitY - 82); }
      c.fillStyle = '#2a0a10'; c.fillRect(60, H - 22, 300, 8); c.fillStyle = '#d4ae48'; c.fillRect(60, H - 22, 300 * Math.max(0, Math.min(1, t / end)), 8);
      if (t >= end) { window.removeEventListener('keydown', kd, true); wrap.remove(); ui.lyric(null); res({ score: notes.length ? hits / notes.length : 1, hits, total: notes.length, maxCombo }); return; }
      raf = requestAnimationFrame(frame); };
    raf = requestAnimationFrame(frame);
  });
}
const DIR_SYM: Record<string, string> = { up: '↑', down: '↓', left: '←', right: '→' };
/** «Смотри и повтори»: зеркальная хореография, танцевальные связки. */
const MIR: Record<string, string> = { left: 'right', right: 'left', up: 'up', down: 'down' };
export function sequence(o: { title: string; sub?: string; rounds: string[][]; mirror?: boolean[]; roundSub?: string[]; onShow?: (dir: string, i: number) => void; onInput?: (dir: string, ok: boolean) => void; bpm?: number }): Promise<boolean> {
  G.mech('sequence');
  if (G.fast) return Promise.resolve(true);
  return new Promise((res) => {
    const m = el('div', 'mg clear', `<div class="paper" style="transform:none;text-align:center;width:min(30rem,100%);margin-top:auto;margin-bottom:2rem"><h3>${o.title}</h3><div data-st style="min-height:1.6rem;font-style:italic">${o.sub || ''}</div><div data-seq style="font-size:2.6rem;letter-spacing:.5rem;min-height:3.6rem;font-family:'Playfair Display',serif"></div><div style="opacity:.6;font-size:.85rem">стрелки или WASD</div><div class="opts" style="justify-content:center;margin-top:.5rem">${['left', 'down', 'up', 'right'].map((d) => `<button class="opt" data-d="${d}" style="font-size:1.4rem;width:3rem;text-align:center">${DIR_SYM[d]}</button>`).join('')}</div></div>`, document.getElementById('ui')!);
    const st = m.querySelector('[data-st]')!, sq = m.querySelector('[data-seq]')!; let round = 0, pos = 0, listening = false; const beat = 60 / (o.bpm || 100) * 1000;
    const want = () => o.mirror?.[round] ? o.rounds[round].map((d) => MIR[d]) : o.rounds[round];
    const show = async () => { listening = false; st.textContent = o.roundSub?.[round] || (round === 0 ? 'Смотри…' : 'Ещё раз. Смотри…'); sq.textContent = ''; const seq = o.rounds[round]; await new Promise((r) => setTimeout(r, 500));
      for (let i = 0; i < seq.length; i++) { sq.innerHTML = seq.slice(0, i + 1).map((d, j) => `<span style="color:${j === i ? '#8e1830' : '#b89858'}">${DIR_SYM[d]}</span>`).join(''); audio.sfx('hit', { f: { up: 880, down: 523, left: 660, right: 784 }[seq[i]] }); o.onShow?.(seq[i], i); await new Promise((r) => setTimeout(r, beat)); }
      sq.textContent = '· '.repeat(seq.length); st.textContent = o.mirror?.[round] ? 'Теперь ты, зеркально.' : 'Теперь ты.'; pos = 0; listening = true; };
    const inp = (d: string) => { if (!listening || ui.modal) return; const seq = want();
      if (seq[pos] === d) { pos++; audio.sfx('hit', { f: { up: 880, down: 523, left: 660, right: 784 }[d] }); o.onInput?.(d, true); sq.innerHTML = seq.map((x, j) => j < pos ? `<span style="color:#2f7f82">${DIR_SYM[x]}</span>` : '·').join(' ');
        if (pos >= seq.length) { listening = false; round++; if (round >= o.rounds.length) { st.textContent = 'Идеально.'; setTimeout(() => { off(); m.remove(); res(true); }, 700); } else setTimeout(show, 800); } }
      else { audio.sfx('error'); o.onInput?.(d, false); listening = false; st.textContent = 'Не в зеркало. Сначала.'; setTimeout(show, 900); } };
    const off = input.onAction((a) => { if (DIR_SYM[a]) inp(a); }); m.addEventListener('click', (e) => { const d = (e.target as HTMLElement).dataset?.d; if (d) inp(d); }); show();
  });
}
/** Тайминг: остановить бегунок в зоне. Возвращает 'perfect' | 'ok' | 'miss'. */
export function timing(o: { title: string; sub?: string; zone?: number; speed?: number }): Promise<'perfect' | 'ok' | 'miss'> {
  G.mech('timing');
  if (G.fast) return Promise.resolve('perfect');
  return new Promise((res) => {
    const zone = (o.zone || 0.16) * (settings.rhythmEasy ? 1.8 : 1), z0 = 0.5 + (Math.random() - 0.5) * 0.4;
    const m = el('div', 'mg clear', `<div class="paper" style="transform:none;text-align:center;width:min(30rem,100%);margin-top:auto;margin-bottom:2rem"><h3>${o.title}</h3><div style="font-style:italic;margin-bottom:.6rem">${o.sub || ''}</div><div style="position:relative;height:1.6rem;background:#2a1a14;border:2px solid #d4ae48"><div style="position:absolute;top:0;bottom:0;left:${(z0 - zone / 2) * 100}%;width:${zone * 100}%;background:#8e1830"></div><div style="position:absolute;top:0;bottom:0;left:${(z0 - zone / 6) * 100}%;width:${zone / 3 * 100}%;background:#f0d478"></div><div data-c style="position:absolute;top:-.3rem;bottom:-.3rem;width:.3rem;background:#fff;left:0"></div></div><button class="btn small" style="margin-top:.8rem" data-go>Сейчас! (E)</button></div>`, document.getElementById('ui')!);
    const cur = m.querySelector('[data-c]') as HTMLElement; let x = 0, dir = 1, raf = 0, prev = performance.now(), fin = false;
    const tick = () => { const n = performance.now(), dt = (n - prev) / 1000; prev = n; if (!G.paused) { x += dir * dt * (o.speed || 0.9); if (x > 1) { x = 1; dir = -1; } if (x < 0) { x = 0; dir = 1; } } cur.style.left = (x * 100) + '%'; if (!fin) raf = requestAnimationFrame(tick); };
    const go = () => { if (fin || ui.modal) return; fin = true; off(); const d = Math.abs(x - z0); const r = d < zone / 6 ? 'perfect' : d < zone / 2 ? 'ok' : 'miss'; audio.sfx(r === 'miss' ? 'error' : 'ok'); setTimeout(() => { m.remove(); res(r); }, 450); };
    const off = input.onAction((a) => { if (a === 'act') go(); }); (m.querySelector('[data-go]') as HTMLElement).onclick = go; raf = requestAnimationFrame(tick);
  });
}
/** Калибровка: игрок стучит в такт метроному, средняя ошибка становится поправкой. */
export function calibrate(): Promise<number | null> {
  return new Promise((res) => {
    let out: number | null = null; const taps: number[] = []; const beat = 0.6; let start = 0, timer: any;
    const m = ui.open(`<h2>Калибровка задержки</h2><div class="body"><p>Прозвучит 8 ударов метронома. Нажимайте <b>пробел</b> (или кнопку) ровно в такт, игра измерит задержку звука на вашем устройстве.</p><p data-st style="font-size:1.4rem;text-align:center">, </p><div style="text-align:center"><button class="btn" data-tap>Тук</button></div></div><div class="foot"><button class="btn small" data-x>Отмена</button><button class="btn small red" data-go>Начать</button></div>`, { cls: 'narrow', onClose: () => { clearTimeout(timer); window.removeEventListener('keydown', kd, true); res(out); } });
    const st = m.querySelector('[data-st]')!;
    const tap = () => { if (!start) return; const t = audio.now() - start; const k = Math.round(t / beat); if (k >= 0 && k < 8) { taps.push((t - k * beat) * 1000); st.textContent = '♪ '.repeat(taps.length); } };
    const kd = (e: KeyboardEvent) => { if (e.code === 'Space') { e.preventDefault(); e.stopPropagation(); tap(); } }; window.addEventListener('keydown', kd, true);
    (m.querySelector('[data-tap]') as HTMLElement).onclick = tap;
    (m.querySelector('[data-go]') as HTMLElement).onclick = () => { audio.init(); if (!audio.ctx) { st.textContent = 'Звук недоступен'; return; } taps.length = 0; start = audio.now() + 0.6; for (let i = 0; i < 8; i++) audio.voice('drums', 'r', start + i * beat, 0.1, 1.6, audio.bSfx); st.textContent = 'слушайте…';
      timer = setTimeout(() => { if (taps.length < 4) { st.textContent = 'Мало нажатий, попробуйте ещё раз'; start = 0; return; } taps.sort((a, b) => a - b); const med = taps[Math.floor(taps.length / 2)]; out = Math.max(-200, Math.min(200, Math.round(med / 5) * 5)); st.textContent = `Поправка: ${out} мс`; start = 0; setTimeout(() => ui.close(m), 1200); }, (8 * beat + 1) * 1000); };
  });
}
/** Погоня: три полосы, препятствия по ритму трека. Возвращает число столкновений. */
export function runner(o: { track: string; title: string; sub?: string; duration?: number; lives?: number; skin?: 'bike' | 'carriage'; onDone?: () => void }): Promise<{ hits: number; ok: boolean }> {
  G.mech('runner');
  if (G.fast) return Promise.resolve({ hits: 0, ok: true });
  return new Promise((res) => {
    const easy = settings.rhythmEasy, dur = o.duration || 34, lives = (o.lives || 4) + (easy ? 3 : 0);
    const wrap = el('div', 'mg', '', document.getElementById('ui')!); const cv = el('canvas', '', '', wrap) as HTMLCanvasElement; const W = cv.width = 480, H = cv.height = 640; cv.style.height = 'min(92vh, 640px)'; cv.style.imageRendering = 'pixelated'; const c = cv.getContext('2d')!;
    const t0 = audio.music(o.track, { restart: true, fade: 0.3, delay: 1.2 }); const step = audio.stepDur((audio as any).cur?.tr || { bpm: 140 } as any);
    let lane = 1, x = 1, hits = 0, raf = 0, inv = 0; const obs: { lane: number; t: number; kind: number; hit?: boolean }[] = [];
    for (let t = 2; t < dur - 1; t += step * (easy ? 12 : 8)) { const n = Math.random() < (easy ? 0.15 : 0.35) ? 2 : 1; const used = new Set<number>(); for (let k = 0; k < n; k++) { let l = Math.floor(Math.random() * 3); while (used.has(l)) l = (l + 1) % 3; used.add(l); obs.push({ lane: l, t, kind: Math.floor(Math.random() * 3) }); } }
    const kd = (e: KeyboardEvent) => { if (ui.modal) return; if (['ArrowLeft', 'KeyA'].includes(e.code)) { lane = Math.max(0, lane - 1); e.preventDefault(); } if (['ArrowRight', 'KeyD'].includes(e.code)) { lane = Math.min(2, lane + 1); e.preventDefault(); } };
    window.addEventListener('keydown', kd, true); cv.addEventListener('pointerdown', (e) => { const r = cv.getBoundingClientRect(); lane = (e.clientX - r.left) / r.width < 0.5 ? Math.max(0, lane - 1) : Math.min(2, lane + 1); });
    const LX = [W * 0.25, W * 0.5, W * 0.75], PY = H - 120, SPD = 260; let prev = performance.now();
    const frame = () => { const n = performance.now(), dt = (n - prev) / 1000; prev = n; const t = audio.now() - t0;
      x += (lane - x) * Math.min(1, dt * 14); inv = Math.max(0, inv - dt);
      const city = o.skin !== 'carriage'; const g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, city ? '#120a2a' : '#2a3a5a'); g.addColorStop(1, city ? '#2a0a3a' : '#5a7a4a'); c.fillStyle = g; c.fillRect(0, 0, W, H);
      for (let i = 0; i < 14; i++) { const yy = ((i * 60 + t * SPD) % (H + 60)) - 60; c.fillStyle = city ? (i % 2 ? '#ff4fa0' : '#40e0d0') : '#e8c36a'; c.globalAlpha = 0.5; c.fillRect(W * 0.375 - 2, yy, 4, 30); c.fillRect(W * 0.625 - 2, yy, 4, 30); c.globalAlpha = 1; c.fillStyle = city ? '#1a1030' : '#3a2a1a'; c.fillRect(0, yy, 40, 40); c.fillRect(W - 40, yy + 30, 40, 50); if (city) { c.fillStyle = '#ffd060'; c.fillRect(10, yy + 8, 6, 6); c.fillRect(W - 28, yy + 40, 6, 6); } }
      for (const ob of obs) { const y = PY - (ob.t - t) * SPD; if (y < -60 || y > H + 40) continue; const ox = LX[ob.lane];
        if (city) { c.fillStyle = ['#ff3050', '#7a7aff', '#ffb030'][ob.kind]; c.fillRect(ox - 26, y - 20, 52, 34); c.fillStyle = '#111'; c.fillRect(ox - 18, y - 12, 36, 6); c.fillStyle = '#fff'; c.fillRect(ox - 4, y + 4, 8, 4); }
        else { c.fillStyle = ['#5a4029', '#2e5038', '#888'][ob.kind]; c.fillRect(ox - 26, y - 18, 52, 30); }
        if (!ob.hit && Math.abs(y - PY) < 26 && Math.abs(ox - (W * 0.25 + x * W * 0.25)) < 40 && inv <= 0) { ob.hit = true; hits++; inv = 0.8; audio.sfx('crash'); G.shake(0.3); } }
      const px = W * 0.25 + x * W * 0.25; c.globalAlpha = inv > 0 && Math.floor(inv * 12) % 2 ? 0.4 : 1;
      if (city) { c.fillStyle = '#ff9a3c'; c.fillRect(px - 16, PY - 18, 32, 40); c.fillStyle = '#26262e'; c.fillRect(px - 20, PY + 6, 40, 12); c.fillStyle = '#40e0d0'; c.fillRect(px - 22, PY + 20, 44, 4); c.fillStyle = '#5a341f'; c.fillRect(px - 6, PY - 30, 12, 12); c.fillStyle = '#ff4fa0'; c.fillRect(px - 6, PY - 42, 12, 12); }
      else { c.fillStyle = '#f0f0f0'; c.fillRect(px - 16, PY - 10, 32, 30); c.fillStyle = '#c9a0dc'; c.fillRect(px - 6, PY - 30, 12, 20); }
      c.globalAlpha = 1; c.fillStyle = '#f0d478'; c.font = '20px "Playfair Display", serif'; c.textAlign = 'center'; c.fillText(o.title, W / 2, 30); c.font = '13px "Pixelify Sans", monospace'; c.fillStyle = '#efe3c4'; c.fillText(o.sub || '← → или A / D', W / 2, 52);
      c.fillText('♥'.repeat(Math.max(0, lives - hits)), W / 2, 74); c.fillStyle = '#2a0a10'; c.fillRect(60, H - 22, W - 120, 8); c.fillStyle = '#d4ae48'; c.fillRect(60, H - 22, (W - 120) * Math.max(0, Math.min(1, t / dur)), 8);
      if (t < 0) { c.font = '48px "Playfair Display", serif'; c.fillStyle = '#fff'; c.fillText(String(Math.ceil(-t)), W / 2, H / 2); }
      if (t >= dur || hits >= lives) { window.removeEventListener('keydown', kd, true); wrap.remove(); res({ hits, ok: hits < lives }); return; }
      raf = requestAnimationFrame(frame); };
    raf = requestAnimationFrame(frame);
  });
}
