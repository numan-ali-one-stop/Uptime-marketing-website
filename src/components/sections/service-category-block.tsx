import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { CTAButton } from "@/components/ui/cta-button";
import { Section } from "@/components/ui/section";
import type { ServiceCategory } from "@/types/services";
import { getIcon, type IconComponent } from "@/lib/icons";
import { cn } from "@/lib/utils";

import { SubServiceCard } from "./sub-service-card";

type ServiceCategoryBlockProps = {
  category: ServiceCategory;
  icon: IconComponent;
  reverse?: boolean;
  className?: string;
};

function ServiceCategoryBlock({
  category,
  icon: Icon,
  reverse = false,
  className,
}: ServiceCategoryBlockProps) {
  return (
    <Section
      id={category.slug}
      className={cn("scroll-mt-40", className)}
    >
      <AnimatedGroup className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div
          className={cn(
            "flex flex-col items-start gap-5",
            reverse && "lg:order-2"
          )}
        >
          <div className="flex size-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--accent)_18%,transparent)_0%,color-mix(in_oklab,var(--accent-secondary)_18%,transparent)_100%)]">
            <Icon className="text-accent size-7" aria-hidden="true" />
          </div>
          <h2>{category.title}</h2>
          <p className="text-accent text-sm font-medium">{category.tagline}</p>
          <p className="text-base">{category.description}</p>
          <CTAButton asChild variant="secondary" className="mt-2">
            <Link href={`/services/${category.slug}`}>
              View {category.title}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </CTAButton>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 gap-4 sm:grid-cols-2",
            reverse && "lg:order-1"
          )}
        >
          {category.subServices.map((subService) => (
            <SubServiceCard
              key={subService.slug}
              categorySlug={category.slug}
              subService={subService}
              icon={getIcon(subService.icon)}
            />
          ))}
        </div>
      </AnimatedGroup>
    </Section>
  );
}

export { ServiceCategoryBlock };
