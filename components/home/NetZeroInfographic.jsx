import React from "react";
import Counter from "../Counter";
import Reveal from "../Reveal";
import TiltCard from "../TiltCard";
import MagneticButton from "../MagneticButton";

export default function NetZeroInfographic() {
  return (
    <section className="py-28 px-4 relative overflow-hidden text-[#f4f1ff]">
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* 1. TOP GAUGE METER DISPLAY */}
        <Reveal i={0}>
          <div className="text-center mb-24">
            <div className="inline-block mb-8">
              <span className="px-6 py-2 rounded-full border border-[#ff4d9d] text-[#ff4d9d] text-xs sm:text-sm font-mono font-extrabold uppercase tracking-[0.2em] bg-[#ff4d9d]/10">
                SCENE 02 — THE CLIMATE REALITY & 2.0 °C TARGET
              </span>
            </div>


            {/* Arc Gauge Graphic */}
            <div className="relative w-[340px] h-[190px] sm:w-[420px] sm:h-[230px] mx-auto mb-10 flex items-end justify-center">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 200 115">
                <defs>
                  <linearGradient id="arcDesignSystemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00e0c6" />
                    <stop offset="50%" stopColor="#7c5cff" />
                    <stop offset="100%" stopColor="#ff4d9d" />
                  </linearGradient>
                </defs>

                <path
                  d="M 20 105 A 80 80 0 0 1 180 105"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="22"
                  strokeLinecap="round"
                />

                <path
                  d="M 20 105 A 80 80 0 0 1 142 38"
                  fill="none"
                  stroke="url(#arcDesignSystemGrad)"
                  strokeWidth="22"
                  strokeLinecap="round"
                  className="drop-shadow-[0_0_25px_rgba(124,92,255,0.8)]"
                />

                <circle cx="142" cy="38" r="9" fill="#ffffff" className="animate-ping" />
                <circle cx="142" cy="38" r="7" fill="#ff4d9d" />
              </svg>

              <div className="absolute bottom-2 text-center flex flex-col items-center">
                <span className="text-6xl sm:text-7xl font-black text-[#f4f1ff] tracking-tight flex items-center justify-center">
                  <Counter to={45} />%
                </span>
                <p className="text-xs sm:text-sm text-[#00e0c6] font-extrabold uppercase tracking-[0.2em] mt-1">
                  CO₂ REDUCTION GOAL
                </p>
              </div>
            </div>

            <h2 
              className="text-3xl sm:text-5xl font-extrabold max-w-4xl mx-auto leading-tight text-[#f4f1ff] mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}
            >
              45% reduction in CO₂ emissions needed by 2030 to reach Net Zero by 2050.
            </h2>
          </div>
        </Reveal>

        {/* 2. GLOWING LIGHTBULB CARD */}
        <Reveal i={1}>
          <div className="max-w-3xl mx-auto mb-28 text-center relative">
            <TiltCard>
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#ff4d9d]/20 border border-[#ff4d9d]/40 flex items-center justify-center text-[#ff4d9d] text-4xl shadow-xl">
                💡
              </div>
              <p className="text-lg sm:text-xl text-[#f4f1ff] leading-relaxed font-light max-w-2xl mx-auto">
                <strong className="text-[#ff4d9d] font-extrabold text-xl sm:text-2xl block mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                  What is net zero?
                </strong>
                Net zero is achieved when human-caused greenhouse gas emissions are balanced globally by human-caused removals over a specified period.
              </p>
            </TiltCard>
          </div>
        </Reveal>

        {/* 3. RADIAL 360 SCOPE 1,2,3 WHEEL INFOGRAPHIC */}
        <Reveal i={2}>
          <div className="text-center py-6">
            <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] mx-auto mb-14 flex items-center justify-center">
              <svg className="w-full h-full animate-[spin_90s_linear_infinite]" viewBox="0 0 300 300">
                <circle cx="150" cy="150" r="135" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="3 5" />
                <circle cx="150" cy="150" r="110" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                
                {Array.from({ length: 48 }).map((_, i) => {
                  const angle = (i * 7.5 * Math.PI) / 180;
                  const x1 = 150 + 115 * Math.cos(angle);
                  const y1 = 150 + 115 * Math.sin(angle);
                  const x2 = 150 + 128 * Math.cos(angle);
                  const y2 = 150 + 128 * Math.sin(angle);
                  const tickColors = ["#ff4d9d", "#7c5cff", "#00e0c6", "#ff4d9d", "#00e0c6"];
                  const strokeColor = tickColors[i % tickColors.length];
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={strokeColor}
                      strokeWidth={i % 4 === 0 ? "4" : "1.8"}
                      strokeLinecap="round"
                    />
                  );
                })}
              </svg>

              {/* Center Core */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-56 h-56 rounded-full border border-white/10 bg-[#12101f] flex flex-col items-center justify-center p-6 shadow-2xl">
                  <span className="text-xs uppercase font-extrabold text-[#00e0c6] tracking-widest mb-1">Scope 1 • 2 • 3</span>
                  <span className="text-base font-extrabold text-[#f4f1ff] leading-tight mb-2" style={{ fontFamily: "var(--font-syne)" }}>Greenhouse Gas Protocol</span>
                  <span className="text-xs text-[#ff4d9d] font-bold bg-[#ff4d9d]/20 px-3 py-1 rounded-full border border-[#ff4d9d]/40">1.5°C Goal</span>
                </div>
              </div>
            </div>

            <h2 
              className="text-4xl sm:text-6xl font-extrabold max-w-3xl mx-auto leading-tight text-[#f4f1ff] mb-14 tracking-tight"
              style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}
            >
              To stop the warming of the planet, climate action of 1.5°C must be taken.
            </h2>

            {/* Average Footprint Box */}
            <div className="max-w-3xl mx-auto text-center py-6">
              <TiltCard>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#00e0c6] mb-3 block">
                  DID YOU KNOW
                </span>
                <p className="text-xl sm:text-2xl font-medium text-[#f4f1ff] mb-8 leading-relaxed font-light">
                  The average carbon footprint of every person in India was estimated at <span className="grad font-extrabold">0.56 tonne per year</span>.
                </p>
                <MagneticButton href="/lifestylecalculator">
                  Let’s calculate mine! →
                </MagneticButton>
              </TiltCard>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
