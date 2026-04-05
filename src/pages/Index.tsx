import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import FeedbackMarquee from "@/components/FeedbackMarquee";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <FeedbackMarquee />
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default Index;
