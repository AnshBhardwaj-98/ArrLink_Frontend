import { Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/use-reveal";

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.482 3.239H4.293L17.607 20.65z" />
  </svg>
);

const Footer = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <footer
      className="relative pt-20 pb-12 px-6 overflow-hidden"
      style={{ background: "hsl(247 27% 9%)", color: "hsl(36 36% 97%)" }}
    >
      {/* Hairline grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(36 36% 97% / 0.04) 1px, transparent 1px), linear-gradient(to bottom, hsl(36 36% 97% / 0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div ref={ref} className="reveal relative z-10 max-w-7xl mx-auto px-4">
        {/* Big wordmark moment */}
        <div className="mb-16 pb-12 border-b border-white/10">
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="h-px w-6 bg-white/40" />
            <p className="text-[10px] tracking-[0.35em] uppercase font-medium text-white/50">
              § 07 · Engineering Atelier
            </p>
          </div>
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-white">
            Arr<span className="font-serif font-normal text-[1.08em]">L</span>ink.
          </h3>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-sm">
            <p className="text-white/65 text-sm leading-relaxed font-sans font-normal mb-6">
              Architecting high-performance digital ecosystems through bespoke
              software engineering and artificial intelligence.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/arrlink-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/[0.04] border border-white/10
                           text-white/70 hover:text-white hover:border-white/30
                           transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" strokeWidth={1.25} />
              </a>
              <a
                href="https://www.instagram.com/arrlink?igsh=amxwajF5OWY1em8y"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/[0.04] border border-white/10
                           text-white/70 hover:text-white hover:border-white/30
                           transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.25} />
              </a>
              <a
                href="https://x.com/ArrLink_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/[0.04] border border-white/10
                           text-white/70 hover:text-white hover:border-white/30
                           transition-all duration-300"
                aria-label="X"
              >
                <XIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-white/40">
                Company
              </span>
              <Link
                to="/about"
                className="group inline-flex items-center gap-1 text-sm text-white/65 hover:text-white transition-colors font-sans w-fit"
              >
                <span>About</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-1 text-sm text-white/65 hover:text-white transition-colors font-sans w-fit"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-white/40">
                Reach
              </span>
              <a
                href="mailto:info@arrlink.co.in"
                className="group inline-flex items-center gap-1 text-sm text-white/65 hover:text-white transition-colors font-sans w-fit"
              >
                <span>info@arrlink.co.in</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <span className="text-xs text-white/40 font-normal">
                Mon — Fri · 9am — 6pm IST
              </span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] tracking-[0.1em] text-white/40 font-sans">
            © {new Date().getFullYear()} ArrLink. Designed for Excellence.
          </p>
          <div className="flex gap-8">
            <Link
              to="/privacy"
              className="text-[11px] tracking-[0.1em] text-white/40 hover:text-white transition-colors uppercase font-medium"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-[11px] tracking-[0.1em] text-white/40 hover:text-white transition-colors uppercase font-medium"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
