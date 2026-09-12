import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";
import Image from "next/image";
import { projectImage, IMAGE_SIZES } from "@/lib/images";

export const metadata: Metadata = { title: "Projeler", description: "Web, e-ticaret, network ve güvenlik projelerimizden örnekler." };

export default function Page() {
  const sample = projects.every((p) => !p.real);
  return (
    <>
      <PageHeader kicker={sample ? "Örnek Çalışmalar" : "Projeler"} title="Nasıl bir iş çıkardığımızı görün" lead={sample ? "Aşağıdakiler tipik proje kurgularımızı anlatan örnek çalışmalardır. Tamamlanan projeler eklendikçe burası gerçek işlerle dolacak." : "Tamamladığımız projelerden seçkiler."} crumbs={[{ name: "Projeler" }]} />
      <section className="container-x py-14 grid md:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 100} className="card-hard flex flex-col h-full overflow-hidden">
            <div className={`relative w-full aspect-[3/2] ${p.branch === "it" ? "bg-primary" : "bg-accent-soft"}`}>{projectImage(p.slug) && <Image src={projectImage(p.slug)!} alt={p.title} fill sizes={IMAGE_SIZES.card3} loading="lazy" className="object-cover object-center" />}</div>
            <div className="p-6">
              <h2 className="text-lg font-bold clamp-1">{p.title}</h2>
              <div className="mt-2 text-xs text-muted">{p.tags.join("  ·  ")}</div>
              <p className="mt-3 text-sm text-body clamp-2 min-h-[2.7rem]">{p.summary}</p>
            </div>
          </Reveal>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
