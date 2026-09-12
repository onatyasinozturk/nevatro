import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { destek, getDestek } from "@/data/destek";
import { getService } from "@/data/services";
import { site } from "@/data/site";
import { destekImage, bannerImage } from "@/lib/images";
import { breadcrumbJsonLd } from "@/lib/seo";

type Params = Promise<{ slug: string }>;
export const dynamicParams = false;
export function generateStaticParams() { return destek.map((d) => ({ slug: d.slug })); }

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const d = getDestek((await params).slug); if (!d) return {};
  return { title: d.title, description: d.short, alternates: { canonical: `${site.url}/destek/${d.slug}` } };
}

export default async function Page({ params }: { params: Params }) {
  const d = getDestek((await params).slug); if (!d) notFound();
  const svc = getService(d.service);
  const others = destek.filter((x) => x.slug !== d.slug).slice(0, 5);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Ana Sayfa", url: site.url }, { name: "Destek Merkezi", url: `${site.url}/destek` }, { name: d.title, url: `${site.url}/destek/${d.slug}` }])} />
      <PageHeader kicker="Destek Merkezi" title={d.title} lead={d.intro}
        crumbs={[{ name: "Destek Merkezi", href: "/destek" }, { name: d.title }]}
        image={destekImage(d.slug) ?? bannerImage("destek")} />

      <section className="container-x py-14 grid lg:grid-cols-[1fr_340px] gap-10">
        <div>
          <Reveal><h2 className="text-2xl font-bold">Bunları yaşıyorsanız</h2></Reveal>
          <div className="mt-5 grid sm:grid-cols-2 gap-3">
            {d.symptoms.map((x, i) => (
              <Reveal key={x} delay={i * 70} className="card p-5 border-l-4 border-l-accent text-sm">{x}</Reveal>
            ))}
          </div>

          <Reveal className="mt-12"><h2 className="text-2xl font-bold">Biz ne yapıyoruz?</h2></Reveal>
          <ol className="mt-5 card divide-y divide-line">
            {d.approach.map((x, i) => (
              <Reveal key={x} delay={i * 60} as="li" className="px-6 py-4 flex gap-4 items-start">
                <span className="font-display font-extrabold text-accent tabular-nums shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span>{x}</span>
              </Reveal>
            ))}
          </ol>

          {svc && (
            <Reveal className="mt-12 card p-7 bg-surface">
              <div className="text-xs font-bold text-muted">İlgili hizmet</div>
              <h3 className="mt-1 text-xl font-bold">{svc.title}</h3>
              <p className="mt-2 text-body">{svc.short}</p>
              <Link href={`/hizmetler/${svc.slug}`} className="btn btn-outline mt-5">Hizmet sayfasına git</Link>
            </Reveal>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 self-start">
          {/* Sol sütundaki başlık kadar boşluk — kutu, yandaki liste kutusuyla aynı hizada başlasın */}
          <div className="hidden lg:block text-2xl font-bold leading-[1.1] invisible" aria-hidden>&nbsp;</div>
          <div className="card p-6 bg-primary text-white border-primary lg:mt-5">
            <div className="font-display font-bold text-lg text-white">Hemen çözelim</div>
            <p className="mt-2 text-sm text-white/70">{site.hoursShort}</p>
            <a href={site.phoneHref} className="btn btn-accent w-full mt-5">{site.phone}</a>
            <a href={site.whatsapp} target="_blank" rel="noopener" className="btn btn-light w-full mt-2">WhatsApp</a>
            <Link href="/iletisim" className="block mt-4 text-center text-white/70 text-sm hover:text-white">veya form doldurun</Link>
          </div>
          <div className="card p-6 mt-4">
            <div className="text-xs font-bold text-muted mb-2">Diğer sorunlar</div>
            {others.map((o) => <Link key={o.slug} href={`/destek/${o.slug}`} className="block py-2 text-sm text-primary hover:text-accent border-b border-line-soft last:border-b-0">{o.title}</Link>)}
          </div>
        </aside>
      </section>
      <CtaBand />
    </>
  );
}
