"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSlider() {
  return (
    <>
      <section className="hero-slider">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }} // ✅ FIX GHOSTING
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
        >
          {/* 🔥 SLIDE 1 */}
          <SwiperSlide>
            <div
              className="slide"
              style={{
                backgroundImage:
                  "url('/assets/img/satellite/satellite_farming_3.jpg')",
              }}
            >
              <div className="overlay"></div>
              <div className="grid"></div>
   <div className="content container">
                <h1>
                  Satellite{" "}
                  <span
                    style={{
                      color: "#00c896",
                      textShadow: "0 0 20px rgba(0,200,150,0.6)",
                    }}
                  >
                    Intelligence
                  </span>
                </h1>

                <p style={{
                    color: "rgba(255,255,255,0.9)",
                    textShadow: "0 4px 20px rgba(0,0,0,0.6)",
                  }}
                >
                  Real-time NDVI and geospatial analytics to measure
                  environmental impact.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* 🔥 SLIDE 2 */}
          <SwiperSlide>
            <div
              className="slide"
              style={{
                backgroundImage:
                  "url('/assets/img/satellite/satellite_farming_2.jpg')",
              }}
            >
              <div className="overlay"></div>
              <div className="glow"></div>

              <div className="content container">
                <h1>
                  Carbon <span>Assets</span>
                </h1>
                <p>
                  Convert satellite intelligence into verified carbon credits.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* 🔥 SLIDE 3 */}
          <SwiperSlide>
            <div
              className="slide"
              style={{
                backgroundImage: "url('/assets/img/satellite/ndvi.gif')",
              }}
            >
              <div className="overlay"></div>

              <div className="content container">
                <h1>
                  Real <span>Income</span> for Communities
                </h1>

                <p>Turning climate data into real-world income for farmers.</p>

                <div className="hero-btns">
                  <Link href="/contact">
                    <a className="primary-btn">Explore Platform</a>
                  </Link>

                  <Link href="/methodology">
                    <a className="secondary-btn">How it works</a>
                  </Link>
                </div>

                <div className="hero-stats">
                  <div>
                    <h3>800+</h3>
                    <p>Farmers</p>
                  </div>
                  <div>
                    <h3>10K+</h3>
                    <p>Credits</p>
                  </div>
                  <div>
                    <h3>3+</h3>
                    <p>Markets</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <style jsx>{`
        .hero-slider {
          height: 100vh;
        }

        .slide {
          height: 100vh;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
        }

        /* ✅ FIXED OVERLAY (NOT TOO DARK) */
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.75) 0%,
            rgba(0, 0, 0, 0.55) 40%,
            rgba(0, 0, 0, 0.25) 70%,
            rgba(0, 0, 0, 0.1) 100%
          );
          z-index: 1;
        }

        /* ✅ SOFT GRID */
        .grid {
          position: absolute;
          inset: 0;
          opacity: 0.2;
          background-size: 60px 60px;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            );
          z-index: 2;
        }

        .glow {
          position: absolute;
          width: 350px;
          height: 350px;
          background: radial-gradient(
            circle,
            rgba(0, 200, 150, 0.25),
            transparent
          );
          top: 30%;
          left: 60%;
          filter: blur(80px);
          z-index: 2;
        }

        /* ✅ CONTENT FIX */
        .content {
          position: relative;
          z-index: 5;
          max-width: 700px;
          margin-left: 5%; /* ✅ alignment fix */
          color: #fff;
        }

        .content h1 {
          font-size: 3.5rem;
          font-weight: 700;
          color: #ffffff;
          text-shadow: 0 10px 30px rgba(0, 0, 0, 0.6); /* ✅ depth */
        }

        .content span {
          color: #00c896;
        }

        .content p {
          margin-top: 15px;
          color: rgba(255, 255, 255, 0.85);
        }

        .hero-btns {
          margin-top: 25px;
          display: flex;
          gap: 10px;
        }

        .primary-btn {
          background: #00c896;
          padding: 12px 26px;
          border-radius: 8px;
          color: #000;
          font-weight: 600;
        }

        .secondary-btn {
          border: 1px solid #fff;
          padding: 12px 26px;
          border-radius: 8px;
          color: #fff;
        }

        .hero-stats {
          display: flex;
          gap: 40px;
          margin-top: 40px;
        }

        .hero-stats h3 {
          color: #00c896;
        }

        .hero-stats p {
          font-size: 0.85rem;
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .content h1 {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </>
  );
}
