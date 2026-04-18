export default function PricingSectionPro({ toggle, setToggle }) {
  return (
    <section className="pricing-pro">
      <div className="bg"></div>

      <div className="container">
        {/* HEADER */}
        <div className="header text-center">
          <h2>Carbon Infrastructure Pricing</h2>
          <p>Free onboarding. Usage-based pricing. Built for scale.</p>
        </div>

        {/* CORE MODEL */}
        <div className="model-box">
          <h3>$5 per 1000 kg CO₂ Processed</h3>

          <p>
            Every transaction is converted into a traceable carbon asset.
            Carbontrace calculates emissions, enables offset, issues rewards,
            and creates a shared revenue layer between platform and partner.
          </p>

          {/* FLOW */}
          <div className="flow">
            <div>User Purchase</div>
            <span>→</span>
            <div>Carbon Calculated</div>
            <span>→</span>
            <div>Offset + Verified</div>
            <span>→</span>
            <div>Rewards + Revenue</div>
          </div>

          {/* WHAT USER GETS */}
          <div className="outcomes">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop" />
              <h4>Carbon Passport</h4>
              <p>Track total CO₂ reduced, projects supported, and full history</p>
            </div>

            <div className="card">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" />
              <h4>Verified Certificate</h4>
              <p>Blockchain-backed proof linked to real carbon projects</p>
            </div>

            <div className="card">
              <img src="https://images.unsplash.com/photo-1621761191319-c6fb62004040" />
              <h4>CTCoins Rewards</h4>
              <p>Earn tokenized incentives for every carbon-positive action</p>
            </div>
          </div>

          {/* ECONOMICS */}
          <div className="economics">
            <div>
              <h4>User</h4>
              <p>Rewards + verified impact</p>
            </div>
            <div>
              <h4>Partner</h4>
              <p>Earns margin on every carbon transaction</p>
            </div>
            <div>
              <h4>Carbontrace</h4>
              <p>Charges per CO₂ processed</p>
            </div>
          </div>

          {/* REAL EXAMPLE */}
          <div className="example">
            <p>
              Example: A ₹100 sale generates carbon cost → user redeems CTCoins →
              partner earns margin → Carbontrace processes & verifies offset.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="cta text-center">
          <p>No setup cost. We help you turn carbon into a revenue stream.</p>
          <button style={{cursor:"pointer",zIndex:6,position:"relative"}} onClick={() => setToggle(true)}>Start Integration</button>
        </div>
      </div>

      <style jsx>{`
        .pricing-pro {
          position: relative;
          padding: 120px 0;
          background: #0b0f0e;
          color: #fff;
        }

        .bg {
          position: absolute;
          inset: 0;
          background: url("https://images.unsplash.com/photo-1639322537228-f710d846310a");
          opacity: 0.05;
          background-size: cover;
        }

        .header h2 {
          font-size: 2.8rem;
          font-weight: 700;
          background: linear-gradient(90deg, #00c896, #5ef2c2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .header p {
          color: rgba(255, 255, 255, 0.7);
        }

        .model-box {
          margin-top: 60px;
          background: rgba(255, 255, 255, 0.06);
          padding: 50px;
          border-radius: 16px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
        }

        .model-box h3 {
          font-size: 2.2rem;
          color: #00c896;
        }

        .model-box p {
          color: rgba(255, 255, 255, 0.7);
        }

        .flow {
          margin: 40px 0;
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .flow div {
          padding: 10px 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
        }

        .outcomes {
          display: flex;
          gap: 20px;
          margin-top: 40px;
          justify-content: space-between;
        }

        .outcomes .card {
          flex: 1;
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .outcomes img {
          width: 100%;
          height: 140px;
          object-fit: cover;
        }

        .outcomes h4 {
          color: #00c896;
          margin-top: 15px;
        }

        .outcomes p {
          padding: 0 15px 20px;
          font-size: 0.9rem;
        }

        .economics {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
        }

        .economics h4 {
          color: #00c896;
        }

        .example {
          margin-top: 30px;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
        }

        .cta button {
          background: linear-gradient(90deg, #00c896, #5ef2c2);
          color: #000;
          padding: 14px 28px;
          border-radius: 8px;
          margin-top: 20px;
          font-weight: 600;
          border: none;
        }

        @media (max-width: 768px) {
          .outcomes {
            flex-direction: column;
          }

          .economics {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}