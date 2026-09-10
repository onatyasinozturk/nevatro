"use client";
import { useState } from "react";
import Link from "next/link";

const items = [
  { k: "kamera-alarm", t: "Kameram var ama görüntü / kayıt sorunlu", h: "Kamera & Alarm — mevcut sistem revizyonu", d: "Kurulumu yerinde inceliyoruz; çoğu zaman sorun kayıt cihazı, kablo ya da yerleşimde. Sıfırdan değil, ihtiyaç kadar yeniliyoruz." },
  { k: "network-altyapi", t: "Wi-Fi her yere ulaşmıyor", h: "Network & Altyapı — kapsama ölçümü", d: "Ölü noktaları ölçüp doğru sayıda access point ve doğru kablolamayla her köşeye stabil bağlantı kuruyoruz." },
  { k: "kurumsal-it", t: "Bilgisayarlar yavaş, sık arızalanıyor", h: "Kurumsal IT — periyodik bakım + uzaktan destek", d: "Tek tek arıza gidermek yerine bakım sözleşmesiyle cihazları düzenli kontrol ediyor, çoğunu uzaktan çözüyoruz." },
  { k: "network-altyapi", t: "Yeni işyeri açıyorum, altyapı sıfırdan", h: "Network & Altyapı — tek projede kurulum", d: "Kablolama, network, Wi-Fi, kamera ve bilgisayar kurulumunu tek projede, tek muhatapla planlıyoruz." },
  { k: "pazaryeri-danismanligi", t: "Trendyol / Hepsiburada'da satış düşük", h: "Pazaryeri Danışmanlığı", d: "Mağaza, ürün içeriği, reklam ve operasyon yapınızı gerçek pazaryeri tecrübesiyle düzenliyoruz." },
  { k: "web-tasarim", t: "Web sitem yok ya da eski", h: "Web Tasarım", d: "Hızlı açılan, mobil uyumlu ve Google'da bulunabilen bir site; istenirse Google Ads ve SEO ile birlikte." },
  { k: "google-ads", t: "Reklama para harcıyorum, sonuç göremiyorum", h: "Google Ads — dönüşüm takibi", d: "Önce dönüşüm takibini kuruyor, hangi kelimenin telefon getirdiğini ölçüp bütçeyi ona göre yönetiyoruz." },
];

export default function ProblemFinder() {
  const [i, setI] = useState<number | null>(null);
  const cur = i === null ? null : items[i];
  return (
    <div className="grid md:grid-cols-[1.1fr_.9fr] gap-8 items-start">
      <div className="flex flex-wrap gap-2.5">
        {items.map((it, idx) => (
          <button key={idx} onClick={() => setI(idx)}
            className={`text-left text-sm px-4 py-2.5 rounded-lg border transition-colors ${i === idx ? "bg-primary text-white border-primary" : "bg-surface border-line text-primary hover:border-primary"}`}>
            {it.t}
          </button>
        ))}
      </div>
      <div className="card p-7 min-h-[220px] border-t-4 border-t-accent">
        <div className="text-xs text-muted">Önerilen başlangıç</div>
        {cur ? (
          <>
            <h3 className="text-xl mt-1">{cur.h}</h3>
            <p className="mt-3 text-sm leading-relaxed">{cur.d}</p>
            <Link href={`/hizmetler/${cur.k}`} className="btn btn-accent mt-5">Bu hizmete bak</Link>
          </>
        ) : (
          <>
            <h3 className="text-xl mt-1 text-muted">Soldan bir durum seçin</h3>
            <p className="mt-3 text-sm text-muted">Seçtiğiniz duruma göre hangi hizmetle başlayacağınızı burada göreceksiniz.</p>
          </>
        )}
      </div>
    </div>
  );
}
