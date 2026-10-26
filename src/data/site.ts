
/**
 * Personal details used across the site.
 * Leave a field as an empty string to hide it everywhere it is used.
 */
export const site = {
  name: "Funmilayo Akano",
  initials: "FA",
  role: "Frontend Developer · AI & Automation · Data Entry",
  location: "Nigeria",
  email: "akanofunmilayo44@gmail.com",
  linkedin: "",
  github: "",
  upwork: "",
  fiverr: "",
  whatsapp: "2347067325018", // international format without "+", e.g. 2348012345678
  profileImage: "/profilepic.png",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;
