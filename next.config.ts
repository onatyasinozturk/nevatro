import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Tek master dosyadan üretilecek modern formatlar (tarayıcı desteğine göre)
    formats: ["image/avif", "image/webp"],
    // Üretilecek responsive varyantlar — srcset bu listeden kurulur
    deviceSizes: [480, 640, 768, 1024, 1200, 1600, 1920],
    imageSizes: [160, 240, 280, 380, 480],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
