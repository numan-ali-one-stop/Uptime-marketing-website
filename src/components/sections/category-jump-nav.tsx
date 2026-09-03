"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type CategoryJumpNavProps = {
  categories: { slug: string; title: string }[];
};

function CategoryJumpNav({ categories }: CategoryJumpNavProps) {
  const [activeSlug, setActiveSlug] = React.useState(categories[0]?.slug);

  React.useEffect(() => {
    const sections = categories
      .map((category) => document.getElementById(category.slug))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        }
      },
      { rootMargin: "-160px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [categories]);

  return (
    <div className="bg-bg-base/80 border-border sticky top-20 z-40 border-b backdrop-blur-xl">
      <nav
        aria-label="Service categories"
        className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 [-ms-overflow-style:none] [scrollbar-width:none] lg:justify-center lg:gap-4 lg:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((category) => {
          const isActive = activeSlug === category.slug;
          return (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "shrink-0 rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors",
                isActive
                  ? "bg-accent/10 text-accent"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              {category.title}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export { CategoryJumpNav };
