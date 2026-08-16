export interface DiagramPoint {
  key: string;
  title: string;
  icon: string;
  text: string;
  top: string;
  left: string;
}

export const diagramData: DiagramPoint[] = [
  {
    key: 'cctv',
    title: 'CCTV Cameras',
    icon: '<path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>',
    text: 'Cameras positioned around the property for surveillance coverage, feeding into the wider security system.',
    top: '34%',
    left: '66%',
  },
  {
    key: 'alarm',
    title: 'Alarm Systems',
    icon: '<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
    text: 'Alarm sensors on the property detect activity and add a monitored layer of protection to the home or business.',
    top: '56%',
    left: '38%',
  },
  {
    key: 'fence',
    title: 'Electric Fencing',
    icon: '<path d="M4 21V9l8-6 8 6v12M4 21h16M9 21v-6h6v6"/>',
    text: 'Electric fencing along the boundary line strengthens the perimeter, the first layer of protection.',
    top: '33%',
    left: '5%',
  },
  {
    key: 'gate',
    title: 'Motor Gates',
    icon: '<path d="M3 21h18M6 21V8l6-4 6 4v13M10 12h4M10 16h4M10 8h4"/>',
    text: 'Automated motor gates control vehicle and pedestrian access at the entrance to the property.',
    top: '88%',
    left: '50%',
  },
  {
    key: 'response',
    title: 'Armed Response',
    icon: '<path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z"/><path d="M9 12l2 2 4-4"/>',
    text: 'When an alert is triggered, armed response is dispatched to the property — available 24 hours a day.',
    top: '92%',
    left: '14%',
  },
];
