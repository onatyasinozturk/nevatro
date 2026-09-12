import Image from "next/image";
import Reveal from "./Reveal";

/** public/img/saha içinde fotoğraf varsa anasayfada "Sahadan" şeridi gösterir */
export default function SahaGallery({ images }: { images: string[] }) {
  if (!images.length) return null;
  return (
    <section className="bg-surface border-y border-line">
      <div className="container-x py-16 md:py-20">
        <Reveal><div className="kicker">Sahadan</div><h2 className="text-3xl md:text-4xl font-bold max-w-[24ch]">Kurduğumuz sistemlerden kareler</h2></Reveal>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.slice(0, 8).map((src, i) => (
            <Reveal key={src} delay={i * 70} className={`relative overflow-hidden rounded-[2px] ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}>
              <Image src={src} alt="Sahadan kurulum fotoğrafı" fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
