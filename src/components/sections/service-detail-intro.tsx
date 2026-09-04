import Image from "next/image";
import Link from "next/link";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Card } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/cta-button";
import { Section } from "@/components/ui/section";
import { serviceImages } from "@/data/service-images";
import { cn } from "@/lib/utils";
import type { ServiceDetail } from "@/types/service-details";

type ServiceDetailIntroProps = {
  detail: ServiceDetail;
  categoryTitle: string;
  categorySlug: string;
  className?: string;
};

function ServiceDetailIntro({
  detail,
  categoryTitle,
  categorySlug,
  className,
}: ServiceDetailIntroProps) {
  const image = serviceImages[detail.slug];

  return (
    <Section className={cn("bg-bg-base", className)}>
      <AnimatedGroup className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-5">
          <h2>Overview</h2>
          {detail.intro.map((paragraph) => (
            <p key={paragraph} className="text-base">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-6 lg:sticky lg:top-28">
          {image ? (
            <div className="border-border relative aspect-[4/3] w-full overflow-hidden rounded-2xl border shadow-[0_0_32px_-8px_var(--accent-glow)]">
              <Image
                src={image.hero}
                alt={detail.title}
                fill
                sizes="(min-width: 1024px) 32vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}
          <Card className="p-6">
            <p className="text-text-secondary text-xs font-medium tracking-[0.1em] uppercase">
              Part of{" "}
              <Link
                href={`/services/${categorySlug}`}
                className="text-accent hover:underline"
              >
                {categoryTitle}
              </Link>
            </p>
            <h3 className="mt-2">Quick Facts</h3>

            <dl className="flex flex-col gap-4">
              <div>
                <dt className="text-text-muted text-xs font-medium tracking-[0.1em] uppercase">
                  Turnaround
                </dt>
                <dd className="text-text-primary mt-1 text-sm font-medium">
                  {detail.turnaround}
                </dd>
              </div>
              <div>
                <dt className="text-text-muted text-xs font-medium tracking-[0.1em] uppercase">
                  Engagement Model
                </dt>
                <dd className="text-text-primary mt-1 text-sm font-medium">
                  {detail.engagementModel}
                </dd>
              </div>
            </dl>

            <CTAButton asChild variant="primary" className="mt-2">
              <Link href="/contact">Request a Quote</Link>
            </CTAButton>
          </Card>
        </div>
      </AnimatedGroup>
    </Section>
  );
}

export { ServiceDetailIntro };
