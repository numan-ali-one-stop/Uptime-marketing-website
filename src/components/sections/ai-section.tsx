import Link from "next/link";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { CTAButton } from "@/components/ui/cta-button";
import { GradientText } from "@/components/ui/gradient-text";
import { Section } from "@/components/ui/section";
import { getServiceCategory } from "@/data/services";

import { Checklist } from "./checklist";
import { AiNetworkVisual } from "./visuals/ai-network-visual";

function AiSection() {
  const category = getServiceCategory("ai-solutions");

  if (!category) return null;

  return (
    <Section
      id="ai-solutions"
      className="bg-bg-elevated relative overflow-hidden"
      containerClassName="relative"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_50%,var(--accent-secondary)_0%,transparent_55%)] opacity-20"
      />

      <AnimatedGroup className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <AiNetworkVisual />

        <div className="flex flex-col items-start gap-5">
          <GradientText className="text-xs font-medium tracking-[0.2em] uppercase">
            {category.title}
          </GradientText>
          <h2>{category.tagline}</h2>
          <p className="text-base">
            Build intelligent systems and AI agents that can automate workflows,
            improve efficiency and support your operations.
          </p>
          <Checklist items={category.subServices.map((s) => s.title)} />
          <CTAButton asChild variant="primary" className="mt-2">
            <Link href={`/services/${category.slug}`}>
              Explore AI Solutions
            </Link>
          </CTAButton>
        </div>
      </AnimatedGroup>
    </Section>
  );
}

export { AiSection };
