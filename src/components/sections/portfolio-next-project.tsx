import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { ProjectImage } from "@/components/ui/project-image";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/projects";

type PortfolioNextProjectProps = {
  project: Project;
  className?: string;
};

function PortfolioNextProject({ project, className }: PortfolioNextProjectProps) {
  return (
    <Section className={cn("bg-bg-surface", className)}>
      <Link href={`/portfolio/${project.slug}`} className="group block">
        <Card className="grid grid-cols-1 items-center gap-0 overflow-hidden p-0 lg:grid-cols-2">
          <div className="relative aspect-video overflow-hidden">
            <ProjectImage
              src={project.thumbnail}
              alt={project.title}
              label={project.title}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col items-start gap-2 p-6 md:p-8">
            <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
              Next Project
            </span>
            <h3 className="text-2xl">{project.title}</h3>
            <p className="text-sm">{project.excerpt}</p>
            <span className="text-accent mt-2 flex items-center gap-1.5 text-sm font-medium">
              View Case Study
              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </div>
        </Card>
      </Link>
    </Section>
  );
}

export { PortfolioNextProject };
