import Link from "next/link";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { CTAButton } from "@/components/ui/cta-button";
import { Section } from "@/components/ui/section";

function FinalCtaSection() {
  return (
    <Section className="bg-bg-base">
      <div className="rounded-[2rem] bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-secondary)_100%)] p-px">
        <AnimatedGroup className="bg-bg-elevated flex flex-col items-center gap-4 rounded-[calc(2rem-1px)] px-6 py-16 text-center sm:px-12 sm:py-20">
          <h2>Ready to build something that grows your business?</h2>
          <p className="max-w-xl text-base">
            Let&apos;s talk about what you&apos;re trying to build — no
            pressure, just a clear plan.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <CTAButton asChild variant="primary">
              <Link href="/contact">Get Started</Link>
            </CTAButton>
            <CTAButton asChild variant="secondary">
              <Link href="/contact">Book a Free Consultation</Link>
            </CTAButton>
          </div>
        </AnimatedGroup>
      </div>
    </Section>
  );
}

export { FinalCtaSection };
