"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

export interface Slide { kicker: string; title: string; text: string; href: string; cta: string; image: string | null }

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || slides.length < 2) return;
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [paused, slides.length]);
  const s = slides[i];
  const prev = () => setI((x) => (x - 1 + slides.length) % slides.length);
  const next = () => setI((x) => (x + 1) % slides.length);

  return (
    <section className="relative bg-primary text-white overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* sağdaki fotoğraf bloğu */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[52%] overflow-hidden">
        {slides.map((sl, n) => sl.image && (
          <Image key={sl.image} src={sl.image} alt="" fill priority={n === 0} sizes="(max-width:1024px) 100vw, 52vw"
            className={`object-cover transition-opacity duration-700 ${n === i ? "opacity-100" : "opacity-0"}`} />
        ))}
        <div className="absolute inset-0 bg-primary/55 lg:bg-gradient-to-r lg:from-primary lg:via-primary/55 lg:to-transparent" />
      </div>

      <div className="container-x relative z-10 py-20 md:py-28 lg:py-32">
        <div className="max-w-[34rem]">
          <div key={`k${i}`} className="fade-in text-it text-sm font-semibold tracking-wide">{s.kicker}</div>
          <h1 key={`t${i}`} className="fade-in mt-4 text-[2.3rem] md:text-[3.2rem] font-extrabold leading-[1.06] text-white" style={{ "--d": "80ms" } as React.CSSProperties}>{s.title}</h1>
          <p key={`p${i}`} className="fade-in mt-5 text-lg text-white/75" style={{ "--d": "180ms" } as React.CSSProperties}>{s.text}</p>
          <div key={`b${i}`} className="fade-in mt-8 flex flex-wrap gap-3" style={{ "--d": "280ms" } as React.CSSProperties}>
            <Link href={s.href} className="btn btn-accent">{s.cta}</Link>
            <a href={site.phoneHref} className="btn btn-light">{site.phone}</a>
          </div>
        </div>

        {slides.length > 1 && (
          <div className="mt-12 flex items-center gap-5 flex-wrap">
            <div className="flex">
              <button onClick={prev} aria-label="Önceki slayt"
                className="w-12 h-12 border border-white/25 hover:bg-white hover:text-primary text-white transition-colors grid place-items-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={next} aria-label="Sonraki slayt"
                className="w-12 h-12 border border-white/25 border-l-0 hover:bg-white hover:text-primary text-white transition-colors grid place-items-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
            <div className="flex items-center gap-3">
              {slides.map((sl, n) => (
                <button key={n} onClick={() => setI(n)} aria-label={sl.kicker} title={sl.kicker}
                  className={`text-xs font-display font-semibold tracking-wide pb-1 border-b-2 transition-colors ${n === i ? "text-white border-accent" : "text-white/40 border-transparent hover:text-white/80"}`}>
                  {String(n + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
            <span className="text-xs text-white/35">{s.kicker}</span>
          </div>
        )}
      </div>
    </section>
  );
}
