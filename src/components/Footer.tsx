import logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <img className="logo-badge" src={logo} alt="Fredrose Security Services" />
              <div className="logo-text">
                FREDROSE
                <small>Security Services</small>
              </div>
            </div>
            <p className="footer-tag">&quot;Guarding Without Fear or Favour&quot;</p>
            <div className="footer-24">24HR Armed Response</div>
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <a href="#services">Guarding</a>
            <a href="#services">Armed Response</a>
            <a href="#services">CCTV Cameras</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="tel:0152800343">015 280 0343</a>
            <a href="tel:0740971465">074 097 1465</a>
            <a href="mailto:fredrosebe@gmail.com">fredrosebe@gmail.com</a>
            <a>922A Malamulele</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Fredrose Security Services. All rights reserved.</span>
          <span>Developed by Hlavutelo Maluleke</span>
        </div>
      </div>
    </footer>
  );
}
