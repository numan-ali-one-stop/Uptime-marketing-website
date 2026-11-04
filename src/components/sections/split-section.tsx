import Link from "next/link";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { CTAButton } from "@/components/ui/cta-button";
import { GradientText } from "@/components/ui/gradient-text";
import { Section } from "@/components/ui/section";
import { SectionImage } from "@/components/ui/section-image";
import type { Photo } from "@/data/photos";
import { cn } from "@/lib/utils";

import { Checklist, type ChecklistItem } from "./checklist";

type SplitSectionProps = {
  id?: string;
  eyebrow: string;
  heading: string;
  body: string;
  checklistItems: ChecklistItem[];
  ctaLabel: string;
  ctaHref: string;
  photo: Photo;
  visualPosition?: "left" | "right";
  className?: string;
};

function SplitSection({
  id,
  eyebrow,
  heading,
  body,
  checklistItems,
  ctaLabel,
  ctaHref,
  photo,
  visualPosition = "right",
  className,
}: SplitSectionProps) {
  return (
    <Section id={id} className={cn("bg-bg-base", className)}>
      <AnimatedGroup className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div
          className={cn(
            "flex min-w-0 flex-col items-start gap-5",
            visualPosition === "left" && "lg:order-2"
          )}
        >
          <GradientText className="text-xs font-medium tracking-[0.2em] uppercase">
            {eyebrow}
          </GradientText>
          <h2>{heading}</h2>
          <p className="text-base">{body}</p>
          <Checklist items={checklistItems} />
          <CTAButton asChild variant="primary" className="mt-2">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </CTAButton>
        </div>

        <div className={cn(visualPosition === "left" && "lg:order-1")}>
          <SectionImage
            photo={photo}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[16/10] lg:aspect-[4/3]"
          />
        </div>
      </AnimatedGroup>
    </Section>
  );
}

export { SplitSection };
