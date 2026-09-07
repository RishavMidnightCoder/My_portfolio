import {
  ArrowRight,
  ExternalLink,
  Link2,
  PhoneCall,
  LayoutTemplate,
  Terminal,
  Server,
  Lock,
  Microscope,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "UTTM — Link Management SaaS",
    description:
      "A multi-tenant URL shortening and link management SaaS I built end-to-end: short URLs & QR codes, marketing campaigns, role-based access control, per-org branding, and a plan/billing system.",
    icon: Link2,
    accent: "#7C9CFF",
    tags: ["React", "NestJS", "MongoDB", "RBAC"],
    demoUrl: null,
    note: "Private client codebase",
  },
  {
    id: 2,
    title: "Agentic AI Voice Calling Platform",
    description:
      "An agentic AI voice-calling platform for automated loan/EMI repayment collections — Gemini API integration for real-time token-by-token call responses, plus role-based employee and manager dashboards.",
    icon: PhoneCall,
    accent: "#5FD9A0",
    tags: ["React", "NestJS", "Gemini API", "Agentic AI"],
    demoUrl: null,
    note: "Private client codebase",
  },
  {
    id: 3,
    title: "Multi-Site CMS Platform",
    description:
      "Delivered multiple country-specific websites on a single Payload CMS backend for a US-based client, building the Next.js frontend and CMS collections wired into the pages.",
    icon: LayoutTemplate,
    accent: "#F2B14C",
    tags: ["Next.js", "Payload CMS", "Strapi"],
    demoUrl: null,
    note: "Private client codebase",
  },
  {
    id: 4,
    title: "LLM Terminal CLI",
    description:
      "A Node.js terminal chat assistant powered by the Groq SDK and Llama 3.3 70B, with MongoDB-backed persistent memory and streaming responses, plus a companion Next.js chat frontend with SSE streaming and voice input.",
    icon: Terminal,
    accent: "#C792EA",
    tags: ["Node.js", "Groq/Llama", "Next.js", "SSE"],
    demoUrl: "https://github.com/RishavMidnightCoder/llm-terminal-ui",
  },
  {
    id: 5,
    title: "Task Manager API (FastAPI)",
    description:
      "A FastAPI backend built to explore Python's ecosystem coming from a NestJS background — JWT auth, PostgreSQL, and a module-per-feature folder structure.",
    icon: Server,
    accent: "#6FCF97",
    tags: ["FastAPI", "PostgreSQL", "JWT"],
    demoUrl: "https://github.com/RishavMidnightCoder/FastAPI-Backend-Python-",
  },
  {
    id: 6,
    title: "File Vault: Secure & Decentralized File Storage",
    description:
      "A capstone project providing a secure, decentralized file storage solution designed to ensure data privacy, integrity, and accessibility.",
    icon: Lock,
    accent: "#EF7C6B",
    tags: ["Access Control", "AES", "Blockchain"],
    demoUrl: "https://github.com/RishavMidnightCoder/File-Vault",
  },
  {
    id: 7,
    title: "ML-Based Skin Detection Techniques",
    description:
      "A machine learning pipeline using Scikit-learn, OpenCV, and PyTorch (SVM and CNN models) to detect and classify skin regions in images.",
    icon: Microscope,
    accent: "#4FC3D9",
    tags: ["Machine Learning", "PyTorch", "OpenCV"],
    demoUrl: "https://github.com/RishavMidnightCoder/Ml-based-skin-detection-technique",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A mix of professional platforms built at Wesoftek Solutions and
          personal projects, spanning full-stack SaaS, agentic AI, and
          machine learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group relative bg-card rounded-lg overflow-hidden shadow-xs card-hover pl-1"
                style={{ borderLeft: `3px solid ${project.accent}` }}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="p-3 rounded-full shrink-0"
                      style={{ backgroundColor: `${project.accent}1A` }}
                    >
                      <Icon
                        className="h-5 w-5"
                        style={{ color: project.accent }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold pt-1.5">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-border/50">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        View code
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Lock size={14} />
                        {project.note || "Not publicly available"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/RishavMidnightCoder"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};