import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ImageOff, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { TechBadges } from "./TechBadges";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group card-surface gradient-border flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-card">
      <Link to="/projects/$slug" params={{ slug: project.slug }} className="flex flex-1 flex-col">
        <div className="aspect-[16/10] overflow-hidden border-b border-border bg-surface">
          {project.image ? (
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="grid h-full place-items-center text-muted-foreground">
              <ImageOff aria-hidden />
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-pink">{project.category}</p>
          <h3 className="flex items-start justify-between gap-3 text-xl font-semibold">
            {project.title}
            <ArrowUpRight size={20} className="mt-1 shrink-0 text-muted-foreground transition-colors group-hover:text-pink" />
          </h3>
          <p className="text-sm text-muted-foreground">{project.short}</p>
          <div className="mt-auto pt-2">
            <TechBadges items={project.technologies.slice(0, 4)} />
          </div>
        </div>
      </Link>
      {project.liveUrl && (
        <div className="px-6 pb-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex w-full items-center justify-center gap-2 text-sm"
          >
            View live site <ExternalLink size={14} />
          </a>
        </div>
      )}
    </article>
  );
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  if (!projects.length)
    return <p className="card-surface p-10 text-center text-muted-foreground">No projects in this category yet.</p>;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </div>
  );
}
