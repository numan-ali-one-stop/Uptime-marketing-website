import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { CategoryTools } from "@/components/sections/category-tools";
import { ServiceDetailDeliverables } from "@/components/sections/service-detail-deliverables";
import { ServiceDetailIdealFor } from "@/components/sections/service-detail-ideal-for";
import { ServiceDetailIncluded } from "@/components/sections/service-detail-included";
import { ServiceDetailIntro } from "@/components/sections/service-detail-intro";
import { ServiceDetailRelated } from "@/components/sections/service-detail-related";
import { ServiceDetailWhyItMatters } from "@/components/sections/service-detail-why-it-matters";
import { TrackPageView } from "@/components/analytics/track-page-view";
import { PageHero } from "@/components/sections/page-hero";
import { servicePhotos } from "@/data/photos";
import { JsonLd } from "@/components/seo/json-ld";
import { CTAButton } from "@/components/ui/cta-button";
import { getServiceDetail } from "@/data/service-details";
import {
  getServiceCategory,
  getSubService,
  serviceCategories,
} from "@/data/services";
import { siteConfig } from "@/data/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

type ServiceDetailPageProps = {
  params: Promise<{ category: string; service: string }>;
};

// Every valid path is pre-rendered, so anything else is a true 404 rather than
// the not-found screen sent with a 200 status.
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceCategories.flatMap((category) =>
    category.subServices.map((subService) => ({
      category: category.slug,
      service: subService.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { category: categorySlug, service: serviceSlug } = await params;
  const subService = getSubService(categorySlug, serviceSlug);
  const detail = subService ? getServiceDetail(serviceSlug) : undefined;

  if (!subService || !detail) {
    return { title: "Services" };
  }

  const url = `${siteConfig.url}/services/${categorySlug}/${serviceSlug}`;

  return {
    title: { absolute: detail.metaTitle },
    description: detail.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: detail.metaTitle,
      description: detail.metaDescription,
      url,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { category: categorySlug, service: serviceSlug } = await params;
  const category = getServiceCategory(categorySlug);
  const subService = getSubService(categorySlug, serviceSlug);
  const detail = getServiceDetail(serviceSlug);

  if (!category || !subService || !detail) {
    notFound();
  }

  const serviceUrl = `${siteConfig.url}/services/${category.slug}/${detail.slug}`;

  return (
    <>
      <TrackPageView
        eventName="service_page_view"
        params={{ category: category.slug, service: detail.slug }}
      />
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            {
              name: category.title,
              url: `${siteConfig.url}/services/${category.slug}`,
            },
            { name: detail.title, url: serviceUrl },
          ]),
          serviceSchema({
            name: detail.title,
            description: detail.metaDescription,
            url: serviceUrl,
          }),
          faqSchema(detail.faqs),
        ]}
      />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: category.title, href: `/services/${category.slug}` },
          { label: detail.title },
        ]}
        eyebrow={detail.title}
        title={detail.heroHeadline}
        subtitle={detail.heroSubheadline}
        photo={servicePhotos[detail.slug]}
        actions={
          <>
            <CTAButton
              asChild
              variant="primary"
              trackingLabel={`${detail.title} Hero — Get a Free Consultation`}
            >
              <Link href="/contact">Get a Free Consultation</Link>
            </CTAButton>
            <CTAButton
              asChild
              variant="secondary"
              trackingLabel={`${detail.title} Hero — View Our Work`}
            >
              <Link href="/portfolio">View Our Work</Link>
            </CTAButton>
          </>
        }
      />

      <ServiceDetailIntro
        detail={detail}
        categoryTitle={category.title}
        categorySlug={category.slug}
        className="bg-bg-surface"
      />

      <ServiceDetailIncluded detail={detail} className="bg-bg-base" />

      <ServiceDetailWhyItMatters detail={detail} className="bg-bg-surface" />

      <ProcessTimeline
        eyebrow={detail.title}
        title="Our process"
        steps={detail.process}
        className="bg-bg-base"
      />

      <ServiceDetailDeliverables deliverables={detail.deliverables} />

      <ServiceDetailIdealFor idealFor={detail.idealFor} />

      <CategoryTools title={detail.title} tools={detail.tools} />

      <FaqSection
        faqs={detail.faqs}
        eyebrow="FAQs"
        title={`${detail.title} FAQs`}
      />

      <ServiceDetailRelated relatedSlugs={detail.relatedServices} />

      <FinalCtaSection
        heading={`Ready to start your ${detail.title} project?`}
        body="Book a free consultation and we'll map out exactly how we can help — no pressure, just a clear plan."
        primaryLabel="Get a Free Consultation"
        primaryHref="/contact"
        secondaryLabel="View Our Work"
        secondaryHref="/portfolio"
      />
    </>
  );
}
