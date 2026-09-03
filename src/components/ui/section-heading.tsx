import * as React from "react";

import { GradientText } from "@/components/ui/gradient-text";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      data-slot="section-heading"
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <GradientText className="text-xs font-medium tracking-[0.2em] uppercase">
          {eyebrow}
        </GradientText>
      ) : null}
      <h2>{title}</h2>
      {subtitle ? <p className="text-lg">{subtitle}</p> : null}
    </div>
  );
}

export { SectionHeading };
