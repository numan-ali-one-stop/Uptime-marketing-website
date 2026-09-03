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
  social: SocialLink[];
};
