export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type SiteConfig = {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  address: string;
  businessHours: string;
  /** Google Maps embed URL; the contact page shows a photo until it's set. */
  mapEmbedUrl?: string;
  social: SocialLink[];
};
