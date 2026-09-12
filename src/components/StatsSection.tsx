"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

interface Stat { value: string; countTo?: number; suffix?: string; label: string }

const stats: Stat[] = [
  { value: "8+", countTo: 8, suffix: "+", label: "Yıllık saha tecrübesi" },
  { value: "Ücretsiz", label: "Yerinde keşif" },
  { value: "Aynı gün", label: "Dönüş" },
  { value: "8+", countTo: 8, suffix: "+", label: "İlçede yerinde servis" },
];

const headingLines = ["Rakamla değil,", "sahayla konuşuyoruz."];

export default function StatsSection() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el.querySelectorAll("[data-anim]"), { opacity: 1, x: 0, y: 0, scale: 1, clearProps: "clipPath" });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 75%", toggleActions: "play none none reverse" },
      });

      tl.fromTo("[data-anim='eyebrow']", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" })
        .fromTo("[data-anim='line']", { opacity: 0, y: 45 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" }, "-=0.2")
        .fromTo("[data-anim='cta']", { opacity: 0, y: 15, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }, "-=0.35")
        .fromTo("[data-anim='card']", { opacity: 0, x: 100, y: -20 }, { opacity: 1, x: 0, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" }, "-=0.4")
        .fromTo("[data-anim='sweep']", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 0.6, ease: "power2.out" }, "-=0.35");

      // Sayaç: yalnızca gerçekten sayısal olanlar
      el.querySelectorAll<HTMLElement>("[data-count]").forEach((node) => {
        const target = Number(node.dataset.count);
        const obj = { n: 0 };
        tl.to(obj, {
          n: target, duration: 1.1, ease: "power2.out",
          onUpdate: () => { node.textContent = String(Math.round(obj.n)); },
        }, "-=0.9");
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const hover = (e: React.MouseEvent<HTMLDivElement>, enter: boolean) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.to(e.currentTarget, { x: enter ? -9 : 0, duration: 0.3, ease: "power2.out", overwrite: "auto" });
  };

  return (
    <section ref={root} className="bg-surface border-y border-line overflow-hidden">
      <div className="container-x py-16 md:py-24 grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
        {/* SOL */}
        <div>
          <div data-anim="eyebrow" className="kicker opacity-0">Neden {site.name}?</div>
          <h2 className="text-3xl md:text-[2.7rem] font-bold leading-[1.1]">
            {headingLines.map((l) => (
              <span key={l} className="block overflow-hidden">
                <span data-anim="line" className="block opacity-0">{l}</span>
              </span>
            ))}
          </h2>
          <p className="mt-5 text-body max-w-[46ch]">
            Kurulumu yapan da, bir hafta sonra telefonu açan da aynı ekip. {site.district} merkezli çalışıyor, {site.city} genelinde yerinde servis veriyoruz.
          </p>
          <div data-anim="cta" className="opacity-0 mt-8 flex flex-wrap gap-3">
            <Link href="/iletisim" className="btn btn-accent">Ücretsiz keşif isteyin</Link>
            <a href={site.phoneHref} className="btn btn-outline">{site.phone}</a>
          </div>
        </div>

        {/* SAĞ — kademeli kartlar */}
        <div className="flex flex-col gap-3 lg:gap-4">
          {stats.map((st, i) => (
            <div
              key={st.label}
              data-anim="card"
              onMouseEnter={(e) => hover(e, true)}
              onMouseLeave={(e) => hover(e, false)}
              className={`opacity-0 card-hard flex items-center gap-5 px-6 py-5 lg:px-7 lg:py-6 ${i === stats.length - 1 ? "bg-primary border-primary" : ""}`}
              style={{ marginLeft: `var(--step-${i})` }}
            >
              {i === stats.length - 1 && <span data-anim="sweep" className="absolute inset-0 bg-primary-2" style={{ clipPath: "inset(0 100% 0 0)" }} aria-hidden />}
              <div className="relative flex items-baseline gap-0.5 min-w-[5.5rem] lg:min-w-[7rem]">
                {st.countTo !== undefined ? (
                  <>
                    <span data-count={st.countTo} className={`font-display font-extrabold text-3xl lg:text-[2.4rem] tabular-nums ${i === stats.length - 1 ? "text-white" : "text-primary"}`}>0</span>
                    <span className={`font-display font-extrabold text-3xl lg:text-[2.4rem] ${i === stats.length - 1 ? "text-accent" : "text-accent"}`}>{st.suffix}</span>
                  </>
                ) : (
                  <span className={`font-display font-extrabold text-2xl lg:text-[1.9rem] ${i === stats.length - 1 ? "text-white" : "text-primary"}`}>{st.value}</span>
                )}
              </div>
              <div className={`relative text-sm lg:text-base ${i === stats.length - 1 ? "text-white/75" : "text-body"}`}>{st.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
