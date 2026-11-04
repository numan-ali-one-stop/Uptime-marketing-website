import {
  Gem,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Eye,
} from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const VALUES = [
  {
    icon: Gem,
    title: "Quality",
    description: "We hold every deliverable to a high standard, and raise risks early instead of cutting corners.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "You always know what we're doing, why, and how it's performing.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We act like an extension of your team, not an outside vendor.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of new tools and techniques so your business benefits first.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description: "Deadlines and commitments are kept, even when the work gets hard.",
  },
  {
    icon: Target,
    title: "Results",
    description: "Every engagement is measured against a real business outcome, not activity.",
  },
];

type AboutValuesProps = {
  className?: string;
};

function AboutValues({ className }: AboutValuesProps) {
  return (
    <Section className={cn("bg-bg-base", className)}>
      <SectionHeading
        eyebrow="Our Values"
        title="What guides how we work"
        align="center"
        className="mx-auto"
      />

      <AnimatedGroup className="mt-10 md:mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {VALUES.map((value) => (
          <div key={value.title}>
            <Card className="h-full gap-3 p-6">
              <value.icon className="text-accent size-7" aria-hidden="true" />
              <h3 className="font-heading text-text-primary text-base font-semibold">
                {value.title}
              </h3>
              <p className="text-sm">{value.description}</p>
            </Card>
          </div>
        ))}
      </AnimatedGroup>
    </Section>
  );
}

export { AboutValues };
