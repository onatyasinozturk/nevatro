import { site } from "@/data/site";
export default function WhatsAppFloat() {
  return (
    <a href={site.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp ile yazın"
      className="fixed left-4 bottom-4 z-40 flex items-center gap-2 bg-[#25D366] text-white font-display font-semibold text-sm px-4 py-3 rounded-full shadow-lg hover:brightness-95">
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1.1 2.7.1.2 1.9 2.9 4.6 4 1.7.7 2.3.8 3.1.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.3z"/></svg>
      WhatsApp
    </a>
  );
}
