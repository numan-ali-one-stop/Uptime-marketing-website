# Pre-Launch Deployment Checklist

Work through this list before pointing the real domain at this site. Nothing here is automated — check each item off manually.

## 1. Replace placeholder content

- [ ] `src/data/projects.ts` — holds only real client work. Confirm you have permission to publish each project, and add measured results when you have them.
- [ ] `src/data/testimonials.ts` — testimonials are currently removed from the site. To bring them back, add real quotes (with written/recorded permission) and render `TestimonialsSection` in `src/app/page.tsx`.
- [ ] `src/data/company.ts` — replace placeholder team member names/roles/photos with real ones.
- [ ] `src/data/site.ts` — every field marked `// TODO: replace with real ...` needs a real value:
  - [ ] Real support email (`email`)
  - [ ] Real phone number (`phone` / `phoneDisplay`)
  - [ ] Real WhatsApp number (`whatsappNumber`, or set `NEXT_PUBLIC_WHATSAPP_NUMBER`)
  - [ ] Real business address (`address`)
  - [ ] Real business hours (`businessHours`)
  - [ ] Real social profile URLs (`social`) — currently placeholder LinkedIn/Facebook/Instagram/X URLs
- [ ] `src/data/site.ts` — set `mapEmbedUrl` to a real Google Maps embed URL (Maps → Share → "Embed a map"). The contact page shows a photo until then.
- [ ] `src/app/privacy-policy/page.tsx` and `src/app/terms-of-service/page.tsx` — both are template content (flagged at the top of each file). **Have a qualified legal professional review both pages** and fill in jurisdiction-specific clauses (governing law/venue, GDPR/CCPA/PIPEDA specifics depending on where the business and its customers are located) before launch.

## 2. Add real project images

- [ ] Project images in `/public/images/portfolio/` are screenshots of the live client sites. Retake them if those sites change.
- [ ] All other new page photography lives in `src/data/photos.ts` and is hotlinked from Unsplash. Check the links still load before launch, and swap in your own photos of your team and office where you have them.
- [ ] `src/data/company.ts` team — the About page's team section stays hidden while names are `[...]` placeholders and appears automatically once real names are in. Add real headshots to `/public/team/` and update `about-team.tsx` if you want real photos instead of avatars.
- [ ] Optional: add a real `app/favicon.ico` converted from your final logo. `app/icon.tsx` and `app/apple-icon.tsx` already generate an on-brand "U" monogram icon and don't need changes unless the brand mark changes.

## 3. Set production environment variables

Set these in Vercel under **Project Settings → Environment Variables** (see README.md for the full description of each):

- [ ] `NEXT_PUBLIC_SITE_URL` — the real production domain, exactly as it will be used (`https://www.yourdomain.com`, no trailing slash)
- [ ] `RESEND_API_KEY` — a real Resend API key (the site works without one, but silently skips sending real email)
- [ ] `CONTACT_EMAIL_TO` — the real inbox that should receive contact-form leads
- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` — the real WhatsApp business number
- [ ] `NEXT_PUBLIC_GA_ID` — the real GA4 measurement ID (leave unset if you don't want analytics on this deployment)

## 4. Verify the contact form sends real email

- [ ] After setting `RESEND_API_KEY` and `CONTACT_EMAIL_TO` in production, submit a real test enquiry through the live `/contact` page.
- [ ] Confirm the email actually arrives at the configured inbox (check spam folder on the first send).
- [ ] Confirm the sender domain in `src/app/api/contact/route.ts` (`onboarding@resend.dev` sandbox address) is swapped for a verified sending domain in your Resend account before relying on this for real leads — Resend's sandbox address has deliverability limits.
- [ ] Re-test the honeypot spam field and the rate limiter (3 submissions / 10 minutes per IP) still behave as expected in production.

## 5. Submit the sitemap to Google Search Console

- [ ] Verify domain ownership in [Google Search Console](https://search.google.com/search-console).
- [ ] Submit `https://<your-domain>/sitemap.xml` under **Sitemaps**.
- [ ] Confirm `https://<your-domain>/robots.txt` correctly allows crawling and references the sitemap (it's generated dynamically from `src/app/robots.ts` — no manual file to check in, just verify the live output).
- [ ] Request indexing for the homepage and a few key service pages to speed up initial discovery.

## 6. Verify the Google Business Profile link

- [ ] Confirm the address in `src/data/site.ts` matches your real, verified Google Business Profile listing exactly.
- [ ] If you have a live GBP listing, consider adding its URL somewhere appropriate (e.g. footer or contact page) and cross-check that the `localBusinessSchema()` builder in `src/lib/schema.ts` (available but not currently wired into a page) reflects the same details if you choose to add it to a page's JSON-LD.

## 7. Set up GA4

- [ ] Create (or confirm) a GA4 property and web data stream for the real domain.
- [ ] Set `NEXT_PUBLIC_GA_ID` in production to that stream's Measurement ID.
- [ ] After deploying, open the site, interact with it (submit the contact form, click a few CTAs, visit a couple of service pages), then check **GA4 → Reports → Realtime** to confirm events are arriving (`contact_form_submit`, `cta_click`, `service_page_view`).
- [ ] Confirm GA4 is fully absent (no script, no cookies) on any preview/staging deployment where `NEXT_PUBLIC_GA_ID` is intentionally left unset.

## 8. Run a final Lighthouse audit

- [ ] Run Lighthouse (Chrome DevTools → Lighthouse, or `npx lighthouse <url> --view`) against the **production** deployment (not localhost) for at least: homepage, one service category page, one service detail page, the portfolio hub, a portfolio case study, and the contact page.
- [ ] Confirm Performance, Accessibility, Best Practices, and SEO scores are all in the green (90+) on both mobile and desktop presets.
- [ ] Re-check Core Web Vitals specifically (LCP, CLS, INP) since Lighthouse's lab data can differ from real-world field data — cross-check against **Vercel Speed Insights** and/or the GA4/Search Console Core Web Vitals report after the site has real traffic.
- [ ] If any score regresses below 90, check whether it's caused by content added during steps 1–2 above (e.g. large uncompressed images) before assuming a code issue — new project photos in particular should be compressed/appropriately sized before adding to `/public/images`.

## 9. Final sanity checks

- [ ] `npm run build` completes with no errors or warnings.
- [ ] Click through every nav link, footer link, and CTA button on a production preview to confirm nothing 404s.
- [ ] Confirm `/privacy-policy` and `/terms-of-service` no longer show the "template content" disclaimer once legal review (step 1) is complete — or keep the disclaimer if you intend to keep them as a starting point pending further review.
- [ ] Double-check no `.env.local` file or real API keys were committed to git (`git status`, and check `.gitignore` includes `.env*.local`).
