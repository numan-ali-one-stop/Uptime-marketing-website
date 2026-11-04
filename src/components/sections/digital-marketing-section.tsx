import { homeSectionPhotos } from "@/data/photos";
import { getServiceCategory } from "@/data/services";

import { SplitSection } from "./split-section";

function DigitalMarketingSection() {
  const category = getServiceCategory("digital-marketing");

  if (!category) return null;

  return (
    <SplitSection
      id="digital-marketing"
      eyebrow={category.title}
      heading={category.tagline}
      body="We help businesses build visibility, engage their audience and run consistent campaigns across social media and paid advertising."
      checklistItems={category.subServices.map((s) => ({
        label: s.title,
        href: `/services/${category.slug}/${s.slug}`,
      }))}
      ctaLabel="Explore Digital Marketing"
      ctaHref={`/services/${category.slug}`}
      photo={homeSectionPhotos[category.slug]}
      visualPosition="left"
    />
  );
}

export { DigitalMarketingSection };
