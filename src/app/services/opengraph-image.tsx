import { ogImageSize, renderOgImage } from "@/lib/og-image";

export const alt = "Our Services | Uptime Marketing";
export const size = ogImageSize;
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    eyebrow: "Our Services",
    title: "Technology and digital solutions for growth",
    subtitle:
      "Development, AI, SEO, marketing and design — all under one roof.",
  });
}
