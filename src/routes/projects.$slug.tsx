import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github, Check } from "lucide-react";
import { getProject } from "@/data/projects";
import { pageMeta } from "@/lib/seo";
import { TechBadges } from "@/components/projects/TechBadges";
import { CTASection } from "@/components/common/CTASection";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageMeta(loaderData.project.title, loaderData.project.short)
      : { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-5 py-32 text-center">
      <h1 className="text-3xl font-semibold">Project not found</h1>
      <Link to="/projects" className="btn-primary mt-6">Back to projects</Link>
    </div>
  ),
  component: ProjectDetail,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </div>
  );
}

function ProjectDetail() {
  const { project: p } = Route.useLoaderData();
  return (
    <>
      <article className="mx-auto max-w-5xl px-5 py-14">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={16} /> All projects
        </Link>
        <header className="animate-rise mt-8 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-pink">{p.category}</p>
          <h1 className="text-4xl font-semibold md:text-5xl">{p.title}</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">{p.short}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            {p.liveUrl && (
              <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
                Live demo <ExternalLink size={16} />
              </a>
            )}
            {p.githubUrl && (
              <a href={p.githubUrl} target="_blank" rel="noreferrer" className="btn-outline">
                View source code <Github size={16} />
              </a>
            )}
          </div>
        </header>

        {p.image && (
          <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-card">
            <img src={p.image} alt={`Screenshot of ${p.title}`} className="w-full" />
          </div>
        )}

        <div className="mt-12 grid gap-10 md:grid-cols-[1.6fr_1fr]">
          <div className="space-y-10">
            {p.details && <Block title="Overview"><p className="text-muted-foreground">{p.details}</p></Block>}
            {p.problem && <Block title="The problem"><p className="text-muted-foreground">{p.problem}</p></Block>}
            {p.solution && <Block title="The solution"><p className="text-muted-foreground">{p.solution}</p></Block>}
            {p.features?.length ? (
              <Block title="Key features">
                <ul className="space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-muted-foreground">
                      <Check size={18} className="mt-1 shrink-0 text-pink" /> {f}
                    </li>
                  ))}
                </ul>
              </Block>
            ) : null}
          </div>
          <aside className="card-surface h-fit space-y-6 p-6">
            <Block title="Technologies"><TechBadges items={p.technologies} /></Block>
            {p.contribution && <Block title="My contribution"><p className="text-sm text-muted-foreground">{p.contribution}</p></Block>}
          </aside>
        </div>
      </article>
      <CTASection title="Want something similar?" />
    </>
  );
}
