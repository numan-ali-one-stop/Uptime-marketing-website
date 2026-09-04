import { Users } from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type ServiceDetailIdealForProps = {
  idealFor: string[];
  className?: string;
};

function ServiceDetailIdealFor({
  idealFor,
  className,
}: ServiceDetailIdealForProps) {
  return (
    <Section className={cn("bg-bg-base", className)}>
      <SectionHeading
        eyebrow="Ideal For"
        title="Is this the right fit for you?"
        align="center"
        className="mx-auto"
      />

      <AnimatedGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {idealFor.map((item) => (
          <div key={item}>
            <Card className="flex-row items-start gap-3 p-5">
              <Users className="text-accent size-5 shrink-0" aria-hidden="true" />
              <p className="text-text-primary text-sm font-medium">{item}</p>
            </Card>
          </div>
        ))}
      </AnimatedGroup>
    </Section>
  );
}

export { ServiceDetailIdealFor };
