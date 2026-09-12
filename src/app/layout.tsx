import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/data/site";
import { inter, spaceGrotesk } from "@/lib/fonts";

import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: "%s | UPTIME MARKETING",
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Icons are handled by the app/icon.tsx, app/apple-icon.tsx and
  // app/favicon.ico file conventions, which Next.js picks up and links
  // automatically — no explicit `icons` field needed here.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <a
          href="#main-content"
          className="focus-visible:ring-ring/50 sr-only rounded-lg bg-[var(--accent-button-start)] px-4 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus-visible:ring-[3px] focus-visible:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
        <Analytics />
        <SpeedInsights />
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
