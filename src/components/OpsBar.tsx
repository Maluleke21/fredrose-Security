const ITEMS = [
  { label: 'STATUS', value: 'OPERATIONAL' },
  { label: 'UNIT', value: 'FREDROSE-01' },
  { label: 'SECTOR', value: 'MALAMULELE' },
  { label: 'RESPONSE', value: '24HR ARMED' },
  { label: 'THREAT LEVEL', value: 'MONITORED' },
  { label: 'COMMS', value: '015 280 0343' },
];

export default function OpsBar() {
  return (
    <div id="ops-bar">
      <div className="ops-track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i}>
            {item.label}: <b>{item.value}</b>
          </span>
        ))}
      </div>
    </div>
  );
}
