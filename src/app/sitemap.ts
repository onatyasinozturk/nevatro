import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { branches, services } from "@/data/services";
import { sectors } from "@/data/sectors";
import { getAllPosts } from "@/lib/markdown";
import { provinces } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${site.url}${p}`;
  const now = new Date();
  return [
    { url: u("/"), lastModified: now, priority: 1 },
    ...["/hizmetler", "/sektorler", "/projeler", "/hakkimizda", "/blog", "/hizmet-bolgeleri", "/iletisim"].map((p) => ({ url: u(p), lastModified: now, priority: 0.8 })),
    ...Object.values(branches).map((b) => ({ url: u(`/hizmetler/${b.slug}`), lastModified: now, priority: 0.9 })),
    ...services.map((s) => ({ url: u(`/hizmetler/${s.slug}`), lastModified: now, priority: 0.9 })),
    ...sectors.map((s) => ({ url: u(`/sektorler/${s.slug}`), lastModified: now, priority: 0.7 })),
    ...getAllPosts().map((p) => ({ url: u(`/blog/${p.slug}`), lastModified: p.date ? new Date(p.date) : now, priority: 0.6 })),
    ...provinces.flatMap((p) => [
      { url: u(`/hizmet-bolgeleri/${p.slug}`), lastModified: now, priority: 0.7 },
      ...p.districts.map((d) => ({ url: u(`/hizmet-bolgeleri/${p.slug}/${d.slug}`), lastModified: now, priority: site.serviceArea.includes(d.name) ? 0.7 : 0.5 })),
    ]),
  ];
}
