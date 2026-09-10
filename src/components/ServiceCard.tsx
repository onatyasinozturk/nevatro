import Link from "next/link";
import type { Service } from "@/data/services";
import { ServiceIcon } from "./icons";

export default function ServiceCard({ s }: { s: Service }) {
  return (
    <Link href={`/hizmetler/${s.slug}`} className="card p-6 block group hover:border-primary transition-colors">
      <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${s.branch === "it" ? "bg-primary text-it" : "bg-accent-soft text-accent"}`}>
        <ServiceIcon slug={s.slug} className="w-6 h-6" />
      </div>
      <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
      <p className="mt-2 text-sm text-body leading-relaxed">{s.short}</p>
      <span className="inline-block mt-4 text-sm font-display font-semibold text-primary underline-grow">Detaylı bilgi</span>
    </Link>
  );
}
