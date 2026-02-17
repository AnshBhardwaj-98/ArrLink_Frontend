import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    title: "Precision Over Speed",
    body: "We don't ship fast and break things. We design systems with clear boundaries, explicit contracts, and failure modes that are understood before deployment.",
  },
  {
    title: "Depth Over Breadth",
    body: "We specialize in backend-heavy, performance-critical systems. We don't do marketing sites, mobile apps, or design sprints. We do infrastructure.",
  },
  {
    title: "Ownership Over Handoff",
    body: "Every system we build comes with documentation, architecture diagrams, and knowledge transfer. You own the code, the infrastructure, and the decisions.",
  },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-32 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">About</p>
        <h1 className="text-3xl md:text-5xl font-extralight tracking-tight mb-8">
          A systems engineering firm.
          <br />
          <span className="text-primary">Not an agency.</span>
        </h1>
        <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-2xl mb-20">
          Aethernetics builds high-performance custom business software using Golang, distributed systems, and scalable SaaS architecture. We focus on microservices, backend-heavy systems, and performance-critical infrastructure for startups, SMEs, and enterprises.
        </p>

        {/* Values */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12">How We Operate</p>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {values.map((v) => (
              <div key={v.title} className="bg-background p-8">
                <h3 className="text-sm font-light tracking-wide mb-3">{v.title}</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Our Approach</p>
          <div className="border-l-2 border-primary pl-8 space-y-6 max-w-2xl">
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              We operate as embedded engineering partners — not vendors. Every engagement starts with a deep technical discovery phase where we map your data flows, identify bottlenecks, and define system boundaries before writing a single line of code.
            </p>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Our team works in small, focused units. No project managers, no account executives, no layers between you and the engineers building your system. Direct communication, direct accountability.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Capabilities</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border border border-border">
            {[
              "Backend Architecture",
              "Golang Development",
              "Database Design",
              "API Engineering",
              "Performance Optimization",
              "System Migration",
              "DevOps & CI/CD",
              "Technical Audits",
              "Infrastructure Design",
            ].map((c) => (
              <div key={c} className="bg-background px-6 py-4">
                <span className="text-xs font-light tracking-wide">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;
