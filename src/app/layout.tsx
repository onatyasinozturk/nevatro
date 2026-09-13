import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import GoogleTagManager from "@/components/GoogleTagManager";
import JsonLd from "@/components/JsonLd";
import { site } from "@/data/site";
import { localBusinessJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Dijital ve IT Çözümleri | ${site.city}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { siteName: site.name, locale: "tr_TR", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/*
          Font CSS'i "render engelleyen" istek olmaktan çıkarıldı.
          media="print" ile indirilir; indikten sonra aşağıdaki küçük script
          media="all" yapar. Böylece sayfanın ilk çizimi fontu beklemez.
          (Sunucu bileşeninde onLoad kullanılamadığı için script ile yapılıyor.)
        */}
        <link
          id="gfonts"
          rel="stylesheet"
          media="print"
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@500;600;700;800&family=Figtree:wght@400;500;600&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.getElementById('gfonts');if(!l)return;function go(){l.media='all'}if(l.sheet){go()}else{l.addEventListener('load',go);setTimeout(go,2500)}})();`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@500;600;700;800&family=Figtree:wght@400;500;600&display=swap" />
        </noscript>
      </head>
      <body className="min-h-full flex flex-col">
        <GoogleTagManager />
        <JsonLd data={localBusinessJsonLd()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
