import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

import { Checklist } from "./checklist";

type ServiceDetailDeliverablesProps = {
  deliverables: string[];
  className?: string;
};

function ServiceDetailDeliverables({
  deliverables,
  className,
}: ServiceDetailDeliverablesProps) {
  return (
    <Section className={cn("bg-bg-surface", className)}>
      <SectionHeading
        eyebrow="Deliverables"
        title="What you walk away with"
        align="center"
        className="mx-auto"
      />

      <div className="mt-12 flex justify-center">
        <Checklist items={deliverables} />
      </div>
    </Section>
  );
}

export { ServiceDetailDeliverables };
