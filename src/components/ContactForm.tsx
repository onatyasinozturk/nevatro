"use client";
import { useState } from "react";
import { services } from "@/data/services";
import { site } from "@/data/site";

/**
 * Form şimdilik WhatsApp'a yönlendiriyor (backend yok).
 * Gerçek gönderim için: Formspree / Resend / kendi API route'unuz.
 */
export default function ContactForm() {
  const [f, setF] = useState({ name: "", phone: "", service: "", msg: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Merhaba, ${f.name}. ${f.service ? `${f.service} hakkında ` : ""}teklif almak istiyorum. ${f.msg}${f.phone ? ` Tel: ${f.phone}` : ""}`;
    window.open(`${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };
  const inp = "w-full px-3.5 py-3 rounded-[2px] border border-line bg-white text-body focus:border-accent";
  return (
    <form onSubmit={submit} className="card p-7">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block text-xs font-semibold text-primary">Ad Soyad<input required className={`${inp} mt-1.5`} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></label>
        <label className="block text-xs font-semibold text-primary">Telefon<input required type="tel" className={`${inp} mt-1.5`} value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} /></label>
      </div>
      <label className="block mt-4 text-xs font-semibold text-primary">İlgilendiğiniz hizmet
        <select className={`${inp} mt-1.5`} value={f.service} onChange={(e) => setF({ ...f, service: e.target.value })}>
          <option value="">Seçin</option>
          {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
        </select>
      </label>
      <label className="block mt-4 text-xs font-semibold text-primary">Kısaca durumunuz<textarea rows={4} className={`${inp} mt-1.5`} value={f.msg} onChange={(e) => setF({ ...f, msg: e.target.value })} /></label>
      <button type="submit" className="btn btn-accent w-full mt-5">Teklif İste</button>
      <p className="mt-3 text-xs text-muted">Gönderdiğinizde mesajınız WhatsApp üzerinden bize iletilir.</p>
    </form>
  );
}
