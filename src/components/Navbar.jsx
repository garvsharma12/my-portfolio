import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Magnet from "./Magnet";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-2xl md:text-3xl font-bold flex items-center tracking-tight"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">garv1202</span>
            <span className="ml-2 hidden sm:inline text-primary">Portfolio</span>
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex gap-4">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={
                "group inline-flex items-center rounded-full border border-transparent px-4 py-2 " +
                "text-[15px] md:text-base font-medium text-foreground/90 transition-all " +
                "hover:text-primary hover:bg-background/60 hover:border-white/10 backdrop-blur-md"
              }
            >
              <Magnet padding={40} magnetStrength={40}>
                <span>{item.name}</span>
              </Magnet>
            </a>
          ))}
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <Magnet padding={50} magnetStrength={50}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Magnet>{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-7 text-2xl font-semibold">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="inline-flex items-center rounded-full px-4 py-2 text-foreground/90 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <Magnet padding={50} magnetStrength={50}>
                  <span>{item.name}</span>
                </Magnet>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
