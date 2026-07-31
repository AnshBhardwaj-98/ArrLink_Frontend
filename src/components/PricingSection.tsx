import { Check, X, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AmbientFloor from "./AmbientFloor";
import { useReveal } from "@/hooks/use-reveal";

const tiers = [
  { name: "Starter", tag: "Launch", price: "15,000" },
  { name: "Growth", tag: "Most Popular", price: "20,000", popular: true },
  { name: "Business Pro", tag: "Authority", price: "30,000" },
  { name: "Enterprise", tag: "Bespoke", price: null },
];

// One row per feature. `values` maps 1:1 to `tiers`.
// true = included · false = not included · null = by agreement (—) · string = detail
type Cell = boolean | string | null;
const rows: { label: string; values: [Cell, Cell, Cell, Cell] }[] = [
  { label: "Responsive Website", values: [true, true, true, true] },
  {
    label: "AI Chatbot",
    values: ["Basic", "Advanced", "Custom Trained", "Custom AI Agent"],
  },
  { label: "Voicebot", values: [false, false, true, true] },
  { label: "Payment Gateway", values: [true, true, true, true] },
  {
    label: "Admin Dashboard",
    values: ["Basic", "Advanced", "Advanced", "Custom"],
  },
  { label: "SEO Setup", values: [false, true, true, "Enterprise SEO"] },
  { label: "Google Search Console", values: [false, true, true, true] },
  { label: "Google Analytics", values: [false, true, true, true] },
  { label: "Blog / CMS", values: [false, false, true, true] },
  { label: "CRM Integration", values: [false, false, true, true] },
  { label: "WhatsApp Integration", values: [false, "Optional", true, true] },
  { label: "API Integrations", values: [false, "1", "3", "Unlimited"] },
  {
    label: "AI Automation Workflows",
    values: [false, false, "Basic", "Advanced"],
  },
  { label: "Multi-language Support", values: [false, false, true, true] },
  {
    label: "Cloud Deployment",
    values: ["Shared", "Shared", "Dedicated", "Custom Infra"],
  },
  {
    label: "Priority Support",
    values: [false, false, true, "Dedicated Account Manager"],
  },
  { label: "Revisions", values: ["15", "20", "30", "As Required"] },
  {
    label: "Scope Changes",
    values: [false, "1", "2", "Flexible Development"],
  },
  {
    label: "Delivery Timeline",
    values: ["Standard", "Priority", "High Priority", "Dedicated Team"],
  },
];

const Cell = ({ value, popular }: { value: Cell; popular?: boolean }) => {
  if (value === true)
    return (
      <span
        className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${
          popular ? "bg-primary/15" : "bg-primary/10"
        }`}
      >
        <Check className="h-3 w-3 text-primary" strokeWidth={3} />
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-foreground/[0.04]">
        <X className="h-3 w-3 text-foreground/25" strokeWidth={2.5} />
      </span>
    );
  if (value === null) return <span className="text-foreground/20">—</span>;
  return (
    <span className="text-xs font-medium text-foreground/75 tracking-wide">
      {value}
    </span>
  );
};

const PricingSection = () => {
  const headerRef = useReveal<HTMLDivElement>();
  const tableRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="pricing"
      className="relative py-32 px-6 bg-background overflow-hidden"
    >
      <AmbientFloor />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className="reveal mb-16 text-center max-w-2xl mx-auto px-4"
        >
          <div className="section-marker mb-6 justify-center">
            <span className="h-px w-6 bg-foreground/40" />
            <span>Engagement Tiers</span>
            <span className="h-px w-6 bg-foreground/40" />
          </div>
          <h2 className="text-4xl md:text-6xl text-foreground font-display font-bold mb-5 tracking-tighter">
            Plans built to{" "}
            <span className="font-serif font-normal text-[1.08em]">
              scale with you.
            </span>
          </h2>
          <p className="text-foreground/60 text-base md:text-lg leading-relaxed mx-auto">
            Four fixed-scope engagements — from launch to enterprise. Compare
            what's included, then pick the tier that fits.
          </p>
        </div>

        {/* Scroll wrapper — table scrolls horizontally on small screens */}
        <div
          ref={tableRef}
          className="reveal -mx-6 px-6 pt-5 md:mx-0 md:px-0 overflow-x-auto overflow-y-visible"
        >
          <table className="w-full min-w-[820px] border-separate border-spacing-0">
            {/* Column headers */}
            <thead>
              <tr>
                <th className="sticky left-0 z-20 bg-background text-left align-bottom pb-6 pr-4 w-[26%]">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-foreground/40">
                    What&apos;s included
                  </span>
                </th>
                {tiers.map((t) => (
                  <th
                    key={t.name}
                    scope="col"
                    className={`align-bottom px-4 pb-6 text-center ${
                      t.popular
                        ? "relative rounded-t-2xl bg-primary/[0.05]"
                        : ""
                    }`}
                  >
                    {t.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[9px] tracking-[0.2em] uppercase font-bold text-primary-foreground shadow-md whitespace-nowrap">
                        <Sparkles className="h-3 w-3" strokeWidth={2} />
                        Most Popular
                      </span>
                    )}
                    <div className={t.popular ? "pt-4" : ""}>
                      <div className="text-lg font-display font-bold text-foreground tracking-tight">
                        {t.name}
                      </div>
                      <div
                        className={`text-[9px] tracking-[0.25em] uppercase font-medium mb-3 ${
                          t.popular ? "text-primary" : "text-foreground/40"
                        }`}
                      >
                        {t.tag}
                      </div>
                      <div className="flex items-end justify-center gap-1 leading-none h-9">
                        {t.price ? (
                          <>
                            <span className="text-sm font-display font-medium text-foreground/50 pb-0.5">
                              ₹
                            </span>
                            <span className="text-3xl font-display font-bold text-foreground tracking-tighter tabular-nums">
                              {t.price}
                            </span>
                          </>
                        ) : (
                          <span className="text-3xl font-display font-bold text-foreground tracking-tighter">
                            Custom
                          </span>
                        )}
                      </div>
                      <div className="text-[9px] tracking-[0.2em] uppercase font-medium text-foreground/40 mt-1.5">
                        {t.price ? "One-time" : "Tailored quote"}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, ri) => (
                <tr key={row.label} className="group">
                  <th
                    scope="row"
                    className="sticky left-0 z-10 bg-background text-left py-4 pr-4 font-sans font-medium text-sm text-foreground/80 border-t border-foreground/[0.07]"
                  >
                    {row.label}
                  </th>
                  {row.values.map((v, ci) => (
                    <td
                      key={ci}
                      className={`py-4 px-4 text-center border-t border-foreground/[0.07] ${
                        tiers[ci].popular ? "bg-primary/[0.05]" : ""
                      } ${ri === rows.length - 1 && tiers[ci].popular ? " " : ""}`}
                    >
                      <Cell value={v} popular={tiers[ci].popular} />
                    </td>
                  ))}
                </tr>
              ))}

              {/* CTA row */}
              <tr>
                <td className="sticky left-0 z-10 bg-background" />
                {tiers.map((t) => (
                  <td
                    key={t.name}
                    className={`pt-6 px-4 pb-2 text-center ${t.popular ? "bg-primary/[0.05] rounded-b-2xl" : ""}`}
                  >
                    <Link
                      to="/contact"
                      className={`group/btn inline-flex w-full items-center justify-center gap-1.5 rounded-md px-4 py-3
                                  text-[10px] tracking-[0.18em] uppercase font-bold transition-all duration-300 hover:-translate-y-0.5
                                  ${
                                    t.popular
                                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                      : "border border-foreground/15 text-foreground hover:border-foreground/40 hover:bg-foreground/[0.03]"
                                  }`}
                    >
                      <span>{t.price ? "Get Started" : "Get a Quote"}</span>
                      <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
