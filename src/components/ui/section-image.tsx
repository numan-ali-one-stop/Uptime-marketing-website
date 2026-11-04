import Image from "next/image";

import type { Photo } from "@/data/photos";
import { cn } from "@/lib/utils";

type SectionImageProps = {
  photo: Photo;
  sizes: string;
  className?: string;
  /** Set only for the one above-the-fold image on a page. */
  preload?: boolean;
};

/** Framed photo with a fixed aspect ratio, so layout never shifts on load. */
function SectionImage({
  photo,
  sizes,
  className,
  preload = false,
}: SectionImageProps) {
  return (
    <div
      className={cn(
        "border-border relative aspect-[4/3] w-full overflow-hidden rounded-2xl border shadow-[0_0_32px_-8px_var(--accent-glow)]",
        className
      )}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover"
      />
    </div>
  );
}

export { SectionImage };
