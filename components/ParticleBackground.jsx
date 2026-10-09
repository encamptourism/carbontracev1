"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const x = cv.getContext("2d");
    if (!x) return;

    let W = 0, H = 0, raf = 0;
    const m = { x: -999, y: -999, vx: 0, vy: 0, active: false };
    const sparks = [];
    const shockwaves = [];

    const rs = () => {
      W = cv.width = window.innerWidth;
      H = cv.height = window.innerHeight;
    };
    rs();

    // Generate vibrant floating particles
    const particleCount = Math.min(160, Math.floor(window.innerWidth / 7));
    const P = Array.from({ length: particleCount }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      baseVx: (Math.random() - 0.5) * 0.7,
      baseVy: (Math.random() - 0.5) * 0.7,
      size: Math.random() * 2.5 + 1,
      color: ["#ff4d9d", "#00e0c6", "#7c5cff", "#ffb800"][Math.floor(Math.random() * 4)]
    }));

    let lastX = -999;
    let lastY = -999;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaScroll = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Accelerate particle vertical velocity during scroll
      if (Math.abs(deltaScroll) > 2) {
        P.forEach((p) => {
          p.vy -= deltaScroll * 0.08;
        });

        // Spawn scroll spark embers when scrolling fast
        if (Math.abs(deltaScroll) > 8) {
          for (let i = 0; i < 3; i++) {
            sparks.push({
              x: Math.random() * W,
              y: deltaScroll > 0 ? H - 20 : 20,
              vx: (Math.random() - 0.5) * 2,
              vy: deltaScroll > 0 ? -Math.random() * 4 - 2 : Math.random() * 4 + 2,
              life: 1,
              decay: Math.random() * 0.03 + 0.02,
              size: Math.random() * 3 + 1,
              color: ["#ff4d9d", "#00e0c6", "#7c5cff"][Math.floor(Math.random() * 3)]
            });
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const mv = (e) => {
      const curX = e.clientX;
      const curY = e.clientY;
      m.vx = curX - (lastX === -999 ? curX : lastX);
      m.vy = curY - (lastY === -999 ? curY : lastY);
      m.x = curX;
      m.y = curY;
      m.active = true;
      lastX = curX;
      lastY = curY;

      // Spawn colorful mouse motion sparks on movement
      const speed = Math.hypot(m.vx, m.vy);
      if (speed > 1.5) {
        const count = Math.min(4, Math.floor(speed / 2));
        for (let i = 0; i < count; i++) {
          sparks.push({
            x: curX + (Math.random() - 0.5) * 10,
            y: curY + (Math.random() - 0.5) * 10,
            vx: -m.vx * 0.2 + (Math.random() - 0.5) * 2.5,
            vy: -m.vy * 0.2 + (Math.random() - 0.5) * 2.5,
            life: 1,
            decay: Math.random() * 0.04 + 0.025,
            size: Math.random() * 3.5 + 1.5,
            color: ["#ff4d9d", "#00e0c6", "#7c5cff", "#ffffff"][Math.floor(Math.random() * 4)]
          });
        }
      }
    };

    // Click shockwave expansion
    const clickHandler = (e) => {
      shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: 320,
        alpha: 0.85,
        color: Math.random() > 0.5 ? "#ff4d9d" : "#00e0c6"
      });

      // Spawn explosion burst sparks
      for (let i = 0; i < 18; i++) {
        const angle = (Math.PI * 2 * i) / 18 + (Math.random() - 0.5) * 0.2;
        const spd = Math.random() * 6 + 3;
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd,
          life: 1,
          decay: Math.random() * 0.03 + 0.02,
          size: Math.random() * 4 + 2,
          color: ["#ff4d9d", "#00e0c6", "#7c5cff", "#ffdf6d"][Math.floor(Math.random() * 4)]
        });
      }
    };

    window.addEventListener("resize", rs);
    window.addEventListener("pointermove", mv);
    window.addEventListener("pointerdown", clickHandler);


    const loop = () => {
      x.clearRect(0, 0, W, H);

      // Render & update expanding click shockwaves
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += 10;
        sw.alpha = (1 - sw.radius / sw.maxRadius) * 0.8;

        if (sw.radius >= sw.maxRadius || sw.alpha <= 0) {
          shockwaves.splice(i, 1);
          continue;
        }

        x.strokeStyle = sw.color;
        x.lineWidth = 2.5;
        x.globalAlpha = sw.alpha;
        x.beginPath();
        x.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        x.stroke();
        x.globalAlpha = 1;

        // Push particles hit by shockwave
        P.forEach((p) => {
          const dx = p.x - sw.x;
          const dy = p.y - sw.y;
          const d = Math.hypot(dx, dy);
          if (Math.abs(d - sw.radius) < 30 && d > 0) {
            const push = (1 - Math.abs(d - sw.radius) / 30) * 8;
            p.vx += (dx / d) * push;
            p.vy += (dy / d) * push;
          }
        });
      }

      // Render & update mouse sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= s.decay;

        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        x.fillStyle = s.color;
        x.globalAlpha = s.life;
        x.shadowBlur = 10;
        x.shadowColor = s.color;
        x.beginPath();
        x.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
        x.fill();
        x.shadowBlur = 0;
        x.globalAlpha = 1;
      }

      // Render main particle mesh
      P.forEach((p, i) => {
        const dx = m.x - p.x;
        const dy = m.y - p.y;
        const d = Math.hypot(dx, dy);

        // Dynamic mouse interactivity: attraction & laser connections
        if (d < 280 && m.active) {
          const factor = 1 - d / 280;

          // Gentle attraction & vortex swirl physics around mouse
          const attractForce = factor * 0.09;
          const swirlX = -dy / (d || 1) * factor * 0.6;
          const swirlY = dx / (d || 1) * factor * 0.6;

          p.vx += (dx / d) * attractForce + swirlX;
          p.vy += (dy / d) * attractForce + swirlY;

          // Render glowing laser web from cursor to particle
          const laserGrad = x.createLinearGradient(m.x, m.y, p.x, p.y);
          laserGrad.addColorStop(0, "rgba(255, 77, 157, " + (factor * 0.8).toFixed(2) + ")");
          laserGrad.addColorStop(1, "rgba(0, 224, 198, " + (factor * 0.4).toFixed(2) + ")");

          x.strokeStyle = laserGrad;
          x.lineWidth = 1 + factor * 1.5;
          x.beginPath();
          x.moveTo(m.x, m.y);
          x.lineTo(p.x, p.y);
          x.stroke();
        }

        // Friction & damping
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.x += p.vx + p.baseVx * 0.3;
        p.y += p.vy + p.baseVy * 0.3;

        // Bounce off canvas boundaries smoothly
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > W) { p.x = W; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > H) { p.y = H; p.vy *= -1; }

        // Render particle body
        x.fillStyle = p.color;
        x.globalAlpha = 0.85;
        x.beginPath();
        x.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        x.fill();
        x.globalAlpha = 1;

        // Particle-to-particle inter-connection web
        for (let j = i + 1; j < P.length; j++) {
          const q = P[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.25;
            x.strokeStyle = `rgba(124, 92, 255, ${alpha.toFixed(2)})`;
            x.lineWidth = 0.7;
            x.beginPath();
            x.moveTo(p.x, p.y);
            x.lineTo(q.x, q.y);
            x.stroke();
          }
        }
      });

      raf = requestAnimationFrame(loop);
    };

    if (!window.matchMedia("(prefers-reduced-motion:reduce)").matches) loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", rs);
      window.removeEventListener("pointermove", mv);
      window.removeEventListener("pointerdown", clickHandler);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 w-full h-full -z-10 pointer-events-none" />;
}


