'use client';

import React, { useState, useEffect } from 'react';

export default function CinematicStage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth / window.innerHeight > 1.1) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`stage ${isOpen ? 'is-open' : ''}`} id="stage">
      {/* BACKGROUND VIDEO PLATE */}
      <div className="plate">
        <video
          className="plate-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* TOPBAR */}
      <header className="topbar">
        {/* BRAND SVG MARK */}
        <a className="brand" href="/" aria-label="Home">
          <svg viewBox="0 0 31.5 48.5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bg1" x1="8" y1="0" x2="34.1" y2="28.9" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#9e9e9e" />
                <stop offset="0.28" stopColor="#a6a6a6" />
                <stop offset="0.34" stopColor="#a3a3a3" />
                <stop offset="0.40" stopColor="#3a3a3a" />
                <stop offset="0.55" stopColor="#414141" />
                <stop offset="0.60" stopColor="#7a7a7a" />
                <stop offset="0.68" stopColor="#8e8e8e" />
                <stop offset="0.80" stopColor="#a9a9a9" />
                <stop offset="0.95" stopColor="#c4c4c4" />
                <stop offset="1" stopColor="#cccccc" />
              </linearGradient>
            </defs>
            <path
              d="M21.5 0 L21.5 19.5 L31.5 19.5 L31.5 29 L10 48.5 L10 28.5 L0.5 28.5 L0.5 18.5 Z"
              fill="url(#bg1)"
            />
            <rect x="0.5" y="18.5" width="9" height="10" fill="#fdfdfd" />
            <rect x="22" y="19.5" width="9.5" height="9.5" fill="#fdfdfd" />
          </svg>
        </a>

        {/* PRIMARY NAV LINKS */}
        <nav className="links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* HEADER PILL */}
        <a className="pill pill-nav" href="#get-started">
          <span>Get Started</span>
        </a>

        {/* MOBILE BURGER */}
        <button
          className="burger"
          id="burger"
          aria-label={isOpen ? 'Close Menu' : 'Toggle Menu'}
          aria-expanded={isOpen}
          aria-controls="menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i />
          <i />
        </button>
      </header>

      {/* MOBILE OVERLAY MENU */}
      <nav className="menu" id="menu" aria-hidden={!isOpen}>
        <div className="menu-inner">
          <p className="menu-eyebrow">Menu</p>
          <ul className="menu-list">
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#features" onClick={() => setIsOpen(false)}>Features</a></li>
            <li><a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
          <div className="menu-foot">
            <a className="pill pill-cta" href="#get-started" onClick={() => setIsOpen(false)}>
              <span>Get Started</span>
            </a>
            <a className="ghost" href="#architecture" onClick={() => setIsOpen(false)}>
              View Architecture
            </a>
          </div>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <main className="hero">
        <h1 className="headline">
          <span>The Next Layer</span>
          <span>of Intelligence</span>
        </h1>
        <p className="sub">
          <span>A unified infrastructure platform to help teams build,</span>
          <span>ship, and scale AI systems with confidence.</span>
        </p>
        <div className="actions">
          <a className="pill pill-cta" href="#get-started">
            <span>Get Started</span>
          </a>
          <a className="ghost" href="#architecture">View Architecture</a>
        </div>
      </main>

      {/* PARTNER STRIP (.logos) */}
      <div className="logos">
        {/* LG1 */}
        <div className="lg lg1">
          <svg className="lg-icon" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="m1" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="31">
              <rect width="30" height="31" rx="4.5" fill="#ffffff" />
              <circle cx="19.5" cy="10.5" r="5.1" fill="#000000" />
            </mask>
            <rect width="30" height="31" rx="4.5" fill="currentColor" mask="url(#m1)" />
            <circle cx="19.5" cy="10.5" r="2.8" fill="currentColor" />
          </svg>
          <span className="lg-text">logoipsum</span>
        </div>

        {/* LG2 */}
        <div className="lg lg2">
          <svg className="lg-icon" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="6.8" height="30" rx="3.4" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5 0C19.4036 0 25 5.59644 25 12.5C25 19.4036 19.4036 25 12.5 25C12.5 22 15 19.5 15 12.5C15 5.5 12.5 3 12.5 0Z"
              fill="currentColor"
            />
          </svg>
          <span className="lg-text">
            logoipsum<span className="dot" />
          </span>
        </div>

        {/* LG3 */}
        <div className="lg lg3">
          <svg className="lg-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="12.35" stroke="currentColor" strokeWidth="3.1" />
            <path d="M7 14C7 10.134 10.134 7 14 7" stroke="currentColor" strokeWidth="3.1" strokeLinecap="round" />
            <path d="M21 14C21 17.866 17.866 21 14 21" stroke="currentColor" strokeWidth="3.1" strokeLinecap="round" />
          </svg>
          <span className="lg-text">logoipsum</span>
        </div>

        {/* LG4 */}
        <div className="lg lg4">
          <svg className="lg-icon" viewBox="0 0 28 25.5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11.5C6 6.5 10 6.5 14 11.5C18 16.5 22 16.5 26 11.5V6.5C22 11.5 18 11.5 14 6.5C10 1.5 6 1.5 2 6.5V11.5Z" fill="currentColor" />
            <path d="M2 17C6 12 10 12 14 17C18 22 22 22 26 17" stroke="currentColor" strokeWidth="3.05" strokeLinecap="round" />
            <path d="M2 22.5C6 17.5 10 17.5 14 22.5C18 27.5 22 27.5 26 22.5" stroke="currentColor" strokeWidth="3.05" strokeLinecap="round" />
          </svg>
          <span className="lg-text">logoipsum</span>
        </div>
      </div>
    </div>
  );
}
