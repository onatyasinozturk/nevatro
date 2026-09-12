import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Tek master dosyadan üretilecek modern formatlar
    formats: ["image/avif", "image/webp"],
    // srcset bu listeden kurulur — tarayıcı ekrana göre birini seçer
    deviceSizes: [480, 640, 768, 1024, 1200, 1600, 1920],
    imageSizes: [200, 300, 400, 480],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
