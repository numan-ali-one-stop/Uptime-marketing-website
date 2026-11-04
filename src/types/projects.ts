export type ProjectCategory =
  | "Web Development"
  | "Mobile App"
  | "AI"
  | "SEO"
  | "Digital Marketing"
  | "Design";

export type ProjectResult = {
  metric: string;
  label: string;
};

export type ProjectTestimonial = {
  quote: string;
  name: string;
  role: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  industry: string;
  /** Omit when the delivery year isn't confirmed. */
  year?: number;
  /** Empty string until a real asset exists — renders a gradient placeholder. */
  thumbnail: string;
  /** Empty string until a real asset exists — renders a gradient placeholder. */
  heroImage: string;
  /** Describes the hero image; defaults to the project title. */
  heroAlt?: string;
  excerpt: string;
  /** 150-160 char search-result description; distinct from the shorter on-page excerpt. */
  metaDescription: string;
  challenge: string;
  solution: string;
  results: ProjectResult[];
  /** Set when `results` are project facts rather than measured outcomes. */
  resultsAreFacts?: boolean;
  /** Must match sub-service slugs in @/data/services.ts. */
  servicesUsed: string[];
  techStack: string[];
  /** Empty strings until real assets exist — each renders a gradient placeholder. */
  gallery: string[];
  testimonial?: ProjectTestimonial;
  liveUrl?: string;
};
