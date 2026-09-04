import type { Faq } from "@/types/faqs";

export type SubService = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
};

export type ServiceBenefit = {
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  subServices: SubService[];
  heroHeadline: string;
  heroSubheadline: string;
  overview: [string, string];
  benefits: ServiceBenefit[];
  processSteps: ServiceProcessStep[];
  toolsUsed: string[];
  faqs: Faq[];
};
