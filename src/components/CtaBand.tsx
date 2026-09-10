import { site } from "@/data/site";
export default function CtaBand({ title = "İşletmeniz için doğru çözümü birlikte belirleyelim.", text = "Dijital büyüme, e-ticaret veya teknik altyapı ihtiyacınızı bize anlatın. Keşif ve teklif ücretsiz." }: { title?: string; text?: string }) {
  return (
    <section className="bg-primary text-white">
      <div className="container-x py-16 md:py-20 grid md:grid-cols-[1.2fr_.8fr] gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          <p className="mt-4 text-white/70 max-w-[50ch]">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a href="/iletisim" className="btn btn-accent">Teklif Al</a>
          <a href={site.whatsapp} target="_blank" rel="noopener" className="btn btn-light">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
