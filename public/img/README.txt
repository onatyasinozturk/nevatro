NEVATRO — GÖRSEL STANDARDI VE DOSYA LİSTESİ
===========================================

TEK MASTER DOSYA İLKESİ
-----------------------
Her görsel için SADECE BİR yüksek çözünürlüklü dosya yüklüyorsun.
Site bu tek dosyadan 480 / 768 / 1200 / 1600 px varyantlarını ve
AVIF + WebP formatlarını kendisi üretir; tarayıcı ekrana göre
doğru olanı indirir. Bu yüzden aynı dosya hem anasayfa kartında
hem hizmet detay sayfasında kullanılır ve detayda pikselleşmez.

>> KÜÇÜK DOSYA YÜKLEME. 600x400 bir görsel detay sayfasında bozuk çıkar.

STANDART ÖLÇÜ
-------------
Hizmet / destek / proje görselleri:   1600 x 1067 px   (3:2)
Hero görselleri:                      1920 x 1080 px
Banner görselleri:                    1920 x 800 px
Saha galerisi:                        1200 x 1200 px   (kare)
Hakkımızda:                           1600 x 1067 px   (3:2)

Format: .webp tercih edilir (.jpg de olur). squoosh.app, kalite 78.
Hedef boyut: hero 300-500 KB, diğerleri 120-250 KB.

Yüklediğin dosya farklı orandaysa site onu ESNETMEZ, ortadan kırpar.
3:2 dışındaki oranlarda kenarlar kesilir — önemli detayı ortada tut.

DOSYA LİSTESİ
-------------
img/hero-1.*            Hero 1. slayt — ofis / network kurulumu
img/hero-2.*            Hero 2. slayt — bilgisayar teknik servis
img/hero-3.*            Hero 3. slayt — kamera / güvenlik
                        (Sadece img/hero.* koyarsan üçünde de o kullanılır.)

img/hakkimizda.*        Ekip / ofis fotoğrafı

img/services/<slug>.*   Hizmet kartı + hizmet detay sayfası ana görseli
    web-tasarim · e-ticaret · pazaryeri-danismanligi · seo · google-ads
    sosyal-medya · kurumsal-it · network-altyapi · bilgisayar-sistemleri
    kamera-alarm · teknik-destek

img/destek/<slug>.*     Destek Merkezi kartı + detay sayfası
    bilgisayar-yavasladi · internet-kopuyor · veri-kaybi · yedekleme-yok
    kamera-goruntu-yok · virus-fidye · yeni-ofis-kurulumu · google-da-bulunamiyoruz

img/projects/<slug>.*   Proje kartı (src/data/projects.ts içindeki slug)

img/banners/<ad>.*      İç sayfa üst banner'ı
    hizmetler · destek · sektorler · bolgeler · iletisim · blog

img/saha/*.*            Sahadan fotoğraflar. Dosya adı serbest, kaç tane
                        atarsan anasayfada o kadar gösterir (4-8 ideal).

Dosya yoksa site bozulmaz, o alan renkli panel olarak görünür.
