import type { Metadata } from "next";
import Link from "next/link";

import { AboutMissionVision } from "@/components/sections/about-mission-vision";
import { AboutStats } from "@/components/sections/about-stats";
import { AboutStory } from "@/components/sections/about-story";
import { AboutTeam } from "@/components/sections/about-team";
import { AboutValues } from "@/components/sections/about-values";
import { AboutWhatWeDo } from "@/components/sections/about-what-we-do";
import { AboutWhyChooseUs } from "@/components/sections/about-why-choose-us";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { ProcessSection } from "@/components/sections/process-section";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { GradientText } from "@/components/ui/gradient-text";
import { Section } from "@/components/ui/section";
import { companyInfo } from "@/data/company";
import { siteConfig } from "@/data/site";

const description =
  "UPTIME MARKETING is a technology and digital growth agency serving businesses locally and internationally across development, AI, SEO, marketing and design.";

export const metadata: Metadata = {
  title: "About Us",
  description,
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/about`,
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
      name: "About Us",
      item: `${siteConfig.url}/about`,
    },
  ],
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Us",
  description,
  url: `${siteConfig.url}/about`,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  foundingDate: String(companyInfo.foundedYear),
  founder: {
    "@type": "Person",
    name: companyInfo.team[0].name,
    jobTitle: companyInfo.team[0].role,
  },
  employee: companyInfo.team.map((member) => ({
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
  })),
  sameAs: siteConfig.social.map((social) => social.href),
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
                About Us
              </li>
            </ol>
          </nav>

          <GradientText className="text-xs font-medium tracking-[0.2em] uppercase">
            About Us
          </GradientText>
          <h1>One partner for technology and digital growth</h1>
          <p className="max-w-2xl text-lg">
            UPTIME MARKETING is a technology and digital growth agency
            building web and mobile products, AI solutions, and full-funnel
            marketing for businesses locally and internationally.
          </p>
        </AnimatedGroup>
      </Section>

      <AboutStory className="bg-bg-surface" />
      <AboutMissionVision className="bg-bg-base" />
      <AboutValues className="bg-bg-surface" />
      <AboutWhatWeDo className="bg-bg-base" />
      <AboutWhyChooseUs className="bg-bg-surface" />
      <AboutStats className="bg-bg-base" />
      <AboutTeam className="bg-bg-surface" />
      <ProcessSection className="bg-bg-base" />

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
