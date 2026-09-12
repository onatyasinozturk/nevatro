import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/data/services";
import { ServiceIcon } from "./icons";

export default function ServiceCard({ s, image }: { s: Service; image?: string | null }) {
  return (
    <Link href={`/hizmetler/${s.slug}`} className={`card-hard group flex flex-col h-full overflow-hidden ${s.branch === "it" ? "is-it" : ""}`}>
      {image && (
        <div className="relative h-40 shrink-0 overflow-hidden border-b border-line">
          <Image src={image} alt={s.title} fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className={`w-10 h-10 flex items-center justify-center shrink-0 ${s.branch === "it" ? "bg-primary text-it" : "bg-accent-soft text-accent"}`}>
          <ServiceIcon slug={s.slug} className="w-5 h-5" />
        </div>
        <h3 className="mt-4 text-[1.05rem] font-bold leading-snug clamp-2 min-h-[2.6rem]">{s.title}</h3>
        <p className="mt-2 text-sm text-body leading-relaxed clamp-2 min-h-[2.7rem]">{s.short}</p>
        <span className="mt-auto pt-4 text-sm font-display font-semibold text-primary group-hover:text-accent transition-colors">Detaylı bilgi →</span>
      </div>
    </Link>
  );
}
