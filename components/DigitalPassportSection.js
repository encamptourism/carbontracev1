import React from "react";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

export default function DigitalPassportSection({ toggle, setToggle }) {
  const steps = [
    {
      num: "01",
      tag: "THE MANDATE",
      title: "EU Regulation & CBAM Compliance",
      desc: "Upcoming European Union directives require exporters to disclose verifiable, product-level carbon footprints and supply chain origin data to retain market access.",
      check: "Automated compliance for EU regulations",
      color: "#ff4d9d"
    },
    {
      num: "02",
      tag: "TELEMETRY",
      title: "Geospatial & Satellite Tracking",
      desc: "High-resolution satellite NDVI imagery monitors land use, forest cover, and real-world carbon emissions across raw material supply chains.",
      check: "Product-level carbon footprint tracking",
      color: "#00e0c6"
    },
    {
      num: "03",
      tag: "VERIFICATION",
      title: "Digital Passport Certification",
      desc: "Environmental data is issued as an immutable Digital Product Passport (DPP) certificate, empowering buyers & customs to instantly verify claims.",
      check: "Blockchain-backed ESG data verification",
      color: "#7c5cff"
    }
  ];

  return (
    <section className="py-28 px-4 relative overflow-hidden text-[#f4f1ff]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00e0c6]/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* HEADER */}
        <Reveal i={0}>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00e0c6]/10 text-[#00e0c6] border border-[#00e0c6]/30 text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00e0c6] animate-pulse" />
              DIGITAL PRODUCT PASSPORT
            </span>

            <h2 
              className="text-4xl sm:text-6xl font-extrabold text-[#f4f1ff] leading-[1.1] mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}
            >
              Unlock <span className="grad">EU Market Access</span> with Carbon Intelligence
            </h2>

            <p className="text-[#9a95b5] text-lg sm:text-xl leading-relaxed font-light">
              CarbonTrace enables exporters to meet upcoming European Union sustainability regulations through Digital Product Passports (DPP).
            </p>
          </div>
        </Reveal>

        {/* SLEEK 3-STEP HORIZONTAL TIMELINE */}
        <div className="relative mb-20">
          
          {/* Horizontal Connector Line (Hidden on mobile) */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#ff4d9d] via-[#00e0c6] to-[#7c5cff] opacity-30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 relative z-10">
            {steps.map((step, idx) => (
              <Reveal key={idx} i={idx}>
                <div data-hover className="group relative">
                  
                  {/* Timeline Step Pill Indicator */}
                  <div className="flex items-center gap-3 mb-6">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg border transition-transform duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: `${step.color}15`, 
                        borderColor: `${step.color}40`,
                        color: step.color,
                        boxShadow: `0 0 20px ${step.color}30`
                      }}
                    >
                      {step.num}
                    </div>
                    <span 
                      className="text-xs font-mono font-bold uppercase tracking-widest"
                      style={{ color: step.color }}
                    >
                      {step.tag}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 
                    className="text-2xl font-bold text-[#f4f1ff] mb-4 leading-snug group-hover:text-[#00e0c6] transition-colors"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-[#9a95b5] text-base leading-relaxed font-light mb-6">
                    {step.desc}
                  </p>

                  {/* Checklist Bullet */}
                  <div className="flex items-center gap-3 text-xs font-semibold text-[#f4f1ff] pt-4 border-t border-white/10">
                    <span className="w-5 h-5 rounded-full bg-[#00e0c6]/20 text-[#00e0c6] flex items-center justify-center font-bold text-[10px] shrink-0 border border-[#00e0c6]/40">
                      ✓
                    </span>
                    <span className="text-[#9a95b5] group-hover:text-[#f4f1ff] transition-colors">{step.check}</span>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>

        </div>

        {/* BOTTOM CTA BUTTON */}
        <Reveal i={1}>
          <div className="text-center pt-4">
            <MagneticButton onClick={() => setToggle && setToggle((prev) => !prev)}>
              Get Started with EU Passport →
            </MagneticButton>
          </div>
        </Reveal>

      </div>
    </section>
  );
}