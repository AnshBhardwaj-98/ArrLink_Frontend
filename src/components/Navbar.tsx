import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const sectionLinks = [
    { label: "Services", href: "/#services" },
    { label: "Philosophy", href: "/#philosophy" },
    { label: "Case Study", href: "/#case-study" },
    { label: "Process", href: "/#process" },
    { label: "Stack", href: "/#stack" },
  ];

  const pageLinks = [
    { label: "About", href: "/about" },
  ];

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHome && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-light tracking-[0.2em] uppercase text-foreground">
          Aethernetics
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {sectionLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleSectionClick(e, l.href)}
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          {pageLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-xs tracking-widest uppercase border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-6 flex flex-col gap-4">
          {sectionLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleSectionClick(e, l.href)}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          {pageLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="text-sm tracking-widest uppercase border border-foreground px-4 py-2 text-center hover:bg-foreground hover:text-background transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
