"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ProjectImage } from "@/components/ui/project-image";

type PortfolioLightboxProps = {
  images: string[];
  projectTitle: string;
  openIndex: number | null;
  onOpenChange: (open: boolean) => void;
  onNavigate: (delta: number) => void;
};

/**
 * The actual modal/lightbox UI, split out from PortfolioGallery so it can be
 * loaded via next/dynamic(..., { ssr: false }) — it renders nothing until a
 * visitor clicks a thumbnail, so there's no reason to ship or hydrate its
 * Radix Dialog + keyboard-nav code on initial page load.
 */
function PortfolioLightbox({
  images,
  projectTitle,
  openIndex,
  onOpenChange,
  onNavigate,
}: PortfolioLightboxProps) {
  React.useEffect(() => {
    if (openIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") onNavigate(1);
      if (event.key === "ArrowLeft") onNavigate(-1);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, onNavigate]);

  return (
    <Dialog open={openIndex !== null} onOpenChange={onOpenChange}>
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
              onClick={() => onNavigate(-1)}
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
              onClick={() => onNavigate(1)}
              aria-label="Next image"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

export { PortfolioLightbox };
