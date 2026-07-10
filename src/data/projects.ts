export interface Project {
  id: string
  index: string
  title: string
  domain: string
  stack: string[]
  description: string
  link?: string
}

export const projects: Project[] = [
  {
    id: 'delivery-ecosystem',
    index: '01',
    title: 'On-Demand Delivery Ecosystem',
    domain: 'Logistics',
    stack: ['React', 'Node', 'Google Maps', 'Stripe Connect'],
    description:
      'A 6-app suite with real-time GPS tracking and automated Stripe Connect payouts — deployed across Canada and Australia.',
  },
  {
    id: 'dealership-platform',
    index: '02',
    title: 'Car Dealership Platform',
    domain: 'Automotive',
    stack: ['React', 'TypeScript', 'Node', 'RBAC'],
    description:
      'Multi-tenant SaaS with hierarchical access, Cargurus inventory syndication, and digitally signed documents.',
    link: 'https://clutchautomotive.ca',
  },
  {
    id: 'wellness-app',
    index: '03',
    title: 'AI Wellness App',
    domain: 'Health',
    stack: ['React Native', 'Claude API', 'Node'],
    description:
      'Cross-platform app using the Claude API for journal analysis and affirmations, with a full admin CMS.',
  },
  {
    id: 'automotive-crm',
    index: '04',
    title: 'Automotive CRM',
    domain: 'Automotive',
    stack: ['Node', 'React', 'TypeScript'],
    description:
      'Full-stack CRM integrating 8 external APIs via a decoupled Node microservice for all communication scheduling.',
  },
  {
    id: 'logistics-platform',
    index: '05',
    title: 'Logistics Operations Platform',
    domain: 'Logistics',
    stack: ['Node', 'Redis', 'React'],
    description:
      'Per-action RBAC, barcode inventory, FullCalendar scheduling, and a Twilio SMS gateway on a Bull/Redis queue.',
  },
  {
    id: 'construction-cms',
    index: '06',
    title: 'Construction CMS & Portfolio',
    domain: 'Construction',
    stack: ['Next.js 15', 'Framer Motion'],
    description:
      'Next.js 15 portfolio and CMS with Framer Motion, split desktop/mobile layouts, and a careers portal.',
    link: 'https://miragebuild.ca',
  },
]
