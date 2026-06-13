import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "https://blog.arrlink.com", label: "Blog", external: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border py-2.5" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          to="/"
          className="group inline-flex items-center gap-2.5 text-lg tracking-tighter font-display font-bold"
          aria-label="ArrLink home"
        >
          <img
            src="https://public.assets.vnytros.dev/arrlink.logo.png"
            alt=""
            className="h-7 w-auto select-none transition-transform duration-500 group-hover:rotate-[8deg]"
            draggable={false}
          />
          <span className="text-foreground">ArrLink</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const active = !link.external && isActive(link.to);
            const content = (
              <>
                <span
                  className={
                    active
                      ? "text-foreground"
                      : "text-foreground/60 group-hover:text-foreground"
                  }
                >
                  {link.label}
                </span>
                <span
                  aria-hidden
                  className={`absolute -bottom-1.5 left-0 right-0 h-px bg-foreground transition-all duration-300 ${
                    active
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100"
                  }`}
                  style={{ transformOrigin: "left center" }}
                />
              </>
            );
            const className =
              "relative group text-[11px] tracking-[0.25em] uppercase font-medium transition-colors duration-300";
            return link.external ? (
              <a key={link.to} href={link.to} className={className}>
                {content}
              </a>
            ) : (
              <Link key={link.to} to={link.to} className={className}>
                {content}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 bg-foreground text-background
                       px-4 py-2 text-[11px] tracking-[0.18em] uppercase font-bold rounded-md
                       hover:bg-foreground/90 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-border px-6 py-10 flex flex-col gap-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-300">
          {links.map((link) => {
            const active = !link.external && isActive(link.to);
            const className = `text-sm tracking-[0.2em] uppercase font-bold text-center transition-colors ${
              active ? "text-foreground" : "text-foreground/70"
            }`;
            return link.external ? (
              <a
                key={link.to}
                href={link.to}
                onClick={() => setOpen(false)}
                className={className}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={className}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="bg-foreground text-background px-8 py-4 text-xs tracking-[0.1em] uppercase font-bold text-center rounded-md"
          >
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
