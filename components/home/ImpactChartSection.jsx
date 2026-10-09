import React from "react";
import Reveal from "../Reveal";

export default function ImpactChartSection() {
  return (
    <section className="py-28 px-4 relative overflow-hidden text-[#f4f1ff]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/3 w-[700px] h-[450px] bg-[#00e0c6]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        <Reveal i={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00e0c6]/10 text-[#00e0c6] border border-[#00e0c6]/30 text-xs sm:text-sm font-mono font-extrabold uppercase tracking-[0.2em] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00e0c6] animate-pulse" />
              SCENE 08 — REAL-TIME EMISSIONS REDUCTION CURVE
            </span>

            <h2 
              className="text-4xl sm:text-6xl font-extrabold text-[#f4f1ff] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}
            >
              Carbon Trace <span className="grad">Emissions Reduction</span> Curve
            </h2>
            <p className="text-[#9a95b5] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Measure baseline carbon footprint, track emissions trajectory over time, and achieve verified net-zero targets.
            </p>
          </div>
        </Reveal>

        {/* Dynamic Open-Canvas SVG Area Chart */}
        <Reveal i={1}>
          <div className="mb-24 p-8 rounded-[2.5rem] bg-gradient-to-b from-[#12101f]/70 via-[#0a0814]/80 to-[#07060d] border border-white/10 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs uppercase font-bold text-[#00e0c6] tracking-widest block mb-1">Historical Reduction Curve</span>
                <h4 className="text-2xl font-bold text-[#f4f1ff]" style={{ fontFamily: "var(--font-syne)" }}>Aggregated Carbon Offset (tCO₂e)</h4>
              </div>
              <div className="flex items-center gap-6 text-xs font-mono">
                <span className="flex items-center gap-2 text-slate-300">
                  <span className="w-3 h-3 rounded-full bg-[#00e0c6] shadow-[0_0_10px_#00e0c6]" /> Target Path
                </span>
                <span className="flex items-center gap-2 text-slate-300">
                  <span className="w-3 h-3 rounded-full bg-[#ff4d9d] opacity-80 shadow-[0_0_10px_#ff4d9d]" /> Actual Offset
                </span>
              </div>
            </div>

            <div className="relative w-full h-64 sm:h-80">
              <svg className="w-full h-full" viewBox="0 0 800 240" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="impactChartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00e0c6" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#7c5cff" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                
                <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                <line x1="0" y1="90" x2="800" y2="90" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                <line x1="0" y1="140" x2="800" y2="140" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                <line x1="0" y1="190" x2="800" y2="190" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />

                <path
                  d="M 0 180 Q 100 160 200 120 T 400 90 T 600 60 T 800 30 L 800 230 L 0 230 Z"
                  fill="url(#impactChartGrad)"
                />

                <path
                  d="M 0 180 Q 100 160 200 120 T 400 90 T 600 60 T 800 30"
                  fill="none"
                  stroke="#00e0c6"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="drop-shadow-[0_0_15px_rgba(0,224,198,0.7)]"
                />

                <circle cx="200" cy="120" r="5" fill="#ffffff" className="animate-pulse" />
                <circle cx="400" cy="90" r="5" fill="#ffffff" className="animate-pulse" />
                <circle cx="600" cy="60" r="5" fill="#ffffff" className="animate-pulse" />
                <circle cx="800" cy="30" r="7" fill="#00e0c6" />
              </svg>
            </div>

            <div className="flex justify-between text-xs text-[#00e0c6] font-mono mt-6 pt-3 border-t border-white/10">
              <span>2021 (Baseline)</span>
              <span>2022</span>
              <span>2023</span>
              <span>2024</span>
              <span>2025 Target</span>
              <span>2030 Net-Zero Goal</span>
            </div>
          </div>
        </Reveal>

        {/* Benefits Pillars Open Story Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Reveal i={0}>
            <div data-hover className="group relative rounded-3xl p-8 bg-white/5 border border-white/5 backdrop-blur-md hover:border-[#ff4d9d]/40 transition-all duration-300 hover:-translate-y-2 h-full">
              <div className="w-14 h-14 rounded-2xl bg-[#ff4d9d]/20 flex items-center justify-center text-[#ff4d9d] text-2xl font-bold mb-6 border border-[#ff4d9d]/30">
                🎁
              </div>
              <h4 className="text-2xl font-bold text-[#f4f1ff] mb-3 group-hover:text-[#ff4d9d] transition-colors" style={{ fontFamily: "var(--font-syne)" }}>Gain Rewards & Goods</h4>
              <p className="text-[#9a95b5] text-base leading-relaxed font-light">
                We appreciate that motivation drives action. Earn carbon reward credits redeemable for sustainable products and experiences.
              </p>
            </div>
          </Reveal>

          <Reveal i={1}>
            <div data-hover className="group relative rounded-3xl p-8 bg-white/5 border border-white/5 backdrop-blur-md hover:border-[#7c5cff]/40 transition-all duration-300 hover:-translate-y-2 h-full">
              <div className="w-14 h-14 rounded-2xl bg-[#7c5cff]/20 flex items-center justify-center text-[#7c5cff] text-2xl font-bold mb-6 border border-[#7c5cff]/30">
                🏛️
              </div>
              <h4 className="text-2xl font-bold text-[#f4f1ff] mb-3 group-hover:text-[#7c5cff] transition-colors" style={{ fontFamily: "var(--font-syne)" }}>Tax Deductible Offsets</h4>
              <p className="text-[#9a95b5] text-base leading-relaxed font-light">
                In partnership with accredited NGOs and charities, your offset contributions support verified forestation & clean energy projects.
              </p>
            </div>
          </Reveal>

          <Reveal i={2}>
            <div data-hover className="group relative rounded-3xl p-8 bg-white/5 border border-white/5 backdrop-blur-md hover:border-[#00e0c6]/40 transition-all duration-300 hover:-translate-y-2 h-full">
              <div className="w-14 h-14 rounded-2xl bg-[#00e0c6]/20 flex items-center justify-center text-[#00e0c6] text-2xl font-bold mb-6 border border-[#00e0c6]/30">
                🌍
              </div>
              <h4 className="text-2xl font-bold text-[#00e0c6] mb-3" style={{ fontFamily: "var(--font-syne)" }}>Climate Life Insurance</h4>
              <p className="text-[#9a95b5] text-base leading-relaxed font-light">
                Investing in carbon neutrality is the highest-return life insurance for our planet. Safeguard future generations today.
              </p>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

