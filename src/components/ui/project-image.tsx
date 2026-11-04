import Image from "next/image";

import { cn } from "@/lib/utils";

import { GradientPlaceholder } from "./gradient-placeholder";

// A 1x1 black pixel, used as the `blurDataURL` while the real image loads.
const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=";

type ProjectImageProps = {
  src?: string;
  alt: string;
  sizes: string;
  label?: string;
  index?: number;
  className?: string;
};

/**
 * Renders a real `next/image` (with sizes + blur placeholder) when `src` is
 * provided, or a gradient placeholder when it isn't.
 */
function ProjectImage({
  src,
  alt,
  sizes,
  label,
  index,
  className,
}: ProjectImageProps) {
  if (!src) {
    return <GradientPlaceholder className={className} label={label} index={index} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      placeholder="blur"
      blurDataURL={BLUR_DATA_URL}
      className={cn("object-cover", className)}
    />
  );
}

export { ProjectImage };
