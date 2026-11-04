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
import { WhyUptime } from "@/components/sections/why-uptime";
import { JsonLd } from "@/components/seo/json-ld";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";
import {
  faqSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";

const description =
  "Uptime Marketing builds web and mobile products, AI solutions, and full-funnel digital marketing that help ambitious businesses compete and grow online.";

export const metadata: Metadata = {
  title: "Technology & Digital Growth Agency",
  description,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: `${siteConfig.name} | Technology & Digital Growth Agency`,
    description,
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        schema={[organizationSchema(), websiteSchema(), faqSchema(faqs)]}
      />

      <Hero />
      <ServicesOverview />
      <WhyUptime />
      <DevelopmentSection />
      <AiSection />
      <SeoSection />
      <DigitalMarketingSection />
      <DesignCreativeSection />
      <ProcessSection className="bg-bg-base" />
      <PortfolioSection />
      <FaqSection />
      <FinalCtaSection className="bg-bg-surface" />
    </>
  );
}
