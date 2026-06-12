import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";

const Terms = () => {
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
              Terms of <span className="italic font-medium text-[#D4AF37]">Service</span>
            </h1>
            <div className="w-12 h-px bg-[#D4AF37]/40 mb-10" />
            <p className="text-sm text-[#666] font-light italic">
              Last Updated: February 17, 2026
            </p>
          </div>

          <div className="prose prose-sm max-w-none text-[#555] font-light leading-relaxed space-y-10">
            <section className="space-y-4">
              <h2 className="text-xl font-serif text-[#1A1A1A] font-semibold uppercase tracking-wide">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the ArrLink website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-serif text-[#1A1A1A] font-semibold uppercase tracking-wide">2. Use License</h2>
              <p>
                Permission is granted to temporarily view the materials on ArrLink' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-serif text-[#1A1A1A] font-semibold uppercase tracking-wide">3. Disclaimer</h2>
              <p>
                The materials on ArrLink' website are provided on an 'as is' basis. ArrLink makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability or fitness for a particular purpose.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-serif text-[#1A1A1A] font-semibold uppercase tracking-wide">4. Limitations</h2>
              <p>
                In no event shall ArrLink or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ArrLink' website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-serif text-[#1A1A1A] font-semibold uppercase tracking-wide">5. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which ArrLink operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
