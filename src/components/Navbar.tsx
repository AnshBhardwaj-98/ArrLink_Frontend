import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "glass border-b border-border py-2" : "bg-transparent py-3"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-lg tracking-tighter text-on-surface font-display font-bold"
        >
          ArrLink
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-12">
          <Link
            to="/about"
            className="text-xs tracking-[0.2em] uppercase text-on-surface/80 font-bold hover:text-primary transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="gradient-primary text-on-primary px-4 py-1.5 text-xs tracking-[0.1em] uppercase font-bold hover:opacity-90 transition-all duration-300 rounded-sm"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-on-surface" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-border px-6 py-12 flex flex-col gap-8 shadow-xl animate-in fade-in zoom-in-95 duration-300">
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="text-sm tracking-[0.2em] uppercase text-on-surface font-bold text-center"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="gradient-primary text-on-primary px-8 py-4 text-xs tracking-[0.1em] uppercase font-bold text-center rounded-md"
          >
            Let's Talk
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
