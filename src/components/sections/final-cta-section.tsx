import Image from "next/image";
import Link from "next/link";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { CTAButton } from "@/components/ui/cta-button";
import { Section } from "@/components/ui/section";
import { pagePhotos } from "@/data/photos";
import { cn } from "@/lib/utils";

type FinalCtaSectionProps = {
  heading?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
};

function FinalCtaSection({
  heading = "Ready to build something that grows your business?",
  body = "Let's talk about what you're trying to build — no pressure, just a clear plan.",
  primaryLabel = "Get Started",
  primaryHref = "/contact",
  secondaryLabel = "Book a Free Consultation",
  secondaryHref = "/contact",
  className,
}: FinalCtaSectionProps = {}) {
  return (
    <Section className={cn("bg-bg-base", className)}>
      <div className="rounded-3xl bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-secondary)_100%)] p-px">
        <div className="bg-bg-elevated relative overflow-hidden rounded-[calc(1.5rem-1px)]">
          <Image
            src={pagePhotos.ctaBackground.src}
            alt=""
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover opacity-15"
          />
          <AnimatedGroup className="relative flex flex-col items-center gap-4 px-5 py-12 text-center sm:px-12 md:py-16">
            <h2 className="max-w-3xl">{heading}</h2>
            <p className="text-text-primary/80 max-w-xl text-base">{body}</p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <CTAButton asChild variant="primary" trackingLabel={primaryLabel}>
                <Link href={primaryHref}>{primaryLabel}</Link>
              </CTAButton>
              <CTAButton
                asChild
                variant="secondary"
                trackingLabel={secondaryLabel}
              >
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </CTAButton>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </Section>
  );
}

export { FinalCtaSection };
