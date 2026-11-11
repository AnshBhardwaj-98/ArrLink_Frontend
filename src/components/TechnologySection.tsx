import { Code2, Database, Server, Sparkles } from "lucide-react";

const groups = [
  { icon: Code2, title: "Web & product interfaces", description: "Customer portals, dashboards, and responsive web applications.", tools: ["React", "Next.js", "TypeScript", "Vue"] },
  { icon: Server, title: "Backends & integrations", description: "Business logic, APIs, background jobs, and connected systems.", tools: ["Go", "Python", "Node.js", "REST APIs"] },
  { icon: Database, title: "Data & deployment", description: "Application databases, caching, cloud hosting, and releases.", tools: ["PostgreSQL", "Redis", "Docker", "AWS", "Vercel"] },
  { icon: Sparkles, title: "AI & automation", description: "AI assistants, document workflows, and business-tool integrations.", tools: ["Claude", "GPT", "LangGraph", "pgvector", "MCP"] },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="technology-section section">
      <div className="wrap">
        <div className="section-heading">
          <div><p className="eyebrow">OUR TECHNOLOGY STACK</p><h2>The tools behind<br />your next product.</h2></div>
          <p>We choose the stack around your product, existing systems, and maintenance needs. Here are the technologies we work with.</p>
        </div>
        <div className="technology-grid">
          {groups.map(({ icon: Icon, title, description, tools }) => (
            <article className="technology-card" key={title}>
              <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
              <h3>{title}</h3><p>{description}</p>
              <ul className="technology-tags">{tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
            </article>
          ))}
        </div>
        <p className="section-footnote">Already have a codebase? We can review the architecture and work with the stack that makes sense for your next release.</p>
      </div>
    </section>
  );
}
