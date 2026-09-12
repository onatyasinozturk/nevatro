import Link from "next/link";
import type { DestekItem } from "@/data/destek";
import { DestekIcon } from "./icons";

/** Destek kartı — görsel yok, ikon var. Yükseklikler eşit (2 satır başlık, 2 satır açıklama). */
export default function DestekCard({ d }: { d: DestekItem }) {
  return (
    <Link href={`/destek/${d.slug}`} className="card-hard group flex flex-col h-full p-6">
      <div className="w-12 h-12 flex items-center justify-center bg-primary text-it shrink-0 transition-colors group-hover:bg-accent group-hover:text-white">
        <DestekIcon slug={d.slug} className="w-6 h-6" />
      </div>
      <h3 className="mt-5 font-display font-bold text-[1.02rem] leading-snug text-primary clamp-2 min-h-[2.6rem]">{d.title}</h3>
      <p className="mt-2 text-sm text-body leading-relaxed clamp-2 min-h-[2.7rem]">{d.short}</p>
      <span className="mt-auto pt-4 text-sm font-display font-semibold text-accent">Çözümü gör →</span>
    </Link>
  );
}
