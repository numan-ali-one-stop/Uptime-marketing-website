import { homeSectionPhotos } from "@/data/photos";
import { getServiceCategory } from "@/data/services";

import { SplitSection } from "./split-section";

function AiSection() {
  const category = getServiceCategory("ai-solutions");

  if (!category) return null;

  return (
    <SplitSection
      id="ai-solutions"
      eyebrow={category.title}
      heading={category.tagline}
      body="We build intelligent systems and AI agents that automate workflows, improve efficiency and support your day-to-day operations."
      checklistItems={category.subServices.map((s) => ({
        label: s.title,
        href: `/services/${category.slug}/${s.slug}`,
      }))}
      ctaLabel="Explore AI Solutions"
      ctaHref={`/services/${category.slug}`}
      photo={homeSectionPhotos[category.slug]}
      visualPosition="left"
    />
  );
}

export { AiSection };
