export type ServiceImageSet = {
  card: string;
  hero: string;
};

// Maps each sub-service slug to the two images we have for it:
// `card` for compact grid cards, `hero` for the larger service-detail visual.
export const serviceImages: Record<string, ServiceImageSet> = {
  "mobile-app-development": {
    card: "/images/aap-dev.jpg",
    hero: "/images/aap-dev3.jpg",
  },
  "web-app-development": {
    card: "/images/web-dev.jpg",
    hero: "/images/web-dev1.jpg",
  },
  "custom-software-development": {
    card: "/images/soft-dev.jpg",
    hero: "/images/soft-dev1.jpg",
  },
  "ai-development": {
    card: "/images/ai-dev.jpg",
    hero: "/images/ai-dev1.jpg",
  },
  "ai-agents": {
    card: "/images/ai-agent.jpg",
    hero: "/images/ai-agent1.jpg",
  },
  "business-automation": {
    card: "/images/business-auto.jpg",
    hero: "/images/business-auto1.jpg",
  },
  "custom-ai-solutions": {
    card: "/images/custom-ai-solutions.jpg",
    hero: "/images/custom-ai-solutions1.jpg",
  },
  seo: {
    card: "/images/seo.jpg",
    hero: "/images/seo1.jpg",
  },
  "gbp-optimization": {
    card: "/images/gbp-optimization.jpg",
    hero: "/images/gbp-optimization1.jpg",
  },
  "google-search-console": {
    card: "/images/google-search-engine.jpg",
    hero: "/images/google-search-engine1.jpg",
  },
  "website-indexing": {
    card: "/images/website-indexing.jpg",
    hero: "/images/website-indexing1.jpg",
  },
  aeo: {
    card: "/images/aeo.jpg",
    hero: "/images/aeo2.jpg",
  },
  geo: {
    card: "/images/geo.jpg",
    hero: "/images/geo1.jpg",
  },
  "digital-marketing": {
    card: "/images/digital-marketing.jpg",
    hero: "/images/digital-marketing1.jpg",
  },
  "social-media-marketing": {
    card: "/images/social-media-marketing.jpg",
    hero: "/images/social-media-marketing1.jpg",
  },
  "social-media-management": {
    card: "/images/social-media-management.jpg",
    hero: "/images/social-media-management1.jpg",
  },
  "digital-advertising": {
    card: "/images/digital-advertising.jpg",
    hero: "/images/digital-advertising1.jpg",
  },
  "logo-design": {
    card: "/images/logo-design.jpg",
    hero: "/images/logo-design1.jpg",
  },
  "graphic-design": {
    card: "/images/graphic-design.jpg",
    hero: "/images/graphic-design1.jpg",
  },
  "ui-ux-design": {
    card: "/images/uiux-design.jpg",
    hero: "/images/uiux-design1.jpg",
  },
  "creative-design": {
    card: "/images/creative-design.jpg",
    hero: "/images/creative-design1.jpg",
  },
};

// One representative image per service category, used on category pages.
export const categoryHeroImages: Record<string, string> = {
  development: "/images/web-dev2.jpg",
  "ai-solutions": "/images/ai-dev2.jpg",
  "seo-search": "/images/seo2.jpg",
  "digital-marketing": "/images/market.jpg",
  "design-creative": "/images/creative-design2.jpg",
};

export const teamPhoto = "/images/it-team.jpg";
