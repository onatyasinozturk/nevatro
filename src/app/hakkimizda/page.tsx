import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";
import Image from "next/image";
import { img, bannerImage } from "@/lib/images";

export const metadata: Metadata = { title: "Hakkımızda", description: `${site.name}: dijital ve IT çözümlerini tek noktadan sunan İstanbul merkezli teknoloji firması.` };

export default function Page() {
  const photo = img("hakkimizda");
  return (
    <>
      <PageHeader kicker="Hakkımızda" title="Dijital ve teknik tarafı aynı ekipten alın" lead="Çoğu işletme web sitesi için bir ajansla, kamera için bir teknik servisle, network için başka biriyle uğraşır. Biz bu ikisini aynı çatı altında topladık." crumbs={[{ name: "Hakkımızda" }]} image={bannerImage("hizmetler")} />
      {photo && (<section className="container-x pt-14"><Reveal className="relative h-[320px] md:h-[440px] rounded-2xl overflow-hidden"><Image src={photo} alt={`${site.name} ekibi`} fill sizes="100vw" className="object-cover" /></Reveal></section>)}
      <section className="container-x py-14 grid lg:grid-cols-[1fr_1fr] gap-12">
        <Reveal className="prose-x">
          <h2>Kimiz?</h2>
          <p>{site.name}, {site.district}/{site.city} merkezli bir teknoloji ve teknik hizmet firmasıdır. {site.experienceYears} yılı aşkın saha tecrübemiz var. Kurucu ekibin arkasında e-ticaret ve pazaryeri operasyonunda yıllara dayanan saha tecrübesi, teknik tarafta ise network, bilgisayar sistemleri ve güvenlik kurulumlarında birikim var.</p>
          <h2>Neye inanıyoruz?</h2>
          <p>Bir işletmenin dijital görünürlüğü ile teknik altyapısı birbirinden ayrı düşünülemez. Web siteniz güzel ama ofisteki internet sürekli kesiliyorsa, ya da kameralarınız var ama Google&apos;da sizi kimse bulamıyorsa iş yarım kalır. Biz iki tarafı da bilen tek muhatap olmayı hedefliyoruz.</p>
          <h2>Nasıl çalışıyoruz?</h2>
          <p>Önce dinliyoruz. Yerinde ya da online keşifle ihtiyacı netleştiriyor, kalem kalem teklif veriyor, planlı günde kuruyor ve sonrasında yanınızda kalıyoruz. Sürprizsiz, belgeli, ölçülebilir.</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-4 self-start">
          {[
            ["Tek noktadan yönetim", "Dijital ve teknik süreçlerinizi farklı firmalara bölmek zorunda kalmazsınız."],
            ["İşletme odaklı çözümler", "Sadece sistem kurmuyoruz; operasyonunuza uygun yapı kuruyoruz."],
            ["Ölçeklenebilir altyapı", "Büyüdüğünüzde de kullanılabilecek yapılara odaklanıyoruz."],
            ["Sürekli destek", "Kurulum sonrası teknik destek ve geliştirme süreçleri."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 100} className="card p-6"><h3 className="font-bold">{t}</h3><p className="mt-2 text-sm text-body">{d}</p></Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
