import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "İletişim — Teklif Al", description: "Ücretsiz keşif ve teklif için bize ulaşın. Telefon, WhatsApp veya form." };

export default function Page() {
  return (
    <>
      <PageHeader kicker="İletişim" title="Projenizi konuşalım" lead="Dijital büyüme, e-ticaret veya teknik altyapı ihtiyacınızı anlatın. Genellikle aynı gün dönüyoruz." crumbs={[{ name: "İletişim" }]} />
      <section className="container-x py-14 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
        <Reveal>
          <div className="card divide-y divide-line">
            <a href={site.phoneHref} className="block p-6 hover:bg-bg"><div className="text-xs font-bold text-muted">Telefon</div><div className="mt-1 font-display font-semibold text-lg text-primary">{site.phone}</div></a>
            <a href={site.whatsapp} target="_blank" rel="noopener" className="block p-6 hover:bg-bg"><div className="text-xs font-bold text-muted">WhatsApp</div><div className="mt-1 font-display font-semibold text-lg text-primary">Mesaj gönderin</div></a>
            <a href={`mailto:${site.email}`} className="block p-6 hover:bg-bg"><div className="text-xs font-bold text-muted">E-posta</div><div className="mt-1 font-display font-semibold text-lg text-primary">{site.email}</div></a>
            <div className="p-6"><div className="text-xs font-bold text-muted">Adres</div><div className="mt-1 text-primary">{site.address}</div><div className="mt-2 text-sm text-muted">Yerinde servis: {site.serviceArea.join(", ")} ve çevresi</div></div>
          </div>
        </Reveal>
        <Reveal delay={120}><ContactForm /></Reveal>
      </section>
    </>
  );
}
