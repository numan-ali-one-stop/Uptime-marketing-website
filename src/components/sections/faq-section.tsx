import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs as siteFaqs } from "@/data/faqs";
import { cn } from "@/lib/utils";
import type { Faq } from "@/types/faqs";

type FaqSectionProps = {
  faqs?: Faq[];
  eyebrow?: string;
  title?: string;
  className?: string;
};

function FaqSection({
  faqs = siteFaqs,
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  className,
}: FaqSectionProps) {
  return (
    <Section className={cn("bg-bg-base", className)}>
      <AnimatedGroup className="flex flex-col items-center">
        <SectionHeading eyebrow={eyebrow} title={title} align="center" />

        <Accordion type="single" collapsible className="mt-8 w-full max-w-3xl md:mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`faq-${i}`}>
              <AccordionTrigger className="text-text-primary text-left text-base font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-text-secondary">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedGroup>
    </Section>
  );
}

export { FaqSection };
