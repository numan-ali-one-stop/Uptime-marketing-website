import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Uptime Marketing",
  legalName: "Uptime Marketing",
  tagline: "Development, AI & Growth for Ambitious Brands",
  description:
    "Uptime Marketing is a technology and digital growth agency building web and mobile products, AI solutions, and full-funnel marketing for ambitious brands.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.uptimemarketing.com",
  // TODO: replace with real inbox
  email: "hello@uptimemarketing.com",
  // TODO: replace with real phone number
  phone: "+15551234567",
  phoneDisplay: "+1 (555) 123-4567",
  // TODO: replace with real WhatsApp number (digits only, international format)
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "15551234567",
  // TODO: replace with real business address
  address: "123 Market Street, Suite 400, San Francisco, CA 94103",
  // TODO: replace with real business hours and timezone
  businessHours: "Monday – Friday, 9:00 AM – 6:00 PM (EST)",
  social: [
    // TODO: replace with real social profile URLs
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/uptime-marketing",
      icon: "Linkedin",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/uptimemarketing",
      icon: "Facebook",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/uptimemarketing",
      icon: "Instagram",
    },
    { label: "X", href: "https://x.com/uptimemarketing", icon: "X" },
  ],
};
