---
title: "İnternet Neden Yavaş? Wi-Fi Hızını Artırmak İçin 10 Çözüm"
date: "2026-09-13"
category: "Network"
excerpt: "Paket hızınız yüksek ama internet yavaş mı? Sorun çoğu zaman internet hızında değil, Wi-Fi kurgusunda. Sahada en sık gördüğümüz 10 sebep ve çözümü."
cover: "/img/blog/wifi-yavas-kapak.webp"
---

"120 Mbps paket aldık ama internet sürünüyor." Bu cümleyi ofislerde, kafelerde ve depolarda haftada birkaç kez duyuyoruz. Keşfe gidip ölçtüğümüzde çoğu zaman ortaya çıkan tablo aynı: **internet hızı yerinde, Wi-Fi kurgusu bozuk.**

Bu yazıda yavaşlığın gerçek sebeplerini sahadan gördüğümüz sıklık sırasıyla anlatıyoruz. Bir kısmını bugün kendiniz düzeltebilirsiniz, bir kısmı için müdahale gerekir.

## Kısa cevap

İnternet yavaşlığının büyük çoğunluğu şu üç şeyden birinden kaynaklanır:

1. **Modem yanlış yerde** — dolap içinde, köşede, yerde
2. **Tek modem bütün alanı kapatmaya çalışıyor** — 200 m² bir ofisi tek cihaz kapatamaz
3. **Kanal kalabalık** — komşu ağlarla aynı frekansta çakışıyorsunuz

Önce hızınızı ölçün. Modeme kabloyla bağlı bir bilgisayardan test yapın. Kabloda hız normalse sorun internet servisinizde değil, **iç ağınızda**.

![Modeme kabloyla bağlanıp yapılan hız testi ekranı](/img/blog/hiz-testi.webp)
*Gerçek testi her zaman kabloyla yapın. Wi-Fi üzerinden ölçüm, internet hızını değil kablosuz bağlantınızı ölçer.*

---

## 1. Modemin yeri yanlış

En sık ve en ucuz çözülen sorun bu. Modem çoğu işletmede ya elektrik panosunun yanında, ya kapının arkasındaki dolapta, ya da yerde duruyor.

Wi-Fi sinyali her yöne eşit yayılır ve **beton, metal, su** tarafından emilir. Modemi dolaba koymak, ışığı kutunun içine koyup odayı aydınlatmasını beklemeye benzer.

**Ne yapmalı:**

- Modem yerden en az 1,5 metre yukarıda olsun
- Metal dolap, çelik kapı, asansör boşluğu yakınında olmasın
- Mümkünse kullanım alanının **ortasında** dursun, köşede değil
- Antenli modelde antenler dik ve birbirine dik açıda

Sadece modemi doğru yere taşımak, bazı ofislerde kapsama alanını iki katına çıkarıyor.

## 2. Tek modemle bütün alanı kapatmaya çalışmak

Servis sağlayıcının verdiği modem, ortalama bir daire için tasarlanmıştır. 150-200 m² bir ofisi, betonarme duvarlı bir mağazayı ya da bir depoyu tek başına kapatamaz.

Sinyal mesafeyle zayıflar. Uzak noktadaki cihaz bağlantıyı korumak için hızını düşürür ve **yavaş cihaz bütün ağı yavaşlatır** — herkes en yavaş cihazın temposunu bekler.

**Ne yapmalı:** Alanı bölüp birden fazla **access point** (erişim noktası) kurmak gerekir. Menzil genişletici (repeater) değil — o bandwidth'i yarıya düşürür. Doğru çözüm, her access point'e kablo çekilmesidir.

![Tavana monte edilmiş kurumsal access point](/img/blog/access-point.webp)
*Kurumsal access point'ler tavana monte edilir ve kablodan hem veri hem elektrik alır (PoE).*

## 3. Kanal çakışması

Wi-Fi belirli frekans kanallarını kullanır. Plaza, AVM ya da yoğun bir caddede onlarca ağ aynı kanalları paylaşıyor olabilir. Herkesin aynı anda aynı odada bağırması gibi.

**Ne yapmalı:** Modem arayüzünden kanalı "Otomatik"ten alıp elle boş bir kanala sabitleyin. 2,4 GHz'de yalnız **1, 6, 11** kanalları birbiriyle çakışmaz. Hangi kanalın boş olduğunu bir analiz uygulamasıyla ölçmek gerekir; tahminle yapılmaz.

## 4. Hâlâ 2,4 GHz kullanıyorsunuz

Modern modemler iki bantta yayın yapar:

| | 2,4 GHz | 5 GHz |
|---|---|---|
| Hız | Düşük | Yüksek |
| Menzil | Uzun | Kısa |
| Duvar geçme | İyi | Zayıf |
| Kalabalık | Çok | Az |

Cihazlarınız otomatik olarak 2,4 GHz'e tutunuyorsa hız kaybınız büyük olabilir. Uzak noktalarda 2,4 mantıklı, ama modeme yakın çalışan bilgisayarların 5 GHz'de olması gerekir.

**Ne yapmalı:** İki bandı farklı isimlerle yayınlayın (`OfisWiFi` ve `OfisWiFi-5G`) ve masa başı cihazları 5 GHz'e alın.

## 5. Misafir ağı ayrılmamış

Kafe, restoran, klinik ve mağazalarda en sık yaptığımız düzeltmelerden biri. Müşteriler sizin çalıştığınız ağa bağlanıyor; biri video izlerken kasanız, POS cihazınız ve bilgisayarlarınız aynı kaynağı paylaşıyor.

**Ne yapmalı:** Misafirler için ayrı bir ağ oluşturun, hız sınırı koyun ve iç ağa erişimini kapatın. Bu hem hız hem **güvenlik** meselesidir — misafir ağından şirket verilerinize erişilememeli.

## 6. Kablolama standart dışı

Access point'ler ve masaüstü cihazlar doğru kablolanmamışsa Wi-Fi'ı ne kadar iyileştirseniz de tavan hep düşük kalır.

Sahada sık gördüklerimiz: yıllar önce çekilmiş Cat5 kablo, ezilmiş kanallar, etiketsiz patch panel, kapı arkasında sarkan switch.

**Ne yapmalı:** Yapısal kablolama yapılmalı — en az Cat6, patch panel, etiketleme, düzgün kablo kanalı. [Network ve altyapı hizmetlerimize](/hizmetler/network-altyapi) buradan bakabilirsiniz.

![Etiketlenmiş patch panel ve düzenli rack kabini](/img/blog/patch-panel.webp)
*Etiketli ve belgeli kablolama, bir sonraki arızada saatlerce süren arama işini ortadan kaldırır.*

## 7. Modem eski

5 yaşından büyük bir modem, bugünkü cihaz sayısını kaldıramaz. Eski modemler aynı anda bağlanabilecek cihaz sayısında ve işlemci gücünde yetersiz kalır.

**Ne yapmalı:** Wi-Fi 5 (802.11ac) en alt sınır, mümkünse Wi-Fi 6. Kurumsal kullanımda servis sağlayıcının verdiği modemi yalnızca internet girişi olarak kullanıp, kablosuz tarafı ayrı cihazlara devretmek en sağlıklısıdır.

## 8. Çok fazla cihaz bağlı

Telefonlar, tabletler, kameralar, yazarkasa, akıllı televizyon, kartlı geçiş sistemi… Hepsi aynı ağda. Çoğu arka planda sessizce güncelleme indiriyor.

**Ne yapmalı:** Modem arayüzünden bağlı cihaz listesini kontrol edin. Tanımadığınız cihaz varsa Wi-Fi şifresini değiştirin. Kamera ve IoT cihazlarını ayrı bir ağa almak hem hız hem güvenlik kazandırır.

## 9. Arka planda bant genişliği yiyen işler

Bulut yedeklemeler, Windows güncellemeleri, büyük dosya senkronizasyonları mesai saatinde çalışıyorsa kimse çalışamaz.

**Ne yapmalı:** Yedekleme ve güncellemeleri gece saatlerine alın. Kurumsal cihazlarda QoS ayarıyla kritik trafiğe (telefon görüşmesi, POS) öncelik verin.

## 10. Sorun gerçekten internet servisinde

Yukarıdakilerin hepsi tamamsa, sorun gerçekten hattınızda olabilir: yanlış paket, altyapı sorunu, hat kalitesi düşüklüğü.

**Ne yapmalı:** Farklı saatlerde kabloyla test yapın ve sonuçları kaydedin. Elinizde ölçüm olunca servis sağlayıcıyla yapacağınız görüşme çok daha hızlı sonuçlanır.

---

## Hızlı kontrol listesi

Çağrı yapmadan önce beş dakikada bunlara bakın:

- [ ] Kabloyla hız testi yaptınız mı? (Wi-Fi ile değil)
- [ ] Modem dolapta, yerde ya da köşede mi duruyor?
- [ ] 5 GHz ağını kullanıyor musunuz?
- [ ] Misafirler ayrı ağda mı?
- [ ] Bağlı cihaz listesinde tanımadığınız cihaz var mı?
- [ ] Modem kaç yaşında?

## Kendiniz çözemiyorsanız

Bu listenin ilk üç maddesi çoğu zaman evde çözülebilir. Ama kapsama ölçümü, access point yerleşimi ve kablolama işi tahminle yapılmaz — ölçüm gerekir.

Biz keşfe giderken ofisi baştan sona ölçüyor, ölü noktaları harita üzerinde çıkarıyor ve kaç access point gerektiğini rakamla söylüyoruz. Kurulum sonrası aynı ölçümü tekrarlayıp farkı gösteriyoruz.

Benzer sorunlar için [Destek Merkezi](/destek) bölümümüzde "[internet kopuyor, Wi-Fi çekmiyor](/destek/internet-kopuyor)" başlığına da bakabilirsiniz.

**Beylikdüzü, Esenyurt, Avcılar ve çevresinde keşif ücretsiz.** [Bize ulaşın](/iletisim), yerinde ölçelim.
