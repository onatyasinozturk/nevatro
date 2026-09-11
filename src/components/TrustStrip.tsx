import { site } from "@/data/site";

export default function TrustStrip() {
  const items = [
    { n: `${site.experienceYears}+ yıl`, l: "saha tecrübesi" },
    { n: "Ücretsiz", l: "yerinde keşif" },
    { n: "Aynı gün", l: "dönüş" },
    { n: site.serviceArea.length + "+ ilçe", l: "yerinde servis" },
  ];
  return (
    <div className="bg-surface border-b border-line">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 divide-x divide-line">
        {items.map((it) => (
          <div key={it.l} className="py-5 px-5 first:pl-0 text-center lg:text-left">
            <div className="font-display font-bold text-xl text-primary">{it.n}</div>
            <div className="text-xs text-muted mt-0.5">{it.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
