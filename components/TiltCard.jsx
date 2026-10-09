"use client";

import { useRef } from "react";

export default function TiltCard({ children, className = "" }) {
  const r = useRef(null);

  const handlePointerMove = (e) => {
    const el = r.current;
    if (!el) return;
    const b = el.getBoundingClientRect();
    const px = (e.clientX - b.left) / b.width;
    const py = (e.clientY - b.top) / b.height;
    
    // Dynamic 3D perspective rotation up to 16 deg
    const rx = ((0.5 - py) * 16).toFixed(2);
    const ry = ((px - 0.5) * 16).toFixed(2);

    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02, 1.02, 1.02)`;
    el.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
    el.style.setProperty("--my", (py * 100).toFixed(1) + "%");
  };

  const handlePointerLeave = () => {
    if (r.current) {
      r.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    }
  };

  return (
    <div
      ref={r}
      data-hover
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#12101f] via-[#0d0b1a] to-[#07060d] p-8 transition-transform duration-200 ease-out shadow-xl hover:border-[#ff4d9d]/40 hover:shadow-[0_15px_40px_rgba(255,77,157,0.15)] ${className}`}
    >
      {/* Pointer-Following Multi-Color Radial Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
        style={{
          background: "radial-gradient(550px circle at var(--mx, 50%) var(--my, 50%), rgba(255, 77, 157, 0.22), rgba(0, 224, 198, 0.12) 40%, transparent 80%)"
        }}
      />
      
      {/* Glass Glare Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)"
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

