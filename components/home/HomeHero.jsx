import React from "react";
import MagneticButton from "../MagneticButton";
import Reveal from "../Reveal";

export default function HomeHero({ setToggle }) {
  const renderLetterSpan = (word, isGrad = false) => {
    return (
      <span className={isGrad ? "grad inline-block mr-3" : "inline-block mr-3"}>
        {word.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-200 hover:-translate-y-3 hover:-rotate-6 hover:text-[#ff4d9d]"
          >
            {char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden text-[#f4f1ff] pt-32 sm:pt-36 pb-20 px-4">
      {/* Background Image extending under header */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-45 scale-105 transform transition-transform duration-1000"
        style={{
          backgroundImage: `url('assets/img/home/vision_img.jpg')`,
          filter: 'brightness(0.7) contrast(1.2)'
        }}
      />

      {/* Seamless blend gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07060d]/50 via-[#07060d]/60 to-[#07060d] z-0" />


      <div className="container mx-auto relative z-10 text-center max-w-5xl">

        {/* Top Cinematic Scene Badge */}
        <Reveal i={0}>
          <div className="mb-6">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ff4d9d]">
              <span className="w-2 h-2 rounded-full bg-[#ff4d9d] animate-ping" />
              SCENE 01 — CARBON INTELLIGENCE PLATFORM & PLANETARY ACTION
            </span>
          </div>
        </Reveal>


        {/* Main Title matching Hero Pattern */}
        <Reveal i={1}>
          <h1
            className="text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-none mb-8 text-[#f4f1ff] max-w-5xl mx-auto tracking-tight"
            style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}
          >
            {renderLetterSpan("Building", true)}
            {renderLetterSpan("Carbon", true)}
            {renderLetterSpan("Intelligence", true)}
            {renderLetterSpan("Platform")}
            {renderLetterSpan("in")}
            {renderLetterSpan("India")}
            {renderLetterSpan("and")}
            {renderLetterSpan("the")}
            {renderLetterSpan("World.")}
          </h1>
        </Reveal>

        <Reveal i={2}>
          <p className="text-[#9a95b5] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Work out your personal or business climate impact, join our community of changemakers, and take on-the-ground climate action to save our planet.
          </p>
        </Reveal>

        {/* Magnetic Action Buttons */}
        <Reveal i={3}>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <MagneticButton href="/lifestylecalculator">
              Calculate Footprint
            </MagneticButton>

            <MagneticButton href="/travelcalculator">
              Travel Footprint
            </MagneticButton>

            <MagneticButton onClick={() => setToggle && setToggle(true)}>
              Write To Us
            </MagneticButton>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
