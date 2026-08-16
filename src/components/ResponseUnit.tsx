import { unitCards } from '../data/content';

function GuardFigure() {
  return (
    <svg viewBox="0 0 140 190" fill="none">
      <path d="M70 8a24 24 0 0 1 24 24v6a24 24 0 0 1-48 0v-6A24 24 0 0 1 70 8Z" fill="#2C2C30" stroke="#E8A63B" strokeWidth={1.4} />
      <path d="M46 38 h48 v-6 a24 24 0 0 0-48 0Z" fill="#0B0B0C" />
      <path d="M28 190 V128 c0-34 18-52 42-52 24 0 42 18 42 52 v62Z" fill="#2C2C30" />
      <path d="M28 128 c0-34 18-52 42-52 24 0 42 18 42 52" fill="none" stroke="#E8A63B" strokeWidth={1.4} />
      <rect x="28" y="128" width="84" height="14" fill="#E8A63B" />
      <rect x="60" y="150" width="20" height="26" rx="3" fill="#1B1B1D" stroke="#E8A63B" strokeWidth={1.2} />
      <circle cx="70" cy="163" r="2.4" fill="#E8A63B" />
    </svg>
  );
}

function ResponseFigure() {
  return (
    <svg viewBox="0 0 140 190" fill="none">
      <circle cx="70" cy="34" r="24" fill="#2C2C30" stroke="#E8A63B" strokeWidth={1.4} />
      <path d="M26 190 V132 c0-36 20-54 44-54 24 0 44 18 44 54 v58Z" fill="#2C2C30" />
      <path d="M40 100 h60 v70 h-60 Z" fill="#1B1B1D" stroke="#E8A63B" strokeWidth={1.4} />
      <path d="M40 112 h60 M40 126 h60 M40 140 h60" stroke="#3A3A3E" strokeWidth={1} />
      <rect x="52" y="150" width="10" height="18" fill="#E8A63B" />
      <rect x="78" y="150" width="10" height="18" fill="#E8A63B" />
      <circle cx="106" cy="118" r="7" fill="#0B0B0C" stroke="#E8A63B" strokeWidth={1.4} />
      <path d="M106 111 v-10" stroke="#E8A63B" strokeWidth={1.4} />
    </svg>
  );
}

function DriverFigure() {
  return (
    <svg viewBox="0 0 140 190" fill="none">
      <circle cx="70" cy="30" r="22" fill="#2C2C30" stroke="#E8A63B" strokeWidth={1.4} />
      <path d="M40 30 h60 v-6 a30 22 0 0 0-60 0Z" fill="#0B0B0C" />
      <path d="M30 190 V138 c0-30 18-46 40-46 22 0 40 16 40 46 v52Z" fill="#2C2C30" />
      <rect x="30" y="138" width="80" height="12" fill="#E8A63B" />
      <rect x="16" y="150" width="108" height="40" rx="4" fill="#1B1B1D" stroke="#E8A63B" strokeWidth={1.4} />
      <circle cx="46" cy="170" r="11" fill="#0B0B0C" stroke="#E8A63B" strokeWidth={1.4} />
      <circle cx="94" cy="170" r="11" fill="#0B0B0C" stroke="#E8A63B" strokeWidth={1.4} />
      <rect x="60" y="158" width="20" height="8" fill="#E8A63B" />
    </svg>
  );
}

function TechnicianFigure() {
  return (
    <svg viewBox="0 0 140 190" fill="none">
      <circle cx="60" cy="32" r="22" fill="#2C2C30" stroke="#E8A63B" strokeWidth={1.4} />
      <path d="M20 190 V136 c0-32 18-48 40-48 22 0 40 16 40 48 v18" fill="#2C2C30" />
      <rect x="20" y="136" width="80" height="12" fill="#E8A63B" />
      <rect x="86" y="120" width="34" height="24" rx="2" fill="#1B1B1D" stroke="#E8A63B" strokeWidth={1.4} />
      <circle cx="103" cy="132" r="5" fill="#0B0B0C" stroke="#E8A63B" strokeWidth={1.2} />
      <path d="M76 150 L98 150 L98 168 L76 168 Z" fill="none" stroke="#E8A63B" strokeWidth={1.4} />
      <path d="M87 150 v-14 M76 158 h22" stroke="#E8A63B" strokeWidth={1.2} />
    </svg>
  );
}

const FIGURES = {
  guard: GuardFigure,
  response: ResponseFigure,
  driver: DriverFigure,
  technician: TechnicianFigure,
};

const CHEVRON_COUNT: Record<string, number> = {
  guard: 2,
  response: 3,
  driver: 1,
  technician: 2,
};

export default function ResponseUnit() {
  return (
    <>
      <div className="chevron-divider"></div>
      <section className="section-dark" id="unit">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Boots On The Ground</span>
            <h2>The Fredrose Response Unit</h2>
            <p>
              Every service on this site is carried out by a person on the ground — guarding a gate, driving a patrol
              vehicle, answering a call-out or installing a system. This is the unit behind the services.
            </p>
          </div>
          <div className="unit-grid">
            {unitCards.map((card) => {
              const Figure = FIGURES[card.figure];
              const chevrons = CHEVRON_COUNT[card.figure] ?? 1;
              return (
                <div className="unit-card" key={card.id}>
                  <div className="unit-media">
                    <div className="unit-chevrons">
                      {Array.from({ length: chevrons }).map((_, i) => (
                        <span key={i}></span>
                      ))}
                    </div>
                    <div className="unit-id">{card.id}</div>
                    <Figure />
                  </div>
                  <div className="unit-body">
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                    <div className="unit-tag">{card.tag}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
