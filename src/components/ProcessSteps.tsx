"use client";
import { useState } from "react";
import Link from "next/link";

/**
 * Yatay adım akordiyonu. Masaüstünde üzerine gelince panel açılır,
 * mobilde dokununca. Klavyeyle de gezilebilir.
 */
const steps = [
  { t: "İhtiyaç Analizi", d: "Yerinde ya da telefonda keşif. Mevcut durumu görüyor, neyin gerçekten gerektiğini birlikte netleştiriyoruz. Gereksiz kalem önermiyoruz." },
  { t: "Planlama", d: "Kalem kalem teklif, zaman planı ve varsa alternatifler. Ne zaman başlanacağı ve ne zaman biteceği baştan yazılı. Sürpriz maliyet yok." },
  { t: "Kurulum", d: "Planlanan günde, işinizi aksatmadan. Kablolar etiketli, cihazlar belgeli, teslimde tutanak. Nerede ne var, sonradan aramazsınız." },
  { t: "Destek", d: "Kurulum bitince biten bir iş değil. Arızada aranacak tek numara belli; isteyene periyodik bakım ve uzaktan izleme." },
];

export default function ProcessSteps() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-surface border-b border-line">
      <div className="container-x py-14 md:py-20">

        {/* MASAÜSTÜ — yatay akordiyon */}
        <div className="hidden md:flex items-stretch gap-5" onMouseLeave={() => setActive(0)}>
          {steps.map((s, i) => {
            const on = i === active;
            return (
              <div
                key={s.t}
                role="button" tabIndex={0}
                aria-expanded={on}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(i); } }}
                className={`group relative cursor-pointer border-t-2 pt-6 transition-[flex-grow,border-color] duration-500 ease-[cubic-bezier(.2,.7,.2,1)] ${on ? "border-accent grow-[4]" : "border-line grow"} basis-0 min-w-0`}
              >
                <div className="flex items-start gap-7">
                  <span className={`font-display font-extrabold leading-[.8] text-[5.5rem] lg:text-[7rem] tabular-nums shrink-0 transition-colors duration-500 ${on ? "text-accent" : "text-line group-hover:text-muted"}`}>
                    {i + 1}
                  </span>
                  <div className={`min-w-0 transition-opacity duration-500 ${on ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    <h3 className="text-xl font-bold whitespace-nowrap">{s.t}</h3>
                    <p className="mt-3 text-sm text-body leading-relaxed max-w-[34ch]">{s.d}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MOBİL — dikey liste */}
        <div className="md:hidden divide-y divide-line border-t border-line">
          {steps.map((s, i) => (
            <div key={s.t} className="py-6 flex gap-5">
              <span className="font-display font-extrabold leading-[.8] text-[3.2rem] text-accent tabular-nums shrink-0">{i + 1}</span>
              <div>
                <h3 className="text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-body leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12">
          <Link href="/hakkimizda" className="btn btn-outline">Nasıl çalıştığımızı görün</Link>
        </div>
      </div>
    </section>
  );
}
