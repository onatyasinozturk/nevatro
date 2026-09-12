import Image from "next/image";
import { IMAGE_SIZES, MASTER_IMAGE } from "@/lib/images";

/**
 * Sabit oranlı görsel çerçevesi. Yüklenen dosyanın kendi ölçüsü ne olursa olsun
 * alanın oranı değişmez (CLS yok), görsel esnetilmez, ortadan kırpılır.
 */
export default function MediaFrame({ src, alt, sizes = IMAGE_SIZES.detail, priority = false, className = "" }:
  { src: string; alt: string; sizes?: string; priority?: boolean; className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden border border-line bg-primary ${className}`} style={{ aspectRatio: MASTER_IMAGE.ratio }}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} loading={priority ? undefined : "lazy"}
        className="object-cover object-center" />
    </div>
  );
}
