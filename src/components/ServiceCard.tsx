import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/data/services";
import { IMAGE_SIZES } from "@/lib/image-sizes";

/**
 * Görsel öncelikli hizmet kartı. İkon YOK.
 * Görsel alanı her zaman 3:2 — yüklenen dosyanın kendi ölçüsü kart
 * yüksekliğini değiştirmez. Görsel esnetilmez, ortadan kırpılır.
 */
export default function ServiceCard({ s, image, priority = false }: { s: Service; image?: string | null; priority?: boolean }) {
  return (
    <Link href={`/hizmetler/${s.slug}`} className={`card-hard group flex flex-col h-full overflow-hidden ${s.branch === "it" ? "is-it" : ""}`}>
      <div className="relative w-full aspect-[3/2] shrink-0 overflow-hidden border-b border-line bg-primary">
        {image ? (
          <Image src={image} alt={s.title} fill sizes={IMAGE_SIZES.card}
            priority={priority} loading={priority ? undefined : "lazy"}
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-2" />
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-[1.05rem] font-bold leading-snug clamp-2 min-h-[2.6rem]">{s.title}</h3>
        <p className="mt-2 text-sm text-body leading-relaxed clamp-2 min-h-[2.7rem]">{s.short}</p>
        <span className="mt-auto pt-4 text-sm font-display font-semibold text-primary group-hover:text-accent transition-colors">Detaylı bilgi →</span>
      </div>
    </Link>
  );
}
