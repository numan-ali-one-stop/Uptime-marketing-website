import { Compass, LifeBuoy, Users, Wrench } from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const PILLARS = [
  {
    icon: Wrench,
    title: "Custom Solutions",
    description:
      "We don't sell a fixed package and ask you to fit into it. Every engagement starts by understanding your specific goals, constraints and existing systems, then we design and build a solution around that reality — not a one-size-fits-all template that happens to be easy for us to reuse.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "The people working on your project have shipped production software, run real ad budgets and managed technical SEO for businesses that depend on the results. You're not paying to train someone on your project — you're working with people who've already solved similar problems before.",
  },
  {
    icon: Compass,
    title: "Strategic Approach",
    description:
      "We won't recommend a tactic just because it's trendy or because it's what we're used to selling. Every recommendation is tied back to a specific business outcome you care about, and if something isn't likely to move that outcome, we'll tell you honestly instead of billing for it anyway.",
  },
  {
    icon: LifeBuoy,
    title: "Long-Term Support",
    description:
      "Launch day isn't the finish line. We stay involved after a project ships — monitoring performance, fixing issues quickly, and helping the system evolve as your business changes, so the value of the work compounds instead of quietly decaying the month after we hand it off.",
  },
];

type AboutWhyChooseUsProps = {
  className?: string;
};

function AboutWhyChooseUs({ className }: AboutWhyChooseUsProps) {
  return (
    <Section className={cn("bg-bg-base", className)}>
      <SectionHeading
        eyebrow="Why Choose Us"
        title="One partner, no compromises"
        align="center"
        className="mx-auto"
      />

      <AnimatedGroup className="mt-10 md:mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {PILLARS.map((pillar) => (
          <div key={pillar.title}>
            <Card className="h-full gap-3 p-6 md:p-8">
              <pillar.icon className="text-accent size-8" aria-hidden="true" />
              <h3 className="font-heading text-text-primary mt-1 text-lg font-semibold">
                {pillar.title}
              </h3>
              <p className="text-base">{pillar.description}</p>
            </Card>
          </div>
        ))}
      </AnimatedGroup>
    </Section>
  );
}

export { AboutWhyChooseUs };
