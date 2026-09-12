import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { CTAButton } from "@/components/ui/cta-button";
import { serviceCategories } from "@/data/services";
import { siteConfig } from "@/data/site";
import { getIcon } from "@/lib/icons";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

function Footer() {
  const year = new Date().getFullYear();
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}`;

  return (
    <footer className="border-border bg-bg-surface border-t">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-heading text-text-primary text-lg font-bold tracking-wide uppercase"
            >
              {siteConfig.name}
            </Link>
            <p className="text-text-secondary max-w-xs text-sm">
              {siteConfig.description}
            </p>
            <ul className="flex items-center gap-3 pt-2">
              {siteConfig.social.map((social) => {
                const Icon = getIcon(social.icon);
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="border-border text-text-secondary hover:border-accent/40 hover:text-accent flex size-9 items-center justify-center rounded-full border transition-colors"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-text-primary text-sm font-semibold">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {serviceCategories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/services/${category.slug}`}
                    className="text-text-secondary hover:text-accent text-sm transition-colors"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-text-primary text-sm font-semibold">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-text-primary text-sm font-semibold">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-text-secondary hover:text-accent flex items-center gap-2 text-sm transition-colors"
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-text-secondary hover:text-accent flex items-center gap-2 text-sm transition-colors"
                >
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent flex items-center gap-2 text-sm transition-colors"
                >
                  <MessageCircle
                    className="size-4 shrink-0"
                    aria-hidden="true"
                  />
                  WhatsApp
                </a>
              </li>
            </ul>
            <CTAButton asChild variant="primary" className="mt-2 w-fit">
              <Link href="/contact">Start a Project</Link>
            </CTAButton>
          </div>
        </div>
      </div>

      <div className="border-border border-t">
        <div className="text-text-muted mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs sm:flex-row lg:px-8">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-text-secondary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-text-secondary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
