export type Branch = "dijital" | "it";

export interface Service {
  slug: string;
  branch: Branch;
  title: string;
  short: string;          // kartta 2 satır
  intro: string;          // sayfa girişi
  bullets: string[];      // ne yapıyoruz
  outcomes: string[];     // ne elde edersiniz
  faq: { q: string; a: string }[];
}

export const branches: Record<Branch, { slug: string; name: string; title: string; claim: string; desc: string }> = {
  dijital: {
    slug: "dijital-cozumler",
    name: "Dijital",
    title: "Dijital Çözümler",
    claim: "Markanızı dijitalde büyütün.",
    desc: "Web sitesi, e-ticaret, SEO, Google Ads ve pazaryeri yönetimi — müşteri sizi bulsun, satış artsın.",
  },
  it: {
    slug: "it-cozumleri",
    name: "IT",
    title: "IT Çözümleri",
    claim: "Altyapınızı güvenli ve kesintisiz tutun.",
    desc: "Kurumsal IT, network, bilgisayar sistemleri, kamera & alarm ve yerinde teknik destek.",
  },
};

export const services: Service[] = [
  {
    slug: "web-tasarim", branch: "dijital", title: "Web Tasarım",
    short: "Hızlı açılan, mobil uyumlu ve Google'da bulunabilen kurumsal web siteleri.",
    intro: "Sektörünüze uygun, hızlı ve mobil uyumlu bir web sitesi kuruyoruz. Amaç güzel görünmek değil; ziyaretçiyi arayan, teklif isteyen müşteriye çevirmek.",
    bullets: ["İhtiyaç analizi ve sayfa planı", "Özgün tasarım, mobil öncelikli", "SEO altyapısı ve hız optimizasyonu", "İletişim formu, WhatsApp, harita entegrasyonu", "Yayına alma ve Search Console kurulumu"],
    outcomes: ["Google'da bulunan, hızlı bir site", "Telefon ve form üzerinden ölçülebilir başvuru", "Kendinizin güncelleyebileceği içerik yapısı"],
    faq: [
      { q: "Ne kadar sürer?", a: "Kurumsal bir site içerik hazırsa genellikle 2-3 hafta içinde yayına alınır." },
      { q: "Hazır tema mı, özel tasarım mı?", a: "Özel tasarım. Hazır tema kullanmıyoruz; her site markanın kendi diliyle kurulur." },
    ],
  },
  {
    slug: "e-ticaret", branch: "dijital", title: "E-Ticaret Sistemleri",
    short: "Pazaryeri, ödeme ve ERP entegrasyonlarıyla satış altyapınızı kuruyoruz.",
    intro: "E-ticaret sitenizi ödeme, kargo, pazaryeri ve muhasebe entegrasyonlarıyla birlikte kuruyoruz. Sadece mağaza açmıyor, satış operasyonunu ayağa kaldırıyoruz.",
    bullets: ["Platform seçimi (Ticimax, ikas, Shopify, özel)", "Ürün aktarımı ve kategori yapısı", "Ödeme, kargo ve fatura entegrasyonu", "Pazaryeri bağlantısı (Trendyol, Hepsiburada)", "Kampanya ve dönüşüm kurgusu"],
    outcomes: ["Sipariş–kargo–fatura akışı çalışan bir mağaza", "Pazaryeriyle stok ve fiyat senkronu", "Reklama hazır, ölçümlenen bir yapı"],
    faq: [
      { q: "Hangi platformu önerirsiniz?", a: "Ürün sayısı, bütçe ve entegrasyon ihtiyacına göre değişir. Keşifte birlikte karar veriyoruz; çoğu KOBİ için Ticimax veya ikas yeterli." },
    ],
  },
  {
    slug: "pazaryeri-danismanligi", branch: "dijital", title: "Pazaryeri Danışmanlığı",
    short: "Trendyol ve Hepsiburada'da mağaza, ürün içeriği ve reklam yapınızı sahadan gelen tecrübeyle düzenliyoruz.",
    intro: "Pazaryerlerinde yıllarca gerçek operasyon yönetmiş bir ekiple çalışıyorsunuz. Mağaza puanı, ürün içeriği, reklam ve kampanya yapısını teoriden değil işin içinden biliyoruz.",
    bullets: ["Mağaza ve ürün içerik denetimi", "Kategori, başlık, görsel ve açıklama optimizasyonu", "Reklam (Trendyol Ads, Hepsiburada Ads) yönetimi", "Kampanya takvimi ve fiyatlama", "Operasyon: kargo, iade, puan yönetimi"],
    outcomes: ["Daha görünür ürünler, daha yüksek dönüşüm", "Reklam bütçesinin ölçülebilir kullanımı", "Mağaza puanının korunması"],
    faq: [
      { q: "Sadece Trendyol mu?", a: "Trendyol, Hepsiburada, Boyner ve Amazon TR. Pazaryeri seçiminde de destek oluyoruz." },
    ],
  },
  {
    slug: "seo", branch: "dijital", title: "SEO",
    short: "Sektörünüzdeki aramalarda kalıcı ve ölçülebilir görünürlük.",
    intro: "Teknik altyapı, içerik ve yerel SEO'yu birlikte ele alıyoruz. Amaç anahtar kelime listesi değil; sizi arayan müşterinin sizi bulması.",
    bullets: ["Teknik SEO denetimi ve düzeltme", "Anahtar kelime ve rakip analizi", "Hizmet ve lokasyon sayfaları", "İçerik planı ve blog", "Google İşletme Profili yönetimi"],
    outcomes: ["Organik trafikte düzenli artış", "Yerel aramalarda haritada görünürlük", "Reklama bağımlı olmayan başvuru kanalı"],
    faq: [
      { q: "Sonuç ne zaman görülür?", a: "Yerel SEO'da 4-8 hafta içinde hareket başlar; kalıcı sıralama için 3-6 aylık düzenli çalışma gerekir." },
    ],
  },
  {
    slug: "google-ads", branch: "dijital", title: "Google Ads",
    short: "Arama ağı, dönüşüm takibi ve düzenli optimizasyonla verimli reklam.",
    intro: "Reklam bütçenizi tıklama değil, telefon ve form başvurusu için harcıyoruz. Dönüşüm takibi kurulmadan reklam açmıyoruz.",
    bullets: ["Hesap ve dönüşüm takibi kurulumu", "Anahtar kelime ve negatif kelime yapısı", "Reklam metinleri ve uzantılar", "Landing page uyumu", "Haftalık optimizasyon ve aylık rapor"],
    outcomes: ["Başvuru başına maliyetin düşmesi", "Hangi kelimenin müşteri getirdiğini bilmek", "Şeffaf raporlama"],
    faq: [
      { q: "Minimum bütçe?", a: "Sektöre göre değişir; yerel hizmet firmaları için aylık 10-15 bin TL medya bütçesiyle anlamlı veri toplanabiliyor." },
    ],
  },
  {
    slug: "sosyal-medya", branch: "dijital", title: "Sosyal Medya",
    short: "Marka güveni ve yeniden temas için düzenli, ölçülü içerik yönetimi.",
    intro: "Sosyal medyayı takipçi sayısı için değil, güven ve hatırlanma için yönetiyoruz. Sektöre uygun içerik dili ve düzenli paylaşım.",
    bullets: ["İçerik planı ve takvim", "Görsel ve metin üretimi", "Meta reklamları (Instagram/Facebook)", "Aylık performans raporu"],
    outcomes: ["Düzenli ve tutarlı marka görünümü", "Reklamla desteklenen erişim", "Web ve WhatsApp'a yönlendirme"],
    faq: [],
  },
  {
    slug: "kurumsal-it", branch: "it", title: "Kurumsal IT",
    short: "Ofisinizin tüm IT sürecini planlıyor, kuruyor ve yönetiyoruz.",
    intro: "Bilgisayar, sunucu, yedekleme, e-posta ve kullanıcı yönetimi — işletmenizin IT tarafını tek muhatapla yürütüyoruz.",
    bullets: ["IT envanteri ve ihtiyaç analizi", "Kullanıcı, e-posta ve lisans yönetimi", "Yedekleme ve veri güvenliği", "Sunucu / NAS kurulumu", "Aylık bakım ve raporlama"],
    outcomes: ["Arızada işin durmaması", "Verinin güvende ve yedekli olması", "Sabit aylık bütçe, sürprizsiz IT"],
    faq: [
      { q: "Sözleşme zorunlu mu?", a: "Hayır; tek seferlik kurulum da yapıyoruz. Ancak kurumsal müşterilerin çoğu aylık bakım sözleşmesini tercih ediyor." },
    ],
  },
  {
    slug: "network-altyapi", branch: "it", title: "Network & Altyapı",
    short: "Yapısal kablolama, network ve Wi-Fi ile kesintisiz, düzenli ağ.",
    intro: "Ofis, mağaza, depo ve site için yapısal kablolama, switch/router kurulumu ve kurumsal Wi-Fi çözümleri.",
    bullets: ["Keşif ve kapsama ölçümü", "Yapısal kablolama, patch panel, etiketleme", "Switch, router, firewall kurulumu", "Kurumsal ve misafir Wi-Fi", "Uzun mesafe / fiber bağlantı"],
    outcomes: ["Her noktada stabil bağlantı", "Etiketli, belgeli, büyümeye açık altyapı", "Arızada ne nerede belli"],
    faq: [
      { q: "Mevcut kabloyu kullanabilir miyiz?", a: "Keşifte test ediyoruz. Standartlara uygunsa kullanıyor, değilse sadece gerekli kısmı yeniliyoruz." },
    ],
  },
  {
    slug: "bilgisayar-sistemleri", branch: "it", title: "Bilgisayar Sistemleri",
    short: "Kurulum, bakım ve yerinde teknik servis.",
    intro: "Masaüstü ve dizüstü bilgisayarlar için kurulum, format, donanım yükseltme, arıza tespiti ve yerinde teknik servis.",
    bullets: ["Yeni cihaz kurulumu ve veri aktarımı", "Arıza tespiti ve onarım", "Donanım yükseltme (SSD, RAM)", "Antivirüs ve güvenlik ayarları", "Periyodik bakım"],
    outcomes: ["Yavaşlayan cihazların hızlanması", "Veri kaybı olmadan onarım", "Aynı gün yerinde müdahale"],
    faq: [],
  },
  {
    slug: "kamera-alarm", branch: "it", title: "Kamera & Alarm Sistemleri",
    short: "IP ve AHD kamera, alarm ve telefondan canlı izleme.",
    intro: "İşyeri, site ve ofis için kamera ve alarm sistemleri. Keşifte ihtiyaca göre analog (AHD) veya IP çözüm; telefondan canlı izleme ve kayıt.",
    bullets: ["Keşif ve kamera yerleşim planı", "AHD / IP kamera ve kayıt cihazı kurulumu", "Telefondan uzaktan izleme", "Alarm sensörleri ve bildirim", "Mevcut sistem revizyonu"],
    outcomes: ["Kör nokta bırakmayan görüntüleme", "Olay anında telefona bildirim", "Bakımlı, kayıt tutan sistem"],
    faq: [
      { q: "Analog mu IP mi?", a: "AHD daha ekonomik ve mevcut kabloyla çalışır; IP daha yüksek çözünürlük ve büyüme imkânı verir. Keşifte bütçe ve ihtiyaca göre karar veriyoruz." },
    ],
  },
  {
    slug: "teknik-destek", branch: "it", title: "Teknik Destek & Bakım",
    short: "Kurulum sonrası yerinde ve uzaktan destek, planlı bakım.",
    intro: "Kurduğumuz her sistem için yerinde ve uzaktan teknik destek. Bakım sözleşmesiyle arızayı büyümeden yakalıyoruz.",
    bullets: ["Uzaktan bağlantıyla hızlı müdahale", "Yerinde servis", "Planlı periyodik kontrol", "Öncelikli arıza yanıtı", "Aylık durum raporu"],
    outcomes: ["Tek numara, tek muhatap", "Sabit aylık maliyet", "Daha az kesinti"],
    faq: [],
  },
];

export const byBranch = (b: Branch) => services.filter((s) => s.branch === b);
export const getService = (slug: string) => services.find((s) => s.slug === slug);
