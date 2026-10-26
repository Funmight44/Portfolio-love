import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { PageHeader, Section, SectionHeading } from "@/components/common/SectionHeading";
import { TechBadges } from "@/components/projects/TechBadges";
import { CTASection } from "@/components/common/CTASection";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta("About", "Learn about Funmilayo Akano, a Nigeria-based frontend developer, automation and data entry specialist."),
  component: About,
});

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Firebase Authentication",
  "n8n", "OpenAI", "AI Agents", "Webhooks", "Google Sheets", "Gmail",
  "Google Drive", "Google Calendar", "Slack",
];

const approach = [
  { step: "01", title: "Understand", text: "Clarify your goals, users and the problem to solve." },
  { step: "02", title: "Plan", text: "Agree on scope and the simplest solution that works." },
  { step: "03", title: "Build & test", text: "Deliver carefully, testing each part as it's built." },
  { step: "04", title: "Refine", text: "Review together and improve based on your feedback." },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About me"
        title={<>Hi, I'm <span className="text-gradient">{site.name}</span></>}
        intro={`A ${site.location}-based frontend developer, AI & automation specialist and data entry specialist.`}
      />
      <Section className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4 text-muted-foreground">
          <p>
            I build responsive websites and web interfaces, design n8n automations powered by AI, and handle data entry
            and document work with care.
          </p>
          <p>
            My projects range from landing pages and store fronts to AI customer support agents, feedback routing
            engines and employee onboarding workflows that connect tools like Gmail, Google Sheets and Slack.
          </p>
          <p>
            Combining these skills means I can help with how your business looks online, how its routine work gets
            done, and how its information is kept organised.
          </p>
        </div>
        <div className="space-y-4">
          {services.map(({ id, title, icon: Icon, summary }) => (
            <div key={id} className="card-surface flex gap-4 p-5">
              <Icon className="mt-1 shrink-0 text-pink" size={22} />
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{summary}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <SectionHeading eyebrow="Toolkit" title="Skills and tools" />
        <div className="mt-8">
          <TechBadges items={skills} />
        </div>
      </Section>
      <Section className="pt-0">
        <SectionHeading eyebrow="Approach" title="How I work" />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((a) => (
            <li key={a.step} className="card-surface p-6">
              <span className="text-gradient font-display text-3xl font-semibold">{a.step}</span>
              <h3 className="mt-3 font-semibold">{a.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{a.text}</p>
            </li>
          ))}
        </ol>
      </Section>
      <CTASection />
    </>
  );
}
