import { Code2, Workflow, Database, type LucideIcon } from "lucide-react";

export interface ServiceCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  items: string[];
}

export const services: ServiceCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development & Website Design",
    icon: Code2,
    summary: "Clean, responsive websites and interfaces that look good and work on every screen.",
    items: [
      "Responsive website development",
      "React.js interfaces",
      "HTML, CSS and JavaScript development",
      "Website redesign and UI improvements",
      "Landing pages and portfolio websites",
      "Mobile-friendly layouts and accessibility improvements",
    ],
  },
  {
    id: "automation",
    title: "AI & Automation",
    icon: Workflow,
    summary: "n8n workflows and AI assistants that take repetitive work off your plate.",
    items: [
      "n8n workflow automation",
      "AI-powered customer support workflows",
      "Email classification and automated responses",
      "Website live chat integrations",
      "Business process automation",
      "Google Sheets integrations and notifications",
      "Workflow testing, troubleshooting and optimisation",
    ],
  },
  {
    id: "data",
    title: "Data Entry & Administrative Support",
    icon: Database,
    summary: "Careful, accurate handling of your data, spreadsheets and documents.",
    items: [
      "Accurate data entry and organisation",
      "Spreadsheet management",
      "Data cleaning and formatting",
      "Document formatting",
      "Online research and information collection",
      "Proofreading and document editing",
    ],
  },
];

export const serviceOptions = [
  "Frontend Development",
  "AI & Automation",
  "Data Entry & Admin Support",
  "Not sure yet",
];
