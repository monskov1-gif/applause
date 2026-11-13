// Рендерер: низкое внутреннее разрешение (пиксель-арт), HDR-композитинг, bloom, цветокоррекция, глитч.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';
import { settings } from '../core/state';

export interface Grade { sat?: number; tint?: number[]; vig?: number; glitch?: number; bright?: number; contrast?: number; wave?: number; bloom?: number; }
const DEF: Required<Grade> = { sat: 1, tint: [1, 1, 1], vig: 0.35, glitch: 0, bright: 1, contrast: 1, wave: 0, bloom: 0.45 };
const GradeShader = {
  uniforms: { tDiffuse: { value: null }, uSat: { value: 1 }, uTint: { value: new THREE.Vector3(1, 1, 1) }, uVig: { value: 0.35 }, uGlitch: { value: 0 }, uBright: { value: 1 }, uContrast: { value: 1 }, uWave: { value: 0 }, uTime: { value: 0 }, uFlash: { value: 0 }, uDither: { value: 1 }, uCA: { value: 0.0018 }, uGrain: { value: 0.035 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform float uSat,uVig,uGlitch,uBright,uContrast,uWave,uTime,uFlash,uDither,uCA,uGrain; uniform vec3 uTint; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }
    void main(){ vec2 uv=vUv;
      if(uWave>0.0){ uv.x+=sin(uv.y*18.0+uTime*2.2)*0.006*uWave; uv.y+=sin(uv.x*14.0+uTime*1.7)*0.005*uWave; }
      float sh=0.0;
      if(uGlitch>0.0){ float band=floor(uv.y*24.0); float n=h(vec2(band,floor(uTime*9.0))); if(n>1.0-uGlitch*0.35){ uv.x+=(h(vec2(band,uTime))-0.5)*0.12*uGlitch; } sh=0.004*uGlitch; }
      vec2 dc=uv-0.5; float ca=uCA*dot(dc,dc)*4.0; vec3 c=vec3(texture2D(tDiffuse,uv+dc*ca).r, texture2D(tDiffuse,uv).g, texture2D(tDiffuse,uv-dc*ca).b);
      if(sh>0.0){ c.r=texture2D(tDiffuse,uv+vec2(sh,0.0)).r; c.b=texture2D(tDiffuse,uv-vec2(sh,0.0)).b; }
      float l=dot(c,vec3(0.3,0.59,0.11)); c=mix(vec3(l),c,uSat); c*=uTint*uBright; c=(c-0.5)*uContrast+0.5;
      float d=distance(vUv,vec2(0.5)); c*=1.0-uVig*smoothstep(0.35,0.85,d);
      float lum=dot(c,vec3(0.3,0.59,0.11)); c=mix(c*vec3(0.94,0.98,1.06), c*vec3(1.06,1.0,0.92), smoothstep(0.15,0.75,lum));
      c+=(h(gl_FragCoord.xy+floor(uTime*24.0))-0.5)*uGrain; c+=vec3(uFlash);
      vec2 fp=floor(mod(gl_FragCoord.xy,4.0)); float b=mod(fp.x*8.0+fp.y*2.0+mod(fp.y,2.0)*4.0,16.0)/16.0;
      c=floor(c*40.0+b*uDither)/40.0; gl_FragColor=vec4(c,1.0); }`,
};
// Тилт-шифт как в HD-2D: резкая полоса вокруг героини, передний и дальний планы мягко размыты.
const TiltShader = {
  uniforms: { tDiffuse: { value: null }, uFocus: { value: 0.5 }, uBand: { value: 0.16 }, uAmt: { value: 1 }, uRes: { value: new THREE.Vector2(640, 360) } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform float uFocus,uBand,uAmt; uniform vec2 uRes; varying vec2 vUv;
    void main(){ float d=abs(vUv.y-uFocus); float near=step(vUv.y,uFocus); float r=smoothstep(uBand, uBand+0.38, d)*uAmt*(near>0.5?4.2:3.0);
      if(r<0.05){ gl_FragColor=texture2D(tDiffuse,vUv); return; }
      vec3 acc=vec3(0.0); float w=0.0; for(int i=0;i<12;i++){ float a=float(i)*2.39996; float rr=sqrt(float(i)+0.5)/3.5; vec2 o=vec2(cos(a),sin(a))*rr*r/uRes; float k=1.0-rr*0.35; acc+=texture2D(tDiffuse,vUv+o).rgb*k; w+=k; }
      gl_FragColor=vec4(acc/w,1.0); }`,
};
export class Renderer {
  r: THREE.WebGLRenderer; scene = new THREE.Scene(); cam: THREE.PerspectiveCamera; composer!: EffectComposer; bloom!: UnrealBloomPass; grade!: ShaderPass;
  target: Required<Grade> = { ...DEF, tint: [...DEF.tint] }; cur: Required<Grade> = { ...DEF, tint: [...DEF.tint] };
  flash = 0; W = 640; H = 360; time = 0;
  constructor(public canvas: HTMLCanvasElement) {
    this.r = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
    this.r.shadowMap.enabled = true; this.r.shadowMap.type = THREE.PCFSoftShadowMap;
    this.r.toneMapping = THREE.ACESFilmicToneMapping; this.r.toneMappingExposure = 1.3;
    this.cam = new THREE.PerspectiveCamera(30, 16 / 9, 1, 200);
    this.setup(); window.addEventListener('resize', () => this.setup());
  }
  bokeh: BokehPass | null = null; dofFocus = 0; pixelH = 0; baseFov = 30; tilt: ShaderPass | null = null; tiltOn = true;
  /** pixelH > 0 — своё внутреннее разрешение (меню), dof — глубина резкости. */
  setup(o: { pixelH?: number; dof?: boolean } = {}) {
    if (o.pixelH != null) this.pixelH = o.pixelH; const useDof = o.dof ?? !!this.bokeh;
    const cw = window.innerWidth, ch = window.innerHeight;
    const targetH = this.pixelH || (settings.quality === 'low' ? 288 : settings.quality === 'med' ? 400 : 540);
    const scale = Math.max(1, Math.floor(ch / targetH)) || 1;
    this.H = Math.max(180, Math.round(ch / scale)); this.W = Math.max(240, Math.round(cw / scale));
    this.r.setPixelRatio(1); this.r.setSize(this.W, this.H, false);
    this.r.shadowMap.enabled = settings.quality !== 'low';
    this.cam.aspect = this.W / this.H; this.cam.fov = this.cam.aspect < 1 ? this.baseFov * 1.5 : this.baseFov; this.cam.updateProjectionMatrix();
    const rt = new THREE.WebGLRenderTarget(this.W, this.H, { type: THREE.HalfFloatType });
    this.composer = new EffectComposer(this.r, rt);
    this.composer.addPass(new RenderPass(this.scene, this.cam));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(this.W, this.H), 0.45, 0.5, 0.9);
    this.bloom.enabled = settings.quality !== 'low'; this.composer.addPass(this.bloom);
    this.bokeh = null; if (useDof && settings.quality !== 'low') { this.bokeh = new BokehPass(this.scene, this.cam, { focus: this.dofFocus || 5, aperture: 0.004, maxblur: 0.006 }); this.composer.addPass(this.bokeh); }
    this.tilt = new ShaderPass(TiltShader); this.tilt.uniforms.uRes.value.set(this.W, this.H); this.tilt.enabled = settings.quality !== 'low' && this.tiltOn; this.composer.addPass(this.tilt);
    this.composer.addPass(new OutputPass());
    this.grade = new ShaderPass(GradeShader); this.composer.addPass(this.grade);
  }
  setGrade(g: Grade, instant = false) { this.target = { ...DEF, ...g, tint: g.tint ? [...g.tint] : [...DEF.tint] }; if (instant) this.cur = { ...this.target, tint: [...this.target.tint] }; }
  render(dt: number) {
    this.time += dt; const k = Math.min(1, dt * 4), c = this.cur, t = this.target;
    for (const key of ['sat', 'vig', 'glitch', 'bright', 'contrast', 'wave', 'bloom'] as const) c[key] += (t[key] - c[key]) * k;
    for (let i = 0; i < 3; i++) c.tint[i] += (t.tint[i] - c.tint[i]) * k;
    this.flash = Math.max(0, this.flash - dt * 2.5);
    const u = this.grade.uniforms; u.uSat.value = c.sat; u.uTint.value.set(c.tint[0], c.tint[1], c.tint[2]); u.uVig.value = c.vig; u.uGlitch.value = settings.reduceFlash ? Math.min(c.glitch, 0.25) : c.glitch;
    u.uBright.value = c.bright; u.uContrast.value = c.contrast * (settings.contrast ? 1.12 : 1); u.uWave.value = c.wave; u.uTime.value = this.time; u.uFlash.value = settings.reduceFlash ? this.flash * 0.25 : this.flash;
    this.bloom.strength = c.bloom * 0.65;
    this.composer.render(dt);
  }
  /** Снимок кадра для фотоархива. */
  snapshot(w = 192): string {
    this.composer.render(0);
    const cv = document.createElement('canvas'); cv.width = w; cv.height = Math.round(w * this.H / this.W); const c = cv.getContext('2d')!; c.imageSmoothingEnabled = false;
    c.drawImage(this.canvas, 0, 0, cv.width, cv.height); return cv.toDataURL('image/jpeg', 0.7);
  }
}
