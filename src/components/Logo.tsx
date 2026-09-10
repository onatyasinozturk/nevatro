/** Geçici metin logosu — gerçek logo gelince burayı <Image> ile değiştir. */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
        <rect x="2" y="2" width="24" height="24" rx="7" fill={light ? "#fff" : "var(--c-primary)"} />
        <path d="M8 19V9l8 10V9" stroke={light ? "var(--c-primary)" : "#fff"} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="20" cy="8.5" r="2" fill="var(--c-accent)" />
      </svg>
      <span className={`font-display font-bold text-xl tracking-tight ${light ? "text-white" : "text-primary"}`}>nevatro</span>
    </span>
  );
}
