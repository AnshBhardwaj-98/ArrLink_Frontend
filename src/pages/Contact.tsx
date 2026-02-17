import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-32 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Contact</p>
          <h1 className="text-3xl md:text-5xl font-extralight tracking-tight mb-4">
            Book a Consultation
          </h1>
          <p className="text-sm text-muted-foreground font-light mb-16 max-w-lg">
            Tell us about your system requirements. We'll respond within 24 hours with a preliminary assessment.
          </p>

          {submitted ? (
            <div className="border border-primary p-10 text-center">
              <p className="text-sm tracking-widest uppercase text-primary mb-2">Received</p>
              <p className="text-muted-foreground text-sm font-light">
                We'll review your inquiry and get back to you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">Name</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-border bg-transparent px-4 py-3 text-sm font-light focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-border bg-transparent px-4 py-3 text-sm font-light focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">Company</label>
                <input
                  type="text"
                  maxLength={100}
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm font-light focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                  Project Details
                </label>
                <textarea
                  required
                  maxLength={2000}
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your system requirements, current pain points, and timeline."
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm font-light focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-muted-foreground/50"
                />
              </div>
              <button
                type="submit"
                className="bg-foreground text-background px-8 py-3 text-sm tracking-widest uppercase hover:bg-primary transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          )}

          <div className="mt-20 pt-12 border-t border-border grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Email</p>
              <a href="mailto:hello@aethernetics.com" className="text-sm font-light hover:text-primary transition-colors">
                hello@aethernetics.com
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Response Time</p>
              <p className="text-sm font-light">Within 24 hours</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Based In</p>
              <p className="text-sm font-light">Remote-first, Global</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
