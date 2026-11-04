import { AnimatedGroup } from "@/components/ui/animated-group";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { findServiceLocation } from "@/data/services";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

import { SubServiceCard } from "./sub-service-card";

type ServiceDetailRelatedProps = {
  relatedSlugs: string[];
  className?: string;
};

function ServiceDetailRelated({
  relatedSlugs,
  className,
}: ServiceDetailRelatedProps) {
  const relatedServices = relatedSlugs
    .map((slug) => findServiceLocation(slug))
    .filter((location): location is NonNullable<typeof location> => Boolean(location));

  if (relatedServices.length === 0) return null;

  return (
    <Section className={cn("bg-bg-surface", className)}>
      <SectionHeading
        eyebrow="Related Services"
        title="You might also need"
        align="center"
        className="mx-auto"
      />

      <AnimatedGroup className="mt-10 md:mt-14 grid grid-cols-1 gap-5 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relatedServices.map(({ category, subService }) => (
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

export { ServiceDetailRelated };
