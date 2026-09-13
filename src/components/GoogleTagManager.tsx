"use client";
import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { pushEvent } from "@/lib/gtm";

/**
 * Google Tag Manager.
 * Konteyner kimliği src/data/site.ts içindeki gtmId alanından gelir.
 * Boşsa hiçbir script yüklenmez — yani kimliği girmeden site normal çalışır.
 *
 * Ayrıca tüm sayfada tek bir tıklama dinleyicisi kurar ve şu olayları
 * kendiliğinden dataLayer'a yollar (her linki tek tek düzenlemeye gerek yok):
 *   telefon_tikla    → tel: ile başlayan her bağlantı
 *   whatsapp_tikla   → wa.me içeren her bağlantı
 *   eposta_tikla     → mailto: ile başlayan her bağlantı
 * Form gönderimi ContactForm içinden "teklif_formu" olarak gider.
 */
export default function GoogleTagManager() {
  const pathname = usePathname();

  // Sayfa değişimlerini bildir (tek sayfa uygulaması olduğu için gerekli)
  useEffect(() => {
    if (!site.gtmId) return;
    pushEvent("sayfa_goruntuleme", { sayfa_yolu: pathname });
  }, [pathname]);

  // Telefon / WhatsApp / e-posta tıklamaları
  useEffect(() => {
    if (!site.gtmId) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.startsWith("tel:")) pushEvent("telefon_tikla", { deger: href.replace("tel:", ""), sayfa_yolu: window.location.pathname });
      else if (href.includes("wa.me")) pushEvent("whatsapp_tikla", { sayfa_yolu: window.location.pathname });
      else if (href.startsWith("mailto:")) pushEvent("eposta_tikla", { sayfa_yolu: window.location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!site.gtmId) return null;

  return (
    <>
      <Script id="gtm-init" strategy="lazyOnload">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${site.gtmId}');`}
      </Script>
      <noscript>
        <iframe src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`}
          height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="gtm" />
      </noscript>
    </>
  );
}
