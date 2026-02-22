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
    <div className="min-h-screen bg-[#FDFCFB] font-sans">
      <Navbar />
      <main className="relative pt-40 pb-32 px-6 overflow-hidden">
        {/* Background elements to match the new theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FDFCFB] to-[#F5F2EE] opacity-95" />
        <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 h-[50vh] w-[80%] bg-gradient-to-b from-[#D4AF37]/10 to-transparent blur-[120px] opacity-40" />
        <GridBackground />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4 font-semibold text-[#888]">
              Collaboration
            </p>
            <h1 className="text-4xl md:text-6xl text-[#1A1A1A] font-serif mb-6">
              Let's{" "}
              <span className="italic font-medium text-[#D4AF37]">Talk</span>
            </h1>
            <div className="w-16 h-px bg-[#D4AF37]/40 mx-auto mb-8" />
            <p className="text-[#555] text-lg max-w-xl mx-auto leading-relaxed font-light">
              Tell us about your system requirements. We'll respond within 24
              hours with a preliminary assessment.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-md border border-gray-100 p-8 md:p-12 rounded-3xl shadow-xl shadow-black/[0.02]">
            {submitted ? (
              <div className="py-20 text-center animate-in fade-in zoom-in-95 duration-500">
                <div className="mb-6 inline-block p-4 bg-[#D4AF37]/10 rounded-full">
                  <div className="w-8 h-8 text-[#D4AF37] border-2 border-[#D4AF37] rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                </div>
                <h2 className="text-2xl font-serif text-[#1A1A1A] mb-4">
                  Inquiry Received
                </h2>
                <p className="text-[#666] font-light max-w-sm mx-auto">
                  Thank you for reaching out. Our team will review your details
                  and contact you within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-[10px] tracking-[0.2em] uppercase font-bold text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1A1A1A] ml-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="James Sterling"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full bg-white/50 border border-gray-100 px-5 py-4 text-sm font-light focus:outline-none focus:border-[#D4AF37]/40 focus:bg-white transition-all rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1A1A1A] ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="j.sterling@sterling-global.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full bg-white/50 border border-gray-100 px-5 py-4 text-sm font-light focus:outline-none focus:border-[#D4AF37]/40 focus:bg-white transition-all rounded-xl"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1A1A1A] ml-1">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Sterling Global Industries"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    className="w-full bg-white/50 border border-gray-100 px-5 py-4 text-sm font-light focus:outline-none focus:border-[#D4AF37]/40 focus:bg-white transition-all rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1A1A1A] ml-1">
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
                    className="w-full bg-white/50 border border-gray-100 px-5 py-4 text-sm font-light focus:outline-none focus:border-[#D4AF37]/40 focus:bg-white transition-all rounded-xl resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto bg-[#1A1A1A] text-white px-12 py-4 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-[#D4AF37] transition-all duration-500 rounded-full shadow-lg shadow-black/5 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>

          <div className="mt-24 pt-16 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#1A1A1A] mb-4">
                Email Us
              </p>
              <a
                href="mailto:info@aethernetics.co.in"
                className="text-sm font-light text-[#666] hover:text-[#D4AF37] transition-colors"
              >
                info@aethernetics.co.in{" "}
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#1A1A1A] mb-4">
                Availability
              </p>
              <p className="text-sm font-light text-[#666]">
                Mon — Fri, 9am — 6pm EST
              </p>
            </div>
            {/* <div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#1A1A1A] mb-4">Location</p>
              <p className="text-sm font-light text-[#666]">Remote-first, Global Operations</p>
            </div> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
