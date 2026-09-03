# Uptime Marketing

Marketing website for **Uptime Marketing** — a technology and digital growth agency. Built with Next.js 15+ (App Router), React 19, TypeScript, Tailwind CSS v4, and shadcn/ui.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router, `src/` directory)
- [React 19](https://react.dev)
- TypeScript (strict mode)
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config via `@theme` in `globals.css`)
- [shadcn/ui](https://ui.shadcn.com) (New York style)
- [Motion](https://motion.dev) (`motion/react`) for scroll/hover animation
- [lucide-react](https://lucide.dev) for icons
- `next/font` (Inter + Space Grotesk)

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

## Scripts

| Script           | Description                      |
| ---------------- | -------------------------------- |
| `npm run dev`    | Start the local dev server       |
| `npm run build`  | Production build                 |
| `npm run start`  | Serve the production build       |
| `npm run lint`   | Run ESLint                       |
| `npm run format` | Format the project with Prettier |

## Environment Variables

| Variable                      | Description                                               |
| ----------------------------- | --------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`        | Canonical site URL, used for metadata and OpenGraph tags  |
| `NEXT_PUBLIC_GA_ID`           | Google Analytics 4 measurement ID                         |
| `RESEND_API_KEY`              | API key used to send contact form emails via Resend       |
| `CONTACT_EMAIL_TO`            | Inbox that receives contact form submissions              |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number (digits only) used to build `wa.me` links |

## Deploying to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project into [Vercel](https://vercel.com/new).
3. Add the environment variables listed above in the Vercel project settings (Production, Preview, and Development as needed).
4. Deploy — `vercel.json` already configures the framework preset, security headers, and clean URLs.

## Project Structure

- `src/app` — routes (App Router)
- `src/components/ui` — shadcn/ui components + shared design-system primitives
- `src/components/layout` — header, footer, and navigation
- `src/data` — typed content/data layer (services taxonomy, site config)
- `src/types` — shared TypeScript types
- `src/lib` — utilities, fonts, icon map
