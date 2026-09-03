import Link from "next/link";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { CTAButton } from "@/components/ui/cta-button";
import { GradientText } from "@/components/ui/gradient-text";
import { Section } from "@/components/ui/section";
import { getServiceCategory } from "@/data/services";

import { DesignBlobsVisual } from "./visuals/design-blobs-visual";

function DesignCreativeSection() {
  const category = getServiceCategory("design-creative");

  if (!category) return null;

  return (
    <Section id="design-creative" className="bg-bg-base">
      <AnimatedGroup className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-5">
          <GradientText className="text-xs font-medium tracking-[0.2em] uppercase">
            {category.title}
          </GradientText>
          <h2>{category.tagline}</h2>
          <p className="text-base">
            From logos and branding to digital creatives, we create designs that
            give businesses a professional identity.
          </p>

          <div className="text-text-secondary flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
            {category.subServices.map((subService, i) => (
              <span key={subService.slug} className="flex items-center gap-3">
                {i > 0 ? (
                  <span aria-hidden="true" className="text-border-hover">
                    |
                  </span>
                ) : null}
                {subService.title}
              </span>
            ))}
          </div>

          <CTAButton asChild variant="primary" className="mt-2">
            <Link href={`/services/${category.slug}`}>
              Explore Design Services
            </Link>
          </CTAButton>
        </div>

        <DesignBlobsVisual />
      </AnimatedGroup>
    </Section>
  );
}

export { DesignCreativeSection };
