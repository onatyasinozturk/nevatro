NEVATRO — GÖRSEL STANDARDI
==========================

TEK MASTER DOSYA İLKESİ
-----------------------
Her görsel için SADECE BİR yüksek çözünürlüklü dosya yüklüyorsun.
Site bu tek dosyadan 480 / 768 / 1200 / 1600 px varyantlarını ve
AVIF + WebP formatlarını KENDİSİ üretir. Tarayıcı ekrana göre doğru
olanı indirir. Bu yüzden aynı dosya hem anasayfa kartında hem de
hizmet detay sayfasının kapak görselinde kullanılır; detayda büyüse
bile pikselleşmez.

>> KÜÇÜK DOSYA YÜKLEME. 600x400 bir görsel kapakta bozuk çıkar.

STANDART ÖLÇÜ — HEP BUNU KULLAN
-------------------------------
Hizmet / destek / proje / hakkımızda:   1600 x 1067 px   (3:2)
Hero slaytları:                         1920 x 1080 px   (16:9)
İç sayfa banner'ları:                   1920 x 1080 px   (16:9)
Saha galerisi:                          1200 x 1200 px   (kare)

Format: .webp (tercih) veya .jpg
Sıkıştırma: squoosh.app, kalite 78
Hedef dosya boyutu: hero 300-500 KB, diğerleri 120-250 KB

Yüklediğin dosya farklı orandaysa site onu ESNETMEZ — ortadan kırpar.
Önemli detayı (kamera, cihaz, yüz) kadrajın ortasında tut.

Kapak görsellerinin yüksekliği ekran boyutuna göre SABİTTİR
(mobil 360px / tablet 420px / masaüstü 460px). Hangi dosyayı
yüklersen yükle bu değişmez, sayfa kaymaz.

DOSYA LİSTESİ
-------------
img/hero-1.*          Hero 1. slayt — ofis / network kurulumu
img/hero-2.*          Hero 2. slayt — bilgisayar teknik servis
img/hero-3.*          Hero 3. slayt — kamera / güvenlik
                      (Sadece img/hero.* koyarsan üçünde de o kullanılır.)

img/hakkimizda.*      Ekip / ofis fotoğrafı

img/services/<slug>.* Hizmet kartı + hizmet detay sayfası KAPAK görseli
    web-tasarim · e-ticaret · pazaryeri-danismanligi · seo · google-ads
    sosyal-medya · kurumsal-it · network-altyapi · bilgisayar-sistemleri
    kamera-alarm · teknik-destek

img/destek/<slug>.*   Destek Merkezi kartı + detay kapağı
    bilgisayar-yavasladi · internet-kopuyor · veri-kaybi · yedekleme-yok
    kamera-goruntu-yok · virus-fidye · yeni-ofis-kurulumu · google-da-bulunamiyoruz

img/projects/<slug>.* Proje kartı (src/data/projects.ts içindeki slug)

img/banners/<ad>.*    Görseli olmayan sayfaların üst kapağı
    hizmetler · destek · sektorler · bolgeler · iletisim · blog

img/saha/*.*          Sahadan fotoğraflar. Dosya adı serbest, kaç tane
                      atarsan anasayfada o kadar gösterir (4-8 ideal).

Dosya yoksa site bozulmaz; o alan lacivert panel olarak görünür.
