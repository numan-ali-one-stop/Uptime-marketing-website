import { AnimatedGroup } from "@/components/ui/animated-group";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

import { AnimatedConnector } from "./animated-connector";

type ProcessTimelineStep = {
  title: string;
  description: string;
};

type ProcessTimelineProps = {
  eyebrow?: string;
  title: string;
  steps: ProcessTimelineStep[];
  className?: string;
};

function ProcessTimeline({
  eyebrow = "How We Work",
  title,
  steps,
  className,
}: ProcessTimelineProps) {
  return (
    <Section className={cn("bg-bg-surface", className)}>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        align="center"
        className="mx-auto"
      />

      {/* Desktop: horizontal row connected by a single line */}
      <div className="relative mt-16 hidden lg:block">
        <div className="absolute top-6 right-[12.5%] left-[12.5%]">
          <AnimatedConnector orientation="horizontal" />
        </div>
        <AnimatedGroup
          className="grid gap-8"
          style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
        >
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center"
            >
              <span className="bg-accent ring-bg-surface relative z-10 size-3 rounded-full ring-4" />
              <div className="relative mt-4 flex h-14 w-full items-center justify-center">
                <span
                  aria-hidden="true"
                  className="font-heading text-text-primary/5 pointer-events-none absolute text-6xl font-bold select-none"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-text-primary relative text-sm font-semibold tracking-[0.1em] uppercase">
                  {step.title}
                </h3>
              </div>
              <p className="mt-2 text-sm">{step.description}</p>
            </div>
          ))}
        </AnimatedGroup>
      </div>

      {/* Mobile / tablet: vertical timeline */}
      <div className="relative mt-14 lg:hidden">
        <div className="absolute top-1.5 bottom-1.5 left-[5px]">
          <AnimatedConnector orientation="vertical" />
        </div>
        <AnimatedGroup className="flex flex-col gap-10">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex gap-5 pl-0">
              <span className="bg-accent ring-bg-surface relative z-10 mt-1.5 size-3 shrink-0 rounded-full ring-4" />
              <div className="flex-1">
                <div className="relative flex h-10 items-center">
                  <span
                    aria-hidden="true"
                    className="font-heading text-text-primary/5 pointer-events-none absolute text-4xl font-bold select-none"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-text-primary relative text-sm font-semibold tracking-[0.1em] uppercase">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </Section>
  );
}

export { ProcessTimeline };
