import { AnimatedGroup } from "@/components/ui/animated-group";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type CategoryToolsProps = {
  title: string;
  tools: string[];
  className?: string;
};

function CategoryTools({ title, tools, className }: CategoryToolsProps) {
  return (
    <Section className={cn("bg-bg-surface", className)}>
      <SectionHeading
        eyebrow="Tools & Technologies"
        title={`What we use to deliver ${title}`}
        align="center"
        className="mx-auto"
      />

      <AnimatedGroup className="mt-10 flex flex-wrap justify-center gap-3">
        {tools.map((tool) => (
          <span
            key={tool}
            className="border-border bg-bg-elevated text-text-secondary rounded-full border px-4 py-2 text-sm font-medium"
          >
            {tool}
          </span>
        ))}
      </AnimatedGroup>
    </Section>
  );
}

export { CategoryTools };
