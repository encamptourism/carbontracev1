export default function FounderNoteSection() {
  return (
    <>
      <section className="founder-note">
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-lg-7">
              <div className="note-content">

                <h6 className="tag">Director’s Note</h6>

                <h2>
                  Turning <span>Climate Intelligence</span> into Real-World Impact
                </h2>

                <p>
                  Hello, I’m Ratan, founder of Encamp and CarbonTrace.
                </p>

                <p>
                  Across regions like Northeast India, we already have powerful
                  geospatial intelligence — satellite imagery, crop insights,
                  and forest monitoring.
                </p>

                <p>
                  But this data rarely translates into income for the communities
                  driving climate action on the ground.
                </p>

                <p className="highlight">
                  CarbonTrace bridges this gap — converting environmental intelligence
                  into measurable carbon assets and real economic value.
                </p>

              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-5">
              <div className="note-visual">
                <img
                  src="/assets/img/team/ratan.jpg"
                  alt="Founder Vision"
                />
                <div className="overlay"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ✅ STYLE JSX */}
      <style jsx>{`
        .founder-note {
          padding: 100px 0;
          background: #0b0f0e;
          color: #fff;
        }

        .note-content {
          max-width: 600px;
        }

        .tag {
          color: #00c896;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
          font-size: 0.85rem;
        }

        .note-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.3;
          color: #ffffff;
        }

        .note-content h2 span {
          color: #00c896;
        }

        .note-content p {
          color: rgba(255,255,255,0.75);
          margin-bottom: 15px;
          line-height: 1.7;
          font-size: 1rem;
        }

        .highlight {
          color: #ffffff;
          font-weight: 500;
          border-left: 3px solid #00c896;
          padding-left: 15px;
          margin-top: 20px;
        }

        .note-visual {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
        }

        .note-visual img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          filter: brightness(0.8) contrast(1.05);
        }

        .note-visual .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,0.2),
            rgba(0,0,0,0.6)
          );
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .founder-note {
            padding: 60px 0;
          }

          .note-content h2 {
            font-size: 1.8rem;
          }

          .note-visual img {
            height: 260px;
            margin-top: 30px;
          }
        }
      `}</style>
    </>
  );
}