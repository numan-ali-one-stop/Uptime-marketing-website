import Image from "next/image";
import Link from "next/link";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { CTAButton } from "@/components/ui/cta-button";
import { GradientText } from "@/components/ui/gradient-text";
import { SectionImage } from "@/components/ui/section-image";
import { pagePhotos } from "@/data/photos";
import { serviceCategories } from "@/data/services";

import { HeroBackdrop } from "./page-hero";

function Hero() {
  return (
    <section className="bg-bg-base relative -mt-16 overflow-hidden pt-16 lg:-mt-20 lg:pt-20">
      <HeroBackdrop />

      <AnimatedGroup className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 pt-6 pb-14 sm:px-6 md:pt-8 md:pb-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pt-10 lg:pb-20">
        <div className="flex min-w-0 flex-col items-start gap-4 text-left md:gap-5">
          <GradientText className="text-xs font-medium tracking-[0.2em] uppercase">
            Technology &amp; Digital Growth
          </GradientText>
          <h1>
            Build Better. <GradientText className="whitespace-nowrap">Grow Faster.</GradientText>
          </h1>
          <p className="max-w-xl text-base md:text-lg">
            Uptime Marketing is one partner for web and mobile development, AI
            solutions, SEO, digital marketing and design, so everything that
            drives your business online works from the same plan.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2 sm:gap-4">
            <CTAButton asChild variant="primary">
              <Link href="/contact">Get Started</Link>
            </CTAButton>
            <CTAButton asChild variant="secondary">
              <Link href="/services">Explore Services</Link>
            </CTAButton>
          </div>
          <ul className="flex flex-wrap gap-2 pt-3">
            {serviceCategories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/services/${category.slug}`}
                  className="border-border text-text-secondary hover:border-accent hover:text-text-primary block rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative sm:mb-6 sm:ml-6 lg:mb-8 lg:ml-8">
          <SectionImage
            photo={pagePhotos.homeHero}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[16/10] lg:aspect-[4/3]"
            preload
          />
          <div className="border-bg-base absolute -bottom-6 -left-6 hidden aspect-[4/3] w-[38%] overflow-hidden rounded-xl border-4 shadow-2xl sm:block lg:-bottom-8 lg:-left-8">
            <Image
              src={pagePhotos.homeHeroInset.src}
              alt={pagePhotos.homeHeroInset.alt}
              fill
              sizes="(min-width: 1024px) 20vw, 38vw"
              className="object-cover"
            />
          </div>
        </div>
      </AnimatedGroup>
    </section>
  );
}

export { Hero };
