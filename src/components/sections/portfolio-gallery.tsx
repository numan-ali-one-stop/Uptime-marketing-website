"use client";

import * as React from "react";
import dynamic from "next/dynamic";

import { ProjectImage } from "@/components/ui/project-image";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

// The lightbox (Radix Dialog + keyboard nav) renders nothing until a visitor
// clicks a thumbnail, so it's split into its own chunk and skipped during
// SSR entirely — no reason to ship or hydrate it for the common case where
// nobody opens it.
const PortfolioLightbox = dynamic(
  () =>
    import("./portfolio-lightbox").then((mod) => mod.PortfolioLightbox),
  { ssr: false }
);

type PortfolioGalleryProps = {
  images: string[];
  projectTitle: string;
  className?: string;
};

function PortfolioGallery({
  images,
  projectTitle,
  className,
}: PortfolioGalleryProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const goTo = React.useCallback(
    (delta: number) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        return (current + delta + images.length) % images.length;
      });
    },
    [images.length]
  );

  if (images.length === 0) return null;

  return (
    <Section className={cn("bg-bg-base", className)}>
      <SectionHeading
        eyebrow="Gallery"
        title="A closer look"
        align="center"
        className="mx-auto"
      />

      <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent relative aspect-video overflow-hidden rounded-xl outline-none"
            aria-label={`Open image ${index + 1} of ${images.length} from the ${projectTitle} gallery`}
          >
            <ProjectImage
              src={image}
              alt={`${projectTitle} — gallery image ${index + 1}`}
              index={index}
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {openIndex !== null ? (
        <PortfolioLightbox
          images={images}
          projectTitle={projectTitle}
          openIndex={openIndex}
          onOpenChange={(open) => !open && setOpenIndex(null)}
          onNavigate={goTo}
        />
      ) : null}
    </Section>
  );
}

export { PortfolioGallery };
