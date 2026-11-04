import { AnimatedGroup } from "@/components/ui/animated-group";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { ServiceCategory } from "@/types/services";

import { SubServiceCard } from "./sub-service-card";

type CategoryOfferingsProps = {
  category: ServiceCategory;
  className?: string;
};

function CategoryOfferings({ category, className }: CategoryOfferingsProps) {
  return (
    <Section className={cn("bg-bg-surface", className)}>
      <SectionHeading
        eyebrow="What We Offer"
        title={`${category.title} services built around your goals`}
        align="center"
        className="mx-auto"
      />

      <AnimatedGroup className="mt-10 md:mt-14 grid grid-cols-1 gap-5 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {category.subServices.map((subService) => (
          <SubServiceCard
            key={subService.slug}
            categorySlug={category.slug}
            subService={subService}
            icon={getIcon(subService.icon)}
          />
        ))}
      </AnimatedGroup>
    </Section>
  );
}

export { CategoryOfferings };
