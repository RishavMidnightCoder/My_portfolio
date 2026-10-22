import { motion } from "framer-motion";

const experience = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Cloudwave Services Pvt. Ltd.",
    year: "Jun 2026 – Present · Remote",
    description: [
      "Core team member on the company's flagship multi-tenant school ERP used by 15+ active schools, owning features end to end with Python (FastAPI), PostgreSQL, Angular, and TypeScript across Finance & Fees, Accounts, Student Information, Academics, School Website, and Front Office modules.",
      "Developed FastAPI REST APIs and service layers with Angular workflows for fee collection, transactions, due slips, timetables, admission enquiries, and visitor and gate-pass management.",
      "Building an agentic AI calling feature that places automated calls to parents for fee due-date reminders, ID card updates, and school notifications, and implementing passwordless login by migrating from email and password to email OTP and mobile number OTP.",
      "Sole developer of the company's corporate website using Next.js, Strapi CMS, and PostgreSQL, with an integrated agentic AI \"Talk to Expert\" chatbot that explains services, answers visitor queries, and handles work requests.",
    ],
    tags: ["Python", "FastAPI", "PostgreSQL", "Angular", "Next.js", "Agentic AI"],
  },
  {
    id: 2,
    title: "Software Engineer (Full Stack)",
    company: "Wesoftek Solutions Pvt. Ltd.",
    year: "Dec 2025 – May 2026 · Gurgaon, Haryana (On-site)",
    description: [
      "Developed the React.js frontend and integrated NestJS REST APIs for an AI-assisted loan-repayment platform, with role-based employee and manager dashboards tracking EMI status, call outcomes, payment commitments, and follow-ups, plus token-streamed Gemini API responses powering an agentic AI voice-calling system.",
      "Independently built UTTM, a multi-tenant URL-shortening and campaign-management platform with React.js and NestJS, featuring short URLs, QR codes, email/OTP authentication, Swagger-documented REST APIs, role-based access control, user invitations, and subscription-based feature limits.",
    ],
    tags: ["React", "NestJS", "Node.js", "MongoDB", "AWS", "Gemini API"],
  },
  {
    id: 3,
    title: "Web Development Intern",
    company: "INTERNPE",
    year: "Jan 2024 – Feb 2024",
    description: [
      "Assisted in the design and development of responsive websites using React, CSS, JavaScript, and various frameworks.",
      "Participated in code reviews and debugging sessions to maintain code quality and optimize performance.",
      "Performed testing and verification to identify and resolve issues, improving site reliability.",
      "Executed component-level feature testing and assisted with release testing during deployment cycles.",
    ],
    tags: ["React", "JavaScript", "CSS", "Web Development", "HTML"],
  },
];

export const InternshipsSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          From building production platforms at Cloudwave Services and
          Wesoftek Solutions to early internships, here's where I've applied
          my skills in real-world projects and gained hands-on industry
          experience.
        </p>
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-32 bottom-0 w-px bg-gradient-to-b from-purple-600/50 to-transparent"></div>
        <div className="flex flex-col gap-12 pl-10 relative">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-card rounded-lg p-6 border border-white/10 shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300"
            >
              {/* Timeline dot */}
              <div className="absolute -left-6 top-4 w-4 h-4 rounded-full bg-purple-500 shadow-md"></div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                <strong>{item.company}</strong> &nbsp;|&nbsp; {item.year}
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mb-4">
                {item.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm text-white shadow-inner"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
