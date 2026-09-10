"use client";
import { useEffect, useRef, type ReactNode, type ElementType } from "react";

/** Görünüme girince .is-in ekler. delay ms cinsinden kademeli giriş için. */
export default function Reveal({ children, delay = 0, as: Tag = "div", className = "" }:
  { children: ReactNode; delay?: number; as?: ElementType; className?: string }) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { el.classList.add("is-in"); io.disconnect(); } });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${className}`} style={{ "--d": `${delay}ms` } as React.CSSProperties}>{children}</Tag>;
}
