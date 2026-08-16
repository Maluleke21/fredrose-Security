export interface ServiceItem {
  key: string;
  title: string;
  short: string;
  detail: string;
  icon: string; // inner SVG path markup
}

export const services: ServiceItem[] = [
  {
    key: 'guarding',
    title: 'Guarding',
    short: 'Professional security guarding solutions for properties and businesses.',
    detail:
      'Trained security personnel providing an on-site guarding presence for residential and commercial properties, supporting daily access control and monitoring.',
    icon: '<path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z"/>',
  },
  {
    key: 'armed',
    title: 'Armed Response',
    short: '24-hour armed response services designed for rapid intervention.',
    detail:
      'Armed response available 24 hours a day, supported by marked patrol vehicles, for rapid intervention when it is needed most.',
    icon: '<path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z"/><path d="M9 12l2 2 4-4"/>',
  },
  {
    key: 'fencing',
    title: 'Electric Fencing',
    short: 'Electric fencing solutions for perimeter protection.',
    detail:
      'Electric fencing installed along the boundary of a property to strengthen perimeter security as part of a layered system.',
    icon: '<path d="M4 21V9l8-6 8 6v12M4 21h16M9 21v-6h6v6"/>',
  },
  {
    key: 'alarms',
    title: 'Alarm Systems',
    short: 'Alarm installation and security monitoring solutions.',
    detail:
      'Alarm system installation for homes and businesses, providing an added layer of detection and monitoring on the property.',
    icon: '<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  },
  {
    key: 'cctv',
    title: 'CCTV Cameras',
    short: 'CCTV installation and surveillance solutions.',
    detail:
      'CCTV camera installation providing surveillance coverage across a property, integrated with the wider security system.',
    icon: '<path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>',
  },
  {
    key: 'gates',
    title: 'Motor Gates',
    short: 'Automated gate and access-control solutions.',
    detail: 'Automated motor gate installation for controlled vehicle and pedestrian access to a property.',
    icon: '<path d="M3 21h18M6 21V8l6-4 6 4v13M10 12h4M10 16h4M10 8h4"/>',
  },
  {
    key: 'systems',
    title: 'Security System Installation',
    short: 'Integrated security technology for homes and businesses.',
    detail:
      'Installation of integrated security technology — CCTV, alarms, electric fencing and motor gates — for homes and businesses.',
    icon: '<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.2 4.2l2.9 2.9M16.9 16.9l2.9 2.9M1 12h4M19 12h4M4.2 19.8l2.9-2.9M16.9 7.1l2.9-2.9"/>',
  },
];
