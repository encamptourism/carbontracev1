export default function DigitalPassportSection({toggle, setToggle}) {
  return (
    <>
      <section className="dpp-section">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              <div className="dpp-content">
                <h6 className="tag">Digital Product Passport</h6>

                <h2>
                  Unlock <span>EU Market Access</span> with Compliance & Carbon
                  Intelligence
                </h2>

                <p>
                  CarbonTrace enables exporters to meet upcoming European Union
                  sustainability regulations through Digital Product Passports
                  (DPP).
                </p>

                <ul className="features">
                  <li>Product-level carbon footprint tracking</li>
                  <li>End-to-end supply chain traceability</li>
                  <li>Blockchain-backed ESG data verification</li>
                  <li>Automated compliance for EU regulations</li>
                </ul>

                <div className="cta">
                  <button
                    className="primary-btn"
                    onClick={() => setToggle((prev) => !prev)}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="col-lg-6">
              <div className="dpp-visual">
                <img
                  src="/assets/img/satellite/ndvi.gif"
                  alt="Digital Product Passport"
                />

                <div className="overlay"></div>

                {/* FLOATING CARD */}
                <div className="floating-card">
                  <h5>DPP Verified</h5>
                  <p>Carbon Footprint: 2.3kg CO₂</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STYLE JSX */}
      <style jsx>{`
        .dpp-section {
          padding: 100px 0;
          background: #0b0f0e;
          color: #fff;
        }

        .tag {
          color: #00c896;
          text-transform: uppercase;
          font-size: 0.85rem;
          margin-bottom: 10px;
        }

        .dpp-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #ffffff;
        }

        .dpp-content h2 span {
          color: #00c896;
        }

        .dpp-content p {
          color: rgba(255, 255, 255, 0.75);
          margin-bottom: 20px;
          line-height: 1.7;
        }

        .features {
          list-style: none;
          padding: 0;
          margin-bottom: 25px;
        }

        .features li {
          margin-bottom: 10px;
          color: rgba(255, 255, 255, 0.8);
          position: relative;
          padding-left: 20px;
        }

        .features li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #00c896;
        }

        .cta {
          display: flex;
          gap: 10px;
        }

        .primary-btn {
          background: #00c896;
          padding: 12px 24px;
          border-radius: 6px;
          color: #000;
          font-weight: 600;
        }

        .secondary-btn {
          border: 1px solid #fff;
          padding: 12px 24px;
          border-radius: 6px;
          color: #fff;
        }

        .dpp-visual {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
        }

        .dpp-visual img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          filter: brightness(0.8);
        }

        .dpp-visual .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.6)
          );
        }

        .floating-card {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(0, 0, 0, 0.7);
          padding: 15px;
          border-radius: 10px;
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .floating-card h5 {
          margin: 0;
          color: #00c896;
        }

        .floating-card p {
          margin: 5px 0 0;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 768px) {
          .dpp-section {
            padding: 60px 0;
          }

          .dpp-content h2 {
            font-size: 1.8rem;
          }

          .dpp-visual img {
            height: 260px;
            margin-top: 30px;
          }
        }
      `}</style>
    </>
  );
}