import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { pageMeta } from "@/lib/seo";
import { filterProjects, projects, type ProjectCategory } from "@/data/projects";
import { PageHeader, Section } from "@/components/common/SectionHeading";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { ProjectGrid } from "@/components/projects/ProjectCard";
import { CTASection } from "@/components/common/CTASection";

export const Route = createFileRoute("/projects/")({
  head: () =>
    pageMeta("Projects", "Websites, n8n AI automations and dashboards built by Funmilayo Akano."),
  component: Projects,
});

function Projects() {
  const [cat, setCat] = useState<ProjectCategory | "All">("All");
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title={<>Selected <span className="text-gradient">work</span></>}
        intro="Websites, interfaces and automations I've built."
      />
      <Section className="space-y-10">
        <ProjectFilter value={cat} onChange={setCat} />
        <ProjectGrid projects={filterProjects(projects, cat)} />
      </Section>
      <CTASection />
    </>
  );
}
