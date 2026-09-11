import { site } from "@/data/site";

export default function TopBar() {
  const socials = Object.entries(site.social).filter(([, v]) => v);
  return (
    <div className="bg-primary text-white/60 text-[.8rem] border-b border-white/10">
      <div className="container-x h-9 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 truncate">
          <span className="truncate">{site.hoursShort}</span>
          <span className="hidden sm:inline text-white/25">|</span>
          <span className="hidden sm:inline truncate">{site.addressShort}</span>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          {socials.map(([k, v]) => (
            <a key={k} href={v} target="_blank" rel="noopener" className="hidden sm:inline hover:text-white capitalize">{k}</a>
          ))}
          <a href={site.whatsapp} target="_blank" rel="noopener" className="text-[#4ade80] hover:brightness-125 font-medium">WhatsApp</a>
          <a href={site.phoneHref} className="text-white font-semibold">{site.phone}</a>
        </div>
      </div>
    </div>
  );
}
