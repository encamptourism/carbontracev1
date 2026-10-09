"use client";

import { useRef } from "react";
import Link from "next/link";

export default function MagneticButton({ 
  children, 
  href, 
  onClick, 
  variant = "cyber", // "cyber" | "glass" | "neon"
  className = "" 
}) {
  const r = useRef(null);

  const handlePointerMove = (e) => {
    const el = r.current;
    if (!el) return;
    const b = el.getBoundingClientRect();
    const x = e.clientX - b.left - b.width / 2;
    const y = e.clientY - b.top - b.height / 2;
    
    // Magnetic pull towards pointer
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px) scale(1.04)`;
    
    // Calculate cursor coordinates relative to button for internal glare
    const px = ((e.clientX - b.left) / b.width) * 100;
    const py = ((e.clientY - b.top) / b.height) * 100;
    el.style.setProperty("--bx", px.toFixed(1) + "%");
    el.style.setProperty("--by", py.toFixed(1) + "%");
  };

  const handlePointerLeave = () => {
    if (r.current) {
      r.current.style.transform = "translate(0px, 0px) scale(1)";
    }
  };

  const getVariantStyles = () => {
    if (variant === "neon") {
      return {
        borderWrap: "p-[1.5px] bg-gradient-to-r from-[#ff4d9d] via-[#7c5cff] to-[#00e0c6] animate-border-spin shadow-[0_0_25px_rgba(255,77,157,0.4)] hover:shadow-[0_0_40px_rgba(0,224,198,0.7)]",
        innerBg: "bg-gradient-to-r from-[#ff4d9d] via-[#7c5cff] to-[#00e0c6] text-[#07060d]",
        textColor: "text-[#07060d] font-extrabold"
      };
    }
    if (variant === "glass") {
      return {
        borderWrap: "p-[1px] bg-white/20 hover:bg-[#00e0c6]/60 transition-colors shadow-lg",
        innerBg: "bg-white/5 backdrop-blur-md hover:bg-white/10",
        textColor: "text-[#f4f1ff] font-bold"
      };
    }
    // Default: "cyber"
    return {
      borderWrap: "p-[1px] bg-gradient-to-r from-[#ff4d9d] via-[#00e0c6] to-[#7c5cff] animate-border-spin shadow-[0_0_20px_rgba(0,224,198,0.35)] hover:shadow-[0_0_35px_rgba(255,77,157,0.6)]",
      innerBg: "bg-[#07060d]/90 backdrop-blur-xl group-hover:bg-[#0d0a1a]",
      textColor: "text-[#f4f1ff] font-bold"
    };
  };

  const styleConfig = getVariantStyles();

  const buttonInnerContent = (
    <div className={`relative w-full h-full rounded-full transition-all duration-300 ${styleConfig.borderWrap}`}>
      {/* Outer ambient glow halo on hover */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#ff4d9d] via-[#00e0c6] to-[#7c5cff] opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-500 pointer-events-none" />

      {/* Inner Button Core */}
      <div className={`relative w-full h-full rounded-full px-7 py-3.5 flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 ${styleConfig.innerBg}`}>
        
        {/* Shimmer sweep effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 h-full w-12 bg-white/25 blur-sm animate-shimmer-sweep" />
        </div>

        {/* Cursor Glare Track */}
        <span
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
          style={{
            background: "radial-gradient(130px circle at var(--bx, 50%) var(--by, 50%), rgba(255, 77, 157, 0.35), rgba(0, 224, 198, 0.2) 50%, transparent 100%)"
          }}
        />

        {/* Content */}
        <span className={`relative z-10 text-xs sm:text-sm uppercase tracking-wider transition-transform duration-300 group-hover:scale-105 flex items-center gap-1.5 ${styleConfig.textColor}`}>
          {children}
        </span>
      </div>
    </div>
  );

  const containerClasses = `group relative inline-flex items-center justify-center rounded-full transition-[transform] duration-200 cursor-pointer select-none ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <a
          ref={r}
          data-hover
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          className={containerClasses}
        >
          {buttonInnerContent}
        </a>
      </Link>
    );
  }

  return (
    <button
      ref={r}
      data-hover
      onClick={onClick}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={containerClasses}
    >
      {buttonInnerContent}
    </button>
  );
}

