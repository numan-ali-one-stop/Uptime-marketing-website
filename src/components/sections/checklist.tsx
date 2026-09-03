"use client";

import { CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

const STAGGER = 0.08;
const DURATION = 0.5;
const FADE_UP_DISTANCE = 16;

function Checklist({ items }: { items: string[] }) {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: shouldReduceMotion ? undefined : { staggerChildren: STAGGER },
    },
  };

  const item: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: FADE_UP_DISTANCE },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : DURATION },
    },
  };

  return (
    <motion.ul
      className="flex flex-col gap-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      {items.map((label) => (
        <motion.li
          key={label}
          variants={item}
          className="flex items-center gap-3"
        >
          <CheckCircle2
            className="text-accent size-5 shrink-0"
            aria-hidden="true"
          />
          <span className="text-text-primary text-sm sm:text-base">
            {label}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export { Checklist };
