import { MapPin } from "lucide-react";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type ContactMapProps = {
  className?: string;
};

function ContactMap({ className }: ContactMapProps) {
  return (
    <Section className={cn("bg-bg-base", className)}>
      <SectionHeading
        eyebrow="Find Us"
        title="Where we're based"
        align="center"
        className="mx-auto"
      />

      <div className="border-border bg-bg-surface relative mt-12 aspect-[16/7] w-full overflow-hidden rounded-2xl border">
        {/*
          TODO: replace the iframe `src` below with a real Google Maps embed
          URL for the office address in @/data/site.ts. Get one from
          Google Maps → Share → "Embed a map", or build one without an API
          key using the pattern:
          https://www.google.com/maps?q=<url-encoded address>&output=embed

          `loading="lazy"` defers the iframe's network request until it's
          near the viewport, so it never competes with the page's LCP.
          `tabIndex={-1}` and `aria-hidden` keep this placeholder out of the
          tab order and off assistive tech until it holds a real map —
          remove both once the real `src` above is in place.
        */}
        <iframe
          title="Office location map"
          src="about:blank"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          tabIndex={-1}
          aria-hidden="true"
          className="absolute inset-0 size-full border-0"
        />

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
          <MapPin className="text-accent size-8" aria-hidden="true" />
          <p className="text-text-secondary text-sm font-medium">
            {siteConfig.address}
          </p>
          <p className="text-text-muted text-xs">
            Map embed pending — see code comment
          </p>
        </div>
      </div>
    </Section>
  );
}

export { ContactMap };
