import { AnimatedGroup } from "@/components/ui/animated-group";
import { GradientText } from "@/components/ui/gradient-text";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import type { ServiceDetail } from "@/types/service-details";

type ServiceDetailWhyItMattersProps = {
  detail: ServiceDetail;
  className?: string;
};

function ServiceDetailWhyItMatters({
  detail,
  className,
}: ServiceDetailWhyItMattersProps) {
  return (
    <Section className={cn("bg-bg-base", className)}>
      <SectionHeading
        eyebrow="Why It Matters"
        title="The impact this has on your business"
        align="center"
        className="mx-auto"
      />

      <AnimatedGroup className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-3">
        {detail.whyItMatters.map((highlight) => (
          <div key={highlight.statOrPoint} className="flex flex-col items-center text-center">
            <GradientText className="font-heading text-3xl font-bold md:text-2xl lg:text-4xl">
              {highlight.statOrPoint}
            </GradientText>
            <p className="mt-3 max-w-xs text-sm">{highlight.description}</p>
          </div>
        ))}
      </AnimatedGroup>
    </Section>
  );
}

export { ServiceDetailWhyItMatters };
