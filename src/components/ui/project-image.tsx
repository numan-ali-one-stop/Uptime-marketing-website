import Image from "next/image";

import { cn } from "@/lib/utils";

import { GradientPlaceholder } from "./gradient-placeholder";

// A 1x1 black pixel — used purely as a valid `blurDataURL` so the real
// next/image branch below is fully wired for when real assets arrive.
const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=";

type ProjectImageProps = {
  src?: string;
  alt: string;
  sizes: string;
  label?: string;
  index?: number;
  className?: string;
  /** Set true only for the single above-the-fold hero usage (e.g. the portfolio detail hero image). */
  priority?: boolean;
};

/**
 * Renders a real `next/image` (with sizes + blur placeholder) when `src` is
 * provided, or a gradient placeholder when it isn't. Every project image
 * field is an empty string until real media exists, so this always renders
 * the placeholder branch today — the real-image branch is ready to activate
 * the moment a src is supplied.
 */
function ProjectImage({
  src,
  alt,
  sizes,
  label,
  index,
  className,
  priority = false,
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
      priority={priority}
      loading={priority ? undefined : "lazy"}
      placeholder="blur"
      blurDataURL={BLUR_DATA_URL}
      className={cn("object-cover", className)}
    />
  );
}

export { ProjectImage };
