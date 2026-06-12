import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          cc_emails: import.meta.env.VITE_CC_EMAILS || "",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSubmitted(true);
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="relative pt-40 pb-32 px-6 overflow-hidden">
        {/* Background elements to match the new theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-lowest via-surface to-surface-lowest opacity-95" />
        <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 h-[50vh] w-[80%] bg-gradient-to-b from-primary/10 to-transparent blur-[120px] opacity-40" />
        <GridBackground />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4 font-bold text-primary">
              Collaboration
            </p>
            <h1 className="text-4xl md:text-6xl text-on-surface font-display font-bold mb-6 tracking-tighter">
              Let's{" "}
              <span className="text-primary">Talk</span>
            </h1>
            <div className="w-16 h-px bg-primary/20 mx-auto mb-8" />
            <p className="text-on-surface/60 text-lg max-w-xl mx-auto leading-relaxed font-normal">
              Tell us about your system requirements. We'll respond within 24
              hours with a preliminary assessment.
            </p>
          </div>

          <div className="bg-surface-container/40 backdrop-blur-md border border-border/10 p-8 md:p-12 rounded-3xl ambient-shadow">
            {submitted ? (
              <div className="py-20 text-center animate-in fade-in zoom-in-95 duration-500">
                <div className="mb-6 inline-block p-4 bg-primary/10 rounded-full">
                  <div className="w-8 h-8 text-primary border-2 border-primary rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                </div>
                <h2 className="text-2xl font-display font-bold text-on-surface mb-4">
                  Inquiry Received
                </h2>
                <p className="text-on-surface/60 font-normal max-w-sm mx-auto">
                  Thank you for reaching out. Our team will review your details
                  and contact you within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-[10px] tracking-[0.2em] uppercase font-bold text-on-surface border-b border-on-surface pb-1 hover:text-primary hover:border-primary transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 text-black">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-white ml-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Arjun Sharma"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full bg-surface-container-highest/20 border border-border/10 px-5 py-4 text-sm font-normal text-on-surface focus:outline-none focus:border-primary/40 focus:bg-surface-container-highest/40 transition-all rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-white ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="arjun.sharma@tata.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full bg-surface-container-highest/20 border border-border/10 px-5 py-4 text-sm font-normal text-on-surface focus:outline-none focus:border-primary/40 focus:bg-surface-container-highest/40 transition-all rounded-xl"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-white ml-1">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Tata Consultancy Services"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    className="w-full bg-surface-container-highest/20 border border-border/10 px-5 py-4 text-sm font-normal text-on-surface focus:outline-none focus:border-primary/40 focus:bg-surface-container-highest/40 transition-all rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-white ml-1">
                    Project Brief
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Briefly describe your technical objectives, current infrastructure, and any specific scale requirements..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full bg-surface-container-highest/20 border border-border/10 px-5 py-4 text-sm font-normal text-on-surface focus:outline-none focus:border-primary/40 focus:bg-surface-container-highest/40 transition-all rounded-xl resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto gradient-primary text-on-primary px-12 py-5 text-[10px] tracking-[0.2em] uppercase font-bold hover:opacity-90 transition-all duration-500 rounded-md shadow-xl disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>

          <div className="mt-24 pt-16 border-t border-border/10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-on-surface/40 mb-4">
                Email Us
              </p>
              <a
                href="mailto:info@arrlink.co.in"
                className="text-sm font-normal text-on-surface/60 hover:text-primary transition-colors"
              >
                info@arrlink.co.in{" "}
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-on-surface/40 mb-4">
                Availability
              </p>
              <p className="text-sm font-normal text-on-surface/60">
                Mon — Fri, 9am — 6pm EST
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
