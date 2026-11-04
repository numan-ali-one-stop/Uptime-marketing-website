/**
 * Live, hotlinked photography from Unsplash (https://unsplash.com/license —
 * free for commercial use, no attribution required). `images.unsplash.com` is
 * allow-listed in next.config.ts, and next/image resizes and caches each one.
 *
 * These are illustrative stock photos. They show the kind of work a service
 * involves; none of them depict Uptime Marketing's staff, office or clients,
 * so keep alt text descriptive rather than claiming otherwise.
 */
export type Photo = {
  src: string;
  alt: string;
};

function unsplash(id: string) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;
}

function photo(id: string, alt: string): Photo {
  return { src: unsplash(id), alt };
}

export const pagePhotos = {
  homeHero: photo(
    "1460925895917-afdab827c52f",
    "Laptop showing a business analytics dashboard"
  ),
  homeHeroInset: photo(
    "1531482615713-2afd69097998",
    "Two colleagues reviewing code on a laptop"
  ),
  ctaBackground: photo(
    "1519389950473-47ba0277781c",
    "Overhead view of a team working together on laptops"
  ),
  about: photo(
    "1522071820081-009f0129c71c",
    "A team collaborating around a table with laptops"
  ),
  aboutMission: photo(
    "1542744173-8e7e53415bb0",
    "A team meeting around a conference table"
  ),
  services: photo(
    "1552664730-d307ca884978",
    "A strategy session with sticky notes on a wall"
  ),
  portfolio: photo(
    "1504868584819-f8e8b4b6d7e3",
    "Laptop displaying performance charts"
  ),
  contact: photo(
    "1517245386807-bb43f82c33c4",
    "Two people discussing a project over a laptop"
  ),
  contactWorld: photo(
    "1524661135-423995f22d0b",
    "A world map marked with destinations"
  ),
  privacy: photo(
    "1454165804606-c3d57bc86b40",
    "Two people reviewing paperwork beside their laptops"
  ),
  terms: photo("1450101499163-c8848c66ca85", "A person signing a document"),
} satisfies Record<string, Photo>;

export const categoryPhotos: Record<string, Photo> = {
  development: photo(
    "1547658719-da2b51169166",
    "Code and a web design shown side by side on a monitor and devices"
  ),
  "ai-solutions": photo(
    "1677442136019-21780ecad995",
    "Abstract illustration of the letters AI"
  ),
  "seo-search": photo(
    "1560472354-b33ff0c44a43",
    "A search performance report with clicks and impressions"
  ),
  "digital-marketing": photo(
    "1533750349088-cd871a92f312",
    "A desk with marketing strategy notes and books"
  ),
  "design-creative": photo(
    "1559028012-481c04fa702d",
    "A design application open on large monitors"
  ),
};

/** Homepage section photos, chosen to differ where a category repeats a card. */
export const homeSectionPhotos: Record<string, Photo> = {
  development: photo(
    "1555066931-4365d14bab8c",
    "Laptop with application code on screen"
  ),
  "ai-solutions": categoryPhotos["ai-solutions"],
  "seo-search": categoryPhotos["seo-search"],
  "digital-marketing": photo(
    "1551288049-bebda4e38f71",
    "A screen showing marketing analytics charts"
  ),
  "design-creative": categoryPhotos["design-creative"],
};

export const servicePhotos: Record<string, Photo> = {
  "mobile-app-development": photo(
    "1551650975-87deedd944c3",
    "Hand holding a phone running a mobile dashboard app"
  ),
  "web-app-development": photo(
    "1498050108023-c5249f4df085",
    "Laptop and monitor set up for web development"
  ),
  "custom-software-development": photo(
    "1571171637578-41bc2dd41cd2",
    "Monitors displaying software source code"
  ),
  "ai-development": photo(
    "1518770660439-4636190af475",
    "Close-up of a computer circuit board"
  ),
  "ai-agents": photo(
    "1485827404703-89b55fcc595e",
    "A friendly white humanoid robot"
  ),
  "business-automation": photo(
    "1516110833967-0b5716ca1387",
    "Robotic arms performing precise automated work"
  ),
  "custom-ai-solutions": photo(
    "1600132806370-bf17e65e942f",
    "Technical blueprint-style system diagrams"
  ),
  seo: photo(
    "1543286386-713bdd548da4",
    "A hand-drawn growth chart on a wooden desk"
  ),
  "gbp-optimization": photo(
    "1556740738-b6a63e27c4df",
    "A local business owner serving a customer at the counter"
  ),
  "google-search-console": categoryPhotos["seo-search"],
  "website-indexing": photo(
    "1558494949-ef010cbdcc31",
    "Rows of networked servers in a data center"
  ),
  aeo: photo(
    "1543512214-318c7553f230",
    "A voice assistant smart speaker on a table"
  ),
  geo: photo(
    "1620712943543-bcc4688e7485",
    "A robot reading, representing AI-generated answers"
  ),
  "digital-marketing": photo(
    "1557838923-2985c318be48",
    "Letter tiles spelling digital marketing"
  ),
  "social-media-marketing": photo(
    "1611926653458-09294b3142bf",
    "A phone showing a folder of social media apps"
  ),
  "social-media-management": photo(
    "1563986768609-322da13575f3",
    "A person managing accounts on a laptop and a phone"
  ),
  "digital-advertising": pagePhotos.portfolio,
  "logo-design": photo(
    "1572044162444-ad60f128bdea",
    "A designer sketching on a graphics tablet beside color swatches"
  ),
  "graphic-design": photo(
    "1561070791-2526d30994b5",
    "Printed color palettes and design layouts"
  ),
  "ui-ux-design": photo(
    "1586717791821-3f44a563fa4c",
    "A designer sketching interface wireframes on a tablet"
  ),
  "creative-design": photo(
    "1558655146-9f40138edfeb",
    "A designer drawing on a tablet with a stylus"
  ),
};
