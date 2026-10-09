import React, { useState } from "react";
import Marquee from "../Marquee";
import Reveal from "../Reveal";

export default function SupportersSection() {
  const [activeTab, setActiveTab] = useState("all");

  const marqueeWords = [
    "CARBON TRACE",
    "NET ZERO 2050",
    "CLIMATE ACTION",
    "ESG VERIFIED",
    "SUSTAINABILITY",
    "CARBON INTELLIGENCE PLATFORM"
  ];

  const supporters = [
    { src: "assets/img/cisco.png", alt: "Cisco", category: "tech" },
    { src: "assets/img/hdfc.png", alt: "HDFC Bank", category: "finance" },
    { src: "assets/img/tata_logo.png", alt: "TATA", category: "tech" },
    { src: "assets/img/sap-ariba.png", alt: "SAP Ariba", category: "tech" },
    { src: "assets/img/aws.png", alt: "AWS", category: "tech" },
    { src: "assets/img/gcp.png", alt: "Google Cloud", category: "tech" },
    { src: "assets/img/aic.png", alt: "AIC", category: "gov" },
    { src: "assets/img/assam_startup.png", alt: "Assam Startup", category: "gov" },
    { src: "assets/img/startup_india.png", alt: "Startup India", category: "gov" },
    { src: "assets/img/investindia.png", alt: "Invest India", category: "gov" },
    { src: "assets/img/missionlife.jpg", alt: "Mission Life", category: "gov" },
    { src: "assets/img/iie.png", alt: "IIE", category: "gov" },
    { src: "assets/img/nvcl.png", alt: "NVCL", category: "finance" },
    { src: "assets/img/needp.png", alt: "NEEDP", category: "gov" },
    { src: "assets/img/aidc.png", alt: "AIDC", category: "gov" },
    { src: "assets/img/wtf.png", alt: "WTF", category: "finance" },
  ];

  const mediaMentions = [
    {
      src: "assets/img/home/media/m2.svg",
      publisher: "YourStory",
      title: "Sustainability Agenda: How Encamp Adventures is spearheading carbon trace in tourism",
      quote: "Transforming how travellers & businesses track environmental footprint in real time.",
      href: "https://yourstory.com/socialstory/2021/10/sustainability-agenda-encamp-adventures/amp"
    },
    {
      src: "assets/img/home/media/gn.png",
      publisher: "Gulf News",
      title: "North East Startups Pitch at Dubai Elevate Session",
      quote: "CarbonTrace showcased as a pioneering climate-tech solution on an international stage.",
      href: "https://gulfnews.com/business/startups-from-indias-north-east-pitch-at-latest-elevate-session-1.1646926641837"
    },
    {
      src: "assets/img/home/media/m3.svg",
      publisher: "East Mojo",
      title: "Travel Startup Promotes Eco-Friendly Tourism at COP26 in Glasgow",
      quote: "Representing regional climate action at global climate summit COP26.",
      href: "https://www.eastmojo.com/northeast-news/2021/11/24/ne-travel-startup-promotes-eco-friendly-tourism-at-cop26-in-glasgow/"
    },
    {
      src: "assets/img/home/media/tp.png",
      publisher: "The Print",
      title: "AIC-SMUTBI Catalyzes Big Investment for Travel Footprint Calculator",
      quote: "Accelerating carbon trace footprint calculators deeper into Northeast India.",
      href: "https://theprint.in/ani-press-releases/aic-smutbi-plays-catalyst-to-encamp-adventures-1st-big-investment-launches-a-travel-carbon-footprint-calculator-and-expands-deeper-into-northeast-india/1108037/"
    },
    {
      src: "assets/img/home/media/tce.png",
      publisher: "Tourism Declares Emergency",
      title: "Signatory for Climate Emergency Declaration",
      quote: "Committed to cut global emissions in half by 2030 across tourism supply chains.",
      href: "https://www.tourismdeclares.com/who-has-declared"
    },
    {
      src: "assets/img/home/media/rof.png",
      publisher: "Rest of World",
      title: "Deploying Connectivity & Climate Data in Remote Terrains",
      quote: "Highlighting tech adoption for remote carbon tracking in tough topographies.",
      href: "https://restofworld.org/2022/starlink-elon-musk-global-access/"
    }
  ];

  const filteredSupporters = activeTab === "all" 
    ? supporters 
    : supporters.filter(s => s.category === activeTab);

  return (
    <section className="py-28 px-4 relative overflow-hidden text-[#f4f1ff]">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* INFINITE MARQUEE STRIP */}
        <Marquee words={marqueeWords} />

        {/* SUPPORTERS */}
        <div className="mb-24">
          <Reveal i={0}>
            <div className="text-center max-w-5xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c5cff]/10 text-[#7c5cff] border border-[#7c5cff]/30 text-xs sm:text-sm font-mono font-extrabold uppercase tracking-[0.2em] mb-4">
                SCENE 09 — ECOSYSTEM BACKING & INDUSTRY LEADERS
              </span>

              <h2 
                className="text-3xl sm:text-5xl font-extrabold text-[#f4f1ff] tracking-tight mb-4"
                style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}
              >
                Backed by Industry Leaders & Institutions
              </h2>
              <p className="text-[#9a95b5] text-base leading-relaxed font-light max-w-2xl mx-auto">
                Supported across multiple sectors — from global tech leaders and financial powerhouses to government incubation bodies.
              </p>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                {[
                  { id: "all", label: "All Partners" },
                  { id: "tech", label: "Tech Leaders" },
                  { id: "finance", label: "Financial Institutions" },
                  { id: "gov", label: "Government & Incubators" }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                      activeTab === tab.id
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
            {filteredSupporters.map((item, idx) => (
              <Reveal key={idx} i={idx}>
                <div data-hover className="group p-4 h-28 flex items-center justify-center rounded-2xl bg-white/5 border border-white/5 hover:border-[#7c5cff]/40 transition-all duration-300 backdrop-blur-md">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="max-h-12 max-w-full object-contain filter brightness-90 group-hover:brightness-125 transition-all"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* PRESS */}
        <div>
          <Reveal i={0}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff4d9d]/10 text-[#ff4d9d] border border-[#ff4d9d]/30 text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] mb-4">
                GLOBAL RECOGNITION
              </span>
              <h2 
                className="text-3xl sm:text-5xl font-extrabold text-[#f4f1ff] tracking-tight mb-4"
                style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}
              >
                Featured in Global Media
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaMentions.map((item, idx) => (
              <Reveal key={idx} i={idx}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full"
                  data-hover
                >
                  <div className="group h-full p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-[#ff4d9d]/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between">
                    <div>
                      <div className="h-10 mb-4 flex items-center">
                        <img 
                          src={item.src} 
                          alt={item.publisher} 
                          className="max-h-8 max-w-[140px] object-contain filter brightness-100 group-hover:brightness-125 transition-all"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-[#f4f1ff] mb-3 group-hover:text-[#ff4d9d] transition-colors leading-snug" style={{ fontFamily: "var(--font-syne)" }}>
                        "{item.title}"
                      </h3>
                      <p className="text-xs text-[#9a95b5] leading-relaxed font-light mb-6 border-l-2 border-[#ff4d9d] pl-3 italic">
                        {item.quote}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs font-bold text-[#ff4d9d] pt-3 border-t border-white/10">
                      <span>Read Article</span>
                      <span className="group-hover:translate-x-1.5 transition-transform">→</span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

