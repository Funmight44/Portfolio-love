import { describe, expect, it } from "vitest";
import { filterProjects, projects } from "@/data/projects";
import { site } from "@/data/site";
import { getSocialLinks } from "@/components/common/SocialLinks";
import { validate } from "@/lib/submit-form";
import { submitForm, submitWeb3Form } from "@/lib/submit-form";

describe("portfolio rules", () => {
  it("carries the live links Funmilayo supplied", () => {
    const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));
    expect(bySlug["homehaven"]?.liveUrl).toBe("https://homehaven2.netlify.app");
    expect(bySlug["lahyor-ventures"]?.liveUrl).toBe("https://lahyorstore.netlify.app");
    expect(bySlug["shopify-store-ui"]?.liveUrl).toBe("https://shopify001.netlify.app");
    expect(bySlug["todo-react"]?.liveUrl).toBeUndefined();
    expect(bySlug["user-info-app"]?.liveUrl).toBe("https://form-va.netlify.app");
    expect(bySlug["to-do-list"]?.liveUrl).toBe("https://todo-05.netlify.app");
  });
  it("filters projects by category", () => {
    const ai = filterProjects(projects, "AI & Automation");
    expect(ai.length).toBeGreaterThan(0);
    expect(ai.every((p) => p.category === "AI & Automation")).toBe(true);
    expect(filterProjects(projects, "All")).toHaveLength(projects.length);
  });
  it("rejects invalid emails", () => {
    expect(validate({ email: "nope" }, { email: { required: "x", email: true } })["email"]).toBeTruthy();
    expect(validate({ email: "a@b.co" }, { email: { required: "x", email: true } })["email"]).toBeUndefined();
  });
  it("reports an error when no endpoint is configured", async () => {
    const res = await submitForm(undefined, {});
    expect(res.ok).toBe(false);
    expect((await submitWeb3Form(undefined, {})).ok).toBe(false);
  });
  it("publishes the contact details Funmilayo supplied", () => {
    expect(site.email).toBe("akanofunmilayo44@gmail.com");
    // 07067325018 is the local form of the international number 2347067325018
    expect(site.whatsapp).toBe("2347067325018");
    const links = getSocialLinks();
    expect(links.find((l) => l.label === "Email")?.href).toBe("mailto:akanofunmilayo44@gmail.com");
    expect(links.find((l) => l.label === "WhatsApp")?.href).toBe("https://wa.me/2347067325018");
    expect(links.find((l) => l.label === "WhatsApp")?.text).toBe("+234 706 732 5018");
  });
});
