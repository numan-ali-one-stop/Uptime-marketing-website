import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { PortfolioFilterGrid } from "@/components/sections/portfolio-filter-grid";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { GradientText } from "@/components/ui/gradient-text";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/data/site";

const description =
  "See how UPTIME MARKETING has helped businesses grow through web and mobile development, AI, SEO, digital marketing and design — real projects, real results.";

export const metadata: Metadata = {
  title: "Our Work",
  description,
  openGraph: {
    title: `Our Work | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/portfolio`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Our Work",
      item: `${siteConfig.url}/portfolio`,
    },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Section
        className="bg-bg-base relative flex items-center overflow-hidden py-20 md:py-28"
        containerClassName="relative w-full"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,var(--accent)_0%,transparent_60%)] opacity-25"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border-hover)_1px,transparent_0)] bg-[size:32px_32px] opacity-[0.15]"
        />

        <AnimatedGroup className="relative flex flex-col items-start gap-5 text-left">
          <nav aria-label="Breadcrumb">
            <ol className="text-text-secondary flex items-center gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-text-primary" aria-current="page">
                Our Work
              </li>
            </ol>
          </nav>

          <GradientText className="text-xs font-medium tracking-[0.2em] uppercase">
            Our Work
          </GradientText>
          <h1>Projects That Speak for Us</h1>
          <p className="max-w-2xl text-lg">
            A look at the web, mobile, AI, SEO, marketing and design work
            we&apos;ve delivered for businesses like yours — including what
            changed and by how much.
          </p>
        </AnimatedGroup>
      </Section>

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
