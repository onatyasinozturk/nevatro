import Link from "next/link";
export default function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Sayfa yolu" className="text-sm text-muted mb-6 flex flex-wrap gap-2">
      <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
      {items.map((it, i) => (
        <span key={i} className="flex gap-2"><span aria-hidden>/</span>{it.href ? <Link href={it.href} className="hover:text-primary">{it.name}</Link> : <span className="text-primary">{it.name}</span>}</span>
      ))}
    </nav>
  );
}
