import React from "react";
import MagneticButton from "../MagneticButton";
import Reveal from "../Reveal";

export default function NewsletterSection({
  suscribe,
  onChangeHandler,
  suscRibeas,
  suscribeerr,
  bloadings,
  issuccessx
}) {
  return (
    <section className="py-28 px-4 relative overflow-hidden text-[#f4f1ff]">
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        
        <Reveal i={0}>
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff4d9d]/10 text-[#ff4d9d] border border-[#ff4d9d]/30 text-xs sm:text-sm font-mono font-extrabold uppercase tracking-[0.2em] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff4d9d] animate-ping" />
              EPILOGUE — JOIN THE PLANETARY MOVEMENT
            </span>

            <h2 
              className="text-3xl sm:text-5xl font-extrabold text-[#f4f1ff] mb-4 leading-tight"
              style={{ fontFamily: "var(--font-syne)", letterSpacing: "-0.03em" }}
            >
              Subscribe to Our Newsletter
            </h2>
            <p className="text-[#9a95b5] text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed font-light">
              Amplify your commitment to sustainability and actively participate in fostering positive climate change through our latest insights and initiatives.
            </p>
          </div>
        </Reveal>

        <Reveal i={1}>
          <div className="max-w-md mx-auto">
            {issuccessx && (
              <div className="bg-[#00e0c6]/20 border border-[#00e0c6]/40 text-[#00e0c6] px-4 py-3.5 rounded-2xl mb-6 text-sm font-semibold">
                ✨ You are successfully subscribed!
              </div>
            )}

            <form onSubmit={suscRibeas} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  id="susemail"
                  name="susemail"
                  type="email"
                  placeholder="Enter your email address"
                  value={suscribe.susemail || ""}
                  onChange={onChangeHandler}
                  className={`w-full px-6 py-4 rounded-full bg-[#12101f] border ${
                    suscribeerr.susemail ? "border-[#ff4d9d]" : "border-white/20 focus:border-[#ff4d9d]"
                  } text-[#f4f1ff] placeholder-[#9a95b5] text-sm outline-none transition-colors shadow-xl`}
                />
              </div>
              <MagneticButton onClick={(e) => suscRibeas(e)} className="min-w-[140px]">
                {bloadings ? "..." : "Subscribe"}
              </MagneticButton>
            </form>
            {suscribeerr.susemail && (
              <p className="text-[#ff4d9d] text-xs mt-2 text-left px-4">{suscribeerr.susemail}</p>
            )}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
