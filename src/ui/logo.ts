// Логотип THE OTHER ME: APPLAUSE, PLEASE! — по авторскому референсу (references/logo_reference.png).
// Буквы — из шрифтов проекта (Aurelia Diamond, буквицы Highcrest, каллиграфия Cintarini),
// орнамент — нарисован вручную в SVG: арка с занавесом, рука кукловода, маска, лилия, мак, плёнка, бинокль, билет.
const IV = '#eadfc8', IV2 = '#b9a888', GOLD = '#c9a35a', RED = '#b3142c', RED2 = '#6e0a18', INK = '#120c0d';
const star = (x: number, y: number, r: number, col = IV, w = 0.16) => `<path d="M${x},${y - r} L${x + r * w},${y - r * w} L${x + r},${y} L${x + r * w},${y + r * w} L${x},${y + r} L${x - r * w},${y + r * w} L${x - r},${y} L${x - r * w},${y - r * w}Z" fill="${col}"/>`;
const burst = (x: number, y: number, r: number, col = GOLD) => { let p = ''; for (let i = 0; i < 16; i++) { const a = i * Math.PI / 8, l = i % 2 ? r * 0.55 : r, s = 0.06; p += `<path d="M${x},${y} L${x + Math.cos(a - s) * 6},${y + Math.sin(a - s) * 6} L${x + Math.cos(a) * l},${y + Math.sin(a) * l} L${x + Math.cos(a + s) * 6},${y + Math.sin(a + s) * 6}Z" fill="${col}"/>`; } return p + `<circle cx="${x}" cy="${y}" r="${r * 0.17}" fill="${col}" stroke="${INK}" stroke-width="1.5"/>`; };
const film = (d: string, id: string) => `<g><path d="${d}" stroke="${IV2}" stroke-width="30" fill="none"/><path d="${d}" stroke="${INK}" stroke-width="30" stroke-dasharray="3 9" fill="none"/><path d="${d}" stroke="#2a2220" stroke-width="16" fill="none"/><path d="${d}" stroke="${IV2}" stroke-width="16" stroke-dasharray="2 22" fill="none" opacity=".8"/></g>`;
const lily = (x: number, y: number, s: number, rot: number) => `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})">
  <path d="M0,0 C-10,40 -6,90 4,140" stroke="#3b4a34" stroke-width="5" fill="none"/><path d="M2,70 C-30,60 -52,72 -60,96 C-36,92 -14,86 2,74Z" fill="#3b4a34"/>
  ${[0, 72, 144, 216, 288].map((a) => `<path transform="rotate(${a})" d="M0,0 C-14,-20 -16,-52 0,-78 C16,-52 14,-20 0,0Z" fill="${IV}" stroke="${IV2}" stroke-width="2"/><path transform="rotate(${a})" d="M0,-6 L0,-60" stroke="${IV2}" stroke-width="1.5"/>`).join('')}
  ${[-30, -10, 10, 30].map((a) => `<path transform="rotate(${a})" d="M0,0 L0,-46" stroke="${GOLD}" stroke-width="1.6"/><ellipse transform="rotate(${a})" cx="0" cy="-48" rx="3" ry="6" fill="#a0602a"/>`).join('')}</g>`;
const poppy = (x: number, y: number, s: number) => `<g transform="translate(${x} ${y}) scale(${s})">
  <path d="M0,20 C6,70 -4,110 10,150" stroke="#2c3a2a" stroke-width="5" fill="none"/>
  ${[0, 90, 180, 270].map((a, i) => `<path transform="rotate(${a + 20})" d="M0,0 C-44,-6 -58,-48 -30,-66 C-8,-80 22,-70 30,-50 C40,-24 22,-4 0,0Z" fill="${i % 2 ? RED : '#c8202e'}" stroke="${RED2}" stroke-width="2"/>`).join('')}
  ${[0, 60, 120, 180, 240, 300].map((a) => `<path transform="rotate(${a})" d="M0,0 C-6,-14 -4,-30 0,-40" stroke="${RED2}" stroke-width="1.5" fill="none" opacity=".7"/>`).join('')}
  <circle r="14" fill="#1c1416"/>${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => `<circle transform="rotate(${a})" cx="0" cy="-20" r="2.4" fill="#1c1416"/>`).join('')}</g>`;
const finger = (x: number, y: number, len: number, rot: number) => `<g transform="translate(${x} ${y}) rotate(${rot})"><path d="M-6,0 C-6,${len * 0.3} -5,${len * 0.55} -4,${len * 0.62} L-3.4,${len * 0.66} C-4,${len * 0.8} -3,${len * 0.95} 0,${len} C3,${len * 0.95} 4,${len * 0.8} 3.4,${len * 0.66} L4,${len * 0.62} C5,${len * 0.55} 6,${len * 0.3} 6,0Z" fill="${IV}" stroke="#7a6a52" stroke-width="1.6"/>${[0.3, 0.62].map((k) => `<path d="M-4,${len * k} C-1,${len * k + 3} 1,${len * k + 3} 4,${len * k}" stroke="#7a6a52" stroke-width="1.2" fill="none"/>`).join('')}<path d="M-2.4,${len - 7} C-1,${len - 3} 1,${len - 3} 2.4,${len - 7}" stroke="#a89878" stroke-width="1.2" fill="none"/></g>`;
const hand = `<g transform="translate(1010 34) rotate(14)">
  <path d="M84,-40 C110,-30 140,-38 168,-60 L184,-20 C160,0 128,10 100,8Z" fill="#1c1416" stroke="${IV2}" stroke-width="1.5"/>
  ${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M${84 + i * 3},${-38 + i * 8} l-10,4 l10,3" stroke="${IV2}" stroke-width="1.4" fill="none"/>`).join('')}
  <path d="M86,-36 C60,-30 34,-24 10,-6 C0,4 -4,18 2,30 C18,44 46,46 70,38 C84,30 96,10 100,4Z" fill="${IV}" stroke="#7a6a52" stroke-width="2"/>
  ${[[20, -2], [36, -4], [52, -4], [66, 0]].map(([x, y]) => `<path d="M${x},${y} C${x + 4},${y + 8} ${x + 6},${y + 16} ${x + 4},${y + 26}" stroke="#a89878" stroke-width="1.3" fill="none"/>`).join('')}
  ${finger(6, 22, 58, 22)}${finger(24, 32, 70, 10)}${finger(44, 36, 72, -2)}${finger(62, 32, 60, -14)}
  <g transform="translate(86 20) rotate(-58)"><path d="M-7,0 C-7,20 -5,34 0,40 C5,34 7,20 7,0Z" fill="${IV}" stroke="#7a6a52" stroke-width="1.6"/></g>
  ${[[10, 10], [30, 22], [50, 26], [70, 20]].map(([x, y]) => `<path d="M${x},${y} l4,2" stroke="#7a6a52" stroke-width="1.4"/>`).join('')}</g>`;;
const mask = `<g transform="translate(1046 232) rotate(-14) scale(.85)"><path d="M-46,-38 C-20,-56 26,-56 50,-40 C58,-12 54,26 38,52 C26,70 6,78 -6,70 C-16,62 -8,40 -26,30 C-44,20 -56,-12 -46,-38Z" fill="${IV}" stroke="${IV2}" stroke-width="2.5"/>
  <path d="M-30,-14 C-20,-24 -4,-22 2,-10 C-6,-2 -22,-2 -30,-14Z" fill="${INK}"/><path d="M14,-12 C22,-24 38,-22 42,-10 C36,0 22,0 14,-12Z" fill="${INK}"/>
  <path d="M-48,-30 C-20,-46 26,-48 50,-34" stroke="${GOLD}" stroke-width="2.5" fill="none"/><path d="M4,8 C6,20 10,30 18,34" stroke="${IV2}" stroke-width="2" fill="none"/></g>`;
const glasses = `<g transform="translate(470 676) rotate(-12)"><rect x="-58" y="-26" width="44" height="52" rx="10" fill="#3a3436" stroke="${IV2}" stroke-width="3"/><rect x="14" y="-26" width="44" height="52" rx="10" fill="#3a3436" stroke="${IV2}" stroke-width="3"/>
  <ellipse cx="-36" cy="26" rx="22" ry="8" fill="#6a6466" stroke="${IV}" stroke-width="3"/><ellipse cx="36" cy="26" rx="22" ry="8" fill="#6a6466" stroke="${IV}" stroke-width="3"/><rect x="-14" y="-12" width="28" height="18" rx="4" fill="${GOLD}"/>
  <path d="M-46,-22 L-46,18 M24,-22 L24,18" stroke="${IV}" stroke-width="3" opacity=".6"/><path d="M0,-12 C10,-50 60,-60 90,-48" stroke="${GOLD}" stroke-width="3" fill="none"/></g>`;
const ticket = `<g transform="translate(890 668) rotate(-10)"><rect x="-74" y="-44" width="148" height="88" rx="6" fill="#d8ccb2" stroke="${IV2}" stroke-width="3"/><rect x="-66" y="-36" width="132" height="72" fill="none" stroke="#8a7a5a" stroke-width="2"/>
  <path d="M-46,20 L-46,-6 L0,-24 L46,-6 L46,20Z" fill="none" stroke="#5a4a3a" stroke-width="2"/>${[-34, -18, -2, 14, 30].map((x) => `<path d="M${x},20 L${x},0" stroke="#5a4a3a" stroke-width="2"/>`).join('')}<path d="M-56,24 L56,24" stroke="#5a4a3a" stroke-width="2"/>
  <text x="0" y="-27" text-anchor="middle" font-family="Playfair Display, serif" font-size="9" fill="#5a4a3a" letter-spacing="2">ТЕАТРЪ</text><circle cx="-74" cy="0" r="8" fill="${INK}"/><circle cx="74" cy="0" r="8" fill="${INK}"/></g>`;

export function logoSVG(id = 'lg') {
  return `<svg class="logo-svg" viewBox="0 0 1200 800" role="img" aria-label="THE OTHER ME: APPLAUSE, PLEASE!" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="${id}iv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6eedc"/><stop offset=".55" stop-color="${IV}"/><stop offset="1" stop-color="#a8977a"/></linearGradient>
  <linearGradient id="${id}rd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e2283c"/><stop offset=".6" stop-color="${RED}"/><stop offset="1" stop-color="${RED2}"/></linearGradient>
  <linearGradient id="${id}cur" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${RED2}"/><stop offset=".5" stop-color="${RED}"/><stop offset="1" stop-color="${RED2}"/></linearGradient>
  <filter id="${id}worn" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="1" seed="7" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -9 6.6" result="m"/><feComposite in="SourceGraphic" in2="m" operator="in"/></filter>
  <radialGradient id="${id}vig"><stop offset="0" stop-color="#000" stop-opacity=".75"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
  <clipPath id="${id}arch"><path d="M376,262 C378,184 448,134 524,128 C560,124 586,114 600,100 C614,114 640,124 676,128 C752,134 822,184 824,262Z"/></clipPath>
  <filter id="${id}glow" x="-10%" y="-30%" width="120%" height="160%"><feGaussianBlur stdDeviation="5" result="b0"/><feColorMatrix in="b0" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .55 0" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<g class="lg-orn" stroke-linejoin="round"><g transform="translate(600 262) scale(1.32) translate(-600 -262)">
  <path d="M360,262 C360,170 440,118 520,112 C556,108 584,96 600,78 C616,96 644,108 680,112 C760,118 840,170 840,262" stroke="${GOLD}" stroke-width="5" fill="none"/>
  <path d="M376,262 C378,184 448,134 524,128 C560,124 586,114 600,100 C614,114 640,124 676,128 C752,134 822,184 824,262" stroke="${IV2}" stroke-width="2" fill="none"/>
  ${[400, 470, 730, 800].map((x, i) => `<circle cx="${x}" cy="${[196, 142, 142, 196][i]}" r="5" fill="${GOLD}"/>`).join('')}
  <ellipse cx="600" cy="420" rx="560" ry="330" fill="url(#${id}vig)"/>
  <g clip-path="url(#${id}arch)"><rect x="370" y="90" width="460" height="180" fill="#160a0c"/>
    <path d="M370,120 L830,120 L830,150 C800,206 760,214 730,170 C700,226 650,230 600,178 C550,230 500,226 470,170 C440,214 400,206 370,150Z" fill="url(#${id}cur)"/>
    <path d="M370,150 C400,206 440,214 470,170 C500,226 550,230 600,178 C650,230 700,226 730,170 C760,214 800,206 830,150" stroke="${RED2}" stroke-width="3" fill="none"/>
    ${[420, 530, 670, 780].map((x) => `<path d="M${x},128 C${x + 10},160 ${x - 6},180 ${x + 4},200" stroke="#e2283c" stroke-width="2" fill="none" opacity=".5"/>`).join('')}
    <path d="M370,130 C410,170 420,230 400,270 L370,270Z" fill="${RED}"/><path d="M830,130 C790,170 780,230 800,270 L830,270Z" fill="${RED}"/></g>
  ${[470, 730].map((x) => `<path d="M${x},170 L${x},214" stroke="${GOLD}" stroke-width="2"/><path d="M${x - 6},214 L${x + 6},214 L${x + 4},236 L${x - 4},236Z" fill="${GOLD}"/>`).join('')}
  ${burst(600, 92, 40)}</g>
  <path d="M372,262 L828,262" stroke="${GOLD}" stroke-width="4"/><path d="M386,268 L814,268" stroke="${IV2}" stroke-width="1.5"/>
  ${film('M40,560 C90,520 160,540 190,600 C220,660 300,700 380,690', 'f1')}
  ${film('M1060,420 C1100,392 1150,402 1162,444 C1172,480 1150,506 1124,504', 'f2')}
  
  ${lily(110, 440, 0.85, -18)}${lily(162, 486, 0.55, 24)}
  ${poppy(1104, 610, 0.68)}
  ${hand}
  ${[[1002, 104, 1030, 196], [1026, 120, 1070, 200], [1052, 126, 940, 290], [1076, 118, 1140, 420]].map(([a, b, c, d]) => `<path d="M${a},${b} L${c},${d}" stroke="${IV2}" stroke-width="1.6" opacity=".85"/>`).join('')}
  ${mask}
  <g stroke="${IV2}" stroke-width="2.2" fill="none" stroke-linecap="round">
    <path d="M268,372 C226,352 196,370 200,398 C204,422 236,424 244,404 C250,388 232,380 224,392"/><path d="M268,372 C240,330 260,300 290,300"/><path d="M262,440 C230,450 210,474 226,494"/>
    <path d="M940,372 C982,352 1012,370 1008,398 C1004,422 972,424 964,404 C958,388 976,380 984,392"/><path d="M940,440 C972,450 992,474 976,494"/>
    ${[[212, 470], [236, 316], [998, 470]].map(([x, y]) => `<path d="M${x},${y} l-8,-10 M${x},${y} l10,-6"/>`).join('')}
  </g>
</g>
<g filter="url(#${id}worn)">
  <text x="248" y="246" font-family="Aurelia, serif" font-size="58" fill="url(#${id}iv)" letter-spacing="8">THE</text><path d="M246,258 L360,258" stroke="${GOLD}" stroke-width="2"/>
  <text x="600" y="418" text-anchor="middle" font-family="Aurelia, serif" fill="url(#${id}iv)" stroke="#2a1e1a" stroke-width="1.5" paint-order="stroke"><tspan font-size="212" dy="10">O</tspan><tspan font-size="168" dy="-10" letter-spacing="4">THER</tspan><tspan font-size="212" dx="30" dy="10">M</tspan><tspan font-size="168" dy="-10">E</tspan><tspan font-size="150" fill="${GOLD}" dx="10">:</tspan></text>
  </g>
<text x="612" y="528" text-anchor="middle" font-family="Cintarini, cursive" font-size="104" fill="url(#${id}rd)" stroke="url(#${id}rd)" stroke-width="3.2" transform="rotate(-4 600 510)" filter="url(#${id}glow)">Applause, Please!</text>
<g class="lg-orn2" transform="translate(0 -20)">
  <path d="M280,630 C380,612 470,640 540,626 C570,620 586,614 600,604 C614,614 630,620 660,626 C730,640 820,612 920,630" stroke="${IV2}" stroke-width="2.5" fill="none"/>
  <path d="M330,618 C300,600 300,580 322,578 M870,618 C900,600 900,580 878,578" stroke="${IV2}" stroke-width="2" fill="none"/>
  <path d="M560,640 L600,736 L640,640 C626,652 612,650 600,644 C588,650 574,652 560,640Z" fill="${RED}"/><path d="M582,650 L600,712 L618,650" stroke="${RED2}" stroke-width="2" fill="none"/>
  ${star(600, 640, 40, IV, 0.12)}
  ${glasses}${ticket}
  ${[[300, 150, 16], [1030, 190, 10], [110, 360, 12], [1150, 580, 14], [250, 520, 9], [700, 690, 10], [1170, 300, 8], [60, 700, 10], [780, 60, 9], [420, 70, 7]].map(([x, y, r]) => star(x, y, r, GOLD)).join('')}
</g></svg>`;
}
