import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceCategories } from "@/data/services";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

type CategoryRelatedServicesProps = {
  currentSlug: string;
  className?: string;
};

function CategoryRelatedServices({
  currentSlug,
  className,
}: CategoryRelatedServicesProps) {
  const relatedCategories = serviceCategories.filter(
    (category) => category.slug !== currentSlug
  );

  return (
    <Section className={cn("bg-bg-base", className)}>
      <SectionHeading
        eyebrow="Related Services"
        title="Explore our other services"
        align="center"
        className="mx-auto"
      />

      <AnimatedGroup className="mt-10 md:mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {relatedCategories.map((category) => {
          const Icon = getIcon(category.icon);
          return (
            <div key={category.slug}>
            <Link
              href={`/services/${category.slug}`}
              className="group block h-full"
            >
              <Card className="h-full gap-3 p-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--accent)_18%,transparent)_0%,color-mix(in_oklab,var(--accent-secondary)_18%,transparent)_100%)]">
                  <Icon className="text-accent size-6" aria-hidden="true" />
                </div>
                <h3>{category.title}</h3>
                <p className="text-text-secondary text-sm">
                  {category.tagline}
                </p>
                <span className="text-accent mt-auto flex items-center gap-1.5 pt-2 text-sm font-medium">
                  Learn more
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Card>
            </Link>
            </div>
          );
        })}
      </AnimatedGroup>
    </Section>
  );
}

export { CategoryRelatedServices };
