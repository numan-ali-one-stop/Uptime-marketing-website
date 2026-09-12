type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a GA4 event via `window.gtag` when it's present (i.e. once the
 * gated GA4 script in the root layout has loaded). No-ops otherwise, so
 * calling this is always safe in dev or when NEXT_PUBLIC_GA_ID is unset.
 */
export function trackEvent(name: string, params?: EventParams): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", name, params);
}
