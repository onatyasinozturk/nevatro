# Nevatro — web sitesi

Next.js 16 (App Router) + Tailwind v4 + TypeScript. CMS yok; içerik dosyada.

## Kurulum (mevcut projenin üstüne)
1. Bu klasördeki her şeyi `C:\projeler\vona` (ya da yeni klasör) içine kopyala, üzerine yaz.
2. `npm install` (gray-matter, remark, remark-html eklendi)
3. `npm run dev` → http://localhost:3000

## Nerede ne var
| İş | Dosya |
|---|---|
| Renkler (tek yer) | `src/app/globals.css` → `:root` bloğu |
| Firma bilgileri (tel, adres, WhatsApp, domain) | `src/data/site.ts` |
| Hizmetler (metin, madde, SSS) | `src/data/services.ts` |
| Sektörler | `src/data/sectors.ts` |
| Projeler / örnek çalışmalar | `src/data/projects.ts` (`real: true` yapınca başlık "Projeler" olur) |
| Blog yazısı eklemek | `content/blog/<slug>.md` — frontmatter: title, date, category, excerpt |
| İlçeye özel metin | `content/bolgeler/<il>/<ilce>.md` — yoksa kısa şablon basılır |
| Hangi il/ilçeler üretilsin | `src/data/location-config.json` → sonra `npm run locations` |
| Logo | `src/components/Logo.tsx` (geçici metin logosu) |
| Hero görseli | `src/components/HeroVisual.tsx` (SVG; 3D render gelince değiştir) |
| İletişim formu | `src/components/ContactForm.tsx` (şimdilik WhatsApp'a yönlendirir) |

## Lokasyon sayfaları
Ham veri `data-raw/turkiye-il-ilce-mahalle-koy.json`. `npm run locations` bunu temizleyip
`src/data/locations.json` üretir. Varsayılan: sadece İstanbul (39 ilçe).
Tüm Türkiye'yi açmak mümkün ama önerilmez: içeriksiz binlerce sayfa "doorway page"
sayılır, Google görmezden gelir. Gerçekten hizmet verdiğin bölgeleri aç, her birine
`content/bolgeler/` altında özgün metin yaz.

## Yayına alma
- `src/data/site.ts` içindeki `url`'i gerçek domainle değiştir (sitemap/canonical buradan).
- Vercel'e bağla, domaini ekle, Search Console'a sitemap.xml'i ver.
