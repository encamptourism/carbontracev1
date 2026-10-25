import React from "react";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

export default function DigitalPassportSection({ setToggle }) {
  return (
    <section
      className="py-28 px-4 relative overflow-hidden text-[#f4f1ff] bg-[#030712] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(3, 7, 18, 0.75) 0%, rgba(3, 7, 18, 0.35) 50%, rgba(3, 7, 18, 0.75) 100%), url('/assets/img/home/Orbit.png')"
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#00e0c6]/6 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <Reveal i={0}>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00e0c6]/10 text-[#00e0c6] border border-[#00e0c6]/30 text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00e0c6] animate-pulse" />
              DIGITAL PRODUCT PASSPORT
            </span>

            <h2
              className="text-4xl sm:text-6xl font-extrabold text-[#f4f1ff] leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}
            >
              Unlock <span className="grad">EU Market Access</span> with Carbon Intelligence
            </h2>

            <p className="text-[#9a95b5] text-lg sm:text-xl leading-relaxed font-light">
              CarbonTrace enables exporters to meet upcoming European Union sustainability regulations through Digital Product Passports (DPP).
            </p>
          </div>
        </Reveal>

        <div className="relative mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <Reveal i={0} className="h-full">
              <div className="group relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#00f5a0]/25 via-[#00e0c6]/15 to-[#00c2ff]/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-[32px]" />

                <div
                  className="relative h-full p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
                  style={{
                    background: "linear-gradient(180deg, rgba(3, 20, 22, 0.85) 0%, rgba(2, 12, 14, 0.95) 100%) padding-box, linear-gradient(135deg, #00f5a0 0%, #00e5c5 45%, #00c2ff 100%) border-box",
                    border: "1.5px solid transparent",
                    borderRadius: "28px",
                    boxShadow: "0 0 25px rgba(0, 245, 160, 0.18), 0 0 60px rgba(0, 194, 255, 0.08), inset 0 0 30px rgba(0, 245, 160, 0.04)"
                  }}
                >
                  <div className="absolute -top-6 left-6 sm:left-8 w-12 h-12 rounded-full bg-[#031816] border-2 border-[#00f5a0] flex items-center justify-center font-bold text-white text-base shadow-[0_0_18px_rgba(0,245,160,0.65),0_0_35px_rgba(0,245,160,0.25)] z-30 transition-transform duration-300 group-hover:scale-105">
                    01
                  </div>

                  <div className="absolute -top-3 left-22 sm:left-24 flex items-center gap-2 px-2.5 bg-[#031816] z-20 pointer-events-none">
                    <span className="w-2 h-2 rounded-full bg-[#00f5a0] shadow-[0_0_8px_#00f5a0]" />
                    <span className="text-[11px] font-mono font-bold tracking-[0.18em] text-[#00f5a0] uppercase">
                      THE MANDATE
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6 drop-shadow-[0_0_12px_rgba(0,245,160,0.35)]">
                      <svg className="w-10 h-10 text-[#00f5a0]" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                        <path d="M8 6C8 4.89543 8.89543 4 10 4H24L32 12V22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M24 4V12H32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13 14H21M13 19H22M13 24H18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 23C21 23 21 32 27.5 35C34 32 34 23 34 23V18L27.5 16L21 18V23Z" stroke="#00f5a0" strokeWidth="2" fill="#041a18" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M25 25.5L27 27.5L30.5 23.5" stroke="#00f5a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <h3
                      className="text-2xl font-bold text-white mb-4 tracking-tight leading-[1.25]"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      EU Regulation &amp; CBAM<br />Compliance
                    </h3>

                    <p className="text-[#94a3b8] text-[14px] sm:text-[15px] leading-relaxed font-light">
                      Upcoming European Union directives require exporters to disclose verifiable, product-level carbon footprints and supply chain origin data to retain market access.
                    </p>
                  </div>

                  <div className="relative h-28 mt-6 overflow-hidden pointer-events-none rounded-b-[26px]">
                    <svg
                      viewBox="0 0 320 140"
                      fill="none"
                      className="absolute bottom-0 left-0 w-full h-full opacity-55 overflow-visible drop-shadow-[0_0_8px_rgba(0,245,160,0.3)]"
                    >
                      <path d="M-20,130 C40,120 70,80 110,95 C150,110 190,75 230,65 C260,60 285,45 320,35" stroke="#00f5a0" strokeWidth="1.2" />
                      <path d="M-20,115 C50,105 80,68 120,80 C160,95 200,60 240,52 C270,47 295,32 330,22" stroke="#00f5a0" strokeWidth="1.2" />
                      <path d="M-20,100 C60,90 90,56 130,68 C170,80 210,48 250,40 C280,35 305,20 340,10" stroke="#00f5a0" strokeWidth="1.2" />
                      <path d="M-20,85 C70,75 100,44 140,55 C180,66 220,36 260,28 C290,23 315,10 350,0" stroke="#00f5a0" strokeWidth="1.2" />
                      <path d="M-20,70 C80,62 110,32 150,42 C190,52 230,24 270,16 C300,12 325,0 360,-10" stroke="#00f5a0" strokeWidth="1.2" />
                      <path d="M-20,55 C90,48 120,20 160,30 C200,40 240,12 280,5 C310,0 335,-10 370,-20" stroke="#00f5a0" strokeWidth="1.2" />
                    </svg>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal i={1} className="h-full">
              <div className="group relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#00c2ff]/25 via-[#00a8e8]/15 to-[#0077b6]/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-[32px]" />

                <div
                  className="relative h-full p-7 sm:p-8 pt-14 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
                  style={{
                    background: "linear-gradient(180deg, rgba(2, 20, 34, 0.85) 0%, rgba(1, 11, 22, 0.95) 100%) padding-box, linear-gradient(135deg, #00c2ff 0%, #0099ff 50%, #0077b6 100%) border-box",
                    border: "1.5px solid transparent",
                    borderRadius: "28px",
                    boxShadow: "0 0 25px rgba(0, 194, 255, 0.22), 0 0 60px rgba(0, 120, 255, 0.08), inset 0 0 30px rgba(0, 194, 255, 0.04)"
                  }}
                >
                  <div className="absolute -top-6 left-6 sm:left-8 w-12 h-12 rounded-full bg-[#03182b] border-2 border-[#00c2ff] flex items-center justify-center font-bold text-white text-base shadow-[0_0_18px_rgba(0,194,255,0.65),0_0_35px_rgba(0,194,255,0.25)] z-30 transition-transform duration-300 group-hover:scale-105">
                    02
                  </div>

                  <div className="absolute -top-3 left-22 sm:left-24 flex items-center gap-2 px-2.5 bg-[#03182b] z-20 pointer-events-none">
                    <span className="w-2 h-2 rounded-full bg-[#00c2ff] shadow-[0_0_8px_#00c2ff]" />
                    <span className="text-[11px] font-mono font-bold tracking-[0.18em] text-[#00c2ff] uppercase">
                      TELEMETRY
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6 drop-shadow-[0_0_12px_rgba(0,194,255,0.35)]">
                      <svg className="w-10 h-10 text-[#00c2ff]" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                        <rect x="15" y="15" width="10" height="10" rx="2" transform="rotate(45 20 20)" strokeWidth="2" fill="#041a2c" />
                        <line x1="23.5" y1="16.5" x2="30.5" y2="9.5" strokeWidth="2" strokeLinecap="round" />
                        <rect x="27" y="5" width="9" height="6.5" rx="1.5" transform="rotate(45 31.5 8.25)" strokeWidth="1.8" />
                        <line x1="29" y1="8" x2="34" y2="8.5" strokeWidth="1" opacity="0.6" />
                        <line x1="16.5" y1="23.5" x2="9.5" y2="30.5" strokeWidth="2" strokeLinecap="round" />
                        <rect x="5" y="27" width="9" height="6.5" rx="1.5" transform="rotate(45 9.5 30.25)" strokeWidth="1.8" />
                        <line x1="7" y1="30" x2="12" y2="30.5" strokeWidth="1" opacity="0.6" />
                        <path d="M26 26C28.8 28.8 28.8 33.2 26 36" strokeWidth="2" strokeLinecap="round" />
                        <path d="M29.5 22.5C33.5 26.5 33.5 33.5 29.5 37.5" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
                      </svg>
                    </div>

                    <h3
                      className="text-2xl font-bold text-white mb-4 tracking-tight leading-[1.25]"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      Geospatial &amp; Satellite<br />Tracking
                    </h3>

                    <p className="text-[#94a3b8] text-[14px] sm:text-[15px] leading-relaxed font-light">
                      High-resolution satellite NDVI imagery monitors land use, forest cover, and real-world carbon emissions across raw material supply chains.
                    </p>
                  </div>

                  <div className="mt-8 bg-[#02101a]/95 border border-[#00c2ff]/35 rounded-2xl p-2.5 sm:p-3 flex items-center gap-3 shadow-[0_0_20px_rgba(0,194,255,0.14)]">
                    <div className="relative w-28 sm:w-32 h-20 sm:h-22 rounded-xl overflow-hidden shrink-0 border border-white/10">
                      <img
                        src="/assets/img/satellite/satellite_ndvi.jpg"
                        alt="Satellite NDVI telemetry"
                        className="w-full h-full object-cover scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="flex-1 bg-[#010c14]/85 rounded-xl p-2.5 border border-[#00c2ff]/15 flex flex-col justify-center gap-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_6px_#10b981]" />
                          <span className="text-slate-300 font-medium">NDVI</span>
                        </div>
                        <span className="font-mono font-bold text-white tracking-wide">0.76</span>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#00c2ff] shadow-[0_0_6px_#00c2ff]" />
                          <span className="text-slate-300 font-medium">Forest Cover</span>
                        </div>
                        <span className="font-mono font-bold text-white tracking-wide">92%</span>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#a855f7] shadow-[0_0_6px_#a855f7]" />
                          <span className="text-slate-300 font-medium">Land Use</span>
                        </div>
                        <span className="font-mono font-bold text-white tracking-wide">78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal i={2} className="h-full">
              <div className="group relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-br from-[#c084fc]/25 via-[#a855f7]/15 to-[#7c3aed]/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-[32px]" />

                <div
                  className="relative h-full p-7 sm:p-8 pt-14 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
                  style={{
                    background: "linear-gradient(180deg, rgba(20, 8, 38, 0.85) 0%, rgba(10, 4, 22, 0.95) 100%) padding-box, linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #7c3aed 100%) border-box",
                    border: "1.5px solid transparent",
                    borderRadius: "28px",
                    boxShadow: "0 0 25px rgba(168, 85, 247, 0.22), 0 0 60px rgba(124, 58, 237, 0.08), inset 0 0 30px rgba(168, 85, 247, 0.04)"
                  }}
                >
                  <div className="absolute -top-6 left-6 sm:left-8 w-12 h-12 rounded-full bg-[#180931] border-2 border-[#a855f7] flex items-center justify-center font-bold text-white text-base shadow-[0_0_18px_rgba(168,85,247,0.65),0_0_35px_rgba(168,85,247,0.25)] z-30 transition-transform duration-300 group-hover:scale-105">
                    03
                  </div>

                  <div className="absolute -top-3 left-22 sm:left-24 flex items-center gap-2 px-2.5 bg-[#180931] z-20 pointer-events-none">
                    <span className="w-2 h-2 rounded-full bg-[#a855f7] shadow-[0_0_8px_#a855f7]" />
                    <span className="text-[11px] font-mono font-bold tracking-[0.18em] text-[#c084fc] uppercase">
                      VERIFICATION
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6 drop-shadow-[0_0_12px_rgba(168,85,247,0.35)]">
                      <svg className="w-10 h-10 text-[#a855f7]" viewBox="0 0 40 40" fill="none" stroke="currentColor">
                        <path d="M20 5L9 9V19C9 27.5 13.8 33.7 20 36C26.2 33.7 31 27.5 31 19V9L20 5Z" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="#160829" />
                        <path d="M15 20L18.5 23.5L25 16.5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <h3
                      className="text-2xl font-bold text-white mb-4 tracking-tight leading-[1.25]"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      Digital Passport Certification
                    </h3>

                    <p className="text-[#94a3b8] text-[14px] sm:text-[15px] leading-relaxed font-light">
                      Environmental data is issued as an immutable Digital Product Passport (DPP) certificate, empowering buyers &amp; customs to instantly verify claims.
                    </p>
                  </div>

                  <div className="mt-8 relative z-10 bg-[#021316]/95 border border-[#00f5a0]/45 rounded-2xl p-3 sm:p-3.5 flex items-center justify-between gap-3 shadow-[0_0_20px_rgba(0,245,160,0.15)]">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#00f5a0]/15 border border-[#00f5a0]/30 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(0,245,160,0.25)]">
                        <svg className="w-5 h-5 text-[#00f5a0]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-bold text-xs sm:text-sm tracking-tight leading-tight">
                          Digital Product Passport
                        </div>
                        <div className="text-[#00f5a0] font-medium text-[11px] sm:text-xs tracking-tight mt-0.5">
                          Verified &amp; Immutable
                        </div>
                      </div>
                    </div>

                    <div className="relative shrink-0">
                      <div className="w-11 h-11 bg-white p-1 rounded-md shadow-md flex items-center justify-center">
                        <svg viewBox="0 0 29 29" className="w-full h-full text-black" fill="currentColor">
                          <path d="M0,0 h7 v7 h-7 z M1,1 v5 h5 v-5 z M2,2 h3 v3 h-3 z" />
                          <path d="M22,0 h7 v7 h-7 z M23,1 v5 h5 v-5 z M24,2 h3 v3 h-3 z" />
                          <path d="M0,22 h7 v7 h-7 z M1,23 v5 h5 v-5 z M2,24 h3 v3 h-3 z" />
                          <path d="M8,2 h2 v1 h-2 z M11,1 h1 v3 h-1 z M13,0 h2 v2 h-2 z M16,1 h1 v2 h-1 z M18,0 h3 v1 h-3 z" />
                          <path d="M9,4 h3 v2 h-1 v-1 h-2 z M14,3 h2 v2 h-2 z M17,4 h3 v1 h-3 z" />
                          <path d="M0,8 h1 v3 h1 v-2 h2 v1 h-1 v2 h-2 v1 h-1 z M4,9 h2 v2 h-2 z" />
                          <path d="M8,8 h2 v2 h-2 z M12,7 h1 v3 h-1 z M15,8 h3 v1 h-1 v1 h-2 z M20,8 h2 v2 h-2 z M24,8 h2 v1 h-2 z M27,7 h2 v2 h-2 z" />
                          <path d="M8,11 h1 v2 h-1 z M10,12 h3 v1 h-3 z M14,11 h2 v2 h-2 z M18,11 h2 v3 h-1 v-1 h-1 z M22,11 h1 v2 h-1 z M25,10 h2 v3 h-2 z" />
                          <path d="M8,14 h3 v1 h-2 v1 h-1 z M12,14 h2 v2 h-2 z M16,14 h2 v1 h-1 v1 h-1 z M20,14 h1 v2 h-1 z M23,14 h3 v1 h-3 z M27,13 h2 v2 h-2 z" />
                          <path d="M8,17 h2 v1 h-1 v2 h-1 z M11,18 h2 v2 h-2 z M14,17 h3 v1 h-2 v1 h2 v1 h-3 z M19,17 h2 v1 h-1 v2 h-1 z M23,17 h1 v1 h1 v-1 h2 v2 h-3 v1 h-1 z" />
                          <path d="M8,21 h1 v3 h-1 z M11,21 h2 v1 h-2 z M15,21 h2 v2 h-2 z M18,21 h2 v1 h-2 z M22,20 h2 v2 h-2 z M26,20 h3 v2 h-3 z" />
                          <path d="M9,24 h1 v2 h-1 z M12,23 h1 v2 h-1 z M14,24 h3 v1 h-2 v2 h-1 z M19,23 h2 v1 h-2 z M23,23 h2 v2 h-2 z M26,23 h1 v3 h-1 z" />
                          <path d="M8,26 h3 v2 h-3 z M13,27 h3 v2 h-3 z M18,26 h2 v2 h-2 z M21,27 h3 v2 h-3 z M26,27 h3 v2 h-3 z" />
                        </svg>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#00f5a0] text-black flex items-center justify-center font-black text-[10px] shadow-md border-2 border-[#021316]">
                        ✓
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 w-44 h-36 overflow-hidden pointer-events-none rounded-br-[26px] opacity-45">
                    <svg viewBox="0 0 180 140" fill="none" className="w-full h-full">
                      <defs>
                        <pattern id="purple-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1.1" fill="#a855f7" />
                        </pattern>
                        <radialGradient id="purple-fade" cx="100%" cy="100%" r="90%">
                          <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
                          <stop offset="60%" stopColor="#fff" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                        </radialGradient>
                        <mask id="dots-mask">
                          <rect width="180" height="140" fill="url(#purple-fade)" />
                        </mask>
                      </defs>
                      <rect width="180" height="140" fill="url(#purple-dots)" mask="url(#dots-mask)" />
                    </svg>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

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