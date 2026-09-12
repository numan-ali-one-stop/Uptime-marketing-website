import { ogImageSize, renderOgImage } from "@/lib/og-image";

export const alt = "Our Work | Uptime Marketing";
export const size = ogImageSize;
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    eyebrow: "Our Work",
    title: "Projects That Speak for Us",
    subtitle:
      "Web, mobile, AI, SEO, marketing and design work — real results.",
  });
}
