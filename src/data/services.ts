import type { ServiceCategory } from "@/types/services";

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "development",
    title: "Development",
    tagline: "Build Digital Products That Move Your Business Forward",
    description:
      "From mobile apps to custom platforms, we design and engineer software that performs under real-world load and scales with your business.",
    icon: "Code2",
    heroHeadline: "Software That Scales With Your Business",
    heroSubheadline:
      "We design, build and ship web apps, mobile apps and custom platforms engineered to handle real growth — not just demo day.",
    overview: [
      "Most software fails not at launch, but six months later when usage climbs and the shortcuts start to show. We build differently: clean architecture, tested code paths, and infrastructure sized for where you're headed, not just where you are today.",
      "Whether you need a customer-facing mobile app, a web platform your team runs the business on, or custom software that replaces a stack of spreadsheets, we handle the full lifecycle — architecture, development, QA, deployment and the support that comes after launch.",
    ],
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
    benefits: [
      {
        title: "Built to Scale",
        description:
          "Architecture decisions are made with your 12-month growth in mind, not just your launch date.",
      },
      {
        title: "Senior Engineering",
        description:
          "Every project is built by engineers who've shipped production software, not junior devs learning on your budget.",
      },
      {
        title: "Transparent Process",
        description:
          "Weekly check-ins and a shared project board mean you always know exactly where things stand.",
      },
      {
        title: "Post-Launch Support",
        description:
          "We stay on after launch to fix issues fast and help your product evolve as your business does.",
      },
    ],
    processSteps: [
      {
        title: "Discovery",
        description:
          "We map your requirements, users and constraints so we're solving the right problem before writing a line of code.",
      },
      {
        title: "Architecture",
        description:
          "We design the technical foundation — data models, integrations and infrastructure — to support where your product is going.",
      },
      {
        title: "Build & Test",
        description:
          "Our team builds in short cycles with continuous testing, so issues surface early instead of at launch.",
      },
      {
        title: "Launch & Support",
        description:
          "We manage deployment and stay engaged after go-live to monitor, fix and extend the product.",
      },
    ],
    toolsUsed: [
      "Next.js",
      "React",
      "Node.js",
      "React Native",
      "Flutter",
      "PostgreSQL",
      "AWS",
    ],
    faqs: [
      {
        question: "How long does it take to build a custom application?",
        answer:
          "Most projects take 8-16 weeks depending on scope, from a focused MVP to a full multi-platform product. We give you a specific timeline after scoping, not a generic estimate.",
      },
      {
        question: "Do you build both web and mobile apps?",
        answer:
          "Yes. We build responsive web applications and native/cross-platform mobile apps, often from a shared backend, so your product works consistently everywhere your users are.",
      },
      {
        question: "What happens after my app launches?",
        answer:
          "We offer ongoing support and maintenance plans covering bug fixes, monitoring, and new feature development, so your product keeps improving after go-live instead of stalling.",
      },
      {
        question: "Can you work with our existing codebase or team?",
        answer:
          "Yes, we regularly join existing codebases and work alongside in-house teams — auditing what's there first so we extend it responsibly instead of rewriting for its own sake.",
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
    heroHeadline: "Put AI to Work Inside Your Business",
    heroSubheadline:
      "We build AI systems, agents and automations that handle real operational work — not proof-of-concept demos that never ship.",
    overview: [
      "AI is only useful when it's wired into how your business actually runs. We start with a specific, high-friction process — support tickets, lead qualification, internal reporting — and build an AI system that measurably reduces the manual work around it.",
      "From custom models and integrations to autonomous agents that complete multi-step tasks, we design AI around your existing data and tools, then ship it into production with monitoring in place so it keeps working as your business changes.",
    ],
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
    benefits: [
      {
        title: "Practical, Not Hype",
        description:
          "We build AI for specific business outcomes, not AI for its own sake — every project ties back to hours saved or revenue moved.",
      },
      {
        title: "Built On Your Data",
        description:
          "Models and agents are grounded in your own systems and data, not generic assumptions about your business.",
      },
      {
        title: "Production-Ready",
        description:
          "We ship with monitoring, guardrails and fallback logic, so systems keep working reliably outside the demo environment.",
      },
      {
        title: "Fast Time to Value",
        description:
          "We prioritize the automation with the clearest ROI first, so you see results before the full roadmap is built.",
      },
    ],
    processSteps: [
      {
        title: "Discovery & Use-Case Mapping",
        description:
          "We identify the highest-impact, most repeatable process in your business and define what success looks like.",
      },
      {
        title: "Data & Architecture",
        description:
          "We assess your data sources and design the model, agent, or integration architecture around them.",
      },
      {
        title: "Build & Train",
        description:
          "We build, test and refine the system against real scenarios from your business, not synthetic examples.",
      },
      {
        title: "Deploy & Monitor",
        description:
          "We ship to production with logging and monitoring in place, then tune performance based on real usage.",
      },
    ],
    toolsUsed: [
      "OpenAI",
      "Anthropic Claude",
      "LangChain",
      "Python",
      "Vector Databases",
      "AWS",
    ],
    faqs: [
      {
        question: "What kinds of AI agents do you build?",
        answer:
          "We build agents that handle real workflows — customer support resolution, lead qualification, internal reporting and multi-step operational tasks — wired into the tools your team already uses.",
      },
      {
        question: "Do we need clean data before starting an AI project?",
        answer:
          "No. Part of our discovery process is assessing what data you have and designing around its actual state — we can often ship a useful first version before your data is perfectly organized.",
      },
      {
        question: "How do you handle AI accuracy and reliability?",
        answer:
          "We build in guardrails, fallback logic and human-in-the-loop checkpoints for high-stakes decisions, and monitor live performance so issues get caught early, not after they've caused damage.",
      },
      {
        question: "Can AI actually replace manual processes in my business?",
        answer:
          "For well-defined, repeatable processes, yes — that's exactly where AI creates the most value. We help you identify which processes are good candidates and which still need a human in the loop.",
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
    heroHeadline: "Get Found. Get Discovered. Grow.",
    heroSubheadline:
      "Technical SEO, local visibility and the emerging AI-driven search engines — built into one search strategy that compounds over time.",
    overview: [
      "Search has splintered — Google, Google Business Profile, and now AI answer engines all decide whether your business gets found. We build a technical and content foundation strong enough to perform across all of them, instead of chasing one channel at a time.",
      "Every engagement starts with a full audit of your site's technical health, current rankings and competitive gaps, then moves into ongoing implementation and reporting so you can see exactly what's improving and why.",
    ],
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
    benefits: [
      {
        title: "Full-Funnel Visibility",
        description:
          "We optimize for traditional search, local discovery, and AI/answer engines, not just one ranking factor.",
      },
      {
        title: "Technical Rigor",
        description:
          "We fix the crawlability, speed and structure issues that silently cap your rankings before they ever show up in reports.",
      },
      {
        title: "Transparent Reporting",
        description:
          "You get regular reports tied to rankings, traffic and conversions, not vanity metrics.",
      },
      {
        title: "Built to Compound",
        description:
          "SEO work is structured as continuous improvement, so gains build on each other instead of resetting every quarter.",
      },
    ],
    processSteps: [
      {
        title: "Audit",
        description:
          "We run a full technical, on-page and competitive audit to find exactly what's holding your rankings back.",
      },
      {
        title: "Strategy",
        description:
          "We build a prioritized roadmap targeting the fixes and opportunities with the highest impact on visibility.",
      },
      {
        title: "Implementation",
        description:
          "We execute technical fixes, content and optimization work directly, or alongside your existing team.",
      },
      {
        title: "Reporting",
        description:
          "We track rankings, traffic and conversions monthly, and adjust strategy based on what's actually moving.",
      },
    ],
    toolsUsed: [
      "Google Search Console",
      "GA4",
      "Ahrefs",
      "Screaming Frog",
      "Google Business Profile",
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Most clients see measurable movement in rankings and traffic within 3-4 months, with compounding gains after that. SEO is a long-term channel — we're upfront about that timeline from day one.",
      },
      {
        question:
          "Do you optimize for AI search tools like ChatGPT and Google AI Overviews?",
        answer:
          "Yes — Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) are part of our core SEO offering, structuring content so it can be cited by AI-generated answers, not just ranked in traditional search.",
      },
      {
        question: "Do you handle Google Business Profile and local SEO?",
        answer:
          "Yes, GBP optimization is one of our core services — we manage listings, reviews and local signals for businesses that depend on local search traffic.",
      },
      {
        question: "What's included in monthly SEO reporting?",
        answer:
          "You get rankings, organic traffic, indexing status and conversion data, along with a plain-language summary of what changed and what we're prioritizing next.",
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
    heroHeadline: "Turn Attention Into Revenue",
    heroSubheadline:
      "Full-funnel campaigns across paid, social and organic channels, built around the metrics that actually matter to your business.",
    overview: [
      "Running ads or posting content isn't a strategy on its own — it's a strategy when every channel is pointed at the same business goal. We build integrated campaigns across paid, social and organic channels so your marketing spend reinforces itself instead of competing with itself.",
      "From always-on social management to performance advertising across search, social and display, we manage the full funnel: audience targeting, creative, budget allocation and the reporting that tells you what's actually working.",
    ],
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
    benefits: [
      {
        title: "Full-Funnel Strategy",
        description:
          "Every channel is coordinated toward the same business outcome, not run in isolation by disconnected teams.",
      },
      {
        title: "Performance-Driven",
        description:
          "Budget moves toward what's converting, tracked against revenue and leads, not just impressions.",
      },
      {
        title: "Consistent Brand Presence",
        description:
          "Content and community management keep your brand active and on-message across every platform.",
      },
      {
        title: "Clear Reporting",
        description:
          "You see exactly what each channel and campaign is producing, in numbers that map to your business goals.",
      },
    ],
    processSteps: [
      {
        title: "Strategy",
        description:
          "We define your audience, channels and goals so every campaign is built around a clear business outcome.",
      },
      {
        title: "Campaign Setup",
        description:
          "We build out targeting, creative and tracking across the channels that matter most for your audience.",
      },
      {
        title: "Launch & Optimize",
        description:
          "Campaigns go live and we optimize continuously based on real performance data, not guesswork.",
      },
      {
        title: "Scale",
        description:
          "We reinvest budget into what's working and expand into new channels once performance is proven.",
      },
    ],
    toolsUsed: ["Meta Ads", "Google Ads", "LinkedIn Ads", "GA4", "HubSpot"],
    faqs: [
      {
        question: "Which platforms do you run ads on?",
        answer:
          "We run performance campaigns across Meta, Google, and LinkedIn, choosing the mix based on where your actual customers spend their time and how they buy.",
      },
      {
        question: "Do you handle both paid ads and organic social?",
        answer:
          "Yes — we run paid advertising and manage organic social content and community management, coordinated so both channels reinforce the same message and goals.",
      },
      {
        question: "How do you measure marketing success?",
        answer:
          "We track performance against the metrics that matter to your business — leads, conversions and revenue — not just impressions or clicks, and report on it monthly.",
      },
      {
        question: "What budget do I need to get started?",
        answer:
          "It depends on your channels and goals — we'll recommend a realistic starting budget after understanding your market and objectives, rather than a one-size-fits-all number.",
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
    heroHeadline: "Make Your Brand Impossible to Ignore",
    heroSubheadline:
      "Logo, brand identity, product design and creative campaigns built to make your business instantly recognizable.",
    overview: [
      "Good design isn't decoration — it's the first impression that decides whether someone trusts your business. We build visual identities and product interfaces that are distinctive, consistent, and built around how your customers actually make decisions.",
      "From a logo and brand system to full UI/UX design for your product and ongoing creative for campaigns, every deliverable is designed to work together as one coherent brand, not a collection of disconnected assets.",
    ],
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
    benefits: [
      {
        title: "Distinctive Identity",
        description:
          "We design brand marks and systems that stand out in your category, not templates that blend in.",
      },
      {
        title: "Conversion-Focused UI/UX",
        description:
          "Interfaces are designed around clarity and usability first, so good design also means better conversion.",
      },
      {
        title: "Consistent Across Channels",
        description:
          "Your brand looks and feels the same across web, social, print and product, reinforcing recognition everywhere.",
      },
      {
        title: "Fast Creative Turnaround",
        description:
          "Ongoing creative and campaign assets are delivered on the timelines your marketing calendar actually needs.",
      },
    ],
    processSteps: [
      {
        title: "Discovery",
        description:
          "We learn your brand, audience and competitors so design decisions are grounded in strategy, not personal taste.",
      },
      {
        title: "Concept & Direction",
        description:
          "We present distinct creative directions so you choose a direction before we invest in full execution.",
      },
      {
        title: "Design & Iteration",
        description:
          "We refine the chosen direction with your feedback until it's ready to represent your brand everywhere.",
      },
      {
        title: "Delivery",
        description:
          "You receive final files, brand guidelines and assets ready to use across every channel.",
      },
    ],
    toolsUsed: ["Figma", "Adobe Creative Cloud", "Illustrator", "Photoshop"],
    faqs: [
      {
        question: "What's included in a brand identity package?",
        answer:
          "A typical package includes logo design, a color and typography system, and brand guidelines — scoped to your specific needs after an initial discovery conversation.",
      },
      {
        question: "Do you design both branding and product interfaces?",
        answer:
          "Yes — we handle brand identity and UI/UX design for digital products, so your brand stays consistent from your logo to the interface your customers actually use.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "Each project includes a defined number of revision rounds, agreed on upfront during scoping, with the flexibility to add more if your needs change mid-project.",
      },
      {
        question: "Can you work from our existing brand guidelines?",
        answer:
          "Yes, we can design within an existing brand system, or help evolve it if it's no longer serving your business well — we'll tell you honestly which one fits your situation.",
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

export function findServiceLocation(subServiceSlug: string) {
  for (const category of serviceCategories) {
    const subService = category.subServices.find(
      (candidate) => candidate.slug === subServiceSlug
    );
    if (subService) {
      return { category, subService };
    }
  }
  return undefined;
}
