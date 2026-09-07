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
  year: number;
  /** Empty string until a real asset exists — renders a gradient placeholder. */
  thumbnail: string;
  /** Empty string until a real asset exists — renders a gradient placeholder. */
  heroImage: string;
  excerpt: string;
  challenge: string;
  solution: string;
  results: [ProjectResult, ProjectResult, ProjectResult];
  /** Must match sub-service slugs in @/data/services.ts. */
  servicesUsed: string[];
  techStack: string[];
  /** Empty strings until real assets exist — each renders a gradient placeholder. */
  gallery: string[];
  testimonial?: ProjectTestimonial;
  liveUrl?: string;
};
