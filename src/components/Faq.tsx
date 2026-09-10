export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  if (!items.length) return null;
  return (
    <div className="card overflow-hidden">
      {items.map((it, i) => (
        <details key={i} className="group border-b border-line last:border-b-0">
          <summary className="cursor-pointer list-none flex justify-between items-center gap-4 px-6 py-4 font-display font-semibold text-primary group-open:bg-bg">
            {it.q}<span aria-hidden className="text-accent text-xl transition-transform group-open:rotate-45">+</span>
          </summary>
          <div className="px-6 pb-5 max-w-[70ch]">{it.a}</div>
        </details>
      ))}
    </div>
  );
}
