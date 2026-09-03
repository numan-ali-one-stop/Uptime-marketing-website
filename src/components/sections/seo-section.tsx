import Link from "next/link";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { CTAButton } from "@/components/ui/cta-button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { getServiceCategory } from "@/data/services";

function SeoSection() {
  const category = getServiceCategory("seo-search");

  if (!category) return null;

  return (
    <Section id="seo-search" className="bg-bg-base">
      <SectionHeading
        eyebrow="SEO & Digital Growth"
        title={category.tagline}
        subtitle="We improve your website's technical foundation, search visibility and digital presence."
        align="center"
        className="mx-auto"
      />

      <AnimatedGroup className="mt-10 flex flex-wrap justify-center gap-3">
        {category.subServices.map((subService) => (
          <Link
            key={subService.slug}
            href={`/services/${category.slug}/${subService.slug}`}
            className="border-border text-text-secondary hover:border-accent hover:bg-accent rounded-full border px-5 py-2.5 text-xs font-medium tracking-[0.1em] uppercase transition-colors hover:text-white"
          >
            {subService.title}
          </Link>
        ))}
      </AnimatedGroup>

      <div className="mt-10 flex justify-center">
        <CTAButton asChild variant="primary">
          <Link href={`/services/${category.slug}`}>Explore SEO Services</Link>
        </CTAButton>
      </div>
    </Section>
  );
}

export { SeoSection };
