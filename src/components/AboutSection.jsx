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
              Full Stack Software Engineer
            </h3>

            <p className="text-muted-foreground">
              I'm a Full Stack Software Engineer at Wesoftek Solutions, building
              production web apps and AI-integrated platforms with React,
              Next.js, NestJS, and Python. I enjoy architecting systems
              end-to-end — from multi-tenant SaaS backends to real-time AI
              voice platforms — that are clean, scalable, and genuinely
              useful to the people who use them.
            </p>

            <p className="text-muted-foreground">
              My day-to-day stack spans React.js, Next.js, NestJS, Node.js,
              Python/Django, MongoDB, PostgreSQL, and MySQL, along with
              headless CMS platforms like Strapi and Payload. I've also
              worked hands-on with AWS deployments for both US and
              India-based clients, and with GenAI integration — from
              Groq/Llama-powered tools to Gemini-driven real-time voice
              agents.
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
                  <h4 className="font-semibold text-lg">Full-Stack & Cloud Development</h4>
                  <p className="text-muted-foreground">
                    Design and ship production-grade web apps end-to-end
                    using React, Next.js, NestJS, and Python, with hands-on
                    AWS deployment experience for US and India-based clients.
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
                  <h4 className="font-semibold text-lg">GenAI & Agentic AI Integration</h4>
                  <p className="text-muted-foreground">
                    Built agentic AI systems including a real-time voice
                    calling platform (Gemini API, token-by-token streaming)
                    and a terminal-based LLM assistant with persistent memory.
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
                  <h4 className="font-semibold text-lg">Multi-Tenant SaaS Architecture</h4>
                  <p className="text-muted-foreground">
                    Owned UTTM.in end-to-end — a URL shortening and link
                    management SaaS platform with role-based access control,
                    multi-tenant dashboards, and plan/billing enforcement.
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