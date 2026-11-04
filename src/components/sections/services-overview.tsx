import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { categoryHeroImages } from "@/data/service-images";
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

      <AnimatedGroup className="mt-10 flex flex-wrap justify-center gap-5 md:mt-14 lg:gap-6">
        {serviceCategories.map((category) => {
          const Icon = getIcon(category.icon);
          return (
            <div
              key={category.slug}
              className="basis-full md:basis-[calc(50%-0.625rem)] lg:basis-[calc((100%-3rem)/3)]"
            >
              <Link
                href={`/services/${category.slug}`}
                className="group block h-full"
              >
                <Card className="h-full gap-0 overflow-hidden p-0">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={categoryHeroImages[category.slug]}
                      alt={`${category.title} services`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex size-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/25 backdrop-blur-sm">
                      <Icon className="size-5 text-white" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3>{category.title}</h3>
                    <p className="text-sm">{category.description}</p>
                    <span className="text-accent mt-auto flex items-center gap-1.5 pt-1 text-sm font-medium">
                      Learn More
                      <ArrowRight
                        className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Card>
              </Link>
            </div>
          );
        })}
      </AnimatedGroup>
    </Section>
  );
}

export { ServicesOverview };
