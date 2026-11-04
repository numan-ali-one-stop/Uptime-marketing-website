import { AnimatedGroup } from "@/components/ui/animated-group";
import { GradientText } from "@/components/ui/gradient-text";
import { Section } from "@/components/ui/section";
import { SectionImage } from "@/components/ui/section-image";
import { pagePhotos } from "@/data/photos";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type ContactMapProps = {
  className?: string;
};

/**
 * Shows an embedded map once `mapEmbedUrl` is set in @/data/site.ts (Google
 * Maps → Share → "Embed a map"), and a photo until then.
 */
function ContactMap({ className }: ContactMapProps) {
  return (
    <Section className={cn("bg-bg-base", className)}>
      <AnimatedGroup className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex min-w-0 flex-col items-start gap-4">
          <GradientText className="text-xs font-medium tracking-[0.2em] uppercase">
            Where We Work
          </GradientText>
          <h2>Wherever your business is, we can work with you</h2>
          <p className="text-base">
            We work with clients locally and internationally and run projects
            fully remote, with async updates and calls scheduled around your
            time zone.
          </p>
        </div>

        {siteConfig.mapEmbedUrl ? (
          <div className="border-border relative aspect-[16/10] w-full overflow-hidden rounded-2xl border lg:aspect-[4/3]">
            <iframe
              title="Office location map"
              src={siteConfig.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0"
            />
          </div>
        ) : (
          <div>
            <SectionImage
              photo={pagePhotos.contactWorld}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[16/10] lg:aspect-[4/3]"
            />
          </div>
        )}
      </AnimatedGroup>
    </Section>
  );
}

export { ContactMap };
