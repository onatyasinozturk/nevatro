import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";

export default function PageHeader({ kicker, title, lead, crumbs, image }:
  { kicker?: string; title: string; lead?: string; crumbs?: { name: string; href?: string }[]; image?: string | null }) {
  if (image) {
    return (
      <div className="relative bg-primary text-white overflow-hidden">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        <div className="container-x relative py-16 md:py-24">
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
