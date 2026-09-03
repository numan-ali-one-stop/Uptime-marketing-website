import { Quote } from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";

function TestimonialsSection() {
  return (
    <Section className="bg-bg-surface">
      <SectionHeading
        eyebrow="Client Feedback"
        title="What our clients say"
        align="center"
        className="mx-auto"
      />

      <AnimatedGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="border-border/60 flex h-full flex-col gap-4 rounded-2xl border p-6"
          >
            <Quote className="text-text-muted size-5" aria-hidden="true" />
            <blockquote className="text-text-secondary text-sm italic">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-auto text-sm">
              <span className="text-text-primary font-medium">
                {testimonial.name}
              </span>
              <span className="text-text-muted">
                {" "}
                — {testimonial.role}, {testimonial.company}
              </span>
            </figcaption>
          </figure>
        ))}
      </AnimatedGroup>
    </Section>
  );
}

export { TestimonialsSection };
