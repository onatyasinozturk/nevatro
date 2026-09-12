"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";

/**
 * "Neden Nevatro?" — koyu zeminde dikey interaktif liste.
 * Üzerine gelinen satır büyür, altında bir satır açıklama belirir.
 * Sağ sütunun yüksekliği SABİT; satırlar yüksekliği paylaşır (flex-grow),
 * bu yüzden hiçbir şey aşağı-yukarı zıplamaz.
 */
type Item = { label: string; detail: string } & ({ big: number; pad?: boolean; suffix?: string } | { text: string });
const items: Item[] = [
  { big: site.experienceYears, pad: true, suffix: "+", label: "Yıllık saha tecrübesi", detail: "Ofis, mağaza, depo ve sitelerde kurulum ve bakım. Masa başı danışmanlık değil, sahada geçen yıllar." },
  { big: site.serviceArea.length, pad: true, suffix: "+", label: "İlçede yerinde servis", detail: `${site.serviceArea.join(", ")} ve çevresi. Diğer ilçelere planlı keşif.` },
  { text: "Ücretsiz", label: "Keşif ve teklif", detail: "Yerinde inceleme, kalem kalem yazılı teklif. Teklifi kabul etme zorunluluğu yok." },
  { text: "Aynı gün", label: "Dönüş", detail: `${site.hoursShort}. Acil durumlarda önce uzaktan bağlanıyor, gerekirse aynı gün geliyoruz.` },
];

function Counter({ to, pad, suffix, active }: { to: number; pad?: boolean; suffix?: string; active: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    const instant = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0; const start = performance.now(); const dur = 1000;
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
  const [seen, setSeen] = useState(false);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((e) => e.forEach((x) => { if (x.isIntersecting) { setSeen(true); io.disconnect(); } }), { threshold: 0.3 });
    io.observe(el); return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-bg border-y border-line overflow-hidden">
      <div className="container-x py-16 md:py-24 grid lg:grid-cols-[.9fr_1.1fr] gap-12 lg:gap-20 items-center">

        {/* SOL — metin */}
        <div>
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

        {/* SAĞ — interaktif dikey liste (sabit yükseklik) */}
        <div className="flex flex-col h-[400px] lg:h-[440px] border-b border-line" onMouseLeave={() => setActive(0)}>
          {items.map((it, i) => {
            const on = i === active;
            return (
              <div
                key={it.label}
                role="button" tabIndex={0} aria-expanded={on}
                onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(i); } }}
                className={`relative overflow-hidden basis-0 min-h-0 cursor-pointer border-t transition-[flex-grow,border-color] duration-500 ease-[cubic-bezier(.2,.7,.2,1)] ${on ? "grow-[2.3] border-accent" : "grow border-line hover:border-muted"}`}
              >
                {/* sol vurgu çubuğu */}
                <span className={`absolute left-0 top-0 bottom-0 w-[3px] bg-accent origin-top transition-transform duration-500 ${on ? "scale-y-100" : "scale-y-0"}`} aria-hidden />

                <div className="pl-6 lg:pl-8 pt-4 lg:pt-5 flex items-baseline gap-5">
                  <span className={`font-display font-extrabold tabular-nums leading-none tracking-[-.03em] shrink-0 transition-colors duration-400 ${on ? "text-accent" : "text-line"} ${"text" in it ? "text-[1.7rem] lg:text-[2.1rem]" : "text-[2.2rem] lg:text-[2.8rem]"}`}>
                    {"big" in it ? <Counter to={it.big} pad={it.pad} suffix={it.suffix} active={seen} /> : it.text}
                  </span>
                  <span className={`text-sm lg:text-base transition-colors duration-400 ${on ? "text-primary" : "text-muted"}`}>{it.label}</span>
                </div>

                <p
                  aria-hidden={!on}
                  className={`absolute left-6 lg:left-8 right-0 top-[4.4rem] lg:top-[5.2rem] text-sm lg:text-[.95rem] text-body leading-relaxed max-w-[46ch] transition-[opacity,transform] duration-400 ease-[cubic-bezier(.2,.7,.2,1)] ${on ? "opacity-100 translate-y-0 delay-150" : "opacity-0 translate-y-2 pointer-events-none"}`}
                >
                  {it.detail}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
