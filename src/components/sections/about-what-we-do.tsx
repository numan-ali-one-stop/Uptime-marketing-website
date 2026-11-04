import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { categoryPhotos } from "@/data/photos";
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

      <AnimatedGroup className="mt-10 flex flex-wrap justify-center gap-5 md:mt-14">
        {serviceCategories.map((category) => {
          const Icon = getIcon(category.icon);
          return (
            <div
              key={category.slug}
              className="basis-full sm:basis-[calc(50%-0.625rem)] lg:basis-[calc((100%-5rem)/5)]"
            >
            <Link href={`/services/${category.slug}`} className="group block h-full">
              <Card className="h-full gap-0 overflow-hidden p-0">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={categoryPhotos[category.slug].src}
                    alt={categoryPhotos[category.slug].alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-center gap-2">
                  <Icon className="text-accent size-5 shrink-0" aria-hidden="true" />
                  <h3 className="text-base">{category.title}</h3>
                </div>
                <span className="text-accent mt-auto flex items-center gap-1.5 pt-1 text-sm font-medium">
                  Learn more
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

export { AboutWhatWeDo };
