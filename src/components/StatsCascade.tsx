"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";

interface Stat { num?: number; pad?: boolean; suffix?: string; text?: string; label: string }

const stats: Stat[] = [
  { num: site.experienceYears, pad: true, suffix: "+", label: "Yıllık saha tecrübesi" },
  { num: site.serviceArea.length, pad: true, suffix: "+", label: "İlçede yerinde servis" },
  { num: 0, suffix: " ₺", label: "Keşif ve teklif — her zaman ücretsiz" },
  { text: "Aynı gün", label: "Arayın, çoğu talebe aynı gün dönüyoruz" },
];

/** Sayıyı görünüme girince 0'dan hedefe sayar. prefers-reduced-motion'da doğrudan hedefi yazar. */
function Counter({ to, pad, suffix, active }: { to: number; pad?: boolean; suffix?: string; active: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    const instant = to === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0; const start = performance.now(); const dur = 1100;
    const tick = (t: number) => {
      if (instant) { setN(to); return; }
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to]);
  return <>{pad ? String(n).padStart(2, "0") : n}{suffix}</>;
}

export default function StatsCascade() {
  const ref = useRef<HTMLElement | null>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((e) => e.forEach((x) => { if (x.isIntersecting) { setOn(true); io.disconnect(); } }), { threshold: 0.25 });
    io.observe(el); return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-surface border-y border-line overflow-hidden">
      <div className="container-x py-16 md:py-24 grid lg:grid-cols-[1.15fr_.85fr] gap-12 lg:gap-14 items-center">

        {/* SOL — kademeli kartlar (hero'da görsel sağda olduğu için burada sola alındı) */}
        <div className="order-2 lg:order-1 flex flex-col">
          {stats.map((st, i) => {
            const last = i === stats.length - 1;
            return (
              <div key={st.label}
                className={`stat-card ${last ? "stat-card--accent" : ""} ${on ? "is-in" : ""}`}
                style={{ "--i": i, "--d": `${180 + i * 120}ms` } as React.CSSProperties}>
                <div className={`font-display font-extrabold tabular-nums shrink-0 ${last ? "text-white text-[1.9rem] md:text-[2.1rem]" : "text-primary text-[2rem] md:text-[2.6rem]"}`}>
                  {st.num !== undefined ? <Counter to={st.num} pad={st.pad} suffix={st.suffix} active={on} /> : st.text}
                </div>
                <div className={`text-sm md:text-[.95rem] leading-snug ${last ? "text-white/80" : "text-body"}`}>{st.label}</div>
              </div>
            );
          })}
        </div>

        {/* SAĞ — metin */}
        <div className="order-1 lg:order-2">
          <div className="kicker">Neden {site.name}?</div>
          <h2 className="text-3xl md:text-[2.6rem] font-bold leading-[1.12]">
            Rakam için değil,<br />sahada durduğu için<br />bu işi yapıyoruz.
          </h2>
          <p className="mt-5 text-body max-w-[42ch]">
            Kurulumu yapan da, bir hafta sonra telefonu açan da aynı ekip. {site.district} merkezli çalışıyor, {site.city} genelinde yerinde servis veriyoruz.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/iletisim" className="btn btn-accent">Ücretsiz keşif isteyin</Link>
            <a href={site.phoneHref} className="btn btn-outline">{site.phone}</a>
          </div>
        </div>

      </div>
    </section>
  );
}
