import { categories, type ProjectCategory } from "@/data/projects";

export function ProjectFilter({
  value,
  onChange,
}: {
  value: ProjectCategory | "All";
  onChange: (v: ProjectCategory | "All") => void;
}) {
  const options = ["All", ...categories] as const;
  return (
    <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = o === value;
        return (
          <button
            key={o}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(o)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active
                ? "bg-gradient-brand text-primary-foreground shadow-glow"
                : "border border-border text-muted-foreground hover:border-violet hover:text-foreground"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
