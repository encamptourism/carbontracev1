import React from "react";
import MagneticButton from "./MagneticButton";

export default function PricingSectionPro({ toggle, setToggle }) {
  return (
    <section className="py-28 px-4 relative overflow-hidden text-[#f4f1ff]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[#00e0c6]/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-duration="1000">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00e0c6]/10 text-[#00e0c6] border border-[#00e0c6]/30 text-xs sm:text-sm font-mono font-extrabold uppercase tracking-[0.2em] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00e0c6] animate-pulse" />
            SCENE 06 — CARBON INFRASTRUCTURE PRICING ENGINE
          </span>

          <h2 
            className="text-4xl sm:text-6xl font-extrabold text-[#f4f1ff] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}
          >
            Carbon Infrastructure Pricing
          </h2>
          <p className="text-[#9a95b5] text-lg sm:text-xl font-light">
            Free onboarding. Usage-based pricing. Built for scale.
          </p>
        </div>

        {/* CORE PRICE HIGHLIGHT */}
        <div className="text-center mb-20" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          <span 
            className="text-5xl sm:text-7xl md:text-8xl font-black text-[#00e0c6] tracking-tight block mb-6 drop-shadow-[0_0_40px_rgba(0,224,198,0.5)]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            $5 <span className="text-3xl sm:text-5xl font-bold text-[#f4f1ff]">per 1,000 kg CO₂ Processed</span>
          </span>
          <p className="text-[#9a95b5] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Every transaction is converted into a traceable carbon asset. CarbonTrace calculates emissions, enables offset, issues rewards, and creates a shared revenue layer between platform and partner.
          </p>
        </div>

        {/* FLOW STEP PILLS */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-24 text-sm sm:text-base font-bold text-[#f4f1ff]">
          {["User Purchase", "Carbon Calculated", "Offset + Verified", "Rewards + Revenue"].map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="px-7 py-4 rounded-full bg-[#12101f]/80 border border-[#00e0c6]/40 font-mono shadow-xl text-center backdrop-blur-md">
                {step}
              </div>
              {idx < 3 && <span className="text-[#00e0c6] font-black text-2xl animate-pulse">→</span>}
            </React.Fragment>
          ))}
        </div>

        {/* 3 OUTCOMES FEATURE BLOCKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {[
            {
              title: "Carbon Passport",
              desc: "Track total CO₂ reduced, projects supported, and full history.",
              img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"
            },
            {
              title: "Verified Certificate",
              desc: "Blockchain-backed proof linked to real carbon projects.",
              img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
            },
            {
              title: "CTCoins Rewards",
              desc: "Earn tokenized incentives for every carbon-positive action.",
              img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=800&auto=format&fit=crop"
            }
          ].map((item, idx) => (
            <div key={idx} className="group">
              <div className="h-56 rounded-3xl overflow-hidden mb-6 relative shadow-2xl">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07060d] via-transparent to-transparent opacity-80" />
              </div>
              <h4 className="text-2xl font-bold text-[#00e0c6] mb-3" style={{ fontFamily: "var(--font-syne)" }}>{item.title}</h4>
              <p className="text-[#9a95b5] text-base leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="text-center pt-8">
          <p className="text-[#9a95b5] text-lg mb-8 font-light">No setup cost. We help you turn carbon into a revenue stream.</p>
          <MagneticButton onClick={() => setToggle && setToggle(true)}>
            Start Integration →
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}