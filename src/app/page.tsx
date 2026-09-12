import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ScrollRail from "@/components/ScrollRail";
import HeroSlider from "@/components/HeroSlider";
import StatsCascade from "@/components/StatsCascade";
import ProcessSteps from "@/components/ProcessSteps";
import ServiceCard from "@/components/ServiceCard";
import DestekCard from "@/components/DestekCard";
import SahaGallery from "@/components/SahaGallery";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";
import { branches, byBranch, services } from "@/data/services";
import { destek } from "@/data/destek";
import { sectors } from "@/data/sectors";
import { provinces, locative } from "@/lib/locations";
import { heroSlideImage, serviceImage, projectImage, sahaImages, img, IMAGE_SIZES } from "@/lib/images";
import { projects } from "@/data/projects";


const faq = [
  { q: "Keşif ücretli mi?", a: `Hayır. ${site.city} içinde yerinde keşif ve teklif ücretsiz, teklifi kabul etme zorunluluğu yok.` },
  { q: "Ne kadar sürede geliyorsunuz?", a: `${site.serviceArea.slice(0, 3).join(", ")} ve çevresinde çoğu talebe aynı gün dönüyoruz. Diğer ilçelerde genellikle 1-2 iş günü içinde keşif planlıyoruz.` },
  { q: "Uzaktan da destek veriyor musunuz?", a: "Evet. Yazılım kaynaklı sorunların büyük kısmını uzaktan bağlanarak, siz beklemeden çözüyoruz. Donanım arızalarında yerinde müdahale gerekir." },
  { q: "Faturalı ve sözleşmeli çalışıyor musunuz?", a: "Evet. Tüm işlerimiz faturalı; kurumsal müşterilerimizle bakım sözleşmesiyle ilerliyoruz." },
  { q: "Bakım sözleşmesi zorunlu mu?", a: "Hayır, tek seferlik iş de yapıyoruz. Ancak düzenli kontrol arızayı büyümeden yakaladığı için uzun vadede daha ucuza geliyor." },
  { q: "Hem web sitesi hem teknik servis aynı firmadan olur mu?", a: "Bizde oluyor, zaten kuruluş sebebimiz bu. Ofisin internetini kuran ekiple sitenizi yapan ekip aynı; iki tarafı da bilen tek muhatap." },
];

export default function Home() {
  const ist = provinces.find((p) => p.slug === "istanbul");
  const area = site.serviceArea.map((n) => ist?.districts.find((d) => d.name === n)).filter(Boolean) as { name: string; slug: string }[];
  const saha = sahaImages();
  const about = img("hakkimizda");
  const grid = ["kamera-alarm", "network-altyapi", "kurumsal-it", "bilgisayar-sistemleri", "web-tasarim", "e-ticaret", "google-ads", "pazaryeri-danismanligi"]
    .map((s) => services.find((x) => x.slug === s)!);

  const slides = [
    { kicker: "Kurumsal IT & Network", title: "Ofisiniz dursun diye değil, hiç durmasın diye kuruyoruz.", text: "Yapısal kablolama, kurumsal Wi-Fi ve IT desteği. Kurulumdan aylık bakıma tek muhatap.", href: `/hizmetler/${branches.it.slug}`, cta: "IT Çözümleri", image: heroSlideImage(1) },
    { kicker: "Teknik Servis", title: "Bilgisayar arızasında bekleyen iş, kaybedilen paradır.", text: `${site.district} ve çevresinde yerinde teknik servis, uzaktan destek ve periyodik bakım.`, href: "/destek", cta: "Destek Merkezi", image: heroSlideImage(2) },
    { kicker: "Dijital & E-Ticaret", title: "Müşteri sizi arıyor. Bulabiliyor mu?", text: "Web sitesi, e-ticaret, Google Ads ve pazaryeri danışmanlığı — sahadan gelen gerçek operasyon tecrübesiyle.", href: `/hizmetler/${branches.dijital.slug}`, cta: "Dijital Çözümler", image: heroSlideImage(3) },
  ];

  return (
    <>
      <ScrollRail />
      <HeroSlider slides={slides} />
      <ProcessSteps />

      {/* HİZMETLER */}
      <section className="container-x py-16 md:py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div><div className="kicker">Hizmetler</div><h2 className="text-3xl md:text-4xl font-bold">{site.name} ne sağlıyor?</h2></div>
          <Link href="/hizmetler" className="font-display font-semibold text-accent shrink-0">Tüm hizmetler →</Link>
        </Reveal>
        <div className="mt-9 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {grid.map((s, i) => <Reveal key={s.slug} delay={(i % 4) * 80}><ServiceCard s={s} image={serviceImage(s.slug)} priority={i < 4} /></Reveal>)}
        </div>
      </section>

      {/* İKİ KOL */}
      <section className="bg-surface border-y border-line">
        <div className="container-x py-16 md:py-20">
          <Reveal><div className="kicker">İki ana kol</div><h2 className="text-3xl md:text-4xl font-bold max-w-[24ch]">Teknik tarafı da dijital tarafı da aynı ekipten alın</h2></Reveal>
          <div className="mt-9 grid md:grid-cols-2 gap-5">
            {(["it", "dijital"] as const).map((b, i) => (
              <Reveal key={b} delay={i * 120}>
                <Link href={`/hizmetler/${branches[b].slug}`} className={`card block p-8 md:p-10 h-full border-t-4 transition-colors hover:border-primary ${b === "it" ? "border-t-it" : "border-t-accent"}`}>
                  <div className={`text-sm font-semibold ${b === "it" ? "text-it" : "text-accent"}`}>{branches[b].title}</div>
                  <h3 className="mt-3 text-2xl md:text-3xl font-bold">{branches[b].claim}</h3>
                  <p className="mt-3 text-body max-w-[46ch]">{branches[b].desc}</p>
                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    {byBranch(b).map((s) => <li key={s.slug} className="flex items-center gap-2"><span className={`w-1.5 h-1.5 rounded-full ${b === "it" ? "bg-it" : "bg-accent"}`} />{s.title}</li>)}
                  </ul>
                  <span className="inline-block mt-7 font-display font-semibold text-primary underline-grow">Detaylı bilgi</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESTEK MERKEZİ — sorun odaklı */}
      <section className="container-x py-16 md:py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="kicker">Destek Merkezi</div>
            <h2 className="text-3xl md:text-4xl font-bold max-w-[22ch]">Sorununuz hangisi?</h2>
            <p className="mt-3 text-body max-w-[52ch]">Hizmet listesi okumaya gerek yok. Yaşadığınız durumu seçin, nasıl çözdüğümüzü anlatalım.</p>
          </div>
          <Link href="/destek" className="font-display font-semibold text-accent shrink-0">Tümünü gör →</Link>
        </Reveal>
        <div className="mt-9 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {destek.map((d, i) => <Reveal key={d.slug} delay={(i % 4) * 80}><DestekCard d={d} /></Reveal>)}
        </div>
      </section>

      <SahaGallery images={saha} />

      {/* HAKKIMIZDA ŞERİDİ */}
      <section className="bg-surface border-y border-line">
        <div className="container-x py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="relative w-full aspect-[3/2] overflow-hidden bg-primary border border-line">
            {about
              ? <Image src={about} alt={`${site.name} ekibi`} fill sizes={IMAGE_SIZES.card3} loading="lazy" className="object-cover object-center" />
              : <div className="absolute inset-0 grid place-items-center text-white/30 text-sm">img/hakkimizda.jpg</div>}
          </Reveal>
          <Reveal delay={120}>
            <div className="kicker">Hakkımızda</div>
            <h2 className="text-3xl md:text-4xl font-bold max-w-[20ch]">Tek muhatap, iki uzmanlık</h2>
            <p className="mt-5 text-body max-w-[52ch]">Çoğu işletme web sitesi için bir ajansla, kamera için bir teknik servisle, network için başka biriyle uğraşır. Üç firmanın birbirini suçladığı yerde iş durur. {site.name} bu ikisini aynı çatı altında topladı.</p>
            <p className="mt-4 text-body max-w-[52ch]">{site.district} merkezli çalışıyor, {site.city} genelinde yerinde servis veriyoruz. Dijital tarafta ise konumdan bağımsız, online.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/hakkimizda" className="btn btn-outline">Bizi tanıyın</Link>
              <a href={site.phoneHref} className="btn btn-accent">{site.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsCascade />

      {/* SEKTÖRLER */}
      <section className="bg-surface border-y border-line">
        <div className="container-x py-16 md:py-20">
          <Reveal>
            <div className="kicker">Sektörler</div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">Kime hizmet veriyoruz?</h2>
              <Link href="/sektorler" className="font-display font-semibold text-accent">Tümü →</Link>
            </div>
          </Reveal>
          <div className="mt-9 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-line">
            {sectors.map((sc, i) => (
              <Reveal key={sc.slug} delay={(i % 4) * 60}>
                <Link href={`/sektorler/${sc.slug}`} className="group flex flex-col justify-between h-full p-6 border-r border-b border-line bg-surface hover:bg-bg transition-colors">
                  <div className="font-display font-bold text-primary">{sc.name}</div>
                  <p className="mt-2 text-sm text-body clamp-2 min-h-[2.7rem]">{sc.problem}</p>
                  <span className="mt-4 text-sm font-display font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">Çözümler →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJELER */}
      <section className="container-x py-16 md:py-20">
        <Reveal><div className="kicker">{projects.every((p) => !p.real) ? "Örnek Çalışmalar" : "Projeler"}</div><h2 className="text-3xl md:text-4xl font-bold">Nasıl bir iş çıkardığımızı görün</h2></Reveal>
        <div className="mt-9 grid md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <Link href="/projeler" className="card-hard group flex flex-col h-full overflow-hidden">
                <div className="relative w-full aspect-[3/2] shrink-0 bg-primary overflow-hidden border-b border-line">
                  {projectImage(p.slug) && <Image src={projectImage(p.slug)!} alt={p.title} fill sizes={IMAGE_SIZES.card3} loading="lazy" className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-500" />}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold clamp-1">{p.title}</h3>
                  <div className="mt-2 text-xs text-muted clamp-1">{p.tags.join("  ·  ")}</div>
                  <p className="mt-3 text-sm text-body clamp-2 min-h-[2.7rem]">{p.summary}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SSS */}
      <section className="bg-surface border-y border-line">
        <div className="container-x py-16 md:py-20 grid lg:grid-cols-[.8fr_1.2fr] gap-10 items-start">
          <Reveal>
            <div className="kicker">Sık sorulanlar</div>
            <h2 className="text-3xl md:text-4xl font-bold max-w-[16ch]">Aklınızdaki soru burada yoksa arayın</h2>
            <a href={site.phoneHref} className="btn btn-accent mt-6">{site.phone}</a>
          </Reveal>
          <Reveal delay={120}><Faq items={faq} /></Reveal>
        </div>
      </section>

      {/* BÖLGE */}
      <section className="container-x py-16 md:py-20 grid md:grid-cols-2 gap-10 items-start">
        <Reveal>
          <div className="kicker">Hizmet bölgesi</div>
          <h2 className="text-3xl md:text-4xl font-bold max-w-[18ch]">{locative(site.city)} yerinde teknik destek</h2>
          <p className="mt-4 text-body max-w-[52ch]">{site.serviceArea.slice(0, 4).join(", ")} ve çevresinde bilgisayar, network ve güvenlik sistemleri için yerinde servis. Dijital hizmetlerde Türkiye geneline online çalışıyoruz.</p>
        </Reveal>
        <Reveal delay={120} className="flex flex-wrap gap-2">
          {area.map((d) => <Link key={d.slug} href={`/hizmet-bolgeleri/istanbul/${d.slug}`} className="px-4 py-2 bg-surface border border-line text-sm hover:border-primary hover:text-primary">{d.name}</Link>)}
          <Link href="/hizmet-bolgeleri" className="px-4 py-2 text-sm text-accent font-semibold">Tüm ilçeler</Link>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
