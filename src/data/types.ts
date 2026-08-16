export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  icon: string; // svg path data (single <path>) or multi-path string rendered via dangerouslySetInnerHTML alternative
  title: string;
  summary: string;
  detail: string;
}

export interface WhyItem {
  num: string;
  title: string;
  body: string;
}

export interface Solution {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  image?: string;
  iconPaths?: string[];
}

export interface UnitCard {
  role: string;
  title: string;
  body: string;
}

export interface TrustStat {
  value: string;
  label: string;
}
