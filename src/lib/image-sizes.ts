/**
 * GÖRSEL ÖLÇÜ SİSTEMİ — tek kaynak.
 * Bu dosya bilerek `node:fs` kullanmaz; hem sunucu hem client
 * bileşenlerinden güvenle import edilebilir.
 *
 * TEK MASTER DOSYA İLKESİ
 * Her görsel için tek bir yüksek çözünürlüklü dosya yüklenir
 * (1600x1067, 3:2). Next.js bu dosyadan 480/768/1200/1600 varyantlarını
 * ve AVIF/WebP formatlarını üretir; tarayıcı ekrana göre doğru olanı
 * indirir. Aynı dosya hem anasayfa kartında hem detay sayfasının kapak
 * görselinde kullanılır — detayda pikselleşmez.
 *
 * Yeni bir görsel alanı eklerken buraya anahtar ekle, elle sizes yazma.
 */
export const IMAGE_SIZES = {
  /** 4'lü ızgaradaki kart görseli */
  card: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px",
  /** 3'lü ızgara (projeler, blog) */
  card3: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px",
  /** Tam genişlik kapak / banner */
  full: "100vw",
  /** Hero'nun sağ yarısı */
  heroHalf: "(max-width: 1024px) 100vw, 52vw",
  /** Saha galerisi kareleri */
  gallery: "(max-width: 768px) 50vw, 320px",
} as const;

/** Proje geneli görsel standardı. README ile aynı değerler. */
export const MASTER_IMAGE = { width: 1600, height: 1067, ratio: "3 / 2" } as const;
