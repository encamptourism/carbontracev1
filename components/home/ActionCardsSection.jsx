import React from "react";
import MagneticButton from "../MagneticButton";
import Reveal from "../Reveal";

export default function ActionCardsSection({ setToggle }) {
  const options = [
    {
      num: "01",
      chapter: "INDIVIDUAL FOOTPRINT",
      title: "Personal Carbon Footprint",
      tagline: "Gain rewards & buy sustainable goods",
      desc: "We appreciate that motivation is a key driver in the struggle against climate change. That’s why CarbonTrace is rewarding your eco-friendly efforts.",
      img: "assets/img/home/u1.png",
      href: "/lifestylecalculator",
      btnText: "Calculate Personal Footprint →"
    },
    {
      num: "02",
      chapter: "ENTERPRISE & ESG",
      title: "Business & Corporate Footprint",
      tagline: "Get tax deductions on carbon credit purchases",
      desc: "Partner with NGOs and charities to offset enterprise emissions while securing certified documentation and tax exemption support.",
      img: "assets/img/home/u2.png",
      href: "#",
      action: () => setToggle && setToggle(true),
      btnText: "Explore Business Solutions →"
    },
    {
      num: "03",
      chapter: "TRAVEL & EVENTS",
      title: "Travel & Event Footprint",
      tagline: "Secure your climate life insurance",
      desc: "Calculate flight, commute, and accommodation emissions effortlessly. Take active climate action today to safeguard the planet tomorrow.",
      img: "assets/img/home/u3.jpg",
      href: "/travelcalculator",
      btnText: "Calculate Travel Footprint →"
    }
  ];

  return (
    <section className="py-28 px-4 relative overflow-hidden text-[#f4f1ff]">
      {/* Ambient Radial Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ff4d9d]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        <Reveal i={0}>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff4d9d]/10 text-[#ff4d9d] border border-[#ff4d9d]/30 text-xs sm:text-sm font-mono font-extrabold uppercase tracking-[0.2em] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff4d9d] animate-ping" />
              SCENE 07 — 3 WAYS TO TAKE TAILORED CLIMATE ACTION
            </span>

            <h2 
              className="text-4xl sm:text-6xl font-extrabold text-[#f4f1ff] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}
            >
              3 Ways to <span className="grad">Take Action</span> with CarbonTrace
            </h2>
            <p className="text-[#9a95b5] text-lg sm:text-xl leading-relaxed font-light max-w-2xl mx-auto">
              We built CarbonTrace to let anybody become a climate champion. Explore our specialized solutions designed for individuals, businesses, and travelers.
            </p>
          </div>
        </Reveal>

        {/* 3-Part Open Borderless Story Flow (NO CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {options.map((item, idx) => (
            <Reveal key={idx} i={idx}>
              <div className="group relative flex flex-col justify-between h-full">
                <div>
                  {/* Borderless Floating Image */}
                  <div className="relative rounded-3xl overflow-hidden h-72 mb-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07060d] via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Chapter Tag & Title */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-[#ff4d9d] tracking-wider uppercase">
                      {item.num}
                    </span>
                    <span className="text-xs font-mono text-[#9a95b5] font-bold uppercase tracking-wider">
                      / {item.chapter}
                    </span>
                  </div>

                  <h3 
                    className="text-2xl sm:text-3xl font-bold text-[#f4f1ff] mb-2 leading-snug group-hover:text-[#ff4d9d] transition-colors"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono font-bold text-[#00e0c6] uppercase tracking-wider mb-4">
                    {item.tagline}
                  </p>
                  <p className="text-[#9a95b5] text-base leading-relaxed mb-8 font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-white/10">
                  <MagneticButton 
                    href={item.href !== "#" ? item.href : undefined} 
                    onClick={item.action} 
                    className="w-full text-center"
                  >
                    {item.btnText}
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}


