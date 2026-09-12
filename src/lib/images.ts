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

/**
 * MERKEZİ GÖRSEL ÖLÇÜ SİSTEMİ
 * ---------------------------------------------------------------
 * Tek master dosya ilkesi: her hizmet için TEK yüksek çözünürlüklü
 * kaynak tutulur (1600x1067, 3:2). Next.js bu tek dosyadan 480/768/
 * 1200/1600 varyantlarını ve AVIF/WebP formatlarını kendisi üretip
 * srcset olarak sunar; tarayıcı ekrana göre doğru olanı indirir.
 * Bu yüzden aynı dosya hem anasayfa kartında hem detay sayfasında
 * kullanılabilir, detayda pikselleşme olmaz.
 *
 * Aşağıdaki sizes değerleri, tarayıcının hangi varyantı seçeceğini
 * belirler. Yeni bir görsel alanı eklerken buraya bir anahtar ekle,
 * elle sizes yazma.
 */
export const IMAGE_SIZES = {
  /** 4'lü ızgaradaki kart görseli */
  card: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px",
  /** 3'lü ızgara (projeler, blog) */
  card3: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px",
  /** Hizmet detay sayfasındaki ana görsel */
  detail: "(max-width: 1024px) 100vw, 760px",
  /** Tam genişlik banner / hero */
  full: "100vw",
  /** Hero'nun sağ yarısı */
  heroHalf: "(max-width: 1024px) 100vw, 52vw",
  /** Saha galerisi kareleri */
  gallery: "(max-width: 768px) 50vw, 300px",
} as const;

/** Proje geneli görsel standardı — README ve doküman için tek kaynak. */
export const MASTER_IMAGE = { width: 1600, height: 1067, ratio: "3 / 2" } as const;
