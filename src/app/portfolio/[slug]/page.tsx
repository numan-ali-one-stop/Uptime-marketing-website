import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";

import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { PortfolioGallery } from "@/components/sections/portfolio-gallery";
import { PortfolioNextProject } from "@/components/sections/portfolio-next-project";
import { PortfolioOverviewBar } from "@/components/sections/portfolio-overview-bar";
import { PortfolioResults } from "@/components/sections/portfolio-results";
import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { CTAButton } from "@/components/ui/cta-button";
import { Section } from "@/components/ui/section";
import { getProject, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { breadcrumbSchema, creativeWorkSchema } from "@/lib/schema";

type PortfolioDetailPageProps = {
  params: Promise<{ slug: string }>;
};

// Every valid path is pre-rendered, so anything else is a true 404 rather than
// the not-found screen sent with a 200 status.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PortfolioDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Portfolio" };
  }

  const url = `${siteConfig.url}/portfolio/${project.slug}`;

  return {
    title: project.title,
    description: project.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.metaDescription,
      url,
    },
  };
}

export default async function PortfolioDetailPage({
  params,
}: PortfolioDetailPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const projectUrl = `${siteConfig.url}/portfolio/${project.slug}`;
  const hasGallery = project.gallery.some(Boolean);

  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Our Work", url: `${siteConfig.url}/portfolio` },
            { name: project.title, url: projectUrl },
          ]),
          creativeWorkSchema(project),
        ]}
      />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Work", href: "/portfolio" },
          { label: project.title },
        ]}
        eyebrow={project.category}
        title={project.title}
        subtitle={project.excerpt}
        photo={{ src: project.heroImage, alt: project.heroAlt ?? project.title }}
        photoClassName="aspect-video"
        actions={
          project.liveUrl ? (
            <CTAButton asChild variant="primary">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Visit Live Site
                <ExternalLink aria-hidden="true" />
              </a>
            </CTAButton>
          ) : undefined
        }
      />

      <PortfolioOverviewBar project={project} className="bg-bg-surface" />

      <Section className="bg-bg-base">
        <AnimatedGroup className="mx-auto flex max-w-3xl flex-col gap-4">
          <h2>The Challenge</h2>
          <p className="text-base">{project.challenge}</p>
        </AnimatedGroup>
      </Section>

      <Section className="bg-bg-surface">
        <AnimatedGroup className="mx-auto flex max-w-3xl flex-col gap-4">
          <h2>Our Solution</h2>
          <p className="text-base">{project.solution}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.techStack.map((tool) => (
              <span
                key={tool}
                className="border-border bg-bg-elevated text-text-secondary rounded-full border px-4 py-2 text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </AnimatedGroup>
      </Section>

      <PortfolioResults
        results={project.results}
        isFacts={project.resultsAreFacts}
        className="bg-bg-base"
      />

      <PortfolioGallery
        images={project.gallery}
        projectTitle={project.title}
        className="bg-bg-surface"
      />

      <PortfolioNextProject
        project={nextProject}
        className={hasGallery ? "bg-bg-base" : "bg-bg-surface"}
      />

      <FinalCtaSection
        heading="Have a project in mind?"
        body="Tell us what you're trying to build or improve — we'll come back with a clear plan, not a sales pitch."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="View All Work"
        secondaryHref="/portfolio"
        className={hasGallery ? "bg-bg-surface" : undefined}
      />
    </>
  );
}
