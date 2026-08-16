import logo from '../assets/images/logo.png';

export default function Hero() {
  return (

<section className="hero" id="home">
  <div className="wrap hero-grid">
    <div>
      <div className="hero-eyebrow">
        <span className="pulse-dot"></span>
        <span className="eyebrow">24hr Armed Response · Malamulele</span>
      </div>
      <h1>Guarding <em>Without Fear</em> or Favour</h1>
      <p className="lead">Professional security guarding, armed response and integrated security systems for homes, businesses and properties in Malamulele and the surrounding area.</p>
      <div className="hero-ctas">
        <a href="#contact" className="btn btn-gold">Get a Security Assessment</a>
        <a href="tel:0152800343" className="btn btn-outline">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call Us Now
        </a>
      </div>
      <div className="hero-brand-mark">
        <img src={logo} alt="Fredrose Security Services" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
        <span>Fredrose Security Services</span>
      </div>
      <div className="hero-meta">
        <div><strong>Guarding</strong>Trained personnel</div>
        <div><strong>Armed Response</strong>24 hours a day</div>
        <div><strong>Systems</strong>CCTV · Alarms · Fencing · Gates</div>
      </div>
    </div>
    <div className="hero-art tactical-frame">
      <span className="corner tl"></span><span className="corner tr"></span><span className="corner bl"></span><span className="corner br"></span>
      <div className="hud-tag" style={{top: '14px', left: '14px'}}><span className="hud-dot"></span>Sector · Malamulele</div>
      <div className="hud-tag" style={{bottom: '14px', right: '14px'}}><span className="hud-dot"></span>Unit Status · Active</div>
      <div className="radar-widget" style={{bottom: '56px', left: '14px'}}>
        <svg viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="56" fill="rgba(232,166,59,.04)" stroke="#E8A63B" strokeWidth="1" opacity=".5"/>
          <circle cx="60" cy="60" r="38" fill="none" stroke="#E8A63B" strokeWidth="1" opacity=".35"/>
          <circle cx="60" cy="60" r="18" fill="none" stroke="#E8A63B" strokeWidth="1" opacity=".3"/>
          <line x1="60" y1="4" x2="60" y2="116" stroke="#E8A63B" strokeWidth=".6" opacity=".25"/>
          <line x1="4" y1="60" x2="116" y2="60" stroke="#E8A63B" strokeWidth=".6" opacity=".25"/>
          <g className="radar-sweep">
            <path d="M60 60 L60 4 A56 56 0 0 1 96 20 Z" fill="url(#radarGrad)"/>
          </g>
          <defs>
            <linearGradient id="radarGrad" x1="60" y1="4" x2="96" y2="20" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#E8A63B" stopOpacity=".55"/>
              <stop offset="1" stopColor="#E8A63B" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <circle className="radar-blip" cx="82" cy="44" r="3" fill="#E8A63B"/>
          <circle className="radar-blip" cx="40" cy="76" r="2.4" fill="#E8A63B" style={{animationDelay: '.8s'}}/>
          <circle className="radar-blip" cx="70" cy="86" r="2" fill="#E8A63B" style={{animationDelay: '1.4s'}}/>
        </svg>
      </div>
      <svg className="badge-large" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="94" stroke="#E8A63B" strokeWidth="1.5" strokeDasharray="2 6"/>
        <circle cx="100" cy="100" r="76" fill="#18181A" stroke="#E8A63B" strokeWidth="2"/>
        <image href={logo} x="44" y="52" width="112" height="97" preserveAspectRatio="xMidYMid meet"/>
        <text x="100" y="182" textAnchor="middle" fontFamily="Oswald" fontSize="10" letterSpacing="3" fill="#8C8A87">EST. MALAMULELE</text>
      </svg>
      <svg className="hero-illustration" viewBox="0 0 480 340" fill="none">
        
        <rect x="0" y="300" width="480" height="40" fill="#141416"/>
        
        <g transform="translate(20,190)">
          <rect x="0" y="40" width="230" height="55" rx="6" fill="#232326"/>
          <path d="M20 40 L45 8 H150 L175 40 Z" fill="#232326"/>
          <path d="M55 40 L72 16 H140 L155 40 Z" fill="#0B0B0C" opacity=".5"/>
          <circle cx="42" cy="98" r="18" fill="#0B0B0C" stroke="#E8A63B" strokeWidth="2"/>
          <circle cx="188" cy="98" r="18" fill="#0B0B0C" stroke="#E8A63B" strokeWidth="2"/>
          <rect x="0" y="40" width="230" height="8" fill="#E8A63B"/>
          <text x="30" y="70" fontFamily="Oswald" fontSize="11" fill="#E8A63B" letterSpacing="1">FREDROSE SECURITY</text>
        </g>
        
        <g transform="translate(300,60)">
          <circle cx="45" cy="26" r="20" fill="#2C2C30"/>
          <path d="M10 260 V150 C10 110 24 90 45 90 C66 90 80 110 80 150 V260Z" fill="#2C2C30"/>
          <rect x="10" y="150" width="70" height="14" fill="#E8A63B"/>
          <rect x="35" y="90" width="20" height="70" fill="#1B1B1D"/>
          <circle cx="45" cy="26" r="20" fill="none" stroke="#E8A63B" strokeWidth="1.5"/>
        </g>
        
        <g transform="translate(410,40)">
          <rect x="8" y="0" width="4" height="180" fill="#3A3A3E"/>
          <rect x="0" y="-6" width="46" height="18" rx="3" fill="#232326" stroke="#E8A63B" strokeWidth="1.2"/>
          <circle cx="6" cy="3" r="4" fill="#E8A63B"/>
        </g>
        
        <g stroke="#3A3A3E" strokeWidth="2">
          <line x1="0" y1="230" x2="480" y2="230"/>
          <line x1="0" y1="242" x2="480" y2="242"/>
          <line x1="0" y1="254" x2="480" y2="254"/>
        </g>
      </svg>
    </div>
  </div>
</section>

  );
}
