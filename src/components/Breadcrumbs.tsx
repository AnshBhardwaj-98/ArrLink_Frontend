import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import JsonLd from "./JsonLd";
import { SITE_URL } from "@/seo/routes";

export type Crumb = { label: string; to: string };

const Breadcrumbs = ({ items }: { items: Crumb[] }) => {
  const all = [{ label: "Home", to: "/" }, ...items];
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            item: `${SITE_URL}${c.to}`,
          })),
        }}
      />
      <nav aria-label="Breadcrumb" className="mb-10">
        <ol className="flex flex-wrap items-center gap-1.5 text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium text-foreground/45">
          {all.map((c, i) => (
            <li key={c.to} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="w-3 h-3 text-foreground/30" aria-hidden />}
              {i === all.length - 1 ? (
                <span aria-current="page" className="text-foreground/70">{c.label}</span>
              ) : (
                <Link to={c.to} className="hover:text-foreground transition-colors">{c.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
