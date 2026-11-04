import { AnimatedGroup } from "@/components/ui/animated-group";
import { Section } from "@/components/ui/section";
import { SectionImage } from "@/components/ui/section-image";
import { teamPhoto } from "@/data/service-images";
import { cn } from "@/lib/utils";

const STORY_PARAGRAPHS = [
  "Uptime Marketing started with a simple observation: most businesses don't need more vendors, they need one partner who actually understands how development, AI, search and marketing fit together. Too often, those pieces get handled by disconnected teams that never quite align.",
  "So we built an agency around that gap — engineers, designers, and growth specialists working from the same plan instead of separate briefs. Whether it's a mobile app, an AI agent, or a search strategy, the work is designed to reinforce the same business goal, not compete for credit.",
  "Today we work with businesses locally and internationally, across industries and company sizes, but the approach hasn't changed: understand the actual problem first, then build the specific thing that solves it.",
];

type AboutStoryProps = {
  className?: string;
};

function AboutStory({ className }: AboutStoryProps) {
  return (
    <Section className={cn("bg-bg-base", className)}>
      <AnimatedGroup className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex min-w-0 flex-col gap-4">
          <h2>Our Story</h2>
          {STORY_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="text-base">
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <SectionImage
            photo={{
              src: teamPhoto,
              alt: "A technology team working in a modern office",
            }}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[16/10] lg:aspect-[4/3]"
          />
        </div>
      </AnimatedGroup>
    </Section>
  );
}

export { AboutStory };
