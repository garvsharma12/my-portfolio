import { ArrowDown } from "lucide-react";
import ScrollFloat from "./ScrollFloat";
import Magnet from "./Magnet";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <div className="text-4xl md:text-6xl font-bold tracking-tight">
            <ScrollFloat
              as="h1"
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="!leading-tight"
              textClassName="text-gradient"
              lineBreakBefore="Sharma"
            >
              Hi, I'm Garv Sharma
            </ScrollFloat>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto opacity-0 animate-fade-in-delay-3">
            I build scalable web applications with modern technologies. Specializing in full-stack development, I craft solutions that are robust, efficient, and user-focused, while staying eager to learn and adapt to new technologies.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button px-7 py-3 text-base">
              <Magnet padding={50} magnetStrength={50}>
                <span>View My Work</span>
              </Magnet>
            </a>
          </div>
        </div>
      </div>

  <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-base md:text-lg text-muted-foreground">Scroll Down</span>
        <a
          href="#about"
          aria-label="Scroll down to About section"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-background/40 px-4 py-4 md:px-5 md:py-5 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background/60 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 animate-bounce"
        >
          <ArrowDown className="h-6 w-6 md:h-7 md:w-7 text-primary" />
        </a>
      </div>
    </section>
  );
};
