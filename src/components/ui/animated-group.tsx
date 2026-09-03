"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { cn } from "@/lib/utils";

type AnimatedGroupProps = Omit<
  React.ComponentProps<"div">,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"
> & {
  stagger?: number;
  duration?: number;
};

const FADE_UP_DISTANCE = 16;

function AnimatedGroup({
  className,
  children,
  stagger = 0.08,
  duration = 0.5,
  ...props
}: AnimatedGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: shouldReduceMotion ? undefined : { staggerChildren: stagger },
    },
  };

  const item: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: FADE_UP_DISTANCE },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : duration },
    },
  };

  return (
    <motion.div
      data-slot="animated-group"
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
      {...props}
    >
      {React.Children.map(children, (child) => {
        // Move (not copy) the child's own className onto its motion.div
        // wrapper so layout classes (flex-basis, grid placement, etc.)
        // still apply — otherwise the unstyled wrapper becomes the real
        // flex/grid item while the child's box styling doubles up on top.
        if (!React.isValidElement(child)) {
          return <motion.div variants={item}>{child}</motion.div>;
        }

        const childClassName =
          typeof (child.props as { className?: unknown }).className === "string"
            ? (child.props as { className?: string }).className
            : undefined;

        return (
          <motion.div variants={item} className={childClassName}>
            {React.cloneElement(
              child as React.ReactElement<{ className?: string }>,
              {
                className: undefined,
              }
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export { AnimatedGroup };
