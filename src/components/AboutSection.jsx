import { Briefcase, Code, User } from "lucide-react";
import { motion as Motion } from "motion/react";
import ScrollFloat from "./ScrollFloat";
import Magnet from "./Magnet";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <ScrollFloat
            as="h2"
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="text-3xl md:text-4xl font-bold"
            textClassName=""
          >
            About Me
          </ScrollFloat>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Generative AI Enthusiast
            </h3>

            <p className="text-muted-foreground">
              Full Stack Developer skilled in Java, JavaScript, Spring Boot, ReactJS, and RESTful APIs. Experienced in building scalable web applications, cloud deployment (AWS, Docker), and database management. Proficient in both frontend and backend development with a strong foundation in DSA and problem-solving.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button px-7 py-3 text-base">
                <Magnet padding={50} magnetStrength={50}>
                  <span>Get In Touch</span>
                </Magnet>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/40 px-7 py-3 text-sm md:text-base text-foreground/90 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background/60 hover:text-primary hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]"
              >
                <Magnet padding={50} magnetStrength={50}>
                  <span>Download CV</span>
                </Magnet>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Motion.div
              className="gradient-border p-6 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(139, 92, 246, 0.18)" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Full Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable web applications using Java, Spring Boot, ReactJS, and RESTful APIs with secure authentication, efficient database design, and optimized performance.
                  </p>
                </div>
              </div>
            </Motion.div>
            <Motion.div
              className="gradient-border p-6 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(139, 92, 246, 0.18)" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud & Deployment</h4>
                  <p className="text-muted-foreground">
                    Deploying applications with AWS and Docker, managing CI/CD pipelines, and ensuring high availability and scalability for production-ready systems.
                  </p>
                </div>
              </div>
            </Motion.div>
            <Motion.div
              className="gradient-border p-6 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(139, 92, 246, 0.18)" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving & Competitive Programming</h4>
                  <p className="text-muted-foreground">
                    Strong foundation in DSA and algorithms, with proven success in Codeforces (Expert) and CodeChef (3⭐), solving 2000+ problems across multiple coding platforms.
                  </p>
                </div>
              </div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
