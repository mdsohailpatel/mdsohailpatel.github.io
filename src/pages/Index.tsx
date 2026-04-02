import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import EducationSection from '@/components/sections/EducationSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <IndustriesSection />
      <EducationSection />
      <ContactSection />

      <footer className="py-8 px-6 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Mohammedsohail Patel. Built with passion.
        </p>
      </footer>
    </div>
  );
};

export default Index;
