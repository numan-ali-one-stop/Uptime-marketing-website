import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { PortfolioGallery } from "@/components/sections/portfolio-gallery";
import { PortfolioNextProject } from "@/components/sections/portfolio-next-project";
import { PortfolioOverviewBar } from "@/components/sections/portfolio-overview-bar";
import { PortfolioResults } from "@/components/sections/portfolio-results";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Badge } from "@/components/ui/badge";
import { ProjectImage } from "@/components/ui/project-image";
import { Section } from "@/components/ui/section";
import { getProject, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

type PortfolioDetailPageProps = {
  params: Promise<{ slug: string }>;
};

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
    description: project.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.excerpt,
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Our Work",
        item: `${siteConfig.url}/portfolio`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: projectUrl,
      },
    ],
  };

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.excerpt,
    dateCreated: String(project.year),
    keywords: project.techStack.join(", "),
    url: projectUrl,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />

      <Section
        className="bg-bg-base relative overflow-hidden py-20 md:py-28"
        containerClassName="relative w-full"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,var(--accent)_0%,transparent_60%)] opacity-25"
        />

        <AnimatedGroup className="relative flex flex-col gap-8">
          <div className="flex flex-col items-start gap-5 text-left">
            <nav aria-label="Breadcrumb">
              <ol className="text-text-secondary flex flex-wrap items-center gap-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="hover:text-text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href="/portfolio"
                    className="hover:text-text-primary transition-colors"
                  >
                    Our Work
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-text-primary" aria-current="page">
                  {project.title}
                </li>
              </ol>
            </nav>

            <Badge variant="secondary">{project.category}</Badge>
            <h1>{project.title}</h1>
            <p className="text-text-secondary text-lg">
              {project.client} — {project.year}
            </p>
          </div>

          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl">
            <ProjectImage
              src={project.heroImage}
              alt={project.title}
              label={project.title}
              sizes="100vw"
            />
          </div>
        </AnimatedGroup>
      </Section>

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

      <PortfolioResults results={project.results} className="bg-bg-base" />

      <PortfolioGallery
        images={project.gallery}
        projectTitle={project.title}
        className="bg-bg-surface"
      />

      {project.testimonial ? (
        <Section className="bg-bg-base">
          <AnimatedGroup className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <p className="font-heading text-text-primary text-2xl leading-snug font-medium">
              &ldquo;{project.testimonial.quote}&rdquo;
            </p>
            <div>
              <p className="text-text-primary text-sm font-semibold">
                {project.testimonial.name}
              </p>
              <p className="text-text-muted text-sm">
                {project.testimonial.role}, {project.client}
              </p>
            </div>
          </AnimatedGroup>
        </Section>
      ) : null}

      <PortfolioNextProject
        project={nextProject}
        className={project.testimonial ? undefined : "bg-bg-base"}
      />

      <FinalCtaSection
        heading="Have a project in mind?"
        body="Tell us what you're trying to build or improve — we'll come back with a clear plan, not a sales pitch."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="View All Work"
        secondaryHref="/portfolio"
      />
    </>
  );
}
