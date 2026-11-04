import { siteConfig } from "@/data/site";
import type { Faq } from "@/types/faqs";
import type { Project } from "@/types/projects";
import type { ServiceCategory } from "@/types/services";

/**
 * Centralized JSON-LD builders. Every page should compose its structured
 * data from these functions rather than hand-writing schema.org objects, so
 * shared fields (org identity, breadcrumbs shape, etc.) stay consistent.
 */

export type BreadcrumbItem = {
  name: string;
  url: string;
};

type SchemaObject = Record<string, unknown>;

export function organizationSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.ico`,
    description: siteConfig.description,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        areaServed: "Worldwide",
        availableLanguage: "English",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
    },
    sameAs: siteConfig.social.map((social) => social.href),
  };
}

export function websiteSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/services?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

type ServiceSchemaInput = {
  name: string;
  description: string;
  url: string;
  offers?: { name: string; description: string; url: string }[];
};

export function serviceSchema(service: ServiceSchemaInput): SchemaObject {
  const schema: SchemaObject = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.name,
    url: service.url,
    areaServed: "Worldwide",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  if (service.offers?.length) {
    schema.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: `${service.name} Services`,
      itemListElement: service.offers.map((offer) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: offer.name,
          description: offer.description,
          url: offer.url,
        },
      })),
    };
  }

  return schema;
}

export function faqSchema(faqs: Faq[]): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function localBusinessSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.ico`,
    image: `${siteConfig.url}/favicon.ico`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
    },
    openingHours: siteConfig.businessHours,
    sameAs: siteConfig.social.map((social) => social.href),
  };
}

export function creativeWorkSchema(project: Project): SchemaObject {
  const projectUrl = `${siteConfig.url}/portfolio/${project.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.excerpt,
    ...(project.year ? { dateCreated: String(project.year) } : {}),
    keywords: project.techStack.join(", "),
    url: projectUrl,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: project.industry,
  };
}

/** Convenience helper for pages that only need offers derived from a ServiceCategory. */
export function offersFromCategory(
  category: ServiceCategory,
  categoryUrl: string
) {
  return category.subServices.map((subService) => ({
    name: subService.title,
    description: subService.shortDescription,
    url: `${categoryUrl}/${subService.slug}`,
  }));
}
