import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

export const ogImageSize = { width: 1200, height: 630 };

/** Shared brand-gradient OG image renderer for per-route opengraph-image.tsx files. */
export function renderOgImage({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
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
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            backgroundImage:
              "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 28,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 700,
            color: "#f4f4f5",
            lineHeight: 1.15,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        {subtitle ? (
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#a1a1aa",
              marginTop: 28,
              maxWidth: 900,
            }}
          >
            {subtitle}
          </div>
        ) : null}
        <div
          style={{
            display: "flex",
            fontSize: 24,
            fontWeight: 600,
            color: "#9494a0",
            marginTop: "auto",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          {siteConfig.name}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
