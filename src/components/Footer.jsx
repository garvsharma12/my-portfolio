import { ArrowUp, Instagram, Linkedin, Twitch, Twitter } from "lucide-react";

export const Footer = () => {
  return (
  <footer className="relative z-10 py-6 px-4 mt-12 bg-background/30 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground order-2 sm:order-1 text-center sm:text-left">
            &copy; {new Date().getFullYear()} garv1202. All rights reserved.
          </p>

          <div className="order-1 sm:order-2 flex items-center justify-center gap-5">
            <a href="https://www.linkedin.com/in/garv-sharma-1202/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href="https://x.com/garv1202" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors" aria-label="Twitter / X">
              <Twitter size={22} />
            </a>
            <a href="https://www.instagram.com/lxt_sol/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram size={22} />
            </a>
            <a href="#" target="_blank" className="text-foreground/80 hover:text-primary transition-colors" aria-label="Twitch">
              <Twitch size={22} />
            </a>
          </div>

          <div className="order-3 flex justify-center sm:justify-end">
            <a
              href="#hero"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
