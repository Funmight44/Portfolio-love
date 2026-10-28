/**
 * Project data. Descriptions are based only on the supplied screenshots.
 * Add liveUrl / githubUrl / contribution when available — empty values are hidden.
 */
export type ProjectCategory = "Frontend Development" | "AI & Automation" | "Data Entry";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  short: string;
  details?: string;
  technologies: string[];
  image?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  liveUrl?: string;
  githubUrl?: string;
  contribution?: string;
  featured?: boolean;
}

export const categories: ProjectCategory[] = ["Frontend Development", "AI & Automation", "Data Entry"];

export const projects: Project[] = [
  {
    slug: "autocare-feedback-engine",
    title: "AutoCare Feedback Engine",
    category: "AI & Automation",
    short:
      "An n8n workflow that collects customer feedback, runs AI sentiment analysis and routes each response to the right queue.",
    details:
      "Feedback arrives through a form, receives an ID and timestamp, is checked against previous negative feedback, and is analysed by an AI sentiment step. Results are stored in Google Sheets and routed to one of four paths, with Gmail notifications sent along each path. Scheduled triggers handle response approvals, and a webhook supplies data to a dashboard.",
    technologies: ["n8n", "OpenAI", "Google Sheets", "Gmail", "Webhooks"],
    image: "/projects/Autocare_feedback_engine_pic.png",
    features: [
      "Form-triggered feedback intake with ID and timestamp",
      "AI sentiment analysis",
      "Routing to Ready to post, Private queue, Manager alert and Human review",
      "Scheduled approval workflows for drafted responses",
      "Webhook endpoint feeding a live dashboard",
    ],
    featured: true,
  },
  {
    slug: "autocare-reputation-dashboard",
    title: "AutoCare Reputation Dashboard",
    category: "Frontend Development",
    short:
      "A live dashboard for monitoring customer feedback, sentiment, severity and routing across AutoCare locations.",
    details:
      "Companion dashboard to the AutoCare Feedback Engine. It shows summary cards for total, positive and negative feedback, manager alerts, private queue, human review and ready-to-post items, with search, filters and charts.",
    technologies: ["Frontend", "Data visualisation", "n8n webhook"],
    image: "/projects/dashboard_pic.png",
    features: [
      "Summary metric cards with percentages",
      "Search by customer, feedback ID, email, phone or text",
      "Filters for location, sentiment, severity, route, status, approval and date",
      "Sentiment, severity and routing distribution charts",
    ],
    featured: true,
  },
  {
    slug: "email-customer-support-agent",
    title: "Email & Live Chat Customer Support Agent",
    category: "AI & Automation",
    short:
      "AI support workflows that classify incoming emails and chat messages, answer from business policies, and hand off to a human when needed.",
    details:
      "The email flow validates incoming Gmail messages, classifies them with AI, and replies using a support agent that searches business policies in Google Sheets. The chat flow receives messages via webhook, uses an AI agent with chat memory, and either responds directly or logs a human handoff and notifies by email.",
    technologies: ["n8n", "OpenAI", "AI Agent", "Gmail", "Google Sheets", "Webhooks"],
    image: "/projects/image_1.png",
    features: [
      "Email validation and AI support classification",
      "Policy lookup from Google Sheets",
      "Website live chat via webhook with conversation memory",
      "Human handoff with logging and email alert",
    ],
    featured: true,
  },
  {
    slug: "employee-onboarding-workflow",
    title: "Employee Onboarding Workflow",
    category: "AI & Automation",
    short:
      "An n8n automation that onboards new hires from a Google Sheet: folders, calendar events, welcome emails and Slack channels.",
    details:
      "When a row is added to Google Sheets, the workflow creates a Google Drive folder, schedules a Google Calendar event, sends a Gmail message, then routes the employee by department to invite them to the right Slack channel.",
    technologies: ["n8n", "Google Sheets", "Google Drive", "Google Calendar", "Gmail", "Slack", "JavaScript"],
    image: "/projects/employee_onboarding_work_flow.png",
    features: [
      "Google Sheets trigger on new rows",
      "Automatic Drive folder and Calendar event creation",
      "Welcome email via Gmail",
      "Department-based Slack channel invites",
    ],
  },
  {
    slug: "homehaven",
    title: "HomeHaven",
    category: "Frontend Development",
    short: "A real-estate landing page: “Your Gateway to Dream Homes”.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects/HomeHaven.png",
    features: ["Full-screen hero with property imagery", "Navigation for Home, About, Testimonial and Contact"],
    liveUrl: "https://homehaven2.netlify.app",
    featured: true,
  },
  {
    slug: "lahyor-ventures",
    title: "Lahyor Ventures Store",
    category: "Frontend Development",
    short: "An online store front with men, women and kids categories, search, wishlist and cart.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects/lahyorStore.png",
    features: ["Category navigation", "Product search", "Wishlist, account and cart icons"],
    liveUrl: "https://lahyorstore2.netlify.app",
  },
  {
    slug: "shopify-store-ui",
    title: "Shopify-style Store UI",
    category: "Frontend Development",
    short: "An e-commerce interface with promo banner, product search and a featured collection hero.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects/shopify.png",
    features: ["Announcement bar", "Search bar", "Featured product hero with call to action"],
    liveUrl: "https://shopify001.netlify.app",
  },
  {
    slug: "user-info-app",
    title: "User Info App",
    category: "Frontend Development",
    short: "A profile management app with account creation and login using Firebase authentication.",
    technologies: ["JavaScript", "Firebase Authentication"],
    image: "/projects/users-info-app.png",
    features: ["Create account", "Login", "Profile management"],
    liveUrl: "https://form-va.netlify.app",
  },
  {
    slug: "to-do-list",
    title: "To-Do List",
    category: "Frontend Development",
    short: "A task manager to add, search and delete tasks.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects/todo-pic.png",
    features: ["Add tasks", "Search tasks", "Delete tasks"],
    liveUrl: "https://event-manager-js.netlify.app",
  },
  {
    slug: "todo-react",
    title: "Todo App (React)",
    category: "Frontend Development",
    short: "A React todo app with user login, personal task lists and a clean card interface.",
    details:
      "Users log in to see their own todo list. Tasks can be added through an input form, checked off, and deleted individually. The header shows the logged-in user's name with a logout option.",
    technologies: ["React", "JavaScript", "CSS"],
    image: "/projects/todo-react.png",
    features: ["User login and logout", "Add tasks through a form", "Check off and delete tasks", "Personalised header with user name"],
    liveUrl: "https://todo-05.netlify.app",
  },
  {
  slug: "cinemate",
  title: "Cinemate",
  category: "Frontend Development",
  short: "A movie discovery app featuring categorized movies and search functionality to help users explore and find films.",
  technologies: ["JavaScript", "HTML", "CSS"],
  image: "/projects/project-pic6.png",
  features: ["Movie discovery", "Categorized content", "Search functionality"],
  liveUrl: "https://movie-app-cinema.netlify.app",
},
{
  slug: "quiz-app",
  title: "Quiz App",
  category: "Frontend Development",
  short: "A fun interactive quiz app that tests users' JavaScript knowledge, built with HTML, CSS, and JavaScript.",
  technologies: ["HTML", "CSS", "JavaScript"],
  image: "/projects/quize-pic.png",
  features: ["JavaScript knowledge quizzes", "Interactive questions", "Answer selection"],
  liveUrl: "https://javascript-quiz-applictation.netlify.app",
},
{
  slug: "lahyor-ventures",
  title: "Lahyor Ventures",
  category:  "Frontend Development",
  short: "An e-commerce platform for browsing and purchasing products, featuring an AI-powered chat widget that assists customers with inquiries and support.",
  technologies: ["React", "JavaScript", "CSS", "n8n", "AI Automation"],
  image: "/projects/lahyorwebsite.png",
  features: [
    "Product browsing and shopping",
    "E-commerce order management",
    "AI-powered customer support chat widget",
    "Automated customer inquiries"
  ],
  liveUrl: "https://lahyorventures.netlify.app",
},
  {
    slug: "linkedin-post-ai-agent",
    title: "LinkedIn Post AI Agent",
    category: "AI & Automation",
    short:
      "An n8n AI agent that drafts LinkedIn posts on a schedule, sends them to Telegram for approval, and publishes approved posts.",
    details:
      "A scheduled trigger reads post topics from Google Sheets. An AI agent with OpenAI, memory and Tavily search drafts the post, updates the sheet and sends it to Telegram. A separate Telegram trigger handles approval: approved posts are published to LinkedIn and the sheet is updated.",
    technologies: ["n8n", "OpenAI", "Tavily", "Google Sheets", "Telegram", "LinkedIn"],
    image: "/projects/linkedin-post-ai-agent.png",
    features: [
      "Scheduled topic intake from Google Sheets",
      "AI drafting with OpenAI, memory and Tavily web search",
      "Telegram approval step before publishing",
      "Automatic LinkedIn posting and sheet status updates",
    ],
    featured: true,
  },
  {
    slug: "telegram-ai-agent",
    title: "Telegram AI Agent",
    category: "AI & Automation",
    short:
      "A Telegram chatbot built in n8n that answers messages with an AI agent using memory, Gmail and web search tools.",
    details:
      "Incoming Telegram messages trigger an AI agent powered by an OpenAI chat model with simple memory. The agent can send emails through Gmail and run web searches through Tavily, then replies directly in Telegram.",
    technologies: ["n8n", "OpenAI", "Telegram", "Gmail", "Tavily"],
    image: "/projects/telegram-ai-agent.png",
    features: [
      "Telegram trigger for incoming messages",
      "OpenAI chat model with conversation memory",
      "Gmail tool for sending emails",
      "Web search via Tavily HTTP request",
    ],
  },
  {
    slug: "travel-agency-workflow",
    title: "Travel Agency Workflow",
    category: "AI & Automation",
    short:
      "A scheduled n8n workflow that reads traveller rows from Google Sheets and sends pre-trip and post-trip emails automatically.",
    details:
      "On a schedule, the workflow reads rows from Google Sheets and splits them into pre-trip and post-trip paths. Each path loops over the items, formats the message in JavaScript, sends an email via Gmail, updates the sheet row and waits before continuing.",
    technologies: ["n8n", "Google Sheets", "Gmail", "JavaScript"],
    image: "/projects/travel-agency-workflow.png",
    features: [
      "Scheduled trigger reading Google Sheets rows",
      "Separate pre-trip and post-trip branches",
      "Loop-over-items processing with JavaScript formatting",
      "Gmail notifications and sheet status updates",
    ],
  },
  {
    slug: "webhook-sheets-email-workflow",
    title: "Webhook to Sheets & Email Workflow",
    category: "AI & Automation",
    short:
      "An n8n workflow that receives webhook submissions, appends them to Google Sheets and sends an email notification.",
    details:
      "A webhook receives incoming data, a JavaScript step prepares it, the row is appended to Google Sheets, and after a short wait a confirmation or notification email is sent via Gmail.",
    technologies: ["n8n", "Webhooks", "Google Sheets", "Gmail", "JavaScript"],
    image: "/projects/webhook-sheets-email-workflow.png",
    features: [
      "Webhook intake for form or app submissions",
      "JavaScript data preparation",
      "Automatic row append to Google Sheets",
      "Email notification via Gmail",
    ],
  },
  {
    slug: "inventory-data-preparation",
    title: "Inventory Data Preparation",
    category: "Data Entry",
    short:
      "Preparing a multi-record spare-parts inventory in Excel, ready for entry into the company database.",
    details:
      "Spare-parts records organised in Excel with columns for category, item name, SFI code, make, part number, draw number, model number, serial number, expiry date and location on board — formatted and checked for bulk entry.",
    technologies: ["Microsoft Excel", "Data cleansing", "Data formatting"],
    image: "/projects/inventory-data-preparation.png",
    features: [
      "Structured multi-record inventory sheet",
      "Consistent part, model and serial number formatting",
      "Location-on-board tracking",
      "Ready for bulk upload",
    ],
  },
  {
    slug: "inventory-database-entry",
    title: "Inventory Entry into Company Database",
    category: "Data Entry",
    short:
      "Entering over 1,000 spare-parts inventory records into a planned maintenance system (PMS) database.",
    details:
      "Inventory records for the vessel H.S Arya entered into the company's planned maintenance system, covering categories, item names and codes, makes, part and draw numbers, criticality, model numbers and expiry dates.",
    technologies: ["Planned Maintenance System (PMS)", "Data entry", "Accuracy checking"],
    image: "/projects/inventory-database-entry.png",
    features: [
      "1,000+ records entered into the PMS database",
      "Vessel-filtered inventory views",
      "Criticality and expiry date tracking",
      "Consistent item coding",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export function filterProjects(list: Project[], category: ProjectCategory | "All") {
  return category === "All" ? list : list.filter((p) => p.category === category);
}
