export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const whyItems = [
  {
    num: '01',
    title: '24/7 Response',
    body: 'Professional security presence and armed response, available around the clock.',
  },
  {
    num: '02',
    title: 'Security Technology',
    body: 'CCTV, alarms, electric fencing and motor gates, installed as part of one system.',
  },
  {
    num: '03',
    title: 'Local Security',
    body: 'Based at 922A Malamulele, serving the surrounding community.',
  },
  {
    num: '04',
    title: 'Professional Personnel',
    body: 'Trained security personnel supported by marked patrol vehicles.',
  },
];

export interface UnitCardData {
  id: string;
  title: string;
  body: string;
  tag: string;
  figure: 'guard' | 'response' | 'driver' | 'technician';
}

export const unitCards: UnitCardData[] = [
  {
    id: 'FRS / 01',
    title: 'Guarding Officer',
    body: 'Stationed on-site to monitor access and maintain a visible security presence on the property.',
    tag: 'Supports · Guarding',
    figure: 'guard',
  },
  {
    id: 'FRS / 02',
    title: 'Armed Response Officer',
    body: 'Dispatched when an alert is triggered, equipped for rapid intervention around the clock.',
    tag: 'Supports · Armed Response',
    figure: 'response',
  },
  {
    id: 'FRS / 03',
    title: 'Patrol Driver',
    body: 'Operates the marked patrol vehicle, providing mobile coverage across the response area.',
    tag: 'Supports · Patrol Vehicles',
    figure: 'driver',
  },
  {
    id: 'FRS / 04',
    title: 'Systems Technician',
    body: 'Installs and sets up CCTV, alarms, electric fencing and motor gate systems on-site.',
    tag: 'Supports · System Installation',
    figure: 'technician',
  },
];

export interface SolutionItem {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  imageKey: 'home' | 'business' | 'boundary' | 'systems';
}

export const solutions: SolutionItem[] = [
  {
    id: 'residential',
    eyebrow: 'Home',
    title: 'Residential Security',
    body: 'Guarding, alarms, CCTV, electric fencing and motor gates for homes and residential properties.',
    imageKey: 'home',
  },
  {
    id: 'commercial',
    eyebrow: 'Business',
    title: 'Commercial Security',
    body: 'Security guarding and systems built for businesses and commercial premises.',
    imageKey: 'business',
  },
  {
    id: 'perimeter',
    eyebrow: 'Boundary',
    title: 'Perimeter Security',
    body: 'Electric fencing and motor gate systems that secure the boundary of a property.',
    imageKey: 'boundary',
  },
  {
    id: 'technology',
    eyebrow: 'Systems',
    title: 'Security Technology',
    body: 'CCTV, alarms and integrated security system installation for homes and businesses.',
    imageKey: 'systems',
  },
];

