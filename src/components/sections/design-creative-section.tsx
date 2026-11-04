import { homeSectionPhotos } from "@/data/photos";
import { getServiceCategory } from "@/data/services";

import { SplitSection } from "./split-section";

function DesignCreativeSection() {
  const category = getServiceCategory("design-creative");

  if (!category) return null;

  return (
    <SplitSection
      id="design-creative"
      eyebrow={category.title}
      heading={category.tagline}
      body="From logos and branding to product interfaces and campaign creative, we design work that gives your business a professional, consistent identity."
      checklistItems={category.subServices.map((s) => ({
        label: s.title,
        href: `/services/${category.slug}/${s.slug}`,
      }))}
      ctaLabel="Explore Design Services"
      ctaHref={`/services/${category.slug}`}
      photo={homeSectionPhotos[category.slug]}
      className="bg-bg-surface"
    />
  );
}

export { DesignCreativeSection };
