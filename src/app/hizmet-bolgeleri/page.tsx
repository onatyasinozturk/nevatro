import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { provinces, locative } from "@/lib/locations";
import { site } from "@/data/site";
import { bannerImage } from "@/lib/images";

export const metadata: Metadata = { title: "Hizmet Bölgeleri", description: `${site.name} yerinde teknik destek ve dijital çözümler: hizmet verdiğimiz il ve ilçeler.` };

export default function Page() {
  return (
    <>
      <PageHeader kicker="Hizmet bölgeleri" title="Nerelerde hizmet veriyoruz?" lead={`IT hizmetlerinde ${locative(site.city)} yerinde, dijital hizmetlerde Türkiye geneline online çalışıyoruz.`} crumbs={[{ name: "Hizmet Bölgeleri" }]} image={bannerImage("bolgeler")} />
      <section className="container-x py-14">
        {provinces.map((p) => (
          <Reveal key={p.slug} className="mb-10">
            <h2 className="text-2xl font-bold"><Link href={`/hizmet-bolgeleri/${p.slug}`} className="hover:text-accent">{p.name}</Link> <span className="text-muted text-base font-normal">({p.districts.length} ilçe)</span></h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.districts.map((d) => <Link key={d.slug} href={`/hizmet-bolgeleri/${p.slug}/${d.slug}`} className="px-3.5 py-2 rounded-[2px] bg-surface border border-line text-sm hover:border-primary">{d.name}</Link>)}
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
