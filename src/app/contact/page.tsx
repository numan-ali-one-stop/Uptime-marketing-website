import type { Metadata } from "next";

import { ContactFormLoader } from "@/components/sections/contact-form-loader";
import { ContactInfo } from "@/components/sections/contact-info";
import { ContactMap } from "@/components/sections/contact-map";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { pagePhotos } from "@/data/photos";
import { JsonLd } from "@/components/seo/json-ld";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/data/site";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import type { Faq } from "@/types/faqs";

const description =
  "Get in touch with Uptime Marketing for a free consultation on your next web, AI, SEO, marketing or design project. We usually reply within one business day.";

export const metadata: Metadata = {
  title: "Contact Us",
  description,
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/contact`,
    images: ["/opengraph-image"],
  },
  twitter: {
    title: `Contact Us | ${siteConfig.name}`,
    description,
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Us",
  description,
  url: `${siteConfig.url}/contact`,
};

const CONTACT_FAQS: Faq[] = [
  {
    question: "How quickly will you respond?",
    answer:
      "We reply to every enquiry within one business day, usually much sooner. If your project is urgent, mention that in the form or reach us directly on WhatsApp.",
  },
  {
    question: "Is there a minimum project size?",
    answer:
      "We don't enforce a hard minimum, but most engagements start in the low thousands. If your project is smaller, tell us anyway — we'll be upfront about whether we're the right fit.",
  },
  {
    question: "Do you work with clients outside the US?",
    answer:
      "Yes, we work with clients internationally and run projects fully remote, with async updates and calls scheduled around your time zone.",
  },
  {
    question: "Can you sign an NDA before we share project details?",
    answer:
      "Absolutely — if your project involves confidential or proprietary information, we're happy to sign your NDA (or send ours) before any detailed discussion.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Contact Us", url: `${siteConfig.url}/contact` },
          ]),
          contactPageSchema,
          organizationSchema(),
        ]}
      />

      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        eyebrow="Contact Us"
        title="Let's build something together"
        subtitle="Tell us about your project and we'll set up a free consultation, or just reach out with a question. We usually reply within one business day."
        photo={pagePhotos.contact}
      />

      <Section className="bg-bg-surface">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2>Send Us a Message</h2>
            <p className="mt-2 mb-8 text-base">
              Fill out the form and we&apos;ll get back to you shortly.
            </p>
            <ContactFormLoader />
          </div>

          <div>
            <h2 className="mb-6">Other Ways to Reach Us</h2>
            <ContactInfo />
          </div>
        </div>
      </Section>

      <ContactMap />

      <FaqSection
        faqs={CONTACT_FAQS}
        eyebrow="FAQ"
        title="Questions Before You Reach Out?"
        className="bg-bg-surface"
      />

      <FinalCtaSection
        heading="Prefer to talk? Book a call."
        body="Skip the form and grab a time that works for you — we'll walk through your project live."
        primaryLabel="Book a Call"
        primaryHref={`https://wa.me/${siteConfig.whatsappNumber}`}
        secondaryLabel="Email Us"
        secondaryHref={`mailto:${siteConfig.email}`}
      />
    </>
  );
}
