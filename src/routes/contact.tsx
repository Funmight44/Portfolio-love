import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, CalendarCheck } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { site } from "@/data/site";
import { PageHeader, Section } from "@/components/common/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { getSocialLinks } from "@/components/common/SocialLinks";

export const Route = createFileRoute("/contact")({
  head: () => pageMeta("Contact", "Get in touch with Funmilayo Akano about websites, automations or data entry work."),
  component: Contact,
});

function Contact() {
  const links = getSocialLinks();
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's <span className="text-gradient">work together</span></>}
        intro="Have a question or a project in mind? Send a message and I'll get back to you."
      />
      <Section className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <ContactForm />
        <aside className="space-y-4">
          <div className="card-surface flex items-center gap-3 p-5">
            <MapPin className="text-pink" size={20} /> Based in {site.location}
          </div>
          {links.map(({ label, href, icon: Icon, text }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="card-surface flex items-center gap-3 p-5 hover:border-violet">
              <Icon className="text-pink" size={20} /> {text}
            </a>
          ))}
          <div className="card-surface space-y-3 p-6">
            <CalendarCheck className="text-violet" />
            <h2 className="font-semibold">Prefer to talk it through?</h2>
            <p className="text-sm text-muted-foreground">Book a consultation to discuss your project or business problem.</p>
            <Link to="/consultation" className="btn-outline !py-2 text-sm">Book a consultation</Link>
          </div>
        </aside>
      </Section>
    </>
  );
}
