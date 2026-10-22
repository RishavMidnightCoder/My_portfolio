import { Briefcase, Code, Sparkles } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Python Full Stack Software Engineer
            </h3>

            <p className="text-muted-foreground">
              I'm a Software Engineer at Cloudwave Services, building
              production web platforms and AI-integrated products with Python
              (FastAPI), PostgreSQL, Angular, React, and Next.js. I'm part of
              the core team behind a multi-tenant school ERP used by 15+
              active schools, and I enjoy owning features end-to-end — from
              REST APIs and databases to clean, responsive frontends that are
              genuinely useful to the people who use them.
            </p>

            <p className="text-muted-foreground">
              My day-to-day stack spans Python/FastAPI, PostgreSQL, Angular,
              React.js, Next.js, TypeScript, NestJS, and Node.js, along with
              MongoDB and MySQL. I've worked hands-on with AWS deployments for
              US and India-based clients, and with GenAI integration — from
              agentic AI calling and chatbot features to Gemini-driven
              real-time voice agents and Groq/Llama-powered tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Let's connect
              </a>

              <a
                href="/Rishav_Kumar_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Python Backend & Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Design and ship production-grade apps end-to-end with
                    FastAPI, PostgreSQL, Angular, and Next.js — from REST APIs
                    and JWT/OTP authentication to responsive frontends, with
                    AWS and Vercel deployments.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    GenAI & Agentic AI Integration
                  </h4>
                  <p className="text-muted-foreground">
                    Building an agentic AI calling system for schools, an AI
                    website assistant, and VELUNE, an LLM-powered cinematic
                    story platform — plus a Gemini-driven voice-calling
                    platform with token-by-token streaming.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Multi-Tenant SaaS Architecture
                  </h4>
                  <p className="text-muted-foreground">
                    Core team member on a multi-tenant school ERP (15+ schools)
                    and owner of UTTM.in, a URL shortening SaaS — both with
                    role-based access control and tenant-aware dashboards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
