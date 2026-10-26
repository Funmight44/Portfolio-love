import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks, site } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <Link to="/" className="flex items-center gap-2.5 font-display font-semibold" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-sm text-primary-foreground">
            {site.initials}
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="relative rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground data-[status=active]:after:absolute data-[status=active]:after:inset-x-3.5 data-[status=active]:after:-bottom-0.5 data-[status=active]:after:h-0.5 data-[status=active]:after:rounded-full data-[status=active]:after:bg-gradient-brand"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link to="/consultation" className="btn-primary hidden !px-4 !py-2 text-sm md:inline-flex">
            Book a consultation
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-border/60 transition-[max-height,opacity] duration-300 md:hidden ${open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="block rounded-xl px-4 py-3 text-base text-muted-foreground data-[status=active]:bg-card data-[status=active]:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link to="/consultation" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="btn-primary w-full">
              Book a consultation
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
