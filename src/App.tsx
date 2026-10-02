import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ServicesHub from "./pages/ServicesHub";
import ServiceDetail from "./pages/ServiceDetail";
import IndustriesHub from "./pages/IndustriesHub";
import IndustryDetail from "./pages/IndustryDetail";
import NotFound from "./pages/NotFound";

/** Router-agnostic app shell: main.tsx wraps it in BrowserRouter, entry-server.tsx in StaticRouter. */
const App = () => (
  <TooltipProvider>
    <Toaster />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<ServicesHub />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/industries" element={<IndustriesHub />} />
      <Route path="/industries/:slug" element={<IndustryDetail />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </TooltipProvider>
);

export default App;
