import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Lightbulb, Target, TrendingUp, ShieldCheck } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { Section, SectionHeading } from "@/components/common/SectionHeading";
import { ProjectGrid } from "@/components/projects/ProjectCard";
import { CTASection } from "@/components/common/CTASection";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "Frontend Developer, AI & Automation, Data Entry",
      "Funmilayo Akano builds modern websites, creates n8n and AI automations, and delivers accurate data entry for businesses.",
    ),
  component: Home,
});

const values = [
  { icon: ShieldCheck, title: "Professionalism", text: "Clear communication and dependable delivery." },
  { icon: Target, title: "Accuracy", text: "Careful attention to detail in code and data." },
  { icon: Lightbulb, title: "Problem-solving", text: "Practical solutions to real business problems." },
  { icon: TrendingUp, title: "Continuous improvement", text: "Always learning new tools and better methods." },
];

function Home() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="glow-orb -left-32 top-10 h-96 w-96 bg-pink" />
        <div className="glow-orb right-0 top-40 h-96 w-96 bg-deep-violet" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-[1.3fr_1fr] md:py-28">
          <div className="animate-rise space-y-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-gradient-brand" /> {site.name} · {site.location}
            </p>
            <h1 className="text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              Building <span className="text-gradient">modern websites.</span> Creating smarter automations. Delivering
              accurate data.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              I'm a frontend developer, AI & automation specialist and data entry specialist helping people and
              businesses look better online, automate repetitive work and keep their data in order.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">
                View my projects <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-outline">
                Let's work together
              </Link>
            </div>
          </div>

          <div className="animate-rise relative mx-auto w-full max-w-sm [animation-delay:150ms]">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-brand opacity-70 blur-xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card">
              {site.profileImage ? (
                <img src={site.profileImage} alt={`Portrait of ${site.name}`} className="h-full w-full object-cover object-top" />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 bg-surface">
                  <span className="text-gradient font-display text-8xl font-semibold">{site.initials}</span>
                  <span className="text-sm text-muted-foreground">{site.name}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="Expertise" title="Three skills, one reliable partner" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map(({ id, title, icon: Icon, summary }) => (
            <div key={id} className="card-surface gradient-border p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                <Icon size={22} />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{summary}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Selected work" title="Featured projects" />
          <Link to="/projects" className="btn-outline">
            All projects <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-10">
          <ProjectGrid projects={featured} />
        </div>
      </Section>

      <Section className="pt-0">
        <div className="card-surface grid gap-10 p-8 md:grid-cols-2 md:p-12">
          <SectionHeading
            eyebrow="Services"
            title="How I can help"
            intro="From a polished website to automated customer support and well-organised spreadsheets."
          />
          <ul className="space-y-4">
            {services.flatMap((s) => s.items.slice(0, 2)).map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-pink" /> {item}
              </li>
            ))}
            <li>
              <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-gradient">
                See all services <ArrowRight size={14} className="text-violet" />
              </Link>
            </li>
          </ul>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading eyebrow="Why work with me" title="What you can expect" center />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card-surface p-6">
              <Icon className="text-violet" size={24} />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
