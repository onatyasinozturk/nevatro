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

  return (
    <section className="relative bg-primary text-white overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* sağdaki fotoğraf bloğu */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[52%] overflow-hidden">
        {slides.map((sl, n) => sl.image && (
          <Image key={sl.image} src={sl.image} alt="" fill priority={n === 0} sizes="(max-width:1024px) 100vw, 52vw"
            className={`object-cover transition-opacity duration-700 ${n === i ? "opacity-100" : "opacity-0"}`} />
        ))}
        <div className="absolute inset-0 bg-primary/55 lg:bg-gradient-to-r lg:from-primary lg:via-primary/40 lg:to-transparent" />
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
          <div className="mt-12 flex items-center gap-3">
            {slides.map((_, n) => (
              <button key={n} onClick={() => setI(n)} aria-label={`${n + 1}. slayt`}
                className={`h-1 rounded-full transition-all ${n === i ? "w-10 bg-accent" : "w-5 bg-white/30 hover:bg-white/60"}`} />
            ))}
            <span className="ml-2 text-xs text-white/40 tabular-nums">{String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
          </div>
        )}
      </div>
    </section>
  );
}
