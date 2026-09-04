import { ProcessTimeline } from "./process-timeline";

const STEPS = [
  {
    title: "Discover",
    description:
      "We start by understanding your business, your goals and the constraints you're working within.",
  },
  {
    title: "Strategize",
    description:
      "We turn that understanding into a clear plan, prioritized around what will move the needle fastest.",
  },
  {
    title: "Build",
    description:
      "Our team designs and builds the solution, with regular check-ins so there are no surprises at launch.",
  },
  {
    title: "Grow",
    description:
      "After launch we monitor performance and keep optimizing so results compound over time.",
  },
];

type ProcessSectionProps = {
  className?: string;
};

function ProcessSection({ className }: ProcessSectionProps) {
  return (
    <ProcessTimeline
      eyebrow="How We Work"
      title="A simple process from idea to execution."
      steps={STEPS}
      className={className}
    />
  );
}

export { ProcessSection };
