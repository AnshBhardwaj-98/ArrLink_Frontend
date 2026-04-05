import { Quote, MessageSquare, Star, User, Building2, Sparkles } from "lucide-react";

const feedback = [
  {
    text: "Aethernetics transformed our workflow with their innovative AI solutions and precise engineering.",
    author: "Alex Rivera",
    role: "Director of Innovation",
    icon: Sparkles
  },
  {
    text: "The most precise engineering atelier we've ever worked with. Their attention to detail is unmatched.",
    author: "Sarah Chen",
    role: "CTO, Nexus Systems",
    icon: Building2
  },
  {
    text: "Exceptional attention to detail and a truly premium experience. They delivered beyond our expectations.",
    author: "Marcus Thorne",
    role: "Product Lead",
    icon: Star
  },
  {
    text: "Future-proof technology delivered with intellectual elegance. A game-changer for our infrastructure.",
    author: "Elena Vance",
    role: "VP of Engineering",
    icon: MessageSquare
  },
];

const FeedbackMarquee = () => {
  return (
    <section className="py-24 bg-surface-lowest overflow-hidden border-y border-border/5">
      <div className="container px-4 mb-16">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">
            Partner Testimonials
          </h2>
          <div className="w-12 h-1 bg-primary mb-8" />
        </div>
      </div>

      <div className="relative flex flex-col gap-10">
        {/* First line: Left to Right */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee-reverse whitespace-nowrap gap-10 hover:[animation-play-state:paused]">
            {[...feedback, ...feedback].map((item, i) => (
              <div
                key={i}
                className="relative w-[400px] p-8 rounded-2xl bg-surface-container border border-border/5 flex flex-col items-start gap-6 hover:bg-surface-container-high transition-all duration-500 group/card"
              >
                <div className="p-2 bg-surface-container-highest/40 rounded-lg">
                  <Quote className="w-5 h-5 text-primary" />
                </div>
                
                <p className="text-on-surface/70 text-base leading-relaxed whitespace-normal font-normal">
                  "{item.text}"
                </p>

                <div className="mt-auto flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center border border-border/10">
                    <User className="w-5 h-5 text-on-surface/40" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-on-surface">{item.author}</span>
                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second line: Right to Left */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee whitespace-nowrap gap-10 hover:[animation-play-state:paused]">
            {[...feedback, ...feedback].map((item, i) => (
              <div
                key={i}
                className="relative w-[400px] p-8 rounded-2xl bg-surface-container border border-border/5 flex flex-col items-start gap-6 hover:bg-surface-container-high transition-all duration-500 group/card"
              >
                <div className="p-2 bg-surface-container-highest/40 rounded-lg">
                  <Quote className="w-5 h-5 text-primary" />
                </div>
                
                <p className="text-on-surface/70 text-base leading-relaxed whitespace-normal font-normal">
                  "{item.text}"
                </p>

                <div className="mt-auto flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center border border-border/10">
                    <User className="w-5 h-5 text-on-surface/40" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-on-surface">{item.author}</span>
                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackMarquee;
