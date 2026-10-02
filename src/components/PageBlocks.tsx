import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

/** Section marker + H2 with the serif accent used across the site. */
export const SectionHeader = ({
  marker,
  title,
  accent,
  intro,
  className = "",
}: {
  marker: string;
  title: string;
  accent?: string;
  intro?: string;
  className?: string;
}) => (
  <div className={className}>
    <div className="section-marker mb-6">
      <span className="h-px w-6 bg-foreground/40" />
      <span>{marker}</span>
    </div>
    <h2 className="text-3xl md:text-5xl text-foreground font-display font-bold tracking-tighter text-balance">
      {title}
      {accent && (
        <>
          {" "}
          <span className="font-serif font-normal text-[1.08em]">{accent}</span>
        </>
      )}
    </h2>
    {intro && <p className="mt-5 text-foreground/60 text-base md:text-lg leading-relaxed max-w-xl">{intro}</p>}
  </div>
);

export const LinkCard = ({ to, title, desc }: { to: string; title: string; desc?: string }) => (
  <Link
    to={to}
    className="group flex items-start justify-between gap-4 p-5 rounded-xl border border-foreground/10 bg-background hover:border-foreground/30 hover:-translate-y-0.5 transition-all duration-300"
  >
    <span>
      <span className="block font-display font-bold text-foreground tracking-tight">{title}</span>
      {desc && <span className="block mt-1.5 text-sm text-foreground/55 leading-relaxed">{desc}</span>}
    </span>
    <ArrowUpRight className="w-4 h-4 shrink-0 text-foreground/40 group-hover:text-foreground transition-colors" />
  </Link>
);
