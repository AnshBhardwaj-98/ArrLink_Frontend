import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import TechnologySection from "@/components/TechnologySection";
import WorkingTogetherSection from "@/components/WorkingTogetherSection";
import ClientStrip from "@/components/ClientStrip";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";
export default function Index() { useSEO("/"); return <><Navbar /><main id="main-content"><HeroSection /><ClientStrip /><ServicesSection /><TechnologySection /><ProjectsSection /><WorkingTogetherSection /><ProcessSection /><CTASection /></main><Footer /></>; }
