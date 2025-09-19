import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ScrollFloat from "./ScrollFloat";
import Magnet from "./Magnet";

const projects = [
  {
    id: 1,
    title: "Shortify",
    description: "A URL shortner with authentication and real time graphing.",
    image: "/projects/project1.png",
    tags: ["React", "Springboot", "postgreSQL", "Javascript"],
    demoUrl: "https://shortify-psi-rose.vercel.app/",
    githubUrl: "https://github.com/garvsharma12/Shortify",
  },
  {
    id: 2,
    title: "Book Glance",
    description:
      "AI-powered book discovery app with bookshelf scanning, smart recommendations, and AI-generated summaries and ratings.",
    image: "/projects/Project2.png",
    tags: ["React", "TypeScript", "TailwindCSS", "Express.js", "Redis", "Gemini"],
    demoUrl: "https://book-glance.vercel.app/",
    githubUrl: "https://github.com/garvsharma12/Book-Glance",
  },
  {
    id: 3,
    title: "MailMind",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  const scrollRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const autoState = useRef({ rafId: 0, direction: 1, paused: false, prevTs: 0, resumeTimer: 0 });

  const updateCanScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    updateCanScroll();
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => updateCanScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // Update on content/layout changes
    const ro = new ResizeObserver(() => updateCanScroll());
    ro.observe(el);
    const onLoad = () => updateCanScroll();
    window.addEventListener('load', onLoad);

    // Auto-scroll loop: gentle back-and-forth
  const speedPxPerMs = 0.12; // ~120 px/sec for clearer motion
    const animate = (ts) => {
      const node = scrollRef.current;
      if (!node) return; // unmounted

      if (autoState.current.prevTs === 0) autoState.current.prevTs = ts;
      const dt = Math.min(32, Math.max(0, ts - autoState.current.prevTs));
      autoState.current.prevTs = ts;

      const maxScroll = Math.max(0, node.scrollWidth - node.clientWidth);
      if (!autoState.current.paused && maxScroll > 0) {
        let next = node.scrollLeft + autoState.current.direction * (dt * speedPxPerMs);
        if (next <= 0) {
          next = 0;
          autoState.current.direction = 1;
        } else if (next >= maxScroll) {
          next = maxScroll;
          autoState.current.direction = -1;
        }
        node.scrollLeft = next;
        updateCanScroll();
      }

      autoState.current.rafId = requestAnimationFrame(animate);
    };

    autoState.current.rafId = requestAnimationFrame(animate);

    // Pause when user interacts (wheel/pointer), resume after inactivity
    const pause = () => {
      autoState.current.paused = true;
      if (autoState.current.resumeTimer) clearTimeout(autoState.current.resumeTimer);
    };
    const scheduleResume = (delay = 1200) => {
      if (autoState.current.resumeTimer) clearTimeout(autoState.current.resumeTimer);
      autoState.current.resumeTimer = setTimeout(() => {
        autoState.current.paused = false;
        autoState.current.prevTs = 0; // reset to prevent jump
      }, delay);
    };

    const onWheel = () => { pause(); scheduleResume(1500); };
    const onPointerDown = () => { pause(); };
    const onPointerUp = () => { scheduleResume(800); };

    el.addEventListener('wheel', onWheel, { passive: true });
    el.addEventListener('pointerdown', onPointerDown, { passive: true });
    el.addEventListener('pointerup', onPointerUp, { passive: true });

    return () => {
      el.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onScroll);
  window.removeEventListener('load', onLoad);
  ro.disconnect();
      if (autoState.current.rafId) cancelAnimationFrame(autoState.current.rafId);
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointerup', onPointerUp);
      if (autoState.current.resumeTimer) clearTimeout(autoState.current.resumeTimer);
    };
  }, []);

  const scrollByAmount = (dir = 1) => {
    const el = scrollRef.current;
    if (!el) return;
    // Pause auto-scroll to avoid fighting manual input
    autoState.current.paused = true;
    if (autoState.current.resumeTimer) clearTimeout(autoState.current.resumeTimer);
    const amount = Math.floor(el.clientWidth * 0.9) * dir;
    el.scrollBy({ left: amount, behavior: 'smooth' });
    // Resume auto-scroll after a short delay
    autoState.current.resumeTimer = setTimeout(() => {
      autoState.current.paused = false;
      autoState.current.prevTs = 0;
    }, 800);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="mb-4 text-center">
          <ScrollFloat
            as="h2"
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="text-3xl md:text-4xl font-bold"
            lineBreakBefore="Proje"
          >
            Featured Projects
          </ScrollFloat>
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

  <div className="relative z-10">
          {/* Left/Right gradient fades (optional aesthetic) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent" />

          {/* Scroll Buttons */}
          <button
            aria-label="Scroll left"
            onClick={() => scrollByAmount(-1)}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full border border-white/10 bg-background/60 backdrop-blur-md p-2.5 md:p-3 shadow-sm hover:border-primary/40 hover:bg-background/70 hover:shadow-[0_8px_30px_rgba(139,92,246,0.2)] transition ${canLeft ? 'opacity-100' : 'opacity-40 cursor-not-allowed'}`}
            disabled={!canLeft}
          >
            <Magnet padding={40} disabled={!canLeft} magnetStrength={60}>
              <ChevronLeft className="h-5 w-5" />
            </Magnet>
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scrollByAmount(1)}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full border border-white/10 bg-background/60 backdrop-blur-md p-2.5 md:p-3 shadow-sm hover:border-primary/40 hover:bg-background/70 hover:shadow-[0_8px_30px_rgba(139,92,246,0.2)] transition ${canRight ? 'opacity-100' : 'opacity-40 cursor-not-allowed'}`}
            disabled={!canRight}
          >
            <Magnet padding={40} disabled={!canRight} magnetStrength={60}>
              <ChevronRight className="h-5 w-5" />
            </Magnet>
          </button>

          {/* Horizontal scroller */}
          <div
            ref={scrollRef}
            className="no-scrollbar overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex gap-6 px-1 py-1"
            onPointerEnter={() => { autoState.current.paused = true; }}
            onPointerLeave={() => { autoState.current.paused = false; autoState.current.prevTs = 0; }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="shrink-0 w-80 md:w-96 snap-start group rounded-lg overflow-hidden shadow-xs card-hover bg-background/30 backdrop-blur-md border border-white/10"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/favicon.svg";
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={`${project.id}-${idx}-${tag}`} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/40 px-5 py-2.5 text-sm md:text-base text-foreground/90 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background/60 hover:text-primary hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] ${(!project.demoUrl || project.demoUrl === '#') ? 'opacity-50 pointer-events-none cursor-not-allowed' : ''}`}
                    >
                      <Magnet padding={40} magnetStrength={60}>
                        <span className="inline-flex items-center gap-2">
                          <ExternalLink size={18} />
                          <span>Live Demo</span>
                        </span>
                      </Magnet>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/40 px-5 py-2.5 text-sm md:text-base text-foreground/90 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background/60 hover:text-primary hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] ${(!project.githubUrl || project.githubUrl === '#') ? 'opacity-50 pointer-events-none cursor-not-allowed' : ''}`}
                    >
                      <Magnet padding={40} magnetStrength={60}>
                        <span className="inline-flex items-center gap-2">
                          <Github size={18} />
                          <span>Source</span>
                        </span>
                      </Magnet>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 px-7 py-3 text-base"
            target="_blank"
            href="https://github.com/garvsharma12"
          >
            <Magnet padding={50} magnetStrength={50}>
              <span className="inline-flex items-center gap-2">Check My Github <ArrowRight size={18} /></span>
            </Magnet>
          </a>
        </div>
      </div>
    </section>
  );
};
