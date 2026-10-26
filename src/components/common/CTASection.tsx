import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection({
  title = "Have a project or a process to improve?",
  text = "Tell me what you need — a website, an automation, or reliable help with your data.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center md:px-16">
        <div className="glow-orb -left-20 -top-20 h-64 w-64 bg-pink" />
        <div className="glow-orb -bottom-24 -right-10 h-64 w-64 bg-violet" />
        <div className="relative mx-auto max-w-2xl space-y-5">
          <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
          <p className="text-muted-foreground">{text}</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link to="/contact" className="btn-primary">
              Let's work together <ArrowRight size={18} />
            </Link>
            <Link to="/consultation" className="btn-outline">
              Book a consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
