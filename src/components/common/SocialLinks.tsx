import { Github, Linkedin, Mail, MessageCircle, Briefcase } from "lucide-react";
import { site } from "@/data/site";

/** Reads a digits-only phone number back out as a readable international number. */
export function prettyPhone(digits: string) {
  const n = digits.replace(/^0/, "");
  return n.startsWith("234") ? `+234 ${n.slice(3, 6)} ${n.slice(6, 9)} ${n.slice(9)}` : `+${n}`;
}

export function getSocialLinks() {
  return [
    site.email && { label: "Email", href: `mailto:${site.email}`, icon: Mail, text: site.email },
    site.linkedin && { label: "LinkedIn", href: site.linkedin, icon: Linkedin, text: "LinkedIn" },
    site.github && { label: "GitHub", href: site.github, icon: Github, text: "GitHub" },
    site.upwork && { label: "Upwork", href: site.upwork, icon: Briefcase, text: "Upwork" },
    site.fiverr && { label: "Fiverr", href: site.fiverr, icon: Briefcase, text: "Fiverr" },
    site.whatsapp && { label: "WhatsApp", href: `https://wa.me/${site.whatsapp}`, icon: MessageCircle, text: prettyPhone(site.whatsapp) },
  ].filter(Boolean) as { label: string; href: string; icon: typeof Mail; text: string }[];
}

export function SocialLinks() {
  const links = getSocialLinks();
  if (!links.length) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {links.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={label}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-violet hover:text-foreground"
          >
            <Icon size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}
