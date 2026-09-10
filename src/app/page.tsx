import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroVisual from "@/components/HeroVisual";
import ServiceCard from "@/components/ServiceCard";
import ProblemFinder from "@/components/ProblemFinder";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";
import { branches, byBranch, services } from "@/data/services";
import { projects } from "@/data/projects";
import { provinces, locative } from "@/lib/locations";

const why = [
  { t: "Tek noktadan yönetim", d: "Dijital ve teknik süreçlerinizi farklı firmalara bölmek zorunda kalmazsınız." },
  { t: "İşletme odaklı çözümler", d: "Sadece sistem kurmuyoruz; operasyonunuza uygun yapı kuruyoruz." },
  { t: "Ölçeklenebilir altyapı", d: "Bugünün ihtiyacına değil, büyüdüğünüzde de kullanılabilecek yapılara odaklanıyoruz." },
  { t: "Sürekli destek", d: "Kurulum sonrası teknik destek ve geliştirme süreçleri." },
];
const steps = [
  { n: "01", t: "İhtiyaç Analizi", d: "Yerinde ya da online keşif. Mevcut durumu ve hedefi netleştiriyoruz." },
  { n: "02", t: "Planlama", d: "Kalem kalem teklif, zaman planı ve alternatifler." },
  { n: "03", t: "Kurulum / Uygulama", d: "Planlı günde, işinizi aksatmadan. Teslim tutanaklı." },
  { n: "04", t: "Destek & Geliştirme", d: "Bakım, izleme ve büyüdükçe geliştirme." },
];

export default function Home() {
  const ist = provinces.find((p) => p.slug === "istanbul");
  const area = site.serviceArea.map((n) => ist?.districts.find((d) => d.name === n)).filter(Boolean) as { name: string; slug: string }[];
  const grid = ["web-tasarim", "e-ticaret", "google-ads", "seo", "kurumsal-it", "network-altyapi", "kamera-alarm", "teknik-destek"]
    .map((s) => services.find((x) => x.slug === s)!);

  return (
    <>
      {/* HERO */}
      <section className="bg-surface border-b border-line overflow-hidden">
        <div className="container-x grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center py-16 md:py-24">
          <div>
            <h1 className="text-[2.5rem] md:text-[3.4rem] font-extrabold leading-[1.05]">
              <span className="hero-line"><span style={{ "--d": "0ms" } as React.CSSProperties}>Dijitalde büyüyün.</span></span>
              <span className="hero-line"><span style={{ "--d": "140ms" } as React.CSSProperties}>Teknolojinizi güçlendirin.</span></span>
            </h1>
            <p className="fade-in mt-6 text-lg text-body max-w-[52ch]" style={{ "--d": "420ms" } as React.CSSProperties}>{site.description}</p>
            <div className="fade-in mt-8 flex flex-wrap gap-3" style={{ "--d": "560ms" } as React.CSSProperties}>
              <Link href={`/hizmetler/${branches.dijital.slug}`} className="btn btn-accent">Dijital Çözümler</Link>
              <Link href={`/hizmetler/${branches.it.slug}`} className="btn btn-outline">IT Çözümleri</Link>
            </div>
            <div className="fade-in mt-10 pt-6 border-t border-line flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted" style={{ "--d": "760ms" } as React.CSSProperties}>
              {["Web & E-Ticaret", "Google Ads", "IT Destek", "Network", "Kamera Sistemleri"].map((t) => <span key={t}>{t}</span>)}
            </div>
          </div>
          <div className="fade-in" style={{ "--d": "200ms" } as React.CSSProperties}><HeroVisual /></div>
        </div>
      </section>

      {/* İKİ KOL */}
      <section className="container-x py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-5">
          {(["dijital", "it"] as const).map((b, i) => (
            <Reveal key={b} delay={i * 120}>
              <Link href={`/hizmetler/${branches[b].slug}`} className={`card block p-8 md:p-10 h-full border-t-4 transition-colors hover:border-primary ${b === "it" ? "border-t-it" : "border-t-accent"}`}>
                <div className={`text-sm font-semibold ${b === "it" ? "text-it" : "text-accent"}`}>{b === "it" ? "IT Solutions" : "Digital"}</div>
                <h2 className="mt-3 text-3xl font-bold">{branches[b].claim}</h2>
                <p className="mt-3 text-body max-w-[46ch]">{branches[b].desc}</p>
                <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  {byBranch(b).map((s) => <li key={s.slug} className="flex items-center gap-2"><span className={`w-1.5 h-1.5 rounded-full ${b === "it" ? "bg-it" : "bg-accent"}`} />{s.title}</li>)}
                </ul>
                <span className="inline-block mt-7 font-display font-semibold text-primary underline-grow">{branches[b].title}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEDEN NEVATRO */}
      <section className="bg-surface border-y border-line">
        <div className="container-x py-16 md:py-20">
          <Reveal><div className="kicker">Neden {site.name}?</div><h2 className="text-3xl md:text-4xl font-bold max-w-[24ch]">Boş vaat değil, dört net avantaj</h2></Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {why.map((w, i) => (
              <Reveal key={w.t} delay={i * 100} className="border-l-2 border-accent pl-5">
                <h3 className="text-lg font-bold">{w.t}</h3>
                <p className="mt-2 text-sm text-body leading-relaxed">{w.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HİZMETLER GRID */}
      <section className="container-x py-16 md:py-20">
        <Reveal><div className="kicker">Hizmetler</div><h2 className="text-3xl md:text-4xl font-bold max-w-[24ch]">Tam olarak ne yapıyoruz?</h2></Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {grid.map((s, i) => <Reveal key={s.slug} delay={(i % 4) * 90}><ServiceCard s={s} /></Reveal>)}
        </div>
        <Reveal className="mt-6 text-sm"><Link href="/hizmetler" className="font-display font-semibold text-accent">Tüm hizmetler</Link></Reveal>
      </section>

      {/* SORUN BULUCU */}
      <section className="bg-surface border-y border-line">
        <div className="container-x py-16 md:py-20">
          <Reveal><div className="kicker">Nereden başlamalı?</div><h2 className="text-3xl md:text-4xl font-bold max-w-[24ch]">Sorununuzu seçin, doğru başlangıcı gösterelim</h2></Reveal>
          <Reveal className="mt-10" delay={120}><ProblemFinder /></Reveal>
        </div>
      </section>

      {/* PROJELER */}
      <section className="container-x py-16 md:py-20">
        <Reveal><div className="kicker">{projects.every((p) => !p.real) ? "Örnek Çalışmalar" : "Projeler"}</div><h2 className="text-3xl md:text-4xl font-bold max-w-[24ch]">Nasıl bir iş çıkardığımızı görün</h2></Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 110}>
              <Link href="/projeler" className="card block overflow-hidden group hover:border-primary transition-colors">
                <div className={`h-44 ${p.branch === "it" ? "bg-primary" : "bg-accent-soft"} relative`}>
                  <div className={`absolute inset-6 rounded-lg border ${p.branch === "it" ? "border-white/20" : "border-accent/30"}`} />
                  <div className={`absolute left-8 top-8 h-2 w-16 rounded ${p.branch === "it" ? "bg-it" : "bg-accent"}`} />
                  <div className={`absolute left-8 top-14 h-2 w-28 rounded ${p.branch === "it" ? "bg-white/30" : "bg-accent/30"}`} />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <div className="mt-2 text-xs text-muted">{p.tags.join("  ·  ")}</div>
                  <p className="mt-3 text-sm text-body">{p.summary}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NASIL ÇALIŞIYORUZ */}
      <section className="bg-surface border-y border-line">
        <div className="container-x py-16 md:py-20">
          <Reveal><div className="kicker">Nasıl çalışıyoruz?</div><h2 className="text-3xl md:text-4xl font-bold">Dört adım</h2></Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-0 card divide-y sm:divide-y-0 sm:divide-x divide-line">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120} className="p-7">
                <div className="font-display text-3xl font-extrabold text-accent">{s.n}</div>
                <h3 className="mt-3 text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-body">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BÖLGESEL */}
      <section className="container-x py-16 md:py-20 grid md:grid-cols-[1fr_1fr] gap-10 items-start">
        <Reveal>
          <div className="kicker">Hizmet bölgesi</div>
          <h2 className="text-3xl md:text-4xl font-bold max-w-[18ch]">{locative(site.city)} yerinde teknik destek</h2>
          <p className="mt-4 text-body max-w-[52ch]">{site.serviceArea.slice(0, 3).join(", ")} ve çevresinde bilgisayar, network ve güvenlik sistemleri için yerinde destek sağlıyoruz. Dijital hizmetlerde Türkiye geneline online çalışıyoruz.</p>
        </Reveal>
        <Reveal delay={120} className="flex flex-wrap gap-2">
          {area.map((d) => <Link key={d.slug} href={`/hizmet-bolgeleri/istanbul/${d.slug}`} className="px-4 py-2 rounded-lg bg-surface border border-line text-sm hover:border-primary hover:text-primary">{d.name}</Link>)}
          <Link href="/hizmet-bolgeleri" className="px-4 py-2 rounded-lg text-sm text-accent font-semibold">Tüm ilçeler</Link>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
