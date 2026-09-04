import type { ServiceDetail } from "@/types/service-details";

export const serviceDetails: Record<string, ServiceDetail> = {
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    metaTitle: "Mobile App Development Services | UPTIME MARKETING",
    metaDescription:
      "Native and cross-platform mobile app development for iOS and Android, engineered for speed, stability, offline support and smooth store approval every time.",
    heroHeadline: "Mobile Apps Built for Real Users, Not Just App Stores",
    heroSubheadline:
      "We design and build native and cross-platform mobile apps that perform well, pass store review, and hold up under real usage.",
    intro: [
      "A mobile app is often the most direct relationship you have with your customers — which means a slow, buggy, or confusing app does real damage to how people see your business. We build mobile apps the way we'd want to use them: fast, stable, and genuinely useful, not just functional in a demo.",
      "Whether you need a native iOS/Android app or a single cross-platform codebase covering both, we handle the full build — UI implementation, backend integration, offline handling, push notifications, and the App Store/Play Store submission process itself.",
    ],
    whatsIncluded: [
      {
        title: "Native & Cross-Platform Builds",
        description:
          "We build in Swift/Kotlin or React Native/Flutter depending on your performance needs and budget, and tell you honestly which fits your case.",
      },
      {
        title: "UI Implementation",
        description:
          "Your designs (or ours) get built pixel-accurately, with attention to platform-specific interaction patterns on iOS and Android.",
      },
      {
        title: "Backend & API Integration",
        description:
          "We connect your app to existing APIs or build the backend it needs, including authentication, data sync and offline support.",
      },
      {
        title: "Push Notifications & Analytics",
        description:
          "We wire up engagement tools like push notifications and in-app analytics so you can see how the app is actually used.",
      },
      {
        title: "App Store & Play Store Submission",
        description:
          "We handle the submission process, store listing requirements, and review feedback so your launch isn't held up by paperwork.",
      },
      {
        title: "QA Across Devices",
        description:
          "We test across real device and OS version combinations, not just a simulator, to catch issues before your users do.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "88%",
        description:
          "of users abandon an app after a poor first experience — performance and stability aren't optional polish, they're retention.",
      },
      {
        statOrPoint: "2 Platforms",
        description:
          "iOS and Android combined cover the vast majority of smartphone users, so a cross-platform strategy usually means broader reach for less budget.",
      },
      {
        statOrPoint: "1 Codebase",
        description:
          "A well-architected cross-platform app can share most of its code between iOS and Android, cutting long-term maintenance cost.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Planning",
        description:
          "We define your core user flows, platform priorities and technical requirements before any design or code work starts.",
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description:
          "We build or refine UI screens and click-through prototypes so you can validate the experience before development begins.",
      },
      {
        step: 3,
        title: "Development & Testing",
        description:
          "We build the app in focused sprints, testing continuously across real devices rather than at the end of the project.",
      },
      {
        step: 4,
        title: "Launch & Store Submission",
        description:
          "We manage store submission, respond to review feedback, and support you through launch day.",
      },
    ],
    deliverables: [
      "Fully functional iOS and/or Android application",
      "Source code and repository access",
      "App Store / Play Store listing setup and submission",
      "Basic analytics and crash reporting integration",
      "Post-launch support window for critical fixes",
    ],
    idealFor: [
      "Startups launching a customer-facing mobile product",
      "Businesses replacing an outdated or underperforming app",
      "Companies extending a web product to mobile",
      "Teams that need one codebase covering iOS and Android",
    ],
    tools: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    faqs: [
      {
        question: "Should I build a native app or a cross-platform app?",
        answer:
          "It depends on your performance needs and budget — native gives you the best possible performance per platform, while cross-platform frameworks like React Native or Flutter cover both platforms from one codebase for less cost. We'll recommend based on your specific product, not a default answer.",
      },
      {
        question: "How long does mobile app development take?",
        answer:
          "Most mobile apps take 10-16 weeks from kickoff to store submission, depending on feature scope and whether we're building for one or two platforms.",
      },
      {
        question: "Do you help with App Store and Play Store approval?",
        answer:
          "Yes, we handle the entire submission process including store listing assets, compliance requirements, and responding to any review feedback.",
      },
      {
        question: "Can you maintain the app after launch?",
        answer:
          "Yes, we offer ongoing maintenance plans covering OS updates, bug fixes and new features, so your app keeps working as Apple and Google update their platforms.",
      },
    ],
    relatedServices: [
      "web-app-development",
      "custom-software-development",
      "ui-ux-design",
    ],
    turnaround: "10-16 weeks",
    engagementModel: "Fixed-scope project",
  },

  "web-app-development": {
    slug: "web-app-development",
    title: "Web App Development",
    metaTitle: "Web App Development Services | UPTIME MARKETING",
    metaDescription:
      "Custom web application development with modern frameworks for speed, reliability and scalable growth, from focused MVPs to full production-ready platforms.",
    heroHeadline: "Web Applications Built to Handle Real Traffic",
    heroSubheadline:
      "We design and build fast, responsive web applications — from customer-facing products to internal platforms — engineered to stay reliable as usage grows.",
    intro: [
      "A website tells people about your business; a web application lets them actually do something — book, buy, manage, calculate. That distinction changes how it needs to be built: real state management, real data handling, and architecture that doesn't fall over under concurrent users.",
      "We build web applications end-to-end, from the interface your users touch to the backend and database that power it, using modern frameworks that keep the product fast to use and fast to extend as your requirements change.",
    ],
    whatsIncluded: [
      {
        title: "Frontend Architecture",
        description:
          "We build responsive, component-based interfaces using modern frameworks like Next.js and React for speed and maintainability.",
      },
      {
        title: "Backend & API Development",
        description:
          "We design and build the server-side logic, APIs and integrations your application depends on.",
      },
      {
        title: "Database Design",
        description:
          "We model your data properly from the start, so queries stay fast and the schema doesn't need a rewrite at scale.",
      },
      {
        title: "Authentication & Permissions",
        description:
          "We implement secure login, role-based access and permission systems appropriate to your application's sensitivity.",
      },
      {
        title: "Performance Optimization",
        description:
          "We optimize load times and runtime performance so the application stays fast as features and data volume grow.",
      },
      {
        title: "Cloud Deployment & Hosting",
        description:
          "We deploy to modern cloud infrastructure with monitoring in place, so issues get caught before your users notice them.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "53%",
        description:
          "of users abandon a web page that takes longer than 3 seconds to load — performance directly affects whether people stay.",
      },
      {
        statOrPoint: "1 Platform",
        description:
          "A well-built responsive web app works across desktop and mobile browsers without a separate native build.",
      },
      {
        statOrPoint: "0 Downtime",
        description:
          "is the goal for cloud deployments we manage — we architect for reliability, not just for the demo.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description:
          "We map your user flows, data model and technical requirements so the architecture fits the actual problem.",
      },
      {
        step: 2,
        title: "Architecture & Design",
        description:
          "We design the technical foundation and interface before writing production code, so major decisions are made deliberately.",
      },
      {
        step: 3,
        title: "Development & Testing",
        description:
          "We build in short, testable cycles, with continuous integration to catch regressions early.",
      },
      {
        step: 4,
        title: "Deployment & Support",
        description:
          "We deploy to production with monitoring in place and stay engaged to support the application after launch.",
      },
    ],
    deliverables: [
      "Fully functional, responsive web application",
      "Source code and repository access",
      "Database schema and API documentation",
      "Cloud deployment with monitoring configured",
      "Post-launch support window for critical fixes",
    ],
    idealFor: [
      "Startups building an MVP or first product",
      "Businesses replacing a legacy or underperforming platform",
      "Companies that need an internal tool their team runs on",
      "Products expecting to scale past a simple website",
    ],
    tools: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS"],
    faqs: [
      {
        question: "What's the difference between a website and a web application?",
        answer:
          "A website mainly presents information; a web application lets users interact with data — logging in, managing records, processing transactions. Web apps need real backend architecture, which is what we specialize in.",
      },
      {
        question: "Can you build an MVP quickly?",
        answer:
          "Yes, we scope MVPs specifically to test your core assumption with real users, typically in 6-10 weeks, then plan the next phase based on what you learn.",
      },
      {
        question: "Do you handle hosting and deployment?",
        answer:
          "Yes, we deploy to cloud infrastructure like AWS or Vercel and set up monitoring, so the application stays reliable after launch, not just on day one.",
      },
      {
        question: "Can you take over an existing web application?",
        answer:
          "Yes, we regularly audit and take over existing codebases, giving you an honest assessment before deciding whether to extend or rebuild.",
      },
    ],
    relatedServices: [
      "custom-software-development",
      "mobile-app-development",
      "ui-ux-design",
    ],
    turnaround: "8-14 weeks",
    engagementModel: "Fixed-scope project or ongoing retainer",
  },

  "custom-software-development": {
    slug: "custom-software-development",
    title: "Custom Software Development",
    metaTitle: "Custom Software Development Services | UPTIME MARKETING",
    metaDescription:
      "Bespoke software and internal tools built around your exact workflows, replacing spreadsheets and rigid off-the-shelf systems for good, at any business scale.",
    heroHeadline: "Software Built Around How Your Business Actually Works",
    heroSubheadline:
      "We design and build custom software and internal tools that fit your real workflows, instead of forcing your team to adapt to generic software.",
    intro: [
      "Off-the-shelf software is built for the average business, which means it's rarely a perfect fit for yours. When you're managing a workflow across five spreadsheets, or bending a generic tool into shapes it wasn't designed for, custom software usually pays for itself in time saved.",
      "We start by mapping your actual process — not an idealized version of it — then design and build software that matches how your team really operates, with room to grow as your business changes.",
    ],
    whatsIncluded: [
      {
        title: "Workflow Mapping",
        description:
          "We document your current process in detail before designing anything, so the software fits reality, not assumptions.",
      },
      {
        title: "Custom Application Design",
        description:
          "We design the interface and data model around your specific operational needs, not a generic template.",
      },
      {
        title: "Systems Integration",
        description:
          "We connect the new software to your existing tools — CRM, accounting, inventory — so data doesn't need manual re-entry.",
      },
      {
        title: "Data Migration",
        description:
          "We migrate your existing data from spreadsheets or legacy systems cleanly, without losing history.",
      },
      {
        title: "Role-Based Access Control",
        description:
          "We build permission systems so each team member sees and can edit only what's relevant to their role.",
      },
      {
        title: "Training & Documentation",
        description:
          "We deliver documentation and training so your team can use and eventually help maintain the system confidently.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "5+",
        description:
          "spreadsheets or disconnected tools is a common starting point for clients — custom software consolidates that into one system.",
      },
      {
        statOrPoint: "Hours/Week",
        description:
          "saved on manual data entry and reconciliation is usually the clearest ROI signal from a custom internal tool.",
      },
      {
        statOrPoint: "1 Source of Truth",
        description:
          "replaces scattered files and conflicting spreadsheet versions with a single system everyone works from.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Workflow Discovery",
        description:
          "We shadow or interview your team to understand exactly how work happens today, including the workarounds.",
      },
      {
        step: 2,
        title: "System Design",
        description:
          "We design the data model, interface and integrations around your actual process, not a generic template.",
      },
      {
        step: 3,
        title: "Build & Migrate",
        description:
          "We build the system and migrate your existing data, testing against real scenarios from your business.",
      },
      {
        step: 4,
        title: "Rollout & Support",
        description:
          "We roll the system out with training for your team and stay engaged to refine it as you use it in production.",
      },
    ],
    deliverables: [
      "Custom software application matching your workflow",
      "Migrated historical data from existing systems",
      "Role-based user accounts and permissions",
      "Documentation and team training session",
      "Post-launch support and refinement window",
    ],
    idealFor: [
      "Businesses running critical processes through spreadsheets",
      "Teams stretching generic software beyond what it was built for",
      "Companies with a workflow unique enough that no off-the-shelf tool fits",
      "Operations teams that need one connected system instead of many disconnected tools",
    ],
    tools: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Retool"],
    faqs: [
      {
        question: "How is custom software different from buying an off-the-shelf tool?",
        answer:
          "Off-the-shelf tools are built for the average use case and require you to adapt your process to fit them. Custom software is built around your actual workflow, which usually means less manual workaround and better long-term fit.",
      },
      {
        question: "Is custom software worth it for a smaller business?",
        answer:
          "It depends on how much time your current process costs you. If your team is losing significant hours to manual work or workarounds, custom software often pays for itself within the first year.",
      },
      {
        question: "Can you integrate with the tools we already use?",
        answer:
          "Yes, integrating with your existing CRM, accounting or other systems is a standard part of custom software projects so you're not duplicating data entry.",
      },
      {
        question: "Who maintains the software after it's built?",
        answer:
          "We offer ongoing support and maintenance plans, and we also document the system thoroughly so your team has the option to maintain parts of it internally.",
      },
    ],
    relatedServices: [
      "web-app-development",
      "business-automation",
      "custom-ai-solutions",
    ],
    turnaround: "10-20 weeks",
    engagementModel: "Fixed-scope project",
  },

  "ai-development": {
    slug: "ai-development",
    title: "AI Development",
    metaTitle: "AI Development Services | UPTIME MARKETING",
    metaDescription:
      "Custom AI model development and integration built around your business data, from proof of concept through production deployment and ongoing monitoring.",
    heroHeadline: "Custom AI Built Around Your Business, Not a Generic Model",
    heroSubheadline:
      "We design, build and integrate AI models and systems tailored to your specific data and use case, then ship them into production with monitoring in place.",
    intro: [
      "Off-the-shelf AI tools solve generic problems generically. When you need AI that understands your specific data, terminology, or business logic, that requires custom development — model selection, fine-tuning or prompt engineering, and integration into your existing systems.",
      "We work across the AI development lifecycle: assessing whether a problem is a good fit for AI, choosing the right model or architecture, building the integration, and validating it against real scenarios before it touches production data.",
    ],
    whatsIncluded: [
      {
        title: "Use-Case Assessment",
        description:
          "We evaluate whether your problem is actually a good fit for AI before recommending it, so you don't pay to automate something that doesn't need it.",
      },
      {
        title: "Model Selection & Fine-Tuning",
        description:
          "We choose or fine-tune the right model for your data and accuracy requirements, rather than defaulting to the most hyped option.",
      },
      {
        title: "Custom Integrations",
        description:
          "We connect AI capabilities into your existing tools and workflows, so it fits into how your team already works.",
      },
      {
        title: "Prompt & Retrieval Engineering",
        description:
          "We design prompts and retrieval systems (RAG) that ground AI outputs in your actual data, reducing hallucination risk.",
      },
      {
        title: "Testing & Evaluation",
        description:
          "We test against real scenarios from your business, not synthetic examples, before anything reaches production.",
      },
      {
        title: "Production Deployment & Monitoring",
        description:
          "We deploy with logging and monitoring so you can see how the system performs on live traffic, not just in testing.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "10x",
        description:
          "faster processing is a common outcome when AI takes over a well-defined, repetitive analysis or classification task.",
      },
      {
        statOrPoint: "Your Data",
        description:
          "is what makes AI genuinely useful for your business — generic models get grounded in your specific context, not assumptions.",
      },
      {
        statOrPoint: "24/7",
        description:
          "AI systems don't take breaks, which matters for use cases like triage, monitoring or first-response support.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Use-Case Assessment",
        description:
          "We evaluate your process and data to confirm AI is the right tool before committing budget to it.",
      },
      {
        step: 2,
        title: "Architecture Design",
        description:
          "We design the model, data pipeline and integration architecture around your specific requirements.",
      },
      {
        step: 3,
        title: "Build & Evaluate",
        description:
          "We build the system and test it rigorously against real scenarios from your business.",
      },
      {
        step: 4,
        title: "Deploy & Monitor",
        description:
          "We ship to production with monitoring and logging, then tune performance based on live usage.",
      },
    ],
    deliverables: [
      "Custom AI model or integration in production",
      "Evaluation report against real business scenarios",
      "Monitoring and logging dashboard",
      "Integration documentation",
      "Post-launch tuning and support window",
    ],
    idealFor: [
      "Businesses with a specific, well-defined problem AI could solve",
      "Teams that tried a generic AI tool and found it didn't fit their data",
      "Companies with a repetitive analysis or classification workload",
      "Products that want to add AI-powered features",
    ],
    tools: [
      "OpenAI",
      "Anthropic Claude",
      "LangChain",
      "Python",
      "Vector Databases",
    ],
    faqs: [
      {
        question: "How do I know if my problem is a good fit for AI?",
        answer:
          "Good candidates are usually repetitive, well-defined, and have enough example data to learn from. We assess this honestly upfront rather than recommending AI for its own sake.",
      },
      {
        question: "Do you build with our own data?",
        answer:
          "Yes, grounding the system in your actual data is central to making it useful — we design the integration around your data sources rather than generic training data alone.",
      },
      {
        question: "What if the AI gets something wrong?",
        answer:
          "We build in guardrails, fallback logic and, where appropriate, human-in-the-loop checkpoints for high-stakes decisions, and monitor live performance to catch issues early.",
      },
      {
        question: "How long does an AI development project take?",
        answer:
          "Most projects take 8-14 weeks from use-case assessment to production deployment, depending on data readiness and integration complexity.",
      },
    ],
    relatedServices: ["ai-agents", "custom-ai-solutions", "business-automation"],
    turnaround: "8-14 weeks",
    engagementModel: "Fixed-scope project or ongoing retainer",
  },

  "ai-agents": {
    slug: "ai-agents",
    title: "AI Agents",
    metaTitle: "AI Agent Development Services | UPTIME MARKETING",
    metaDescription:
      "Autonomous AI agents that complete multi-step tasks across your tools — support, operations and internal workflows handled end-to-end, reliably, at scale.",
    heroHeadline: "AI Agents That Complete Real Work, Not Just Answer Questions",
    heroSubheadline:
      "We build autonomous AI agents that handle multi-step tasks across your existing tools — from customer support resolution to internal operations.",
    intro: [
      "An AI agent is different from a chatbot — instead of just answering a question, it takes actions: looking up information, updating records, completing a process across multiple systems. That capability is what turns AI from a nice demo into actual operational leverage.",
      "We design agents around a specific, well-scoped job — resolving a category of support tickets, qualifying inbound leads, running a recurring internal process — and wire them into the tools your team already uses, with guardrails for when a human needs to step in.",
    ],
    whatsIncluded: [
      {
        title: "Agent Scoping",
        description:
          "We define exactly what the agent is responsible for and where it should hand off to a human, so expectations are clear from day one.",
      },
      {
        title: "Tool & API Integration",
        description:
          "We connect the agent to the systems it needs to act on — your CRM, helpdesk, internal APIs, or databases.",
      },
      {
        title: "Multi-Step Task Design",
        description:
          "We design the agent's reasoning and action sequence so it can complete real, multi-step processes reliably.",
      },
      {
        title: "Guardrails & Escalation Logic",
        description:
          "We build in rules for when the agent should defer to a human, especially for high-stakes or ambiguous decisions.",
      },
      {
        title: "Testing Against Real Scenarios",
        description:
          "We test the agent against real historical cases from your business before it goes live.",
      },
      {
        title: "Monitoring & Continuous Tuning",
        description:
          "We monitor live performance and refine the agent's behavior based on what actually happens in production.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "Multi-Step",
        description:
          "tasks that used to require a human across several systems can be handled end-to-end by a well-scoped agent.",
      },
      {
        statOrPoint: "Faster Response",
        description:
          "is typical for support and triage use cases, since agents can act the moment a request comes in, day or night.",
      },
      {
        statOrPoint: "Human-in-the-Loop",
        description:
          "escalation is built in for decisions that need judgment, so agents extend your team rather than replace judgment calls.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Scope the Job",
        description:
          "We define the specific task or process the agent will own, and where human handoff should happen.",
      },
      {
        step: 2,
        title: "Design & Connect",
        description:
          "We design the agent's reasoning flow and connect it to the tools and data it needs to act on.",
      },
      {
        step: 3,
        title: "Test Against Real Cases",
        description:
          "We run the agent against historical, real scenarios from your business before any live traffic reaches it.",
      },
      {
        step: 4,
        title: "Deploy & Refine",
        description:
          "We launch with monitoring in place and continue tuning behavior based on real usage.",
      },
    ],
    deliverables: [
      "Deployed AI agent integrated with your tools",
      "Defined escalation rules for human handoff",
      "Evaluation report against historical scenarios",
      "Monitoring dashboard for live agent activity",
      "Post-launch tuning and support window",
    ],
    idealFor: [
      "Support teams handling a high volume of repetitive tickets",
      "Sales teams that need faster, consistent lead qualification",
      "Operations teams running the same multi-step process repeatedly",
      "Businesses wanting AI that takes action, not just answers questions",
    ],
    tools: ["OpenAI", "Anthropic Claude", "LangChain", "Python", "n8n"],
    faqs: [
      {
        question: "What's the difference between an AI agent and a chatbot?",
        answer:
          "A chatbot answers questions; an agent takes action — looking things up, updating records, completing a process across systems. Agents are built for a specific job, not open-ended conversation.",
      },
      {
        question: "Will the agent make mistakes?",
        answer:
          "Any system can make mistakes, which is why we build in guardrails and escalation rules so ambiguous or high-stakes cases get routed to a human instead of handled automatically.",
      },
      {
        question: "What kinds of tasks can an agent realistically handle?",
        answer:
          "Well-defined, repeatable processes are the best fit — support ticket resolution, lead qualification, data lookups and updates across systems. We'll tell you honestly if a process is too ambiguous for an agent yet.",
      },
      {
        question: "How do you measure if an agent is working well?",
        answer:
          "We track resolution rate, escalation rate and accuracy against real cases, and review this with you regularly so you can see exactly what the agent is handling.",
      },
    ],
    relatedServices: [
      "ai-development",
      "business-automation",
      "custom-ai-solutions",
    ],
    turnaround: "6-12 weeks",
    engagementModel: "Fixed-scope project with ongoing tuning retainer",
  },

  "business-automation": {
    slug: "business-automation",
    title: "Business Automation",
    metaTitle: "Business Automation Services | UPTIME MARKETING",
    metaDescription:
      "Automated workflows that remove manual, repetitive operational work by connecting your existing tools and systems together end-to-end, reliably, for good.",
    heroHeadline: "Remove the Manual Work Slowing Your Team Down",
    heroSubheadline:
      "We design and build automated workflows that connect your existing tools, removing repetitive manual work without requiring a full software rebuild.",
    intro: [
      "Most operational drag isn't caused by missing software — it's caused by manually moving information between tools that already exist. A lead comes in, someone copies it into a spreadsheet, someone else emails it to another team. Automation removes those manual handoffs.",
      "We map your current process, identify where manual work is happening, and build automated workflows that connect your existing tools — often without needing new software at all, just the right integrations and logic between what you already have.",
    ],
    whatsIncluded: [
      {
        title: "Process Mapping",
        description:
          "We document your current manual workflow in detail to find exactly where automation will save the most time.",
      },
      {
        title: "Tool Integration",
        description:
          "We connect your existing tools — CRM, email, spreadsheets, project management — so data flows automatically between them.",
      },
      {
        title: "Trigger-Based Workflows",
        description:
          "We build workflows that fire automatically based on events, like a new lead, a status change, or a scheduled time.",
      },
      {
        title: "Data Validation & Error Handling",
        description:
          "We build in checks so automated workflows fail safely and visibly instead of silently producing bad data.",
      },
      {
        title: "Notification & Reporting Automation",
        description:
          "We automate status updates and reports so your team gets the right information without manual compilation.",
      },
      {
        title: "Documentation & Handover",
        description:
          "We document every workflow clearly, so your team understands and can adjust the automation over time.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "Hours/Week",
        description:
          "are typically recovered per team once repetitive manual handoffs between tools are automated away.",
      },
      {
        statOrPoint: "Fewer Errors",
        description:
          "happen when data moves automatically between systems instead of being manually re-typed at each step.",
      },
      {
        statOrPoint: "No Rebuild Needed",
        description:
          "— most automation connects tools you already use, rather than requiring you to replace your existing software.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Process Mapping",
        description:
          "We document exactly where manual work happens in your current process and quantify the time cost.",
      },
      {
        step: 2,
        title: "Workflow Design",
        description:
          "We design the automated workflow and the tools/integrations it will run through.",
      },
      {
        step: 3,
        title: "Build & Test",
        description:
          "We build the automation and test it against real scenarios, including edge cases and failure handling.",
      },
      {
        step: 4,
        title: "Deploy & Document",
        description:
          "We launch the workflow and document it clearly so your team understands how it works.",
      },
    ],
    deliverables: [
      "Automated workflow connecting your existing tools",
      "Error handling and failure notifications",
      "Documentation of the automation logic",
      "Time-savings estimate based on your process",
      "Post-launch adjustment window",
    ],
    idealFor: [
      "Teams manually re-entering data between multiple tools",
      "Businesses with repetitive approval or notification processes",
      "Operations teams without budget for a full software rebuild",
      "Companies scaling a process that used to be handled by one person",
    ],
    tools: ["n8n", "Zapier", "Python", "AWS", "APIs"],
    faqs: [
      {
        question: "Do we need new software to automate our process?",
        answer:
          "Usually not — most automation connects the tools you already use through integrations and workflow logic, rather than replacing your existing systems.",
      },
      {
        question: "What happens if an automated workflow fails?",
        answer:
          "We build in error handling and notifications so failures are visible and safe, rather than silently producing bad data somewhere downstream.",
      },
      {
        question: "How do you decide what to automate first?",
        answer:
          "We map your process and prioritize automations with the clearest time savings and lowest risk, so you see value quickly before tackling more complex workflows.",
      },
      {
        question: "Can automation replace a role entirely?",
        answer:
          "It depends on the process — automation is best at removing repetitive manual steps, freeing people to focus on judgment-based work rather than eliminating roles outright.",
      },
    ],
    relatedServices: [
      "ai-agents",
      "custom-software-development",
      "ai-development",
    ],
    turnaround: "4-10 weeks",
    engagementModel: "Fixed-scope project or ongoing retainer",
  },

  "custom-ai-solutions": {
    slug: "custom-ai-solutions",
    title: "Custom AI Solutions",
    metaTitle: "Custom AI Solutions | UPTIME MARKETING",
    metaDescription:
      "Purpose-built AI products designed around a specific business problem, from concept and data strategy through to full production deployment and support.",
    heroHeadline: "AI Products Built Around One Specific Business Problem",
    heroSubheadline:
      "When off-the-shelf AI tools and general integrations don't fit, we design and build a purpose-built AI solution around your exact problem.",
    intro: [
      "Some problems don't fit a standard AI integration or a pre-built agent — they need a solution designed from the ground up around a specific business constraint, data shape, or workflow. That's a different kind of engagement than plugging in an existing AI tool.",
      "We start with the business problem, not the technology, and work backward to the right architecture — whether that's a custom model, a novel data pipeline, or an AI-powered product feature — then build and validate it against your real use case.",
    ],
    whatsIncluded: [
      {
        title: "Problem Definition & Feasibility",
        description:
          "We clarify the exact problem and assess technical feasibility before committing to an approach.",
      },
      {
        title: "Custom Architecture Design",
        description:
          "We design a solution architecture specific to your data, constraints and scale, not a generic template.",
      },
      {
        title: "Data Strategy",
        description:
          "We define what data the solution needs, where it comes from, and how it will be kept current.",
      },
      {
        title: "Custom Model or Pipeline Development",
        description:
          "We build the model, pipeline or system logic required, choosing the right level of complexity for the problem.",
      },
      {
        title: "Validation Against Business Outcomes",
        description:
          "We test the solution against the actual business metric it's meant to move, not just technical accuracy.",
      },
      {
        title: "Production Deployment & Support",
        description:
          "We deploy the solution into your environment and support it as real usage reveals edge cases.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "1 Problem",
        description:
          "at a time — custom AI solutions are scoped around a single, well-understood business problem rather than a generic capability.",
      },
      {
        statOrPoint: "Built to Fit",
        description:
          "your specific data and constraints, rather than adapting your business to fit a pre-built tool.",
      },
      {
        statOrPoint: "Outcome-Validated",
        description:
          "means we measure success against your actual business metric, not just model accuracy in isolation.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Problem Definition",
        description:
          "We clarify the exact business problem and assess whether a custom AI solution is genuinely the right approach.",
      },
      {
        step: 2,
        title: "Solution Design",
        description:
          "We design the architecture, data strategy and success metrics specific to your problem.",
      },
      {
        step: 3,
        title: "Build & Validate",
        description:
          "We build the solution and validate it against real business outcomes, not just technical benchmarks.",
      },
      {
        step: 4,
        title: "Deploy & Support",
        description:
          "We deploy into your environment and support the solution as real-world usage surfaces new edge cases.",
      },
    ],
    deliverables: [
      "Custom AI solution deployed to production",
      "Documented architecture and data strategy",
      "Validation report against business outcomes",
      "Monitoring and performance dashboard",
      "Post-launch support and iteration window",
    ],
    idealFor: [
      "Businesses with a problem that doesn't fit an off-the-shelf AI tool",
      "Companies with unique or proprietary data to build around",
      "Products that need AI as a core differentiating feature",
      "Teams that evaluated generic tools and found them insufficient",
    ],
    tools: ["OpenAI", "Anthropic Claude", "Python", "LangChain", "AWS"],
    faqs: [
      {
        question: "How is this different from your AI Development service?",
        answer:
          "AI Development typically integrates or fine-tunes existing models into your workflow. Custom AI Solutions are for problems specific enough that they need a purpose-built architecture designed from the ground up.",
      },
      {
        question: "How do you know a custom solution is really necessary?",
        answer:
          "We assess feasibility and fit honestly before recommending a custom build — if a simpler integration would solve your problem, we'll tell you that instead.",
      },
      {
        question: "What if our data isn't ready for an AI solution?",
        answer:
          "Data strategy is part of the engagement — we assess what you have, what's missing, and build a realistic plan to get the data into a usable state.",
      },
      {
        question: "How do you measure success on a custom AI project?",
        answer:
          "We define the business metric upfront — cost saved, time reduced, accuracy improved — and validate the solution against that, not just technical benchmarks.",
      },
    ],
    relatedServices: [
      "ai-development",
      "ai-agents",
      "custom-software-development",
    ],
    turnaround: "10-18 weeks",
    engagementModel: "Fixed-scope project",
  },

  seo: {
    slug: "seo",
    title: "SEO",
    metaTitle: "SEO Services | UPTIME MARKETING",
    metaDescription:
      "Technical, on-page and off-page SEO built to grow organic traffic and search rankings over time, backed by transparent, plain-language monthly reporting.",
    heroHeadline: "SEO Built to Compound, Not Just Rank",
    heroSubheadline:
      "We combine technical fixes, on-page optimization and off-page authority building into one SEO strategy focused on sustainable organic growth.",
    intro: [
      "SEO isn't one tactic — it's technical health, content relevance, and external authority all working together. Fixing one without the others caps how far your rankings can actually go, which is why we treat SEO as a full-stack discipline rather than a checklist.",
      "Every engagement starts with a full audit of where you stand today, then moves into a prioritized roadmap of technical fixes, on-page optimization and content work, tracked against rankings and traffic with monthly reporting you can actually understand.",
    ],
    whatsIncluded: [
      {
        title: "Technical SEO Audit",
        description:
          "We identify crawlability, speed, and structural issues that are silently capping your rankings.",
      },
      {
        title: "On-Page Optimization",
        description:
          "We optimize titles, headings, content structure and internal linking across your key pages.",
      },
      {
        title: "Keyword Strategy",
        description:
          "We research and prioritize keywords based on real search intent and competitive opportunity, not just volume.",
      },
      {
        title: "Content Recommendations",
        description:
          "We identify content gaps and opportunities that competitors are ranking for and you aren't yet.",
      },
      {
        title: "Off-Page Authority Building",
        description:
          "We build legitimate backlink and authority signals that support long-term ranking strength.",
      },
      {
        title: "Monthly Reporting",
        description:
          "We report on rankings, traffic and conversions in plain language, with a clear view of what's working.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "Top 3",
        description:
          "search results capture the large majority of organic clicks — ranking position directly determines how much traffic you actually get.",
      },
      {
        statOrPoint: "Compounding",
        description:
          "SEO gains build on each other over time, unlike paid traffic that stops the moment you stop paying.",
      },
      {
        statOrPoint: "3-4 Months",
        description:
          "is the typical timeline before clients see measurable ranking and traffic movement from ongoing SEO work.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Audit",
        description:
          "We run a full technical, on-page and competitive audit to find exactly what's holding your rankings back.",
      },
      {
        step: 2,
        title: "Strategy",
        description:
          "We build a prioritized roadmap targeting the fixes and opportunities with the highest impact on visibility.",
      },
      {
        step: 3,
        title: "Implementation",
        description:
          "We execute technical fixes, on-page optimization and content work directly or alongside your team.",
      },
      {
        step: 4,
        title: "Reporting",
        description:
          "We track rankings, traffic and conversions monthly and adjust strategy based on what's actually moving.",
      },
    ],
    deliverables: [
      "Full technical and competitive SEO audit",
      "Prioritized optimization roadmap",
      "On-page optimization across key pages",
      "Monthly ranking and traffic reports",
      "Ongoing strategy adjustments based on performance",
    ],
    idealFor: [
      "Businesses relying on organic search for lead generation",
      "Sites with declining or stagnant organic traffic",
      "Companies entering a competitive search market",
      "Businesses wanting a long-term, compounding growth channel",
    ],
    tools: ["Google Search Console", "GA4", "Ahrefs", "Screaming Frog"],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Most clients see measurable movement in rankings and traffic within 3-4 months, with gains compounding after that. SEO is a long-term channel, and we're upfront about that timeline.",
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer:
          "No legitimate SEO provider can guarantee specific rankings, since search algorithms are outside anyone's direct control. We focus on the technical and content fundamentals that reliably drive ranking improvement over time.",
      },
      {
        question: "What's included in monthly SEO reporting?",
        answer:
          "You get rankings, organic traffic, indexing status and conversion data, with a plain-language summary of what changed and what we're prioritizing next.",
      },
      {
        question: "Do you write content as part of SEO?",
        answer:
          "We identify content gaps and provide recommendations and briefs; content production can be included depending on scope, which we'll clarify during onboarding.",
      },
    ],
    relatedServices: ["gbp-optimization", "aeo", "website-indexing"],
    turnaround: "Ongoing",
    engagementModel: "Monthly retainer",
  },

  "gbp-optimization": {
    slug: "gbp-optimization",
    title: "GBP Optimization",
    metaTitle: "Google Business Profile Optimization Services | UPTIME MARKETING",
    metaDescription:
      "Google Business Profile management and optimization that improves local search visibility, map pack rankings and customer engagement over time, reliably.",
    heroHeadline: "Win the Local Search Results That Actually Drive Foot Traffic",
    heroSubheadline:
      "We manage and optimize your Google Business Profile so your business shows up — and looks credible — when nearby customers search.",
    intro: [
      "For any business with a physical location or local service area, Google Business Profile is often the first thing a potential customer sees — before your website, before your reviews page. An incomplete or poorly managed profile costs you visibility in the map pack and trust once someone finds you.",
      "We manage your GBP listing end-to-end: accurate business information, category optimization, regular posts, review management, and the local ranking signals that determine whether you show up in the map pack for searches near you.",
    ],
    whatsIncluded: [
      {
        title: "Profile Setup & Optimization",
        description:
          "We ensure your business information, categories, service areas and attributes are complete and accurately optimized.",
      },
      {
        title: "Local Keyword Optimization",
        description:
          "We optimize your profile and posts around the local search terms your actual customers use.",
      },
      {
        title: "Review Management",
        description:
          "We help you generate more reviews and respond to existing ones professionally, since reviews are a major local ranking factor.",
      },
      {
        title: "Photo & Post Management",
        description:
          "We keep your profile visually current with regular photos and posts, which Google rewards with better visibility.",
      },
      {
        title: "Citation Consistency",
        description:
          "We check that your business name, address and phone number are consistent across major directories, which affects local trust signals.",
      },
      {
        title: "Local Ranking Reporting",
        description:
          "We track your map pack visibility and local ranking position, reporting on what's moving and why.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "Map Pack",
        description:
          "placement is often the first thing local searchers see — missing it means losing visibility to competitors who are optimized.",
      },
      {
        statOrPoint: "Reviews Matter",
        description:
          "Review volume and recency are a significant local ranking factor, not just a trust signal for customers.",
      },
      {
        statOrPoint: "Free Traffic",
        description:
          "A well-optimized GBP listing drives calls, direction requests and website visits without any ad spend.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Audit",
        description:
          "We audit your current profile completeness, categories, reviews and local ranking position.",
      },
      {
        step: 2,
        title: "Optimization",
        description:
          "We optimize your business information, categories, service areas and photos for local relevance.",
      },
      {
        step: 3,
        title: "Ongoing Management",
        description:
          "We post regularly, manage reviews, and maintain citation consistency across directories.",
      },
      {
        step: 4,
        title: "Reporting",
        description:
          "We track map pack visibility and local ranking movement, adjusting strategy based on results.",
      },
    ],
    deliverables: [
      "Fully optimized Google Business Profile",
      "Review generation and response strategy",
      "Regular post and photo schedule",
      "Citation consistency check across directories",
      "Monthly local ranking report",
    ],
    idealFor: [
      "Businesses with a physical location or local service area",
      "Multi-location businesses managing several listings",
      "Businesses with an incomplete or unclaimed GBP listing",
      "Local businesses competing for map pack visibility",
    ],
    tools: ["Google Business Profile", "Google Search Console", "GA4"],
    faqs: [
      {
        question: "What is Google Business Profile optimization?",
        answer:
          "It's the ongoing management of your Google Business Profile — accurate business information, categories, photos, posts and reviews — to improve how you rank in local search and the map pack.",
      },
      {
        question: "How much does GBP optimization affect local rankings?",
        answer:
          "Significantly — proximity, relevance and profile completeness are core local ranking factors, and an optimized profile with active reviews consistently outperforms a neglected one.",
      },
      {
        question: "Do you manage multiple locations?",
        answer:
          "Yes, we manage GBP optimization for multi-location businesses, keeping each listing accurate and consistent while accounting for location-specific local search terms.",
      },
      {
        question: "Can you help with negative reviews?",
        answer:
          "We help you respond professionally to all reviews, including negative ones, and build a proactive review generation strategy so recent positive reviews outweigh occasional negative ones.",
      },
    ],
    relatedServices: ["seo", "website-indexing", "google-search-console"],
    turnaround: "Ongoing",
    engagementModel: "Monthly retainer",
  },

  "google-search-console": {
    slug: "google-search-console",
    title: "Google Search Console",
    metaTitle: "Google Search Console Management Services | UPTIME MARKETING",
    metaDescription:
      "Ongoing Google Search Console monitoring, diagnostics and performance reporting to catch indexing and search issues before they quietly cost you traffic.",
    heroHeadline: "Catch Search Problems Before They Cost You Traffic",
    heroSubheadline:
      "We monitor and manage Google Search Console so indexing errors, crawl issues and ranking drops get caught and fixed quickly, not months later.",
    intro: [
      "Google Search Console holds some of the most useful — and most ignored — data about how your site actually performs in search. Indexing errors, mobile usability issues and sudden ranking drops all show up here first, often long before you'd notice the traffic impact.",
      "We monitor Search Console on an ongoing basis: reviewing indexing status, fixing coverage errors, tracking query and page performance, and flagging issues early so small technical problems don't quietly turn into traffic losses.",
    ],
    whatsIncluded: [
      {
        title: "Indexing Monitoring",
        description:
          "We track which pages are indexed, excluded, or flagged with errors, and investigate discrepancies.",
      },
      {
        title: "Coverage Error Resolution",
        description:
          "We diagnose and fix crawl errors, redirect issues and coverage problems flagged in Search Console.",
      },
      {
        title: "Performance Tracking",
        description:
          "We monitor query and page-level performance data to spot ranking changes early.",
      },
      {
        title: "Mobile Usability Checks",
        description:
          "We review and resolve mobile usability issues that affect both rankings and user experience.",
      },
      {
        title: "Core Web Vitals Monitoring",
        description:
          "We track Core Web Vitals data and flag pages that need performance attention.",
      },
      {
        title: "Sitemap & Robots Management",
        description:
          "We maintain your XML sitemap and robots.txt so Google can crawl your site efficiently.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "Early Warning",
        description:
          "Search Console often shows indexing or ranking problems weeks before they'd otherwise show up as a traffic drop.",
      },
      {
        statOrPoint: "Free Data",
        description:
          "It's one of the most detailed sources of real search performance data available, at no cost — most sites don't use it fully.",
      },
      {
        statOrPoint: "Fixable",
        description:
          "Most coverage and indexing errors are straightforward to resolve once identified — the risk is not monitoring them at all.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Baseline Audit",
        description:
          "We review your current Search Console data to establish a baseline and flag any existing issues.",
      },
      {
        step: 2,
        title: "Issue Resolution",
        description:
          "We fix coverage errors, indexing issues and mobile usability problems identified in the audit.",
      },
      {
        step: 3,
        title: "Ongoing Monitoring",
        description:
          "We monitor Search Console on a regular schedule to catch new issues as they appear.",
      },
      {
        step: 4,
        title: "Reporting",
        description:
          "We report on indexing health, performance trends and any issues resolved during the period.",
      },
    ],
    deliverables: [
      "Search Console account audit and setup",
      "Resolved coverage and indexing errors",
      "Sitemap and robots.txt configuration",
      "Core Web Vitals monitoring report",
      "Monthly performance and health report",
    ],
    idealFor: [
      "Sites that have never had Search Console actively monitored",
      "Businesses that experienced an unexplained traffic drop",
      "Sites recently migrated, redesigned or replatformed",
      "Companies wanting proactive technical SEO health checks",
    ],
    tools: ["Google Search Console", "GA4", "Screaming Frog"],
    faqs: [
      {
        question: "What does Search Console management actually involve?",
        answer:
          "Ongoing monitoring of indexing status, coverage errors, mobile usability and performance data, with issues fixed as they appear rather than discovered months later.",
      },
      {
        question: "We already have Search Console set up — do we still need this?",
        answer:
          "Having it set up and actively monitoring it are different things. Most sites have Search Console connected but no one reviewing it regularly, which is where issues go unnoticed.",
      },
      {
        question: "Can Search Console issues really affect my rankings?",
        answer:
          "Yes — indexing errors, mobile usability problems and poor Core Web Vitals are all factors that can suppress rankings even when your content is strong.",
      },
      {
        question: "How is this different from your SEO service?",
        answer:
          "This is a more technical, monitoring-focused service that can stand alone or work alongside our broader SEO service, which also covers strategy, content and off-page work.",
      },
    ],
    relatedServices: ["website-indexing", "seo", "gbp-optimization"],
    turnaround: "Ongoing",
    engagementModel: "Monthly retainer",
  },

  "website-indexing": {
    slug: "website-indexing",
    title: "Website Indexing",
    metaTitle: "Website Indexing Services | UPTIME MARKETING",
    metaDescription:
      "Technical indexing services that improve crawl budget efficiency and ensure your most important pages are discovered and indexed by Google, fast and reliably.",
    heroHeadline: "Make Sure Google Can Actually Find Your Pages",
    heroSubheadline:
      "We fix the crawl budget, sitemap and technical issues that keep important pages out of Google's index — because a page that isn't indexed can't rank.",
    intro: [
      "Great content on a page that Google hasn't indexed generates zero organic traffic — it's invisible. Indexing problems are purely technical: crawl budget waste, broken sitemaps, conflicting robots directives, or orphaned pages with no internal links pointing to them.",
      "We audit exactly how Googlebot is crawling your site, identify what's being wasted on low-value pages or blocked incorrectly, and fix the sitemap, internal linking and technical directives so your priority pages get crawled and indexed reliably.",
    ],
    whatsIncluded: [
      {
        title: "Crawl Budget Audit",
        description:
          "We analyze how Googlebot is spending its crawl budget on your site and identify waste on low-value pages.",
      },
      {
        title: "Indexation Audit",
        description:
          "We identify which important pages are not indexed and diagnose exactly why.",
      },
      {
        title: "XML Sitemap Optimization",
        description:
          "We build and maintain a clean, accurate sitemap that reflects only the pages you want indexed.",
      },
      {
        title: "Robots.txt & Meta Directives",
        description:
          "We audit and correct robots.txt rules and noindex tags that may be blocking pages unintentionally.",
      },
      {
        title: "Internal Linking Fixes",
        description:
          "We fix orphaned pages by ensuring every important page has internal links pointing to it.",
      },
      {
        title: "Duplicate Content Resolution",
        description:
          "We resolve duplicate and near-duplicate content issues that dilute crawl efficiency and indexing signals.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "0 Traffic",
        description:
          "is what an unindexed page generates from organic search, regardless of how good the content is.",
      },
      {
        statOrPoint: "Crawl Budget",
        description:
          "is finite even for large sites — wasting it on low-value pages means fewer visits to the pages that matter.",
      },
      {
        statOrPoint: "Fixable Fast",
        description:
          "Most indexation issues are technical and can be resolved quickly once correctly diagnosed.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Crawl Audit",
        description:
          "We analyze crawl behavior and indexation status across your entire site.",
      },
      {
        step: 2,
        title: "Diagnosis",
        description:
          "We identify the specific technical causes behind excluded or unindexed pages.",
      },
      {
        step: 3,
        title: "Implementation",
        description:
          "We fix sitemaps, robots directives, internal linking and duplicate content issues.",
      },
      {
        step: 4,
        title: "Verification & Reporting",
        description:
          "We confirm pages move into the index and report on indexation coverage over time.",
      },
    ],
    deliverables: [
      "Full crawl budget and indexation audit",
      "Optimized XML sitemap",
      "Corrected robots.txt and meta directives",
      "Internal linking fixes for orphaned pages",
      "Indexation coverage report",
    ],
    idealFor: [
      "Large sites with thousands of pages and limited crawl budget",
      "Sites where important pages aren't showing up in search",
      "Recently migrated or replatformed websites",
      "E-commerce sites with large, dynamic page counts",
    ],
    tools: ["Google Search Console", "Screaming Frog", "GA4"],
    faqs: [
      {
        question: "Why would Google not index my page?",
        answer:
          "Common causes include accidental noindex tags, blocked robots.txt rules, thin or duplicate content, or the page simply having no internal links pointing to it. We diagnose the exact cause rather than guessing.",
      },
      {
        question: "What is crawl budget and why does it matter?",
        answer:
          "Crawl budget is roughly how many pages Googlebot will crawl on your site in a given period. On larger sites, wasting it on low-value pages means your important pages get crawled and indexed less often.",
      },
      {
        question: "How long does it take for indexing fixes to show results?",
        answer:
          "Once fixes are implemented, Google typically re-crawls and updates indexation status within days to a few weeks, depending on your site's crawl frequency.",
      },
      {
        question: "Is this different from technical SEO?",
        answer:
          "Indexing is a specific, foundational part of technical SEO — this service focuses narrowly on crawlability and indexation, which can also be included as part of our broader SEO engagement.",
      },
    ],
    relatedServices: ["google-search-console", "seo", "geo"],
    turnaround: "2-6 weeks",
    engagementModel: "Fixed-scope project or ongoing retainer",
  },

  aeo: {
    slug: "aeo",
    title: "AEO",
    metaTitle: "Answer Engine Optimization (AEO) Services | UPTIME MARKETING",
    metaDescription:
      "Answer Engine Optimization that structures your content to win featured snippets, voice search results and other direct-answer placements, consistently.",
    heroHeadline: "Get Your Content Chosen as the Answer",
    heroSubheadline:
      "We structure your content so search engines can pull it directly into featured snippets, voice answers and other direct-answer placements.",
    intro: [
      "Answer engines — featured snippets, voice assistants, People Also Ask boxes — pull a direct answer from a page rather than sending a click to it. Winning that placement requires structuring content specifically for extraction: clear questions, direct answers, and formatting search engines can parse cleanly.",
      "We audit your existing content against real question-based queries in your space, then restructure and format it — headings, concise answer blocks, structured data — so it's positioned to be the source an answer engine pulls from.",
    ],
    whatsIncluded: [
      {
        title: "Question-Intent Research",
        description:
          "We identify the specific questions your audience is asking that have featured snippet or direct-answer potential.",
      },
      {
        title: "Content Restructuring",
        description:
          "We reformat existing content with clear question headings and concise, extractable answers.",
      },
      {
        title: "Schema Markup Implementation",
        description:
          "We add structured data (FAQ, HowTo, Q&A schema) that helps search engines understand and extract your content.",
      },
      {
        title: "Featured Snippet Targeting",
        description:
          "We optimize specific pages to compete for snippet placements on high-value question queries.",
      },
      {
        title: "Voice Search Optimization",
        description:
          "We format content in natural, conversational language patterns that match how people phrase voice queries.",
      },
      {
        title: "Performance Tracking",
        description:
          "We track snippet wins, position changes and visibility for targeted question queries.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "Position Zero",
        description:
          "Featured snippets appear above the standard first result, capturing attention and clicks even from the top-ranked page.",
      },
      {
        statOrPoint: "Voice Search",
        description:
          "Voice assistants typically read out a single answer, usually pulled from a featured snippet or well-structured page.",
      },
      {
        statOrPoint: "Structured Wins",
        description:
          "Content formatted with clear questions and direct answers wins these placements far more consistently than unstructured prose.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Question Research",
        description:
          "We identify high-value question queries in your space with snippet or direct-answer potential.",
      },
      {
        step: 2,
        title: "Content Audit",
        description:
          "We assess your existing content's structure against what answer engines need to extract it.",
      },
      {
        step: 3,
        title: "Restructuring & Schema",
        description:
          "We reformat content and implement structured data to improve extractability.",
      },
      {
        step: 4,
        title: "Tracking & Iteration",
        description:
          "We track snippet and answer placements, refining content based on what wins and what doesn't.",
      },
    ],
    deliverables: [
      "Question-intent research report",
      "Restructured content optimized for extraction",
      "FAQ/HowTo schema markup implementation",
      "Featured snippet targeting plan",
      "Monthly visibility and snippet-win tracking",
    ],
    idealFor: [
      "Businesses with informational content competing for snippets",
      "Sites targeting question-based, top-of-funnel search queries",
      "Companies wanting visibility beyond standard blue-link rankings",
      "Content-heavy sites not yet using structured data",
    ],
    tools: ["Google Search Console", "Schema Markup", "Ahrefs"],
    faqs: [
      {
        question: "What is Answer Engine Optimization?",
        answer:
          "It's the practice of structuring content so search engines can extract a direct answer from it — for featured snippets, voice search results, and People Also Ask boxes — rather than just ranking as a standard blue link.",
      },
      {
        question: "How is AEO different from regular SEO?",
        answer:
          "Regular SEO focuses on ranking a page; AEO focuses on structuring content so it can be extracted as a direct answer. It's a layer on top of solid SEO fundamentals, not a replacement for them.",
      },
      {
        question: "Do featured snippets actually drive traffic?",
        answer:
          "Yes, snippet placements typically get more clicks than standard results below them, even though the snippet itself shows a short answer — many users click through for more detail.",
      },
      {
        question: "Does schema markup guarantee a featured snippet?",
        answer:
          "No markup can guarantee a specific placement, since search engines choose snippets algorithmically, but well-structured content with correct schema significantly improves your odds of winning one.",
      },
    ],
    relatedServices: ["geo", "seo", "website-indexing"],
    turnaround: "Ongoing",
    engagementModel: "Monthly retainer",
  },

  geo: {
    slug: "geo",
    title: "GEO",
    metaTitle: "Generative Engine Optimization (GEO) Services | UPTIME MARKETING",
    metaDescription:
      "Generative Engine Optimization to improve how your brand is cited and represented inside AI tools like ChatGPT, Gemini and Google AI Overviews, reliably.",
    heroHeadline: "Show Up Inside AI-Generated Answers, Not Just Search Results",
    heroSubheadline:
      "We optimize your content and brand presence so tools like ChatGPT, Gemini and Google AI Overviews cite and recommend your business.",
    intro: [
      "A growing share of research and buying decisions now start inside an AI chat interface instead of a traditional search box. These generative engines synthesize an answer from multiple sources, which means visibility now depends on whether your content is clear, credible and citable enough to be one of those sources.",
      "We optimize for this differently than traditional SEO — focusing on content clarity, factual structure, brand mentions across the web, and the kind of authoritative signals large language models actually draw on when generating an answer.",
    ],
    whatsIncluded: [
      {
        title: "AI Visibility Audit",
        description:
          "We test how your brand currently appears (or doesn't) across major AI tools for relevant queries in your space.",
      },
      {
        title: "Content Clarity Optimization",
        description:
          "We restructure content to be unambiguous and easily summarized, which improves how accurately AI tools represent it.",
      },
      {
        title: "Entity & Brand Consistency",
        description:
          "We strengthen consistent brand and entity information across the web, which generative engines use to build confidence in a source.",
      },
      {
        title: "Citation-Worthy Content Creation",
        description:
          "We identify content gaps where creating clear, authoritative content increases your odds of being cited.",
      },
      {
        title: "Structured Data Implementation",
        description:
          "We implement schema markup that helps AI systems parse facts about your business accurately.",
      },
      {
        title: "Ongoing AI Visibility Tracking",
        description:
          "We track your brand's presence and citation frequency across major AI tools over time.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "New Discovery Path",
        description:
          "AI chat tools are becoming a genuine research and shopping starting point, separate from traditional search behavior.",
      },
      {
        statOrPoint: "Zero Clicks",
        description:
          "Some AI answers fully satisfy the user's question, meaning visibility now matters even without a click ever happening.",
      },
      {
        statOrPoint: "Early Mover",
        description:
          "advantage exists right now — most competitors haven't optimized for generative engines yet, which is a genuine opportunity.",
      },
    ],
    process: [
      {
        step: 1,
        title: "AI Visibility Audit",
        description:
          "We test how and whether your brand currently appears across major generative AI tools.",
      },
      {
        step: 2,
        title: "Content & Entity Optimization",
        description:
          "We improve content clarity and brand consistency signals that AI systems rely on.",
      },
      {
        step: 3,
        title: "Citation-Worthy Content",
        description:
          "We create or refine content specifically positioned to be cited as a source.",
      },
      {
        step: 4,
        title: "Tracking & Iteration",
        description:
          "We monitor AI visibility over time and adjust the approach as these platforms evolve.",
      },
    ],
    deliverables: [
      "AI visibility audit across major generative platforms",
      "Content clarity and structure recommendations",
      "Entity and brand consistency improvements",
      "Structured data implementation",
      "Ongoing AI citation tracking report",
    ],
    idealFor: [
      "Businesses wanting visibility inside ChatGPT, Gemini and AI Overviews",
      "Companies in research-heavy or consideration-heavy purchase categories",
      "Brands with inconsistent information across the web",
      "Businesses wanting an early position in an emerging search channel",
    ],
    tools: ["Schema Markup", "Google Search Console", "Ahrefs"],
    faqs: [
      {
        question: "What is Generative Engine Optimization?",
        answer:
          "It's the practice of optimizing your content and brand presence so AI tools like ChatGPT, Gemini and Google AI Overviews are more likely to cite or recommend your business when generating an answer.",
      },
      {
        question: "How is GEO different from AEO?",
        answer:
          "AEO targets structured answer placements within traditional search, like featured snippets. GEO targets visibility inside generative AI tools that synthesize answers from multiple sources across the web.",
      },
      {
        question: "Can you guarantee my brand will be cited by AI tools?",
        answer:
          "No one can guarantee citation by a generative model, since it depends on that platform's own retrieval and synthesis process, but we can meaningfully improve your odds through content clarity and consistent authority signals.",
      },
      {
        question: "Is this measurable?",
        answer:
          "Yes, we test and track your brand's presence across major AI tools for relevant queries over time, so you can see whether visibility is improving.",
      },
    ],
    relatedServices: ["aeo", "seo", "website-indexing"],
    turnaround: "Ongoing",
    engagementModel: "Monthly retainer",
  },

  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing",
    metaTitle: "Digital Marketing Services | UPTIME MARKETING",
    metaDescription:
      "Integrated digital marketing campaigns across paid, social and organic channels, aligned to one clear business goal and tracked through to real revenue.",
    heroHeadline: "Marketing That's Coordinated, Not Scattered",
    heroSubheadline:
      "We plan and run integrated digital marketing campaigns across paid, social and organic channels, all pointed at the same measurable business goal.",
    intro: [
      "Running disconnected campaigns across different channels usually means your budget competes with itself instead of reinforcing a single message. We build integrated digital marketing strategies where paid, social and organic channels work from the same plan and the same target audience.",
      "Every engagement starts with clear goals and audience definition, then moves into channel strategy, execution and reporting tied to the metrics that actually matter to your business — leads, conversions and revenue, not just impressions.",
    ],
    whatsIncluded: [
      {
        title: "Marketing Strategy",
        description:
          "We define your audience, channels and goals so every campaign works toward the same measurable outcome.",
      },
      {
        title: "Channel Planning",
        description:
          "We recommend the right mix of paid, social and organic channels based on where your actual customers are.",
      },
      {
        title: "Campaign Execution",
        description:
          "We build and launch campaigns across selected channels, coordinated around one consistent message.",
      },
      {
        title: "Creative Direction",
        description:
          "We guide creative direction so ad and content assets stay on-brand and aligned across channels.",
      },
      {
        title: "Budget Allocation",
        description:
          "We manage budget distribution across channels based on real performance data, not assumptions.",
      },
      {
        title: "Performance Reporting",
        description:
          "We report on results against your actual business goals — leads, conversions and revenue.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "1 Strategy",
        description:
          "across all channels means your marketing budget reinforces itself instead of sending mixed messages.",
      },
      {
        statOrPoint: "Full-Funnel",
        description:
          "coverage means you're reaching customers at awareness, consideration and decision stages, not just one.",
      },
      {
        statOrPoint: "Revenue-Tracked",
        description:
          "reporting connects marketing activity to actual business outcomes, not just vanity metrics.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Strategy",
        description:
          "We define your audience, channels and goals so every campaign is built around a clear business outcome.",
      },
      {
        step: 2,
        title: "Campaign Setup",
        description:
          "We build out targeting, creative and tracking across the channels that matter most for your audience.",
      },
      {
        step: 3,
        title: "Launch & Optimize",
        description:
          "Campaigns go live and we optimize continuously based on real performance data.",
      },
      {
        step: 4,
        title: "Scale",
        description:
          "We reinvest budget into what's working and expand into new channels once performance is proven.",
      },
    ],
    deliverables: [
      "Documented marketing strategy and channel plan",
      "Live campaigns across selected channels",
      "Creative direction and asset guidelines",
      "Monthly performance report tied to business goals",
      "Ongoing optimization recommendations",
    ],
    idealFor: [
      "Businesses running disconnected campaigns across channels",
      "Companies without a clear, documented marketing strategy",
      "Teams wanting one partner managing the full marketing mix",
      "Businesses wanting marketing tied to revenue, not just impressions",
    ],
    tools: ["Meta Ads", "Google Ads", "LinkedIn Ads", "GA4", "HubSpot"],
    faqs: [
      {
        question: "Which channels will you recommend for my business?",
        answer:
          "It depends on where your actual customers spend time and how they buy — we recommend based on your audience and goals, not a default channel mix.",
      },
      {
        question: "How is this different from your Digital Advertising service?",
        answer:
          "Digital Advertising focuses specifically on paid media execution. Digital Marketing is the broader strategy layer coordinating paid, social and organic channels together.",
      },
      {
        question: "How do you report on marketing performance?",
        answer:
          "We report monthly against the metrics that matter to your business — leads, conversions and revenue — alongside channel-level performance data.",
      },
      {
        question: "What budget do I need to get started?",
        answer:
          "It depends on your channels and goals — we'll recommend a realistic starting budget after understanding your market and objectives.",
      },
    ],
    relatedServices: [
      "digital-advertising",
      "social-media-marketing",
      "social-media-management",
    ],
    turnaround: "Ongoing",
    engagementModel: "Monthly retainer",
  },

  "social-media-marketing": {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    metaTitle: "Social Media Marketing Services | UPTIME MARKETING",
    metaDescription:
      "Paid and organic social media marketing strategy that builds the right audience, drives real engagement and turns social attention into lasting demand.",
    heroHeadline: "Build an Audience That Actually Converts",
    heroSubheadline:
      "We plan and run paid and organic social media strategy designed to grow the right audience and turn attention into real business demand.",
    intro: [
      "Growing followers is easy; growing an audience that actually converts into customers is a different problem. Social media marketing done well combines paid amplification with organic content strategy, targeted at the specific audience most likely to become a customer.",
      "We build a social strategy around your actual business goals — awareness, engagement, leads or sales — then run the paid and organic activity needed to hit them, tracking results against real business metrics rather than follower counts.",
    ],
    whatsIncluded: [
      {
        title: "Audience Strategy",
        description:
          "We define the specific audience segments most likely to convert, rather than targeting broadly for reach alone.",
      },
      {
        title: "Paid Social Campaigns",
        description:
          "We build and manage paid campaigns across platforms like Meta, Instagram and LinkedIn, targeted for your goals.",
      },
      {
        title: "Organic Content Strategy",
        description:
          "We plan organic content designed to build engagement and trust with your target audience.",
      },
      {
        title: "Platform Selection",
        description:
          "We recommend the platforms your actual customers use, rather than spreading effort across every platform equally.",
      },
      {
        title: "Performance Tracking",
        description:
          "We track engagement, click-through and conversion data, not just follower growth.",
      },
      {
        title: "Competitive Benchmarking",
        description:
          "We track how your social presence and performance compare to direct competitors.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "Beyond Followers",
        description:
          "Follower count alone doesn't drive revenue — engagement and conversion data are the metrics that actually matter.",
      },
      {
        statOrPoint: "Paid + Organic",
        description:
          "combined typically outperforms either channel alone, since paid extends the reach organic content builds trust with.",
      },
      {
        statOrPoint: "Platform-Specific",
        description:
          "strategy performs better than posting identical content everywhere — each platform has different audience behavior.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Audience & Platform Strategy",
        description:
          "We define your target audience and the platforms where they're most active and receptive.",
      },
      {
        step: 2,
        title: "Content & Campaign Planning",
        description:
          "We plan organic content and paid campaign structure aligned to your specific goals.",
      },
      {
        step: 3,
        title: "Execution",
        description:
          "We launch and manage paid campaigns and organic content across selected platforms.",
      },
      {
        step: 4,
        title: "Optimize & Report",
        description:
          "We track performance against real business metrics and adjust strategy based on results.",
      },
    ],
    deliverables: [
      "Audience and platform strategy document",
      "Live paid social campaigns",
      "Organic content calendar and strategy",
      "Monthly performance and engagement report",
      "Competitive benchmarking summary",
    ],
    idealFor: [
      "Businesses wanting social media tied to real business results",
      "Brands with an audience but low engagement or conversion",
      "Companies unsure which social platforms deserve their budget",
      "Businesses launching a new product or brand on social",
    ],
    tools: ["Meta Ads", "LinkedIn Ads", "GA4", "Canva"],
    faqs: [
      {
        question: "Which social platforms should my business be on?",
        answer:
          "It depends entirely on where your target audience actually spends time — we recommend platforms based on your audience and goals, not a one-size-fits-all list.",
      },
      {
        question: "Do you handle both paid ads and organic content?",
        answer:
          "Yes, we run both paid social campaigns and organic content strategy, coordinated so they reinforce the same audience and message.",
      },
      {
        question: "How do you measure success beyond follower growth?",
        answer:
          "We track engagement, click-through rate, conversions and, where possible, revenue attribution — follower count alone isn't a meaningful success metric.",
      },
      {
        question: "How long before we see results from social media marketing?",
        answer:
          "Paid campaigns can show results within weeks; organic audience growth and trust typically build over 2-3 months of consistent activity.",
      },
    ],
    relatedServices: [
      "social-media-management",
      "digital-advertising",
      "digital-marketing",
    ],
    turnaround: "Ongoing",
    engagementModel: "Monthly retainer",
  },

  "social-media-management": {
    slug: "social-media-management",
    title: "Social Media Management",
    metaTitle: "Social Media Management Services | UPTIME MARKETING",
    metaDescription:
      "Consistent, on-brand social media content and community management that keeps your brand active and responsive across every platform, every single week.",
    heroHeadline: "A Consistent Brand Presence Without the Daily Workload",
    heroSubheadline:
      "We handle the day-to-day of your social media — content, scheduling and community management — so your brand stays active and consistent.",
    intro: [
      "Consistency is what separates a social presence that builds trust from one that looks abandoned. Most businesses know they should be posting regularly and responding to comments, but rarely have the internal bandwidth to do it well, every week, indefinitely.",
      "We take that ongoing workload off your plate — planning and creating on-brand content, scheduling consistently, and managing community interactions — so your social presence stays active and professional without it falling on your internal team.",
    ],
    whatsIncluded: [
      {
        title: "Content Calendar Planning",
        description:
          "We plan a consistent content calendar aligned to your brand voice and key business moments.",
      },
      {
        title: "Content Creation",
        description:
          "We create on-brand graphics, captions and short-form content for your platforms.",
      },
      {
        title: "Scheduling & Publishing",
        description:
          "We handle scheduling and publishing so content goes out consistently without manual effort on your end.",
      },
      {
        title: "Community Management",
        description:
          "We monitor and respond to comments and messages professionally and on-brand.",
      },
      {
        title: "Brand Voice Consistency",
        description:
          "We maintain a consistent tone and visual style across every post and platform.",
      },
      {
        title: "Monthly Performance Reporting",
        description:
          "We report on engagement and growth trends across your managed platforms.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "Consistency Wins",
        description:
          "Platforms and audiences both reward accounts that post consistently over accounts that post in bursts and go quiet.",
      },
      {
        statOrPoint: "Response Time",
        description:
          "Fast, on-brand responses to comments and messages meaningfully affect how customers perceive your business.",
      },
      {
        statOrPoint: "Time Back",
        description:
          "is the most immediate benefit — your team stops spending hours on daily posting and community upkeep.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Brand & Voice Onboarding",
        description:
          "We learn your brand voice, visual style and key business moments to plan around.",
      },
      {
        step: 2,
        title: "Content Calendar",
        description:
          "We build a consistent content calendar covering your active platforms.",
      },
      {
        step: 3,
        title: "Ongoing Creation & Posting",
        description:
          "We create, schedule and publish content consistently, week over week.",
      },
      {
        step: 4,
        title: "Community & Reporting",
        description:
          "We manage community interactions and report on engagement and growth monthly.",
      },
    ],
    deliverables: [
      "Monthly content calendar",
      "On-brand graphics and captions",
      "Scheduled, consistent publishing across platforms",
      "Ongoing community management and response",
      "Monthly engagement and growth report",
    ],
    idealFor: [
      "Businesses without internal bandwidth for daily social management",
      "Brands with inconsistent or infrequent posting history",
      "Companies wanting professional community management",
      "Businesses that want social handled without hiring in-house",
    ],
    tools: ["Canva", "Meta Business Suite", "LinkedIn", "GA4"],
    faqs: [
      {
        question: "Which platforms do you manage?",
        answer:
          "We manage the platforms most relevant to your audience, commonly Instagram, Facebook and LinkedIn — we'll recommend the right mix during onboarding.",
      },
      {
        question: "Do you create original content or just schedule it?",
        answer:
          "Both — we create on-brand graphics and captions as part of the service, not just scheduling content you provide, though we're happy to incorporate your existing assets.",
      },
      {
        question: "How do you handle comments and messages?",
        answer:
          "We monitor and respond professionally and on-brand during business hours, escalating anything sensitive or requiring your direct input.",
      },
      {
        question: "How is this different from Social Media Marketing?",
        answer:
          "Social Media Management covers the ongoing content and community workload. Social Media Marketing adds paid campaigns and audience-growth strategy on top of that foundation.",
      },
    ],
    relatedServices: [
      "social-media-marketing",
      "digital-marketing",
      "graphic-design",
    ],
    turnaround: "Ongoing",
    engagementModel: "Monthly retainer",
  },

  "digital-advertising": {
    slug: "digital-advertising",
    title: "Digital Advertising",
    metaTitle: "Digital Advertising Services | UPTIME MARKETING",
    metaDescription:
      "Performance-driven digital advertising across search, social and display, managed and continuously optimized against real conversion and revenue data.",
    heroHeadline: "Ad Spend Managed Against Real Conversions",
    heroSubheadline:
      "We plan, launch and optimize digital advertising campaigns across search, social and display, managed against conversions and revenue, not clicks.",
    intro: [
      "Ad platforms are built to spend your budget efficiently for their own metrics, not necessarily yours. Managing performance media well means constant attention — targeting, creative testing, bid strategy and budget reallocation based on what's actually converting.",
      "We manage digital advertising across search, social and display, setting up proper conversion tracking from day one so budget decisions are based on real business outcomes, then continuously testing and optimizing campaigns as data comes in.",
    ],
    whatsIncluded: [
      {
        title: "Campaign Strategy",
        description:
          "We define targeting, platforms and budget allocation based on your specific conversion goals.",
      },
      {
        title: "Conversion Tracking Setup",
        description:
          "We implement proper tracking so every dollar spent can be tied back to a real outcome.",
      },
      {
        title: "Ad Creative & Copy",
        description:
          "We develop ad creative and copy variations designed to be tested against each other.",
      },
      {
        title: "Campaign Management",
        description:
          "We manage day-to-day bidding, budget and targeting adjustments across active campaigns.",
      },
      {
        title: "A/B Testing",
        description:
          "We continuously test creative, audiences and landing pages to improve performance over time.",
      },
      {
        title: "Performance Reporting",
        description:
          "We report on cost per conversion, ROAS and revenue impact, not just clicks and impressions.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "Tracked to Revenue",
        description:
          "Proper conversion tracking means every ad dollar can be evaluated against actual business outcomes.",
      },
      {
        statOrPoint: "Continuous Testing",
        description:
          "Campaigns that are never re-tested tend to fatigue and underperform — ongoing optimization is what protects performance.",
      },
      {
        statOrPoint: "Multi-Channel",
        description:
          "coverage across search, social and display reaches customers at different points in their buying journey.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Strategy & Tracking Setup",
        description:
          "We define campaign goals and implement proper conversion tracking before any budget goes live.",
      },
      {
        step: 2,
        title: "Campaign Build",
        description:
          "We build targeting, creative and budget structure across the right ad platforms.",
      },
      {
        step: 3,
        title: "Launch & Optimize",
        description:
          "We launch campaigns and optimize continuously based on real performance data.",
      },
      {
        step: 4,
        title: "Report & Scale",
        description:
          "We report on performance against revenue goals and scale budget into what's converting.",
      },
    ],
    deliverables: [
      "Documented campaign strategy",
      "Conversion tracking implementation",
      "Live ad campaigns across selected platforms",
      "Ad creative and copy variations",
      "Monthly performance and ROAS report",
    ],
    idealFor: [
      "Businesses wanting predictable, trackable lead or sales volume",
      "Companies with existing ad spend but unclear ROI",
      "Businesses launching a new product needing fast market feedback",
      "Companies wanting ad management without hiring an internal team",
    ],
    tools: ["Google Ads", "Meta Ads", "LinkedIn Ads", "GA4"],
    faqs: [
      {
        question: "Which ad platforms will you recommend?",
        answer:
          "It depends on how your customers search and buy — we recommend a mix of Google, Meta and LinkedIn based on your audience and objectives, not a default platform.",
      },
      {
        question: "How do you track whether ads are actually working?",
        answer:
          "We implement proper conversion tracking before launching campaigns, so performance is measured against real leads, sales or revenue, not just clicks.",
      },
      {
        question: "What budget do I need to run effective ads?",
        answer:
          "It varies by industry and competitiveness — we'll recommend a realistic starting budget based on your market and goals during onboarding.",
      },
      {
        question: "How often do you optimize campaigns?",
        answer:
          "We review and adjust active campaigns continuously, with formal performance reviews and reporting on a monthly cadence.",
      },
    ],
    relatedServices: ["digital-marketing", "social-media-marketing", "seo"],
    turnaround: "Ongoing",
    engagementModel: "Monthly retainer plus ad spend",
  },

  "logo-design": {
    slug: "logo-design",
    title: "Logo Design",
    metaTitle: "Logo Design Services | UPTIME MARKETING",
    metaDescription:
      "Custom logo design that gives your brand a distinctive, memorable mark built on strategy, not templates or generic design trends borrowed from someone else.",
    heroHeadline: "A Mark That Actually Represents Your Brand",
    heroSubheadline:
      "We design custom logos grounded in your brand strategy — distinctive enough to stand out, simple enough to work everywhere your brand appears.",
    intro: [
      "A logo is often the single most-reproduced asset a business owns, which means it needs to work at every size, in every context, for years. Good logo design starts with understanding the brand it represents, not browsing trend boards for inspiration.",
      "We start with your business, audience and competitive category, present distinct creative directions grounded in that strategy, then refine the chosen direction into a final mark along with the guidelines needed to use it consistently everywhere.",
    ],
    whatsIncluded: [
      {
        title: "Brand & Competitor Research",
        description:
          "We research your industry and competitors so your mark stands out rather than blending into category conventions.",
      },
      {
        title: "Concept Development",
        description:
          "We develop multiple distinct creative directions before committing to full execution on one.",
      },
      {
        title: "Logo Design & Refinement",
        description:
          "We refine the chosen concept through structured revision rounds until it's ready to represent your brand.",
      },
      {
        title: "Color & Typography System",
        description:
          "We define the color palette and typography that will pair with your logo across your brand.",
      },
      {
        title: "File Delivery Package",
        description:
          "We deliver all file formats and variations needed for web, print and every other use case.",
      },
      {
        title: "Basic Usage Guidelines",
        description:
          "We provide clear guidance on logo spacing, minimum sizing and incorrect usage to protect brand consistency.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "First Impression",
        description:
          "Your logo is often the first visual signal of credibility a potential customer sees, before they've read a word.",
      },
      {
        statOrPoint: "Every Size",
        description:
          "A well-designed logo needs to work from a favicon to a billboard without losing clarity.",
      },
      {
        statOrPoint: "Long Shelf Life",
        description:
          "A strategically designed logo is built to last years, not to be redesigned every time a trend shifts.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description:
          "We learn your brand, audience and competitors so design decisions are grounded in strategy, not personal taste.",
      },
      {
        step: 2,
        title: "Concept & Direction",
        description:
          "We present distinct creative directions so you choose a direction before we invest in full execution.",
      },
      {
        step: 3,
        title: "Design & Iteration",
        description:
          "We refine the chosen direction with your feedback until it's ready to represent your brand everywhere.",
      },
      {
        step: 4,
        title: "Delivery",
        description:
          "You receive final files, usage guidelines and assets ready to use across every channel.",
      },
    ],
    deliverables: [
      "Final logo in all required file formats",
      "Primary, secondary and icon-only variations",
      "Defined color palette and typography pairing",
      "Basic logo usage guidelines",
      "Source files for future editing",
    ],
    idealFor: [
      "New businesses building their identity from scratch",
      "Companies rebranding an outdated or inconsistent logo",
      "Businesses expanding that have outgrown a DIY logo",
      "Brands needing a logo system that works across many touchpoints",
    ],
    tools: ["Figma", "Adobe Illustrator"],
    faqs: [
      {
        question: "How many logo concepts will I see?",
        answer:
          "We typically present 2-3 distinct creative directions before refining your chosen direction, rather than dozens of minor variations on one idea.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "Each project includes a defined number of revision rounds, agreed upfront during scoping, with flexibility to add more if needed.",
      },
      {
        question: "What files will I receive?",
        answer:
          "You'll receive all standard formats — vector source files, PNG, and variations for light and dark backgrounds — so the logo is ready for any use case.",
      },
      {
        question: "Can you redesign our existing logo instead of starting over?",
        answer:
          "Yes, we can evolve an existing mark rather than replacing it outright, when the underlying brand equity is worth preserving.",
      },
    ],
    relatedServices: ["graphic-design", "creative-design", "ui-ux-design"],
    turnaround: "2-4 weeks",
    engagementModel: "Fixed-scope project",
  },

  "graphic-design": {
    slug: "graphic-design",
    title: "Graphic Design",
    metaTitle: "Graphic Design Services | UPTIME MARKETING",
    metaDescription:
      "Ongoing graphic design for web, social and print that stays consistently on-brand across every asset your business needs to publish, at any volume or frequency.",
    heroHeadline: "On-Brand Design for Everything You Publish",
    heroSubheadline:
      "We produce graphic design for web, social and print, keeping every asset visually consistent with your brand regardless of format.",
    intro: [
      "Most businesses need a steady stream of visual assets — social graphics, web banners, presentations, print materials — and keeping all of it consistently on-brand is harder than it sounds without a dedicated design resource. Inconsistent design quietly erodes how professional your brand looks.",
      "We work from your brand guidelines (or help build them if they don't exist yet) to produce graphic design across whatever formats your business needs, so everything you publish looks like it came from the same brand.",
    ],
    whatsIncluded: [
      {
        title: "Brand-Consistent Templates",
        description:
          "We build reusable templates for recurring asset types, so future design work stays consistent and efficient.",
      },
      {
        title: "Social Media Graphics",
        description:
          "We design graphics tailored to each platform's format and audience expectations.",
      },
      {
        title: "Print Design",
        description:
          "We design brochures, business cards, signage and other print materials true to your brand.",
      },
      {
        title: "Presentation Design",
        description:
          "We design pitch decks and presentations that look professional and stay on-brand.",
      },
      {
        title: "Web & Digital Assets",
        description:
          "We produce banners, email graphics and other digital assets for your marketing needs.",
      },
      {
        title: "Ongoing Design Requests",
        description:
          "We handle recurring design requests as they come up, without needing a new project scope each time.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "Consistency",
        description:
          "Consistent visual design across every touchpoint is one of the clearest signals of a professional, trustworthy brand.",
      },
      {
        statOrPoint: "Every Format",
        description:
          "Design that works across web, social and print keeps your brand cohesive no matter where a customer encounters it.",
      },
      {
        statOrPoint: "Faster Turnaround",
        description:
          "An ongoing design relationship means requests get handled quickly, without a new project kickoff each time.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Brand Alignment",
        description:
          "We review or help establish your brand guidelines so all design work stays consistent.",
      },
      {
        step: 2,
        title: "Template Development",
        description:
          "We build templates for your recurring asset needs to streamline future requests.",
      },
      {
        step: 3,
        title: "Ongoing Production",
        description:
          "We produce design assets as requests come in, keeping quality and brand consistency high.",
      },
      {
        step: 4,
        title: "Review & Refine",
        description:
          "We refine based on your feedback and adjust templates as your brand or needs evolve.",
      },
    ],
    deliverables: [
      "Brand-consistent design templates",
      "Requested graphics across web, social and print",
      "Source files for all delivered assets",
      "Print-ready files where applicable",
      "Ongoing design support as new requests arise",
    ],
    idealFor: [
      "Businesses needing a steady stream of on-brand visual assets",
      "Marketing teams without an in-house designer",
      "Companies with inconsistent design across current materials",
      "Businesses needing both digital and print design support",
    ],
    tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Canva"],
    faqs: [
      {
        question: "What kinds of graphics can you design?",
        answer:
          "Social media graphics, web banners, presentations, print materials and most other visual assets your business needs — we'll clarify specific formats during scoping.",
      },
      {
        question: "Do you need our existing brand guidelines?",
        answer:
          "It helps if you have them, but if not, we can establish a lightweight visual direction first so all design work stays consistent from the start.",
      },
      {
        question: "Can this be an ongoing arrangement instead of a one-off project?",
        answer:
          "Yes, most graphic design engagements work best as an ongoing arrangement, since design needs tend to be recurring rather than one-time.",
      },
      {
        question: "How fast is turnaround on design requests?",
        answer:
          "Turnaround depends on complexity and current workload, which we'll agree on upfront — ongoing clients typically get faster, more predictable turnaround.",
      },
    ],
    relatedServices: [
      "logo-design",
      "creative-design",
      "social-media-management",
    ],
    turnaround: "Ongoing",
    engagementModel: "Monthly retainer or per-project",
  },

  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    metaTitle: "UI/UX Design Services | UPTIME MARKETING",
    metaDescription:
      "User interface and experience design focused on clarity, usability and conversion, for web and mobile products that people genuinely enjoy using daily.",
    heroHeadline: "Interfaces People Actually Want to Use",
    heroSubheadline:
      "We design user interfaces and experiences focused on clarity and usability first, because good UX design is also what drives better conversion.",
    intro: [
      "Good UI/UX design isn't about making something look impressive in a portfolio — it's about removing friction between a user and the thing they're trying to accomplish. Confusing navigation, unclear calls to action and inconsistent patterns all quietly cost conversions.",
      "We design interfaces grounded in how real users actually behave, using research, wireframing and iterative prototyping before a single pixel is finalized, so the end result is both usable and visually strong.",
    ],
    whatsIncluded: [
      {
        title: "User Research",
        description:
          "We research your users' goals and pain points so design decisions are grounded in real behavior, not assumptions.",
      },
      {
        title: "Wireframing",
        description:
          "We map out layout and user flows at a low-fidelity stage, so structural decisions are validated before visual design begins.",
      },
      {
        title: "UI Design",
        description:
          "We design the final visual interface — typography, color, components — consistent with your brand.",
      },
      {
        title: "Interactive Prototyping",
        description:
          "We build clickable prototypes so you and your team can experience the flow before development starts.",
      },
      {
        title: "Usability Considerations",
        description:
          "We design with accessibility and usability best practices built in from the start, not retrofitted later.",
      },
      {
        title: "Design System Documentation",
        description:
          "We document components and patterns so your product stays visually consistent as it grows.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "Conversion Impact",
        description:
          "Clear, well-designed interfaces directly reduce drop-off at the exact moments that matter most — signup, checkout, key actions.",
      },
      {
        statOrPoint: "Fewer Dev Reworks",
        description:
          "Validating flows through wireframes and prototypes before development reduces expensive rebuild cycles later.",
      },
      {
        statOrPoint: "Consistent at Scale",
        description:
          "A documented design system keeps the product coherent as new features and screens get added over time.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Research",
        description:
          "We research your users and business goals to ground design decisions in real behavior.",
      },
      {
        step: 2,
        title: "Wireframing",
        description:
          "We map layouts and user flows at low fidelity to validate structure before visual design.",
      },
      {
        step: 3,
        title: "UI Design & Prototyping",
        description:
          "We design the final interface and build interactive prototypes to validate the experience.",
      },
      {
        step: 4,
        title: "Handoff & Documentation",
        description:
          "We document the design system and hand off developer-ready files.",
      },
    ],
    deliverables: [
      "User research summary",
      "Wireframes for key user flows",
      "High-fidelity UI designs",
      "Interactive clickable prototype",
      "Developer-ready design system documentation",
    ],
    idealFor: [
      "Products with confusing navigation or low conversion rates",
      "Startups designing a product interface from scratch",
      "Companies redesigning a dated or inconsistent product",
      "Teams that need a documented design system to scale",
    ],
    tools: ["Figma", "Adobe XD"],
    faqs: [
      {
        question: "What's the difference between UI and UX design?",
        answer:
          "UX design focuses on how the product works and flows — the structure and logic. UI design focuses on how it looks — visual style, typography and components. We handle both together, since they're deeply connected.",
      },
      {
        question: "Do you conduct user research or just design based on best practices?",
        answer:
          "We do both — lightweight user research grounds decisions in real behavior specific to your product, layered with established usability best practices.",
      },
      {
        question: "Will I get a clickable prototype before development?",
        answer:
          "Yes, interactive prototypes are a standard part of the process, so you can experience the flow and give feedback before any code is written.",
      },
      {
        question: "Do you hand off design files developers can actually use?",
        answer:
          "Yes, we deliver developer-ready files with documented components, spacing and interaction notes so implementation matches the design accurately.",
      },
    ],
    relatedServices: [
      "web-app-development",
      "mobile-app-development",
      "graphic-design",
    ],
    turnaround: "4-8 weeks",
    engagementModel: "Fixed-scope project",
  },

  "creative-design": {
    slug: "creative-design",
    title: "Creative Design",
    metaTitle: "Creative Design Services | UPTIME MARKETING",
    metaDescription:
      "Concept-driven creative design for campaigns and brand moments, built to capture attention fast while staying true to your core brand identity always.",
    heroHeadline: "Creative That Gets Noticed for the Right Reasons",
    heroSubheadline:
      "We develop concept-driven creative for campaigns and brand moments — distinctive enough to capture attention, disciplined enough to stay on-brand.",
    intro: [
      "Campaign creative has a narrower job than everyday brand assets — it needs to stop someone mid-scroll or mid-commute, communicate one idea fast, and still feel unmistakably like your brand. That balance between distinctiveness and consistency is where most campaign creative falls short.",
      "We start with the campaign's core idea, develop concepts around it, and produce creative across the formats your campaign needs — from social ads to out-of-home — so the work is both attention-grabbing and clearly recognizable as yours.",
    ],
    whatsIncluded: [
      {
        title: "Campaign Concept Development",
        description:
          "We develop the core creative idea behind a campaign before producing any assets.",
      },
      {
        title: "Creative Direction",
        description:
          "We define the visual direction and tone that will carry consistently across every campaign asset.",
      },
      {
        title: "Multi-Format Production",
        description:
          "We produce creative across the formats your campaign needs — social, display, print or out-of-home.",
      },
      {
        title: "Copywriting Support",
        description:
          "We develop headline and messaging direction that pairs with the visual concept.",
      },
      {
        title: "Campaign Asset Variations",
        description:
          "We produce sized and formatted variations for each platform the campaign will run on.",
      },
      {
        title: "Brand Consistency Review",
        description:
          "We check every asset against your brand guidelines before final delivery.",
      },
    ],
    whyItMatters: [
      {
        statOrPoint: "Attention Span",
        description:
          "Campaign creative has a few seconds to earn attention — distinctive concept-driven work performs better than generic templates.",
      },
      {
        statOrPoint: "One Clear Idea",
        description:
          "Campaigns built around a single strong concept communicate faster than ones trying to say too much at once.",
      },
      {
        statOrPoint: "Format-Ready",
        description:
          "Producing correctly for each platform's format avoids awkward cropping or resizing that undermines the creative.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Concept Development",
        description:
          "We develop the core creative idea and direction for the campaign.",
      },
      {
        step: 2,
        title: "Creative Direction",
        description:
          "We define the visual and messaging tone that will carry across every asset.",
      },
      {
        step: 3,
        title: "Production",
        description:
          "We produce creative assets across the formats and platforms your campaign needs.",
      },
      {
        step: 4,
        title: "Review & Delivery",
        description:
          "We check every asset for brand consistency before final delivery.",
      },
    ],
    deliverables: [
      "Campaign concept and creative direction",
      "Production-ready creative assets across formats",
      "Headline and messaging direction",
      "Platform-specific sizing and variations",
      "Brand consistency review and final files",
    ],
    idealFor: [
      "Businesses launching a specific marketing campaign",
      "Brands needing creative for a product launch or seasonal moment",
      "Companies wanting concept-driven work, not template-based ads",
      "Marketing teams needing multi-format campaign assets",
    ],
    tools: [
      "Figma",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe Premiere",
    ],
    faqs: [
      {
        question: "Do you handle both concept and production?",
        answer:
          "Yes, we develop the creative concept and direction, then produce the actual assets — you don't need to bring your own creative brief.",
      },
      {
        question: "What formats can you produce creative for?",
        answer:
          "Social ads, display banners, print and out-of-home formats, among others — we'll scope exact formats based on where your campaign will run.",
      },
      {
        question: "How many concepts will we see before production?",
        answer:
          "We typically present a small number of distinct concept directions before moving into full production on the chosen one.",
      },
      {
        question: "Can you write the campaign copy too?",
        answer:
          "We provide headline and messaging direction that pairs with the creative concept; full copywriting can be scoped in depending on your needs.",
      },
    ],
    relatedServices: ["graphic-design", "logo-design", "social-media-marketing"],
    turnaround: "2-5 weeks",
    engagementModel: "Fixed-scope project",
  },
};

export function getServiceDetail(slug: string) {
  return serviceDetails[slug];
}
