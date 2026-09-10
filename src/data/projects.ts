/** Gerçek proje yoksa "Örnek Çalışmalar" olarak gösterilir. Sahte logo yok. */
export interface Project { slug: string; title: string; tags: string[]; summary: string; branch: "dijital" | "it"; real: boolean }
export const projects: Project[] = [
  { slug: "e-ticaret-sitesi-kurulumu", title: "E-Ticaret Sitesi Kurulumu", tags: ["Tasarım", "Ürün Aktarımı", "Pazaryeri Entegrasyonu"], summary: "Yüzlerce ürünlü bir mağaza için ödeme, kargo ve Trendyol entegrasyonuyla çalışan e-ticaret sitesi.", branch: "dijital", real: false },
  { slug: "kurumsal-network-kurulumu", title: "Kurumsal Network Kurulumu", tags: ["Network", "Güvenlik", "Kamera"], summary: "Orta ölçekli bir ofis için yapısal kablolama, kurumsal Wi-Fi ve IP kamera sisteminin tek projede kurulumu.", branch: "it", real: false },
  { slug: "google-ads-yonetimi", title: "Google Ads Yönetimi", tags: ["Arama Ağı", "Dönüşüm Takibi", "Optimizasyon"], summary: "Yerel bir hizmet firması için dönüşüm takibi kurulup başvuru başına maliyetin düşürülmesi.", branch: "dijital", real: false },
];
