import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const ctaButtonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-200 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-secondary)_100%)] text-white shadow-[0_0_0_0_rgba(59,130,246,0)] hover:shadow-[0_0_24px_-4px_var(--accent-glow)] hover:brightness-110",
        secondary:
          "border border-border bg-transparent text-text-primary hover:border-accent/40 hover:text-accent hover:bg-bg-surface",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type CTAButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof ctaButtonVariants> & {
    asChild?: boolean;
  };

function CTAButton({
  className,
  variant = "primary",
  asChild = false,
  ...props
}: CTAButtonProps) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="cta-button"
      data-variant={variant}
      className={cn(ctaButtonVariants({ variant, className }))}
      {...props}
    />
  );
}

export { CTAButton, ctaButtonVariants };
