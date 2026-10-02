import { Link, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientFloor from "@/components/AmbientFloor";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { ProjectCard } from "@/components/ProjectsSection";
import { SectionHeader, LinkCard } from "@/components/PageBlocks";
import NotFound from "./NotFound";
import { industryBySlug, industries } from "@/content/industries";
import { serviceBySlug } from "@/content/services";
import { projectById } from "@/content/projects";
import { useSEO } from "@/hooks/use-seo";
import { SITE_URL } from "@/seo/routes";

const IndustryDetail = () => {
  const { slug = "" } = useParams();
  const industry = industryBySlug(slug);
  useSEO(industry ? `/industries/${slug}` : "/404");
  if (!industry) return <NotFound />;

  const url = `${SITE_URL}/industries/${industry.slug}`;
  const work = industry.projectIds.map(projectById).filter((p) => p !== undefined);
  const relatedServices = industry.serviceSlugs.map(serviceBySlug).filter((s) => s !== undefined);
  const otherIndustries = industries.filter((i) => i.slug !== industry.slug);

  return (
    <div className="min-h-screen bg-background font-sans">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${url}#service`,
          name: `${industry.name} AI & Software Development`,
          serviceType: industry.keyword,
          description: industry.metaDescription,
          url,
          audience: { "@type": "BusinessAudience", name: industry.name },
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: [
            { "@type": "Country", name: "India" },
            { "@type": "Country", name: "United States" },
            { "@type": "Place", name: "Worldwide" },
          ],
        }}
      />
      <Navbar />
      <main>
        <section className="relative pt-36 pb-24 px-6 overflow-hidden">
          <AmbientFloor />
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <Breadcrumbs items={[{ label: "Industries", to: "/industries" }, { label: industry.name, to: `/industries/${industry.slug}` }]} />
            <h1 className="max-w-5xl text-4xl md:text-6xl lg:text-7xl leading-[1.04] text-foreground font-display font-bold tracking-tighter text-balance mb-7">
              {industry.h1}{" "}
              <span className="font-serif font-normal text-[1.08em]">{industry.h1Accent}</span>
            </h1>
            <p className="max-w-2xl text-foreground/60 text-base md:text-xl leading-relaxed mb-10">{industry.summary}</p>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-foreground text-background text-xs tracking-[0.2em] uppercase font-bold hover:bg-foreground/85 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Book a Free Strategy Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </div>
        </section>

        <section className="relative py-24 px-6 bg-surface-container-low border-y border-foreground/10">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <SectionHeader marker="Overview" title={`AI & software for ${industry.name.toLowerCase()}`} />
            <div className="space-y-6 text-foreground/70 text-base md:text-lg leading-relaxed">
              {industry.intro.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-28 px-6">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader marker="The Challenge" title={`What holds ${industry.name.toLowerCase()} teams`} accent="back." className="mb-14 max-w-3xl" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 rounded-2xl overflow-hidden border border-foreground/10">
              {industry.challenges.map((c) => (
                <div key={c.title} className="bg-background p-7">
                  <h3 className="text-lg font-display font-bold text-foreground tracking-tight mb-2">{c.title}</h3>
                  <p className="text-foreground/55 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-28 px-6 bg-surface-container-low border-y border-foreground/10">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader marker="What We Build" title="Solutions we" accent="deliver." className="mb-14 max-w-3xl" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.solutions.map((s) => (
                <div key={s.title} className="p-7 md:p-8 rounded-2xl border border-foreground/10 bg-background">
                  <h3 className="text-xl font-display font-bold text-foreground tracking-tight mb-3">{s.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {work.length > 0 && (
          <section className="relative py-28 px-6">
            <div className="max-w-7xl mx-auto px-4">
              <SectionHeader marker="Related Work" title="Proof in" accent="production." className="mb-14 max-w-3xl" />
              <div className="grid md:grid-cols-2 gap-6">
                {work.map((p, i) => (
                  <ProjectCard key={p.id} p={p} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}

        <FAQSection faqs={industry.faqs} />

        <section className="relative py-24 px-6 bg-surface-container-low border-t border-foreground/10">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight mb-6">Relevant services</h2>
              <div className="grid gap-3">
                {relatedServices.map((s) => (
                  <LinkCard key={s.slug} to={`/services/${s.slug}`} title={s.name} desc={s.summary} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight mb-6">Other industries</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {otherIndustries.map((i) => (
                  <LinkCard key={i.slug} to={`/industries/${i.slug}`} title={i.name} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default IndustryDetail;
