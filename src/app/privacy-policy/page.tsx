/**
 * TEMPLATE CONTENT — this page is a starting-point privacy policy, not a
 * finished legal document. It must be reviewed by a qualified legal
 * professional before launch, and jurisdiction-specific clauses (GDPR,
 * CCPA/CPRA, PIPEDA, etc. depending on where the business and its users
 * are located) need to be filled in or adjusted before this is relied on.
 */
import type { Metadata } from "next";

import { LegalLayout, type LegalSection } from "@/components/legal/legal-layout";
import { JsonLd } from "@/components/seo/json-ld";
import { pagePhotos } from "@/data/photos";
import { siteConfig } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";

const description =
  "Read Uptime Marketing's Privacy Policy to learn what information we collect, how it's used, which third parties process it, and how to exercise your rights.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}/privacy-policy`,
    images: ["/opengraph-image"],
  },
};

const LAST_UPDATED = "January 1, 2026";

const SECTIONS: LegalSection[] = [
  { id: "overview", title: "Overview" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use-information", title: "How We Use Your Information" },
  { id: "cookies-and-analytics", title: "Cookies & Analytics" },
  { id: "third-party-processors", title: "Third-Party Service Providers" },
  { id: "data-retention", title: "Data Retention" },
  { id: "your-rights", title: "Your Rights" },
  { id: "data-security", title: "Data Security" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "changes-to-this-policy", title: "Changes to This Policy" },
  { id: "contact-us", title: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Privacy Policy", url: `${siteConfig.url}/privacy-policy` },
        ])}
      />
      <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      photo={pagePhotos.privacy}
      sections={SECTIONS}
    >
      <div className="flex flex-col gap-10">
        <section id="overview" className="scroll-mt-28">
          <h2>Overview</h2>
          <p>
            This Privacy Policy explains how {siteConfig.legalName} (
            &ldquo;{siteConfig.name}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;
            or &ldquo;our&rdquo;) collects, uses, discloses and protects
            information when you visit {siteConfig.url} (the
            &ldquo;Site&rdquo;) or contact us about our services. By using
            the Site, you agree to the collection and use of information in
            accordance with this policy.
          </p>
        </section>

        <section id="information-we-collect" className="scroll-mt-28">
          <h2>Information We Collect</h2>
          <p>
            We collect information in the following ways:
          </p>
          <ul>
            <li>
              <strong>Information you submit through our contact form:</strong>{" "}
              full name, email address, phone number (optional), company
              name (optional), the service you&apos;re interested in,
              budget range (optional), and any project details you choose
              to share.
            </li>
            <li>
              <strong>Automatically collected information:</strong> IP
              address, browser type, device information, pages visited, and
              approximate location, collected through analytics tools
              described in the &ldquo;Cookies &amp; Analytics&rdquo; section
              below.
            </li>
            <li>
              <strong>Communications:</strong> if you email, call, or
              message us directly (including via WhatsApp), we retain that
              correspondence to respond to you and keep a record of the
              engagement.
            </li>
          </ul>
        </section>

        <section id="how-we-use-information" className="scroll-mt-28">
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to enquiries submitted through the contact form or other channels.</li>
            <li>Provide quotes, proposals and project scoping for prospective work.</li>
            <li>Deliver, manage and support ongoing client engagements.</li>
            <li>Send administrative or service-related communications (not marketing, unless you opt in separately).</li>
            <li>Understand how visitors use the Site so we can improve it, using aggregated, largely anonymized analytics.</li>
            <li>Detect and prevent spam, abuse, and security issues (for example, rate-limiting form submissions).</li>
          </ul>
          <p>
            We do not sell your personal information to third parties.
          </p>
        </section>

        <section id="cookies-and-analytics" className="scroll-mt-28">
          <h2>Cookies &amp; Analytics</h2>
          <p>
            The Site uses cookies and similar technologies (such as local
            storage) to remember your preferences (like light/dark theme)
            and to understand aggregate usage of the Site through analytics.
            Specifically:
          </p>
          <ul>
            <li>
              <strong>Google Analytics 4</strong> — when enabled, GA4 uses
              cookies to collect anonymized-where-possible usage data such
              as pages viewed, session duration, referral source and device
              type. This helps us understand what content is useful and
              where visitors come from.
            </li>
            <li>
              <strong>Vercel Analytics &amp; Speed Insights</strong> — used
              to measure page performance and traffic patterns in aggregate;
              this data is not used to individually identify you.
            </li>
          </ul>
          <p>
            Most browsers let you refuse or delete cookies through their
            settings. Doing so may affect some functionality of the Site,
            though the Site will remain usable without analytics cookies.
          </p>
        </section>

        <section id="third-party-processors" className="scroll-mt-28">
          <h2>Third-Party Service Providers</h2>
          <p>
            We share information with a small number of service providers
            who process it on our behalf, strictly to deliver the Site and
            our services:
          </p>
          <ul>
            <li>
              <strong>Vercel</strong> — hosts the Site and provides
              performance and traffic analytics (Vercel Analytics, Speed
              Insights).
            </li>
            <li>
              <strong>Google Analytics</strong> (Google LLC) — provides
              website usage analytics when configured. See Google&apos;s
              own privacy policy for how it handles data on its platform.
            </li>
            <li>
              <strong>Resend</strong> — the email delivery provider we use
              to send contact-form submissions to our inbox and to send you
              a confirmation, where applicable.
            </li>
          </ul>
          <p>
            Each of these providers is contractually or by policy restricted
            from using your information for purposes other than providing
            services to us. We do not control their independent data
            practices beyond our configuration of their services.
          </p>
        </section>

        <section id="data-retention" className="scroll-mt-28">
          <h2>Data Retention</h2>
          <p>
            We retain contact form submissions and related correspondence
            for as long as reasonably necessary to respond to your enquiry,
            deliver any resulting engagement, and comply with our legal and
            accounting obligations. Aggregated or anonymized analytics data
            may be retained longer since it no longer identifies you
            individually. You may request earlier deletion of your personal
            information as described in &ldquo;Your Rights&rdquo; below.
          </p>
        </section>

        <section id="your-rights" className="scroll-mt-28">
          <h2>Your Rights</h2>
          <p>
            Depending on where you live, you may have rights to access,
            correct, delete, restrict, or port the personal information we
            hold about you, and to object to or withdraw consent for
            certain processing. This may include rights under the EU/UK
            GDPR, the California Consumer Privacy Act (CCPA/CPRA), or other
            applicable data protection laws.
          </p>
          <p>
            To exercise any of these rights, contact us using the details
            in &ldquo;Contact Us&rdquo; below. We will respond within the
            timeframe required by applicable law.
          </p>
        </section>

        <section id="data-security" className="scroll-mt-28">
          <h2>Data Security</h2>
          <p>
            We use reasonable technical and organizational measures to
            protect the information we hold, including transport encryption
            (HTTPS) and access controls on the systems that process contact
            form submissions. No method of transmission or storage is
            completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section id="childrens-privacy" className="scroll-mt-28">
          <h2>Children&apos;s Privacy</h2>
          <p>
            The Site is intended for business audiences and is not directed
            at children. We do not knowingly collect personal information
            from children under 16. If you believe a child has provided us
            with personal information, please contact us so we can remove
            it.
          </p>
        </section>

        <section id="changes-to-this-policy" className="scroll-mt-28">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Material
            changes will be reflected by updating the &ldquo;Last
            updated&rdquo; date at the top of this page. We encourage you to
            review this page periodically.
          </p>
        </section>

        <section id="contact-us" className="scroll-mt-28">
          <h2>Contact Us</h2>
          <p>
            For questions about this Privacy Policy or to make a data
            request, contact us at:
          </p>
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
