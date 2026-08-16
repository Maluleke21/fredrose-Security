import teamPhoto from '../assets/images/team.jpg';

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div className="about-media tactical-frame" style={{ aspectRatio: '1170 / 850' }}>
          <span className="corner tl"></span>
          <span className="corner tr"></span>
          <span className="corner bl"></span>
          <span className="corner br"></span>
          <div className="hud-tag" style={{ top: '16px', left: '16px' }}>
            <span className="hud-dot"></span>
            Field Personnel
          </div>
          <div className="stamp" style={{ top: '60%', right: '8%' }}>
            Operational
          </div>
          <img
            src={teamPhoto}
            alt="The Fredrose Security Services response team on site"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }}
          />
        </div>
        <div className="about-body">
          <span className="eyebrow" style={{ color: 'var(--gold-deep)' }}>
            About Fredrose
          </span>
          <h2 style={{ marginTop: '14px' }}>Security Solutions for Malamulele</h2>
          <p className="about-tagline">&quot;Guarding Without Fear or Favour&quot;</p>
          <p>
            Fredrose Security Services provides security solutions for the Malamulele community and surrounding areas,
            combining trained guarding personnel, marked patrol vehicles and 24-hour armed response with CCTV, alarm,
            electric fencing and motor gate systems.
          </p>
          <p>
            Whether protecting a home or a business, Fredrose is built around one principle: a visible, professional
            security presence that responds when it&apos;s needed.
          </p>
          <div className="about-stats">
            <div>
              <span>Location</span>
              <strong>922A Malamulele</strong>
            </div>
            <div>
              <span>Response</span>
              <strong>24 Hours</strong>
            </div>
            <div>
              <span>Contact</span>
              <strong>015 280 0343</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
