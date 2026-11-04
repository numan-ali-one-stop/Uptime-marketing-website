import {
  CheckCircle2,
  Layers,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import type { ServiceDetail } from "@/types/service-details";

const INCLUDED_ICONS = [
  CheckCircle2,
  Layers,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
];

type ServiceDetailIncludedProps = {
  detail: ServiceDetail;
  className?: string;
};

function ServiceDetailIncluded({
  detail,
  className,
}: ServiceDetailIncludedProps) {
  return (
    <Section className={cn("bg-bg-surface", className)}>
      <SectionHeading
        eyebrow="What's Included"
        title={`Everything covered in ${detail.title}`}
        align="center"
        className="mx-auto"
      />

      <AnimatedGroup className="mt-10 md:mt-14 grid grid-cols-1 gap-5 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {detail.whatsIncluded.map((item, index) => {
          const Icon = INCLUDED_ICONS[index % INCLUDED_ICONS.length];
          return (
            <div key={item.title}>
              <Card className="h-full gap-3 p-6">
                <Icon className="text-accent size-7" aria-hidden="true" />
                <h3 className="font-heading text-text-primary text-base font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm">{item.description}</p>
              </Card>
            </div>
          );
        })}
      </AnimatedGroup>
    </Section>
  );
}

export { ServiceDetailIncluded };
