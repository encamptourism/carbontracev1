"use client";

import Link from "next/link";
import { useState } from "react";

const Header = (props) => {
  const contacttoggle = props.toggle;
  const setContacttoggle = props.setToggle;
  const theme = props.theme || "dark";

  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <>
      {/* 🔥 MOBILE SIDEBAR */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="menu-close" onClick={() => setMenuOpen(false)}>✕</div>

        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/project">Projects</Link></li>

          <li>
            <div className="submenu-toggle" onClick={() => setSubmenuOpen(!submenuOpen)}>
              Calculators ▾
            </div>

            {submenuOpen && (
              <ul className="submenu">
                <li><Link href="/lifestylecalculator">Lifestyle Calculator</Link></li>
                <li><Link href="/travelcalculator">Travel Calculator</Link></li>
              </ul>
            )}
          </li>

          <li>
            <span onClick={() => setContacttoggle(!contacttoggle)}>
              Carbon Market Consulting
            </span>
          </li>

          <li className="mobile-btn">
            <span onClick={() => setContacttoggle(!contacttoggle)}>
              Contact us
            </span>
          </li>
        </ul>
      </div>

      {/* 🔥 OVERLAY */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}

      {/* 🔥 HEADER */}
      <div className={`header ${theme === "light" ? "light" : "dark"}`}>
        <div className="container header-inner">

          {/* LOGO */}
          <div className="logo">
            <Link href="/">
              <img src="/assets/img/home/logo.svg" alt="logo" />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <nav className="desktop-menu">
            <Link href="/">Home</Link>
            <Link href="/project">Projects</Link>

            <div className="dropdown">
              <span>Calculators ▾</span>
              <div className="dropdown-menu">
                <Link href="/lifestylecalculator">Lifestyle Calculator</Link>
                <Link href="/travelcalculator">Travel Calculator</Link>
              </div>
            </div>

            <span onClick={() => setContacttoggle(!contacttoggle)}>
              Carbon Market Consulting
            </span>
          </nav>

          {/* RIGHT */}
          <div className="right">
            <span className="contact-btn" onClick={() => setContacttoggle(!contacttoggle)}>
              Contact us
            </span>

            {/* MOBILE ICON */}
            <div className="hamburger" onClick={() => setMenuOpen(true)}>
              ☰
            </div>
          </div>

        </div>
      </div>

      {/* 🔥 STYLE */}
      <style jsx>{`
        .header {
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 999;
          padding: 15px 0;
          transition: 0.3s;
        }

        .header.light {
          background: rgba(0,0,0,0.2);
          backdrop-filter: blur(8px);
          color: white;
        }

        .header.dark {
          background: #fff;
          color: #000;
        }

        .header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .desktop-menu {
          display: flex;
          gap: 25px;
        }

        .dropdown {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: 30px;
          background: #fff;
          padding: 10px;
          display: none;
        }

        .dropdown:hover .dropdown-menu {
          display: block;
        }

        .right {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .contact-btn {
          background: #00c896;
          padding: 8px 18px;
          border-radius: 6px;
          color: #000;
          cursor: pointer;
        }

        .hamburger {
          display: none;
          font-size: 22px;
          cursor: pointer;
        }

        /* 🔥 MOBILE MENU */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: -100%;
          width: 260px;
          height: 100%;
          background: #0b0f0e;
          z-index: 1000;
          padding: 20px;
          transition: 0.3s;
        }

        .mobile-menu.active {
          left: 0;
        }

        .mobile-menu ul {
          list-style: none;
          padding: 0;
        }

        .mobile-menu li {
          margin: 15px 0;
          color: #fff;
        }

        .submenu {
          padding-left: 15px;
        }

        .menu-close {
          text-align: right;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 999;
        }

        /* 🔥 RESPONSIVE */
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