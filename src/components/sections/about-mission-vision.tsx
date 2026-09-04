import { Compass, Telescope } from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const MISSION_VISION = [
  {
    icon: Compass,
    title: "Our Mission",
    description:
      "To give businesses one accountable partner for the technology and growth work that used to require juggling multiple vendors — building software, AI systems, and marketing strategy that are designed to work together from day one.",
  },
  {
    icon: Telescope,
    title: "Our Vision",
    description:
      "To be the team ambitious businesses call first when they need to build, automate, or grow — known not for any single service, but for consistently connecting the right combination of them to a real business outcome.",
  },
];

type AboutMissionVisionProps = {
  className?: string;
};

function AboutMissionVision({ className }: AboutMissionVisionProps) {
  return (
    <Section className={cn("bg-bg-surface", className)}>
      <AnimatedGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {MISSION_VISION.map((item) => (
          <div key={item.title}>
            <Card className="h-full p-8">
              <item.icon className="text-accent size-9" aria-hidden="true" />
              <h3 className="mt-2">{item.title}</h3>
              <p className="text-base">{item.description}</p>
            </Card>
          </div>
        ))}
      </AnimatedGroup>
    </Section>
  );
}

export { AboutMissionVision };
