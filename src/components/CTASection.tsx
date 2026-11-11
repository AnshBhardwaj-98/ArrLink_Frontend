import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
export default function CTASection() { return <section className="cta-section"><div className="wrap cta-inner"><div><p className="eyebrow">HAVE SOMETHING IN MIND?</p><h2>Let’s make<br />it happen<span>.</span></h2><p>A new idea, an existing product, or a problem worth solving.<br />We’d love to hear about it.</p><Link className="button button-light" to="/contact">Tell us about your project <ArrowUpRight size={18}/></Link></div><span className="cta-symbol" aria-hidden="true">↗</span></div></section>; }
