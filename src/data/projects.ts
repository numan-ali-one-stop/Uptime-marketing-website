import type { Project } from "@/types/projects";

/**
 * Real client projects only. `results` on these are facts stated on the sites
 * themselves (`resultsAreFacts`), not measured outcomes; drop that flag when
 * adding results you've actually measured. Images are screenshots of the live
 * sites in /public/images/portfolio.
 */
export const projects: Project[] = [
  {
    slug: "one-stop-tyres-247",
    title: "One Stop Tyres 24/7",
    client: "One Stop Tyres 24/7",
    category: "Web Development",
    industry: "Automotive & Mobile Tyre Services",
    thumbnail: "/images/portfolio/onestop-hero.jpg",
    heroImage: "/images/portfolio/onestop-hero.jpg",
    heroAlt: "One Stop Tyres 24/7 homepage with a coverage map of Greater Manchester",
    excerpt:
      "A lead-focused website for a 24/7 mobile tyre service, with instant quotes and local pages across Greater Manchester.",
    metaDescription:
      "See the website Uptime Marketing built for One Stop Tyres 24/7, a mobile tyre service with instant quotes and local pages across Greater Manchester.",
    challenge:
      "A driver with a flat tyre needs help now, and is usually searching on a phone at the side of the road. One Stop Tyres 24/7 needed a website that makes it immediately clear they come out day or night, shows whether they cover the driver's area, and makes getting help or a price as quick as possible.",
    solution:
      "We built a Next.js website around getting in touch: call and WhatsApp buttons sit at the top of the page, and an instant quote form collects the vehicle registration, tyre size and postcode, with the price sent back on WhatsApp. Each service has its own page, from mobile tyre fitting and puncture repair to jump starts and TPMS resets. Local pages and a coverage map take in towns across all ten Greater Manchester boroughs, and a blog and FAQ answer the questions drivers ask most.",
    results: [
      { metric: "230+", label: "Towns Covered" },
      { metric: "10", label: "Boroughs Served" },
      { metric: "7", label: "Tyre & Roadside Services" },
    ],
    resultsAreFacts: true,
    servicesUsed: ["web-app-development", "seo", "ui-ux-design"],
    techStack: ["Next.js", "React", "Vercel"],
    gallery: [
      "/images/portfolio/onestop-about.jpg",
      "/images/portfolio/onestop-services.jpg",
      "/images/portfolio/onestop-process.jpg",
    ],
    liveUrl: "https://onestoptyres247.co.uk/",
  },
  {
    slug: "road-heroes-247",
    title: "Road Heroes 247",
    client: "Road Heroes 247 LTD",
    category: "Web Development",
    industry: "Automotive & Mobile Tyre Services",
    thumbnail: "/images/portfolio/roadheroes-hero.jpg",
    heroImage: "/images/portfolio/roadheroes-hero.jpg",
    heroAlt: "Road Heroes 247 homepage showing a mobile tyre fitting job at night",
    excerpt:
      "A clean, trustworthy website for an emergency mobile tyre fitter serving homes, workplaces and roadsides across Greater Manchester.",
    metaDescription:
      "See the website Uptime Marketing built for Road Heroes 247, an emergency mobile tyre fitter serving homes, workplaces and roadsides in Greater Manchester.",
    challenge:
      "Drivers stuck with a flat, damaged or blown tyre need to know quickly who can reach them, what happens next, and whether they can trust the business turning up. Road Heroes 247 needed a website that answers those questions clearly and gets people calling, without overpromising on a safety-critical service.",
    solution:
      "We built a Next.js website that puts a call button front and centre and explains the service in plain language: a simple four-step process, clear pricing expectations and honest repair advice. Dedicated pages cover mobile tyre fitting, home tyre fitting, jump starts and locking nut removal, with local pages for the boroughs served. A gallery of real jobs builds trust, and motorway guidance tells drivers to reach a safe location before calling.",
    results: [
      { metric: "24/7", label: "Emergency Availability" },
      { metric: "10", label: "Primary Service Areas" },
      { metric: "9", label: "Major Routes Covered" },
    ],
    resultsAreFacts: true,
    servicesUsed: ["web-app-development", "seo", "ui-ux-design"],
    techStack: ["Next.js", "React", "Vercel"],
    gallery: [
      "/images/portfolio/roadheroes-services.jpg",
      "/images/portfolio/roadheroes-steps.jpg",
      "/images/portfolio/roadheroes-gallery.jpg",
    ],
    liveUrl: "https://road-heros-247.vercel.app/",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
