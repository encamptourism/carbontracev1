import React from "react";
import Reveal from "./Reveal";

export default function FounderNoteSection() {
  return (
    <section className="py-28 px-4 relative overflow-hidden text-[#f4f1ff]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#7c5cff]/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        
        <Reveal i={0}>
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c5cff]/10 text-[#7c5cff] border border-[#7c5cff]/30 text-xs sm:text-sm font-mono font-extrabold uppercase tracking-[0.2em] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#7c5cff] animate-ping" />
              SCENE 04 — FOUNDER’S VISION: TURNING INTELLIGENCE INTO VALUE
            </span>


            <h2 
              className="text-4xl sm:text-6xl font-extrabold text-[#f4f1ff] leading-[1.1] mb-8 tracking-tight max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}
            >
              Turning <span className="grad">Climate Intelligence</span> into Real-World Impact
            </h2>

            <div className="space-y-5 text-[#9a95b5] text-lg sm:text-xl leading-relaxed font-light mb-12 max-w-3xl mx-auto">
              <p>Hello, I’m Ratan, founder of Encamp and CarbonTrace.</p>
              <p>Across regions like Northeast India, we already have powerful geospatial intelligence — satellite imagery, crop insights, and forest monitoring.</p>
              <p>But this data rarely translates into income for the communities driving climate action on the ground.</p>
            </div>

            {/* Styled Open-Canvas Quote Block */}
            <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md max-w-3xl mx-auto mb-10 shadow-2xl">
              <span className="text-4xl font-serif text-[#ff4d9d] block mb-2">“</span>
              <p className="text-[#f4f1ff] font-semibold text-xl sm:text-2xl leading-relaxed italic" style={{ fontFamily: "var(--font-syne)" }}>
                CarbonTrace bridges this gap — converting environmental intelligence into measurable carbon assets and real economic value.
              </p>
            </div>

            {/* Founder Signature Line */}
            <div className="inline-flex items-center gap-4 pt-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#ff4d9d] to-[#7c5cff] p-0.5 shadow-[0_0_20px_rgba(255,77,157,0.4)]">
                <img
                  src="/assets/img/team/ratan.jpg"
                  alt="Ratan Kumar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="text-left">
                <h4 className="text-lg font-bold text-[#f4f1ff] leading-none mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                  Ratan Kumar
                </h4>
                <p className="text-xs font-mono text-[#00e0c6]">Founder & CEO, CarbonTrace</p>
              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}