import { AnimatedGroup } from "@/components/ui/animated-group";
import { Card } from "@/components/ui/card";
import { CountUp } from "@/components/ui/count-up";
import { GradientText } from "@/components/ui/gradient-text";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import type { ProjectResult } from "@/types/projects";

/**
 * Splits a formatted metric string (e.g. "+62%", "-64%", "3.4x") into the
 * static prefix/suffix around it and the numeric value to animate.
 */
function parseMetric(metric: string) {
  const match = metric.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { prefix: "", value: 0, decimals: 0, suffix: metric };
  }

  const [, prefix, numberPart, suffix] = match;
  const cleaned = numberPart.replace(/,/g, "");
  const decimalPart = cleaned.split(".")[1];

  return {
    prefix,
    value: parseFloat(cleaned),
    decimals: decimalPart ? decimalPart.length : 0,
    suffix,
  };
}

type PortfolioResultsProps = {
  results: [ProjectResult, ProjectResult, ProjectResult];
  className?: string;
};

function PortfolioResults({ results, className }: PortfolioResultsProps) {
  return (
    <Section className={cn("bg-bg-surface", className)}>
      <SectionHeading
        eyebrow="Results"
        title="The impact, by the numbers"
        align="center"
        className="mx-auto"
      />

      <AnimatedGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {results.map((result) => {
          const parsed = parseMetric(result.metric);
          return (
            <div key={result.label}>
              <Card className="items-center p-8 text-center">
                <GradientText className="font-heading text-4xl font-bold sm:text-5xl">
                  <CountUp
                    value={parsed.value}
                    prefix={parsed.prefix}
                    suffix={parsed.suffix}
                    decimals={parsed.decimals}
                  />
                </GradientText>
                <p className="text-text-secondary mt-2 text-sm">
                  {result.label}
                </p>
              </Card>
            </div>
          );
        })}
      </AnimatedGroup>
    </Section>
  );
}

export { PortfolioResults };
