"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Header = (props) => {
  const contacttoggle = props.toggle;
  const setContacttoggle = props.setToggle;

  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* MOBILE SIDEBAR */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="menu-close" onClick={() => setMenuOpen(false)}>✕</div>

        <ul>
          <li>
            <Link href="/">
              <a onClick={() => setMenuOpen(false)}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/project">
              <a onClick={() => setMenuOpen(false)}>Projects</a>
            </Link>
          </li>

          <li>
            <div className="submenu-toggle" onClick={() => setSubmenuOpen(!submenuOpen)}>
              Calculators <span className="arrow">{submenuOpen ? "▲" : "▾"}</span>
            </div>

            {submenuOpen && (
              <ul className="submenu">
                <li>
                  <Link href="/lifestylecalculator">
                    <a onClick={() => setMenuOpen(false)}>Lifestyle Calculator</a>
                  </Link>
                </li>
                <li>
                  <Link href="/travelcalculator">
                    <a onClick={() => setMenuOpen(false)}>Travel Calculator</a>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <span
              className="cursor-pointer hover:text-[#ff4d9d]"
              onClick={() => {
                setContacttoggle(!contacttoggle);
                setMenuOpen(false);
              }}
            >
              Carbon Market Consulting
            </span>
          </li>

          <li className="mobile-btn">
            <span
              onClick={() => {
                setContacttoggle(!contacttoggle);
                setMenuOpen(false);
              }}
            >
              Contact Us
            </span>
          </li>
        </ul>
      </div>

      {/* OVERLAY */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}

      {/* FIXED GLASS HEADER MIXED WITH HERO */}
      <header className={`header-container ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-inner">

          {/* LOGO */}
          <div className="logo">
            <Link href="/">
              <a className="flex items-center gap-2">
                <img src="/assets/img/home/logo.svg" alt="CarbonTrace Logo" className="h-9 w-auto brightness-125" />
              </a>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <nav className="desktop-menu">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
            <Link href="/project">
              <a className="nav-link">Projects</a>
            </Link>

            <div className="dropdown" data-hover>
              <span className="nav-link dropdown-trigger">
                Calculators <span className="text-xs ml-1 opacity-70">▾</span>
              </span>
              <div className="dropdown-menu">
                <Link href="/lifestylecalculator">
                  <a className="dropdown-item">Lifestyle Calculator</a>
                </Link>
                <Link href="/travelcalculator">
                  <a className="dropdown-item">Travel Calculator</a>
                </Link>
              </div>
            </div>

            <span
              data-hover
              className="nav-link cursor-pointer"
              onClick={() => setContacttoggle(!contacttoggle)}
            >
              Carbon Market Consulting
            </span>
          </nav>

          {/* RIGHT ACTION BUTTON */}
          <div className="right">
            <button
              data-hover
              className="contact-btn"
              onClick={() => setContacttoggle(!contacttoggle)}
            >
              <span>Contact Us</span>
            </button>

            {/* MOBILE HAMBURGER */}
            <div className="hamburger" onClick={() => setMenuOpen(true)}>
              ☰
            </div>
          </div>

        </div>
      </header>

      {/* EMBEDDED SCOPED STYLES FOR PERFECT HERO BLENDING */}
      <style jsx>{`
        .header-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 999;
          padding: 18px 0;
          background: linear-gradient(180deg, rgba(7, 6, 13, 0.75) 0%, rgba(7, 6, 13, 0.2) 70%, transparent 100%);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .header-container.scrolled {
          padding: 12px 0;
          background: rgba(7, 6, 13, 0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 77, 157, 0.15);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          color: #f4f1ff;
          font-weight: 500;
          font-size: 0.95rem;
          letter-spacing: -0.01em;
          transition: all 0.2s ease;
          position: relative;
          display: inline-flex;
          align-items: center;
        }

        .nav-link:hover {
          color: #ff4d9d;
          text-shadow: 0 0 12px rgba(255, 77, 157, 0.5);
        }

        .dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-trigger {
          cursor: pointer;
          padding: 6px 0;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: -12px;
          min-width: 210px;
          background: rgba(18, 16, 31, 0.95);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          padding: 8px;
          display: opacity;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7), 0 0 20px rgba(124, 92, 255, 0.15);
        }

        .dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(4px);
        }

        .dropdown-item {
          display: block;
          padding: 10px 16px;
          color: #f4f1ff;
          font-size: 0.88rem;
          font-weight: 500;
          border-radius: 10px;
          transition: all 0.15s ease;
        }

        .dropdown-item:hover {
          background: rgba(255, 77, 157, 0.12);
          color: #ff4d9d;
          transform: translateX(4px);
        }

        .right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .contact-btn {
          position: relative;
          background: linear-gradient(135deg, #ff4d9d 0%, #7c5cff 100%);
          color: #ffffff;
          padding: 10px 24px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.25s ease;
          box-shadow: 0 0 20px rgba(255, 77, 157, 0.4);
        }

        .contact-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 0 32px rgba(255, 77, 157, 0.7), 0 0 15px rgba(124, 92, 255, 0.5);
        }

        .hamburger {
          display: none;
          font-size: 24px;
          color: #f4f1ff;
          cursor: pointer;
        }

        /* MOBILE MENU DRAWER */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: -100%;
          width: 280px;
          height: 100%;
          background: rgba(12, 10, 23, 0.97);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1000;
          padding: 24px;
          transition: left 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-menu.active {
          left: 0;
        }

        .mobile-menu ul {
          list-style: none;
          padding: 0;
          margin-top: 20px;
        }

        .mobile-menu li {
          margin: 18px 0;
          color: #f4f1ff;
          font-size: 1rem;
          font-weight: 500;
        }

        .submenu-toggle {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }

        .submenu {
          padding-left: 14px;
          margin-top: 10px;
          border-left: 2px solid rgba(255, 77, 157, 0.3);
        }

        .menu-close {
          text-align: right;
          cursor: pointer;
          font-size: 20px;
          color: #ff4d9d;
        }

        .mobile-btn {
          margin-top: 30px !important;
        }

        .mobile-btn span {
          display: block;
          text-align: center;
          background: linear-gradient(135deg, #ff4d9d, #7c5cff);
          color: #fff;
          padding: 12px;
          border-radius: 9999px;
          font-weight: 600;
          cursor: pointer;
        }

        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          z-index: 999;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }

          .hamburger {
            display: block;
          }

          .contact-btn {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Header;