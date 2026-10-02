import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientStrip from "@/components/ClientStrip";
import ServicesSection from "@/components/ServicesSection";
import WhyNowSection from "@/components/WhyNowSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import StatsSection from "@/components/StatsSection";
import FeedbackMarquee from "@/components/FeedbackMarquee";
import EngagementSection from "@/components/EngagementSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";

const Index = () => {
  useSEO("/");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ClientStrip />
        <ServicesSection />
        <ProjectsSection />
        <WhyNowSection />
        <ProcessSection />
        <StatsSection />
        <FeedbackMarquee />
        <EngagementSection />
        <IndustriesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
