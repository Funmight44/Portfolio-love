import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { PageHeader, Section } from "@/components/common/SectionHeading";
import { ConsultationForm } from "@/components/forms/ConsultationForm";

export const Route = createFileRoute("/consultation")({
  head: () => pageMeta("Book a Consultation", "Request a consultation to discuss your website, automation or data project."),
  component: Consultation,
});

function Consultation() {
  return (
    <>
      <PageHeader
        eyebrow="Consultation"
        title={<>Let's talk about your <span className="text-gradient">project</span></>}
        intro="Describe your project or business challenge and when you'd like to meet. I'll follow up to arrange a time."
      />
      <Section className="max-w-3xl">
        <ConsultationForm />
      </Section>
    </>
  );
}
