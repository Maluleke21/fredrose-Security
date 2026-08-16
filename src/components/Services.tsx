import { useState } from 'react';
import { services, type ServiceItem } from '../data/services';
import Icon from './Icon';

export default function Services() {
  const [active, setActive] = useState<ServiceItem | null>(null);

  return (
    <section className="section-dark" id="services">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">What We Do</span>
          <h2>Our Services</h2>
          <p>Fredrose Security Services provides guarding, armed response and integrated security systems. Select a service to learn more.</p>
        </div>
      </div>
      <div className="wrap" style={{ padding: '0 32px' }}>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.key} className="service-card crosshair-zone" onClick={() => setActive(s)}>
              <Icon className="sc-icon" paths={s.icon} />
              <svg className="sc-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
              <h3>{s.title}</h3>
              <p>{s.short}</p>
              <div className="readiness">
                <i></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`modal-overlay${active ? ' open' : ''}`} onClick={(e) => e.target === e.currentTarget && setActive(null)}>
        <div className="modal-box">
          <div className="modal-head">
            {active && <Icon className="mh-icon" paths={active.icon} />}
            <button className="modal-close" onClick={() => setActive(null)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            <h3>{active?.title ?? 'Service'}</h3>
          </div>
          <div className="modal-body">
            <p>{active?.detail ?? ''}</p>
            <div className="modal-actions">
              <a href="#contact" className="btn btn-outline-dark" onClick={() => setActive(null)}>
                Request This Service
              </a>
              <a href="tel:0152800343" className="btn btn-gold">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
