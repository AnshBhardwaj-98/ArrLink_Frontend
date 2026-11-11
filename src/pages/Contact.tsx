import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useSEO } from "@/hooks/use-seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Contact() {
    useSEO("/contact");
    const [searchParams] = useSearchParams();
    const projectOptions: Record<string, string> = { "new-product": "Launch a first product", "existing-product": "Improve existing software", automation: "Automate a workflow" };
    const initialProject = searchParams.get("project") ?? "";
    const [projectType, setProjectType] = useState(projectOptions[initialProject] ? initialProject : "");
    const [timeZone, setTimeZone] = useState("");
    const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
            setError("The contact form is temporarily unavailable. Please email info@arrlink.com with your project details.");
            return;
        }
        setLoading(true);
        try {
            await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, { ...form, message: `${form.message}\n\nProject: ${projectOptions[projectType] || "Not specified"}\nTime zone / meeting preferences: ${timeZone || "Not specified"}`, cc_emails: import.meta.env.VITE_CC_EMAILS || "" }, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
            setSubmitted(true);
            setForm({ name: "", email: "", company: "", message: "" });
            setProjectType("");
            setTimeZone("");
        }
        catch {
            setError("We couldn’t send your message. Please try again or email info@arrlink.com.");
        }
        finally {
            setLoading(false);
        }
    };
    return <><Navbar /><main id="main-content" className="wrap contact-layout section">
    <div className="contact-intro"><p className="eyebrow">LET’S START A CONVERSATION</p><h1>What are you<br />thinking <span>about?</span></h1><p>A product idea, a workflow that needs fixing, or a platform ready for its next chapter. Tell us a little about it.</p><a className="text-link" href="mailto:info@arrlink.com"><Mail size={18}/> info@arrlink.com <ArrowUpRight size={16}/></a><div className="contact-next"><p className="eyebrow">WHAT HAPPENS NEXT</p><ol><li><span>01</span> We read through your project details.</li><li><span>02</span> We get in touch to understand your goals.</li><li><span>03</span> Together, we work out a practical next step.</li></ol></div></div>
    <div className="contact-panel">{submitted ? <div className="contact-success" role="status"><CheckCircle2 size={44}/><h2>Inquiry Received</h2><p>Thanks for sharing your idea. Our team will review your details and get in touch.</p><button className="button" onClick={() => setSubmitted(false)}>Send another message <ArrowUpRight size={17}/></button></div> :
            <form onSubmit={handleSubmit} aria-busy={loading}>
        <h2>Tell us about your project.</h2><p>Fields marked * are required.</p>
        <div className="form-row"><div><label htmlFor="name">Your name *</label><input id="name" name="name" autoComplete="name" required maxLength={120} placeholder="Your full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}/></div><div><label htmlFor="email">Email address *</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}/></div></div>
        <label htmlFor="company">Company</label><input id="company" name="company" autoComplete="organization" maxLength={200} placeholder="Your company name" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}/>
        <label htmlFor="project-type">What kind of help do you need?</label>
        <select id="project-type" value={projectType} onChange={e => setProjectType(e.target.value)}><option value="">Not sure yet — let’s discuss</option>{Object.entries(projectOptions).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select>
        <label htmlFor="time-zone">Time zone & preferred meeting hours <span>(optional)</span></label>
        <input id="time-zone" maxLength={200} placeholder="e.g. US Eastern, weekday mornings" value={timeZone} onChange={e => setTimeZone(e.target.value)} />
        <label htmlFor="message">What would you like to build? *</label><textarea id="message" name="message" required maxLength={6000} rows={6} placeholder="Briefly describe your technical objectives, your idea, or the problem you’d like to solve..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}/>
        {error && <p role="alert" className="form-error">{error}</p>}
        <p className="form-privacy">We’ll use your details to respond to your inquiry. Read our <Link to="/privacy">privacy policy</Link>.</p><button type="submit" disabled={loading} className="button">{loading ? "Sending..." : "Submit Inquiry"}<ArrowUpRight size={18}/></button>
      </form>}</div>
  </main><Footer /></>;
}
