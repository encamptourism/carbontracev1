import React from "react";

export default function Marquee({ words }) {
  const row = words.map((w, i) => (
    <span key={i} className="inline-flex items-center">
      {w}
      <b className="mx-[0.4em] text-[#ff4d9d]" style={{ WebkitTextStroke: 0 }}>
        ✦
      </b>
    </span>
  ));

  return (
    <div className="overflow-hidden border-y border-white/10 py-5 my-[6vh] whitespace-nowrap">
      <div
        className="inline-block animate-[mq_22s_linear_infinite] font-extrabold text-transparent text-[clamp(2rem,6vw,4.5rem)] leading-none"
        style={{ WebkitTextStroke: "1px #ffffff55", fontFamily: "var(--font-syne)" }}
      >
        {row}
        {row}
      </div>
    </div>
  );
}
