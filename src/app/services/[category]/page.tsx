import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CategoryBenefits } from "@/components/sections/category-benefits";
import { CategoryOfferings } from "@/components/sections/category-offerings";
import { CategoryOverview } from "@/components/sections/category-overview";
import { CategoryRelatedServices } from "@/components/sections/category-related-services";
import { CategoryTools } from "@/components/sections/category-tools";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { CTAButton } from "@/components/ui/cta-button";
import { GradientText } from "@/components/ui/gradient-text";
import { Section } from "@/components/ui/section";
import { getServiceCategory, serviceCategories } from "@/data/services";
import { siteConfig } from "@/data/site";
import { getIcon, type IconComponent } from "@/lib/icons";

type ServiceCategoryPageProps = {
  params: Promise<{ category: string }>;
};

// Resolved once at module load (not during render) so rendering a category's
// icon never involves calling getIcon() inside the page component itself.
const categoryIcons: Record<string, IconComponent> = Object.fromEntries(
  serviceCategories.map((category) => [category.slug, getIcon(category.icon)])
);

export function generateStaticParams() {
  return serviceCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: ServiceCategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getServiceCategory(categorySlug);

  if (!category) {
    return { title: "Services" };
  }

  const description = category.heroSubheadline;
  const url = `${siteConfig.url}/services/${category.slug}`;

  return {
    title: `${category.title} Services`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${category.title} Services | ${siteConfig.name}`,
      description,
      url,
    },
  };
}

export default async function ServiceCategoryPage({
  params,
}: ServiceCategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getServiceCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const Icon = categoryIcons[category.slug];
  const categoryUrl = `${siteConfig.url}/services/${category.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteConfig.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.title,
        item: categoryUrl,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: category.title,
    description: category.description,
    serviceType: category.title,
    url: categoryUrl,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${category.title} Services`,
      itemListElement: category.subServices.map((subService) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: subService.title,
          description: subService.shortDescription,
          url: `${categoryUrl}/${subService.slug}`,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: category.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Section
        className="bg-bg-base relative flex items-center overflow-hidden pt-10 pb-20 md:pt-14 md:pb-28"
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
            <ol className="text-text-secondary flex flex-wrap items-center gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-text-primary" aria-current="page">
                {category.title}
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--accent)_18%,transparent)_0%,color-mix(in_oklab,var(--accent-secondary)_18%,transparent)_100%)]">
              <Icon className="text-accent size-5" aria-hidden="true" />
            </div>
            <GradientText className="text-xs font-medium tracking-[0.2em] uppercase">
              {category.title}
            </GradientText>
          </div>

          <h1>{category.heroHeadline}</h1>
          <p className="max-w-2xl text-lg">{category.heroSubheadline}</p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <CTAButton asChild variant="primary">
              <Link href="/contact">Get a Free Consultation</Link>
            </CTAButton>
            <CTAButton asChild variant="secondary">
              <Link href="/portfolio">View Our Work</Link>
            </CTAButton>
          </div>
        </AnimatedGroup>
      </Section>

      <CategoryOverview
        category={category}
        icon={Icon}
        className="bg-bg-surface"
      />

      <CategoryOfferings category={category} className="bg-bg-base" />

      <CategoryBenefits category={category} className="bg-bg-surface" />

      <ProcessTimeline
        eyebrow={category.title}
        title="Our process"
        steps={category.processSteps}
        className="bg-bg-base"
      />

      <CategoryTools title={category.title} tools={category.toolsUsed} />

      <FaqSection
        faqs={category.faqs}
        eyebrow="FAQs"
        title={`${category.title} FAQs`}
      />

      <CategoryRelatedServices
        currentSlug={category.slug}
        className="bg-bg-surface"
      />

      <FinalCtaSection
        heading={`Ready to get started with ${category.title}?`}
        body="Book a free consultation and we'll map out exactly how we can help — no pressure, just a clear plan."
        primaryLabel="Get a Free Consultation"
        primaryHref="/contact"
        secondaryLabel="View Our Work"
        secondaryHref="/portfolio"
      />
    </>
  );
}
