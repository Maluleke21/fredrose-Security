import homeImg from '../assets/images/solution-home.jpg';
import businessImg from '../assets/images/solution-business.jpg';
import boundaryImg from '../assets/images/solution-boundary.jpg';
import systemsImg from '../assets/images/solution-systems.jpg';
import { solutions } from '../data/content';

const IMAGES: Record<string, string> = {
  home: homeImg,
  business: businessImg,
  boundary: boundaryImg,
  systems: systemsImg,
};

export default function Solutions() {
  return (
    <section className="section-charcoal" id="solutions">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Where We Protect</span>
          <h2>Security Solutions</h2>
          <p>From guarding a household to securing a commercial site, Fredrose covers the full perimeter — not just the gate.</p>
        </div>
        <div className="solutions-grid">
          {solutions.map((sol) => (
            <div className="solution-card" key={sol.id}>
              <div
                className="solution-media"
                style={{
                  backgroundImage: `url(${IMAGES[sol.imageKey]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="solution-body">
                <span className="eyebrow" style={{ color: 'var(--gold-deep)' }}>
                  {sol.eyebrow}
                </span>
                <h3>{sol.title}</h3>
                <p>{sol.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
