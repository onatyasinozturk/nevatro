import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { sectors } from "@/data/sectors";
import { bannerImage } from "@/lib/images";

export const metadata: Metadata = { title: "Sektörler", description: "Site yönetimi, restoran, ofis, fabrika, mağaza, klinik, okul ve e-ticaret satıcıları için sektöre özel dijital ve IT çözümleri." };

export default function Page() {
  return (
    <>
      <PageHeader kicker="Sektörler" title="Kime hizmet veriyoruz?" lead="Bir sitenin ihtiyacı ile bir restoranınki aynı değil. Her müşteri tipi için hangi sorunu çözdüğümüzü ve nereden başladığımızı görün." crumbs={[{ name: "Sektörler" }]} image={bannerImage("sektorler")} />
      <section className="container-x py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {sectors.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 4) * 90}>
            <Link href={`/sektorler/${s.slug}`} className="card-hard flex flex-col h-full p-6">
              <h2 className="text-lg font-bold clamp-1">{s.name}</h2>
              <p className="mt-2 text-sm text-body clamp-2 min-h-[2.7rem]">{s.problem}</p>
              <span className="mt-auto pt-4 text-sm font-display font-semibold text-accent">Çözümleri gör →</span>
            </Link>
          </Reveal>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
