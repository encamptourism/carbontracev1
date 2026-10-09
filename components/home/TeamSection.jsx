import React, { useState } from "react";
import Reveal from "../Reveal";
import TiltCard from "../TiltCard";

export default function TeamSection() {
  const [filter, setFilter] = useState("all");

  const team = [
    { name: "Ratan Kumar", role: "Founder & CEO", category: "leadership", img: "assets/img/team/ratan.jpg", linkedin: "https://www.linkedin.com/in/ratan-kumar-58098bb6/", bio: "Spearheading carbon trace strategy & regional climate asset creation." },
    { name: "Arun Pattnaik", role: "Co-Founder & Product Lead", category: "leadership", img: "assets/img/team/arun.jpg", linkedin: "https://www.linkedin.com/in/arunpattnaik/", bio: "Architecting product roadmap & carbon infrastructure scaling." },
    { name: "Rituraj Phukan", role: "Sustainability Director", category: "sustainability", img: "assets/img/team/rituraj.jpg", linkedin: "https://www.linkedin.com/in/rrajphukan/", bio: "Leading environmental policy & biodiversity conservation efforts." },
    { name: "Abhijit Chatterjee", role: "Senior Sustainability Specialist", category: "sustainability", img: "assets/img/team/abhijit.jpg", linkedin: "https://www.linkedin.com/in/abhijit-chatterjee-66883017/", bio: "Expert in carbon accounting methodologies & verification standards." },
    { name: "Saikat Das", role: "Senior Sustainability Specialist", category: "sustainability", img: "assets/img/team/saikat.jpg", linkedin: "https://www.linkedin.com/in/saikat92/", bio: "Specializing in ESG data modeling & emission factor calculation." },
    { name: "Sarfaraz H", role: "Technical Lead", category: "engineering", img: "assets/img/team/sarfaraz.jpg", linkedin: "https://www.linkedin.com/in/sarfarazhassan/", bio: "Engineering backend climate engines & real-time data pipelines." },
    { name: "Jitumoni Changkakoty", role: "Product Developer", category: "engineering", img: "assets/img/team/jitumoni.jpg", linkedin: "https://www.linkedin.com/in/jitumoni-changkakoty-6b851a110/", bio: "Building intuitive user interfaces for personal & business calculators." },
    { name: "Deepak Ahlawat", role: "QA Lead", category: "engineering", img: "assets/img/team/deepak.jpg", linkedin: "https://www.linkedin.com/in/deepak-ahlawat-40a96266/", bio: "Ensuring precision, compliance & zero-defect calculator models." },
    { name: "Navneet Goswami", role: "Senior DevOps Consultant", category: "engineering", img: "assets/img/team/navneet.jpg", linkedin: "https://www.linkedin.com/in/navneet-goswami/", bio: "Managing high-availability cloud infrastructure & security protocols." },
  ];

  const filteredTeam = filter === "all" ? team : team.filter(m => m.category === filter);

  return (
    <section className="py-28 px-4 relative overflow-hidden text-[#f4f1ff]">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        <Reveal i={0}>
          <div className="text-center max-w-5xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c5cff]/10 text-[#7c5cff] border border-[#7c5cff]/30 text-xs sm:text-sm font-mono font-extrabold uppercase tracking-[0.2em] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#7c5cff] animate-ping" />
              SCENE 10 — THE MINDS BEHIND CARBONTRACE
            </span>

            <h2 
              className="text-3xl sm:text-5xl font-extrabold text-[#f4f1ff] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}
            >
              Meet the Team Behind CarbonTrace
            </h2>
            <p className="text-[#9a95b5] text-base leading-relaxed font-light max-w-2xl mx-auto">
              Our passionate team of climate scientists, product leads, and software engineers dedicated to accelerating planetary sustainability.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-8 max-w-full">
              {[
                { id: "all", label: "All Members" },
                { id: "leadership", label: "Leadership" },
                { id: "sustainability", label: "Sustainability Specialists" },
                { id: "engineering", label: "Engineering & Tech" }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    filter === tab.id
                      ? "bg-[#ff4d9d] text-[#07060d] font-extrabold shadow-lg"
                      : "bg-white/5 text-[#9a95b5] hover:text-[#f4f1ff]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Floating Borderless Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-7">

          {filteredTeam.map((member, idx) => (
            <Reveal key={idx} i={idx}>
              <div 
                data-hover
                className="group relative rounded-3xl p-6 bg-gradient-to-b from-[#12101f]/60 to-[#07060d]/80 border border-white/5 backdrop-blur-md hover:border-[#ff4d9d]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between h-full"
              >
                <div>
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6 shadow-2xl">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07060d] via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-xl font-bold text-[#f4f1ff] group-hover:text-[#ff4d9d] transition-colors" style={{ fontFamily: "var(--font-syne)" }}>
                        {member.name}
                      </h3>
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ff4d9d] text-[#ff4d9d] hover:text-[#07060d] flex items-center justify-center transition-all duration-300 border border-white/10"
                        >
                          <img 
                            src="assets/img/social/linkedin.png" 
                            alt="LinkedIn" 
                            className="w-3.5 h-3.5 filter brightness-120" 
                          />
                        </a>
                      )}
                    </div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <p className="text-xs font-bold text-[#00e0c6]">
                        {member.role}
                      </p>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-[10px] font-mono text-[#9a95b5] border border-white/10 uppercase">
                        {member.category}
                      </span>
                    </div>
                    <p className="text-[#9a95b5] text-xs leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 text-[11px] text-[#9a95b5] font-mono flex items-center gap-2 mt-4">
                  <span className="w-2 h-2 rounded-full bg-[#00e0c6] animate-pulse" />
                  Verified Team Member
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
