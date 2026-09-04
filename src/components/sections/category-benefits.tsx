import { CheckCircle2, ShieldCheck, TrendingUp, Zap } from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import type { ServiceCategory } from "@/types/services";

const BENEFIT_ICONS = [CheckCircle2, Zap, ShieldCheck, TrendingUp];

type CategoryBenefitsProps = {
  category: ServiceCategory;
  className?: string;
};

function CategoryBenefits({ category, className }: CategoryBenefitsProps) {
  return (
    <Section className={cn("bg-bg-base", className)}>
      <SectionHeading
        eyebrow="Why Choose Us"
        title={`The ${category.title} advantage`}
        align="center"
        className="mx-auto"
      />

      <AnimatedGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {category.benefits.map((benefit, index) => {
          const Icon = BENEFIT_ICONS[index % BENEFIT_ICONS.length];
          return (
            <div key={benefit.title}>
              <Card className="p-6">
                <Icon className="text-accent size-8" aria-hidden="true" />
                <h3 className="font-heading text-text-primary mt-4 text-sm font-semibold tracking-[0.1em] uppercase">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm">{benefit.description}</p>
              </Card>
            </div>
          );
        })}
      </AnimatedGroup>
    </Section>
  );
}

export { CategoryBenefits };
