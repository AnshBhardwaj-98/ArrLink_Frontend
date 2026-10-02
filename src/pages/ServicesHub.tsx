import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientFloor from "@/components/AmbientFloor";
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
      <main>
        <section className="relative pt-36 pb-28 px-6 overflow-hidden">
          <AmbientFloor />
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <Breadcrumbs items={[{ label: "Services", to: "/services" }]} />
            <h1 className="max-w-5xl text-4xl md:text-6xl lg:text-7xl leading-[1.04] text-foreground font-display font-bold tracking-tighter text-balance mb-7">
              AI &amp; software development{" "}
              <span className="font-serif font-normal text-[1.08em]">services.</span>
            </h1>
            <p className="max-w-2xl text-foreground/60 text-base md:text-xl leading-relaxed mb-16">
              From your first AI agent or MVP to a full SaaS platform — senior engineers, AI-accelerated
              delivery and production-grade quality, for startups and enterprises in India and worldwide.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((s) => (
                <LinkCard key={s.slug} to={`/services/${s.slug}`} title={s.name} desc={s.summary} />
              ))}
            </div>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesHub;
