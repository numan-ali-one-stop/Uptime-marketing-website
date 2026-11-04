import Link from "next/link";
import * as React from "react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { GradientText } from "@/components/ui/gradient-text";
import { SectionImage } from "@/components/ui/section-image";
import type { Photo } from "@/data/photos";

function HeroBackdrop() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,var(--accent)_0%,transparent_60%)] opacity-25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border-hover)_1px,transparent_0)] bg-[size:32px_32px] opacity-[0.15]"
      />
    </>
  );
}

type Crumb = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  breadcrumbs: Crumb[];
  eyebrow: string;
  eyebrowIcon?: React.ReactNode;
  title: string;
  subtitle: string;
  actions?: React.ReactNode;
  photo?: Photo;
  photoClassName?: string;
};

/** The hero at the top of every inner page. */
function PageHero({
  breadcrumbs,
  eyebrow,
  eyebrowIcon,
  title,
  subtitle,
  actions,
  photo,
  photoClassName = "aspect-[16/10] lg:aspect-[4/3]",
}: PageHeroProps) {
  return (
    <section className="bg-bg-base relative -mt-16 overflow-hidden pt-16 lg:-mt-20 lg:pt-20">
      <HeroBackdrop />

      <AnimatedGroup className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 pt-6 pb-12 sm:px-6 md:pt-8 md:pb-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pt-10 lg:pb-20">
        <div className="flex min-w-0 flex-col items-start gap-4 text-left md:gap-5">
          <nav aria-label="Breadcrumb">
            <ol className="text-text-secondary flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.label}>
                  {index > 0 ? <li aria-hidden="true">/</li> : null}
                  {crumb.href ? (
                    <li>
                      <Link
                        href={crumb.href}
                        className="hover:text-text-primary transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    </li>
                  ) : (
                    <li className="text-text-primary" aria-current="page">
                      {crumb.label}
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ol>
          </nav>

          <div className="flex items-center gap-3">
            {eyebrowIcon ? (
              <div className="flex size-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--accent)_18%,transparent)_0%,color-mix(in_oklab,var(--accent-secondary)_18%,transparent)_100%)]">
                {eyebrowIcon}
              </div>
            ) : null}
            <GradientText className="text-xs font-medium tracking-[0.2em] uppercase">
              {eyebrow}
            </GradientText>
          </div>

          <h1>{title}</h1>
          <p className="max-w-2xl text-base md:text-lg">{subtitle}</p>

          {actions ? (
            <div className="flex flex-wrap items-center gap-3 pt-2 sm:gap-4">
              {actions}
            </div>
          ) : null}
        </div>

        {photo ? (
          <SectionImage
            photo={photo}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={photoClassName}
            preload
          />
        ) : null}
      </AnimatedGroup>
    </section>
  );
}

export { HeroBackdrop, PageHero };
