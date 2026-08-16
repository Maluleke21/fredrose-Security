import { useState } from 'react';
import logo from '../assets/images/logo.png';
import { navLinks } from '../data/content';
import { useActiveSection } from '../hooks/useActiveSection';

const PHONE_ICON = (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(['home', 'services', 'solutions', 'about', 'contact']);

  return (
    <>
      <header>
        <div className="hazard-strip"></div>
        <div className="navbar">
          <a href="#home" className="logo">
            <img className="logo-badge" src={logo} alt="Fredrose Security Services" />
            <div className="logo-text">
              FREDROSE
              <small>Security Services</small>
            </div>
          </a>
          <nav className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={activeSection === link.href.slice(1) ? 'active' : ''}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <a className="nav-call" href="tel:0152800343">
              {PHONE_ICON}
              <span className="nc-label">015 280 0343</span>
            </a>
            <a className="btn btn-gold" href="#contact" style={{ padding: '11px 22px', fontSize: '12px' }}>
              Call Now
            </a>
            <button className="hamburger" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="mobile-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="mm-link" onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="tel:0152800343" className="btn btn-gold">
          Call 015 280 0343
        </a>
        <div className="mm-contact">
          <div>922A Malamulele</div>
          <div>074 097 1465</div>
          <div>fredrosebe@gmail.com</div>
        </div>
      </div>
    </>
  );
}
