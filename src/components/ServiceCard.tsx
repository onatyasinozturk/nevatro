import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/data/services";
import { ServiceIcon } from "./icons";

export default function ServiceCard({ s, image }: { s: Service; image?: string | null }) {
  return (
    <Link href={`/hizmetler/${s.slug}`} className="card overflow-hidden block group hover:border-primary transition-colors">
      {image && (
        <div className="relative h-40 overflow-hidden">
          <Image src={image} alt={s.title} fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
      )}
      <div className="p-6">
        <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${s.branch === "it" ? "bg-primary text-it" : "bg-accent-soft text-accent"}`}>
          <ServiceIcon slug={s.slug} className="w-6 h-6" />
        </div>
        <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
        <p className="mt-2 text-sm text-body leading-relaxed">{s.short}</p>
        <span className="inline-block mt-4 text-sm font-display font-semibold text-primary underline-grow">Detaylı bilgi</span>
      </div>
    </Link>
  );
}
