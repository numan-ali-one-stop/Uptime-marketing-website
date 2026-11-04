import type { Metadata } from "next";

import { CategoryJumpNav } from "@/components/sections/category-jump-nav";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServiceCategoryBlock } from "@/components/sections/service-category-block";
import { ServicesWhyStrip } from "@/components/sections/services-why-strip";
import { PageHero } from "@/components/sections/page-hero";
import { pagePhotos } from "@/data/photos";
import { JsonLd } from "@/components/seo/json-ld";
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

      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="Our Services"
        title="Technology and digital solutions for growth"
        subtitle="Uptime Marketing brings development, AI, SEO, marketing and design together under one roof, so every part of your growth strategy works from the same plan."
        photo={pagePhotos.services}
      />

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
