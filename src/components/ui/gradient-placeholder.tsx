import { cn } from "@/lib/utils";

const GRADIENTS = [
  "linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)",
  "linear-gradient(135deg, var(--accent-secondary) 0%, var(--accent-glow) 100%)",
  "linear-gradient(135deg, var(--accent-glow) 0%, var(--accent) 100%)",
];

type GradientPlaceholderProps = {
  className?: string;
  label?: string;
  index?: number;
};

/**
 * Stands in for a real image (`next/image`) wherever no asset file exists
 * yet. Wrap in a `relative` container with a fixed aspect ratio (e.g.
 * `aspect-video`) so the layout is stable before real media arrives.
 */
function GradientPlaceholder({
  className,
  label,
  index = 0,
}: GradientPlaceholderProps) {
  return (
    <div
      className={cn("absolute inset-0 flex items-center justify-center", className)}
      style={{ backgroundImage: GRADIENTS[index % GRADIENTS.length] }}
      aria-hidden={label ? undefined : "true"}
    >
      {label ? (
        <span className="font-heading px-6 text-center text-lg font-semibold text-white/90">
          {label}
        </span>
      ) : null}
    </div>
  );
}

export { GradientPlaceholder };
