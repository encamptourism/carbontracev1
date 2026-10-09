import React from "react";
import MagneticButton from "../MagneticButton";
import Reveal from "../Reveal";

export default function MethodologySection({ setToggle }) {
  return (
    <section className="py-28 px-4 relative overflow-hidden text-[#f4f1ff]">
      {/* Background Glow Halo */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#00e0c6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Main Methodology Story Chapter */}
        <Reveal i={0}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#00e0c6]/30 to-[#7c5cff]/30 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative rounded-3xl overflow-hidden h-96 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <img 
                  src="assets/img/home/measure_img.jpg" 
                  alt="Methodology to Measure"
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07060d] via-transparent to-transparent flex items-end p-6">
                  <span className="text-[#07060d] text-xs font-extrabold uppercase tracking-wider bg-[#00e0c6] px-4 py-2 rounded-full shadow-lg">
                    Advanced Calculation Framework
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00e0c6]/10 text-[#00e0c6] border border-[#00e0c6]/30 text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00e0c6] animate-pulse" />
                OUR METHODOLOGY
              </span>
              
              <h2 
                className="text-3xl sm:text-5xl font-extrabold text-[#f4f1ff] mb-6 leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}
              >
                Methodology to <span className="grad">Measure Impact</span>
              </h2>
              
              <p className="text-[#9a95b5] text-lg sm:text-xl leading-relaxed mb-8 font-light">
                The CarbonTrace’s carbon footprint calculator—one of the most advanced currently available in India—calculates the personal carbon footprint of an individual in a year based on her/his personal lifestyle (e.g., energy consumption, food & travel habits). Users will only need to answer a few straightforward questions.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton href="/methodology">
                  Read Full Methodology →
                </MagneticButton>
                <button
                  onClick={() => setToggle && setToggle(true)}
                  className="px-8 py-4 rounded-full border border-white/15 hover:border-[#ff4d9d] text-[#f4f1ff] font-medium text-sm transition-colors duration-200 bg-white/5 backdrop-blur-md"
                >
                  Write to us to know more
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Vision & Mission Story Chapter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 pt-8 border-t border-white/10">
          
          {/* Vision */}
          <Reveal i={1}>
            <div className="group relative">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#7c5cff] mb-3 block">
                CHAPTER 01 — OUR VISION
              </span>
              <h3 
                className="text-2xl sm:text-4xl font-extrabold text-[#f4f1ff] mb-4 leading-snug"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Empower Proactive Climate Action
              </h3>
              <p className="text-[#9a95b5] text-base sm:text-lg leading-relaxed mb-8 font-light">
                Equip Individuals & Organizations to Drive Community-Led Climate Initiatives Actively and Effectively.
              </p>
              
              <div className="relative rounded-3xl overflow-hidden h-64 shadow-2xl">
                <img 
                  src="assets/img/home/vision_img.jpg" 
                  alt="Our Vision" 
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07060d] via-transparent to-transparent opacity-80" />
              </div>
            </div>
          </Reveal>

          {/* Mission */}
          <Reveal i={2}>
            <div className="group relative">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#ff4d9d] mb-3 block">
                CHAPTER 02 — OUR MISSION
              </span>
              <h3 
                className="text-2xl sm:text-4xl font-extrabold text-[#f4f1ff] mb-4 leading-snug"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                To Reduce Impact of Climate Change
              </h3>
              <p className="text-[#9a95b5] text-base sm:text-lg leading-relaxed mb-8 font-light">
                We built CarbonTrace to let anybody become a climate champion. Besides working out your climate impact in no time, you’ll join the growing community of changemakers taking on-the-ground climate action.
              </p>
              
              <div className="relative rounded-3xl overflow-hidden h-64 shadow-2xl">
                <img 
                  src="assets/img/home/mission_img.jpg" 
                  alt="Our Mission" 
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07060d] via-transparent to-transparent opacity-80" />
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}

