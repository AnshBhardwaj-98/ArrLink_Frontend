import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PhilosophySection from "@/components/PhilosophySection";
import CaseStudySection from "@/components/CaseStudySection";
import ProcessSection from "@/components/ProcessSection";
import TechStackSection from "@/components/TechStackSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <PhilosophySection />
      <CaseStudySection />
      <ProcessSection />
      <TechStackSection />
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default Index;
