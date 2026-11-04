"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/cta-button";
import { ProjectImage } from "@/components/ui/project-image";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types/projects";

type FilterId = "all" | "web-app" | "ai" | "seo" | "marketing" | "design";

const FILTERS: {
  id: FilterId;
  label: string;
  categories: ProjectCategory[] | null;
}[] = [
  { id: "all", label: "All", categories: null },
  {
    id: "web-app",
    label: "Web/App",
    categories: ["Web Development", "Mobile App"],
  },
  { id: "ai", label: "AI", categories: ["AI"] },
  { id: "seo", label: "SEO", categories: ["SEO"] },
  { id: "marketing", label: "Marketing", categories: ["Digital Marketing"] },
  { id: "design", label: "Design", categories: ["Design"] },
];

function isFilterId(value: string | null): value is FilterId {
  return FILTERS.some((filter) => filter.id === value);
}

// Only offer filters that lead somewhere.
const AVAILABLE_FILTERS = FILTERS.filter(
  (filter) =>
    !filter.categories ||
    projects.some((project) => filter.categories?.includes(project.category))
);
// "All" plus a single category would just show the same list twice.
const SHOW_FILTERS = AVAILABLE_FILTERS.length > 2;

function PortfolioFilterGrid() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeFilterParam = searchParams.get("category");
  const activeFilter: FilterId = isFilterId(activeFilterParam)
    ? activeFilterParam
    : "all";

  const activeCategories =
    FILTERS.find((filter) => filter.id === activeFilter)?.categories ?? null;

  const filteredProjects = activeCategories
    ? projects.filter((project) => activeCategories.includes(project.category))
    : projects;

  function handleFilterChange(id: FilterId) {
    const params = new URLSearchParams(searchParams.toString());
    if (id === "all") {
      params.delete("category");
    } else {
      params.set("category", id);
    }
    const query = params.toString();
    router.push(query ? `/portfolio?${query}` : "/portfolio", {
      scroll: false,
    });
  }

  return (
    <div>
      {SHOW_FILTERS ? (
        <>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {AVAILABLE_FILTERS.map((filter) => {
              const isActive = filter.id === activeFilter;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => handleFilterChange(filter.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium tracking-[0.02em] transition-colors sm:px-5 sm:py-2.5",
                    isActive
                      ? "border-accent bg-accent text-white"
                      : "border-border text-text-secondary hover:border-accent hover:text-text-primary"
                  )}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <p className="text-text-muted mt-6 text-center text-sm">
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
        </>
      ) : null}

      {filteredProjects.length === 0 ? (
        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-text-secondary text-base">
            No projects match this filter yet.
          </p>
          <CTAButton
            variant="secondary"
            onClick={() => handleFilterChange("all")}
          >
            Reset Filter
          </CTAButton>
        </div>
      ) : (
        <motion.div
          layout
          className={cn(
            "grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6",
            SHOW_FILTERS && "mt-8 md:mt-10",
            filteredProjects.length < 3 ? "mx-auto max-w-5xl" : "lg:grid-cols-3"
          )}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block h-full"
                >
                  <Card className="h-full gap-0 overflow-hidden p-0">
                    <div className="relative aspect-video overflow-hidden">
                      <ProjectImage
                        src={project.thumbnail}
                        alt={project.title}
                        label={project.title}
                        index={index}
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
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
                      <h2 className="text-lg">{project.title}</h2>
                      <p className="text-accent text-sm">
                        {project.results[0].metric} {project.results[0].label}
                      </p>
                      <p className="text-sm">{project.excerpt}</p>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

export { PortfolioFilterGrid };
