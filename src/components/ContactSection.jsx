import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Drop a <span className="text-primary"> Message</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Hi! I am Rishav Kumar, a Full Stack Software Engineer at Wesoftek
          Solutions, building full-stack web apps, multi-tenant SaaS
          platforms, and GenAI-integrated systems. Always happy to connect
          about interesting projects or new opportunities — feel free to
          reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:rishavkumarvyas@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    rishavkumarvyas@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> WhatsApp</h4>
                  <a
                    href="https://wa.me/916202794952"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 6202794952
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <p className="text-muted-foreground">Bengaluru, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/rishavkumar576/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://github.com/RishavMidnightCoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6 hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Instead of Form → WhatsApp & Email Quick Connect */}
          <div className="bg-card p-8 rounded-lg shadow-xs flex flex-col items-center justify-center space-y-8">
            <h3 className="text-2xl font-semibold text-center">
              Quick Connect
            </h3>

            <a
              href="https://wa.me/916202794952"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition"
            >
              <Phone className="h-6 w-6" />
              Chat on WhatsApp
            </a>

            <a
              href="mailto:rishavkumarvyas@gmail.com"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition"
            >
              <Mail className="h-6 w-6" />
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};