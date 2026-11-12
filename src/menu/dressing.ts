// Главное меню: трёхмерная гримёрка со вступлением «THE KEY».
// Состояния вступления: dark → reveal → insert → await → turn → hold → lights → logo → menu.
// Центральный объект — музыкальная шкатулка с чёрной фигуркой-автоматом: единый корпус и кулачковый механизм,
// который в зависимости от угла поворота выдвигает или прячет детали. Вращающийся силуэт читается по очереди
// как балерина, актёр с масками и статуэтка «Оскар».
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { canvasTex, tex } from '../gfx/tex';
import { audio } from '../core/audio';
import type { Renderer } from '../gfx/render';

type Mat = THREE.MeshStandardMaterial;
const std = (o: THREE.MeshStandardMaterialParameters) => new THREE.MeshStandardMaterial({ roughness: 0.7, metalness: 0, ...o });
const BX = 0.8;
const smooth = (a: number, b: number, x: number) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const wrap = (a: number) => { while (a > Math.PI) a -= Math.PI * 2; while (a < -Math.PI) a += Math.PI * 2; return a; };
const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function pixTex(w: number, h: number, draw: (c: CanvasRenderingContext2D) => void, key: string) { return canvasTex(w, h, draw, 'menu|' + key); }
const goldTex = () => pixTex(32, 32, (c) => { for (let y = 0; y < 32; y++) for (let x = 0; x < 32; x++) { const n = Math.sin(x * 0.7 + y * 0.3) * 0.5 + Math.sin(x * 0.13 - y * 0.9) * 0.3 + (((x * 7 + y * 13) % 5) / 10); const v = 150 + n * 50; c.fillStyle = `rgb(${v + 40},${v + 5},${v * 0.45})`; c.fillRect(x, y, 1, 1); } }, 'gold');
const porcelainTex = () => pixTex(128, 32, (c) => {
  c.fillStyle = '#efe6d6'; c.fillRect(0, 0, 128, 32); c.strokeStyle = '#c9a052'; c.lineWidth = 1.4;
  for (let i = 0; i < 8; i++) { const x = i * 16; c.beginPath(); c.moveTo(x, 26); c.bezierCurveTo(x + 4, 6, x + 12, 6, x + 14, 18); c.bezierCurveTo(x + 15, 24, x + 9, 24, x + 9, 18); c.stroke(); c.fillStyle = '#d8b060'; c.fillRect(x + 7, 8, 2, 2); }
  c.fillStyle = '#c9a052'; c.fillRect(0, 0, 128, 2); c.fillRect(0, 30, 128, 2);
}, 'porcelain');

// ---------- шкатулка и фигурка ----------
interface Box { group: THREE.Group; fig: THREE.Group; update: (theta: number, t: number, camPos: THREE.Vector3) => number; }
function maskShape(happy: boolean) {
  const s = new THREE.Shape(); s.moveTo(-0.022, 0.02); s.quadraticCurveTo(0, 0.03, 0.022, 0.02); s.quadraticCurveTo(0.026, -0.012, 0, -0.03); s.quadraticCurveTo(-0.026, -0.012, -0.022, 0.02);
  for (const ex of [-0.009, 0.009]) { const h = new THREE.Path(); h.absellipse(ex, 0.006, 0.006, happy ? 0.0035 : 0.005, 0, Math.PI * 2, false, happy ? 0 : 0.4); s.holes.push(h); }
  const m = new THREE.Path(); if (happy) { m.moveTo(-0.01, -0.01); m.quadraticCurveTo(0, -0.022, 0.01, -0.01); m.quadraticCurveTo(0, -0.014, -0.01, -0.01); } else { m.moveTo(-0.01, -0.018); m.quadraticCurveTo(0, -0.008, 0.01, -0.018); m.quadraticCurveTo(0, -0.012, -0.01, -0.018); } s.holes.push(m);
  return new THREE.ExtrudeGeometry(s, { depth: 0.004, bevelEnabled: false });
}
function reelShape() {
  const s = new THREE.Shape(); s.absarc(0, 0, 0.034, 0, Math.PI * 2, false);
  for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2; const h = new THREE.Path(); h.absarc(Math.cos(a) * 0.019, Math.sin(a) * 0.019, 0.008, 0, Math.PI * 2, true); s.holes.push(h); }
  const c = new THREE.Path(); c.absarc(0, 0, 0.004, 0, Math.PI * 2, true); s.holes.push(c); return new THREE.ExtrudeGeometry(s, { depth: 0.012, bevelEnabled: false });
}
function buildMusicBox(gold: Mat, porcelain: Mat, black: Mat): Box {
  const g = new THREE.Group();
  // корпус: точёный фарфор с золотыми поясками, бусинами и ножками
  const prof = [[0.0, 0], [0.2, 0], [0.215, 0.012], [0.205, 0.03], [0.22, 0.09], [0.215, 0.15], [0.195, 0.19], [0.205, 0.205], [0.0, 0.205]].map(([x, y]) => new THREE.Vector2(x, y + 0.035));
  const body = new THREE.Mesh(new THREE.LatheGeometry(prof, 40), porcelain); body.castShadow = true; body.receiveShadow = true; g.add(body);
  for (const [y, r, tr] of [[0.05, 0.212, 0.008], [0.235, 0.205, 0.008], [0.125, 0.222, 0.005]]) { const ring = new THREE.Mesh(new THREE.TorusGeometry(r, tr, 6, 48), gold); ring.rotation.x = Math.PI / 2; ring.position.y = y; g.add(ring); }
  const bead = new THREE.InstancedMesh(new THREE.SphereGeometry(0.008, 6, 4), gold, 56); const m4 = new THREE.Matrix4(); for (let i = 0; i < 56; i++) { const a = i / 56 * Math.PI * 2; m4.makeTranslation(Math.cos(a) * 0.218, 0.043, Math.sin(a) * 0.218); bead.setMatrixAt(i, m4); } g.add(bead);
  for (let i = 0; i < 4; i++) { const a = i / 4 * Math.PI * 2 + Math.PI / 4; const f = new THREE.Mesh(new THREE.SphereGeometry(0.026, 10, 8), gold); f.position.set(Math.cos(a) * 0.17, 0.022, Math.sin(a) * 0.17); g.add(f); }
  // вращающаяся площадка
  const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.13, 0.025, 32), gold); plate.position.y = 0.252; g.add(plate);
  const fig = new THREE.Group(); fig.position.y = 0.265; fig.scale.setScalar(1.75); g.add(fig);
  // общий корпус фигурки (виден всегда)
  const add = (geo: THREE.BufferGeometry, p: [number, number, number], parent: THREE.Object3D = fig) => { const m = new THREE.Mesh(geo, black); m.position.set(...p); m.castShadow = true; parent.add(m); return m; };
  const base = add(new THREE.CylinderGeometry(0.036, 0.042, 0.022, 20), [0, 0.011, 0]);
  const torso = add(new THREE.LatheGeometry([[0, 0], [0.018, 0], [0.016, 0.03], [0.012, 0.05], [0.02, 0.085], [0.022, 0.1], [0.01, 0.108], [0, 0.108]].map(([x, y]) => new THREE.Vector2(x, y)), 16), [0, 0.15, 0]);
  const head = add(new THREE.SphereGeometry(0.019, 14, 10), [0, 0.282, 0]); add(new THREE.CylinderGeometry(0.007, 0.008, 0.02, 8), [0, 0.262, 0]);
  const limb = (len: number, r: number) => { const pivot = new THREE.Group(); const m = new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 3, 8), black); m.position.y = -len / 2; m.castShadow = true; pivot.add(m); return pivot; };
  const legL = limb(0.12, 0.009), legR = limb(0.12, 0.009); legL.position.set(-0.008, 0.15, 0); legR.position.set(0.008, 0.15, 0); fig.add(legL, legR);
  const armL = limb(0.085, 0.006), armR = limb(0.085, 0.006); armL.position.set(-0.02, 0.245, 0); armR.position.set(0.02, 0.245, 0); fig.add(armL, armR);
  // фазы: k=0 балерина, 1 актёр, 2 «Оскар». d_k — направление, которым силуэт обращён к зрителю
  const PH = [0, Math.PI * 2 / 3, Math.PI * 4 / 3];
  const dir = (k: number) => new THREE.Vector3(Math.sin(PH[k]), 0, Math.cos(PH[k]));
  // балерина: пачка, пучок волос
  const tutu = add(new THREE.SphereGeometry(1, 20, 6), [0, 0.15, 0]); const bun = add(new THREE.SphereGeometry(0.011, 8, 6), [0, 0.296, -0.012]);
  // актёр: маски в руках, плащ
  const maskC = new THREE.Mesh(maskShape(true), black), maskT = new THREE.Mesh(maskShape(false), black);
  const handR = new THREE.Group(); handR.position.y = -0.095; armR.add(handR); handR.add(maskC);
  const handL = new THREE.Group(); handL.position.y = -0.095; armL.add(handL); handL.add(maskT);
  const capeShape = new THREE.Shape(); capeShape.moveTo(-0.022, 0); capeShape.lineTo(0.022, 0); capeShape.lineTo(0.06, -0.14); capeShape.quadraticCurveTo(0, -0.12, -0.06, -0.14); capeShape.lineTo(-0.022, 0);
  const capeG = new THREE.Group(); capeG.position.set(0, 0.25, 0); fig.add(capeG); const cape = new THREE.Mesh(new THREE.ShapeGeometry(capeShape), black); (cape.material as Mat).side = THREE.DoubleSide; capeG.add(cape);
  // «Оскар»: меч перед грудью, бобина плёнки в основании
  const swordG = new THREE.Group(); fig.add(swordG); const sword = add(new THREE.BoxGeometry(0.006, 0.17, 0.004), [0, 0.13, 0], swordG); const hilt = add(new THREE.BoxGeometry(0.03, 0.005, 0.005), [0, 0.2, 0], swordG);
  const reelG = new THREE.Group(); reelG.position.y = 0.035; fig.add(reelG); const reel = new THREE.Mesh(reelShape(), black); reel.position.z = -0.006; reelG.add(reel);
  const q = new THREE.Quaternion(), q2 = new THREE.Quaternion(), tmp = new THREE.Vector3();
  const pose = (pivot: THREE.Object3D, spreads: number[], w: number[], fwd: number[]) => { q.identity(); for (let k = 0; k < 3; k++) { q2.setFromAxisAngle(dir(k), spreads[k] * w[k]); q.multiply(q2); const tk = new THREE.Vector3(Math.cos(PH[k]), 0, -Math.sin(PH[k])); q2.setFromAxisAngle(tk, fwd[k] * w[k]); q.multiply(q2); } pivot.quaternion.copy(q); };
  const orient = (o: THREE.Object3D, k: number) => { o.rotation.set(0, PH[k], 0); };
  let lastDom = -1;
  return {
    group: g, fig,
    update(theta, t, camPos) {
      fig.rotation.y = theta; fig.rotation.z = Math.sin(t * 2.3) * 0.012;
      // азимут зрителя в локальных координатах фигурки → веса трёх образов (кулачки)
      g.updateMatrixWorld(); tmp.copy(camPos); fig.worldToLocal(tmp); const camAz = Math.atan2(tmp.x, tmp.z);
      const w = PH.map((p) => smooth(1.0, 0.42, Math.abs(wrap(camAz - p))));
      const [wb, wa, wo] = w; const neutral = 1 - Math.max(wb, wa, wo);
      tutu.scale.set(0.07 * wb + 0.001, 0.012 * wb + 0.001, 0.07 * wb + 0.001); bun.scale.setScalar(wb + 0.001);
      maskC.scale.setScalar(wa * 1.15 + 0.001); maskT.scale.setScalar(wa * 1.15 + 0.001); orient(maskC, 1); orient(maskT, 1); maskC.rotation.z = -0.4; maskT.rotation.z = 0.5;
      orient(capeG, 1); capeG.scale.set(wa + 0.001, wa + 0.001, 1); capeG.position.z = -0.012 * Math.cos(0); cape.position.z = -0.01;
      orient(swordG, 2); swordG.scale.set(1, wo + 0.001, 1); swordG.position.set(Math.sin(PH[2]) * 0.024, 0, Math.cos(PH[2]) * 0.024); hilt.visible = wo > 0.2; sword.scale.set(1 + wo, 1, 1 + wo);
      orient(reelG, 2); reelG.scale.setScalar(wo + 0.001);
      base.scale.set(1 - wo * 0.3, 1, 1 - wo * 0.3);
      // руки: балерина — над головой; актёр — вверх и вниз с масками; «Оскар» — сложены на груди
      pose(armR, [2.75, 2.0, 0.3], w, [0.15, 0, -1.4]); pose(armL, [-2.75, -0.6, -0.3], w, [0.15, 0, -1.4]);
      // ноги: балерина — на пуантах, одна поднята; актёр — широкая стойка; «Оскар» — вместе
      pose(legR, [0.75, 0.32, 0], w, [0.25, 0, 0]); pose(legL, [0, -0.32, 0], w, [0, 0, 0]);
      torso.scale.set(1 + wo * 0.25 + neutral * 0.05, 1 + wo * 0.08, 1 + wo * 0.25); head.scale.setScalar(1 - wo * 0.15); legL.scale.set(1 + wo * 0.6, 1, 1 + wo * 0.6); legR.scale.set(1 + wo * 0.6, 1, 1 + wo * 0.6);
      const dom = w.indexOf(Math.max(...w)); if (Math.max(...w) > 0.5 && dom !== lastDom) { lastDom = dom; return dom; } return -1;
    },
  };
}
// ---------- ключ ----------
function buildKey(gold: Mat) {
  const g = new THREE.Group();
  const bow = new THREE.Shape(); const R = 0.045;
  for (let i = 0; i <= 64; i++) { const a = i / 64 * Math.PI * 2; const r = R * (0.82 + 0.18 * Math.cos(a * 4)); const x = Math.cos(a) * r, y = Math.sin(a) * r; if (i === 0) bow.moveTo(x, y); else bow.lineTo(x, y); }
  for (let i = 0; i < 4; i++) { const a = i / 4 * Math.PI * 2 + Math.PI / 4; const h = new THREE.Path(); h.absellipse(Math.cos(a) * 0.022, Math.sin(a) * 0.022, 0.009, 0.006, 0, Math.PI * 2, true, a); bow.holes.push(h); }
  const hc = new THREE.Path(); hc.absarc(0, 0, 0.006, 0, Math.PI * 2, true); bow.holes.push(hc);
  const bowM = new THREE.Mesh(new THREE.ExtrudeGeometry(bow, { depth: 0.008, bevelEnabled: true, bevelSize: 0.002, bevelThickness: 0.002, bevelSegments: 1 }), gold); bowM.position.set(0, 0, -0.004); g.add(bowM);
  const crown = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.03, 4), gold); crown.position.set(0, R + 0.01, 0); g.add(crown);
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.0075, 0.0075, 0.17, 10), gold); shaft.rotation.z = Math.PI / 2; shaft.position.x = R + 0.085; g.add(shaft);
  for (const x of [R + 0.012, R + 0.03]) { const t = new THREE.Mesh(new THREE.TorusGeometry(0.011, 0.003, 6, 16), gold); t.rotation.y = Math.PI / 2; t.position.x = x; g.add(t); }
  const bit = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.032, 0.006), gold); bit.position.set(R + 0.155, -0.02, 0); g.add(bit);
  const notch = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.012, 0.007), std({ color: 0x050304 })); notch.position.set(R + 0.152, -0.03, 0); g.add(notch);
  g.traverse((o: any) => { if (o.isMesh) o.castShadow = true; });
  // локальная ось ключа: +X — к бородке. Поворачиваем группу так, чтобы бородка входила в замок
  return g;
}

export class DressingRoom {
  root = new THREE.Group(); state = 'dark'; t = 0; st = 0; theta = 0; spinning = false; speed = 0; disposed = false;
  box!: Box; mirrorBox!: Box; tableBox!: Box; key!: THREE.Group; keyPivot = new THREE.Group(); lights: { l: THREE.Light; base: number }[] = [];
  bulbs: THREE.Mesh[] = []; amb!: THREE.HemisphereLight; keySpot!: THREE.SpotLight; backLight!: THREE.PointLight; mainSpot!: THREE.SpotLight;
  camFrom = new THREE.Vector3(); camTo = new THREE.Vector3(); lookFrom = new THREE.Vector3(); lookTo = new THREE.Vector3(); camPos = new THREE.Vector3(); look = new THREE.Vector3();
  finalCam = new THREE.Vector3(); finalLook = new THREE.Vector3(); mouse = { x: 0, y: 0 }; cloth!: THREE.Mesh; curtain!: THREE.Mesh; photos: THREE.Object3D[] = []; dust!: THREE.Points;
  lagUntil = 0; lagBuf: number[] = []; nextLag = 18; nextAmb = 12; onState: (s: string) => void = () => {}; turnAsked = false; keyAngle = 0; prevFov = 30;
  constructor(public R: Renderer, public withIntro: boolean) {}

  build() {
    const R = this.R, root = this.root; R.scene.add(root); R.scene.background = new THREE.Color(0x030202); R.scene.fog = null;
    const pm = new THREE.PMREMGenerator(R.r); this.envTex = pm.fromScene(new RoomEnvironment(), 0.04).texture; pm.dispose(); R.scene.environment = this.envTex; (R.scene as any).environmentIntensity = 0.12;
    const gold = std({ map: goldTex(), color: 0xd8b060, metalness: 0.85, roughness: 0.32 }), black = new THREE.MeshBasicMaterial({ color: 0x020102 }) as any;
    const porcelain = std({ map: porcelainTex(), roughness: 0.28 }); (porcelain.map as THREE.Texture).wrapS = THREE.RepeatWrapping;
    const velvet = std({ map: tex('velvet'), roughness: 0.95, color: 0xcc4455 }), wood = std({ map: tex('darkwood'), roughness: 0.4 });
    // стена и зеркало (зеркало — окно в «отражённую» комнату)
    const wall = std({ map: tex('wallpaper'), color: 0x8a4a3a, roughness: 0.9 }); (wall.map as THREE.Texture).repeat.set(6, 3);
    const MX = 0.95, MY = 1.0, MW = 1.9, MH = 1.55, WZ = -1.0;
    const wallPart = (x: number, y: number, w: number, h: number) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), wall); m.position.set(x, y, WZ); m.receiveShadow = true; root.add(m); };
    wallPart(-1.9, 1.2, 3.8, 3.6); wallPart(MX + MW / 2 + 1.5, 1.2, 3, 3.6); wallPart(MX, MY + MH / 2 + 0.9, MW, 1.8); wallPart(MX, (MY - MH / 2) / 2 - 0.3, MW, MY - MH / 2 + 0.6);
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(MW, MH), new THREE.MeshStandardMaterial({ color: 0x3a2a20, metalness: 0.9, roughness: 0.15, transparent: true, opacity: 0.42 })); glass.position.set(MX, MY, WZ + 0.005); root.add(glass);
    const reflRoom = new THREE.Mesh(new THREE.BoxGeometry(MW + 2, 3, 2.4), std({ map: tex('wallpaper'), color: 0x3a1c18, side: THREE.BackSide, roughness: 1 })); reflRoom.position.set(MX, 1.2, WZ - 1.2); root.add(reflRoom);
    // золотая рама и лампочки по периметру
    const fr = (x: number, y: number, w: number, h: number) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.06), gold); m.position.set(x, y, WZ + 0.03); root.add(m); };
    fr(MX - MW / 2 - 0.08, MY, 0.16, MH + 0.32); fr(MX + MW / 2 + 0.08, MY, 0.16, MH + 0.32); fr(MX, MY + MH / 2 + 0.08, MW + 0.32, 0.16); fr(MX, MY - MH / 2 - 0.06, MW + 0.32, 0.12);
    const bulbMat = new THREE.MeshStandardMaterial({ color: 0xfff0d0, emissive: 0xffb860, emissiveIntensity: 0 });
    for (const sx of [-1, 1]) for (let i = 0; i < 5; i++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.055, 12, 10), bulbMat.clone()); b.position.set(MX + sx * (MW / 2 + 0.08), MY - MH / 2 + 0.12 + i * (MH - 0.24) / 4, WZ + 0.11); root.add(b); this.bulbs.push(b); const sock = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.05, 8), gold); sock.rotation.x = Math.PI / 2; sock.position.set(b.position.x, b.position.y, WZ + 0.06); root.add(sock); }
    for (let i = 0; i < 4; i++) { const l = new THREE.PointLight(0xffc888, 0, 5, 1.6); l.position.set(MX + (i < 2 ? -1 : 1) * (MW / 2 + 0.08), MY + (i % 2 ? 0.5 : -0.4), WZ + 0.35); root.add(l); this.lights.push({ l, base: 1.5 }); }
    // отражённые лампочки в зеркале
    for (const b of this.bulbs) { const rb = b.clone(); rb.material = b.material; rb.position.z = WZ * 2 - b.position.z; root.add(rb); }
    // стол: лакированная столешница (полупрозрачный лак над отражением) и тёмное основание
    const top = std({ map: tex('darkwood'), color: 0xb08860, roughness: 0.3, transparent: true, opacity: 0.84 }); (top.map as THREE.Texture).repeat.set(5, 2);
    const tbl = new THREE.Mesh(new THREE.PlaneGeometry(5.6, 1.7), top); tbl.rotation.x = -Math.PI / 2; tbl.position.set(0.3, 0, -0.15); tbl.receiveShadow = true; root.add(tbl);
    const under = new THREE.Mesh(new THREE.PlaneGeometry(5.6, 1.7), std({ color: 0x0c0605 })); under.rotation.x = -Math.PI / 2; under.position.set(0.3, -0.42, -0.15); root.add(under);
    const edge = new THREE.Mesh(new THREE.BoxGeometry(5.6, 0.1, 0.06), wood); edge.position.set(0.3, -0.05, 0.7); root.add(edge);
    const apron = new THREE.Mesh(new THREE.BoxGeometry(5.6, 0.7, 0.04), wood); apron.position.set(0.3, -0.45, 0.68); root.add(apron);
    // занавес слева
    const cg = new THREE.PlaneGeometry(1.6, 3.6, 40, 1); const cp = cg.attributes.position; for (let i = 0; i < cp.count; i++) cp.setZ(i, Math.sin(cp.getX(i) * 18) * 0.05);
    cg.computeVertexNormals(); this.curtain = new THREE.Mesh(cg, velvet); this.curtain.position.set(-2.4, 1.3, -0.6); this.curtain.rotation.y = 0.5; root.add(this.curtain);
    // бархатная ткань, сползающая со стола
    const clg = new THREE.PlaneGeometry(1.5, 1.4, 30, 28); const clp = clg.attributes.position;
    for (let i = 0; i < clp.count; i++) { const x = clp.getX(i), v = clp.getY(i) + 0.7; const onTop = v < 0.75; const fold = Math.sin(x * 9 + v * 3) * 0.04 + Math.sin(x * 23) * 0.012; if (onTop) clp.setXYZ(i, x, 0.02 + Math.max(0, fold), v - 0.05); else clp.setXYZ(i, x + Math.sin(v * 5) * 0.03, -(v - 0.75) * 1.1, 0.72 + Math.max(0, fold) * 0.5 + (v - 0.75) * 0.08); }
    clg.computeVertexNormals(); this.cloth = new THREE.Mesh(clg, std({ map: tex('velvet'), color: 0xd04050, roughness: 0.9, side: THREE.DoubleSide })); this.cloth.position.set(-0.75, 0, 0); this.cloth.castShadow = true; this.cloth.receiveShadow = true; root.add(this.cloth); (this.cloth as any).base = Float32Array.from(clp.array as ArrayLike<number>);
    // шкатулка + её отражения (в зеркале и в лаке стола)
    this.box = buildMusicBox(gold, porcelain, black); this.box.group.position.set(BX, 0, -0.18); this.box.group.scale.setScalar(1.15); root.add(this.box.group);
    this.mirrorBox = buildMusicBox(gold, porcelain, black); this.mirrorBox.group.position.set(BX, 0, WZ * 2 + 0.18); this.mirrorBox.group.scale.set(1.15, 1.15, -1.15); root.add(this.mirrorBox.group);
    const dim = (g: THREE.Object3D, k: number) => g.traverse((o: any) => { if (o.isMesh) { o.material = o.material.clone(); o.material.color?.multiplyScalar(k); } });
    this.tableBox = buildMusicBox(gold, porcelain, black); this.tableBox.group.position.set(BX, -0.002, -0.18); this.tableBox.group.scale.set(1.15, -1.15, 1.15); dim(this.tableBox.group, 0.35); root.add(this.tableBox.group);
    // ключ: в финале торчит из заводного отверстия шкатулки
    this.key = buildKey(std({ map: goldTex(), color: 0xe0b060, metalness: 0.5, roughness: 0.38, emissive: 0x1a0e02 })); this.keyPivot.add(this.key); this.key.rotation.y = Math.PI; root.add(this.keyPivot);
    const kh = new THREE.Vector3(BX, 0.15, -0.18).add(new THREE.Vector3(Math.cos(0.5), 0, Math.sin(0.5)).multiplyScalar(0.255)); this.keyPivot.position.copy(kh); this.keyPivot.rotation.y = -0.5;
    // мелочи туалетного столика
    this.perfume(gold); this.props(gold);
    // свет
    this.amb = new THREE.HemisphereLight(0xffd8b0, 0x2a1008, 0); root.add(this.amb);
    this.mainSpot = new THREE.SpotLight(0xffd6a0, 0, 8, 0.5, 0.6, 1.2); this.mainSpot.position.set(-1.2, 2.8, 1.4); this.mainSpot.target.position.set(0.5, 0.2, -0.2); this.mainSpot.castShadow = true; this.mainSpot.shadow.mapSize.set(1024, 1024); this.mainSpot.shadow.bias = -0.002; root.add(this.mainSpot, this.mainSpot.target);
    this.backLight = new THREE.PointLight(0xffb070, 0, 2.2, 1.4); this.backLight.position.set(BX, 0.55, -0.75);
    // тёплое свечение за фигуркой: силуэт читается контражуром
    const halo = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 1.3), new THREE.MeshBasicMaterial({ map: pixTex(64, 64, (c) => { const g = c.createRadialGradient(32, 32, 2, 32, 32, 32); g.addColorStop(0, 'rgba(255,200,130,0.95)'); g.addColorStop(0.45, 'rgba(255,150,80,0.35)'); g.addColorStop(1, 'rgba(255,120,60,0)'); c.fillStyle = g; c.fillRect(0, 0, 64, 64); }, 'halo'), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); halo.position.set(BX + 0.05, 0.78, WZ - 0.45); root.add(halo); this.halo = halo; root.add(this.backLight);
    this.keySpot = new THREE.SpotLight(0xfff0d0, 0, 3, 0.18, 0.8, 1.2); root.add(this.keySpot, this.keySpot.target);
    // пыль в лучах
    const N = 160, pos = new Float32Array(N * 3); for (let i = 0; i < N; i++) { pos[i * 3] = -1 + Math.random() * 3; pos[i * 3 + 1] = Math.random() * 2.2; pos[i * 3 + 2] = -0.9 + Math.random() * 1.6; }
    const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); this.dust = new THREE.Points(dg, new THREE.PointsMaterial({ color: 0xffe0b0, size: 0.012, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })); root.add(this.dust);
    // кадр
    this.adaptFraming();
    this.prevFov = R.baseFov; R.baseFov = 34; R.cam.near = 0.03; R.cam.far = 40; R.dofFocus = this.finalCam.distanceTo(this.box.group.position); R.setup({ pixelH: 460, dof: true });
    window.addEventListener('pointermove', this.onMove); window.addEventListener('resize', this.onResize);
    if (this.withIntro) this.enter('dark'); else this.enter('menu', true);
  }
  onMove = (e: PointerEvent) => { this.mouse.x = e.clientX / window.innerWidth - 0.5; this.mouse.y = e.clientY / window.innerHeight - 0.5; };
  onResize = () => { this.adaptFraming(); };
  /** На узких экранах камера отъезжает и смещается, чтобы шкатулка оставалась в кадре под меню. */
  adaptFraming() { const a = window.innerWidth / window.innerHeight; if (a < 1) { this.finalCam.set(0.8, 1.3, 2.9); this.finalLook.set(0.8, 0.35, -0.3); } else if (a < 1.5) { this.finalCam.set(0.05, 1.0, 2.25); this.finalLook.set(0.6, 0.48, -0.4); } else { this.finalCam.set(-0.25, 0.98, 2.0); this.finalLook.set(0.5, 0.5, -0.45); } }

  perfume(gold: Mat) {
    const glass = new THREE.MeshStandardMaterial({ color: 0xf4e8f0, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.55 });
    const prof = [[0, 0], [0.07, 0], [0.085, 0.03], [0.09, 0.08], [0.075, 0.13], [0.03, 0.15], [0.02, 0.16], [0, 0.16]].map(([x, y]) => new THREE.Vector2(x, y));
    const b = new THREE.Mesh(new THREE.LatheGeometry(prof, 20), glass); b.position.set(0.3, 0.06, -0.12); this.root.add(b);
    const liquid = new THREE.Mesh(new THREE.LatheGeometry(prof.map((v) => new THREE.Vector2(v.x * 0.9, Math.min(v.y, 0.09))), 16), std({ color: 0xd88a60, transparent: true, opacity: 0.7 })); liquid.position.copy(b.position); this.root.add(liquid);
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.026, 0.05, 12), gold); neck.position.set(0.3, 0.245, -0.12); this.root.add(neck);
    const tube = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.006, 6, 16, Math.PI), gold); tube.rotation.y = Math.PI; tube.position.set(0.24, 0.27, -0.12); this.root.add(tube);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 10), std({ map: tex('velvet'), color: 0xcc3344 })); bulb.position.set(0.17, 0.25, -0.12); bulb.scale.y = 1.25; this.root.add(bulb);
    const stand = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.06, 0.32), std({ map: tex('velvet'), color: 0xaa2233 })); stand.position.set(0.26, 0.03, -0.11); this.root.add(stand);
    const trim = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.012, 0.34), gold); trim.position.set(0.26, 0.062, -0.11); this.root.add(trim);
    const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.085, 0.12, 20), glass); jar.position.set(0.18, 0.06, -0.62); this.root.add(jar);
    const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.095, 0.03, 20), std({ color: 0xcfcfd8, metalness: 0.8, roughness: 0.3 })); lid.position.set(0.18, 0.135, -0.62); this.root.add(lid);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 6), std({ color: 0xcfcfd8, metalness: 0.8, roughness: 0.3 })); knob.position.set(0.18, 0.16, -0.62); this.root.add(knob);
  }
  props(gold: Mat) {
    const root = this.root;
    // жемчуг
    const curve = new THREE.CatmullRomCurve3([[-1.1, 0.02, 0.5], [-0.8, 0.06, 0.2], [-0.4, 0.02, 0.25], [-0.32, -0.2, 0.72], [-0.45, -0.55, 0.75]].map(([x, y, z]) => new THREE.Vector3(x, y, z)));
    const curve2 = new THREE.CatmullRomCurve3([[1.55, 0.015, -0.55], [1.8, 0.015, -0.35], [2.05, 0.015, -0.5], [2.2, 0.015, -0.3]].map(([x, y, z]) => new THREE.Vector3(x, y, z)));
    const pearl = std({ color: 0xf6f0e8, roughness: 0.15, metalness: 0.2 }); const m4 = new THREE.Matrix4();
    for (const [c, n] of [[curve, 46], [curve2, 26]] as [THREE.CatmullRomCurve3, number][]) { const im = new THREE.InstancedMesh(new THREE.SphereGeometry(0.018, 8, 6), pearl, n); for (let i = 0; i < n; i++) { const p = c.getPoint(i / (n - 1)); m4.makeTranslation(p.x, p.y + 0.018, p.z); im.setMatrixAt(i, m4); } root.add(im); }
    // стакан с кистями
    const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.1, 0.3, 16, 1, true), new THREE.MeshStandardMaterial({ color: 0xe8f0f4, transparent: true, opacity: 0.35, roughness: 0.05, side: THREE.DoubleSide })); cup.position.set(2.1, 0.15, 0.15); root.add(cup);
    for (let i = 0; i < 4; i++) { const g = new THREE.Group(); g.position.set(2.1 + (i - 1.5) * 0.04, 0.05, 0.15 + (i % 2) * 0.04); g.rotation.z = (i - 1.5) * 0.18; const h = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.014, 0.42, 8), std({ color: i % 2 ? 0x1a1214 : 0x6a3a2a })); h.position.y = 0.21; g.add(h); const fer = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.014, 0.06, 8), gold); fer.position.y = 0.44; g.add(fer); const br = new THREE.Mesh(new THREE.ConeGeometry(0.035 + (i % 2) * 0.015, 0.1, 10), std({ color: 0x5a3a28, roughness: 1 })); br.position.y = 0.52; br.rotation.x = Math.PI; g.add(br); root.add(g); }
    // маки
    const petal = std({ map: tex('velvet'), color: 0xff3a3a, roughness: 0.8, side: THREE.DoubleSide });
    const poppy = (x: number, y: number, z: number, s: number, rx: number) => { const g = new THREE.Group(); g.position.set(x, y, z); g.scale.setScalar(s); g.rotation.x = rx; for (let i = 0; i < 5; i++) { const p = new THREE.Mesh(new THREE.CircleGeometry(0.07, 10), petal); p.position.set(Math.cos(i * 1.26) * 0.05, 0.01 + i * 0.002, Math.sin(i * 1.26) * 0.05); p.rotation.set(-Math.PI / 2 + 0.5, i * 1.26, 0); g.add(p); } const c = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 6), std({ color: 0x14100c })); c.position.y = 0.03; g.add(c); root.add(g); };
    poppy(2.0, 0.06, 0.55, 1.4, 0.3); poppy(2.25, 0.05, 0.35, 1.0, 0.1); poppy(-0.95, 0.04, -0.6, 0.8, 0);
    // записка и билет на столе
    const note = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.36), std({ map: pixTex(48, 32, (c) => { c.fillStyle = '#e8dcc0'; c.fillRect(0, 0, 48, 32); c.strokeStyle = '#4a3a5a'; for (let i = 0; i < 6; i++) { c.beginPath(); c.moveTo(4, 6 + i * 4); for (let x = 4; x < 42; x += 3) c.lineTo(x, 6 + i * 4 + Math.sin(x + i) * 0.8); c.stroke(); } }, 'note'), roughness: 0.9 })); note.rotation.set(-Math.PI / 2, 0, 0.2); note.position.set(-0.75, 0.004, 0.42); root.add(note);
    const ticket = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.14), std({ map: pixTex(32, 14, (c) => { c.fillStyle = '#d8ccb2'; c.fillRect(0, 0, 32, 14); c.fillStyle = '#8e1830'; c.fillRect(2, 2, 6, 10); c.fillStyle = '#3a2a14'; for (let i = 0; i < 4; i++) c.fillRect(11, 3 + i * 2.5, 18 - i * 3, 1); }, 'ticket') })); ticket.rotation.set(-Math.PI / 2, 0, -0.35); ticket.position.set(-0.3, 0.006, 0.5); root.add(ticket);
    // фотографии на зеркале и стене
    const photo = (x: number, y: number, z: number, rz: number, key: string, draw: (c: CanvasRenderingContext2D) => void) => { const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.z = rz; const m = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.4), std({ map: pixTex(28, 32, (c) => { c.fillStyle = '#efe6d6'; c.fillRect(0, 0, 28, 32); c.fillStyle = '#2a2420'; c.fillRect(2, 2, 24, 22); draw(c); }, key), roughness: 0.9 })); m.position.y = -0.2; g.add(m); const tape = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.035), std({ color: 0xd8c890, transparent: true, opacity: 0.8 })); tape.position.z = 0.002; g.add(tape); root.add(g); this.photos.push(g); };
    photo(1.75, 1.72, -0.95, -0.12, 'ph1', (c) => { c.fillStyle = '#8a7a6a'; for (let r = 0; r < 4; r++) for (let i = 0; i < 6; i++) c.fillRect(4 + i * 3.4, 12 + r * 3, 2, 2); c.fillStyle = '#b8a888'; c.fillRect(8, 4, 12, 6); });
    photo(0.55, 1.88, -0.95, 0.08, 'ph2', (c) => { c.fillStyle = '#6a5a4a'; c.fillRect(10, 6, 8, 16); c.fillStyle = '#a89878'; c.fillRect(11, 4, 6, 5); });
    photo(-1.15, 1.6, -0.97, -0.05, 'ph3', (c) => { c.fillStyle = '#5a4a3a'; c.fillRect(5, 8, 5, 14); c.fillRect(12, 9, 5, 13); c.fillRect(19, 8, 5, 14); c.fillStyle = '#a89878'; c.fillRect(6, 5, 3, 3); c.fillRect(13, 6, 3, 3); c.fillRect(20, 5, 3, 3); });
    photo(-0.55, 1.3, -0.97, 0.1, 'ph4', (c) => { c.fillStyle = '#7a1a22'; c.fillRect(4, 4, 20, 18); c.fillStyle = '#e8c36a'; c.fillRect(12, 8, 4, 10); });
    // программка у зеркала
    const prog = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.42), std({ map: pixTex(24, 32, (c) => { c.fillStyle = '#5a0c18'; c.fillRect(0, 0, 24, 32); c.strokeStyle = '#d4ae48'; c.strokeRect(1.5, 1.5, 21, 29); c.fillStyle = '#d4ae48'; c.fillRect(6, 10, 12, 2); c.fillRect(8, 14, 8, 1); c.fillRect(5, 22, 14, 1); }, 'prog') })); prog.position.set(1.85, 0.22, -0.92); prog.rotation.set(-0.25, -0.2, 0.05); root.add(prog);
  }

  // ---------- машина состояний ----------
  enter(s: string, instant = false) {
    this.state = s; this.st = 0; this.onState(s); const kp = this.keyPivot;
    if (s === 'dark') { this.setLights(0); this.spinning = false; this.speed = 0; this.key.position.x = 0.45; this.key.rotation.x = 0; this.keySpot.intensity = 0; this.root.traverse((o: any) => { if (o.isMesh && o.material && !this.isKeyPart(o)) o.visible = false; }); this.placeKeyCam(0.9); }
    if (s === 'reveal') audio.sfx('mechtick');
    if (s === 'insert') audio.sfx('scrape', { dur: 0.9 });
    if (s === 'lights') { this.root.traverse((o: any) => { if (o.isMesh) o.visible = true; }); audio.sfx('lighton'); this.R.flash = 0.55; this.camFrom.copy(this.camPos); this.lookFrom.copy(this.look); }
    if (s === 'menu') { this.root.traverse((o: any) => { if (o.isMesh) o.visible = true; }); this.spinning = true; if (instant) { this.setLights(1); this.speed = 1; this.camPos.copy(this.finalCam); this.look.copy(this.finalLook); this.key.position.x = 0.13; } audio.music('musicbox'); audio.ambience('hall'); }
  }
  isKeyPart(o: THREE.Object3D) { let p: THREE.Object3D | null = o; while (p) { if (p === this.key) return true; p = p.parent; } return false; }
  placeKeyCam(dist: number) { this.root.updateMatrixWorld(true); const k = new THREE.Vector3(); this.key.getWorldPosition(k); k.add(new THREE.Vector3(Math.cos(0.5), 0, Math.sin(0.5)).multiplyScalar(-0.1)); const n = new THREE.Vector3(-Math.sin(0.5), 0, Math.cos(0.5)); this.camPos.copy(k).addScaledVector(n, dist).add(new THREE.Vector3(0, 0.07, 0)); this.look.copy(k); }
  setLights(k: number) {
    (this.R.scene as any).environmentIntensity = 0.12 + 0.45 * Math.min(1, k); if (this.halo) (this.halo.material as THREE.MeshBasicMaterial).opacity = Math.min(1, k);
    this.amb.intensity = 0.55 * k; this.mainSpot.intensity = 5 * k; this.backLight.intensity = 1.6 * k; (this.dust.material as THREE.PointsMaterial).opacity = 0.55 * k;
    for (const { l, base } of this.lights) l.intensity = base * k;
  }
  /** Ввод: клик/клавиша. Во время вступления — поворот ключа или пропуск. */
  input(kind: 'act' | 'skip') {
    if (this.state === 'menu') return;
    if (this.state === 'await' && kind === 'act') { this.enter('turn'); return; }
    if (kind === 'skip' || ['dark', 'reveal', 'insert', 'logo', 'hold', 'lights'].includes(this.state)) { this.enter('menu', true); }
  }
  halo: THREE.Mesh | null = null; lastNow = 0; envTex: THREE.Texture | null = null;
  update(_dt: number) {
    if (this.disposed) return; const now = performance.now(); const dt = this.lastNow ? Math.min(0.25, (now - this.lastNow) / 1000) : 0.016; this.lastNow = now; this.t += dt; this.st += dt; const st = this.st, kp = this.key;
    switch (this.state) {
      case 'dark': if (st > 1.4) this.enter('reveal'); break;
      case 'reveal': { const k = Math.min(1, st / 2.6); (this.R.scene as any).environmentIntensity = 0.12 + 0.3 * ease(k); const w = new THREE.Vector3(); kp.getWorldPosition(w); this.keySpot.position.copy(w).add(new THREE.Vector3(0.1, 0.9, 0.5)); this.keySpot.target.position.copy(w); this.keySpot.intensity = 6 * ease(k); this.placeKeyCam(0.9 - 0.25 * ease(k)); if (st > 2.8) this.enter('insert'); break; }
      case 'insert': { const k = ease(Math.min(1, st / 1.3)); kp.position.x = 0.13 + 0.32 * (1 - k); this.placeKeyCam(0.62 - 0.06 * k); if (st > 1.3 && !this.turnAsked) { this.turnAsked = true; audio.sfx('keyin'); } if (st > 1.9) this.enter('await'); break; }
      case 'await': this.onState('await'); if (st > 2.6) this.enter('turn'); break;
      case 'turn': { const T = 2.4; const k = Math.min(1, st / T); const stutter = Math.sin(k * Math.PI * 7) * 0.035 * (1 - k); kp.rotation.x = -(ease(k) + stutter) * Math.PI * 1.5; if (st < 0.05) audio.sfx('scrape', { dur: 2.2 }); if (Math.floor(st * 3) !== Math.floor((st - dt) * 3)) audio.sfx('mechtick'); if (k >= 1) { audio.sfx('clunk'); audio.sfx('hum'); setTimeout(() => audio.sfx('windup'), 250); this.enter('hold'); } break; }
      case 'hold': if (st > 0.9) this.enter('lights'); break;
      case 'lights': {
        const k = Math.min(1, st / 3.4); this.setLights(k < 0.06 ? 1.15 : 0.3 + 0.7 * ease(k)); this.bulbs.forEach((b, i) => { const on = st > 0.15 + i * 0.07; (b.material as Mat).emissiveIntensity = on ? 1.3 : 0; if (on && st - dt <= 0.15 + i * 0.07) audio.sfx('mechtick'); });
        const c = ease(Math.min(1, st / 3.4)); const ctrl = new THREE.Vector3((this.camFrom.x + this.finalCam.x) / 2 + 0.3, Math.max(this.camFrom.y, this.finalCam.y) + 0.45, Math.max(this.camFrom.z, this.finalCam.z) + 0.5); const a1 = new THREE.Vector3().lerpVectors(this.camFrom, ctrl, c), a2 = new THREE.Vector3().lerpVectors(ctrl, this.finalCam, c); this.camPos.lerpVectors(a1, a2, c); this.look.lerpVectors(this.lookFrom, this.finalLook, c); this.keySpot.intensity *= 0.95;
        if (st > 0.6) { this.spinning = true; this.speed = Math.min(1, (st - 0.6) / 2); } if (st > 0.8 && audio.musicId() !== 'musicbox') { audio.music('musicbox', { fade: 2 }); audio.ambience('hall'); }
        if (st > 3.6) this.enter('logo'); break; }
      case 'logo': if (st > 1.6) this.enter('menu'); break;
      case 'menu': break;
    }
    if (this.state === 'menu' || this.state === 'logo') {
      for (const b of this.bulbs) (b.material as Mat).emissiveIntensity = 1.3 * (0.92 + Math.sin(this.t * 9 + b.position.y * 13) * 0.04 + (Math.random() < 0.004 ? -0.5 : 0));
      const d = 0.03; this.camPos.set(this.finalCam.x + Math.sin(this.t * 0.21) * d + this.mouse.x * 0.08, this.finalCam.y + Math.sin(this.t * 0.17) * d * 0.6 - this.mouse.y * 0.05, this.finalCam.z); this.look.copy(this.finalLook);
      kp.rotation.x -= dt * 0.25 * this.speed; // ключ медленно раскручивается, пока играет шкатулка
      this.nextAmb -= dt; if (this.nextAmb < 0) { this.nextAmb = 20 + Math.random() * 25; audio.sfx(Math.random() < 0.5 ? 'applause' : 'creak', { dur: 2, dens: 12 }); }
    }
    // шкатулка
    if (this.spinning) this.theta += dt * (Math.PI * 2 / 11) * this.speed;
    this.lagBuf.push(this.theta); if (this.lagBuf.length > 40) this.lagBuf.shift();
    this.nextLag -= dt; if (this.nextLag < 0 && this.state === 'menu') { this.nextLag = 22 + Math.random() * 20; this.lagUntil = this.t + 1.6; }
    const mirrorTheta = this.t < this.lagUntil ? this.lagBuf[0] : this.theta;
    const cam = this.R.cam; const changed = this.box.update(this.theta, this.t, cam.position); this.mirrorBox.update(mirrorTheta, this.t, cam.position); this.tableBox.update(this.theta, this.t, cam.position);
    if (changed >= 0 && this.spinning) audio.sfx('mechtick');
    // ткань и фото колышутся
    const cl = this.cloth.geometry.attributes.position, base = (this.cloth as any).base as Float32Array; for (let i = 0; i < cl.count; i++) { const y = base[i * 3 + 1]; if (y < -0.05) cl.setX(i, base[i * 3] + Math.sin(this.t * 0.9 + y * 4) * 0.008); } cl.needsUpdate = true;
    this.photos.forEach((p, i) => { p.rotation.z += Math.sin(this.t * (0.6 + i * 0.13) + i) * 0.0004; }); this.curtain.rotation.y = 0.5 + Math.sin(this.t * 0.4) * 0.015;
    const dp = this.dust.geometry.attributes.position; for (let i = 0; i < dp.count; i++) { dp.setY(i, dp.getY(i) - dt * 0.02 * (1 + (i % 3))); dp.setX(i, dp.getX(i) + Math.sin(this.t + i) * dt * 0.01); if (dp.getY(i) < 0) dp.setY(i, 2.2); } dp.needsUpdate = true;
    cam.position.copy(this.camPos); cam.up.set(0, 1, 0); cam.lookAt(this.look);
    if (this.R.bokeh) (this.R.bokeh.uniforms as any).focus.value = cam.position.distanceTo(this.box.group.position);
  }
  dispose() {
    if (this.disposed) return; this.disposed = true; this.R.scene.remove(this.root);
    this.root.traverse((o: any) => { if (o.geometry) o.geometry.dispose(); if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m: any) => m.dispose()); });
    window.removeEventListener('pointermove', this.onMove); window.removeEventListener('resize', this.onResize);
    this.R.scene.environment = null; this.envTex?.dispose(); this.R.baseFov = this.prevFov; this.R.cam.near = 1; this.R.cam.far = 200; this.R.setup({ pixelH: 0, dof: false }); audio.ambience(null);
  }
}
