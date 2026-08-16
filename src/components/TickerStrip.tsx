const ITEMS = [
  'Guarding',
  'Armed Response',
  'Electric Fencing',
  'Alarm Systems',
  'CCTV Cameras',
  'Motor Gates',
  'Security System Installation',
];

export default function TickerStrip() {
  return (
    <div className="ticker-strip">
      <div className="ticker-track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
