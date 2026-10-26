import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl space-y-3 ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      {intro && <p className="text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="glow-orb -top-24 left-1/4 h-72 w-72 bg-pink" />
      <div className="glow-orb -top-10 right-1/4 h-72 w-72 bg-violet" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="animate-rise max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink">{eyebrow}</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
          {intro && <p className="max-w-2xl text-lg text-muted-foreground">{intro}</p>}
        </div>
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-6xl px-5 py-20 ${className}`}>{children}</section>;
}
