import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
const links = [{ to: "/services", label: "Services" }, { to: "/#technology", label: "Technology" }, { to: "/#work", label: "Our work" }, { to: "/about", label: "About us" }, { to: "/blog", label: "Blog" }];
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { pathname, hash } = useLocation();
    useEffect(() => { setOpen(false); }, [pathname, hash]);
    useEffect(() => { const close = (e: KeyboardEvent) => { if (e.key === "Escape")
        setOpen(false); }; document.addEventListener("keydown", close); return () => document.removeEventListener("keydown", close); }, []);
    return <><a className="skip-link" href="#main-content">Skip to content</a><header className="site-header"><div className="wrap nav-inner">
    <Link to="/" className="wordmark" aria-label="ArrLink home"><img className="brand-logo" src="/brand-mark.svg" width="35" height="35" alt="" />arrlink<span className="brand-dot">.</span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(l => <Link key={l.to} to={l.to} aria-current={pathname === l.to ? "page" : undefined}>{l.label}</Link>)}</nav>
    <Link to="/contact" className="button nav-cta">Let’s talk <ArrowUpRight size={17}/></Link>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</button>
  </div>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{links.map(l => <Link onClick={() => setOpen(false)} key={l.to} to={l.to}>{l.label}</Link>)}<Link to="/contact">Let’s talk ↗</Link></nav>}</header></>;
}
