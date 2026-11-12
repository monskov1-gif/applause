// Presentation/UI: диалоги, выборы, HUD, меню, блокнот режиссёра, фотоархив, сохранения, настройки, переходы.
import * as input from '../core/input';
import { audio } from '../core/audio';
import { settings, saveSettings, SLOTS, SLOT_NAMES, readSave, writeSave, deleteSave, exportSave, importSave, newState, GameState } from '../core/state';
import { NOTES, ITEMS, CATS } from '../data/notes';
import { CHARS } from '../data/chars';
import { portrait } from '../gfx/portraits';
import { G, MASK_NAMES } from '../world/game';

const root = () => document.getElementById('ui')!;
export function el(tag: string, cls = '', html = '', parent?: HTMLElement): HTMLElement { const e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; if (parent) parent.appendChild(e); return e; }
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const fmtTime = (s: number) => `${Math.floor(s / 3600)}:${String(Math.floor(s / 60) % 60).padStart(2, '0')}`;
export const LOGO = `<h1 class="logo" aria-label="THE OTHER ME: APPLAUSE, PLEASE!"><span class="row r1"><span class="l-the">THE</span><span class="l-other">Other</span><span class="l-me">ME<span class="l-colon">:</span></span></span><span class="row r2"><span class="l-app"><b>A</b>PPLAUSE<span class="l-comma">,</span></span></span><span class="row r3"><span class="l-please">Please</span><span class="l-bang">!</span></span></h1>`;

class UI {
  modal = false; dialogOpen = false; private modals: HTMLElement[] = []; private hudEl!: HTMLElement; private dlg!: HTMLElement; private promptEl!: HTMLElement; private toasts!: HTMLElement; private saveEl!: HTMLElement; private lyricEl!: HTMLElement;
  private vf!: HTMLElement; private touchEl!: HTMLElement; private log: { name: string; text: string; color: string }[] = []; private advance: (() => void) | null = null; private loadingEl!: HTMLElement; private maskRow!: HTMLElement; private hudR!: HTMLElement;
  auto = false; private placeEl: HTMLElement | null = null;

  init() {
    const r = root();
    this.hudEl = el('div', 'hud hidden', '', r); this.maskRow = el('div', 'masks', '', this.hudEl); this.hudR = el('div', 'hud-r', '', this.hudEl);
    this.toasts = el('div', 'toasts', '', r); this.promptEl = el('div', 'prompt hidden', '', r); this.saveEl = el('div', 'savemark', '✎ сохранено', r); this.lyricEl = el('div', 'lyric hidden', '', r);
    this.dlg = el('div', 'dlg hidden', '<div class="port"><img alt=""></div><div class="box"><div class="name"></div><div class="tools"><button data-a="hist">История</button><button data-a="auto">Авто</button><button data-a="skip">Пропуск</button></div><div class="text"></div><div class="more">▼</div></div>', r);
    this.vf = el('div', 'viewfinder hidden', '<b>● REC</b><span>E / Enter — снимок · C / Esc — убрать камеру</span>', r);
    this.loadingEl = el('div', 'savemark', 'Меняем декорации…', r); this.loadingEl.style.right = 'auto'; this.loadingEl.style.left = '.8rem';
    this.dlg.addEventListener('click', (e) => { const a = (e.target as HTMLElement).dataset?.a; if (a === 'hist') this.history(); else if (a === 'auto') { this.auto = !this.auto; (e.target as HTMLElement).style.background = this.auto ? '#8e1830' : ''; if (this.auto && this.advance) this.advance(); } else if (a === 'skip') { this.skipping = true; if (this.advance) this.advance(); } else if (this.advance) this.advance(); });
    input.onAction((a) => { if (this.modal) { if (a === 'pause') this.closeTop(); return; } if (a === 'act' && this.advance) this.advance(); });
    this.hudR.innerHTML = `<button class="hbtn" data-a="cam" title="Фотоаппарат (C)">◉</button><button class="hbtn" data-a="note" title="Блокнот (Tab)">✎</button><button class="hbtn" data-a="pause" title="Пауза (Esc)">❚❚</button>`;
    this.hudR.addEventListener('click', (e) => { const a = (e.target as HTMLElement).dataset?.a; if (a === 'cam') input.fire('camera'); if (a === 'note') input.fire('notebook'); if (a === 'pause') input.fire('pause'); });
    this.maskRow.addEventListener('click', (e) => { const m = (e.target as HTMLElement).closest('.maskb') as HTMLElement | null; if (m) G.setMask(m.dataset.m!); });
    this.buildTouch(); this.applySettings();
  }
  applySettings() { document.documentElement.style.setProperty('--s', String(settings.uiScale)); document.body.classList.toggle('contrast', settings.contrast); audio.applyVolumes(); this.touchEl.classList.toggle('hidden', !settings.touch || !G.running); }
  private skipping = false;

  // ---------- диалог ----------
  say(o: { name: string; color: string; portrait: string; text: string; italic: boolean; pitch: number; seen: boolean }): Promise<void> {
    this.dialogOpen = true; this.dlg.classList.remove('hidden'); this.prompt(null);
    const port = this.dlg.querySelector('.port') as HTMLElement, img = port.querySelector('img')!, nm = this.dlg.querySelector('.name')!, tx = this.dlg.querySelector('.text') as HTMLElement;
    port.classList.toggle('none', !o.portrait); if (o.portrait) img.src = o.portrait;
    nm.innerHTML = o.name ? `<i style="background:${o.color}"></i>${esc(o.name)}` : ''; tx.classList.toggle('it', o.italic);
    this.log.push({ name: o.name, text: o.text, color: o.color }); if (this.log.length > 250) this.log.shift();
    return new Promise((res) => {
      const full = o.text; let n = 0, done = false, timer: any, autoT: any; const cps = settings.textSpeed;
      const finish = () => { clearInterval(timer); clearTimeout(autoT); this.advance = null; res(); };
      const reveal = () => { n = full.length; tx.textContent = full; done = true; clearInterval(timer); if (this.auto) autoT = setTimeout(finish, 900 + full.length * 45); };
      if (G.fast || (this.skipping && o.seen) || (input.isDown('skip') && o.seen)) { tx.textContent = full; setTimeout(finish, G.fast ? 0 : 60); return; }
      this.skipping = false;
      if (!cps) reveal(); else { tx.textContent = ''; timer = setInterval(() => { n = Math.min(full.length, n + Math.max(1, Math.round(cps / 30))); tx.textContent = full.slice(0, n); if (n % 3 === 0 && /[а-яa-z]/i.test(full[n - 1] || '')) audio.blip(o.pitch); if (n >= full.length) reveal(); }, 33); }
      this.advance = () => { if (!done) reveal(); else finish(); };
    });
  }
  sayHide() { this.dialogOpen = false; this.dlg.classList.add('hidden'); this.skipping = false; }
  choice(opts: { text: string; mask?: boolean }[]): Promise<number> {
    if (G.fast) return Promise.resolve((G as any).autoChoice ? (G as any).autoChoice(opts) : 0);
    const box = el('div', 'choices' + (this.dialogOpen ? '' : ' solo'), '', root()); let idx = 0; this.skipping = false;
    return new Promise((res) => {
      const btns = opts.map((o, i) => { const b = el('button', 'choice' + (o.mask ? ' mask' : ''), `<span class="n">${i + 1}.</span>${esc(o.text)}`, box) as HTMLButtonElement; b.onclick = (e) => { e.stopPropagation(); pick(i); }; b.onmouseenter = () => { idx = i; upd(); }; return b; });
      const upd = () => btns.forEach((b, i) => b.classList.toggle('on', i === idx));
      const off = input.onAction((a, code) => { if (this.modal) return; if (a === 'up') { idx = (idx + opts.length - 1) % opts.length; audio.sfx('hover'); upd(); } else if (a === 'down') { idx = (idx + 1) % opts.length; audio.sfx('hover'); upd(); } else if (a === 'act') pick(idx); else if (/^Digit[1-9]$/.test(code)) { const k = parseInt(code.slice(5)) - 1; if (k < opts.length) pick(k); } });
      const prevAdv = this.advance; this.advance = null;
      const pick = (i: number) => { off(); box.remove(); audio.sfx('click'); this.advance = prevAdv; this.log.push({ name: '→', text: opts[i].text, color: '#d4ae48' }); setTimeout(() => res(i), 0); };
      upd();
    });
  }
  history() {
    const m = this.open(`<h2>История реплик <small>суфлёрский экземпляр</small></h2><div class="body hist">${this.log.map((l) => `<p>${l.name ? `<b style="color:${l.name === '→' ? '#8e1830' : '#3a2a14'}">${esc(l.name)}</b> ` : ''}${l.name ? '' : '<i>'}${esc(l.text)}${l.name ? '' : '</i>'}</p>`).join('') || '<p><i>Пока никто ничего не сказал.</i></p>'}</div><div class="foot"><button class="btn small" data-x>Закрыть</button></div>`);
    const b = m.querySelector('.body')!; b.scrollTop = b.scrollHeight;
  }

  // ---------- HUD ----------
  hudShow(on: boolean) { this.hudEl.classList.toggle('hidden', !on); this.touchEl.classList.toggle('hidden', !on || !settings.touch); if (!on) { this.sayHide(); this.prompt(null); this.lyric(null); } }
  hud() {
    const f = G.state.f, noM = G.room?.def.noMasks;
    this.maskRow.innerHTML = f.masks && !noM ? Object.entries(MASK_NAMES).map(([k, n], i) => `<button class="maskb${G.state.mask === k ? ' on' : ''}" data-m="${k}" title="${n} (${i + 1})">${k === 'comedy' ? '☺' : k === 'tragedy' ? '☹' : '❦'}<small>${i + 1} ${n}</small></button>`).join('') : '';
    (this.hudR.children[0] as HTMLElement).classList.toggle('hidden', !G.has('camera') || !!G.room?.def.noCamera);
  }
  prompt(label: string | null, x = 0, y = 0) { if (!label) { this.promptEl.classList.add('hidden'); return; } this.promptEl.classList.remove('hidden'); if (this.promptEl.dataset.l !== label) { this.promptEl.dataset.l = label; this.promptEl.innerHTML = `<kbd>E</kbd>${esc(label)}`; } this.promptEl.style.left = (x * 100) + '%'; this.promptEl.style.top = Math.max(8, y * 100) + '%'; }
  toast(text: string, icon = '✦') { if (G.fast) return; const t = el('div', 'toast', `<b>${icon}</b>${esc(text)}`, this.toasts); setTimeout(() => t.remove(), 4100); }
  place(name: string) { if (this.placeEl) this.placeEl.remove(); if (G.fast) return; const p = this.placeEl = el('div', 'place', `<b>${esc(name)}</b><i></i>`, root()); setTimeout(() => p.remove(), 3700); }
  saved(slot: string) { this.saveEl.textContent = slot === 'auto' ? '✎ автосохранение' : '✎ сохранено'; this.saveEl.classList.add('on'); setTimeout(() => this.saveEl.classList.remove('on'), 1600); }
  loading(on: boolean) { this.loadingEl.classList.toggle('on', on); }
  lyric(text: string | null, who = '') { if (!text) { this.lyricEl.classList.add('hidden'); return; } this.lyricEl.classList.remove('hidden'); this.lyricEl.innerHTML = (who ? `<small>${esc(who)}</small>` : '') + esc(text).replace(/\n/g, '<br>'); }
  viewfinder(on: boolean) { this.vf.classList.toggle('hidden', !on); }
  async transition(kind: string, phase: 'out' | 'in') {
    let t = root().querySelector('.trans') as HTMLElement | null;
    if (phase === 'out') { if (t) t.remove(); t = el('div', 'trans ' + kind, '', root()); void t.offsetWidth; t.classList.add('on'); if (kind === 'curtain') audio.sfx('curtain'); if (kind === 'glitch') audio.sfx('glitch'); if (kind === 'mirror' || kind === 'page') audio.sfx('whoosh'); await new Promise((r) => setTimeout(r, kind === 'curtain' ? 760 : 520)); }
    else if (t) { t.classList.remove('on'); const tt = t; setTimeout(() => tt.remove(), 800); await new Promise((r) => setTimeout(r, 350)); }
  }
  /** Письмо, документ, страница сценария. */
  paper(o: { title?: string; body: string; sign?: string; stamp?: string; cls?: string; hand?: boolean; btn?: string }): Promise<void> {
    if (G.fast) return Promise.resolve(); audio.sfx('paper');
    return new Promise((res) => { const m = this.open(`<div class="paper ${o.cls || ''}">${o.stamp ? `<div class="stamp">${o.stamp}</div>` : ''}${o.title ? `<h3>${o.title}</h3>` : ''}<div class="${o.hand ? 'hand' : ''}">${o.body}</div>${o.sign ? `<div class="sign">${o.sign}</div>` : ''}<button class="btn small ok" data-x>${o.btn || 'Отложить'}</button></div>`, { raw: true, onClose: () => { audio.sfx('paper'); res(); } }); (m.querySelector('.ok') as HTMLElement).focus(); });
  }
  /** Титры-карточки на чёрном. */
  card(lines: (string | [string, string])[], o: { hold?: number } = {}): Promise<void> {
    if (G.fast) return Promise.resolve();
    return new Promise((res) => {
      const c = el('div', 'card', lines.map((l, i) => { const [t, cls] = Array.isArray(l) ? l : [l, '']; return `<p class="${cls}" style="animation-delay:${i * 0.9}s">${t}</p>`; }).join('') + '<div class="more">нажмите, чтобы продолжить</div>', root());
      const t0 = performance.now(); const fin = () => { if (performance.now() - t0 < 500) return; off(); c.remove(); res(); }; const off = input.onAction((a) => { if (a === 'act' && !this.modal) fin(); }); c.onclick = fin;
    });
  }

  // ---------- модальные окна ----------
  open(html: string, o: { raw?: boolean; cls?: string; onClose?: () => void; noClose?: boolean } = {}): HTMLElement {
    const m = el('div', 'modal', o.raw ? html : `<div class="sheet ${o.cls || ''}">${html}</div>`, root()); (m as any).onCloseCb = o.onClose; (m as any).noClose = o.noClose;
    this.modals.push(m); this.modal = true; this.prompt(null); input.setUiMode(true);
    m.addEventListener('click', (e) => { const t = e.target as HTMLElement; if (t.closest('[data-x]')) { audio.sfx('click'); this.close(m); } });
    return m;
  }
  close(m: HTMLElement) { const i = this.modals.indexOf(m); if (i < 0) return; this.modals.splice(i, 1); m.remove(); this.modal = this.modals.length > 0; if (!this.modal) input.setUiMode(false); const cb = (m as any).onCloseCb; if (cb) cb(); }
  closeTop() { const m = this.modals[this.modals.length - 1]; if (m && !(m as any).noClose) { audio.sfx('click'); this.close(m); } }
  confirm(text: string, yes = 'Да', no = 'Отмена'): Promise<boolean> { return new Promise((res) => { let ans = false; const m = this.open(`<h2>Минутку</h2><div class="body"><p>${text}</p></div><div class="foot"><button class="btn small" data-x>${no}</button><button class="btn small red" data-y>${yes}</button></div>`, { cls: 'narrow', onClose: () => res(ans) }); (m.querySelector('[data-y]') as HTMLElement).onclick = () => { ans = true; this.close(m); }; }); }

  pause() {
    if (this.modal) return; G.paused = true; audio.muffle(600);
    const m = this.open(`<h2>Антракт <small>${esc(G.state.chapter)}</small></h2><div class="body col"><button class="btn" data-a="resume">Продолжить</button><button class="btn" data-a="save">Сохранить</button><button class="btn" data-a="load">Загрузить</button><button class="btn" data-a="note">Блокнот режиссёра</button><button class="btn" data-a="set">Настройки</button><button class="btn red" data-a="menu">В главное меню</button></div>`, { cls: 'narrow', onClose: () => { G.paused = false; audio.muffle(G.state.mask === 'tragedy' ? 900 : G.state.mask === 'drama' ? 2600 : 20000); } });
    m.addEventListener('click', async (e) => { const a = (e.target as HTMLElement).dataset?.a; if (!a) return; audio.sfx('click');
      if (a === 'resume') this.close(m); if (a === 'save') this.saveLoad('save'); if (a === 'load') this.saveLoad('load'); if (a === 'note') this.notebook(); if (a === 'set') this.settings();
      if (a === 'menu') { if (await this.confirm('Вернуться в главное меню? Несохранённый прогресс после последнего автосохранения будет потерян.', 'Выйти')) { this.close(m); G.stopToMenu(); this.mainMenu(); } } });
    (m.querySelector('.btn') as HTMLElement).focus();
  }
  settings() {
    const s = settings; const row = (label: string, ctl: string, hint = '') => `<div class="row-set"><label>${label}${hint ? `<small>${hint}</small>` : ''}</label><div>${ctl}</div></div>`;
    const rng = (k: string, min: number, max: number, step: number) => `<input type="range" data-k="${k}" min="${min}" max="${max}" step="${step}" value="${(s as any)[k]}">`;
    const chk = (k: string) => `<input type="checkbox" data-k="${k}" ${(s as any)[k] ? 'checked' : ''}>`;
    const m = this.open(`<h2>Настройки <small>пульт помрежа</small></h2><div class="body">
      ${row('Музыка', rng('music', 0, 1, 0.05))}${row('Эффекты', rng('sfx', 0, 1, 0.05))}${row('Голоса', rng('voice', 0, 1, 0.05), 'звуковой сигнал реплик; все реплики идут с субтитрами')}
      ${row('Скорость текста', rng('textSpeed', 0, 120, 5), '0 — мгновенно')}${row('Масштаб интерфейса', rng('uiScale', 0.8, 1.5, 0.05))}
      ${row('Качество графики', `<select data-k="quality"><option value="low">Низкое (без bloom и теней)</option><option value="med">Среднее</option><option value="high">Высокое</option></select>`)}
      ${row('Меньше вспышек', chk('reduceFlash'), 'приглушает вспышки и глитч-эффекты')}${row('Без тряски камеры', chk('reduceShake'))}${row('Повышенный контраст текста', chk('contrast'))}
      ${row('Облегчённые ритм-сцены', chk('rhythmEasy'), 'широкие окна попадания, меньше нот, нельзя проиграть')}${row('Задержка звука, мс', rng('rhythmOffset', -200, 200, 5) + ' <span data-off></span>', 'для ритм-сцен')}
      ${row('', '<button class="btn small" data-a="calib">Калибровка задержки</button>')}
      ${row('Сенсорное управление', chk('touch'), 'экспериментально: джойстик и кнопки на экране')}
      <p class="warn">Управление: WASD или стрелки — ходьба, Shift — быстрее, E / Enter / Пробел — действие, 1–3 — маски, Q — снять маску, C — фотоаппарат, Tab — блокнот, H — история, Ctrl — пропуск прочитанного, Esc — пауза.</p></div>
      <div class="foot"><button class="btn small" data-x>Готово</button></div>`);
    (m.querySelector('[data-k=quality]') as HTMLSelectElement).value = s.quality; const offL = m.querySelector('[data-off]')!; offL.textContent = s.rhythmOffset + '';
    m.addEventListener('input', (e) => { const t = e.target as HTMLInputElement, k = t.dataset.k; if (!k) return; (s as any)[k] = t.type === 'checkbox' ? t.checked : t.tagName === 'SELECT' ? t.value : parseFloat(t.value); offL.textContent = s.rhythmOffset + ''; saveSettings(); this.applySettings(); if (k === 'quality') G.R.setup(); if (k === 'sfx') audio.sfx('click'); });
    m.addEventListener('click', async (e) => { if ((e.target as HTMLElement).dataset?.a === 'calib') { const { calibrate } = await import('./minigames'); const v = await calibrate(); if (v != null) { s.rhythmOffset = v; saveSettings(); (m.querySelector('[data-k=rhythmOffset]') as HTMLInputElement).value = String(v); offL.textContent = v + ''; } } });
  }
  async saveLoad(mode: 'save' | 'load') {
    const m = this.open(`<h2>${mode === 'save' ? 'Сохранить' : 'Загрузить'} <small>журнал спектакля</small></h2><div class="body"><div data-list>…</div><p class="warn">Сохранения хранятся только в этом браузере (IndexedDB). Очистка данных сайта или режим инкогнито удалят прогресс — для надёжности экспортируйте файл.</p></div><div class="foot"><button class="btn small" data-a="imp">Импорт из файла</button>${G.running ? '<button class="btn small" data-a="exp">Экспорт в файл</button>' : ''}<button class="btn small" data-x>Закрыть</button></div>`);
    const list = m.querySelector('[data-list]') as HTMLElement;
    const draw = async () => {
      const rows = await Promise.all(SLOTS.map(async (s) => ({ s, ...(await readSave(s).catch((e) => { console.warn(e); return { state: null, broken: true }; })) })));
      list.innerHTML = rows.map(({ s, state, broken }) => `<div class="slot"><div><b>${SLOT_NAMES[s]}</b>${state ? `<small>${esc(state.chapter)} · ${fmtTime(state.time)} в театре · ${new Date(state.savedAt || 0).toLocaleString('ru')}</small>` : `<small>${broken ? '⚠ данные повреждены или несовместимы' : 'пусто'}</small>`}</div><div class="acts">${mode === 'save' && s !== 'auto' && G.running ? `<button class="btn small" data-s="${s}" data-do="save">Записать</button>` : ''}${state ? `<button class="btn small" data-s="${s}" data-do="load">Загрузить</button>` : ''}${state || broken ? `<button class="btn small red" data-s="${s}" data-do="del">✕</button>` : ''}</div></div>`).join('');
    };
    await draw();
    m.addEventListener('click', async (e) => { const t = e.target as HTMLElement, s = t.dataset?.s, d = t.dataset?.do, a = t.dataset?.a;
      if (d === 'save' && s) { await G.save(s); await draw(); }
      if (d === 'del' && s) { if (await this.confirm('Удалить это сохранение?', 'Удалить')) { await deleteSave(s); await draw(); } }
      if (d === 'load' && s) { const r = await readSave(s); if (!r.state) { this.toast('Сохранение повреждено', '⚠'); return; } if (G.running && !(await this.confirm('Загрузить сохранение? Текущий несохранённый прогресс будет потерян.', 'Загрузить'))) return; this.closeAll(); G.stopToMenu(); document.querySelector('.menu-screen')?.remove(); await G.start(r.state); }
      if (a === 'exp') { const blob = new Blob([exportSave(G.state)], { type: 'application/json' }); const u = URL.createObjectURL(blob), l = document.createElement('a'); l.href = u; l.download = 'the-other-me-save.json'; l.click(); setTimeout(() => URL.revokeObjectURL(u), 2000); }
      if (a === 'imp') { const inp = document.createElement('input'); inp.type = 'file'; inp.accept = '.json,application/json'; inp.onchange = async () => { const file = inp.files?.[0]; if (!file) return; const st = importSave(await file.text()); if (!st) { this.toast('Файл не похож на сохранение этой игры', '⚠'); return; } await writeSave('slot3', st); this.toast('Импортировано в «Слот III»', '✎'); await draw(); }; inp.click(); } });
  }
  closeAll() { while (this.modals.length) { const m = this.modals[this.modals.length - 1]; (m as any).onCloseCb = null; this.close(m); } G.paused = false; }
  notebook(tab = 'chars') {
    if (!G.running) return;
    const m = this.open(`<h2>Блокнот режиссёра <small>В. — «не забыть ничего»</small></h2><div class="tabs">${Object.entries(CATS).map(([k, n]) => `<button class="tab" data-t="${k}">${n}</button>`).join('')}<button class="tab" data-t="photos">Фотоархив</button></div><div class="body" data-b></div><div class="foot"><button class="btn small" data-x>Закрыть</button></div>`);
    const body = m.querySelector('[data-b]') as HTMLElement;
    const draw = (t: string) => {
      m.querySelectorAll('.tab').forEach((b) => b.classList.toggle('on', (b as HTMLElement).dataset.t === t));
      if (t === 'photos') { body.innerHTML = G.state.photos.length ? `<div class="photos">${G.state.photos.map((p, i) => `<div class="photo" style="--r:${(i * 37 % 7) - 3}deg"><img src="${p.img}" alt=""><span>${esc(p.caption)}</span></div>`).join('')}</div>` : '<p><i>Плёнка пока пуста. Фотоаппарат — клавиша C.</i></p>'; return; }
      let html = '';
      if (t === 'items') html = G.state.inv.map((id) => `<div class="entry noimg"><div><h4>${esc(ITEMS[id]?.name || id)}</h4><p>${esc(ITEMS[id]?.desc || '')}</p></div></div>`).join('');
      html += G.state.notes.map((id) => NOTES[id]).filter((n) => n && n.cat === t).map((n) => { const c = n.char ? CHARS[n.char] : null; return `<div class="entry ${c ? '' : 'noimg'}">${c ? `<img src="${portrait(n.char!, (n.expr || 'neutral') as any)}" alt="">` : ''}<div><h4>${esc(n.title)}</h4>${c?.role ? `<div class="role">${esc(c.role)}</div>` : ''}<p>${n.text}</p></div></div>`; }).join('');
      body.innerHTML = html || '<p><i>Здесь пока пусто.</i></p>';
    };
    m.addEventListener('click', (e) => { const t = (e.target as HTMLElement).dataset?.t; if (t) { audio.sfx('paper'); draw(t); } }); draw(tab);
  }

  // ---------- главное меню ----------
  async mainMenu() {
    this.hudShow(false); document.querySelector('.menu-screen')?.remove();
    const autos = await Promise.all(SLOTS.map((s) => readSave(s).catch(() => ({ state: null as GameState | null, broken: true }))));
    let latest: GameState | null = null; for (const a of autos) if (a.state && (!latest || (a.state.savedAt || 0) > (latest.savedAt || 0))) latest = a.state;
    const scr = el('div', 'menu-screen', `<div class="menu-valance"></div><div class="menu-spot"></div><div class="menu-logo">${LOGO}</div><div class="menu-list"><button class="btn" data-a="cont" ${latest ? '' : 'disabled'}>Продолжить</button><button class="btn" data-a="new">Новая игра</button><button class="btn" data-a="load">Загрузить</button><button class="btn" data-a="set">Настройки</button><button class="btn" data-a="cred">Создатели</button></div><div class="menu-foot">Театр имени М. Ковалевского · сезон восемнадцатый · лучше всего — в наушниках</div>`, root());
    audio.music('theater');
    scr.addEventListener('click', async (e) => { audio.init(); audio.music('theater'); const a = (e.target as HTMLElement).dataset?.a; if (!a) return; audio.sfx('click');
      if (a === 'cont' && latest) { scr.remove(); await G.start(latest); }
      if (a === 'new') { if (latest && !(await this.confirm('Начать новую игру? Автосохранение будет перезаписано, ручные слоты останутся.', 'Начать'))) return; scr.remove(); await G.start(newState()); }
      if (a === 'load') this.saveLoad('load'); if (a === 'set') this.settings(); if (a === 'cred') this.credits(false); });
    (scr.querySelector(latest ? '[data-a=cont]' : '[data-a=new]') as HTMLElement).focus();
  }
  credits(final: boolean): Promise<void> {
    return new Promise((res) => {
      const sec = (h: string, ps: string[]) => `<h3>${h}</h3>${ps.map((p) => `<p>${p}</p>`).join('')}`;
      const c = el('div', 'credits', `<div class="roll" style="--dur:${final ? 70 : 55}s"><div style="display:inline-block">${LOGO}</div>
        ${sec('В РОЛЯХ', ['Варя<small>режиссёрка, Молодая Девушка, Королева — и всё это одновременно</small>', 'Полина · Рубен · Матвей · Эрика · Лиза · Ангелина<small>в ролях самих себя, наконец-то по собственному выбору</small>', 'Артемий<small>школьный кот одобряет</small>'])}
        ${sec('ТРУППА ТЕАТРА', ['Василиса · Дана · Нина · Аня · Оля<small>второй состав, гастроли «Снежной королевы»; рекомендательные письма — их рук дело</small>'])}
        ${sec('В ЗРИТЕЛЬНОМ ЗАЛЕ', ['Мама Наташа и Саша', 'Папа Максим и Настя', 'Вася', 'Софа · Катя'])}
        ${sec('ХУДОЖЕСТВЕННЫЙ РУКОВОДИТЕЛЬ', ['Кукольник<small>просил не указывать. Указан.</small>'])}
        ${sec('МУЗЫКА, ДЕКОРАЦИИ, СВЕТ', ['Вся музыка, спрайты, портреты и текстуры созданы процедурно специально для этой игры', 'Three.js · TypeScript · Vite'])}
        ${sec('ШРИФТЫ ЛОГОТИПА', ['Aurelia Diamond · Bastliga One · Cintarini · Highcrest · Lombardina Initial One · Zaslia<small>лицензии «для личного некоммерческого использования»; игра — подарок, не продукт</small>', 'Lora · Playfair Display · Marck Script · Pixelify Sans<small>SIL Open Font License</small>'])}
        ${sec('ОСОБАЯ БЛАГОДАРНОСТЬ', ['Третьему ряду.<small>Вас видно. Правда.</small>'])}
        <h3>С ДНЁМ РОЖДЕНИЯ, ВАРЯ</h3><p style="margin-top:3rem;opacity:.6">нажмите, чтобы закрыть</p></div>`, root());
      const fin = () => { off(); c.remove(); res(); }; const off = input.onAction((a) => { if (a === 'act' || a === 'pause') fin(); }); const t0 = performance.now(); c.onclick = () => { if (performance.now() - t0 > 600) fin(); };
      (c.querySelector('.roll') as HTMLElement).addEventListener('animationend', fin); if (G.fast) fin();
    });
  }
  private buildTouch() {
    this.touchEl = el('div', 'touch hidden', '<div class="stick"><i></i></div><div class="tbtns"><button class="tbtn" data-a="camera">◉</button><button class="tbtn" data-a="mask0">☺</button><button class="tbtn big" data-a="act">E</button></div>', root());
    const st = this.touchEl.querySelector('.stick') as HTMLElement, nub = st.querySelector('i') as HTMLElement; let id: number | null = null;
    const mv = (e: PointerEvent) => { const r = st.getBoundingClientRect(); let x = (e.clientX - r.left - r.width / 2) / (r.width / 2), y = (e.clientY - r.top - r.height / 2) / (r.height / 2); const l = Math.hypot(x, y); if (l > 1) { x /= l; y /= l; } input.touchAxis.x = x; input.touchAxis.y = y; nub.style.transform = `translate(${x * 2.2}rem, ${y * 2.2}rem)`; };
    st.addEventListener('pointerdown', (e) => { id = e.pointerId; st.setPointerCapture(id); mv(e); }); st.addEventListener('pointermove', (e) => { if (e.pointerId === id) mv(e); });
    const up = (e: PointerEvent) => { if (e.pointerId === id) { id = null; input.touchAxis.x = input.touchAxis.y = 0; nub.style.transform = ''; } }; st.addEventListener('pointerup', up); st.addEventListener('pointercancel', up);
    let mi = 0; this.touchEl.querySelector('.tbtns')!.addEventListener('pointerdown', (e) => { const a = (e.target as HTMLElement).dataset?.a; if (!a) return; e.preventDefault(); if (a === 'mask0') { const ms = [null, 'comedy', 'tragedy', 'drama']; mi = (mi + 1) % 4; if (ms[mi]) G.setMask(ms[mi]); else if (G.state.mask) G.setMask(G.state.mask); } else input.fire(a); });
  }
}
export const ui = new UI();
