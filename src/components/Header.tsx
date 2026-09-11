"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { branches, byBranch } from "@/data/services";
import { site } from "@/data/site";
import TopBar from "./TopBar";

const nav = [
  { href: `/hizmetler/${branches.dijital.slug}`, label: "Dijital", menu: "dijital" as const },
  { href: `/hizmetler/${branches.it.slug}`, label: "IT Çözümleri", menu: "it" as const },
  { href: "/destek", label: "Destek Merkezi" },
  { href: "/sektorler", label: "Sektörler" },
  { href: "/blog", label: "Blog" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);
  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur border-b border-line">
      <div className="hidden md:block"><TopBar /></div>
      <div className="container-x h-[68px] flex items-center justify-between gap-4">
        <Link href="/" aria-label={`${site.name} ana sayfa`}><Logo /></Link>

        <nav className="hidden lg:flex items-center" aria-label="Ana menü">
          <ul className="flex items-center">
            {nav.map((n) => (
              <li key={n.href} className="relative group">
                <Link href={n.href} className="block px-3 py-6 text-[.93rem] font-medium text-primary hover:text-accent transition-colors">{n.label}</Link>
                {n.menu && (
                  <div className="absolute left-0 top-full pt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-opacity">
                    <div className="card p-3 w-[280px] shadow-xl shadow-primary/10">
                      <div className="px-3 py-2 text-xs font-semibold text-muted">{branches[n.menu].claim}</div>
                      {byBranch(n.menu).map((s) => (
                        <Link key={s.slug} href={`/hizmetler/${s.slug}`} className="block px-3 py-2 rounded-lg text-sm text-body hover:bg-bg hover:text-primary">{s.title}</Link>
                      ))}
                      <Link href={n.href} className="block px-3 py-2 mt-1 text-sm font-semibold text-accent">Tümünü gör</Link>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={site.phoneHref} className="font-display font-bold text-primary hover:text-accent">{site.phone}</a>
          <Link href="/iletisim" className="btn btn-accent">Teklif Al</Link>
        </div>

        <button className="lg:hidden w-11 h-10 border border-line rounded-lg grid place-items-center" aria-label="Menü" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="relative block w-5 h-0.5 bg-primary before:absolute before:-top-1.5 before:left-0 before:w-5 before:h-0.5 before:bg-primary after:absolute after:top-1.5 after:left-0 after:w-5 after:h-0.5 after:bg-primary" />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-line bg-surface" aria-label="Mobil menü">
          <div className="container-x py-3">
            {nav.map((n) => (
              <div key={n.href} className="border-b border-line-soft">
                <div className="flex items-center justify-between">
                  <Link href={n.href} className="block py-3 font-medium text-primary" onClick={() => setOpen(false)}>{n.label}</Link>
                  {n.menu && <button className="px-3 py-3 text-accent" aria-label="Alt menü" onClick={() => setSub(sub === n.menu ? null : n.menu)}>{sub === n.menu ? "−" : "+"}</button>}
                </div>
                {n.menu && sub === n.menu && (
                  <div className="pb-3 pl-3">
                    {byBranch(n.menu).map((s) => (
                      <Link key={s.slug} href={`/hizmetler/${s.slug}`} className="block py-2 text-sm text-body" onClick={() => setOpen(false)}>{s.title}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href={site.phoneHref} className="btn btn-outline w-full mt-4">{site.phone}</a>
            <Link href="/iletisim" className="btn btn-accent w-full mt-2" onClick={() => setOpen(false)}>Teklif Al</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
