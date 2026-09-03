import * as React from "react";

import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
  containerClassName?: string;
};

function Section({
  id,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      data-slot="section"
      className={cn("py-20 md:py-28 lg:py-32", className)}
      {...props}
    >
      <div className={cn("mx-auto max-w-7xl px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export { Section };
