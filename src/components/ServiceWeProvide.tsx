const services = [
  {
    title: "Custom Business Software",
    desc: "Tailor-made internal tools, CRMs, dashboards and platforms designed around your exact workflows — not generic templates.",
  },
  {
    title: "SaaS Product Development",
    desc: "We design and build scalable SaaS platforms from idea to launch, including architecture, billing, admin systems and cloud deployment.",
  },
  {
    title: "AI & Automation Solutions",
    desc: "Reduce manual work using AI-powered workflows, document processing, analytics, chatbots and intelligent integrations.",
  },
  {
    title: "Web Application Development",
    desc: "High-performance web apps built for reliability, security and long-term scalability using modern architecture.",
  },
  {
    title: "System Integrations & APIs",
    desc: "Connect CRMs, payment gateways, ERPs, WhatsApp, and third-party tools into a unified, automated ecosystem.",
  },
  {
    title: "UI/UX & Product Design",
    desc: "Human-centered design focused on usability, clarity and conversion — ensuring the software is as intuitive as it is powerful.",
  },
];

const ServiceWeProvide = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xl tracking-[0.3em]   text-muted-foreground mb-4">
          Services We Provide
        </p>

        <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-16 max-w-2xl">
          Software engineered to solve real business problems.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <div key={i} className="space-y-4">
              <h3 className="text-xl tracking-wide border-dashed border-b-2 border-blue-500 pb-2 font-light">
                {service.title}
              </h3>
              <p className="text-sm   leading-relaxed font-light">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceWeProvide;
