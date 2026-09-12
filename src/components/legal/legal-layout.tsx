"use client";

import * as React from "react";
import Link from "next/link";

import { GradientText } from "@/components/ui/gradient-text";
import { cn } from "@/lib/utils";

export type LegalSection = {
  id: string;
  title: string;
};

type LegalLayoutProps = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  children: React.ReactNode;
};

function LegalLayout({
  eyebrow,
  title,
  lastUpdated,
  sections,
  children,
}: LegalLayoutProps) {
  const [activeId, setActiveId] = React.useState<string>(
    sections[0]?.id ?? ""
  );

  React.useEffect(() => {
    const headings = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-8">
      <div className="flex flex-col items-start gap-4 pb-12">
        <GradientText className="text-xs font-medium tracking-[0.2em] uppercase">
          {eyebrow}
        </GradientText>
        <h1>{title}</h1>
        <p className="text-text-muted text-sm">Last updated: {lastUpdated}</p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[240px_1fr]">
        <nav
          aria-label="Table of contents"
          className="hidden lg:block"
        >
          <div className="sticky top-28 flex flex-col gap-1">
            <p className="text-text-muted mb-2 text-xs font-medium tracking-[0.1em] uppercase">
              On this page
            </p>
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition-colors",
                  activeId === section.id
                    ? "bg-bg-surface text-accent font-medium"
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {section.title}
              </Link>
            ))}
          </div>
        </nav>

        <div
          className={cn(
            "max-w-3xl",
            "[&_h2]:mt-2 [&_h2]:mb-4 [&_h2:not(:first-child)]:mt-4",
            "[&_h3]:mt-6 [&_h3]:mb-3",
            "[&_p]:mb-4 [&_p:last-child]:mb-0",
            "[&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
            "[&_strong]:text-text-primary [&_strong]:font-semibold"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export { LegalLayout };
