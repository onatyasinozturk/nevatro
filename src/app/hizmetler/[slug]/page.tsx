import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { branches, byBranch, getService, services, type Branch } from "@/data/services";
import { site } from "@/data/site";
import { serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { bannerImage, serviceImage } from "@/lib/images";

type Params = Promise<{ slug: string }>;
const branchBySlug = (slug: string) => (Object.keys(branches) as Branch[]).find((b) => branches[b].slug === slug);

export function generateStaticParams() {
  return [...Object.values(branches).map((b) => ({ slug: b.slug })), ...services.map((s) => ({ slug: s.slug }))];
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const b = branchBySlug(slug);
  if (b) return { title: branches[b].title, description: branches[b].desc };
  const s = getService(slug);
  if (!s) return {};
  return { title: `${s.title} | ${site.city}`, description: s.short };
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const b = branchBySlug(slug);

  /* ---- Kol sayfası (Dijital / IT) ---- */
  if (b) {
    const br = branches[b];
    return (
      <>
        <PageHeader kicker={br.title} title={br.claim} lead={br.desc} crumbs={[{ name: "Hizmetler", href: "/hizmetler" }, { name: br.title }]} image={bannerImage("hizmetler")} />
        <section className="container-x py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {byBranch(b).map((s, i) => <Reveal key={s.slug} delay={(i % 3) * 90}><ServiceCard s={s} image={serviceImage(s.slug)} /></Reveal>)}
          </div>
        </section>
        <CtaBand />
      </>
    );
  }

  /* ---- Hizmet sayfası ---- */
  const s = getService(slug);
  if (!s) notFound();
  const br = branches[s.branch];
  const related = byBranch(s.branch).filter((x) => x.slug !== s.slug).slice(0, 3);
  const url = `${site.url}/hizmetler/${s.slug}`;
  return (
    <>
      <JsonLd data={serviceJsonLd(s.title, s.short, url)} />
      {s.faq.length > 0 && <JsonLd data={faqJsonLd(s.faq)} />}
      <JsonLd data={breadcrumbJsonLd([{ name: "Ana Sayfa", url: site.url }, { name: br.title, url: `${site.url}/hizmetler/${br.slug}` }, { name: s.title, url }])} />
      <PageHeader kicker={br.title} title={s.title} lead={s.intro} crumbs={[{ name: "Hizmetler", href: "/hizmetler" }, { name: br.title, href: `/hizmetler/${br.slug}` }, { name: s.title }]} image={serviceImage(s.slug) ?? bannerImage("hizmetler")} />

      <section className="container-x py-14 grid lg:grid-cols-[1fr_340px] gap-10">
        <div>
          <Reveal><h2 className="text-2xl font-bold">Ne yapıyoruz?</h2></Reveal>
          <div className="mt-5 card divide-y divide-line">
            {s.bullets.map((x, i) => <Reveal key={x} delay={i * 60} className="px-6 py-4 flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" /><span>{x}</span></Reveal>)}
          </div>
          <Reveal className="mt-12"><h2 className="text-2xl font-bold">Ne elde edersiniz?</h2></Reveal>
          <div className="mt-5 grid sm:grid-cols-3 gap-4">
            {s.outcomes.map((x, i) => <Reveal key={x} delay={i * 90} className="card p-5 border-l-4 border-l-accent text-sm">{x}</Reveal>)}
          </div>
          {s.faq.length > 0 && (<><Reveal className="mt-12"><h2 className="text-2xl font-bold">Sık sorulanlar</h2></Reveal><Reveal className="mt-5"><Faq items={s.faq} /></Reveal></>)}
        </div>
        <aside className="lg:sticky lg:top-24 self-start">
          <div className="card p-6 bg-primary text-white border-primary">
            <div className="font-display font-bold text-lg text-white">Bu hizmet için teklif alın</div>
            <p className="mt-2 text-sm text-white/70">Keşif ücretsiz. Genellikle aynı gün dönüyoruz.</p>
            <Link href="/iletisim" className="btn btn-accent w-full mt-5">Teklif Al</Link>
            <a href={site.whatsapp} target="_blank" rel="noopener" className="btn btn-light w-full mt-2">WhatsApp</a>
            <a href={site.phoneHref} className="block mt-4 text-center text-white font-semibold">{site.phone}</a>
          </div>
          <div className="card p-6 mt-4">
            <div className="text-xs font-bold text-muted mb-2">{br.title} — diğer hizmetler</div>
            {related.map((r) => <Link key={r.slug} href={`/hizmetler/${r.slug}`} className="block py-2 text-sm text-primary hover:text-accent border-b border-line-soft last:border-b-0">{r.title}</Link>)}
          </div>
        </aside>
      </section>
      <CtaBand />
    </>
  );
}
