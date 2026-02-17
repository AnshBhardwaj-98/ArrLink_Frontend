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
      scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl tracking-[0.1em] text-[#1A1A1A] font-serif font-bold"
        >
          Aethernetics
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-12">
          <Link
            to="/about"
            className="text-[11px] tracking-[0.2em] uppercase text-[#1A1A1A] font-bold hover:text-[#D4AF37] transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="bg-[#1A1A1A] text-white px-8 py-3 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-[#D4AF37] transition-all duration-300 rounded-full"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-[#1A1A1A]" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 px-6 py-12 flex flex-col gap-8 shadow-xl animate-in fade-in zoom-in-95 duration-300">
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="text-sm tracking-[0.2em] uppercase text-[#1A1A1A] font-bold text-center"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="bg-[#1A1A1A] text-white px-8 py-4 text-xs tracking-[0.2em] uppercase font-bold text-center rounded-full"
          >
            Let's Talk
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
