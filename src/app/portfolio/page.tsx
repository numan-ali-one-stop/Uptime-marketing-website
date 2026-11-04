import type { Metadata } from "next";
import { Suspense } from "react";

import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { PortfolioFilterGrid } from "@/components/sections/portfolio-filter-grid";
import { PageHero } from "@/components/sections/page-hero";
import { pagePhotos } from "@/data/photos";
import { JsonLd } from "@/components/seo/json-ld";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";

const description =
  "See websites Uptime Marketing has designed and built for real businesses, including mobile tyre services across Greater Manchester, with live links to each.";

export const metadata: Metadata = {
  title: "Our Work",
  description,
  alternates: { canonical: `${siteConfig.url}/portfolio` },
  openGraph: {
    title: `Our Work | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/portfolio`,
  },
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Our Work", url: `${siteConfig.url}/portfolio` },
        ])}
      />

      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Work" }]}
        eyebrow="Our Work"
        title="Projects That Speak for Us"
        subtitle="A look at the websites and digital work we've delivered for businesses like yours, with live links where you can see them for yourself."
        photo={pagePhotos.portfolio}
      />

      <Section className="bg-bg-surface">
        <Suspense fallback={null}>
          <PortfolioFilterGrid />
        </Suspense>
      </Section>

      <FinalCtaSection
        heading="Have a project in mind?"
        body="Tell us what you're trying to build or improve — we'll come back with a clear plan, not a sales pitch."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
