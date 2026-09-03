import { getServiceCategory } from "@/data/services";

import { SplitSection } from "./split-section";
import { DevMockupVisual } from "./visuals/dev-mockup-visual";

function DevelopmentSection() {
  const category = getServiceCategory("development");

  if (!category) return null;

  return (
    <SplitSection
      id="development"
      eyebrow={category.title}
      heading={category.tagline}
      body="We develop scalable digital solutions tailored to your business requirements."
      checklistItems={category.subServices.map((s) => s.title)}
      ctaLabel="Explore Development"
      ctaHref={`/services/${category.slug}`}
      visual={<DevMockupVisual />}
      visualPosition="right"
      className="bg-bg-surface"
    />
  );
}

export { DevelopmentSection };
