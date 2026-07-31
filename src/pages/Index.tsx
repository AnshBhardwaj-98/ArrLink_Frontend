import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import FeedbackMarquee from "@/components/FeedbackMarquee";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <StatsSection />
      <FeedbackMarquee />
      <PricingSection />
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default Index;
