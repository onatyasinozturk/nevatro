import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { branches, byBranch } from "@/data/services";
import { site } from "@/data/site";
import { bannerImage, serviceImage } from "@/lib/images";

export const metadata: Metadata = { title: "Hizmetler", description: "Dijital çözümler ve IT çözümleri: web tasarım, e-ticaret, SEO, Google Ads, kurumsal IT, network, kamera ve teknik destek.", alternates: { canonical: `${site.url}/hizmetler` } };

export default function Page() {
  return (
    <>
      <PageHeader kicker="Hizmetler" title="Dijital ve teknik ihtiyaçlarınız, tek çatı altında" lead="İki ana kol: dijitalde büyümenizi sağlayan çözümler ve altyapınızı ayakta tutan IT hizmetleri." crumbs={[{ name: "Hizmetler" }]} image={bannerImage("hizmetler")} />
      {(["dijital", "it"] as const).map((b) => (
        <section key={b} className="container-x py-14">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div><div className="kicker">{branches[b].title}</div><h2 className="text-3xl font-bold">{branches[b].claim}</h2></div>
            <Link href={`/hizmetler/${branches[b].slug}`} className="font-display font-semibold text-accent">Kol sayfasına git</Link>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {byBranch(b).map((s, i) => <Reveal key={s.slug} delay={(i % 3) * 90}><ServiceCard s={s} image={serviceImage(s.slug)} /></Reveal>)}
          </div>
        </section>
      ))}
      <CtaBand />
    </>
  );
}
