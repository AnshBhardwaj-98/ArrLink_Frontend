import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
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
import { serviceBySlug, services } from "@/content/services";
import { industryBySlug } from "@/content/industries";
import { projectById } from "@/content/projects";
import { useSEO } from "@/hooks/use-seo";
import { SITE_URL } from "@/seo/routes";

const ServiceDetail = () => {
  const { slug = "" } = useParams();
  const service = serviceBySlug(slug);
  useSEO(service ? `/services/${slug}` : "/404");
  if (!service) return <NotFound />;

  const url = `${SITE_URL}/services/${service.slug}`;
  const work = service.projectIds.map(projectById).filter((p) => p !== undefined);
  const relatedIndustries = service.industrySlugs.map(industryBySlug).filter((i) => i !== undefined);
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <div className="min-h-screen bg-background font-sans">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${url}#service`,
          name: service.name,
          serviceType: service.keyword,
          description: service.metaDescription,
          url,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: [
            { "@type": "Country", name: "India" },
            { "@type": "Country", name: "United States" },
            { "@type": "Place", name: "Worldwide" },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${service.name} services`,
            itemListElement: service.deliverables.map((d) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: d.title, description: d.desc },
            })),
          },
        }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-24 px-6 overflow-hidden">
          <AmbientFloor />
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: service.name, to: `/services/${service.slug}` }]} />
            <h1 className="max-w-5xl text-4xl md:text-6xl lg:text-7xl leading-[1.04] text-foreground font-display font-bold tracking-tighter text-balance mb-7">
              {service.h1}{" "}
              <span className="font-serif font-normal text-[1.08em]">{service.h1Accent}</span>
            </h1>
            <p className="max-w-2xl text-foreground/60 text-base md:text-xl leading-relaxed mb-10">{service.summary}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-foreground text-background text-xs tracking-[0.2em] uppercase font-bold hover:bg-foreground/85 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
              <a
                href="#what-we-build"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md border border-foreground/20 text-foreground text-xs tracking-[0.2em] uppercase font-bold hover:border-foreground/50 hover:bg-foreground/[0.04] transition-all duration-300"
              >
                What We Build
              </a>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="relative py-24 px-6 bg-surface-container-low border-y border-foreground/10">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <SectionHeader marker="Overview" title={`${service.name} services`} accent="that ship." />
            <div className="space-y-6 text-foreground/70 text-base md:text-lg leading-relaxed">
              {service.intro.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section id="what-we-build" className="relative py-28 px-6 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader marker="What We Build" title={`Our ${service.name.toLowerCase()}`} accent="capabilities." className="mb-14 max-w-3xl" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.deliverables.map((d) => (
                <div key={d.title} className="p-7 md:p-8 rounded-2xl border border-foreground/10 bg-surface-container/40">
                  <h3 className="text-xl font-display font-bold text-foreground tracking-tight mb-3">{d.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="relative py-28 px-6 bg-surface-container-low border-y border-foreground/10">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader marker="Use Cases" title="Where it" accent="pays off." className="mb-14 max-w-3xl" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 rounded-2xl overflow-hidden border border-foreground/10">
              {service.useCases.map((u) => (
                <div key={u.title} className="bg-background p-7">
                  <h3 className="text-lg font-display font-bold text-foreground tracking-tight mb-2">{u.title}</h3>
                  <p className="text-foreground/55 text-sm leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative py-28 px-6">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
            <SectionHeader marker="How We Deliver" title="From kickoff to" accent="production." className="lg:sticky lg:top-32" />
            <ol className="border-t border-foreground/10">
              {service.process.map((step, i) => (
                <li key={step.title} className="grid grid-cols-[3rem_1fr] gap-4 py-7 border-b border-foreground/10">
                  <span className="text-sm font-display font-bold text-foreground/35 tabular-nums pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground tracking-tight mb-2">{step.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Why us + stack */}
        <section className="relative py-28 px-6 bg-surface-container-low border-y border-foreground/10">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeader marker="Why ArrLink" title="Why teams choose" accent="ArrLink." className="mb-14 max-w-4xl" />
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {service.whyUs.map((w) => (
                <div key={w.title} className="p-7 md:p-8 rounded-2xl border border-foreground/10 bg-background">
                  <Check className="w-5 h-5 text-primary mb-5" strokeWidth={2} aria-hidden />
                  <h3 className="text-xl font-display font-bold text-foreground tracking-tight mb-3">{w.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
            <h2 className="text-[10px] md:text-xs tracking-[0.35em] uppercase font-medium text-foreground/45 mb-6">Technology stack</h2>
            <ul className="flex flex-wrap gap-2.5">
              {service.stack.map((t) => (
                <li key={t} className="px-3.5 py-2 rounded-md border border-foreground/10 bg-background text-sm font-medium text-foreground/75">{t}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Related work */}
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

        <FAQSection faqs={service.faqs} />

        {/* Internal links */}
        <section className="relative py-24 px-6 bg-surface-container-low border-t border-foreground/10">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight mb-6">Industries we serve</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {relatedIndustries.map((ind) => (
                  <LinkCard key={ind.slug} to={`/industries/${ind.slug}`} title={ind.name} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight mb-6">Explore other services</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {otherServices.map((s) => (
                  <LinkCard key={s.slug} to={`/services/${s.slug}`} title={s.name} />
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

export default ServiceDetail;
