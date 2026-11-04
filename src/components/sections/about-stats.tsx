import { AnimatedGroup } from "@/components/ui/animated-group";
import { CountUp } from "@/components/ui/count-up";
import { Section } from "@/components/ui/section";
import { GradientText } from "@/components/ui/gradient-text";
import { companyInfo } from "@/data/company";
import { cn } from "@/lib/utils";

const STATS = [
  { label: "Projects Delivered", value: companyInfo.stats.projectsDelivered },
  { label: "Clients Served", value: companyInfo.stats.clientsServed },
  { label: "Years of Experience", value: companyInfo.stats.yearsOfExperience },
  { label: "Countries Served", value: companyInfo.stats.countriesServed },
];

type AboutStatsProps = {
  className?: string;
};

function AboutStats({ className }: AboutStatsProps) {
  return (
    <Section className={cn("bg-bg-surface", className)}>
      <AnimatedGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <GradientText className="font-heading text-3xl font-bold sm:text-5xl">
              <CountUp value={stat.value} suffix="+" />
            </GradientText>
            <span className="text-text-secondary mt-2 text-sm">{stat.label}</span>
          </div>
        ))}
      </AnimatedGroup>
    </Section>
  );
}

export { AboutStats };
