import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceCategories } from "@/data/services";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

type AboutWhatWeDoProps = {
  className?: string;
};

function AboutWhatWeDo({ className }: AboutWhatWeDoProps) {
  return (
    <Section className={cn("bg-bg-surface", className)}>
      <SectionHeading
        eyebrow="What We Do"
        title="Five disciplines, one connected strategy"
        align="center"
        className="mx-auto"
      />

      <AnimatedGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {serviceCategories.map((category) => {
          const Icon = getIcon(category.icon);
          return (
            <Link key={category.slug} href={`/services/${category.slug}`} className="group">
              <Card className="h-full items-center p-6 text-center">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--accent)_18%,transparent)_0%,color-mix(in_oklab,var(--accent-secondary)_18%,transparent)_100%)]">
                  <Icon className="text-accent size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-2 text-base">{category.title}</h3>
                <span className="text-accent mt-auto flex items-center gap-1.5 pt-2 text-sm font-medium">
                  Learn more
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

export { AboutWhatWeDo };
