import whyBg from '../assets/images/why-fredrose-bg.jpg';
import { whyItems } from '../data/content';

export default function WhyFredrose() {
  return (
    <section
      id="why"
      className="section-dark why-photo"
      style={{
        backgroundImage: `linear-gradient(rgba(11,11,12,.90),rgba(11,11,12,.90)), url(${whyBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow" style={{ color: 'var(--gold-pale)' }}>
            Why Fredrose
          </span>
          <h2>Built On Presence, Not Promises</h2>
          <p>A local security partner equipped for guarding, rapid response and integrated technology.</p>
        </div>
        <div className="why-grid">
          {whyItems.map((item) => (
            <div className="why-item" key={item.num}>
              <span className="wi-num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
