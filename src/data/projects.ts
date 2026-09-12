import type { Project } from "@/types/projects";

/**
 * PLACEHOLDER CONTENT — every project below is a fictional case study
 * standing in for real client work. Replace with actual projects, results
 * and testimonials before launch. Thumbnails, hero images and gallery
 * entries are empty strings and render as gradient placeholders until real
 * project media is ready; `liveUrl` values use the IANA-reserved
 * example.com domain and must be replaced with real URLs.
 */
export const projects: Project[] = [
  {
    slug: "northwind-retail-platform",
    title: "Northwind Retail Platform",
    client: "Northwind Retail",
    category: "Web Development",
    industry: "E-Commerce & Retail",
    year: 2024,
    thumbnail: "",
    heroImage: "",
    excerpt:
      "A headless e-commerce rebuild that unified inventory across 40+ stores.",
    metaDescription:
      "Uptime Marketing rebuilt Northwind Retail as a headless e-commerce platform, unifying inventory across 40+ stores and lifting checkout conversion by 62%.",
    challenge:
      "Northwind Retail was running on a legacy e-commerce platform that couldn't keep inventory in sync across more than 40 physical stores and its online storefront. Customers regularly saw items as in-stock that had already sold out locally, and checkout was slow enough that a meaningful share of shoppers abandoned their cart before finishing a purchase.",
    solution:
      "We rebuilt the storefront as a headless e-commerce platform on Next.js, backed by a unified inventory API that syncs stock levels across every store location in real time. The new checkout flow was rebuilt from scratch around speed and clarity, cutting the steps required to complete a purchase and optimizing every page for fast load times.",
    results: [
      { metric: "+62%", label: "Checkout Conversion" },
      { metric: "1.8s", label: "Average Page Load" },
      { metric: "40+", label: "Store Locations Unified" },
    ],
    servicesUsed: [
      "web-app-development",
      "custom-software-development",
      "ui-ux-design",
    ],
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS"],
    gallery: ["", "", "", ""],
    testimonial: {
      quote:
        "Uptime rebuilt our platform and our checkout flow in under three months. The team moved fast without cutting corners on quality.",
      name: "Jordan Blake",
      role: "VP of Engineering",
    },
    liveUrl: "https://northwindretail.example.com",
  },
  {
    slug: "meridian-fitness-app",
    title: "Meridian Fitness App",
    client: "Meridian Fitness",
    category: "Mobile App",
    industry: "Health & Fitness",
    year: 2024,
    thumbnail: "",
    heroImage: "",
    excerpt:
      "A cross-platform fitness app that turned a spreadsheet-based coaching business into a subscription product.",
    metaDescription:
      "Uptime Marketing built Meridian Fitness a cross-platform app turning spreadsheet-based coaching into a subscription product with 92% monthly retention.",
    challenge:
      "Meridian Fitness was coaching clients through a mix of spreadsheets, email check-ins and a generic scheduling tool that didn't reflect their brand or their coaching method. Growth was capped by how many clients a coach could manage manually, and there was no way to package the coaching model into a scalable product.",
    solution:
      "We designed and built a cross-platform mobile app covering workout plans, progress tracking and in-app messaging with a coach, all wrapped in a subscription model. The app shares a single backend across iOS and Android, so coaches manage every client from one dashboard instead of juggling separate tools.",
    results: [
      { metric: "4.8", label: "Average App Store Rating" },
      { metric: "3x", label: "Clients Per Coach" },
      { metric: "92%", label: "Monthly Retention" },
    ],
    servicesUsed: [
      "mobile-app-development",
      "ui-ux-design",
      "custom-software-development",
    ],
    techStack: ["React Native", "Node.js", "PostgreSQL", "Firebase"],
    gallery: ["", "", "", "", ""],
    testimonial: {
      quote:
        "Our coaches manage three times as many clients without it feeling impersonal. The app feels like it was actually designed for how we coach, not a generic template.",
      name: "Elena Marsh",
      role: "Founder",
    },
  },
  {
    slug: "cadence-support-ai-agent",
    title: "Cadence Support Agent",
    client: "Cadence",
    category: "AI",
    industry: "SaaS",
    year: 2025,
    thumbnail: "",
    heroImage: "",
    excerpt:
      "An AI support agent that triages and resolves tickets before they reach a human.",
    metaDescription:
      "Uptime Marketing built Cadence an AI support agent that resolves 71% of tickets autonomously, cutting first response time by 64% for its SaaS support team.",
    challenge:
      "Cadence's support team was drowning in repetitive tickets — password resets, billing questions, basic feature walkthroughs — that ate up hours every day and delayed the more complex cases that actually needed a human. Response times were slipping as the customer base grew faster than the support team.",
    solution:
      "We built an AI support agent trained on Cadence's own documentation and ticket history, wired directly into their helpdesk. The agent resolves common requests autonomously, gathers context on complex tickets before handoff, and escalates anything ambiguous to a human with a full summary attached instead of starting from scratch.",
    results: [
      { metric: "71%", label: "Tickets Resolved Autonomously" },
      { metric: "-64%", label: "Average First Response Time" },
      { metric: "24/7", label: "Support Coverage" },
    ],
    servicesUsed: ["ai-agents", "ai-development", "business-automation"],
    techStack: ["OpenAI", "LangChain", "Python", "AWS"],
    gallery: ["", "", "", ""],
    testimonial: {
      quote:
        "The AI support agent they built now resolves the majority of our tickets without a human touching them. It paid for itself in weeks.",
      name: "Marcus Ade",
      role: "Director of Customer Success",
    },
  },
  {
    slug: "harborline-logistics-seo",
    title: "Harborline Logistics",
    client: "Harborline Logistics",
    category: "SEO",
    industry: "Logistics & Freight",
    year: 2024,
    thumbnail: "",
    heroImage: "",
    excerpt:
      "A technical SEO overhaul and content strategy for a regional logistics brand.",
    metaDescription:
      "Uptime Marketing ran a technical SEO overhaul for Harborline Logistics, tripling organic traffic and ranking 128 more keywords in the top 10 in 6 months.",
    challenge:
      "Harborline Logistics had a functional website that was nearly invisible in search — thin content, unresolved crawl errors, and years of technical debt meant they were losing quotes to competitors who simply ranked higher for the exact services Harborline already offered.",
    solution:
      "We ran a full technical SEO audit, fixed the crawlability and indexation issues holding the site back, and built a content strategy around the specific freight and logistics services their customers were actually searching for. Ongoing optimization and monthly reporting kept the momentum going quarter over quarter.",
    results: [
      { metric: "3.4x", label: "Organic Traffic in 6 Months" },
      { metric: "+128", label: "Keywords in Top 10" },
      { metric: "+58%", label: "Quote Requests from Organic" },
    ],
    servicesUsed: ["seo", "website-indexing", "google-search-console"],
    techStack: ["Google Search Console", "GA4", "Ahrefs", "Screaming Frog"],
    gallery: ["", "", ""],
    testimonial: {
      quote:
        "Our organic traffic tripled within two quarters. What stood out was how clearly they connected technical SEO work to actual revenue.",
      name: "Priya Nandan",
      role: "Head of Marketing",
    },
    liveUrl: "https://harborlinelogistics.example.com",
  },
  {
    slug: "brightleaf-home-goods-growth",
    title: "Brightleaf Home Goods Growth Campaign",
    client: "Brightleaf Home Goods",
    category: "Digital Marketing",
    industry: "Retail & Consumer Goods",
    year: 2025,
    thumbnail: "",
    heroImage: "",
    excerpt:
      "A full-funnel paid and social strategy that turned a seasonal spike into steady year-round demand.",
    metaDescription:
      "Uptime Marketing built Brightleaf Home Goods a full-funnel marketing strategy that grew return on ad spend by 147% and cut cost per acquisition by 31%.",
    challenge:
      "Brightleaf Home Goods only saw meaningful sales during a few seasonal spikes each year, with paid ads running in isolation from their social presence and no consistent way to bring lapsed customers back. Ad spend was going up faster than revenue.",
    solution:
      "We rebuilt the paid media strategy around full-funnel targeting — prospecting, retargeting and lifecycle campaigns for past customers — and coordinated it with a consistent organic and paid social calendar so every channel reinforced the same seasonal campaigns instead of running independently.",
    results: [
      { metric: "+147%", label: "Return on Ad Spend" },
      { metric: "+83%", label: "Repeat Purchase Rate" },
      { metric: "-31%", label: "Cost Per Acquisition" },
    ],
    servicesUsed: [
      "digital-marketing",
      "digital-advertising",
      "social-media-marketing",
    ],
    techStack: ["Meta Ads", "Google Ads", "GA4", "HubSpot"],
    gallery: ["", "", "", ""],
    testimonial: {
      quote:
        "They turned our biggest weakness — inconsistent demand outside our busy season — into steady, predictable growth all year.",
      name: "Devon Okafor",
      role: "Co-Founder",
    },
    liveUrl: "https://brightleafhome.example.com",
  },
  {
    slug: "solace-wellness-rebrand",
    title: "Solace Wellness Rebrand",
    client: "Solace Wellness",
    category: "Design",
    industry: "Health & Wellness",
    year: 2025,
    thumbnail: "",
    heroImage: "",
    excerpt:
      "A full brand identity and UI refresh for a wellness studio expanding into three new locations.",
    metaDescription:
      "Uptime Marketing designed a full brand identity and app UI refresh for Solace Wellness ahead of a 3-location expansion, lifting app booking completion 44%.",
    challenge:
      "Solace Wellness had outgrown its original DIY logo and inconsistent visual identity right as it prepared to open three new studio locations. Nothing about the brand — from the logo to the booking app — looked like it belonged to the same business, which undercut the premium positioning they wanted for the expansion.",
    solution:
      "We designed a complete brand identity system — logo, color palette, typography and brand guidelines — then extended it into a redesigned booking app interface, so every touchpoint from signage to the app felt like one cohesive, premium brand ready to scale across locations.",
    results: [
      { metric: "3", label: "New Locations Launched" },
      { metric: "+44%", label: "App Booking Completion" },
      { metric: "100%", label: "Brand Consistency Across Locations" },
    ],
    servicesUsed: ["logo-design", "graphic-design", "ui-ux-design"],
    techStack: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    gallery: ["", "", "", "", ""],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
