import { AnimatedGroup } from "@/components/ui/animated-group";
import { Section } from "@/components/ui/section";

import { WHY_UPTIME_VALUES } from "./why-uptime";

function ServicesWhyStrip() {
  return (
    <Section className="bg-bg-surface py-14 md:py-16">
      <AnimatedGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_UPTIME_VALUES.map((value) => (
          <div key={value.title} className="flex items-start gap-3">
            <value.icon
              className="text-accent mt-0.5 size-6 shrink-0"
              aria-hidden="true"
            />
            <div>
              <h3 className="font-heading text-text-primary text-sm font-semibold tracking-[0.05em] uppercase">
                {value.title}
              </h3>
              <p className="text-text-secondary mt-1 text-sm">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </AnimatedGroup>
    </Section>
  );
}

export { ServicesWhyStrip };
