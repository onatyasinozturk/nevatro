import fs from "node:fs";
import path from "node:path";

/** public/ altında dosya varsa "/img/..." yolunu, yoksa null döner. Sadece server component'te kullan. */
export function img(rel: string): string | null {
  for (const ext of ["jpg", "jpeg", "webp", "png"]) {
    const p = `/img/${rel}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", p))) return p;
  }
  return null;
}
export const heroImage = () => img("hero");
export const bannerImage = (name: string) => img(`banners/${name}`);
export const serviceImage = (slug: string) => img(`services/${slug}`);
export const projectImage = (slug: string) => img(`projects/${slug}`);

/** public/img/saha içindeki tüm fotoğraflar */
export function sahaImages(): string[] {
  const dir = path.join(process.cwd(), "public", "img", "saha");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => /\.(jpe?g|webp|png)$/i.test(f)).sort().map((f) => `/img/saha/${f}`);
}

export const destekImage = (slug: string) => img(`destek/${slug}`);
export const heroSlideImage = (n: number) => img(`hero-${n}`) ?? img("hero");
