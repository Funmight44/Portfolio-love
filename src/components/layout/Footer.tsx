import { Link } from "@tanstack/react-router";
import { navLinks, site } from "@/data/site";
import { SocialLinks } from "@/components/common/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-3">
          <p className="font-display text-lg font-semibold">{site.name}</p>
          <p className="max-w-sm text-sm text-muted-foreground">
            {site.role}. Based in {site.location}, working with clients everywhere.
          </p>
          <SocialLinks />
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/consultation" className="text-muted-foreground hover:text-foreground">
                Consultation
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
