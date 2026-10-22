import {
  ArrowRight,
  ExternalLink,
  Github,
  Link2,
  PhoneCall,
  School,
  Clapperboard,
  Terminal,
  Server,
  Lock,
  Microscope,
} from "lucide-react";

// Replace the two placeholder live URLs below with your real Vercel links.
const projects = [
  {
    id: 1,
    title: "VELUNE — AI Cinematic Story Platform",
    description:
      "A full stack AI roleplay web app where users play interactive cinematic stories driven by an LLM API. FastAPI backend, Next.js frontend, separate admin and user experiences, and an admin panel for publishing stories.",
    icon: Clapperboard,
    accent: "#E879A8",
    tags: ["FastAPI", "Next.js", "LLM API", "Agentic AI"],
    liveUrl: "https://YOUR-VELUNE-LINK.vercel.app",
    codeUrl: null,
  },
  {
    id: 2,
    title: "Task Manager (Nivora)",
    description:
      "A multi-tenant team task management platform: FastAPI backend with JWT auth, role-based access control with custom roles, teams, projects, tasks and a dashboard, paired with a Next.js frontend. Deployed on Vercel.",
    icon: Server,
    accent: "#6FCF97",
    tags: ["FastAPI", "PostgreSQL", "JWT", "RBAC", "Next.js"],
    liveUrl: "https://YOUR-NIVORA-FRONTEND-LINK.vercel.app",
    codeUrl: "https://github.com/RishavMidnightCoder/FastAPI-Backend-Python-",
  },
  {
    id: 3,
    title: "Sivora — School ERP Platform",
    description:
      "Core team member on a multi-tenant school ERP used by 15+ active schools. Built FastAPI APIs and Angular workflows across Finance & Fees, Accounts, Student Information, Academics, and Front Office, plus OTP login and an agentic AI parent-calling feature.",
    icon: School,
    accent: "#F2B14C",
    tags: ["FastAPI", "PostgreSQL", "Angular", "Agentic AI"],
    liveUrl: null,
    codeUrl: null,
    note: "Private company codebase",
  },
  {
    id: 4,
    title: "UTTM — Link Management SaaS",
    description:
      "A multi-tenant URL shortening and campaign-management SaaS I built end-to-end: short URLs & QR codes, email/OTP authentication, role-based access control, user invitations, and subscription-based feature limits.",
    icon: Link2,
    accent: "#7C9CFF",
    tags: ["React", "NestJS", "MongoDB", "RBAC"],
    liveUrl: null,
    codeUrl: null,
    note: "Private client codebase",
  },
  {
    id: 5,
    title: "Agentic AI Voice Calling Platform",
    description:
      "An agentic AI voice-calling platform for automated loan/EMI repayment collections — Gemini API integration for real-time token-by-token call responses, plus role-based employee and manager dashboards.",
    icon: PhoneCall,
    accent: "#5FD9A0",
    tags: ["React", "NestJS", "Gemini API", "Agentic AI"],
    liveUrl: null,
    codeUrl: null,
    note: "Private client codebase",
  },
  {
    id: 6,
    title: "LLM Terminal CLI",
    description:
      "A Node.js terminal chat assistant powered by the Groq SDK and Llama 3.3 70B, with MongoDB-backed persistent memory and streaming responses, plus a companion Next.js chat frontend with SSE streaming and voice input.",
    icon: Terminal,
    accent: "#C792EA",
    tags: ["Node.js", "Groq/Llama", "Next.js", "SSE"],
    liveUrl: null,
    codeUrl: "https://github.com/RishavMidnightCoder/llm-terminal-ui",
  },
  {
    id: 7,
    title: "File Vault: Secure & Decentralized File Storage",
    description:
      "A capstone project providing a secure, decentralized file storage solution designed to ensure data privacy, integrity, and accessibility.",
    icon: Lock,
    accent: "#EF7C6B",
    tags: ["Access Control", "AES", "Blockchain"],
    liveUrl: null,
    codeUrl: "https://github.com/RishavMidnightCoder/File-Vault",
  },
  {
    id: 8,
    title: "ML-Based Skin Detection Techniques",
    description:
      "A machine learning pipeline using Scikit-learn, OpenCV, and PyTorch (SVM and CNN models) to detect and classify skin regions in images.",
    icon: Microscope,
    accent: "#4FC3D9",
    tags: ["Machine Learning", "PyTorch", "OpenCV"],
    liveUrl: null,
    codeUrl:
      "https://github.com/RishavMidnightCoder/Ml-based-skin-detection-technique",
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
          A mix of professional platforms built at Cloudwave Services and
          Wesoftek Solutions and personal projects, spanning Python/FastAPI
          backends, full-stack SaaS, agentic AI, and machine learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            const hasLinks = project.liveUrl || project.codeUrl;
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

                  <div className="flex items-center gap-5 pt-2 border-t border-border/50">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        Live demo
                      </a>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={16} />
                        View code
                      </a>
                    )}
                    {!hasLinks && (
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
