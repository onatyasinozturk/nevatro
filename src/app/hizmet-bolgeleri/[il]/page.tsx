import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { provinces, getProvince, locative } from "@/lib/locations";
import { site } from "@/data/site";
import { bannerImage } from "@/lib/images";

type Params = Promise<{ il: string }>;
export const dynamicParams = false;
export function generateStaticParams() { return provinces.map((p) => ({ il: p.slug })); }
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const p = getProvince((await params).il); if (!p) return {};
  return { title: `${p.name} Teknik Destek ve Dijital Çözümler`, description: `${locative(p.name)} bilgisayar, network, kamera sistemleri ve web/e-ticaret hizmetleri. İlçenizi seçin.` };
}

export default async function Page({ params }: { params: Params }) {
  const p = getProvince((await params).il); if (!p) notFound();
  return (
    <>
      <PageHeader kicker="Hizmet bölgeleri" title={`${locative(p.name)} yerinde teknik destek`} lead={`${p.name} genelinde bilgisayar, network ve güvenlik sistemleri için yerinde servis; web, e-ticaret ve reklam için online çalışıyoruz. ${site.serviceArea.slice(0, 3).join(", ")} ve çevresi öncelikli bölgemiz.`} crumbs={[{ name: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri" }, { name: p.name }]} image={bannerImage("bolgeler")} />
      <section className="container-x py-14">
        <Reveal><h2 className="text-2xl font-bold">İlçeler</h2></Reveal>
        <div className="mt-5 grid sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {p.districts.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 4) * 40}>
              <Link href={`/hizmet-bolgeleri/${p.slug}/${d.slug}`} className={`card-hard block px-5 py-4 ${site.serviceArea.includes(d.name) ? "border-l-4 border-l-accent" : ""}`}>
                <div className="font-display font-semibold text-primary">{d.name}</div>
                <div className="text-xs text-muted mt-1">{d.neighborhoods.length} mahalle</div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
