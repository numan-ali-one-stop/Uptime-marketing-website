import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceCategories } from "@/data/services";
import { getIcon } from "@/lib/icons";

function ServicesOverview() {
  return (
    <Section className="bg-bg-surface">
      <SectionHeading
        eyebrow="What We Do"
        title="Technology and digital solutions for growth"
        align="center"
        className="mx-auto"
      />

      <AnimatedGroup className="mt-14 flex flex-wrap justify-center gap-6">
        {serviceCategories.map((category) => {
          const Icon = getIcon(category.icon);
          return (
            <Link
              key={category.slug}
              href={`/services/${category.slug}`}
              className="group basis-full md:basis-[calc(50%-0.75rem)] lg:basis-[calc((100%-3rem)/3)]"
            >
              <Card className="h-full p-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--accent)_18%,transparent)_0%,color-mix(in_oklab,var(--accent-secondary)_18%,transparent)_100%)]">
                  <Icon className="text-accent size-6" aria-hidden="true" />
                </div>

                <h3 className="mt-2">{category.title}</h3>

                <ul className="text-text-secondary flex flex-col gap-1.5 text-sm">
                  {category.subServices.slice(0, 3).map((subService) => (
                    <li key={subService.slug}>{subService.title}</li>
                  ))}
                </ul>

                <span className="text-accent mt-auto flex items-center gap-1.5 pt-2 text-sm font-medium">
                  Learn More
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Card>
            </Link>
          );
        })}
      </AnimatedGroup>
    </Section>
  );
}

export { ServicesOverview };
