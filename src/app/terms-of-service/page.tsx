/**
 * TEMPLATE CONTENT — this page is a starting-point terms of service, not a
 * finished legal document. It must be reviewed by a qualified legal
 * professional before launch, and jurisdiction-specific clauses (governing
 * law, dispute resolution venue, consumer-protection carve-outs, etc.)
 * need to be filled in or adjusted for where the business operates before
 * this is relied on.
 */
import type { Metadata } from "next";

import { LegalLayout, type LegalSection } from "@/components/legal/legal-layout";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";

const description =
  "Read the Terms of Service governing your use of the Uptime Marketing website and any client engagement for our web, AI, SEO, marketing or design services.";

export const metadata: Metadata = {
  title: "Terms of Service",
  description,
  alternates: { canonical: `${siteConfig.url}/terms-of-service` },
  openGraph: {
    title: `Terms of Service | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/terms-of-service`,
    images: ["/opengraph-image"],
  },
};

const LAST_UPDATED = "January 1, 2026";

const SECTIONS: LegalSection[] = [
  { id: "acceptance-of-terms", title: "Acceptance of Terms" },
  { id: "services-description", title: "Description of Services" },
  { id: "use-of-the-website", title: "Use of the Website" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "client-engagements", title: "Client Engagements & Payment" },
  { id: "confidentiality", title: "Confidentiality" },
  { id: "disclaimers-and-liability", title: "Disclaimers & Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes-to-these-terms", title: "Changes to These Terms" },
  { id: "contact-us", title: "Contact Us" },
];

export default function TermsOfServicePage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          {
            name: "Terms of Service",
            url: `${siteConfig.url}/terms-of-service`,
          },
        ])}
      />
      <LegalLayout
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated={LAST_UPDATED}
      sections={SECTIONS}
    >
      <div className="flex flex-col gap-10">
        <section id="acceptance-of-terms" className="scroll-mt-28">
          <h2>Acceptance of Terms</h2>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access
            to and use of {siteConfig.url} (the &ldquo;Site&rdquo;) operated
            by {siteConfig.legalName} (&ldquo;{siteConfig.name}&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;). By
            accessing or using the Site, you agree to be bound by these
            Terms. If you do not agree, please do not use the Site.
          </p>
        </section>

        <section id="services-description" className="scroll-mt-28">
          <h2>Description of Services</h2>
          <p>
            {siteConfig.name} is a technology and digital growth agency
            offering web and mobile development, AI solutions, SEO and
            search, digital marketing, and design services. The content of
            this Site is provided for general informational purposes about
            our services and does not itself constitute a binding offer.
            Any actual engagement for services is governed by a separate,
            signed proposal, statement of work, or contract between you and
            {" "}{siteConfig.name}, which takes precedence over these Terms
            in the event of a conflict specific to that engagement.
          </p>
        </section>

        <section id="use-of-the-website" className="scroll-mt-28">
          <h2>Use of the Website</h2>
          <p>You agree to use the Site only for lawful purposes. You agree not to:</p>
          <ul>
            <li>Attempt to gain unauthorized access to the Site, our systems, or related networks.</li>
            <li>Use automated means (bots, scrapers) to extract content beyond normal search-engine indexing.</li>
            <li>Submit false, misleading, or spam content through the contact form.</li>
            <li>Interfere with the Site&apos;s normal operation, including its security or rate-limiting features.</li>
          </ul>
        </section>

        <section id="intellectual-property" className="scroll-mt-28">
          <h2>Intellectual Property</h2>
          <p>
            Unless otherwise stated, all content on the Site — including
            text, graphics, logos, and case studies — is the property of
            {" "}{siteConfig.name} or its licensors and is protected by
            applicable intellectual property laws. You may not reproduce,
            distribute, or create derivative works from this content
            without our prior written permission.
          </p>
          <p>
            Ownership of deliverables created for a specific client
            engagement (code, designs, content, etc.) is governed by the
            signed agreement for that engagement, not by these Terms.
          </p>
        </section>

        <section id="client-engagements" className="scroll-mt-28">
          <h2>Client Engagements &amp; Payment</h2>
          <p>
            Submitting the contact form or requesting a consultation does
            not create a client relationship or payment obligation. A
            client relationship begins only once both parties sign a
            proposal, statement of work, or services agreement, which will
            set out project scope, timeline, fees, payment schedule, and
            any applicable refund or cancellation terms.
          </p>
        </section>

        <section id="confidentiality" className="scroll-mt-28">
          <h2>Confidentiality</h2>
          <p>
            We treat project details shared with us as confidential and
            will not disclose them to third parties except as necessary to
            deliver the engagement (for example, to subcontractors bound by
            confidentiality obligations) or as required by law. Formal
            confidentiality or non-disclosure terms for a specific
            engagement are set out in that engagement&apos;s agreement.
          </p>
        </section>

        <section id="disclaimers-and-liability" className="scroll-mt-28">
          <h2>Disclaimers &amp; Limitation of Liability</h2>
          <p>
            The Site and its content are provided &ldquo;as is&rdquo;
            without warranties of any kind, express or implied. We do not
            warrant that the Site will be uninterrupted, error-free, or
            entirely secure. To the fullest extent permitted by law,
            {" "}{siteConfig.name} shall not be liable for any indirect,
            incidental, or consequential damages arising from your use of
            the Site. This section does not limit liability that cannot be
            excluded under applicable law.
          </p>
        </section>

        <section id="indemnification" className="scroll-mt-28">
          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold {siteConfig.name} harmless from
            any claims, damages, or expenses (including reasonable legal
            fees) arising from your misuse of the Site or violation of
            these Terms.
          </p>
        </section>

        <section id="governing-law" className="scroll-mt-28">
          <h2>Governing Law</h2>
          <p>
            {/* TODO: replace with the actual governing law / jurisdiction and venue for dispute resolution before launch. */}
            These Terms are governed by the laws of the jurisdiction in
            which {siteConfig.legalName} is registered, without regard to
            its conflict-of-law principles. Any disputes arising from these
            Terms will be subject to the exclusive jurisdiction of the
            courts of that jurisdiction, unless otherwise agreed in a
            signed client contract.
          </p>
        </section>

        <section id="changes-to-these-terms" className="scroll-mt-28">
          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Material changes
            will be reflected by updating the &ldquo;Last updated&rdquo;
            date at the top of this page. Continued use of the Site after
            changes take effect constitutes acceptance of the revised
            Terms.
          </p>
        </section>

        <section id="contact-us" className="scroll-mt-28">
          <h2>Contact Us</h2>
          <p>Questions about these Terms can be sent to:</p>
          <ul>
            <li>Email: {siteConfig.email}</li>
            <li>Phone: {siteConfig.phoneDisplay}</li>
            <li>Address: {siteConfig.address}</li>
          </ul>
        </section>
      </div>
      </LegalLayout>
    </>
  );
}
