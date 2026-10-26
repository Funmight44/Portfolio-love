import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { services } from "@/data/services";
import { PageHeader, Section } from "@/components/common/SectionHeading";
import { CTASection } from "@/components/common/CTASection";

export const Route = createFileRoute("/services")({
  head: () =>
    pageMeta("Services", "Frontend development, n8n and AI automation, and data entry and administrative support services."),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={<>Services that <span className="text-gradient">save you time</span></>}
        intro="Pick one area or combine them — a website, the automations behind it, and the data that keeps it running."
      />
      <Section className="space-y-6">
        {services.map(({ id, title, icon: Icon, summary, items }) => (
          <article key={id} id={id} className="card-surface gradient-border grid gap-8 p-7 md:grid-cols-[1fr_1.4fr] md:p-10">
            <div className="space-y-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
                <Icon size={26} />
              </span>
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="text-muted-foreground">{summary}</p>
              <Link to="/contact" className="btn-primary !px-5 !py-2.5 text-sm">
                Discuss this service <ArrowRight size={16} />
              </Link>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {items.map((i) => (
                <li key={i} className="flex gap-3 rounded-xl border border-border bg-surface p-4 text-sm">
                  <Check size={18} className="mt-0.5 shrink-0 text-pink" /> {i}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </Section>
      <CTASection />
    </>
  );
}
