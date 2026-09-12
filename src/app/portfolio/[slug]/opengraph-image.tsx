import { getProject, projects } from "@/data/projects";
import { ogImageSize, renderOgImage } from "@/lib/og-image";

export const alt = "Uptime Marketing";
export const size = ogImageSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  return renderOgImage({
    eyebrow: project ? `${project.category} Case Study` : "Our Work",
    title: project?.title ?? "Our Work",
    subtitle: project?.excerpt,
  });
}
