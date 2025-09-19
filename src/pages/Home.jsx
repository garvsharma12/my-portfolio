import { Navbar } from "../components/Navbar";
import Galaxy from "@/components/Galaxy";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { CodingProfilesSection } from "../components/CodingProfilesSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Global Galaxy Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Galaxy className="w-full h-full" />
      </div>

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
  <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
  <ProjectsSection />
  <CodingProfilesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
