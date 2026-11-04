import Link from "next/link";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { CTAButton } from "@/components/ui/cta-button";
import { GradientText } from "@/components/ui/gradient-text";
import { Section } from "@/components/ui/section";
import { SectionImage } from "@/components/ui/section-image";
import { homeSectionPhotos } from "@/data/photos";
import { getServiceCategory } from "@/data/services";

function SeoSection() {
  const category = getServiceCategory("seo-search");

  if (!category) return null;

  return (
    <Section id="seo-search" className="bg-bg-surface">
      <AnimatedGroup className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex min-w-0 flex-col items-start gap-5">
          <GradientText className="text-xs font-medium tracking-[0.2em] uppercase">
            SEO &amp; Search
          </GradientText>
          <h2>{category.tagline}</h2>
          <p className="text-base">
            We improve your website&apos;s technical foundation, search
            visibility and local presence, including how you appear in
            AI-generated answers.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {category.subServices.map((subService) => (
              <Link
                key={subService.slug}
                href={`/services/${category.slug}/${subService.slug}`}
                className="border-border text-text-secondary hover:border-accent hover:bg-accent rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:text-white"
              >
                {subService.title}
              </Link>
            ))}
          </div>
          <CTAButton asChild variant="primary" className="mt-2">
            <Link href={`/services/${category.slug}`}>
              Explore SEO Services
            </Link>
          </CTAButton>
        </div>

        <div>
          <SectionImage
            photo={homeSectionPhotos[category.slug]}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[16/10] lg:aspect-[4/3]"
          />
        </div>
      </AnimatedGroup>
    </Section>
  );
}

export { SeoSection };
