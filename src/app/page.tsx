import type { Metadata } from "next";

import { AiSection } from "@/components/sections/ai-section";
import { DesignCreativeSection } from "@/components/sections/design-creative-section";
import { DevelopmentSection } from "@/components/sections/development-section";
import { DigitalMarketingSection } from "@/components/sections/digital-marketing-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { Hero } from "@/components/sections/hero";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SeoSection } from "@/components/sections/seo-section";
import { ServicesOverview } from "@/components/sections/services-overview";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhyUptime } from "@/components/sections/why-uptime";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";

const description =
  "Uptime Marketing builds web and mobile products, AI solutions, and full-funnel digital marketing that help ambitious businesses compete and grow online.";

export const metadata: Metadata = {
  title: "Technology & Digital Growth Agency",
  description,
  openGraph: {
    title: `${siteConfig.name} | Technology & Digital Growth Agency`,
    description,
    url: siteConfig.url,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/favicon.ico`,
  description: siteConfig.description,
  email: siteConfig.email,
  sameAs: siteConfig.social.map((social) => social.href),
};

const faqSchema = {
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />
      <ServicesOverview />
      <WhyUptime />
      <DevelopmentSection />
      <AiSection />
      <SeoSection />
      <DigitalMarketingSection />
      <DesignCreativeSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
