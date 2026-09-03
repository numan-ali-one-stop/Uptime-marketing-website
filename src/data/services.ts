import type { ServiceCategory } from "@/types/services";

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "development",
    title: "Development",
    tagline: "Build Digital Products That Move Your Business Forward",
    description:
      "From mobile apps to custom platforms, we design and engineer software that performs under real-world load and scales with your business.",
    icon: "Code2",
    subServices: [
      {
        slug: "mobile-app-development",
        title: "Mobile App Development",
        shortDescription:
          "Native and cross-platform apps built for speed, stability, and store approval.",
        icon: "Smartphone",
      },
      {
        slug: "web-app-development",
        title: "Web App Development",
        shortDescription:
          "Fast, responsive web applications engineered for growth and reliability.",
        icon: "Globe",
      },
      {
        slug: "custom-software-development",
        title: "Custom Software Development",
        shortDescription:
          "Bespoke systems and internal tools tailored to your exact workflows.",
        icon: "Terminal",
      },
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    tagline: "Put AI to Work for Your Business",
    description:
      "We design and ship AI systems that automate work, augment your team, and create measurable operational leverage.",
    icon: "Sparkles",
    subServices: [
      {
        slug: "ai-development",
        title: "AI Development",
        shortDescription:
          "Custom AI models and integrations built around your data and goals.",
        icon: "BrainCircuit",
      },
      {
        slug: "ai-agents",
        title: "AI Agents",
        shortDescription:
          "Autonomous agents that handle multi-step tasks across your tools.",
        icon: "Bot",
      },
      {
        slug: "business-automation",
        title: "Business Automation",
        shortDescription:
          "Automated workflows that remove manual, repetitive operational work.",
        icon: "Workflow",
      },
      {
        slug: "custom-ai-solutions",
        title: "Custom AI Solutions",
        shortDescription:
          "Purpose-built AI products designed around a specific business problem.",
        icon: "Cpu",
      },
    ],
  },
  {
    slug: "seo-search",
    title: "SEO & Search",
    tagline: "Get Found. Get Discovered. Grow.",
    description:
      "A full-stack search presence — technical SEO, local visibility, and the emerging answer and generative engines shaping discovery.",
    icon: "Search",
    subServices: [
      {
        slug: "seo",
        title: "SEO",
        shortDescription:
          "Technical, on-page, and off-page SEO built to compound over time.",
        icon: "TrendingUp",
      },
      {
        slug: "gbp-optimization",
        title: "GBP Optimization",
        shortDescription:
          "Google Business Profile management that drives local discovery.",
        icon: "MapPin",
      },
      {
        slug: "google-search-console",
        title: "Google Search Console",
        shortDescription:
          "Ongoing monitoring, diagnostics, and performance reporting.",
        icon: "Gauge",
      },
      {
        slug: "website-indexing",
        title: "Website Indexing",
        shortDescription:
          "Ensure every important page is crawled, indexed, and discoverable.",
        icon: "ListChecks",
      },
      {
        slug: "aeo",
        title: "AEO",
        shortDescription:
          "Answer Engine Optimization for voice search and featured answers.",
        icon: "MessageCircleQuestion",
      },
      {
        slug: "geo",
        title: "GEO",
        shortDescription:
          "Generative Engine Optimization to appear in AI-generated answers.",
        icon: "Radar",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Turn Your Online Presence Into Business Growth",
    description:
      "Full-funnel marketing across paid, social, and organic channels — built to turn attention into revenue.",
    icon: "Megaphone",
    subServices: [
      {
        slug: "digital-marketing",
        title: "Digital Marketing",
        shortDescription:
          "Integrated campaigns across channels, aligned to business goals.",
        icon: "LineChart",
      },
      {
        slug: "social-media-marketing",
        title: "Social Media Marketing",
        shortDescription:
          "Paid and organic strategy that builds audience and drives demand.",
        icon: "Share2",
      },
      {
        slug: "social-media-management",
        title: "Social Media Management",
        shortDescription:
          "Consistent, on-brand content and community management.",
        icon: "CalendarCheck",
      },
      {
        slug: "digital-advertising",
        title: "Digital Advertising",
        shortDescription:
          "Performance media across search, social, and display.",
        icon: "Target",
      },
    ],
  },
  {
    slug: "design-creative",
    title: "Design & Creative",
    tagline: "Make Your Brand Stand Out",
    description:
      "Distinct visual identity and product design that makes your brand instantly recognizable.",
    icon: "Palette",
    subServices: [
      {
        slug: "logo-design",
        title: "Logo Design",
        shortDescription:
          "A distinctive mark that anchors your brand identity.",
        icon: "PenTool",
      },
      {
        slug: "graphic-design",
        title: "Graphic Design",
        shortDescription:
          "Visual assets for web, social, and print that stay on-brand.",
        icon: "Image",
      },
      {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        shortDescription:
          "Interfaces designed around clarity, usability, and conversion.",
        icon: "LayoutTemplate",
      },
      {
        slug: "creative-design",
        title: "Creative Design",
        shortDescription:
          "Concept-driven creative for campaigns and brand moments.",
        icon: "Wand2",
      },
    ],
  },
];

export function getServiceCategory(categorySlug: string) {
  return serviceCategories.find((category) => category.slug === categorySlug);
}

export function getSubService(categorySlug: string, subServiceSlug: string) {
  const category = getServiceCategory(categorySlug);
  return category?.subServices.find(
    (subService) => subService.slug === subServiceSlug
  );
}
