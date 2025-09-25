interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "We were hunting for influencers to pitch our sunscreen spray. Capalyze surfaced 200 public profiles with emails before my coffee even got cold. Our intern couldn't believe it.",
      name: "Jessica Young",
      role: "Growth Lead @ DTC Skincare Brand",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b372?w=96&h=96&fit=crop&auto=format"
    },
    {
      quote: "Capalyze turned 300+ posts under #summeroutfit into a visual board, complete with likes and comments. That single report helped us design our Q3 accessory lineup.",
      name: "Mandy Mew",
      role: "Merchandising Manager @ Apparel Brand",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&auto=format"
    },
    {
      quote: "I dropped in a TikTok link just to try it, and Capalyze spat out a full comment breakdown — themes, sentiment, even copy suggestions. I was honestly shocked.",
      name: "Mina Kapoor",
      role: "Content Strategist @ Creator Studio",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&auto=format"
    },
    {
      quote: "Pulled every 1-star review from five competitors in one go. Seeing the top complaints side-by-side basically handed us our next quarter's roadmap.",
      name: "Alan Moore",
      role: "Product Ops Lead @ B2B SaaS",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&auto=format"
    },
    {
      quote: "I uploaded our campaign data into Capalyze — it instantly turned it into clear visuals and next-step actions. It made our ad planning so much easier for the whole team.",
      name: "Chris Matsuda",
      role: "Marketing Manager @ Consumer Tech",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&auto=format"
    }
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <figure className="testimonial-card">
      <div className="text-gray-700 transition-all group-hover:blur-sm">
        <ArrowIcon className="mb-4 h-auto w-4 md:w-6 [&>path]:fill-gray-300" />
        <blockquote className="text-sm md:text-base/relaxed">
          {testimonial.quote}
        </blockquote>
      </div>
      <div className="flex flex-col transition-all group-hover:blur-sm">
        <div className="mb-3">
          <img 
            alt={testimonial.name} 
            src={testimonial.avatar}
            className="rounded-full w-12 h-12"
          />
        </div>
        <figcaption className="text-base font-medium text-gray-700 md:text-[20px]">
          {testimonial.name}
        </figcaption>
        <p className="text-xs text-gray-400 md:text-base">
          {testimonial.role}
        </p>
      </div>
    </figure>
  );

  return (
    <div className="relative">
      <section className="mb-32 flex flex-col items-center justify-center md:mb-64">
        <h2 className="flex items-center text-center md:gap-6 md:whitespace-nowrap mb-12 text-[20px] font-extrabold text-white md:mb-32 md:text-[45px]">
          <div className="hidden items-center gap-2 md:flex md:gap-6">
            <DecorativeArrows />
            <CapalyzeLogo />
          </div>
          What Teams Are Saying About Capalyze
          <div className="hidden items-center md:flex md:gap-6">
            <RightArrow />
            <DecorativeArrows className="rotate-180" />
          </div>
        </h2>

        <section>
          <div className="group flex [gap:var(--gap)] overflow-hidden p-2 [--gap:1rem] flex-row [--duration:60s] md:[--duration:80s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg width="37" height="43" viewBox="0 0 37 43" fill="none" className={className}>
    <path d="M-1.09586e-06 11.9002L-5.55185e-08 4.39475e-06L33.4114 12.4925C35.5734 13.3114 37 15.3557 37 17.635L37 25.4341C37 27.7134 35.5734 29.7577 33.4114 30.5767L-3.8147e-06 43L-2.68403e-06 30.0666L25.9659 21.4513L25.9659 20.9502L-1.09586e-06 11.9002Z" fill="white"/>
  </svg>
);

const DecorativeArrows = ({ className }: { className?: string }) => (
  <svg width="145" height="43" viewBox="0 0 145 43" fill="none" className={`h-6 w-fit md:h-auto ${className}`}>
    <path opacity="0.3" d="M145 31.0998L145 43L111.589 30.5075C109.427 29.6886 108 27.6443 108 25.365L108 17.5659C108 15.2866 109.427 13.2423 111.589 12.4233L145 6.46929e-06L145 12.9334L119.034 21.5487L119.034 22.0498L145 31.0998Z" fill="white"/>
    <path opacity="0.2" d="M91 31.0998L91 43L57.5886 30.5075C55.4266 29.6886 54 27.6443 54 25.365L54 17.5659C54 15.2866 55.4266 13.2423 57.5886 12.4233L91 6.46929e-06L91 12.9334L65.0341 21.5487L65.0341 22.0498L91 31.0998Z" fill="white"/>
    <path opacity="0.1" d="M37 31.0998L37 43L3.58859 30.5075C1.42658 29.6886 -4.83348e-06 27.6443 -4.43496e-06 25.365L-3.07131e-06 17.5659C-2.67279e-06 15.2866 1.42658 13.2423 3.58859 12.4233L37 6.46929e-06L37 12.9334L11.0341 21.5487L11.0341 22.0498L37 31.0998Z" fill="white"/>
  </svg>
);

const CapalyzeLogo = () => (
  <svg className="h-6 w-fit md:h-auto" width="71" height="71" viewBox="0 0 71 71" fill="none">
    <path d="M70.9969 43.7793V55.098L39.7294 43.216C37.7061 42.437 36.3711 40.4926 36.3711 38.3248V30.9067C36.3711 28.7388 37.7061 26.7944 39.7294 26.0155L70.9969 14.1992V26.5006L46.6972 34.6949V35.1715L70.9969 43.7793Z" fill="white"/>
    <g opacity="0.4">
      <path d="M23.6799 34.6942V35.1707L0 43.7785V55.0972L30.647 43.2152C32.6702 42.4363 34.0053 40.4919 34.0053 38.324V0H23.6792V34.6942H23.6799Z" fill="white"/>
      <path d="M34.0038 44.374V70.9994H23.6777L23.6804 48.3167L34.0038 44.374Z" fill="white"/>
      <path d="M21.3056 34.3137L0 25.5981V14.1328L21.301 22.8517L21.3056 34.3137Z" fill="white"/>
    </g>
  </svg>
);

const RightArrow = () => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" className="h-6 w-fit md:h-auto">
    <path d="M-0.000802315 11.5175L-0.000801326 0.198884L31.2667 12.0809C33.29 12.8598 34.625 14.8042 34.625 16.9721L34.625 24.3902C34.625 26.558 33.29 28.5024 31.2667 29.2814L-0.000804901 41.0977L-0.000803826 28.7963L24.2989 20.6019L24.2989 20.1254L-0.000802315 11.5175Z" fill="white"/>
  </svg>
);

export default TestimonialsSection;