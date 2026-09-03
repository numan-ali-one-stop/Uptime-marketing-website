import { Compass, LifeBuoy, Users, Wrench } from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const VALUES = [
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

      <AnimatedGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {VALUES.map((value) => (
          <Card key={value.title} className="p-6">
            <value.icon className="text-accent size-8" aria-hidden="true" />
            <h3 className="font-heading text-text-primary mt-4 text-sm font-semibold tracking-[0.1em] uppercase">
              {value.title}
            </h3>
            <p className="mt-2 text-sm">{value.description}</p>
          </Card>
        ))}
      </AnimatedGroup>
    </Section>
  );
}

export { WhyUptime };
