import Image from "next/image";
import Link from "next/link";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Card } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/cta-button";
import { Section } from "@/components/ui/section";
import { categoryHeroImages } from "@/data/service-images";
import type { IconComponent } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { ServiceCategory } from "@/types/services";

import { Checklist } from "./checklist";

type CategoryOverviewProps = {
  category: ServiceCategory;
  icon: IconComponent;
  className?: string;
};

function CategoryOverview({
  category,
  icon: Icon,
  className,
}: CategoryOverviewProps) {
  const image = categoryHeroImages[category.slug];

  return (
    <Section className={cn("bg-bg-base", className)}>
      <AnimatedGroup className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-5">
          <h2>Overview</h2>
          {category.overview.map((paragraph) => (
            <p key={paragraph} className="text-base">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          {image ? (
            <div className="border-border relative aspect-[4/3] w-full overflow-hidden rounded-2xl border shadow-[0_0_32px_-8px_var(--accent-glow)]">
              <Image
                src={image}
                alt={`${category.title} services`}
                fill
                sizes="(min-width: 1024px) 32vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}
          <Card className="p-6">
            <div className="flex size-12 items-center justify-center rounded-xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--accent)_18%,transparent)_0%,color-mix(in_oklab,var(--accent-secondary)_18%,transparent)_100%)]">
              <Icon className="text-accent size-6" aria-hidden="true" />
            </div>
            <h3 className="mt-2">What&apos;s Included</h3>
            <Checklist items={category.subServices.map((s) => s.title)} />
            <CTAButton asChild variant="primary" className="mt-2">
              <Link href="/contact">Get a Free Consultation</Link>
            </CTAButton>
          </Card>
        </div>
      </AnimatedGroup>
    </Section>
  );
}

export { CategoryOverview };
