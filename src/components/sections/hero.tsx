import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { CTAButton } from "@/components/ui/cta-button";
import { GradientText } from "@/components/ui/gradient-text";
import { Section } from "@/components/ui/section";

import { HeroVisual } from "./visuals/hero-visual";

function Hero() {
  return (
    <Section
      className="bg-bg-base relative flex items-center overflow-hidden pt-12 pb-24 md:pt-16 md:pb-32 lg:pt-20 lg:pb-40"
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

      <AnimatedGroup className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-start gap-6 text-left">
          <GradientText className="text-xs font-medium tracking-[0.2em] uppercase">
            Technology &amp; Digital Growth
          </GradientText>
          <h1>
            Build Better. <GradientText>Grow Faster.</GradientText>
          </h1>
          <p className="max-w-xl text-lg">
            We build digital products, AI solutions and growth strategies that
            help businesses compete and grow online.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <CTAButton asChild variant="primary">
              <Link href="/contact">Get Started</Link>
            </CTAButton>
            <CTAButton asChild variant="secondary">
              <Link href="/services">Explore Services</Link>
            </CTAButton>
          </div>
        </div>

        <HeroVisual />
      </AnimatedGroup>

      <div
        aria-hidden="true"
        className="text-text-muted absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-[scroll-hint_2s_ease-in-out_infinite] flex-col items-center gap-1"
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase">
          Scroll
        </span>
        <ChevronDown className="size-4" />
      </div>
    </Section>
  );
}

export { Hero };
