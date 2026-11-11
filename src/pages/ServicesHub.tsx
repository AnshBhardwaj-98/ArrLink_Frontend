import Navbar from "@/components/Navbar";
import TechnologySection from "@/components/TechnologySection";
import WorkingTogetherSection from "@/components/WorkingTogetherSection";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTASection from "@/components/CTASection";
import { LinkCard } from "@/components/PageBlocks";
import { services } from "@/content/services";
import { useSEO } from "@/hooks/use-seo";
import { SITE_URL } from "@/seo/routes";

const ServicesHub = () => {
  useSEO("/services");

  return (
    <div className="min-h-screen bg-background font-sans">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "ArrLink AI & software development services",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.name,
            url: `${SITE_URL}/services/${s.slug}`,
          })),
        }}
      />
      <Navbar />
      <main id="main-content">
        <section className="relative pt-36 pb-28 px-6 overflow-hidden">

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <Breadcrumbs items={[{ label: "Services", to: "/services" }]} />
            <h1 className="max-w-5xl text-4xl md:text-6xl lg:text-7xl leading-[1.04] text-foreground font-display font-bold tracking-tighter text-balance mb-7">
              Software that works{" "}
              <span className="font-serif font-normal text-[1.08em]">for you.</span>
            </h1>
            <p className="max-w-2xl text-foreground/60 text-base md:text-xl leading-relaxed mb-16">
              From a focused first release to the platform behind your business. We help you plan, design, build and improve software, with a clear path from idea to launch.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((s) => (
                <LinkCard key={s.slug} to={`/services/${s.slug}`} title={s.name} desc={s.summary} />
              ))}
            </div>
          </div>
        </section>
        <TechnologySection />
        <WorkingTogetherSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesHub;
