import Link from "next/link";
import { User } from "lucide-react";

import { LinkedinIcon } from "@/components/icons/brand-icons";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { companyInfo } from "@/data/company";
import { cn } from "@/lib/utils";

type AboutTeamProps = {
  className?: string;
};

// Team photos are rendered as gradient avatar placeholders. Once real
// headshots are available, add them at /public/team/<slug>.jpg and swap
// the placeholder div below for a next/image <Image> per member.
function AboutTeam({ className }: AboutTeamProps) {
  return (
    <Section className={cn("bg-bg-base", className)}>
      <SectionHeading
        eyebrow="Our Team"
        title="The people behind the work"
        align="center"
        className="mx-auto"
      />

      <AnimatedGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {companyInfo.team.map((member) => (
          <div key={member.role}>
            <Card className="items-center p-6 text-center">
              <div className="flex size-24 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-secondary)_100%)]">
                <User className="size-10 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base">{member.name}</h3>
              <p className="text-accent text-sm font-medium">{member.role}</p>
              <Link
                href={member.linkedinUrl}
                aria-label={`${member.name} on LinkedIn`}
                className="text-text-muted hover:text-accent mt-1 transition-colors"
              >
                <LinkedinIcon className="size-5" aria-hidden="true" />
              </Link>
            </Card>
          </div>
        ))}
      </AnimatedGroup>
    </Section>
  );
}

export { AboutTeam };
