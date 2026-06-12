import { Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.482 3.239H4.293L17.607 20.65z" />
  </svg>
);

const Footer = () => (
  <footer className="py-12 px-6 bg-surface-lowest border-t border-border/10">
    <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
        <div className="max-w-sm">
          <Link
            to="/"
            className="text-lg font-display font-bold tracking-tighter text-on-surface"
          >
            ArrLink
          </Link>
          <p className="text-on-surface/60 mt-3 text-sm leading-relaxed font-sans font-normal">
            Architecting high-performance digital ecosystems through bespoke
            software engineering and artificial intelligence.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.linkedin.com/company/arrlink-ai/"
              className="text-on-surface/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" strokeWidth={1} />
            </a>
            <a
              href="https://www.instagram.com/arrlink?igsh=amxwajF5OWY1em8y"
              className="text-on-surface/70 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" strokeWidth={1} />
            </a>
            <a
              href="https://x.com/ArrLink_"
              className="text-on-surface/70 hover:text-primary transition-colors"
              aria-label="X"
            >
              <XIcon className="w-4 h-4 mt-0.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-on-surface">
              Company
            </span>
            <Link
              to="/about"
              className="text-sm text-on-surface/60 hover:text-primary transition-colors font-sans"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm text-on-surface/60 hover:text-primary transition-colors font-sans"
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-on-surface">
              Support
            </span>
            <a
              href="mailto:info@arrlink.co.in"
              className="text-sm text-on-surface/60 hover:text-primary transition-colors font-sans"
            >
              info@arrlink.co.in
            </a>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[11px] tracking-[0.1em] text-on-surface/40 font-sans">
          © {new Date().getFullYear()} ArrLink. Designed for Excellence.
        </p>
        <div className="flex gap-8">
          <Link
            to="/privacy"
            className="text-[11px] tracking-[0.1em] text-on-surface/40 hover:text-on-surface transition-colors uppercase font-medium"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="text-[11px] tracking-[0.1em] text-on-surface/40 hover:text-on-surface transition-colors uppercase font-medium"
          >
            Terms
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
