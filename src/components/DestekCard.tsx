import Link from "next/link";
import Image from "next/image";
import type { DestekItem } from "@/data/destek";

export default function DestekCard({ d, image }: { d: DestekItem; image?: string | null }) {
  return (
    <Link href={`/destek/${d.slug}`} className="group relative block overflow-hidden rounded-card border border-line bg-surface hover:border-primary transition-colors">
      <div className="relative h-36 bg-primary overflow-hidden">
        {image
          ? <Image src={image} alt={d.title} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105" />
          : <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-2" />}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-[1.02rem] leading-snug text-primary">{d.title}</h3>
        <p className="mt-2 text-sm text-body leading-relaxed">{d.short}</p>
        <span className="mt-3 inline-block text-sm font-display font-semibold text-accent">Çözümü gör →</span>
      </div>
    </Link>
  );
}
