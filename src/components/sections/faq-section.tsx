import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/data/faqs";

function FaqSection() {
  return (
    <Section className="bg-bg-base">
      <AnimatedGroup className="flex flex-col items-center">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          align="center"
        />

        <Accordion type="single" collapsible className="mt-12 w-full max-w-3xl">
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
