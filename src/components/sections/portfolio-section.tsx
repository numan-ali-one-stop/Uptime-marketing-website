import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/cta-button";
import { ProjectImage } from "@/components/ui/project-image";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

function PortfolioSection() {
  return (
    <Section className="bg-bg-surface">
      <SectionHeading
        eyebrow="Our Work"
        title="Projects That Speak for Us"
        align="center"
        className="mx-auto"
      />

      <AnimatedGroup className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 md:mt-14 md:grid-cols-2 lg:gap-6">
        {projects.slice(0, 3).map((project, index) => (
          <div key={project.slug}>
            <Link href={`/portfolio/${project.slug}`} className="group block h-full">
              <Card className="h-full gap-0 overflow-hidden p-0">
                <div className="relative aspect-video overflow-hidden">
                  <ProjectImage
                    src={project.thumbnail}
                    alt={project.title}
                    label={project.title}
                    index={index}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
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
                  <p className="text-accent text-sm">
                    {project.results[0].metric} {project.results[0].label}
                  </p>
                  <p className="text-sm">{project.excerpt}</p>
                </div>
              </Card>
            </Link>
          </div>
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
