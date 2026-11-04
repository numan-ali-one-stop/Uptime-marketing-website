import { homeSectionPhotos } from "@/data/photos";
import { getServiceCategory } from "@/data/services";

import { SplitSection } from "./split-section";

function DevelopmentSection() {
  const category = getServiceCategory("development");

  if (!category) return null;

  return (
    <SplitSection
      id="development"
      eyebrow={category.title}
      heading={category.tagline}
      body="We design and build mobile apps, web applications and custom software around how your business actually works, then support them after launch."
      checklistItems={category.subServices.map((s) => ({
        label: s.title,
        href: `/services/${category.slug}/${s.slug}`,
      }))}
      ctaLabel="Explore Development"
      ctaHref={`/services/${category.slug}`}
      photo={homeSectionPhotos[category.slug]}
      className="bg-bg-surface"
    />
  );
}

export { DevelopmentSection };
