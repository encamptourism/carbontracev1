"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const outerRef = useRef(null);
  const dotRef = useRef(null);
  const auraRef = useRef(null);

  useEffect(() => {
    const outer = outerRef.current;
    const dot = dotRef.current;
    const aura = auraRef.current;
    if (!outer || !dot || !aura) return;

    let targetX = -999;
    let targetY = -999;
    let currentX = -999;
    let currentY = -999;
    let auraX = -999;
    let auraY = -999;
    let isClicking = false;
    let isHovering = false;

    const mv = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      const target = e.target;
      isHovering = !!(target && target.closest && target.closest("a, button, input, [data-hover], select, textarea"));
    };

    const mouseDown = () => { isClicking = true; };
    const mouseUp = () => { isClicking = false; };

    window.addEventListener("pointermove", mv);
    window.addEventListener("pointerdown", mouseDown);
    window.addEventListener("pointerup", mouseUp);

    let raf = 0;
    const loop = () => {
      // Primary outer ring inertia easing
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      currentX += dx * 0.18;
      currentY += dy * 0.18;

      // Secondary ambient aura trail easing (looser follow)
      auraX += (targetX - auraX) * 0.08;
      auraY += (targetY - auraY) * 0.08;

      // Calculate velocity & angle for fluid stretch
      const speed = Math.hypot(dx, dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const stretchX = Math.min(1.4, 1 + speed * 0.008);
      const stretchY = Math.max(0.6, 1 - speed * 0.005);

      // Update inner sharp dot position immediately
      dot.style.left = targetX + "px";
      dot.style.top = targetY + "px";

      // Update outer halo ring position & transform
      outer.style.left = currentX + "px";
      outer.style.top = currentY + "px";

      const scale = isClicking ? 0.6 : isHovering ? 3.8 : 1;
      outer.style.transform = `translate(-50%, -50%) rotate(${angle}deg) scale(${scale * stretchX}, ${scale * stretchY})`;
      outer.style.borderColor = isHovering ? "#00e0c6" : "#ff4d9d";
      outer.style.background = isHovering ? "rgba(0, 224, 198, 0.12)" : "rgba(255, 77, 157, 0.03)";
      outer.style.boxShadow = isHovering
        ? "0 0 30px rgba(0, 224, 198, 0.6), inset 0 0 15px rgba(0, 224, 198, 0.3)"
        : "0 0 18px rgba(255, 77, 157, 0.4)";

      // Update ambient background blur aura
      aura.style.left = auraX + "px";
      aura.style.top = auraY + "px";
      aura.style.transform = `translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`;

      raf = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", mv);
      window.removeEventListener("pointerdown", mouseDown);
      window.removeEventListener("pointerup", mouseUp);
    };
  }, []);

  return (
    <>
      {/* Ambient Outer Trail Glow Aura */}
      <div
        ref={auraRef}
        className="hidden [@media(pointer:fine)]:block fixed z-[99997] w-24 h-24 rounded-full bg-gradient-to-r from-[#ff4d9d]/15 via-[#7c5cff]/15 to-[#00e0c6]/15 blur-2xl pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
      />
      {/* Elastic Inner Pointer Dot */}
      <div
        ref={dotRef}
        className="hidden [@media(pointer:fine)]:block fixed z-[99999] w-2.5 h-2.5 rounded-full bg-[#ff4d9d] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 shadow-[0_0_12px_#ff4d9d]"
      />
      {/* Outer Dynamic Ring Halo with Velocity Stretch */}
      <div
        ref={outerRef}
        className="hidden [@media(pointer:fine)]:block fixed z-[99998] w-8 h-8 rounded-full border-2 border-[#ff4d9d] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[border-color,background-color,box-shadow] duration-200"
      />
    </>
  );
}

