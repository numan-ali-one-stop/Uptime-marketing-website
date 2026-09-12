"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

// Uses a plain `outline` (not `ring`/`box-shadow`) for the focus indicator:
// the primary variant's `shadow-[...]` trick for the hover glow transition
// sets `box-shadow` as a literal value that silently overrides a
// box-shadow-based ring, so `outline` is the only mechanism guaranteed not
// to collide with it.
const ctaButtonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-200 outline-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[linear-gradient(135deg,var(--accent-button-start)_0%,var(--accent-button-end)_100%)] text-white shadow-[0_0_0_0_rgba(59,130,246,0)] hover:shadow-[0_0_24px_-4px_var(--accent-glow)] hover:brightness-110",
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
    /** When set, fires a `cta_click` GA4 event with this label on click. */
    trackingLabel?: string;
  };

function CTAButton({
  className,
  variant = "primary",
  asChild = false,
  trackingLabel,
  onClick,
  ...props
}: CTAButtonProps) {
  const Comp = asChild ? Slot.Root : "button";

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (trackingLabel) {
      trackEvent("cta_click", { label: trackingLabel });
    }
    onClick?.(event);
  };

  return (
    <Comp
      data-slot="cta-button"
      data-variant={variant}
      className={cn(ctaButtonVariants({ variant, className }))}
      onClick={handleClick}
      {...props}
    />
  );
}

export { CTAButton, ctaButtonVariants };
