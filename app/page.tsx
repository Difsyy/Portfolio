import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import Galaxy from "@/components/Galaxy";

export default function Home() {
  return (
    <main className="bg-main min-h-screen text-gray-50 selection:bg-blaze selection:text-white relative">
      {/* Global Galaxy Background */}
      <div className="fixed inset-0 z-0">
        <Galaxy 
          starSpeed={0.3}
          density={1.2}
          glowIntensity={0.4}
          saturation={0.9}
          hueShift={150}
          mouseRepulsion={true}
          mouseInteraction={true}
        />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        
        {/* Content sections with blurred background */}
        <div className="relative">
          {/* Gradient Mask for smooth transition */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-transparent to-main/50 pointer-events-none z-20" />
          
          <div className="bg-main/50 backdrop-blur-md pt-12">
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <CertificatesSection />
            <ContactSection />
            
            <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
              <p>© {new Date().getFullYear()} Data Tech. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
