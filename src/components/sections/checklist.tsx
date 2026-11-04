"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

const STAGGER = 0.08;
const DURATION = 0.5;
const FADE_UP_DISTANCE = 16;

export type ChecklistItem = string | { label: string; href: string };

function Checklist({ items }: { items: ChecklistItem[] }) {
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
      {items.map((entry) => {
        const label = typeof entry === "string" ? entry : entry.label;
        return (
          <motion.li
            key={label}
            variants={item}
            className="flex items-center gap-3"
          >
            <CheckCircle2
              className="text-accent size-5 shrink-0"
              aria-hidden="true"
            />
            {typeof entry === "string" ? (
              <span className="text-text-primary text-sm sm:text-base">
                {label}
              </span>
            ) : (
              <Link
                href={entry.href}
                className="text-text-primary hover:text-accent text-sm underline-offset-4 transition-colors hover:underline sm:text-base"
              >
                {label}
              </Link>
            )}
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

export { Checklist };
