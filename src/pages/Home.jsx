import { Navbar } from "../components/Navbar";
import Particles from "@/components/Particles";
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
      {/* Global Particles Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
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
