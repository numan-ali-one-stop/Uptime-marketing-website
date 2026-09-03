import Link from "next/link";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { CTAButton } from "@/components/ui/cta-button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { getServiceCategory } from "@/data/services";

import { Checklist } from "./checklist";
import { GrowthChartVisual } from "./visuals/growth-chart-visual";

function DigitalMarketingSection() {
  const category = getServiceCategory("digital-marketing");

  if (!category) return null;

  return (
    <Section id="digital-marketing" className="bg-bg-surface">
      <SectionHeading
        eyebrow={category.title}
        title={category.tagline}
        subtitle="We help businesses build visibility, engage their audience and create consistent digital marketing campaigns."
        align="center"
        className="mx-auto"
      />

      <AnimatedGroup className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <Checklist items={category.subServices.map((s) => s.title)} />
          <CTAButton asChild variant="primary">
            <Link href={`/services/${category.slug}`}>
              Explore Digital Marketing
            </Link>
          </CTAButton>
        </div>

        <GrowthChartVisual />
      </AnimatedGroup>
    </Section>
  );
}

export { DigitalMarketingSection };
