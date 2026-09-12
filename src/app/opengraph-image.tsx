import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0f",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(59,130,246,0.35), transparent 55%), radial-gradient(circle at 85% 85%, rgba(6,182,212,0.3), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 32,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            color: "#f4f4f5",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#a1a1aa",
            marginTop: 32,
            maxWidth: 900,
          }}
        >
          Development, AI Solutions, SEO & Search, Digital Marketing, Design
        </div>
      </div>
    ),
    { ...size }
  );
}
