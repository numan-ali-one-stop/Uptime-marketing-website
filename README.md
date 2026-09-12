# Uptime Marketing

Marketing website for **Uptime Marketing** — a technology and digital growth agency offering web/mobile development, AI solutions, SEO & search, digital marketing, and design services. Built as a fully static-where-possible, SEO- and accessibility-audited Next.js site with a working contact form pipeline (Resend), GA4 + Vercel Analytics, and a typed content layer so copy changes never require touching component code.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, `src/` directory)
- [React 19](https://react.dev)
- TypeScript (`strict: true`, zero `any`)
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config via `@theme` in `globals.css` — no `tailwind.config.js`)
- [shadcn/ui](https://ui.shadcn.com) primitives on top of [Radix UI](https://www.radix-ui.com) (`radix-ui` package)
- [Motion](https://motion.dev) (`motion/react`) for scroll/hover animation, gated behind `prefers-reduced-motion`
- [react-hook-form](https://react-hookform.com) + [zod](https://zod.dev) for the contact form
- [Resend](https://resend.com) for transactional contact-form email
- [Sonner](https://sonner.emilkowal.ski) for toasts
- [lucide-react](https://lucide.dev) for icons
- [@vercel/analytics](https://vercel.com/docs/analytics) + [@vercel/speed-insights](https://vercel.com/docs/speed-insights) + optional GA4
- `next/font` (Inter + Space Grotesk, self-hosted, `display: swap`)

## Local Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the environment template and fill in real values:

   ```bash
   cp .env.example .env.local
   ```

3. Run the dev server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

The contact form works without any environment variables — with `RESEND_API_KEY` unset, submissions are logged to the server console instead of sent, so you can develop and test the form locally without a Resend account.

## Scripts

| Script           | Description                                             |
| ---------------- | -------------------------------------------------------- |
| `npm run dev`    | Start the local dev server (Turbopack)                   |
| `npm run build`  | Production build                                         |
| `npm run start`  | Serve the production build (run `build` first)           |
| `npm run lint`   | Run ESLint                                                |
| `npm run format` | Format the project with Prettier                          |

Before shipping any change, run `npx tsc --noEmit`, `npm run lint`, and `npm run build` — the project is expected to pass all three with zero errors/warnings (aside from one documented, benign React Compiler warning on `contact-form.tsx`'s use of `react-hook-form`'s `watch()`, which is expected and safe).

## Environment Variables

Copy `.env.example` to `.env.local` for local development. In production (Vercel), add each of these under **Project Settings → Environment Variables** — see [Deploying to Vercel](#deploying-to-vercel) below.

| Variable                      | Required? | Where it comes from | Description |
| ------------------------------ | --------- | -------------------- | ----------- |
| `NEXT_PUBLIC_SITE_URL`         | Yes       | The production domain you deploy to (e.g. `https://www.uptimemarketing.com`) | Canonical site URL. Used for `metadataBase`, canonical `<link>` tags, OpenGraph/Twitter URLs, JSON-LD, and the sitemap/robots.txt. Must **not** have a trailing slash. |
| `NEXT_PUBLIC_GA_ID`            | No        | [Google Analytics](https://analytics.google.com) → Admin → Data Streams → your web stream → Measurement ID (format `G-XXXXXXXXXX`) | Gates the GA4 script in the root layout. Leave unset to ship with GA4 completely inert (no script loaded, no cookies set) — useful for staging/preview deployments. |
| `RESEND_API_KEY`               | No*       | [resend.com](https://resend.com) → API Keys | Used by `app/api/contact/route.ts` to send contact-form submissions by email. *Required in production* for the contact form to actually deliver mail — without it, submissions are only logged server-side. |
| `CONTACT_EMAIL_TO`             | Yes (if `RESEND_API_KEY` is set) | Your own inbox | The address that receives contact-form submissions. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`  | Yes       | Your business WhatsApp number, digits only, international format, no `+` or spaces (e.g. `15551234567`) | Used to build every `wa.me` link on the site (header CTA, footer, contact page, floating WhatsApp button). |

Any variable prefixed `NEXT_PUBLIC_` is bundled into client-side JavaScript and is **not** secret — never put real secrets behind that prefix.

## Content Editing Guide

All editable business content lives in `src/data/*.ts`, fully typed against `src/types/*.ts`. You should never need to touch a component file (`src/components/**`) just to change copy, add a service, or add a project — components read from these files.

| To change... | Edit this file |
| ------------ | --------------- |
| Company name, tagline, description, contact email/phone/address, business hours, social links | `src/data/site.ts` |
| Services taxonomy — the 5 top-level categories and their sub-services shown on `/services` | `src/data/services.ts` |
| The detailed content on each individual service page (`/services/[category]/[service]`) — hero copy, what's included, process, deliverables, FAQs, meta title/description | `src/data/service-details.ts` |
| Portfolio / case studies shown on `/portfolio` | `src/data/projects.ts` — each project needs a `metaDescription` (150–160 characters, used for search results) in addition to the shorter on-page `excerpt` |
| Company/About page content — founding year, team members, stats | `src/data/company.ts` |
| Homepage-wide FAQ section | `src/data/faqs.ts` |
| Client testimonials | `src/data/testimonials.ts` |
| Per-service card/hero images | `src/data/service-images.ts` — maps a service slug to `/public/images/*` paths; until a real image is supplied there, the site automatically falls back to a gradient placeholder, so nothing breaks if you add a new service without an image yet |

Files with a `PLACEHOLDER CONTENT` comment block at the top (`data/projects.ts`, `data/testimonials.ts`, `data/company.ts`) contain fictional/example content that **must** be replaced before launch — see `DEPLOYMENT_CHECKLIST.md`.

### Legal pages

`src/app/privacy-policy/page.tsx` and `src/app/terms-of-service/page.tsx` are **template content** flagged with a comment at the top of each file. Both must be reviewed by a qualified legal professional, and jurisdiction-specific clauses (governing law, GDPR/CCPA specifics, etc.) filled in before launch.

## SEO & Structured Data

- `src/app/sitemap.ts` and `src/app/robots.ts` are generated dynamically from the data layer (`src/data/services.ts`, `src/data/projects.ts`) — every real route is included automatically and nothing can drift out of sync. **Do not** add a static `public/robots.txt` or `public/sitemap.xml` file — either would conflict with these dynamic routes at the same URL.
- `src/lib/schema.ts` centralizes all JSON-LD (schema.org) builders; every page composes its structured data from these functions via the `<JsonLd>` component (`src/components/seo/json-ld.tsx`) rather than hand-writing inline `<script>` tags.
- Open Graph images are generated dynamically per route (`opengraph-image.tsx` files under `src/app/**`) using `next/og`, rendering the page title over the brand gradient — no static image files to keep in sync.

## Deploying to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository. Vercel auto-detects the Next.js framework preset — no build command changes needed.
3. **Before the first deploy**, add environment variables: in the import screen (or later under **Project Settings → Environment Variables**), add each variable from the [table above](#environment-variables). Set `NEXT_PUBLIC_SITE_URL` per-environment — your real domain for **Production**, and the Vercel-provided preview URL (or leave it pointing at production; canonical tags will just point at prod, which is fine for previews) for **Preview**/**Development**.
4. Deploy. `vercel.json` already configures the framework preset, `cleanUrls`, security headers (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy), and long-lived `Cache-Control` headers for hashed static assets and `/public/images`.
5. **Connect a custom domain**: in the deployed project, go to **Settings → Domains**, add your domain (e.g. `uptimemarketing.com` and `www.uptimemarketing.com`), and follow Vercel's DNS instructions (either delegate nameservers to Vercel, or add the specific A/CNAME records it shows you at your registrar). Vercel provisions and renews the TLS certificate automatically once DNS resolves.
6. Once the custom domain is live, update `NEXT_PUBLIC_SITE_URL` in **Project Settings → Environment Variables** to match it exactly (including `https://`, no trailing slash), then redeploy (**Deployments → ⋯ → Redeploy**) so metadata, the sitemap, and JSON-LD all pick up the final domain.
7. See `DEPLOYMENT_CHECKLIST.md` for the full pre-launch checklist (placeholder content, real images, GA4/Search Console setup, Lighthouse audit, etc.).

## Project Structure

- `src/app` — routes (App Router): pages, `sitemap.ts`, `robots.ts`, `manifest.ts`, `opengraph-image.tsx` routes, `icon.tsx`/`apple-icon.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`
- `src/components/ui` — shadcn/ui components + shared design-system primitives (buttons, cards, form fields)
- `src/components/layout` — header, footer, mobile nav, services mega menu
- `src/components/sections` — page-specific content sections
- `src/components/seo` — the `<JsonLd>` structured-data renderer
- `src/components/legal` — the shared `<LegalLayout>` used by the privacy policy and terms pages
- `src/data` — typed content/data layer described above
- `src/types` — shared TypeScript types for the data layer
- `src/lib` — utilities, fonts, icon map, analytics helper (`trackEvent`), JSON-LD builders (`schema.ts`), the shared OG-image renderer (`og-image.tsx`)
