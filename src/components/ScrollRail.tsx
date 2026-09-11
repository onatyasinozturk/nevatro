"use client";
import { useEffect, useRef, useState } from "react";

/** Sol kenarda dikey ilerleme çizgisi. Aşağı inince dolar, yukarı çıkınca geri çekilir. */
export default function ScrollRail() {
  const fill = useRef<HTMLDivElement | null>(null);
  const dot = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (fill.current) fill.current.style.height = `${p * 100}%`;
      if (dot.current) dot.current.style.top = `calc(${p * 100}% - 4.5px)`;
      setShow(window.scrollY > 400);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div className="scroll-rail" aria-hidden>
        <div ref={fill} className="scroll-rail__fill" style={{ height: "0%" }} />
        <div ref={dot} className="scroll-rail__dot" style={{ top: "-4.5px" }} />
      </div>
      <button className="scroll-rail__label" style={{ opacity: show ? 1 : 0, pointerEvents: show ? "auto" : "none" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Yukarı Çık
      </button>
    </>
  );
}
