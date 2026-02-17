import { MapPin, BarChart3, Shield, LayoutDashboard } from "lucide-react";

const metrics = [
  { icon: MapPin, label: "Route Optimization", value: "Dynamic multi-stop routing with real-time constraint solving" },
  { icon: Shield, label: "Geo-Validation", value: "Google Maps API integration for address verification and zone mapping" },
  { icon: LayoutDashboard, label: "Admin Dashboard", value: "Full operational visibility with role-based access controls" },
  { icon: BarChart3, label: "CRM Integration", value: "Bi-directional sync with existing CRM for lead-to-route pipeline" },
];

const CaseStudySection = () => (
  <section id="case-study" className="py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Case Study</p>
      <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-4">
        Salesman Tour Planning System
      </h2>
      <p className="text-sm text-muted-foreground font-light mb-16 max-w-2xl">
        A custom route optimization platform integrated with CRM validation and Google Maps API — replacing spreadsheet-based planning with a deterministic, data-driven system.
      </p>

      <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
        {metrics.map((m) => (
          <div key={m.label} className="bg-background p-8">
            <div className="flex items-center gap-3 mb-4">
              <m.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
              <span className="text-xs tracking-[0.2em] uppercase font-mono text-primary">{m.label}</span>
            </div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">{m.value}</p>
          </div>
        ))}
      </div>

      {/* System diagram */}
      <div className="mt-16 border border-border p-8">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">System Architecture</p>
        <svg viewBox="0 0 800 200" className="w-full text-foreground opacity-60" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Nodes */}
          <rect x="20" y="70" width="120" height="60" rx="2" />
          <text x="80" y="105" textAnchor="middle" fill="currentColor" fontSize="11" fontFamily="monospace" stroke="none">CRM Input</text>

          <rect x="200" y="70" width="120" height="60" rx="2" />
          <text x="260" y="105" textAnchor="middle" fill="currentColor" fontSize="11" fontFamily="monospace" stroke="none">Validation</text>

          <rect x="380" y="70" width="120" height="60" rx="2" />
          <text x="440" y="105" textAnchor="middle" fill="currentColor" fontSize="11" fontFamily="monospace" stroke="none">Route Engine</text>

          <rect x="560" y="70" width="120" height="60" rx="2" />
          <text x="620" y="105" textAnchor="middle" fill="currentColor" fontSize="11" fontFamily="monospace" stroke="none">Dashboard</text>

          <rect x="380" y="10" width="120" height="40" rx="2" strokeDasharray="4" />
          <text x="440" y="35" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="monospace" stroke="none">Maps API</text>

          {/* Arrows */}
          <line x1="140" y1="100" x2="200" y2="100" markerEnd="url(#arrow)" />
          <line x1="320" y1="100" x2="380" y2="100" markerEnd="url(#arrow)" />
          <line x1="500" y1="100" x2="560" y2="100" markerEnd="url(#arrow)" />
          <line x1="440" y1="50" x2="440" y2="70" markerEnd="url(#arrow)" />

          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <path d="M0,0 L8,3 L0,6" fill="currentColor" stroke="none" />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  </section>
);

export default CaseStudySection;
