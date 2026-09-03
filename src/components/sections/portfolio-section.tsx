import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/cta-button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

function PortfolioSection() {
  return (
    <Section className="bg-bg-base">
      <SectionHeading
        eyebrow="Our Work"
        title="Projects That Speak for Us"
        align="center"
        className="mx-auto"
      />

      <AnimatedGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group"
          >
            <Card className="h-full overflow-hidden p-0">
              <div className="relative aspect-video overflow-hidden bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-secondary)_100%)]">
                <span className="font-heading absolute inset-0 flex items-center justify-center p-6 text-center text-lg font-semibold text-white/90 transition-transform duration-300 group-hover:scale-105">
                  {project.title}
                </span>
                <ArrowUpRight
                  className="absolute top-4 right-4 size-5 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-col gap-2 p-6">
                <Badge variant="secondary" className="w-fit">
                  {project.category}
                </Badge>
                <h3 className="text-lg">{project.title}</h3>
                <p className="text-accent text-sm">{project.result}</p>
                <p className="text-sm">{project.excerpt}</p>
              </div>
            </Card>
          </Link>
        ))}
      </AnimatedGroup>

      <div className="mt-10 flex justify-center">
        <CTAButton asChild variant="secondary">
          <Link href="/portfolio">View Portfolio</Link>
        </CTAButton>
      </div>
    </Section>
  );
}

export { PortfolioSection };
