import Image from "next/image";

export default function MauryaFooter() {
  const states = [
    "Chhattisgarh",
    "Delhi",
    "Gujarat",
    "Haryana",
    "Jharkhand",
    "Madhya Pradesh",
    "Maharashtra",
    "Uttar Pradesh",
    "Punjab",
    "Rajasthan",
    "Tamil Nadu",
  ];

  const socials = [
    { label: "in", title: "LinkedIn", href: "#" },
    { label: "𝕏", title: "X", href: "#" },
    { label: "▶", title: "YouTube", href: "#" },
    { label: "f", title: "Facebook", href: "#" },
    { label: "⊙", title: "Instagram", href: "#" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Barlow:wght@400;500&display=swap');

        .mst-footer {
          width: 100%;
          background: #fafaf8;
          position: relative;
          overflow: hidden;
          border-top: 2px solid rgba(249,115,22,0.2);
          font-family: 'Barlow', sans-serif;
        }

        .mst-orb-orange {
          position: absolute;
          width: 700px; height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle,
            rgba(251,146,60,0.45) 0%,
            rgba(249,115,22,0.28) 30%,
            rgba(249,115,22,0.08) 55%,
            transparent 70%
          );
          bottom: -320px; right: -60px;
          pointer-events: none;
        }

        .mst-orb-cyan {
          position: absolute;
          width: 580px; height: 580px;
          border-radius: 50%;
          background: radial-gradient(circle,
            rgba(34,211,238,0.42) 0%,
            rgba(6,182,212,0.25) 30%,
            rgba(6,182,212,0.07) 55%,
            transparent 70%
          );
          bottom: -270px; left: -40px;
          pointer-events: none;
        }

        .mst-top {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          padding: 52px 60px 44px;
          border-bottom: 1px solid rgba(0,0,0,0.07);
          position: relative;
          z-index: 1;
        }

        .mst-brand-row {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .mst-brand-logo {
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          object-fit: contain;
        }
        .mst-brand-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 30px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #1a1a1a;
          line-height: 1;
          margin-bottom: 4px;
        }
        .mst-brand-sub {
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #f97316;
          font-weight: 700;
        }
        .mst-brand-address {
          margin-top: 20px;
          font-size: 14px;
          color: #666;
          line-height: 1.75;
          max-width: 280px;
          font-weight: 600;
        }
        .mst-brand-address strong { color: #333; font-weight: 700; }
        .mst-gst {
          margin-top: 12px;
          font-size: 12px;
          letter-spacing: 0.06em;
          color: #bbb;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
        }
        .mst-gst span { color: #999; }

        .mst-divider-col {
          display: flex;
          align-items: stretch;
          padding: 0 52px;
        }
        .mst-divider-line {
          width: 1px;
          background: linear-gradient(to bottom,
            transparent,
            rgba(0,0,0,0.09) 20%,
            rgba(0,0,0,0.09) 80%,
            transparent
          );
        }

        .mst-contact-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .mst-contact-label {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #bbb;
          font-weight: 700;
          margin-bottom: 7px;
        }
        .mst-contact-item {
          font-size: 15px;
          color: #444;
          margin-bottom: 14px;
          font-weight: 600;
        }
        .mst-contact-item a {
          color: #444;
          text-decoration: none;
          transition: color 0.2s;
        }
        .mst-contact-item a:hover { color: #f97316; }

        .mst-cta-row {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }

        .mst-btn-primary {
          padding: 11px 30px;
          background: #f97316;
          color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          box-shadow: 0 3px 16px rgba(249,115,22,0.35);
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
        }
        .mst-btn-primary:hover {
          background: #fb923c;
          transform: translateY(-1px);
          box-shadow: 0 5px 22px rgba(249,115,22,0.45);
        }

        .mst-btn-ghost {
          padding: 11px 30px;
          background: rgba(255,255,255,0.6);
          color: #666;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: 1px solid rgba(0,0,0,0.13);
          border-radius: 999px;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .mst-btn-ghost:hover {
          border-color: #06b6d4;
          color: #06b6d4;
          background: rgba(6,182,212,0.05);
        }

        .mst-states {
          padding: 28px 60px 32px;
          border-bottom: 1px solid rgba(0,0,0,0.07);
          position: relative;
          z-index: 1;
          background: linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%);
        }
        .mst-states-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .mst-states-label {
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #f97316;
          font-weight: 800;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .mst-states-label-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          color: #f97316;
          opacity: 0.9;
        }
        .mst-states-sublabel {
          font-size: 11px;
          color: #999;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .mst-states-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .mst-state-tag {
          padding: 6px 16px;
          border: 1px solid rgba(249,115,22,0.2);
          border-radius: 999px;
          font-size: 12px;
          letter-spacing: 0.05em;
          color: #555;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          background: rgba(255,255,255,0.8);
          box-shadow: 0 1px 2px rgba(0,0,0,0.04);
          transition: border-color 0.2s, color 0.2s, background 0.2s, box-shadow 0.2s;
          cursor: default;
        }
        .mst-state-tag:hover {
          border-color: #f97316;
          color: #ea580c;
          background: rgba(249,115,22,0.08);
          box-shadow: 0 2px 6px rgba(249,115,22,0.12);
        }

        .mst-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 60px;
          position: relative;
          z-index: 1;
        }
        .mst-copyright { font-size: 13px; color: #bbb; letter-spacing: 0.04em; font-weight: 600; }
        .mst-copyright span { color: #888; }

        .mst-socials { display: flex; gap: 7px; }
        .mst-social-link {
          width: 34px; height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 50%;
          background: rgba(255,255,255,0.55);
          color: #999;
          text-decoration: none;
          font-size: 13px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .mst-social-link:hover {
          border-color: #f97316;
          color: #f97316;
          background: rgba(249,115,22,0.07);
        }

        @media (max-width: 768px) {
          .mst-orb-orange {
            width: 400px; height: 400px;
            bottom: -200px; right: -80px;
          }
          .mst-orb-cyan {
            width: 320px; height: 320px;
            bottom: -160px; left: -60px;
          }
          .mst-top {
            grid-template-columns: 1fr;
            padding: 28px 20px 24px;
            gap: 24px;
          }
          .mst-divider-col {
            display: none;
          }
          .mst-divider-col::after {
            content: none;
          }
          .mst-brand-name { font-size: 24px; font-weight: 800; }
          .mst-brand-logo { width: 48px; height: 48px; }
          .mst-brand-address { max-width: none; font-size: 13px; margin-top: 16px; font-weight: 600; }
          .mst-contact-col {
            gap: 20px;
          }
          .mst-cta-row {
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 20px;
          }
          .mst-btn-primary, .mst-btn-ghost {
            padding: 10px 24px;
            font-size: 13px;
            font-weight: 700;
          }
          .mst-states {
            padding: 20px 20px 24px;
          }
          .mst-states-header { margin-bottom: 10px; }
          .mst-states-label { font-size: 11px; white-space: normal; }
          .mst-states-sublabel { font-size: 10px; margin-bottom: 12px; }
          .mst-state-tag { font-size: 11px; padding: 5px 12px; font-weight: 700; }
          .mst-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            padding: 20px 20px;
          }
          .mst-copyright {
            font-size: 12px;
            line-height: 1.5;
            text-align: left;
            font-weight: 600;
          }
        }

        @media (max-width: 480px) {
          .mst-top { padding: 24px 16px 20px; }
          .mst-brand-name { font-size: 22px; font-weight: 800; }
          .mst-cta-row { flex-direction: column; }
          .mst-btn-primary, .mst-btn-ghost { width: 100%; text-align: center; }
          .mst-states { padding: 18px 16px 20px; }
          .mst-states-sublabel { font-size: 10px; }
          .mst-bottom { padding: 16px 16px; }
        }
      `}</style>

      <footer className="mst-footer">
        <div className="mst-orb-orange" />
        <div className="mst-orb-cyan" />

        {/* Top */}
        <div className="mst-top">
          <div>
            <div className="mst-brand-row">
              <Image
                src="/logo3.png"
                alt="Maurya Saws Machine Tools"
                width={56}
                height={56}
                className="mst-brand-logo"
              />
              <div>
                <div className="mst-brand-name">Maurya Saws</div>
                <div className="mst-brand-sub">Machine Tools</div>
              </div>
            </div>
            <p className="mst-brand-address">
              <strong>B No. 163, Dashrath Bagh Colony</strong>
              <br />
              Near Kushwah Nagar, Tikariya Road
              <br />
              Indore – 452015, Madhya Pradesh, India
            </p>
            <p className="mst-gst">
              GST: <span>23AZNPM2796B1ZA</span>
            </p>
          </div>

          <div className="mst-divider-col">
            <div className="mst-divider-line" />
          </div>

          <div className="mst-contact-col">
            <div>
              <div style={{ marginBottom: 18 }}>
                <p className="mst-contact-label">Key Personnel</p>
                <p className="mst-contact-item">
                  Mr Munna Maurya &nbsp;
                  <em style={{ color: "#bbb", fontSize: 12 }}>Proprietor</em>
                </p>
              </div>
              <div>
                <p className="mst-contact-label">Phone &amp; Mobile</p>
                <p className="mst-contact-item">
                  <a href="tel:07971550280">07971550280</a>
                </p>
              </div>
            </div>
            <div className="mst-cta-row">
              <a href="#" className="mst-btn-primary">
                Send Inquiry
              </a>
              <a href="#" className="mst-btn-ghost">
                Visit Site
              </a>
            </div>
          </div>
        </div>

        {/* States */}
        <div className="mst-states">
          <div className="mst-states-header">
            <svg className="mst-states-label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span className="mst-states-label">We Deal In</span>
          </div>
          <p className="mst-states-sublabel">Serving 11 states across India</p>
          <div className="mst-states-list">
            {states.map((s) => (
              <span key={s} className="mst-state-tag">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mst-bottom">
          <p className="mst-copyright">
            © <span>2026 Maurya Saws Machine Tools</span> · All rights reserved
            · Indore – 452015
          </p>
          <div className="mst-socials">
            {socials.map((s) => (
              <a
                key={s.title}
                href={s.href}
                className="mst-social-link"
                title={s.title}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
