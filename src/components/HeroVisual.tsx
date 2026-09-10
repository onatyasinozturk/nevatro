/**
 * Hero görseli — laptop + dashboard + bağlı cihazlar (kamera, router, sunucu)
 * Tamamen SVG; gerçek bir 3D render gelirse <Image> ile değiştirilebilir.
 * Yüklenince bir kez: çizgiler çizilir, kutular belirir, barlar büyür.
 */
export default function HeroVisual() {
  const d = (ms: number) => ({ "--d": `${ms}ms` } as React.CSSProperties);
  return (
    <svg viewBox="0 0 560 440" className="w-full h-auto" aria-label="Dashboard, network ve kamera sistemlerini birleştiren şema">
      {/* bağlantı hatları */}
      <g stroke="var(--c-accent)" strokeWidth="2" fill="none" strokeLinecap="round">
        <path className="draw" style={d(400)} d="M150 300 C 110 300, 90 250, 90 200" />
        <path className="draw" style={d(550)} d="M410 300 C 450 300, 470 250, 470 200" />
        <path className="draw" style={d(700)} d="M280 330 L 280 380" />
        <path className="draw" style={d(850)} d="M90 200 C 90 120, 130 90, 170 90" />
        <path className="draw" style={d(1000)} d="M470 200 C 470 120, 430 90, 390 90" />
      </g>

      {/* laptop */}
      <g className="pop" style={d(200)}>
        <rect x="150" y="120" width="260" height="170" rx="10" fill="var(--c-primary)" />
        <rect x="160" y="130" width="240" height="150" rx="6" fill="#fff" />
        <path d="M120 300 H440 a12 12 0 0 1 -12 12 H132 a12 12 0 0 1 -12 -12z" fill="var(--c-primary-2)" />
        {/* dashboard */}
        <rect x="172" y="142" width="60" height="8" rx="4" fill="var(--c-line)" />
        <rect x="172" y="156" width="100" height="6" rx="3" fill="var(--c-line-soft)" />
        <rect x="172" y="176" width="100" height="56" rx="6" fill="var(--c-accent-soft)" />
        <path d="M180 220 L200 200 L215 210 L235 190 L262 205" stroke="var(--c-accent)" strokeWidth="2.5" fill="none" strokeLinecap="round" className="draw" style={d(900)} />
        <g fill="var(--c-accent)">
          <rect className="bar-grow" style={d(1000)} x="284" y="200" width="14" height="32" rx="3" />
          <rect className="bar-grow" style={d(1100)} x="304" y="186" width="14" height="46" rx="3" />
          <rect className="bar-grow" style={d(1200)} x="324" y="196" width="14" height="36" rx="3" />
          <rect className="bar-grow" style={d(1300)} x="344" y="176" width="14" height="56" rx="3" />
          <rect className="bar-grow" style={d(1400)} x="364" y="190" width="14" height="42" rx="3" />
        </g>
        <rect x="172" y="244" width="216" height="26" rx="6" fill="var(--c-bg)" stroke="var(--c-line)" />
        <circle cx="186" cy="257" r="5" fill="var(--c-it)" />
        <rect x="198" y="253" width="90" height="8" rx="4" fill="var(--c-line)" />
      </g>

      {/* kamera */}
      <g className="pop" style={d(1100)}>
        <rect x="40" y="170" width="100" height="60" rx="12" fill="#fff" stroke="var(--c-line)" />
        <rect x="56" y="188" width="44" height="26" rx="4" fill="none" stroke="var(--c-primary)" strokeWidth="2" />
        <path d="M100 196l14-6v22l-14-6" fill="none" stroke="var(--c-primary)" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="74" cy="201" r="6" fill="none" stroke="var(--c-accent)" strokeWidth="2" />
        <circle cx="122" cy="182" r="3.5" fill="#ef4444" />
      </g>

      {/* router / wifi */}
      <g className="pop" style={d(1250)}>
        <rect x="420" y="170" width="100" height="60" rx="12" fill="#fff" stroke="var(--c-line)" />
        <rect x="440" y="196" width="60" height="18" rx="4" fill="none" stroke="var(--c-primary)" strokeWidth="2" />
        <circle cx="452" cy="205" r="2" fill="var(--c-it)" /><circle cx="462" cy="205" r="2" fill="var(--c-it)" /><circle cx="472" cy="205" r="2" fill="var(--c-it)" />
        <path d="M456 190 a14 14 0 0 1 28 0" fill="none" stroke="var(--c-accent)" strokeWidth="2" />
        <path d="M463 190 a7 7 0 0 1 14 0" fill="none" stroke="var(--c-accent)" strokeWidth="2" />
      </g>

      {/* sunucu */}
      <g className="pop" style={d(1400)}>
        <rect x="230" y="376" width="100" height="52" rx="10" fill="#fff" stroke="var(--c-line)" />
        <rect x="246" y="386" width="68" height="12" rx="3" fill="none" stroke="var(--c-primary)" strokeWidth="2" />
        <rect x="246" y="404" width="68" height="12" rx="3" fill="none" stroke="var(--c-primary)" strokeWidth="2" />
        <circle cx="253" cy="392" r="1.8" fill="var(--c-it)" /><circle cx="253" cy="410" r="1.8" fill="var(--c-it)" />
      </g>

      {/* üst küçük düğümler: web / ads */}
      <g className="pop" style={d(1550)}>
        <rect x="140" y="60" width="64" height="44" rx="10" fill="#fff" stroke="var(--c-line)" />
        <rect x="152" y="72" width="40" height="22" rx="3" fill="none" stroke="var(--c-primary)" strokeWidth="2" /><path d="M152 78h40" stroke="var(--c-primary)" strokeWidth="2" />
        <rect x="356" y="60" width="64" height="44" rx="10" fill="#fff" stroke="var(--c-line)" />
        <path d="M366 92l8-10 7 5 8-13 7 8" fill="none" stroke="var(--c-accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
