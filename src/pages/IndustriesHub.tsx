import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientFloor from "@/components/AmbientFloor";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTASection from "@/components/CTASection";
import { LinkCard } from "@/components/PageBlocks";
import { industries } from "@/content/industries";
import { useSEO } from "@/hooks/use-seo";
import { SITE_URL } from "@/seo/routes";

const IndustriesHub = () => {
  useSEO("/industries");

  return (
    <div className="min-h-screen bg-background font-sans">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Industries served by ArrLink",
          itemListElement: industries.map((ind, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: ind.name,
            url: `${SITE_URL}/industries/${ind.slug}`,
          })),
        }}
      />
      <Navbar />
      <main>
        <section className="relative pt-36 pb-28 px-6 overflow-hidden">
          <AmbientFloor />
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <Breadcrumbs items={[{ label: "Industries", to: "/industries" }]} />
            <h1 className="max-w-5xl text-4xl md:text-6xl lg:text-7xl leading-[1.04] text-foreground font-display font-bold tracking-tighter text-balance mb-7">
              Industries we{" "}
              <span className="font-serif font-normal text-[1.08em]">serve.</span>
            </h1>
            <p className="max-w-2xl text-foreground/60 text-base md:text-xl leading-relaxed mb-16">
              We&apos;ve shipped AI and software into regulated, high-volume and operations-heavy
              industries. Explore how we apply AI agents, generative AI and custom software in yours.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((ind) => (
                <LinkCard key={ind.slug} to={`/industries/${ind.slug}`} title={ind.name} desc={ind.summary} />
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

export default IndustriesHub;
