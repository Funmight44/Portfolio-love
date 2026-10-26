import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { faqs } from "@/data/faq";
import { PageHeader, Section } from "@/components/common/SectionHeading";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { CTASection } from "@/components/common/CTASection";

export const Route = createFileRoute("/faq")({
  head: () => pageMeta("FAQ", "Answers about services, n8n automations, timelines, quotes and getting started."),
  component: FAQ,
});

function FAQ() {
  return (
    <>
      <PageHeader eyebrow="FAQ" title={<>Frequently asked <span className="text-gradient">questions</span></>} />
      <Section className="max-w-3xl">
        <FAQAccordion items={faqs} />
      </Section>
      <CTASection title="Still have a question?" text="Send me a message and I'll be happy to help." />
    </>
  );
}
