import Link from "next/link";
import Image from "next/image";
import type { DestekItem } from "@/data/destek";
import { IMAGE_SIZES } from "@/lib/image-sizes";

export default function DestekCard({ d, image }: { d: DestekItem; image?: string | null }) {
  return (
    <Link href={`/destek/${d.slug}`} className="card-hard group flex flex-col h-full overflow-hidden">
      <div className="relative w-full aspect-[3/2] shrink-0 bg-primary overflow-hidden border-b border-line">
        {image
          ? <Image src={image} alt={d.title} fill sizes={IMAGE_SIZES.card} loading="lazy" className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]" />
          : <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-2" />}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/55 to-transparent" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-[1.02rem] leading-snug text-primary clamp-2 min-h-[2.6rem]">{d.title}</h3>
        <p className="mt-2 text-sm text-body leading-relaxed clamp-2 min-h-[2.7rem]">{d.short}</p>
        <span className="mt-auto pt-4 text-sm font-display font-semibold text-accent">Çözümü gör →</span>
      </div>
    </Link>
  );
}
