export type SubService = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  subServices: SubService[];
};
