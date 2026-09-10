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
