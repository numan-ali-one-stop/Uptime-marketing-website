import type { Metadata } from "next";
import Link from "next/link";
import { Compass, FolderKanban, Home, Mail } from "lucide-react";

import { CTAButton } from "@/components/ui/cta-button";
import { GradientText } from "@/components/ui/gradient-text";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist or may have been moved. Head back to the homepage or explore our services, portfolio and contact page.",
  robots: { index: false, follow: true },
};

const QUICK_LINKS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Compass },
  { href: "/portfolio", label: "Portfolio", icon: FolderKanban },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] items-center overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,var(--accent)_0%,transparent_60%)] opacity-25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border-hover)_1px,transparent_0)] bg-[size:32px_32px] opacity-[0.15]"
      />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 py-24 text-center lg:px-8">
        <GradientText
          className="font-heading text-[clamp(5rem,18vw,10rem)] leading-none font-bold"
          aria-hidden="true"
        >
          404
        </GradientText>

        <h1 className="text-3xl">Page not found</h1>
        <p className="max-w-md text-lg">
          The page you&apos;re looking for doesn&apos;t exist or may have
          been moved. Let&apos;s get you back on track.
        </p>

        <nav aria-label="Quick links" className="mt-2 flex flex-wrap justify-center gap-3">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-border bg-bg-surface text-text-secondary hover:border-accent/40 hover:text-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors outline-none"
            >
              <link.icon className="size-4" aria-hidden="true" />
              {link.label}
            </Link>
          ))}
        </nav>

        <CTAButton asChild variant="primary" className="mt-4">
          <Link href="/contact">Talk to Us</Link>
        </CTAButton>
      </div>
    </div>
  );
}
