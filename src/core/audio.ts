// Audio: процедурный синтезатор и секвенсор на WebAudio. Вся музыка оригинальная и генерируется в браузере —
// нет внешних файлов и лицензионных рисков. Шины: музыка / эффекты / голоса, ducking под диалоги.
import { settings } from './state';
import { TRACKS, Track, Part } from './music';

const NOTE: Record<string, number> = { c: 0, d: 2, e: 4, f: 5, g: 7, a: 9, b: 11 };
export function freq(n: string): number {
  const m = /^([a-g])([#b]?)(-?\d)$/.exec(n);
  if (!m) { console.warn('[audio] неизвестная нота', n); return 440; }
  const semi = NOTE[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0) + (parseInt(m[3]) + 1) * 12;
  return 440 * Math.pow(2, (semi - 69) / 12);
}
interface Ev { step: number; len: number; notes: string[]; }
const parsed = new Map<Part, { evs: Ev[]; len: number }>();
export function parsePart(p: Part): { evs: Ev[]; len: number } {
  let c = parsed.get(p); if (c) return c;
  const evs: Ev[] = []; let step = 0;
  if (p.inst === 'drums' && !p.seq.includes(' ')) {
    for (const ch of p.seq.replace(/\|/g, '')) { if (ch !== '.') evs.push({ step, len: 1, notes: [ch] }); step++; }
  } else {
    for (const tok of p.seq.split(/\s+/)) {
      if (!tok || tok === '|') continue;
      const [n, l] = tok.split(':'); const len = l ? parseFloat(l) : (p.d || 1);
      if (n !== '.') evs.push({ step, len, notes: n.split('+') });
      step += len;
    }
  }
  c = { evs, len: step }; parsed.set(p, c); return c;
}

class AudioSys {
  ctx: AudioContext | null = null;
  master!: GainNode; bMusic!: GainNode; bSfx!: GainNode; bVoice!: GainNode; duckG!: GainNode; rev!: ConvolverNode; revG!: GainNode;
  noiseBuf!: AudioBuffer;
  cur: { id: string; tr: Track; t0: number; gain: GainNode; next: number[]; } | null = null;
  timer: any = null;
  amb: { id: string; stop: () => void } | null = null;
  partFilter: ((trackId: string, p: Part) => boolean) | null = null;
  musicFx: BiquadFilterNode | null = null;

  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!AC) { console.warn('[audio] WebAudio недоступен — игра продолжит работу без звука'); return; }
    const ctx: AudioContext = this.ctx = new AC();
    this.master = ctx.createGain(); this.master.connect(ctx.destination);
    const comp = ctx.createDynamicsCompressor(); comp.connect(this.master);
    this.bMusic = ctx.createGain(); this.bSfx = ctx.createGain(); this.bVoice = ctx.createGain(); this.duckG = ctx.createGain();
    this.musicFx = ctx.createBiquadFilter(); this.musicFx.type = 'lowpass'; this.musicFx.frequency.value = 20000;
    this.bMusic.connect(this.musicFx); this.musicFx.connect(this.duckG); this.duckG.connect(comp); this.bSfx.connect(comp); this.bVoice.connect(comp);
    // шум и импульс реверберации «пустого зала»
    const nb = this.noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate); const nd = nb.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
    const ir = ctx.createBuffer(2, ctx.sampleRate * 2.2, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) { const d = ir.getChannelData(ch); for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2.6); }
    this.rev = ctx.createConvolver(); this.rev.buffer = ir; this.revG = ctx.createGain(); this.revG.gain.value = 0.22;
    this.rev.connect(this.revG); this.revG.connect(comp);
    this.applyVolumes();
    this.timer = setInterval(() => this.tick(), 40);
  }
  applyVolumes() {
    if (!this.ctx) return;
    this.bMusic.gain.value = settings.music * 0.5; this.bSfx.gain.value = settings.sfx * 0.8; this.bVoice.gain.value = settings.voice * 0.5;
  }
  now() { return this.ctx ? this.ctx.currentTime : performance.now() / 1000; }
  duck(on: boolean) { if (this.ctx) this.duckG.gain.setTargetAtTime(on ? 0.55 : 1, this.ctx.currentTime, 0.15); }
  /** Приглушение музыки фильтром (маски, пауза). */
  muffle(hz: number) { if (this.ctx && this.musicFx) this.musicFx.frequency.setTargetAtTime(hz, this.ctx.currentTime, 0.2); }

  stepDur(tr: Track) { return 60 / tr.bpm / 4; }
  /** Запускает трек; возвращает аудио-время начала (для синхронизации ритм-сцен). */
  music(id: string | null, opts: { fade?: number; restart?: boolean; delay?: number } = {}): number {
    if (!this.ctx) return this.now();
    if (this.cur && this.cur.id === id && !opts.restart) return this.cur.t0;
    const t = this.ctx.currentTime, fade = opts.fade ?? 1.2;
    if (this.cur) { const g = this.cur.gain; g.gain.cancelScheduledValues(t); g.gain.setValueAtTime(g.gain.value, t); g.gain.linearRampToValueAtTime(0, t + fade); setTimeout(() => g.disconnect(), fade * 1000 + 300); this.cur = null; }
    if (!id) return t;
    const tr = TRACKS[id]; if (!tr) { console.warn('[audio] нет трека', id); return t; }
    const gain = this.ctx.createGain(); gain.gain.setValueAtTime(0, t); gain.gain.linearRampToValueAtTime(tr.vol ?? 1, t + Math.min(fade, 0.6) + 0.05); gain.connect(this.bMusic);
    const t0 = t + (opts.delay ?? 0.12);
    this.cur = { id, tr, t0, gain, next: tr.parts.map(() => 0) };
    return t0;
  }
  musicId() { return this.cur ? this.cur.id : null; }
  private tick() {
    const c = this.cur; if (!c || !this.ctx) return;
    const horizon = this.ctx.currentTime + 0.25, sd = this.stepDur(c.tr);
    c.tr.parts.forEach((p, pi) => {
      const { evs, len } = parsePart(p); if (!evs.length || !len) return;
      for (;;) {
        const k = c.next[pi], loop = Math.floor(k / evs.length), ev = evs[k % evs.length];
        if (c.tr.once && loop > 0) break;
        let t = c.t0 + (loop * len + ev.step) * sd;
        if (c.tr.swing && (ev.step % 2 === 1)) t += sd * c.tr.swing;
        if (t > horizon) break;
        c.next[pi]++;
        if (t < this.ctx.currentTime - 0.05) continue;
        if (this.partFilter && !this.partFilter(c.id, p)) continue;
        for (const n of ev.notes) this.voice(p.inst, n, t, ev.len * sd, (p.vol ?? 1), c.gain);
      }
    });
  }

  // ---------- инструменты ----------
  private env(g: AudioParam, t: number, a: number, d: number, s: number, dur: number, r: number, peak: number) {
    g.setValueAtTime(0.0001, t); g.linearRampToValueAtTime(peak, t + a); g.exponentialRampToValueAtTime(Math.max(peak * s, 0.0001), t + a + d);
    g.setValueAtTime(Math.max(peak * s, 0.0001), Math.max(t + dur, t + a + d)); g.exponentialRampToValueAtTime(0.0001, Math.max(t + dur, t + a + d) + r);
  }
  private osc(type: OscillatorType, f: number, t: number, end: number, dest: AudioNode, detune = 0) {
    const o = this.ctx!.createOscillator(); o.type = type; o.frequency.setValueAtTime(f, t); o.detune.value = detune; o.connect(dest); o.start(t); o.stop(end); return o;
  }
  private noise(t: number, dur: number, dest: AudioNode, rate = 1) {
    const s = this.ctx!.createBufferSource(); s.buffer = this.noiseBuf; s.playbackRate.value = rate; s.loop = true; s.connect(dest); s.start(t, Math.random()); s.stop(t + dur); return s;
  }
  voice(inst: string, note: string, t: number, dur: number, vol: number, dest: AudioNode) {
    const ctx = this.ctx!; if (!ctx) return;
    const g = ctx.createGain(); g.connect(dest);
    const wet = (amt: number) => { const w = ctx.createGain(); w.gain.value = amt; g.connect(w); w.connect(this.rev); };
    if (inst === 'drums') {
      if (note === 'k') { const o = ctx.createOscillator(); o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.12); o.connect(g); g.gain.setValueAtTime(0.9 * vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.22); o.start(t); o.stop(t + 0.25); }
      else if (note === 's' || note === 'c' || note === 'r') { const f = ctx.createBiquadFilter(); f.type = note === 'r' ? 'bandpass' : 'highpass'; f.frequency.value = note === 'c' ? 1200 : note === 'r' ? 1800 : 1500; f.connect(g); this.noise(t, 0.2, f); g.gain.setValueAtTime((note === 'r' ? 0.25 : 0.5) * vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + (note === 'r' ? 0.05 : 0.16)); if (note !== 'r') wet(0.2); }
      else if (note === 'h' || note === 'o' || note === 'b') { const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = note === 'b' ? 4000 : 7000; f.connect(g); this.noise(t, 0.3, f); const d = note === 'o' ? 0.22 : note === 'b' ? 0.12 : 0.04; g.gain.setValueAtTime((note === 'b' ? 0.16 : 0.2) * vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + d); }
      else if (note === 't') { const o = ctx.createOscillator(); o.frequency.setValueAtTime(200, t); o.frequency.exponentialRampToValueAtTime(90, t + 0.15); o.connect(g); g.gain.setValueAtTime(0.5 * vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.2); o.start(t); o.stop(t + 0.22); }
      return;
    }
    const f = freq(note);
    switch (inst) {
      case 'piano': { this.env(g.gain, t, 0.005, 0.25, 0.25, dur, 0.4, 0.26 * vol); const end = t + dur + 0.6; this.osc('triangle', f, t, end, g); const g2 = ctx.createGain(); g2.gain.value = 0.3; g2.connect(g); this.osc('sine', f * 2, t, end, g2); wet(0.35); break; }
      case 'box': { this.env(g.gain, t, 0.002, 0.5, 0.05, Math.min(dur, 0.3), 0.9, 0.2 * vol); const end = t + 1.6; this.osc('sine', f, t, end, g); const g2 = ctx.createGain(); g2.gain.value = 0.25; g2.connect(g); this.osc('sine', f * 3.01, t, end, g2); wet(0.5); break; }
      case 'bass': { const fl = ctx.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.setValueAtTime(900, t); fl.frequency.exponentialRampToValueAtTime(220, t + 0.2); fl.connect(g); this.env(g.gain, t, 0.005, 0.1, 0.7, dur * 0.9, 0.08, 0.34 * vol); this.osc('sawtooth', f, t, t + dur + 0.2, fl); this.osc('square', f / 2, t, t + dur + 0.2, fl, 4); break; }
      case 'upright': { const fl = ctx.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = 600; fl.connect(g); this.env(g.gain, t, 0.008, 0.25, 0.2, dur * 0.8, 0.15, 0.5 * vol); this.osc('triangle', f, t, t + dur + 0.3, fl); this.osc('sine', f * 2, t, t + dur + 0.3, fl); break; }
      case 'pad': case 'strings': { const fl = ctx.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = inst === 'pad' ? 900 : 2200; fl.connect(g); const a = inst === 'pad' ? 0.35 : 0.12; this.env(g.gain, t, Math.min(a, dur * 0.5), 0.2, 0.85, dur, 0.5, 0.075 * vol); const end = t + dur + 0.7; this.osc('sawtooth', f, t, end, fl, -7); this.osc('sawtooth', f, t, end, fl, 8); wet(0.5); break; }
      case 'lead': case 'pluck': { const fl = ctx.createBiquadFilter(); fl.type = 'lowpass'; fl.Q.value = 4; fl.frequency.setValueAtTime(inst === 'pluck' ? 3500 : 2600, t); fl.frequency.exponentialRampToValueAtTime(inst === 'pluck' ? 500 : 1400, t + 0.25); fl.connect(g); this.env(g.gain, t, 0.006, 0.15, inst === 'pluck' ? 0.15 : 0.6, dur * 0.95, 0.12, 0.13 * vol); const end = t + dur + 0.3; this.osc(inst === 'pluck' ? 'sawtooth' : 'square', f, t, end, fl); this.osc('sawtooth', f, t, end, fl, 9); wet(0.25); break; }
      case 'sax': case 'voice': {
        const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(f * 0.985, t); o.frequency.linearRampToValueAtTime(f, t + 0.07);
        const lfo = ctx.createOscillator(), lg = ctx.createGain(); lfo.frequency.value = inst === 'sax' ? 5.2 : 5.8; lg.gain.setValueAtTime(0, t); lg.gain.linearRampToValueAtTime(f * 0.012, t + Math.min(0.3, dur)); lfo.connect(lg); lg.connect(o.frequency);
        const end = t + dur + 0.25; const mix = ctx.createGain(); mix.connect(g);
        const fm = inst === 'sax' ? [[700, 3, 1], [1500, 4, 0.5]] : [[800, 6, 1], [1150, 7, 0.6], [2900, 8, 0.25]];
        for (const [ff, q, a] of fm) { const b = ctx.createBiquadFilter(); b.type = 'bandpass'; b.frequency.value = ff; b.Q.value = q; const bg = ctx.createGain(); bg.gain.value = a; o.connect(b); b.connect(bg); bg.connect(mix); }
        this.env(g.gain, t, 0.05, 0.1, 0.85, dur * 0.95, 0.18, (inst === 'sax' ? 0.5 : 0.55) * vol); o.start(t); o.stop(end); lfo.start(t); lfo.stop(end); wet(0.4); break; }
      case 'organ': { this.env(g.gain, t, 0.02, 0.05, 0.9, dur, 0.1, 0.07 * vol); const end = t + dur + 0.2; for (const [m, a] of [[1, 1], [2, 0.5], [3, 0.25], [4, 0.2]]) { const gg = ctx.createGain(); gg.gain.value = a; gg.connect(g); this.osc('sine', f * m, t, end, gg); } wet(0.3); break; }
      case 'drone': { const fl = ctx.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = 300; fl.connect(g); this.env(g.gain, t, Math.min(1.2, dur * 0.4), 0.3, 0.9, dur, 1.2, 0.2 * vol); const end = t + dur + 1.4; this.osc('sawtooth', f, t, end, fl, -12); this.osc('sine', f, t, end, fl, 9); this.osc('sine', f * 1.5, t, end, fl, 3); wet(0.6); break; }
      default: console.warn('[audio] нет инструмента', inst);
    }
  }

  // ---------- эффекты ----------
  sfx(name: string, o: any = {}) {
    const ctx = this.ctx; if (!ctx) return;
    const t = ctx.currentTime + 0.005, g = ctx.createGain(); g.connect(this.bSfx);
    const wet = (a: number) => { const w = ctx.createGain(); w.gain.value = a; g.connect(w); w.connect(this.rev); };
    const nz = (type: BiquadFilterType, fq: number, dur: number, vol: number, at = t, q = 1, toFq?: number) => { const f = ctx.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(fq, at); if (toFq) f.frequency.exponentialRampToValueAtTime(toFq, at + dur); f.Q.value = q; const gg = ctx.createGain(); gg.gain.setValueAtTime(vol, at); gg.gain.exponentialRampToValueAtTime(0.001, at + dur); f.connect(gg); gg.connect(g); this.noise(at, dur + 0.05, f); };
    const tone = (type: OscillatorType, f1: number, f2: number, dur: number, vol: number, at = t) => { const os = ctx.createOscillator(); os.type = type; os.frequency.setValueAtTime(f1, at); if (f2 !== f1) os.frequency.exponentialRampToValueAtTime(f2, at + dur); const gg = ctx.createGain(); gg.gain.setValueAtTime(vol, at); gg.gain.exponentialRampToValueAtTime(0.001, at + dur); os.connect(gg); gg.connect(g); os.start(at); os.stop(at + dur + 0.02); };
    switch (name) {
      case 'step': { const m = o.mat || 'wood'; const fq = m === 'wood' ? 300 : m === 'stone' ? 900 : m === 'metal' ? 2200 : m === 'grass' ? 2600 : m === 'carpet' ? 180 : 500; nz(m === 'metal' ? 'bandpass' : 'lowpass', fq * (0.9 + Math.random() * 0.2), m === 'grass' ? 0.09 : 0.05, m === 'carpet' ? 0.1 : 0.16, t, m === 'metal' ? 6 : 1); if (m === 'wood') tone('sine', 110, 70, 0.05, 0.1); break; }
      case 'click': tone('square', 900, 700, 0.03, 0.08); break;
      case 'hover': tone('sine', 1200, 1200, 0.02, 0.03); break;
      case 'paper': nz('bandpass', 3000, 0.12, 0.2, t, 0.7, 5000); break;
      case 'pencil': nz('bandpass', 5000, 0.18, 0.1, t, 2, 3500); break;
      case 'stamp': tone('sine', 140, 50, 0.12, 0.6); nz('lowpass', 800, 0.06, 0.3); break;
      case 'pickup': tone('triangle', 660, 660, 0.08, 0.15); tone('triangle', 990, 990, 0.14, 0.15, t + 0.07); break;
      case 'note': tone('sine', 880, 880, 0.1, 0.1); tone('sine', 1320, 1320, 0.2, 0.08, t + 0.08); wet(0.4); break;
      case 'switch': tone('square', 240, 120, 0.04, 0.18); nz('highpass', 3000, 0.02, 0.15); break;
      case 'spot': tone('square', 180, 90, 0.05, 0.2); tone('sine', 55, 55, 0.5, 0.12, t + 0.02); wet(0.4); break;
      case 'door': tone('sawtooth', 90, 140, 0.35, 0.07); nz('lowpass', 400, 0.14, 0.4, t + 0.33); wet(0.3); break;
      case 'creak': tone('sawtooth', 180, 320, 0.5, 0.05); tone('sawtooth', 320, 210, 0.4, 0.04, t + 0.45); wet(0.5); break;
      case 'locked': tone('square', 160, 160, 0.05, 0.14); tone('square', 160, 160, 0.05, 0.14, t + 0.1); break;
      case 'curtain': nz('lowpass', 500, 1.6, 0.3, t, 0.5, 1800); wet(0.4); break;
      case 'whoosh': nz('bandpass', 400, 0.5, 0.3, t, 1.2, 2400); break;
      case 'shutter': nz('highpass', 4000, 0.03, 0.4); nz('highpass', 3000, 0.05, 0.3, t + 0.08); tone('square', 1500, 500, 0.03, 0.1); break;
      case 'mask': tone('sine', 520, 1040, 0.25, 0.12); tone('sine', 780, 1560, 0.3, 0.08, t + 0.04); wet(0.6); break;
      case 'error': tone('square', 200, 150, 0.18, 0.14); break;
      case 'ok': tone('triangle', 523, 523, 0.1, 0.14); tone('triangle', 784, 784, 0.2, 0.14, t + 0.09); wet(0.3); break;
      case 'hit': tone('triangle', o.f || 880, o.f || 880, 0.07, 0.12); break;
      case 'miss': nz('lowpass', 300, 0.08, 0.2); break;
      case 'knock': for (let i = 0; i < (o.n || 3); i++) { tone('sine', 120, 60, 0.18, 0.7, t + i * 0.7); nz('lowpass', 500, 0.05, 0.3, t + i * 0.7); } wet(0.7); break;
      case 'thunder': nz('lowpass', 200, 2.4, 0.9, t, 0.5, 60); wet(0.8); break;
      case 'alarm': for (let i = 0; i < 3; i++) tone('square', 880, 660, 0.22, 0.12, t + i * 0.26); break;
      case 'laser': tone('sawtooth', 1800, 300, 0.2, 0.1); break;
      case 'emp': tone('sawtooth', 100, 1600, 0.3, 0.12); nz('bandpass', 2000, 0.3, 0.15, t, 3, 200); break;
      case 'glitch': for (let i = 0; i < 5; i++) tone('square', 200 + Math.random() * 2000, 100 + Math.random() * 800, 0.04, 0.07, t + i * 0.045); break;
      case 'heart': tone('sine', 70, 40, 0.14, 0.7); tone('sine', 60, 40, 0.14, 0.5, t + 0.22); break;
      case 'laugh': { const n = o.n || 6; for (let i = 0; i < n; i++) { const at = t + i * 0.17, ff = (o.f || 520) * (1 - i * 0.05); const os = ctx.createOscillator(); os.type = 'sawtooth'; os.frequency.setValueAtTime(ff * 1.2, at); os.frequency.exponentialRampToValueAtTime(ff, at + 0.1); const b = ctx.createBiquadFilter(); b.type = 'bandpass'; b.frequency.value = 900; b.Q.value = 3; const gg = ctx.createGain(); gg.gain.setValueAtTime(0.0001, at); gg.gain.linearRampToValueAtTime(o.vol || 0.3, at + 0.02); gg.gain.exponentialRampToValueAtTime(0.001, at + 0.13); os.connect(b); b.connect(gg); gg.connect(g); os.start(at); os.stop(at + 0.15); } wet(0.7); break; }
      case 'applause': { const dur = o.dur || 3, dens = o.dens || 45; for (let i = 0; i < dur * dens; i++) { const at = t + Math.random() * dur; const amp = Math.sin(Math.PI * Math.min(1, (at - t) / dur)) * 0.12 + 0.03; nz('bandpass', 1200 + Math.random() * 2200, 0.03, amp, at, 1.5); } wet(0.6); break; }
      case 'clap': nz('bandpass', 1500 + Math.random() * 800, 0.04, 0.4, t, 1.5); wet(0.5); break;
      case 'gasp': nz('bandpass', 1800, 0.4, 0.12, t, 2, 900); wet(0.5); break;
      case 'bell': tone('sine', 660, 660, 1.2, 0.2); tone('sine', 1320, 1320, 0.8, 0.08); wet(0.7); break;
      case 'crash': nz('lowpass', 1500, 0.9, 0.7, t, 0.5, 100); tone('sine', 80, 30, 0.5, 0.6); wet(0.5); break;
      case 'snip': nz('highpass', 5000, 0.04, 0.4); nz('highpass', 4000, 0.05, 0.4, t + 0.09); break;
      case 'rope': nz('bandpass', 900, 0.3, 0.2, t, 3, 1800); break;
      case 'gear': for (let i = 0; i < 6; i++) tone('square', 300, 200, 0.03, 0.08, t + i * 0.09); break;
      case 'candle': nz('bandpass', 900, 0.25, 0.25, t, 1, 300); break;
      case 'firework': nz('bandpass', 600, 0.4, 0.12, t, 2, 3000); nz('lowpass', 2500, 0.8, 0.5, t + 0.45, 0.5, 200); wet(0.6); break;
      case 'engine': tone('sawtooth', 70, 160, 0.9, 0.16); break;
      default: console.warn('[audio] нет эффекта', name);
    }
  }
  /** Короткий «голосовой» сигнал реплики; у каждого персонажа своя высота. */
  blip(pitch: number) {
    const ctx = this.ctx; if (!ctx) return; const t = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'triangle'; o.frequency.setValueAtTime(pitch * (0.96 + Math.random() * 0.1), t);
    g.gain.setValueAtTime(0.11, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.05); o.connect(g); g.connect(this.bVoice); o.start(t); o.stop(t + 0.06);
  }
  /** Фоновая атмосфера (дождь, зал, толпа, гул). */
  ambience(id: string | null) {
    if (!this.ctx) return; if (this.amb && this.amb.id === id) return;
    if (this.amb) { this.amb.stop(); this.amb = null; }
    if (!id) return;
    const ctx = this.ctx, g = ctx.createGain(); g.gain.value = 0; g.connect(this.bSfx);
    const src = ctx.createBufferSource(); src.buffer = this.noiseBuf; src.loop = true;
    const f = ctx.createBiquadFilter();
    const cfg: any = { rain: ['highpass', 1800, 0.16], hall: ['lowpass', 180, 0.22], crowd: ['bandpass', 700, 0.12], wind: ['bandpass', 350, 0.14], hum: ['lowpass', 90, 0.35], city: ['lowpass', 500, 0.12] }[id];
    if (!cfg) { console.warn('[audio] нет атмосферы', id); return; }
    f.type = cfg[0]; f.frequency.value = cfg[1]; src.connect(f); f.connect(g); src.start();
    g.gain.linearRampToValueAtTime(cfg[2], ctx.currentTime + 1);
    this.amb = { id, stop: () => { g.gain.cancelScheduledValues(ctx.currentTime); g.gain.setTargetAtTime(0, ctx.currentTime, 0.3); setTimeout(() => { src.stop(); g.disconnect(); }, 1500); } };
  }
  /** Времена нот партии — основа карт ритм-сцен. */
  chart(trackId: string, partIdx: number, loops = 1): { t: number; len: number; note: string }[] {
    const tr = TRACKS[trackId], p = tr.parts[partIdx], { evs, len } = parsePart(p), sd = this.stepDur(tr), out = [];
    for (let l = 0; l < loops; l++) for (const e of evs) out.push({ t: (l * len + e.step) * sd, len: e.len * sd, note: e.notes[0] });
    return out;
  }
  suspend(on: boolean) { if (!this.ctx) return; if (on) this.ctx.suspend(); else this.ctx.resume(); }
}
export const audio = new AudioSys();
