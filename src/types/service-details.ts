import type { Faq } from "@/types/faqs";

export type ServiceDetailIncludedItem = {
  title: string;
  description: string;
};

export type ServiceDetailHighlight = {
  statOrPoint: string;
  description: string;
};

export type ServiceDetailProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  intro: [string, string];
  whatsIncluded: ServiceDetailIncludedItem[];
  whyItMatters: ServiceDetailHighlight[];
  process: ServiceDetailProcessStep[];
  deliverables: string[];
  idealFor: string[];
  tools: string[];
  faqs: Faq[];
  relatedServices: string[];
  turnaround: string;
  engagementModel: string;
};
