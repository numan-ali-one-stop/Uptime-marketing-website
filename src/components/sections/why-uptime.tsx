import { Compass, LifeBuoy, Users, Wrench } from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export const WHY_UPTIME_VALUES = [
  {
    icon: Wrench,
    title: "Custom Solutions",
    description:
      "We design and build every solution around your specific goals and constraints, not a one-size-fits-all template.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our team brings hands-on, senior-level experience across development, AI, design and growth marketing.",
  },
  {
    icon: Compass,
    title: "Strategic Approach",
    description:
      "Every recommendation we make ties back to a clear business outcome, not best practice for its own sake.",
  },
  {
    icon: LifeBuoy,
    title: "Long-Term Support",
    description:
      "We stay involved after launch — monitoring, optimizing and supporting your systems as your business grows.",
  },
];

function WhyUptime() {
  return (
    <Section className="bg-bg-base">
      <SectionHeading
        eyebrow="Why Uptime Marketing?"
        title="One partner for technology and digital growth."
        align="center"
        className="mx-auto"
      />

      <AnimatedGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-4 lg:gap-6">
        {WHY_UPTIME_VALUES.map((value) => (
          <div key={value.title}>
            <Card className="h-full gap-3 p-6">
              <value.icon className="text-accent size-8" aria-hidden="true" />
              <h3 className="font-heading text-text-primary mt-1 text-sm font-semibold tracking-[0.1em] uppercase">
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

export { WhyUptime };
