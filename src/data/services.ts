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
  /** Sayfada H1 olarak kullanılır. Yoksa title kullanılır.
   *  Menüdeki kısa ad ile sayfadaki arama-odaklı başlığı ayırmaya yarar. */
  h1?: string;
  /** <title> etiketi. Yoksa "title | şehir" kurgusu kullanılır. */
  metaTitle?: string;
  /** meta description. Yoksa short kullanılır. */
  metaDescription?: string;
  /** Uzun içerik (Markdown). Reklam trafiği alan sayfalarda doldurulur. */
  body?: string;
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
    h1: "Bilgisayar Tamiri ve Yerinde Teknik Servis",
    metaTitle: "Bilgisayar Tamiri Beylikdüzü, Esenyurt, Avcılar | Yerinde Servis",
    metaDescription: "Beylikdüzü, Esenyurt ve Avcılar'da yerinde bilgisayar tamiri ve teknik servis. Arıza tespiti ücretsiz, aynı gün müdahale, faturalı ve garantili işçilik.",
    short: "Kurulum, bakım ve yerinde teknik servis.",
    intro: "Masaüstü ve dizüstü bilgisayarlarda arıza tespiti, onarım, format, donanım yükseltme ve periyodik bakım. Beylikdüzü, Esenyurt ve Avcılar'da yerinde servis; arıza tespiti ücretsiz.",
    bullets: ["Ücretsiz arıza tespiti ve ön bilgilendirme", "Yerinde onarım — cihazı bırakmanıza gerek yok", "Donanım yükseltme (SSD, RAM) ile hızlandırma", "Format, işletim sistemi ve veri aktarımı", "Virüs ve fidye yazılımı temizliği", "Kurumsal cihazlar için periyodik bakım"],
    outcomes: ["Yavaşlayan cihaz yenilemeden hızlanır", "Veriniz kaybolmadan geri gelir", "Aynı gün yerinde müdahale", "Faturalı, garantili işçilik", "Tek muhatap, tek numara", "İş kaybı en aza iner"],
    faq: [
      { q: "Cihazı size getirmem mi gerekiyor?", a: "Hayır. Beylikdüzü, Esenyurt ve Avcılar'da yerinde servis veriyoruz; işlemlerin büyük kısmını sizin ofisinizde ya da evinizde tamamlıyoruz. Yalnızca laboratuvar gerektiren durumlarda (örneğin ileri seviye anakart onarımı) cihazı yanımıza alıyoruz ve bunu baştan söylüyoruz." },
      { q: "Arıza tespiti ücretli mi?", a: "Hayır. Yerinde arıza tespiti ve fiyat bilgisi ücretsiz. Ne yapılacağını ve ne kadar tutacağını öğrendikten sonra işlemi onaylamama hakkınız var; onaylamazsanız hiçbir ücret çıkmaz." },
      { q: "Ne kadar sürede gelebiliyorsunuz?", a: "Beylikdüzü, Esenyurt ve Avcılar öncelikli hizmet bölgemiz; mesai saatleri içinde gelen taleplerin çoğuna aynı gün dönüyoruz. Yazılım kaynaklı sorunlarda önce uzaktan bağlanıp deniyoruz, çözülürse beklemenize bile gerek kalmıyor." },
      { q: "Verilerim kaybolur mu?", a: "Format ve işletim sistemi kurulumu öncesinde verilerinizi yedekliyoruz. Disk arızalıysa önce kurtarma denemesi yapıyor, şansı ve maliyeti size söyledikten sonra devam ediyoruz. Onayınız olmadan hiçbir veri silinmiyor." },
      { q: "Ne kadar tutar?", a: "İşleme göre değişir. Format ve kurulum, SSD takma, temizlik-bakım gibi standart işlerde fiyat keşifte netleşir ve yazılı verilir. Parça gerekiyorsa parça ve işçilik ayrı ayrı gösterilir; sürpriz kalem çıkarmıyoruz." },
      { q: "Bilgisayarı yenilesem mi, tamir mi ettirsem?", a: "Çoğu zaman gerek yok. 5-6 yaşındaki bir bilgisayarda SSD ve RAM yükseltmesi cihazı gözle görülür şekilde hızlandırıyor ve yeni cihaz almanın çok altında maliyetle çözüyor. Tespitte hangisinin mantıklı olduğunu rakamla söylüyoruz — yenilemek gerekiyorsa da onu söylüyoruz." },
      { q: "Faturalı çalışıyor musunuz?", a: "Evet, tüm işlerimiz faturalı. Kurumsal müşterilerimizle bakım sözleşmesiyle ilerliyoruz; işçiliğe garanti veriyor, kullanılan parçalar üretici garantisi kapsamında kalıyor." },
      { q: "Birden fazla bilgisayarımız var, toplu bakım yapıyor musunuz?", a: "Evet. Ofislerde cihaz sayısına göre periyodik bakım planı çıkarıyoruz: temizlik, disk sağlığı kontrolü, güncelleme ve yedekleme kontrolü. Böylece arızalar büyümeden yakalanıyor ve aylık maliyetiniz sabit kalıyor." },
    ],
    body: `## Bilgisayarınız yavaşladıysa yenilemeden önce bir baktırın

Sahada en sık karşılaştığımız durum şu: cihaz "eskidi" diye yenilenmek isteniyor, incelediğimizde sorun disk, ısınma ya da yazılım kaynaklı çıkıyor. Bir SSD yükseltmesi 6 yaşındaki bir bilgisayarı çoğu zaman yeni cihaz hissine yaklaştırıyor ve maliyeti yenilemenin çok altında kalıyor.

Biz önce ölçüyoruz. Disk sağlığı, bellek testi, ısı değerleri ve açılışta çalışan servisler kontrol edilmeden "format atalım" demiyoruz. Çünkü format, donanım kaynaklı bir sorunu birkaç haftalığına gizlemekten başka işe yaramaz.

## Hangi işleri yapıyoruz?

**Arıza tespiti ve onarım.** Açılmayan, mavi ekran veren, kendiliğinden kapanan cihazlarda önce nedeni buluyoruz. Güç kaynağı, bellek, disk, ısınma — hangisiyse onu söylüyoruz.

**Donanım yükseltme.** SSD ve RAM yükseltmesi, yavaşlık şikâyetlerinin büyük kısmını tek başına çözer. Mevcut verilerinizi yeni diske aktarıyoruz, sıfırdan kurulum yapmak zorunda kalmıyorsunuz.

**Format, kurulum ve veri aktarımı.** İşletim sistemi kurulumu, sürücüler, ofis programları ve önceki verilerinizin taşınması. Cihazı çalışır halde teslim ediyoruz, "sürücüleri sen bulursun" demiyoruz.

**Virüs ve fidye yazılımı temizliği.** Zararlı yazılım temizliği, tarayıcı eklentilerinin kaldırılması, güvenlik ayarlarının düzeltilmesi. Fidye yazılımı durumunda önce yayılımı durduruyor, sonra yedekten dönüş şansını değerlendiriyoruz.

**Periyodik bakım.** Ofislerde cihazlar toplu olarak bakımdan geçiriliyor: iç temizlik, termal macun, disk sağlığı, güncellemeler, yedekleme kontrolü. Arızayı büyümeden yakalamanın en ucuz yolu bu.

## Nasıl çalışıyoruz?

Telefonla ya da WhatsApp'tan durumu anlatıyorsunuz. Yazılım kaynaklı görünen sorunlarda önce uzaktan bağlanmayı deniyoruz — çözülürse yerinde servise gerek kalmıyor.

Yerinde müdahale gerekiyorsa gün ve saat belirliyoruz. Tespitten sonra ne yapılacağını ve ne tutacağını söylüyoruz; onaylarsanız işleme geçiyoruz. Parça gerekiyorsa parça ve işçilik ayrı gösteriliyor.

İş bittiğinde cihazı çalışır halde teslim ediyor, yapılan işlemleri yazılı olarak bırakıyoruz. Sonrasında bir sorun olursa aranacak numara belli.

## Kurumsal bilgisayar desteği

Beş cihazın üstüne çıkan ofislerde tek tek arıza gidermek yerine bakım sözleşmesi daha mantıklı oluyor. Aylık sabit ücretle cihazlar düzenli kontrol ediliyor, arıza durumunda öncelikli müdahale yapılıyor, çoğu sorun uzaktan çözülüyor.

Bu yapı özellikle muhasebe, teklif ve müşteri verisinin tek bir bilgisayarda durduğu işletmeler için önemli. O cihaz bozulduğunda iş günlerce durabilir; düzenli kontrol ve yedekleme bunu baştan engelliyor.

## Hizmet bölgemiz

Beylikdüzü, Esenyurt ve Avcılar öncelikli bölgemiz — buralara aynı gün dönüyoruz. Büyükçekmece, Başakşehir, Küçükçekmece ve çevresine de yerinde servis veriyoruz, keşfi genellikle 1-2 iş günü içinde planlıyoruz.`,
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
