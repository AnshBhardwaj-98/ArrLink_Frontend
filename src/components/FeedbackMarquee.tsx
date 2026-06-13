import { Quote, Star } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import AmbientFloor from "./AmbientFloor";

const feedback = [
  {
    text: "ArrLink transformed our entire data infrastructure. Their AI solutions reduced our processing time by 60% while improving accuracy. Truly exceptional work.",
    author: "Rajesh Kumar",
    company: "DataFlow Systems",
    role: "VP Engineering",
    rating: 5,
    initials: "RK"
  },
  {
    text: "Working with them was seamless. The team understood our requirements perfectly and delivered a SaaS platform that scaled to 100K users in the first quarter.",
    author: "Wei Chen",
    company: "CloudMinds Asia",
    role: "Founder & CEO",
    rating: 5,
    initials: "WC"
  },
  {
    text: "Their enterprise solution integration was flawless. We went live on schedule with zero downtime. The engineering expertise is world-class.",
    author: "Priya Sharma",
    company: "FinTech Innovations",
    role: "CTO",
    rating: 5,
    initials: "PS"
  },
  {
    text: "Exceptional mobile development team. They built a cross-platform app that feels native on both iOS and Android. Performance is outstanding.",
    author: "Tanaka Yuki",
    company: "NexGen Mobility",
    role: "Product Director",
    rating: 5,
    initials: "TY"
  },
  {
    text: "The AI model they developed improved our predictive analytics accuracy from 78% to 94%. Their machine learning expertise is unmatched in the region.",
    author: "Amit Patel",
    company: "Strategic Analytics Ltd",
    role: "Head of AI Research",
    rating: 5,
    initials: "AP"
  },
  {
    text: "Delivered a complex API gateway that handles 1M+ requests daily without a hitch. Their system architecture is elegant and maintainable.",
    author: "Tran Minh",
    company: "VietConnect Solutions",
    role: "Infrastructure Lead",
    rating: 5,
    initials: "TM"
  },
  {
    text: "Their custom analytics dashboard gave us real-time insights we never had before. ROI achieved in under 6 months. Highly recommended.",
    author: "Park Min-jun",
    company: "Seoul Enterprise Systems",
    role: "Operations Manager",
    rating: 5,
    initials: "PM"
  },
  {
    text: "The digital transformation they led saved us millions in operational costs. Their strategic approach and technical execution were both impeccable.",
    author: "Neha Gupta",
    company: "Mumbai Logistics Inc",
    role: "Chief Innovation Officer",
    rating: 5,
    initials: "NG"
  },
  {
    text: "Brilliant team. They built our microservices architecture from scratch and trained our engineers. Quality of code and documentation is exceptional.",
    author: "Li Zhang",
    company: "Beijing Tech Ventures",
    role: "Engineering Manager",
    rating: 5,
    initials: "LZ"
  },
  {
    text: "Their security-first approach gave us full compliance with international standards. We deployed with confidence knowing our systems were fortified.",
    author: "Vikram Singh",
    company: "Secure Cloud Asia",
    role: "Security Chief",
    rating: 5,
    initials: "VS"
  },
  {
    text: "Customer experience platform they built increased our engagement by 45%. The UI/UX is intuitive and the backend is rock-solid.",
    author: "Aisha Desai",
    company: "RetailTech Global",
    role: "Product VP",
    rating: 5,
    initials: "AD"
  },
  {
    text: "Most professional engagement we've had. They understood our legacy system challenges and delivered a seamless migration with zero data loss.",
    author: "Suzuki Hiroshi",
    company: "Tokyo Financial Group",
    role: "IT Director",
    rating: 5,
    initials: "SH"
  },
];

const FeedbackMarquee = () => {
  const headerRef = useReveal<HTMLDivElement>();

  const renderStars = (rating: number) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < rating
              ? "fill-foreground/70 text-foreground/70"
              : "text-foreground/15"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="relative py-28 bg-surface-container-low overflow-hidden border-y border-foreground/10">
      <AmbientFloor />

      <div ref={headerRef} className="reveal container px-4 mb-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="section-marker mb-6 justify-center">
            <span className="h-px w-6 bg-foreground/40" />
            <span>Industry Recognition</span>
            <span className="h-px w-6 bg-foreground/40" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-5 tracking-tighter text-balance">
            Trusted by teams building{" "}
            <span className="font-serif font-normal text-[1.08em]">at scale.</span>
          </h2>
          <p className="text-foreground/55 max-w-2xl text-sm md:text-base leading-relaxed">
            Fifty-plus organizations across Asia rely on our engineering. A glimpse of the work in their words.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-10">
        {/* First line: Left to Right */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee-reverse whitespace-nowrap gap-10 hover:[animation-play-state:paused]">
            {[...feedback, ...feedback].map((item, i) => (
              <div
                key={i}
                className="relative w-[360px] p-4 rounded-xl bg-background border border-foreground/10 hover:border-foreground/25 flex flex-col items-start gap-3 transition-all duration-500"
              >
                {/* Header with stars and quote */}
                <div className="flex justify-between items-start w-full gap-1.5">
                  <div className="p-1 bg-foreground/5 rounded-lg flex-shrink-0">
                    <Quote className="w-3.5 h-3.5 text-foreground/50" strokeWidth={1.5} />
                  </div>
                  {renderStars(item.rating)}
                </div>
                
                {/* Review text */}
                <p className="text-foreground/75 text-xs leading-snug whitespace-normal font-normal line-clamp-3">
                  "{item.text}"
                </p>

                {/* Divider */}
                <div className="w-full h-[0.5px] bg-border/10" />

                {/* Author info */}
                <div className="flex items-center gap-2.5 w-full">
                  <div className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center border border-foreground/15 flex-shrink-0">
                    <span className="text-[9px] font-bold text-foreground/70">{item.initials}</span>
                  </div>
                  <div className="flex flex-col gap-0.25 flex-1">
                    <span className="text-[11px] font-bold text-foreground leading-tight">{item.author}</span>
                    <span className="text-[9px] text-foreground/60 font-medium leading-tight">{item.role}</span>
                    <span className="text-[8px] text-foreground/50 uppercase tracking-tight leading-tight">{item.company}</span>
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
                className="relative w-[360px] p-4 rounded-xl bg-background border border-foreground/10 hover:border-foreground/25 flex flex-col items-start gap-3 transition-all duration-500"
              >
                {/* Header with stars and quote */}
                <div className="flex justify-between items-start w-full gap-1.5">
                  <div className="p-1 bg-foreground/5 rounded-lg flex-shrink-0">
                    <Quote className="w-3.5 h-3.5 text-foreground/50" strokeWidth={1.5} />
                  </div>
                  {renderStars(item.rating)}
                </div>
                
                {/* Review text */}
                <p className="text-foreground/75 text-xs leading-snug whitespace-normal font-normal line-clamp-3">
                  "{item.text}"
                </p>

                {/* Divider */}
                <div className="w-full h-[0.5px] bg-border/10" />

                {/* Author info */}
                <div className="flex items-center gap-2.5 w-full">
                  <div className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center border border-foreground/15 flex-shrink-0">
                    <span className="text-[9px] font-bold text-foreground/70">{item.initials}</span>
                  </div>
                  <div className="flex flex-col gap-0.25 flex-1">
                    <span className="text-[11px] font-bold text-foreground leading-tight">{item.author}</span>
                    <span className="text-[9px] text-foreground/60 font-medium leading-tight">{item.role}</span>
                    <span className="text-[8px] text-foreground/50 uppercase tracking-tight leading-tight">{item.company}</span>
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
