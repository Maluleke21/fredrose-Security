import { useState } from 'react';
import { diagramData } from '../data/diagram';
import Icon from './Icon';

const LEGEND_LABELS: Record<string, string> = {
  cctv: 'CCTV',
  alarm: 'Alarms',
  fence: 'Electric Fencing',
  gate: 'Motor Gates',
  response: 'Armed Response',
};

export default function SystemsDiagram() {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const active = diagramData.find((d) => d.key === activeKey) ?? null;

  return (
    <section className="section-dark" id="systems">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Layered Protection</span>
          <h2>One Property, Five Layers of Security</h2>
          <p>
            Fredrose combines guarding, technology and rapid response into a single layered system. Click a point on
            the property to see how each layer works.
          </p>
        </div>
        <div className="diagram-wrap">
          <div className="diagram-stage tactical-frame">
            <span className="corner tl"></span>
            <span className="corner tr"></span>
            <span className="corner bl"></span>
            <span className="corner br"></span>
            <div className="hud-tag" style={{ top: '16px', left: '16px' }}>
              <span className="hud-dot"></span>
              Property Overview
            </div>
            <svg viewBox="0 0 600 490" fill="none">
              <rect width="600" height="490" fill="#1F1F22" />
              <rect x="0" y="420" width="600" height="70" fill="#161618" />
              <g stroke="#3A3A3E" strokeWidth={3}>
                <line x1="20" y1="150" x2="20" y2="420" />
                <line x1="20" y1="150" x2="580" y2="150" />
                <line x1="580" y1="150" x2="580" y2="420" />
              </g>
              <g stroke="#E8A63B" strokeWidth={1.4} opacity={0.55}>
                <line x1="20" y1="165" x2="580" y2="165" />
                <line x1="20" y1="180" x2="580" y2="180" />
                <line x1="20" y1="195" x2="580" y2="195" />
              </g>
              <rect x="180" y="250" width="240" height="170" fill="#28282C" />
              <path d="M165 250 L300 175 L435 250 Z" fill="#232326" />
              <rect x="270" y="330" width="60" height="90" fill="#161618" />
              <rect x="205" y="290" width="45" height="45" fill="#161618" />
              <rect x="350" y="290" width="45" height="45" fill="#161618" />
              <rect x="270" y="400" width="60" height="20" fill="#3A3A3E" />
            </svg>

            {diagramData.map((point) => (
              <div
                key={point.key}
                className={`hotspot${activeKey === point.key ? ' active' : ''}`}
                style={{ top: point.top, left: point.left }}
                onClick={() => setActiveKey(point.key)}
              >
                <span></span>
              </div>
            ))}
          </div>

          <div>
            <div className="diagram-panel">
              {active ? (
                <>
                  <Icon className="dp-icon" paths={active.icon} />
                  <h3>{active.title}</h3>
                  <p>{active.text}</p>
                </>
              ) : (
                <>
                  <svg className="dp-icon" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                  <h3>Select a point</h3>
                  <p>Click any highlighted point on the property to see how that layer of security works with the rest of the system.</p>
                </>
              )}
              <div className="diagram-hint">5 layers · click to explore</div>
            </div>
            <div className="diagram-legend">
              {diagramData.map((point) => (
                <button
                  key={point.key}
                  className={`legend-pill${activeKey === point.key ? ' active' : ''}`}
                  onClick={() => setActiveKey(point.key)}
                >
                  {LEGEND_LABELS[point.key]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
