export type ProjectCategory = "Web/App" | "SEO" | "AI";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  excerpt: string;
  result: string;
};
