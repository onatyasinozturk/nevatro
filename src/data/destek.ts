/**
 * Destek Merkezi — hizmet adına göre değil, MÜŞTERİNİN YAŞADIĞI SORUNA göre sayfalar.
 * İnsanlar "network kurulumu" diye değil "internet sürekli kopuyor" diye arıyor.
 */
export interface DestekItem {
  slug: string;
  title: string;        // sorun başlığı
  short: string;        // kartta 2 satır
  symptoms: string[];   // "şunları yaşıyorsanız"
  approach: string[];   // biz ne yapıyoruz
  service: string;      // ilgili hizmet slug'ı
  intro: string;
}

export const destek: DestekItem[] = [
  {
    slug: "bilgisayar-yavasladi",
    title: "Bilgisayarım yavaşladı, açılmıyor",
    short: "Açılış dakikalar sürüyor, programlar donuyor, mavi ekran geliyor.",
    intro: "Yavaşlamanın sebebi çoğu zaman tek bir şey değil. Disk, bellek, ısınma ve yazılım tarafını birlikte kontrol ediyor, cihazı yenilemeden önce yükseltmenin mantıklı olup olmadığını söylüyoruz.",
    symptoms: ["Açılış birkaç dakika sürüyor", "Programlar takılıyor, donuyor", "Fan sürekli yüksek sesle çalışıyor", "Mavi ekran / beklenmedik kapanma", "Bilgisayar açılmıyor", "Wi-Fi görünmüyor"],
    approach: ["Disk ve bellek sağlık testi", "Isınma ve toz temizliği kontrolü", "SSD / RAM yükseltme önerisi", "Temiz kurulum ve veri aktarımı", "Yükseltme mi yenileme mi — net cevap"],
    service: "bilgisayar-sistemleri",
  },
  {
    slug: "internet-kopuyor",
    title: "İnternet kopuyor, Wi-Fi çekmiyor",
    short: "Bazı odalarda bağlantı yok, toplantıda kopuyor, kalabalıkta yavaşlıyor.",
    intro: "Çoğu ofiste sorun internet hızında değil, ağın kurgusunda. Kapsama ölçümü yapıp ölü noktaları buluyor, tek modemle idare edilen yerde doğru access point yerleşimini kuruyoruz.",
    symptoms: ["Bazı odalarda Wi-Fi yok", "Yoğun saatte yavaşlıyor", "Bağlantı kendiliğinden kopuyor", "Kablolu hızlı, kablosuz yavaş"],
    approach: ["Yerinde kapsama ölçümü", "Access point sayısı ve yerleşim planı", "Misafir ağının ayrılması", "Modem / switch yapılandırması", "Ölçümlü teslim"],
    service: "network-altyapi",
  },
  {
    slug: "veri-kaybi",
    title: "Dosyalarım silindi / diske erişemiyorum",
    short: "Disk tanınmıyor, dosyalar kayboldu, ses geliyor.",
    intro: "Veri kaybında ilk müdahale kritik. Cihazı çalıştırmaya devam etmek çoğu zaman durumu kötüleştirir. Önce durumu tespit ediyor, kurtarma şansını ve maliyetini baştan söylüyoruz.",
    symptoms: ["Disk bilgisayarda görünmüyor", "Diskten tıkırtı sesi geliyor", "Dosyalar yanlışlıkla silindi", "Format atıldı"],
    approach: ["Ücretsiz ön tespit", "Kurtarma ihtimalinin baştan bildirilmesi", "Yazılımsal kurtarma denemesi", "Gerekirse laboratuvar yönlendirmesi", "Sonrasında yedekleme kurulumu"],
    service: "kurumsal-it",
  },
  {
    slug: "yedekleme-yok",
    title: "Hiç yedeğimiz yok",
    short: "Tüm veri tek bilgisayarda, bir şey olursa iş durur.",
    intro: "Küçük işletmelerin çoğunda muhasebe, teklif ve müşteri dosyaları tek bir bilgisayarda duruyor. O cihaz bozulduğunda iş günlerce durur. Otomatik ve unutulmayan bir yedekleme düzeni kuruyoruz.",
    symptoms: ["Yedek elle, ara sıra alınıyor", "Yedek aynı cihazda duruyor", "Yedeğin çalıştığı hiç test edilmedi", "Fidye yazılımı endişesi"],
    approach: ["Kritik verinin belirlenmesi", "Otomatik günlük yedek", "Yerel + bulut çift kopya", "Geri dönüş testi", "Aylık kontrol raporu"],
    service: "kurumsal-it",
  },
  {
    slug: "kamera-goruntu-yok",
    title: "Kameralar kayıt tutmuyor",
    short: "Görüntü bulanık, gece görmüyor, geçmiş kayıt yok.",
    intro: "Olay olduğunda kayda bakmak istenir, çoğu zaman kayıt olmadığı o an fark edilir. Mevcut sistemi yerinde inceliyor, sıfırdan değiştirmeden ihtiyaç kadar yeniliyoruz.",
    symptoms: ["Geçmiş kayıt bulunamıyor", "Gece görüntü kullanılamaz halde", "Bazı kameralar görüntü vermiyor", "Telefondan izlenemiyor"],
    approach: ["Kayıt cihazı ve disk kontrolü", "Kablo ve besleme testi", "Kamera açısı ve yerleşim düzeltmesi", "Telefondan izleme kurulumu", "Kayıt süresi hesabı"],
    service: "kamera-alarm",
  },
  {
    slug: "virus-fidye",
    title: "Virüs / fidye yazılımı",
    short: "Dosyalar şifrelendi, garip uyarılar çıkıyor, hesaplar ele geçti.",
    intro: "Fidye yazılımında panikle ödeme yapmak en kötü seçenek. Önce yayılımı durduruyor, temiz yedekten dönüş şansını değerlendiriyor, sonra aynı şeyin tekrarlanmaması için önlem kuruyoruz.",
    symptoms: ["Dosya uzantıları değişti", "Ödeme isteyen mesaj çıkıyor", "Tarayıcıda tanımadığınız uzantılar", "E-posta hesabından spam gidiyor"],
    approach: ["Etkilenen cihazın ağdan ayrılması", "Zararlı yazılım temizliği", "Yedekten dönüş", "Şifre ve erişim sıfırlama", "Koruma ve güncelleme düzeni"],
    service: "kurumsal-it",
  },
  {
    slug: "yeni-ofis-kurulumu",
    title: "Yeni ofis / işyeri açıyorum",
    short: "Kablolama, internet, bilgisayar, kamera — hepsi sıfırdan.",
    intro: "Yeni yerde altyapıyı sonradan düzeltmek, baştan doğru kurmaktan pahalıya gelir. Tadilat aşamasında devreye girip kablolamayı, ağı, kamerayı ve bilgisayarları tek projede planlıyoruz.",
    symptoms: ["Tadilat aşamasındasınız", "Kaç priz, nereye belli değil", "Birden çok firmayla uğraşmak istemiyorsunuz", "Açılış tarihi belli"],
    approach: ["Yerinde keşif ve kroki", "Yapısal kablolama planı", "Ağ, Wi-Fi ve kamera yerleşimi", "Cihaz listesi ve bütçe", "Açılışa yetişen kurulum takvimi"],
    service: "network-altyapi",
  },
  {
    slug: "google-da-bulunamiyoruz",
    title: "Google'da bulunamıyoruz",
    short: "Müşteri arıyor, rakipler çıkıyor, biz çıkmıyoruz.",
    intro: "Yerel aramalarda görünmemenin sebebi çoğu zaman site değil, eksik bir Google İşletme Profili. Önce haritada görünürlüğü kuruyor, sonra siteyi o aramaları karşılayacak hale getiriyoruz.",
    symptoms: ["Haritada işletme görünmüyor", "Site var ama arama sonuçlarında yok", "Rakipler üstte çıkıyor", "Hiç yorum yok"],
    approach: ["Google İşletme Profili kurulumu", "Kategori, foto ve yorum düzeni", "Hizmet ve bölge sayfaları", "Teknik SEO düzeltmeleri", "Aylık sıralama takibi"],
    service: "seo",
  },
];

export const getDestek = (slug: string) => destek.find((d) => d.slug === slug);
