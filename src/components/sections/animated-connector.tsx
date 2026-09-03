"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type AnimatedConnectorProps = {
  orientation: "horizontal" | "vertical";
  className?: string;
};

function AnimatedConnector({ orientation, className }: AnimatedConnectorProps) {
  const shouldReduceMotion = useReducedMotion();
  const isHorizontal = orientation === "horizontal";

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        isHorizontal ? "h-px w-full" : "h-full w-px",
        "bg-[linear-gradient(90deg,var(--accent)_0%,var(--accent-secondary)_100%)]",
        !isHorizontal &&
          "bg-[linear-gradient(180deg,var(--accent)_0%,var(--accent-secondary)_100%)]",
        className
      )}
      style={{
        transformOrigin: isHorizontal ? "left center" : "center top",
      }}
      initial={{ scaleX: isHorizontal ? 0 : 1, scaleY: isHorizontal ? 1 : 0 }}
      whileInView={{ scaleX: 1, scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
    />
  );
}

export { AnimatedConnector };
