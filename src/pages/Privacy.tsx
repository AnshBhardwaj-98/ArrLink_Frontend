import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans">
      <Navbar />
      <main className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FDFCFB] to-[#F5F2EE] opacity-95" />
        <GridBackground />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] tracking-[0.4em] uppercase mb-4 font-semibold text-[#888]">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl text-[#1A1A1A] font-serif mb-6">
              Privacy <span className="italic font-medium text-[#D4AF37]">Policy</span>
            </h1>
            <div className="w-12 h-px bg-[#D4AF37]/40 mb-10" />
            <p className="text-sm text-[#666] font-light italic">
              Last Updated: February 17, 2026
            </p>
          </div>

          <div className="prose prose-sm max-w-none text-[#555] font-light leading-relaxed space-y-10">
            <section className="space-y-4">
              <h2 className="text-xl font-serif text-[#1A1A1A] font-semibold uppercase tracking-wide">1. Information Collection</h2>
              <p>
                We collect information that you provide directly to us when you inquire about our services, subscribe to our newsletter, or communicate with us. This may include your name, email address, company name, and project details.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-serif text-[#1A1A1A] font-semibold uppercase tracking-wide">2. Use of Information</h2>
              <p>
                ArrLink uses the collected data to provide and improve our services, communicate with you regarding project inquiries, and send administrative or promotional information. We do not sell your personal information to third parties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-serif text-[#1A1A1A] font-semibold uppercase tracking-wide">3. Data Security</h2>
              <p>
                We implement industry-standard security measures designed to protect your information from unauthorized access, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-serif text-[#1A1A1A] font-semibold uppercase tracking-wide">4. Third-Party Services</h2>
              <p>
                Our website may contain links to third-party sites or utilize third-party analytics tools. We are not responsible for the privacy practices of these external entities.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-serif text-[#1A1A1A] font-semibold uppercase tracking-wide">5. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at <a href="mailto:info@arrlink.co.in" className="text-[#D4AF37] hover:underline transition-all">info@arrlink.co.in</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
