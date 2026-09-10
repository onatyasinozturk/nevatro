import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { sectors, getSector } from "@/data/sectors";
import { bannerImage } from "@/lib/images";

type Params = Promise<{ slug: string }>;
export function generateStaticParams() { return sectors.map((s) => ({ slug: s.slug })); }
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const s = getSector((await params).slug); if (!s) return {};
  return { title: `${s.name} için Dijital ve IT Çözümleri`, description: s.problem };
}

export default async function Page({ params }: { params: Params }) {
  const s = getSector((await params).slug); if (!s) notFound();
  return (
    <>
      <PageHeader kicker="Sektörler" title={`${s.name} için çözümler`} lead={s.intro} crumbs={[{ name: "Sektörler", href: "/sektorler" }, { name: s.name }]} image={bannerImage("sektorler")} />
      <section className="container-x py-14 grid md:grid-cols-2 gap-8">
        <Reveal className="card p-7 border-l-4 border-l-accent">
          <div className="text-xs font-bold text-muted">Temel sorun</div>
          <p className="mt-2 text-lg text-primary font-display font-medium">{s.problem}</p>
        </Reveal>
        <Reveal delay={120} className="card p-7">
          <div className="text-xs font-bold text-muted">Öncelikli çalışma alanları</div>
          <ul className="mt-3 divide-y divide-line-soft">{s.priorities.map((p) => <li key={p} className="py-2.5 flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />{p}</li>)}</ul>
          <Link href="/iletisim" className="btn btn-accent mt-6">{s.name} için keşif iste</Link>
        </Reveal>
      </section>
      <section className="container-x pb-14">
        <Reveal className="text-sm text-muted">Diğer sektörler: {sectors.filter((x) => x.slug !== s.slug).map((x, i) => <span key={x.slug}>{i > 0 && " · "}<Link href={`/sektorler/${x.slug}`} className="text-primary hover:text-accent">{x.name}</Link></span>)}</Reveal>
      </section>
      <CtaBand />
    </>
  );
}
