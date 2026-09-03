import * as React from "react";

import { cn } from "@/lib/utils";

type GradientTextProps = React.ComponentProps<"span">;

function GradientText({ className, ...props }: GradientTextProps) {
  return (
    <span
      data-slot="gradient-text"
      className={cn(
        "bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-secondary)_100%)] bg-clip-text text-transparent",
        className
      )}
      {...props}
    />
  );
}

export { GradientText };
