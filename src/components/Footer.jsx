import { ArrowUp, Instagram, Linkedin, Twitch, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-card relative border-t border-border mt-12 flex items-center justify-between">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} garv1202. All rights reserved.
      </p>

      {/* Absolutely centered Connect With Me */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-5">
        <a href="#" target="_blank" className="text-foreground/80 hover:text-primary transition-colors" aria-label="LinkedIn">
          <Linkedin size={22} />
        </a>
        <a href="#" target="_blank" className="text-foreground/80 hover:text-primary transition-colors" aria-label="Twitter / X">
          <Twitter size={22} />
        </a>
        <a href="#" target="_blank" className="text-foreground/80 hover:text-primary transition-colors" aria-label="Instagram">
          <Instagram size={22} />
        </a>
        <a href="#" target="_blank" className="text-foreground/80 hover:text-primary transition-colors" aria-label="Twitch">
          <Twitch size={22} />
        </a>
      </div>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
