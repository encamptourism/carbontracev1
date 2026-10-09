"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ to }) {
  const [v, setV] = useState(0);
  const r = useRef(null);

  useEffect(() => {
    const el = r.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        let n = 0;
        const s = setInterval(() => {
          n += Math.ceil(to / 40);
          if (n >= to) {
            n = to;
            clearInterval(s);
          }
          setV(n);
        }, 35);
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <b ref={r} className="text-[clamp(2.5rem,7vw,5rem)] font-extrabold leading-none">
      {v}
    </b>
  );
}
