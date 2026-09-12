import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import DestekCard from "@/components/DestekCard";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { destek } from "@/data/destek";
import { bannerImage, destekImage } from "@/lib/images";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Destek Merkezi",
  description: `Bilgisayar yavaşlaması, internet kopması, veri kaybı, kamera arızası ve daha fazlası. Yaşadığınız sorunu seçin, ${site.name} nasıl çözdüğünü anlatsın.`,
};

export default function Page() {
  return (
    <>
      <PageHeader kicker="Destek Merkezi" title="Sorununuz hangisi?"
        lead="Hizmet adı aramaya gerek yok. Aşağıdan yaşadığınız durumu seçin; belirtileri, nasıl teşhis ettiğimizi ve ne yaptığımızı anlatalım."
        crumbs={[{ name: "Destek Merkezi" }]} image={bannerImage("destek")} />
      <section className="container-x py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {destek.map((d, i) => <Reveal key={d.slug} delay={(i % 4) * 80}><DestekCard d={d} image={destekImage(d.slug)} /></Reveal>)}
      </section>
      <CtaBand />
    </>
  );
}
