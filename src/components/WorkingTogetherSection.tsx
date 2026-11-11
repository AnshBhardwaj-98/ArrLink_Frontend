import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const engagements = [
  { id: "new-product", title: "Launch a first product", audience: "For founders and small product teams", description: "You have an idea and need to decide what belongs in the first release.", deliverables: ["A focused scope and product flow", "A working MVP with the core features", "Deployment and a handover plan"] },
  { id: "existing-product", title: "Improve existing software", audience: "For businesses with a live platform", description: "Your product works, but a slow workflow, missing feature, or difficult integration is holding it back.", deliverables: ["A review of the current application", "A prioritized improvement plan", "A tested feature or integration release"] },
  { id: "automation", title: "Automate a workflow", audience: "For operations and support teams", description: "Your team spends too much time moving data between emails, spreadsheets, and business tools.", deliverables: ["A map of one repetitive workflow", "A connected automation or AI assistant", "Review steps for sensitive actions"] },
];

export default function WorkingTogetherSection() {
  return (
    <section id="working-together" className="section wrap">
      <div className="section-heading">
        <div><p className="eyebrow">A CLEAR PLACE TO START</p><h2>You don’t need a huge project.<br />Just a useful next step.</h2></div>
        <p>For US founders and businesses looking for a development partner. Start with a focused scope, then decide what comes next.</p>
      </div>
      <div className="engagement-grid">
        {engagements.map(item => (
          <article className="engagement-card" key={item.id}>
            <p className="engagement-audience">{item.audience}</p><h3>{item.title}</h3><p>{item.description}</p>
            <ul>{item.deliverables.map(deliverable => <li key={deliverable}><Check size={17} aria-hidden="true" /><span>{deliverable}</span></li>)}</ul>
            <Link to={`/contact?project=${item.id}`} className="text-link">Discuss this project <ArrowUpRight size={17} /></Link>
          </article>
        ))}
      </div>
      <div className="collaboration-note">
        <div><h3>Working together across time zones</h3><p>Share your US time zone and preferred meeting hours. We’ll agree on a communication window, written updates, and review milestones before kickoff.</p></div>
        <div><h3>Know what you’re agreeing to</h3><p>Ask for a written scope covering deliverables, USD pricing, payment milestones, code ownership, and support. The proposal is where we agree on those details.</p></div>
      </div>
    </section>
  );
}
