import type { Metadata } from "next";
import Link from "next/link";

import { CategoryJumpNav } from "@/components/sections/category-jump-nav";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServiceCategoryBlock } from "@/components/sections/service-category-block";
import { ServicesWhyStrip } from "@/components/sections/services-why-strip";
import { JsonLd } from "@/components/seo/json-ld";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { GradientText } from "@/components/ui/gradient-text";
import { Section } from "@/components/ui/section";
import { serviceCategories } from "@/data/services";
import { siteConfig } from "@/data/site";
import { getIcon } from "@/lib/icons";
import { breadcrumbSchema } from "@/lib/schema";

const description =
  "Explore Uptime Marketing's full range of services: web and mobile development, AI solutions, SEO and search, digital marketing and design — all under one roof.";

export const metadata: Metadata = {
  title: "Our Services",
  description,
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    title: `Our Services | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/services`,
  },
};

const categoryListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: serviceCategories.map((category, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: category.title,
    url: `${siteConfig.url}/services/${category.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
          ]),
          categoryListSchema,
        ]}
      />

      <Section
        className="bg-bg-base relative flex items-center overflow-hidden pt-8 pb-16 md:pt-10 md:pb-20"
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
                Services
              </li>
            </ol>
          </nav>

          <GradientText className="text-xs font-medium tracking-[0.2em] uppercase">
            Our Services
          </GradientText>
          <h1>Technology and digital solutions for growth</h1>
          <p className="max-w-2xl text-lg">
            UPTIME MARKETING brings development, AI, SEO, marketing and design
            together under one roof — so every part of your growth strategy
            works from the same plan.
          </p>
        </AnimatedGroup>
      </Section>

      <CategoryJumpNav
        categories={serviceCategories.map((category) => ({
          slug: category.slug,
          title: category.title,
        }))}
      />

      {serviceCategories.map((category, index) => {
        const Icon = getIcon(category.icon);
        return (
          <ServiceCategoryBlock
            key={category.slug}
            category={category}
            icon={Icon}
            reverse={index % 2 === 1}
            className={index % 2 === 1 ? "bg-bg-surface" : "bg-bg-base"}
          />
        );
      })}

      <ServicesWhyStrip />

      <ProcessSection />

      <FinalCtaSection
        heading="Not sure which service you need?"
        body="Book a free consultation and we'll help you map out the right service for your goals — no pressure, just a clear plan."
        primaryLabel="Talk to Us"
        primaryHref="/contact"
        secondaryLabel="View Our Work"
        secondaryHref="/portfolio"
      />
    </>
  );
}
