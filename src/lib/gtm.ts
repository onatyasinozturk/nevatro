/** dataLayer'a olay gönderir. GTM kurulu değilse sessizce hiçbir şey yapmaz. */
declare global {
  interface Window { dataLayer?: Record<string, unknown>[] }
}

export function pushEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
