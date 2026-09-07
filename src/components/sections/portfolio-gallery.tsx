"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ProjectImage } from "@/components/ui/project-image";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

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

  React.useEffect(() => {
    if (openIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") goTo(1);
      if (event.key === "ArrowLeft") goTo(-1);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, goTo]);

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
            className="group focus-visible:ring-ring/50 relative aspect-video overflow-hidden rounded-xl focus-visible:ring-[3px] focus-visible:outline-none"
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

      <Dialog
        open={openIndex !== null}
        onOpenChange={(open) => !open && setOpenIndex(null)}
      >
        <DialogContent
          className="max-w-3xl border-none bg-transparent p-0 shadow-none sm:max-w-3xl"
          showCloseButton
        >
          <DialogTitle className="sr-only">
            {projectTitle} gallery image{" "}
            {openIndex !== null ? openIndex + 1 : ""} of {images.length}
          </DialogTitle>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
            {openIndex !== null ? (
              <ProjectImage
                src={images[openIndex]}
                alt={`${projectTitle} — gallery image ${openIndex + 1}`}
                index={openIndex}
                sizes="100vw"
              />
            ) : null}
          </div>

          {images.length > 1 ? (
            <div className="flex items-center justify-between px-1">
              <button
                type="button"
                onClick={() => goTo(-1)}
                aria-label="Previous image"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <span className="text-sm text-white/80">
                {openIndex !== null ? openIndex + 1 : 0} / {images.length}
              </span>
              <button
                type="button"
                onClick={() => goTo(1)}
                aria-label="Next image"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </Section>
  );
}

export { PortfolioGallery };
