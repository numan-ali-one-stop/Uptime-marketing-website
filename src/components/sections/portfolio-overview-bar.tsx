import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Section } from "@/components/ui/section";
import { findServiceLocation } from "@/data/services";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/projects";

type PortfolioOverviewBarProps = {
  project: Project;
  className?: string;
};

function PortfolioOverviewBar({ project, className }: PortfolioOverviewBarProps) {
  const services = project.servicesUsed
    .map((slug) => findServiceLocation(slug))
    .filter((location): location is NonNullable<typeof location> => Boolean(location));

  return (
    <Section className={cn("bg-bg-base", className)}>
      <div className="border-border bg-bg-surface grid grid-cols-1 gap-8 rounded-2xl border p-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-text-muted text-xs font-medium tracking-[0.1em] uppercase">
            Client
          </p>
          <p className="text-text-primary mt-1 text-sm font-medium">
            {project.client}
          </p>
        </div>

        <div>
          <p className="text-text-muted text-xs font-medium tracking-[0.1em] uppercase">
            Industry
          </p>
          <p className="text-text-primary mt-1 text-sm font-medium">
            {project.industry}
          </p>
        </div>

        <div>
          <p className="text-text-muted text-xs font-medium tracking-[0.1em] uppercase">
            Timeline
          </p>
          <p className="text-text-primary mt-1 text-sm font-medium">
            {project.year}
          </p>
        </div>

        <div>
          <p className="text-text-muted text-xs font-medium tracking-[0.1em] uppercase">
            {project.liveUrl ? "Live Site" : "Category"}
          </p>
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent mt-1 flex items-center gap-1.5 text-sm font-medium hover:underline"
            >
              Visit Live Site
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </Link>
          ) : (
            <p className="text-text-primary mt-1 text-sm font-medium">
              {project.category}
            </p>
          )}
        </div>

        <div className="sm:col-span-2 lg:col-span-4">
          <p className="text-text-muted text-xs font-medium tracking-[0.1em] uppercase">
            Services Used
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {services.map(({ category, subService }) => (
              <Link
                key={subService.slug}
                href={`/services/${category.slug}/${subService.slug}`}
                className="border-border text-text-secondary hover:border-accent hover:text-accent rounded-full border px-4 py-1.5 text-xs font-medium transition-colors"
              >
                {subService.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export { PortfolioOverviewBar };
