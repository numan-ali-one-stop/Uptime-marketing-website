import type { Metadata } from "next";

import { AboutMissionVision } from "@/components/sections/about-mission-vision";
import { AboutStats } from "@/components/sections/about-stats";
import { AboutStory } from "@/components/sections/about-story";
import { AboutTeam } from "@/components/sections/about-team";
import { AboutValues } from "@/components/sections/about-values";
import { AboutWhatWeDo } from "@/components/sections/about-what-we-do";
import { AboutWhyChooseUs } from "@/components/sections/about-why-choose-us";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { ProcessSection } from "@/components/sections/process-section";
import { PageHero } from "@/components/sections/page-hero";
import { pagePhotos } from "@/data/photos";
import { JsonLd } from "@/components/seo/json-ld";
import { companyInfo, publishedTeam } from "@/data/company";
import { siteConfig } from "@/data/site";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";

const description =
  "Uptime Marketing is a technology and digital growth agency serving businesses locally and internationally across development, AI, SEO, marketing and design.";

export const metadata: Metadata = {
  title: "About Us",
  description,
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/about`,
    images: ["/opengraph-image"],
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Us",
  description,
  url: `${siteConfig.url}/about`,
};

const aboutOrganizationSchema = {
  ...organizationSchema(),
  foundingDate: String(companyInfo.foundedYear),
  ...(publishedTeam.length > 0 && {
    employee: publishedTeam.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
    })),
  }),
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "About Us", url: `${siteConfig.url}/about` },
          ]),
          aboutPageSchema,
          aboutOrganizationSchema,
        ]}
      />

      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        eyebrow="About Us"
        title="One partner for technology and digital growth"
        subtitle="Uptime Marketing is a technology and digital growth agency building web and mobile products, AI solutions and full-funnel marketing for businesses locally and internationally."
        photo={pagePhotos.about}
      />

      <AboutStory className="bg-bg-surface" />
      <AboutMissionVision className="bg-bg-base" />
      <AboutValues className="bg-bg-surface" />
      <AboutWhatWeDo className="bg-bg-base" />
      <AboutWhyChooseUs className="bg-bg-surface" />
      <AboutStats className="bg-bg-base" />
      <AboutTeam className="bg-bg-surface" />
      <ProcessSection
        className={publishedTeam.length > 0 ? "bg-bg-base" : "bg-bg-surface"}
      />

      <FinalCtaSection
        heading="Let's build something together"
        body="Tell us what you're trying to build or improve — we'll come back with a clear plan, not a sales pitch."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="View Our Work"
        secondaryHref="/portfolio"
      />
    </>
  );
}
