import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/data/site";
import { branches, byBranch } from "@/data/services";
import { provinces } from "@/lib/locations";
import { destek } from "@/data/destek";

export default function Footer() {
  const ist = provinces.find((p) => p.slug === "istanbul");
  const areaLinks = site.serviceArea
    .map((n) => ist?.districts.find((d) => d.name === n))
    .filter(Boolean) as { name: string; slug: string }[];
  return (
    <footer className="bg-primary text-white/70 text-sm">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-[34ch] leading-relaxed">{site.description}</p>
          <div className="mt-5 text-xs leading-6">
            {site.hours.map((h) => <div key={h.d} className="flex justify-between max-w-[15rem]"><span>{h.d}</span><span className="text-white">{h.h}</span></div>)}
          </div>
          <div className="mt-4 text-xs leading-7">
            {site.legalName && !site.legalName.startsWith("[") ? <>{site.legalName}<br /></> : null}{site.addressFull}<br />
            <a href={site.phoneHref} className="text-white">{site.phone}</a> — <a href={`mailto:${site.email}`} className="text-white">{site.email}</a>
          </div>
        </div>
        <div>
          <h4 className="text-white text-xs font-bold mb-3">{branches.dijital.title}</h4>
          {byBranch("dijital").map((s) => <Link key={s.slug} href={`/hizmetler/${s.slug}`} className="block py-1 hover:text-white">{s.title}</Link>)}
        </div>
        <div>
          <h4 className="text-white text-xs font-bold mb-3">{branches.it.title}</h4>
          {byBranch("it").map((s) => <Link key={s.slug} href={`/hizmetler/${s.slug}`} className="block py-1 hover:text-white">{s.title}</Link>)}
        </div>
        <div>
          <h4 className="text-white text-xs font-bold mb-3">Destek Merkezi</h4>
          {destek.slice(0, 5).map((d) => <Link key={d.slug} href={`/destek/${d.slug}`} className="block py-1 hover:text-white">{d.title}</Link>)}
          <Link href="/destek" className="block py-1 text-accent">Tüm konular</Link>
        </div>
        <div>
          <h4 className="text-white text-xs font-bold mb-3">Hizmet Bölgeleri</h4>
          {areaLinks.map((d) => <Link key={d.slug} href={`/hizmet-bolgeleri/istanbul/${d.slug}`} className="block py-1 hover:text-white">{d.name}</Link>)}
          <Link href="/hizmet-bolgeleri" className="block py-1 text-accent">Tüm bölgeler</Link>
        </div>
        <div>
          <h4 className="text-white text-xs font-bold mb-3">Kurumsal</h4>
          <Link href="/hakkimizda" className="block py-1 hover:text-white">Hakkımızda</Link>
          <Link href="/sektorler" className="block py-1 hover:text-white">Sektörler</Link>
          <Link href="/projeler" className="block py-1 hover:text-white">Projeler</Link>
          <Link href="/blog" className="block py-1 hover:text-white">Blog</Link>
          <Link href="/iletisim" className="block py-1 hover:text-white">İletişim</Link>
          <Link href="/kvkk" className="block py-1 hover:text-white">KVKK</Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-4 flex flex-wrap justify-between gap-2 text-xs text-white/50">
          <span>© {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.</span>
          {site.taxOffice && !site.taxOffice.startsWith("[") ? <span>{site.taxOffice} — {site.taxNo}</span> : <span />}
        </div>
      </div>
    </footer>
  );
}
