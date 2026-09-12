/** Basit, tek renk çizgi ikonlar — her kartta aynı renk kuralı (ChatGPT önerisi) */
const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
export function ServiceIcon({ slug, className = "" }: { slug: string; className?: string }) {
  const c = { className, viewBox: "0 0 24 24", ...P, "aria-hidden": true };
  switch (slug) {
    case "web-tasarim": return <svg {...c}><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 22h8"/></svg>;
    case "e-ticaret": return <svg {...c}><path d="M3 5h2l2.5 11h11L21 8H6.5"/><circle cx="9" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/></svg>;
    case "pazaryeri-danismanligi": return <svg {...c}><path d="M4 8h16l-1 3H5zM5 11v9h14v-9"/><path d="M10 20v-5h4v5"/></svg>;
    case "seo": return <svg {...c}><circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5M8 11l2 2 3-4"/></svg>;
    case "google-ads": return <svg {...c}><path d="M3 17l5-6 4 3 5-8 4 5"/><path d="M3 21h18"/></svg>;
    case "sosyal-medya": return <svg {...c}><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><circle cx="17" cy="7" r=".8" fill="currentColor"/></svg>;
    case "kurumsal-it": return <svg {...c}><rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01"/></svg>;
    case "network-altyapi": return <svg {...c}><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><circle cx="12" cy="5" r="2.5"/><path d="M12 7.5v6M12 13.5l-5.5 3.5M12 13.5l5.5 3.5"/></svg>;
    case "bilgisayar-sistemleri": return <svg {...c}><rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/></svg>;
    case "kamera-alarm": return <svg {...c}><rect x="3" y="6" width="14" height="10" rx="1.5"/><path d="M17 10l4-2v8l-4-2"/><circle cx="9" cy="11" r="2.5"/></svg>;
    case "teknik-destek": return <svg {...c}><path d="M14.5 4.5a4 4 0 0 0-5 5L4 15v5h5l5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5-2-2z"/></svg>;
    default: return <svg {...c}><circle cx="12" cy="12" r="8"/></svg>;
  }
}

/** Destek Merkezi (sorun tipi) ikonları — tek renk, çizgi */
export function DestekIcon({ slug, className = "" }: { slug: string; className?: string }) {
  const c = { className, viewBox: "0 0 24 24", ...P, "aria-hidden": true };
  switch (slug) {
    case "bilgisayar-yavasladi": return <svg {...c}><rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/><path d="M8.5 10h7M12 7.5v5"/></svg>;
    case "internet-kopuyor": return <svg {...c}><path d="M2.5 9a14 14 0 0 1 19 0"/><path d="M6 12.5a9 9 0 0 1 12 0"/><path d="M9.5 16a4 4 0 0 1 5 0"/><circle cx="12" cy="19.5" r="1" fill="currentColor"/><path d="M4 4l16 16"/></svg>;
    case "veri-kaybi": return <svg {...c}><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M12 10.5v3M3 15h18"/></svg>;
    case "yedekleme-yok": return <svg {...c}><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>;
    case "kamera-goruntu-yok": return <svg {...c}><rect x="3" y="6" width="14" height="10" rx="1.5"/><path d="M17 10l4-2v8l-4-2"/><circle cx="9" cy="11" r="2.5"/><path d="M4 4l16 16"/></svg>;
    case "virus-fidye": return <svg {...c}><path d="M12 3l8 3v6c0 4.5-3.4 7.9-8 9-4.6-1.1-8-4.5-8-9V6z"/><path d="M12 8v5M12 16h.01"/></svg>;
    case "yeni-ofis-kurulumu": return <svg {...c}><path d="M3 21h18M5 21V8l7-4 7 4v13"/><path d="M9 21v-5h6v5M9 11h.01M15 11h.01M9 14h.01M15 14h.01"/></svg>;
    case "google-da-bulunamiyoruz": return <svg {...c}><circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/><path d="M11 8v3l2 1"/></svg>;
    default: return <svg {...c}><circle cx="12" cy="12" r="8"/><path d="M12 8v5M12 16h.01"/></svg>;
  }
}
