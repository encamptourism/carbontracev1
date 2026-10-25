import React from "react";

function LayerCard({ num, tag, color, borderGrad, bgGrad, title, subtitle, children, visual }) {
  return (
    <div className="group relative h-full">
      <div
        className="absolute -inset-1 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          background: `radial-gradient(circle at top left, ${color}55 0%, rgba(0, 194, 255, 0.15) 100%)`,
          borderRadius: "36px 14px 36px 14px"
        }}
      />
      <div
        className="relative h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
        style={{
          background: `${bgGrad} padding-box, ${borderGrad} border-box`,
          border: "1.5px solid transparent",
          borderRadius: "32px 10px 32px 10px",
          boxShadow: `0 0 25px ${color}2e, inset 0 0 25px ${color}0a`
        }}
      >
        <div className="absolute top-3.5 right-4 flex items-center gap-1.5 opacity-60">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
          <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color }}>{tag}</span>
        </div>

        <div
          className="absolute -top-4 left-5 w-10 h-10 rounded-full border-2 flex items-center justify-center font-extrabold text-white text-sm z-30 transition-transform duration-300 group-hover:scale-105"
          style={{
            background: "#031816",
            borderColor: color,
            boxShadow: `0 0 18px ${color}b3`
          }}
        >
          {num}
        </div>

        <div className="pt-5 px-3 sm:px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 tracking-tight leading-[1.2] pt-2" style={{ fontFamily: "var(--font-syne)" }}>
            {title}
          </h3>
          <p className="text-[#9cb4af] text-[14px] sm:text-[15px] leading-snug font-normal m-0 mb-4">
            {subtitle}
          </p>
          {children}
        </div>

        {visual}
      </div>
    </div>
  );
}

export default function ClimateIntelligenceArchitecture({ setToggle }) {
  return (
    <section
      className="py-16 relative overflow-hidden text-[#f4f1ff]"
      style={{
        background: "radial-gradient(circle at 50% 0%, rgba(0, 245, 160, 0.05) 0%, rgba(2, 9, 14, 1) 75%)"
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#00f5a0]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10 px-0">
        <div
          className="relative rounded-[28px] overflow-hidden mb-12 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          style={{
            backgroundImage: "url('/assets/img/architecture/arch_hero_panorama.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 35%"
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(2, 9, 14, 0.95) 0%, rgba(2, 9, 14, 0.82) 42%, rgba(2, 9, 14, 0.55) 75%, rgba(2, 9, 14, 0.88) 100%), linear-gradient(180deg, rgba(2, 9, 14, 0.7) 0%, rgba(2, 9, 14, 0.2) 45%, rgba(2, 9, 14, 0.85) 100%)"
            }}
          />

          <div className="relative z-10 py-6 sm:py-8 px-4 sm:px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="text-sm sm:text-base font-semibold text-white/95 tracking-wide mb-0.5">
                From Carbon Footprints to
              </div>
              <h2
                className="text-2xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00f5a0] via-[#00f2ad] to-[#00f0ff] drop-shadow-[0_0_25px_rgba(0,245,160,0.35)] leading-tight"
                style={{ fontFamily: "var(--font-syne, sans-serif)" }}
              >
                Climate Intelligence
              </h2>
              <p className="text-xs sm:text-sm text-[#9cb4af] leading-relaxed max-w-2xl mt-1 font-light">
                A geospatial &amp; digital MRV infrastructure that connects physical climate interventions to verified impact — with full evidence, transparency and trust.
              </p>
            </div>

            <div
              onClick={() => setToggle && setToggle(true)}
              className="group flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-[#00f5a0]/60 shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(2, 28, 24, 0.85) 0%, rgba(2, 16, 18, 0.92) 100%)",
                border: "1.5px solid rgba(0, 245, 160, 0.35)",
                backdropFilter: "blur(14px)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(0, 245, 160, 0.08)"
              }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#012d24] border-2 border-[#00f5a0] text-[#00f5a0] shadow-[0_0_15px_rgba(0,245,160,0.45)] group-hover:scale-105 transition-transform">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-[#00f5a0] transition-colors">
                  Climate Action Atlas
                </div>
                <div className="text-[10.5px] text-[#8ea09d] leading-tight max-w-[200px] mt-0.5">
                  Where to act. What to do. How much it costs. Measured. Verified. Lasting.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 px-1 mb-8">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-1.5 rounded-full bg-[#00f5a0] shadow-[0_0_10px_#00f5a0]" />
            <h3
              className="text-xl sm:text-2xl font-extrabold text-white tracking-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              The 7-Layer CarbonTrace Architecture
            </h3>
          </div>
          <div className="hidden sm:block text-slate-600 font-light text-lg">|</div>
          <div className="text-xs sm:text-sm text-[#8ea09d] font-normal">
            From raw evidence to verified climate impact — powered by data, science and transparency.
          </div>
        </div>

        <div className="relative mb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            <LayerCard
              num="01"
              tag="LAYER 01"
              color="#00f5a0"
              bgGrad="linear-gradient(180deg, rgba(3, 22, 24, 0.9) 0%, rgba(2, 13, 16, 0.98) 100%)"
              borderGrad="linear-gradient(135deg, #00f5a0 0%, #00e5c5 45%, #00c2ff 100%)"
              title={<>Universal<br />Evidence Layer</>}
              subtitle="Every climate action gets an immutable evidence object."
              visual={
                <div
                  className="w-full h-32 sm:h-36 relative overflow-hidden mt-auto"
                  style={{ borderRadius: "0 0 30.5px 8.5px" }}
                >
                  <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#020d10] via-[#020d10]/40 to-transparent pointer-events-none z-10" />
                  <img
                    src="/assets/img/architecture/layer1_evidence_satellite.jpg"
                    alt="Universal Evidence Layer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
                  />
                </div>
              }
            >
              <div className="grid grid-cols-2 gap-x-3 gap-y-2 mb-4 text-[13.5px] sm:text-[14px] text-white/95">
                <div className="flex items-center gap-2"><span className="text-base text-[#00f5a0]">📍</span><span className="font-medium">GPS &amp; Location</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00f5a0]">🧪</span><span className="font-medium">Laboratory Result</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00f5a0]">📷</span><span className="font-medium">Photograph / Video</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00f5a0]">🧾</span><span className="font-medium">Invoice / Land Record</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00f5a0]">🛰️</span><span className="font-medium">Satellite / Drone</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00f5a0]">📄</span><span className="font-medium">Project Document</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00f5a0]">📶</span><span className="font-medium">Sensor / IoT</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00f5a0]">👤</span><span className="font-medium">Farmer Declaration</span></div>
              </div>
            </LayerCard>

            <LayerCard
              num="02"
              tag="LAYER 02"
              color="#00f5a0"
              bgGrad="linear-gradient(180deg, rgba(3, 22, 24, 0.9) 0%, rgba(2, 13, 16, 0.98) 100%)"
              borderGrad="linear-gradient(135deg, #00f5a0 0%, #00e5c5 45%, #00c2ff 100%)"
              title={<>Climate Asset<br />Digital Twin</>}
              subtitle="Every project becomes a living digital object with its full lifecycle."
              visual={
                <div
                  className="w-full h-32 sm:h-36 relative overflow-hidden mt-auto"
                  style={{ borderRadius: "0 0 30.5px 8.5px" }}
                >
                  <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#020d10] via-[#020d10]/40 to-transparent pointer-events-none z-10" />
                  <img
                    src="/assets/img/architecture/layer2_digital_twin.jpg"
                    alt="Climate Asset Digital Twin"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
                  />
                </div>
              }
            >
              <div className="grid grid-cols-2 gap-x-3 gap-y-2 mb-4 text-[13.5px] sm:text-[14px] text-white/95">
                <div className="flex items-center gap-2"><span className="text-base text-[#00f5a0]">🌾</span><span className="font-medium">Farm</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00f5a0]">⛺</span><span className="font-medium">Tourism</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00f5a0]">🌳</span><span className="font-medium">Tree</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00f5a0]">🚗</span><span className="font-medium">Transport</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00f5a0]">🪵</span><span className="font-medium">Biochar</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00f5a0]">🌱</span><span className="font-medium">Restoration Plot</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00f5a0]">💧</span><span className="font-medium">Wetland</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00f5a0]">🏭</span><span className="font-medium">Industrial Facility</span></div>
              </div>
            </LayerCard>

            <LayerCard
              num="03"
              tag="LAYER 03"
              color="#00d2c4"
              bgGrad="linear-gradient(180deg, rgba(2, 22, 26, 0.9) 0%, rgba(2, 13, 16, 0.98) 100%)"
              borderGrad="linear-gradient(135deg, #00d2c4 0%, #00e5c5 45%, #00c2ff 100%)"
              title={<>Scientific<br />Model Engine</>}
              subtitle="A model registry with sector-specific, peer-reviewed scientific models."
              visual={
                <div
                  className="w-full h-32 sm:h-36 relative overflow-hidden mt-auto"
                  style={{ borderRadius: "0 0 30.5px 8.5px" }}
                >
                  <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#020d10] via-[#020d10]/40 to-transparent pointer-events-none z-10" />
                  <img
                    src="/assets/img/architecture/layer3_scientific_model.jpg"
                    alt="Scientific Model Engine"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
                  />
                </div>
              }
            >
              <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 mb-4 text-[13.5px] sm:text-[14px] text-white/95">
                <div className="flex items-center gap-2"><span className="text-base text-[#00d2c4]">🌾</span><div><span className="font-medium block leading-tight">Agriculture</span><span className="text-[11px] text-slate-300 font-mono">(RothC, N₂O, ...)</span></div></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00d2c4]">🪵</span><div><span className="font-medium block leading-tight">Biochar</span><span className="text-[11px] text-slate-300 font-mono">(Permanence)</span></div></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00d2c4]">🌲</span><div><span className="font-medium block leading-tight">Forestry</span><span className="text-[11px] text-slate-300 font-mono">(Allometric, Biomass)</span></div></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00d2c4]">🪨</span><div><span className="font-medium block leading-tight">ERW</span><span className="text-[11px] text-slate-300 font-mono">(Dissolution, Mineral)</span></div></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00d2c4]">🌊</span><div><span className="font-medium block leading-tight">Wetlands</span><span className="text-[11px] text-slate-300 font-mono">(Methane flux)</span></div></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00d2c4]">✈️</span><div><span className="font-medium block leading-tight">Travel</span><span className="text-[11px] text-slate-300 font-mono">(Transport, Hotel)</span></div></div>
              </div>
            </LayerCard>

            <LayerCard
              num="04"
              tag="LAYER 04"
              color="#00b4d8"
              bgGrad="linear-gradient(180deg, rgba(2, 22, 30, 0.9) 0%, rgba(2, 12, 18, 0.98) 100%)"
              borderGrad="linear-gradient(135deg, #00b4d8 0%, #00e5c5 45%, #00f5a0 100%)"
              title={<>AI / Remote Sensing<br />Engine</>}
              subtitle="Satellite, drone, IoT and AI interpretation — not the final authority."
              visual={
                <div
                  className="w-full h-32 sm:h-36 relative overflow-hidden mt-auto"
                  style={{ borderRadius: "0 0 30.5px 8.5px" }}
                >
                  <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#020d10] via-[#020d10]/40 to-transparent pointer-events-none z-10" />
                  <img
                    src="/assets/img/architecture/layer4_remote_sensing.jpg"
                    alt="Remote Sensing Engine"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
                  />
                </div>
              }
            >
              <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 mb-4 text-[13.5px] sm:text-[14px] text-white/95">
                <div className="flex items-center gap-2"><span className="text-base text-[#00b4d8]">🛰️</span><span className="font-medium">Sentinel-1 / Sentinel-2</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00b4d8]">🔄</span><span className="font-medium">Change Detection</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00b4d8]">📡</span><span className="font-medium">Landsat / NISAR</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00b4d8]">📈</span><span className="font-medium">Time-series Analysis</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00b4d8]">🎯</span><span className="font-medium">Object Detection</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#00b4d8]">⚡</span><span className="font-medium">Anomaly Detection</span></div>
              </div>
            </LayerCard>

            <LayerCard
              num="05"
              tag="LAYER 05"
              color="#a855f7"
              bgGrad="linear-gradient(180deg, rgba(18, 9, 32, 0.9) 0%, rgba(11, 5, 22, 0.98) 100%)"
              borderGrad="linear-gradient(135deg, #a855f7 0%, #818cf8 45%, #00e0c6 100%)"
              title={<>Uncertainty<br />Engine</>}
              subtitle="Every result comes with a quantified range, not a single number."
              visual={
                <div
                  className="w-full h-28 sm:h-32 flex items-center justify-center p-2 relative overflow-hidden bg-[#0c051a]/30 mt-auto"
                  style={{ borderRadius: "0 0 30.5px 8.5px" }}
                >
                  <svg viewBox="0 0 240 100" className="w-full h-full" fill="none">
                    <defs>
                      <linearGradient id="bellGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#c084fc" stopOpacity="0.6" />
                        <stop offset="70%" stopColor="#a855f7" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#7e22ce" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <line x1="20" y1="85" x2="220" y2="85" stroke="#4c1d95" strokeWidth="1.2" />
                    <line x1="20" y1="55" x2="220" y2="55" stroke="#4c1d95" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.4" />
                    <line x1="20" y1="25" x2="220" y2="25" stroke="#4c1d95" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.4" />
                    <line x1="90" y1="65" x2="90" y2="85" stroke="#9333ea" strokeWidth="1" strokeDasharray="2,2" />
                    <line x1="150" y1="65" x2="150" y2="85" stroke="#9333ea" strokeWidth="1" strokeDasharray="2,2" />
                    <line x1="120" y1="15" x2="120" y2="85" stroke="#d8b4fe" strokeWidth="1.5" strokeDasharray="3,3" />
                    <path d="M 25 85 C 55 85, 80 80, 92 65 C 104 50, 110 15, 120 15 C 130 15, 136 50, 148 65 C 160 80, 185 85, 215 85 Z" fill="url(#bellGrad)" />
                    <path d="M 25 85 C 55 85, 80 80, 92 65 C 104 50, 110 15, 120 15 C 130 15, 136 50, 148 65 C 160 80, 185 85, 215 85" stroke="#e9d5ff" strokeWidth="2.4" strokeLinecap="round" filter="drop-shadow(0 0 6px #c084fc)" />
                    <circle cx="120" cy="15" r="3.5" fill="#ffffff" stroke="#c084fc" strokeWidth="1.5" />
                  </svg>
                </div>
              }
            >
              <div className="grid grid-cols-2 gap-x-3 gap-y-2 mb-4 text-[13.5px] sm:text-[14px] text-white/95">
                <div className="flex items-center gap-2"><span className="text-base text-[#c084fc]">⏱️</span><span className="font-medium">Sensor Uncertainty</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#c084fc]">📏</span><span className="font-medium">Measurement Error</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#c084fc]">ℹ️</span><span className="font-medium">Satellite Uncertainty</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#c084fc]">↗️</span><span className="font-medium">Conversion Factor Error</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#c084fc]">📊</span><span className="font-medium">Sampling Error</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#c084fc]">🔘</span><span className="font-medium">Baseline Uncertainty</span></div>
                <div className="flex items-center gap-2"><span className="text-base text-[#c084fc]">📉</span><span className="font-medium">Model Error</span></div>
              </div>
            </LayerCard>

            <LayerCard
              num="07"
              tag="LAYER 07"
              color="#818cf8"
              bgGrad="linear-gradient(180deg, rgba(3, 22, 28, 0.9) 0%, rgba(2, 13, 20, 0.98) 100%)"
              borderGrad="linear-gradient(135deg, #818cf8 0%, #00e5c5 45%, #00f5a0 100%)"
              title={<>Evidence &amp;<br />Verification Graph</>}
              subtitle="A machine-readable chain from people to credits."
              visual={
                <div
                  className="w-full flex items-center gap-2.5 px-3.5 py-3 bg-[#011c16]/90 relative border-t border-[#00f5a0]/15 mt-auto"
                  style={{ borderRadius: "0 0 30.5px 8.5px" }}
                >
                  <img
                    src="/assets/img/architecture/stripe_river_landscape.jpg"
                    alt="Stripe for climate"
                    className="w-10 h-10 rounded-lg object-cover shrink-0 block"
                  />
                  <div>
                    <div className="text-xs font-bold text-white leading-tight">Stripe for climate measurement &amp; verification.</div>
                    <div className="text-[11px] text-[#00f5a0] font-semibold mt-0.5">✓ Full traceability. Complete transparency.</div>
                  </div>
                </div>
              }
            >
              <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 mb-2.5 text-[12px] sm:text-[13px] text-[#cbd5e1] font-medium leading-normal">
                <div className="flex items-center gap-1"><span>👤</span> <span>Farmer</span> <span className="text-[#00f5a0]">→</span> <span>🏡</span> <span>Farm</span></div>
                <div className="flex items-center gap-1"><span>📋</span> <span>Practice</span> <span className="text-[#00f5a0]">→</span> <span>🛰️</span> <span>Sat</span></div>
                <div className="flex items-center gap-1"><span>📡</span> <span>Sensor</span> <span className="text-[#00f5a0]">→</span> <span>⚙️</span> <span>Model</span></div>
                <div className="flex items-center gap-1"><span>🧪</span> <span>Lab</span> <span className="text-[#00f5a0]">→</span> <span>🪙</span> <span>Credit</span></div>
              </div>

              <div className="py-0.5 mb-2">
                <svg viewBox="0 0 200 48" className="w-full h-[44px]" fill="none">
                  <line x1="25" y1="12" x2="175" y2="12" stroke="#00f5a0" strokeWidth="1" strokeDasharray="3,3" opacity="0.65" />
                  <line x1="25" y1="26" x2="175" y2="26" stroke="#00f5a0" strokeWidth="1" strokeDasharray="3,3" opacity="0.65" />
                  <line x1="25" y1="40" x2="175" y2="40" stroke="#00f5a0" strokeWidth="1" strokeDasharray="3,3" opacity="0.65" />
                  <line x1="25" y1="12" x2="25" y2="40" stroke="#00d2c4" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.45" />
                  <line x1="75" y1="12" x2="75" y2="40" stroke="#00d2c4" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.45" />
                  <line x1="125" y1="12" x2="125" y2="40" stroke="#00d2c4" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.45" />
                  <line x1="175" y1="12" x2="175" y2="40" stroke="#00d2c4" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.45" />
                  <line x1="25" y1="12" x2="75" y2="26" stroke="#00f5a0" strokeWidth="0.8" opacity="0.3" />
                  <line x1="75" y1="26" x2="125" y2="12" stroke="#00f5a0" strokeWidth="0.8" opacity="0.3" />
                  <line x1="125" y1="12" x2="175" y2="26" stroke="#00f5a0" strokeWidth="0.8" opacity="0.3" />
                  <circle cx="25" cy="12" r="4" fill="#021f1c" stroke="#00f5a0" strokeWidth="1.2" /><circle cx="25" cy="12" r="1.2" fill="#00f5a0" />
                  <circle cx="75" cy="12" r="4" fill="#021f1c" stroke="#00f5a0" strokeWidth="1.2" /><circle cx="75" cy="12" r="1.2" fill="#00f5a0" />
                  <circle cx="125" cy="12" r="4" fill="#021f1c" stroke="#00f5a0" strokeWidth="1.2" /><circle cx="125" cy="12" r="1.2" fill="#00f5a0" />
                  <circle cx="175" cy="12" r="4" fill="#021f1c" stroke="#00f5a0" strokeWidth="1.2" /><circle cx="175" cy="12" r="1.2" fill="#00f5a0" />
                  <circle cx="25" cy="26" r="4" fill="#021f1c" stroke="#00f5a0" strokeWidth="1.2" /><circle cx="25" cy="26" r="1.2" fill="#00f5a0" />
                  <circle cx="75" cy="26" r="4" fill="#021f1c" stroke="#00f5a0" strokeWidth="1.2" /><circle cx="75" cy="26" r="1.2" fill="#00f5a0" />
                  <circle cx="125" cy="26" r="4" fill="#021f1c" stroke="#00f5a0" strokeWidth="1.2" /><circle cx="125" cy="26" r="1.2" fill="#00f5a0" />
                  <circle cx="175" cy="26" r="4" fill="#021f1c" stroke="#00f5a0" strokeWidth="1.2" /><circle cx="175" cy="26" r="1.2" fill="#00f5a0" />
                  <circle cx="25" cy="40" r="4" fill="#021f1c" stroke="#00f5a0" strokeWidth="1.2" /><circle cx="25" cy="40" r="1.2" fill="#00f5a0" />
                  <circle cx="75" cy="40" r="4" fill="#021f1c" stroke="#00f5a0" strokeWidth="1.2" /><circle cx="75" cy="40" r="1.2" fill="#00f5a0" />
                  <circle cx="125" cy="40" r="4" fill="#021f1c" stroke="#00f5a0" strokeWidth="1.2" /><circle cx="125" cy="40" r="1.2" fill="#00f5a0" />
                  <circle cx="175" cy="40" r="4" fill="#021f1c" stroke="#00f5a0" strokeWidth="1.2" /><circle cx="175" cy="40" r="1.2" fill="#00f5a0" />
                </svg>
              </div>
            </LayerCard>

            <div className="md:col-span-3 group relative">
              <div
                className="absolute -inset-1 blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  background: "radial-gradient(circle at top left, rgba(0, 245, 160, 0.35) 0%, rgba(0, 194, 255, 0.2) 100%)",
                  borderRadius: "36px 14px 36px 14px"
                }}
              />

              <div
                className="relative py-6 px-4 sm:px-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(180deg, rgba(3, 24, 22, 0.92) 0%, rgba(2, 14, 16, 0.98) 100%) padding-box, linear-gradient(135deg, #00f5a0 0%, #00e5c5 50%, #00c2ff 100%) border-box",
                  border: "2px solid transparent",
                  borderRadius: "32px 10px 32px 10px",
                  boxShadow: "0 0 35px rgba(0, 245, 160, 0.22), 0 0 80px rgba(0, 194, 255, 0.1), inset 0 0 35px rgba(0, 245, 160, 0.05)"
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1.5 tracking-tight leading-[1.2]" style={{ fontFamily: "var(--font-syne)" }}>
                      The Result
                    </h3>
                    <p className="text-[#9cb4af] text-[14px] sm:text-[15px] leading-snug font-normal m-0 mb-4">
                      More than a calculator.<br />A complete climate intelligence and MRV infrastructure.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#01352a] border border-[#00f5a0]/50 flex items-center justify-center text-[#00f5a0] shadow-[0_0_10px_rgba(0,245,160,0.35)] shrink-0">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-white tracking-wide">Verified Impact</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#01352a] border border-[#00f5a0]/50 flex items-center justify-center text-[#00f5a0] shadow-[0_0_10px_rgba(0,245,160,0.35)] shrink-0">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="9" /><path d="M12 7v10M9 9h6M9 15h6" />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-white tracking-wide">Traceable Credits</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#01352a] border border-[#00f5a0]/50 flex items-center justify-center text-[#00f5a0] shadow-[0_0_10px_rgba(0,245,160,0.35)] shrink-0">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-white tracking-wide">Reduced Risk</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#01352a] border border-[#00f5a0]/50 flex items-center justify-center text-[#00f5a0] shadow-[0_0_10px_rgba(0,245,160,0.35)] shrink-0">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-white tracking-wide">Greater Transparency</span>
                      </div>

                      <div className="flex items-center gap-2.5 sm:col-span-2">
                        <div className="w-8 h-8 rounded-full bg-[#01352a] border border-[#00f5a0]/50 flex items-center justify-center text-[#00f5a0] shadow-[0_0_10px_rgba(0,245,160,0.35)] shrink-0">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" fill="currentColor" />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-white tracking-wide">Real Climate Action</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div
                      className="p-5 sm:p-6 rounded-2xl border border-[#00f5a0]/30 flex flex-col justify-between h-full relative overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, rgba(2, 28, 22, 0.9) 0%, rgba(2, 14, 18, 0.95) 100%)",
                        boxShadow: "0 0 25px rgba(0, 245, 160, 0.15)"
                      }}
                    >
                      <div className="mb-4">
                        <div className="text-sm sm:text-base font-extrabold text-white leading-tight">
                          Real Data. Real Projects.
                        </div>
                        <div className="text-lg sm:text-xl font-black text-[#00f5a0] leading-tight mt-0.5" style={{ fontFamily: "var(--font-syne)" }}>
                          Real Climate Impact.
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setToggle && setToggle(true)}
                        className="w-full py-3 px-5 rounded-full bg-[#00e599] hover:bg-[#00f5a0] text-[#031512] font-black text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(0,229,153,0.45)] hover:shadow-[0_0_30px_rgba(0,229,153,0.7)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Build a Sustainable Future</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
