/**
 * Ham Türkiye il/ilçe/mahalle JSON'unu (data-raw/) temizleyip
 * src/data/locations.json üretir.
 *
 * Kullanım:  node scripts/build-locations.mjs
 * Hangi illerin üretileceği src/data/location-config.json'da.
 * Ham veri lowercase() ile bozulmuş (İ -> i̇, I -> i); burada düzeltiliyor.
 */
import { readFileSync, writeFileSync } from "node:fs";

const raw = JSON.parse(readFileSync("data-raw/turkiye-il-ilce-mahalle-koy.json", "utf8"));
const cfg = JSON.parse(readFileSync("src/data/location-config.json", "utf8"));

function fixTurkish(s) {
  // "i̇" (i + U+0307) aslında "i"; kalan düz "i" aslında "ı"
  return s.replace(/i\u0307/g, "\u0000").replace(/i/g, "ı").replace(/\u0000/g, "i");
}
const map = { ç:"c", ğ:"g", ı:"i", i:"i", ö:"o", ş:"s", ü:"u", Ç:"c", Ğ:"g", İ:"i", I:"i", Ö:"o", Ş:"s", Ü:"u" };
function slugify(s) {
  return s.split("").map(c => map[c] ?? c).join("")
    .toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

const out = [];
for (const [ilRaw, ilceler] of Object.entries(raw)) {
  const il = fixTurkish(ilRaw);
  const ilSlug = slugify(il);
  if (cfg.provinces.length && !cfg.provinces.includes(ilSlug)) continue;
  const districts = [];
  for (const [ilceRaw, mahalleler] of Object.entries(ilceler)) {
    const ilce = fixTurkish(ilceRaw);
    const ilceSlug = slugify(ilce);
    const allow = cfg.districts?.[ilSlug];
    if (allow && allow.length && !allow.includes(ilceSlug)) continue;
    districts.push({
      name: ilce, slug: ilceSlug,
      neighborhoods: mahalleler.map(m => fixTurkish(m).replace(/\s+Mahallesi$/i, "").trim()).sort((a,b)=>a.localeCompare(b,"tr")),
    });
  }
  districts.sort((a,b)=>a.name.localeCompare(b.name,"tr"));
  out.push({ name: il, slug: ilSlug, districts });
}
writeFileSync("src/data/locations.json", JSON.stringify(out, null, 0));
console.log(`OK: ${out.length} il, ${out.reduce((n,i)=>n+i.districts.length,0)} ilçe yazıldı -> src/data/locations.json`);
