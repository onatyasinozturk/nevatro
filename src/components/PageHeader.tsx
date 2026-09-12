import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";
import { IMAGE_SIZES } from "@/lib/image-sizes";

/**
 * Sayfa üstü kapak. Görsel ARKA PLAN olarak durur.
 * Yükseklik breakpoint başına SABİT — yüklenen dosyanın ölçüsü
 * yüksekliği etkilemez, dolayısıyla layout kaymaz.
 * Görsel object-cover + object-center ile doldurur; esnemez.
 * sizes=100vw olduğu için tarayıcı 1600px varyantını çeker → pikselleşme yok.
 */
export default function PageHeader({ kicker, title, lead, crumbs, image }:
  { kicker?: string; title: string; lead?: string; crumbs?: { name: string; href?: string }[]; image?: string | null }) {
  if (image) {
    return (
      <div className="relative bg-primary text-white overflow-hidden min-h-[360px] md:min-h-[420px] lg:min-h-[460px] flex items-center">
        <Image src={image} alt="" fill priority sizes={IMAGE_SIZES.full} className="object-cover object-center" />
        <div className="absolute inset-0 bg-primary/75 lg:bg-gradient-to-r lg:from-primary lg:via-primary/80 lg:to-primary/35" />
        <div className="container-x relative z-10 py-14 md:py-16 w-full">
          {crumbs && <div className="[&_a]:text-white/70 [&_span]:text-white/70 [&_.text-primary]:text-white"><Breadcrumbs items={crumbs} /></div>}
          {kicker && <div className="kicker text-it">{kicker}</div>}
          <h1 className="text-4xl md:text-5xl font-bold max-w-[22ch] text-white">{title}</h1>
          {lead && <p className="mt-5 text-lg text-white/80 max-w-[60ch]">{lead}</p>}
        </div>
      </div>
    );
  }
  return (
    <div className="bg-surface border-b border-line">
      <div className="container-x py-12 md:py-16">
        {crumbs && <Breadcrumbs items={crumbs} />}
        {kicker && <div className="kicker">{kicker}</div>}
        <h1 className="text-4xl md:text-5xl font-bold max-w-[22ch]">{title}</h1>
        {lead && <p className="mt-5 text-lg text-body max-w-[60ch]">{lead}</p>}
      </div>
    </div>
  );
}
