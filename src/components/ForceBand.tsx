import forceImg from '../assets/images/force-band.jpg';

export default function ForceBand() {
  return (
    <section className="force-band tactical-frame" id="force">
      <img className="force-img" src={forceImg} alt="Fredrose armed response officer on standby" />
      <div className="force-overlay"></div>
      <span className="corner tl"></span>
      <span className="corner tr"></span>
      <span className="corner bl"></span>
      <span className="corner br"></span>
      <div className="hud-tag" style={{ top: '20px', left: '20px' }}>
        <span className="hud-dot"></span>
        Armed Response · Standing By
      </div>
      <div className="wrap">
        <div className="force-inner">
          <span className="eyebrow" style={{ color: 'var(--gold-pale)' }}>
            Not A Sign On A Gate
          </span>
          <h2 className="force-title">
            Ready When It <em>Isn't</em> Quiet
          </h2>
          <p className="force-sub">
            Every Fredrose armed response officer is trained, equipped and on standby around the clock — because a threat
            doesn't wait for business hours, and neither do we.
          </p>
          <a href="tel:0152800343" className="btn btn-gold">
            Call For Assistance — 015 280 0343
          </a>
        </div>
      </div>
    </section>
  );
}
