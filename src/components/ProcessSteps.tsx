"use client";
import { useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";

const steps = [
  { t: "İhtiyaç Analizi", d: "Yerinde ya da telefonda keşif. Mevcut durumu görüyor, neyin gerçekten gerektiğini birlikte netleştiriyoruz. Gereksiz kalem önermiyoruz." },
  { t: "Planlama", d: "Kalem kalem teklif, zaman planı ve varsa alternatifler. Ne zaman başlanacağı ve biteceği baştan yazılı. Sürpriz maliyet yok." },
  { t: "Kurulum", d: "Planlanan günde, işinizi aksatmadan. Kablolar etiketli, cihazlar belgeli, teslimde tutanak. Nerede ne var, sonradan aramazsınız." },
  { t: "Destek", d: "Kurulum bitince biten bir iş değil. Arızada aranacak tek numara belli; isteyene periyodik bakım ve uzaktan izleme." },
];

/**
 * Yatay adım akordiyonu (Evrone tarzı).
 * Satır yüksekliği SABİT: kapalı panellerde içerik DOM'da yok, bu yüzden
 * paragraf dar panelde kırılıp satırı uzatamaz. Açık panelin yazısı,
 * rakamın yanında ve rakamla aynı üst hizadan başlar; aşağı kaymaz.
 */
export default function ProcessSteps() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-surface border-b border-line">
      <div className="container-x py-12 md:py-16">

        {/* MASAÜSTÜ */}
        <div className="hidden md:block">
          <div className="flex items-start gap-4 lg:gap-6 min-h-[210px] lg:min-h-[230px]" onMouseLeave={() => setActive(0)}>
            {steps.map((s, i) => {
              const on = i === active;
              return (
                <div
                  key={s.t}
                  role="button" tabIndex={0} aria-expanded={on}
                  onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(i); } }}
                  className={`group relative cursor-pointer basis-0 min-w-0 border-t-2 pt-7 transition-[flex-grow,border-color] duration-500 ease-[cubic-bezier(.2,.7,.2,1)] ${on ? "border-accent grow-[5]" : "border-line hover:border-muted grow"}`}
                >
                  <div className="flex items-start gap-6 lg:gap-8">
                    <span className={`font-display font-extrabold leading-none tracking-[-.04em] text-[5.5rem] lg:text-[7.5rem] tabular-nums shrink-0 select-none transition-colors duration-400 ${on ? "text-accent" : "text-line group-hover:text-muted"}`}>
                      {i + 1}
                    </span>
                    {on && (
                      <div className="step-in min-w-0 pt-2 lg:pt-3">
                        <div className="text-xs font-semibold text-muted tracking-wide">Adım {String(i + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}</div>
                        <h3 className="mt-1.5 text-xl lg:text-2xl font-bold whitespace-nowrap">{s.t}</h3>
                        <p className="mt-3 text-sm lg:text-[.95rem] text-body leading-relaxed max-w-[38ch]">{s.d}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between gap-6 flex-wrap">
            <Link href="/hakkimizda" className="btn btn-outline">Nasıl çalıştığımızı görün</Link>
            <a href={site.phoneHref} className="font-display font-semibold text-primary hover:text-accent transition-colors">{site.phone}</a>
          </div>
        </div>

        {/* MOBİL */}
        <div className="md:hidden">
          <div className="divide-y divide-line border-t border-line">
            {steps.map((s, i) => (
              <div key={s.t} className="py-6 flex gap-5 items-start">
                <span className="font-display font-extrabold leading-none tracking-[-.04em] text-[3.4rem] text-accent tabular-nums shrink-0">{i + 1}</span>
                <div className="pt-1">
                  <h3 className="text-lg font-bold">{s.t}</h3>
                  <p className="mt-2 text-sm text-body leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/hakkimizda" className="btn btn-outline mt-8 w-full">Nasıl çalıştığımızı görün</Link>
        </div>

      </div>
    </section>
  );
}
