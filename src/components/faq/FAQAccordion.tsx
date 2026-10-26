import { Plus } from "lucide-react";
import { useId, useState } from "react";

export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`card-surface transition-colors ${isOpen ? "border-violet/60" : ""}`}>
            <h3>
              <button
                type="button"
                id={`${base}-h${i}`}
                aria-expanded={isOpen}
                aria-controls={`${base}-p${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-base font-medium md:text-lg"
              >
                {item.q}
                <Plus
                  size={20}
                  className={`shrink-0 text-pink transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={`${base}-p${i}`}
              role="region"
              aria-labelledby={`${base}-h${i}`}
              className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-muted-foreground">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
