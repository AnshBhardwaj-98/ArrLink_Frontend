import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientFloor from "@/components/AmbientFloor";
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
        <AmbientFloor />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="section-marker mb-6 justify-center">
              <span className="h-px w-6 bg-foreground/40" />
              <span>Collaboration</span>
              <span className="h-px w-6 bg-foreground/40" />
            </div>
            <h1 className="text-4xl md:text-6xl text-foreground font-display font-bold mb-6 tracking-tighter">
              Let&apos;s{" "}
              <span className="font-serif font-normal text-[1.08em]">Talk</span>
            </h1>
            <div className="w-16 h-px bg-foreground/20 mx-auto mb-8" />
            <p className="text-foreground/60 text-lg max-w-xl mx-auto leading-relaxed font-normal">
              Tell us about your system requirements. We&apos;ll respond within 24
              hours with a preliminary assessment.
            </p>
          </div>

          <div className="bg-surface-container/40 backdrop-blur-md border border-foreground/10 p-8 md:p-12 rounded-3xl">
            {submitted ? (
              <div className="py-20 text-center animate-in fade-in zoom-in-95 duration-500">
                <div className="mb-6 inline-block p-4 bg-foreground/5 rounded-full border border-foreground/15">
                  <div className="w-8 h-8 text-foreground border-2 border-foreground/40 rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Inquiry Received
                </h2>
                <p className="text-foreground/60 font-normal max-w-sm mx-auto">
                  Thank you for reaching out. Our team will review your details
                  and contact you within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-[10px] tracking-[0.2em] uppercase font-medium text-foreground/60 border-b border-foreground/30 pb-1 hover:text-foreground hover:border-foreground transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 text-black">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-medium text-foreground/70 ml-1">
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
                      className="w-full bg-surface-container-highest/20 border border-border/10 px-5 py-4 text-sm font-normal text-foreground focus:outline-none focus:border-foreground/40 focus:bg-surface-container-highest/60 transition-all rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-medium text-foreground/70 ml-1">
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
                      className="w-full bg-surface-container-highest/20 border border-border/10 px-5 py-4 text-sm font-normal text-foreground focus:outline-none focus:border-foreground/40 focus:bg-surface-container-highest/60 transition-all rounded-xl"
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
                    className="w-full bg-surface-container-highest/20 border border-border/10 px-5 py-4 text-sm font-normal text-foreground focus:outline-none focus:border-foreground/40 focus:bg-surface-container-highest/60 transition-all rounded-xl"
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
                    className="w-full bg-surface-container-highest/20 border border-border/10 px-5 py-4 text-sm font-normal text-foreground focus:outline-none focus:border-foreground/40 focus:bg-surface-container-highest/60 transition-all rounded-xl resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto bg-foreground text-background px-12 py-5 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-foreground/90 transition-all duration-300 rounded-md disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>

          <div className="mt-24 pt-16 border-t border-border/10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-foreground/40 mb-4">
                Email Us
              </p>
              <a
                href="mailto:info@arrlink.co.in"
                className="text-sm font-normal text-foreground/60 hover:text-foreground transition-colors"
              >
                info@arrlink.co.in{" "}
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-foreground/40 mb-4">
                Availability
              </p>
              <p className="text-sm font-normal text-foreground/60">
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
