import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import ServiceCard from "@/components/ServiceCard";
import { allDistrictParams, getProvince, getDistrict, locative } from "@/lib/locations";
import { getLocationContent } from "@/lib/markdown";
import { byBranch } from "@/data/services";
import { site } from "@/data/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { bannerImage, serviceImage } from "@/lib/images";

type Params = Promise<{ il: string; ilce: string }>;
export const dynamicParams = false;
export function generateStaticParams() { return allDistrictParams(); }

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { il, ilce } = await params;
  const d = getDistrict(il, ilce); if (!d) return {};
  const c = await getLocationContent(il, ilce);
  return {
    title: c?.title ?? `${d.name} Bilgisayar, Network ve Kamera Sistemleri`,
    description: c?.excerpt ?? `${locative(d.name)} yerinde teknik destek: bilgisayar servisi, network kurulumu, kamera ve alarm sistemleri. Web ve e-ticaret hizmetleri de ${site.name} ile.`,
    alternates: { canonical: `${site.url}/hizmet-bolgeleri/${il}/${ilce}` },
  };
}

export default async function Page({ params }: { params: Params }) {
  const { il, ilce } = await params;
  const p = getProvince(il); const d = getDistrict(il, ilce);
  if (!p || !d) notFound();
  const c = await getLocationContent(il, ilce);
  const loc = locative(d.name);
  const priority = site.serviceArea.includes(d.name);
  const near = p.districts.filter((x) => x.slug !== d.slug && site.serviceArea.includes(x.name)).slice(0, 6);
  const faq = [
    { q: `${loc} aynı gün servis mümkün mü?`, a: priority ? `Evet. ${d.name} öncelikli hizmet bölgemiz; çoğu talebe aynı gün yerinde dönüyoruz.` : `${d.name} için genellikle 1-2 iş günü içinde yerinde keşif planlıyoruz; acil durumlarda uzaktan destekle başlıyoruz.` },
    { q: "Keşif ücretli mi?", a: `Hayır. ${loc} yerinde keşif ve teklif ücretsiz.` },
    { q: "Hangi hizmetler yerinde, hangileri online?", a: "Bilgisayar, network, kamera ve alarm işleri yerinde; web tasarım, e-ticaret, Google Ads, SEO ve pazaryeri danışmanlığı online yürütülür." },
  ];
  const url = `${site.url}/hizmet-bolgeleri/${il}/${ilce}`;

  return (
    <>
      <JsonLd data={faqJsonLd(faq)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Ana Sayfa", url: site.url }, { name: "Hizmet Bölgeleri", url: `${site.url}/hizmet-bolgeleri` }, { name: p.name, url: `${site.url}/hizmet-bolgeleri/${il}` }, { name: d.name, url }])} />
      <PageHeader kicker={`${p.name} / ${d.name}`} title={c?.title ?? `${loc} yerinde teknik destek ve dijital çözümler`}
        lead={c?.excerpt ?? `${d.name} ve çevresindeki işletmeler için bilgisayar, network, kamera ve alarm sistemlerinde yerinde servis; web, e-ticaret ve reklam tarafında online destek.`}
        crumbs={[{ name: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri" }, { name: p.name, href: `/hizmet-bolgeleri/${il}` }, { name: d.name }]} image={bannerImage("bolgeler")} />

      <section className="container-x py-14 grid lg:grid-cols-[1fr_340px] gap-10">
        <div>
          {/* İlçeye özel metin: content/bolgeler/<il>/<ilce>.md — yoksa kısa şablon */}
          <Reveal className="prose-x">
            {c ? <div dangerouslySetInnerHTML={{ __html: c.html }} /> : (
              <>
                <h2>{loc} neler yapıyoruz?</h2>
                <p>{d.name} bölgesindeki mağaza, ofis, site ve atölyeler için kamera ve alarm sistemleri kuruyor, network ve Wi-Fi altyapısını planlıyor, bilgisayar sistemlerine yerinde teknik servis veriyoruz. {priority ? `${d.name} öncelikli hizmet bölgemiz olduğundan çoğu talebe aynı gün dönüyoruz.` : `${d.name} için keşfi genellikle 1-2 iş günü içinde planlıyoruz.`}</p>
                <p>Dijital tarafta web sitesi, e-ticaret kurulumu, Google Ads ve pazaryeri danışmanlığı hizmetlerimiz konumdan bağımsız, online olarak yürütülür.</p>
              </>
            )}
          </Reveal>

          <Reveal className="mt-12"><h2 className="text-2xl font-bold">{loc} yerinde verdiğimiz hizmetler</h2></Reveal>
          <div className="mt-5 grid sm:grid-cols-2 gap-4">
            {byBranch("it").map((s, i) => <Reveal key={s.slug} delay={i * 60}><ServiceCard s={s} image={serviceImage(s.slug)} /></Reveal>)}
          </div>

          <Reveal className="mt-12"><h2 className="text-2xl font-bold">{d.name} mahalleleri</h2><p className="mt-2 text-sm text-muted">Aşağıdaki mahallelerin tamamına yerinde servis veriyoruz.</p></Reveal>
          <Reveal className="mt-4 flex flex-wrap gap-2">
            {d.neighborhoods.map((m) => <span key={m} className="px-3 py-1.5 rounded-md bg-surface border border-line text-xs">{m}</span>)}
          </Reveal>

          <Reveal className="mt-12"><h2 className="text-2xl font-bold">Sık sorulanlar</h2></Reveal>
          <Reveal className="mt-5"><Faq items={faq} /></Reveal>
        </div>

        <aside className="lg:sticky lg:top-24 self-start">
          <div className="card p-6 bg-primary text-white border-primary">
            <div className="font-display font-bold text-lg text-white">{loc} keşif isteyin</div>
            <p className="mt-2 text-sm text-white/70">Ücretsiz keşif, net teklif.</p>
            <Link href="/iletisim" className="btn btn-accent w-full mt-5">Teklif Al</Link>
            <a href={site.whatsapp} target="_blank" rel="noopener" className="btn btn-light w-full mt-2">WhatsApp</a>
            <a href={site.phoneHref} className="block mt-4 text-center text-white font-semibold">{site.phone}</a>
          </div>
          {near.length > 0 && (
            <div className="card p-6 mt-4">
              <div className="text-xs font-bold text-muted mb-2">Yakın bölgeler</div>
              {near.map((n) => <Link key={n.slug} href={`/hizmet-bolgeleri/${il}/${n.slug}`} className="block py-2 text-sm text-primary hover:text-accent border-b border-line-soft last:border-b-0">{n.name}</Link>)}
            </div>
          )}
        </aside>
      </section>
      <CtaBand title={`${loc} işletmeniz için doğru çözümü birlikte belirleyelim.`} />
    </>
  );
}
