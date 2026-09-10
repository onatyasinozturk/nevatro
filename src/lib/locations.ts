import data from "@/data/locations.json";

export interface District { name: string; slug: string; neighborhoods: string[] }
export interface Province { name: string; slug: string; districts: District[] }

export const provinces = data as Province[];
export const getProvince = (il: string) => provinces.find((p) => p.slug === il);
export const getDistrict = (il: string, ilce: string) => getProvince(il)?.districts.find((d) => d.slug === ilce);

/** Tüm il/ilçe param çiftleri — generateStaticParams ve sitemap için */
export const allDistrictParams = () =>
  provinces.flatMap((p) => p.districts.map((d) => ({ il: p.slug, ilce: d.slug })));

/** Türkçe "-de/-da" eki (Esenyurt'ta, Kadıköy'de) — ünlü uyumu + sertleşme */
export function locative(name: string) {
  const last = name[name.length - 1].toLowerCase();
  const vowels = [...name.toLowerCase()].filter((c) => "aeıioöuü".includes(c));
  const lv = vowels[vowels.length - 1] ?? "a";
  const back = "aıou".includes(lv);
  const hard = "çfhkpsşt".includes(last);
  return `${name}'${hard ? "t" : "d"}${back ? "a" : "e"}`;
}
