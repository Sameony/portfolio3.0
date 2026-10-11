import wellnessCover from '../images/projects/wellness-app/feature-graphic.png'

export interface Screenshot {
  src: string
  caption: string
}

// Collects every NN-name.png in a folder, ordered by the number prefix; the caption comes from the name.
function screenshots(modules: Record<string, string>): Screenshot[] {
  return Object.keys(modules)
    .sort()
    .map((path) => {
      const name = path.split('/').pop()!.replace(/^\d+-/, '').replace(/\.\w+$/, '')
      return {
        src: modules[path],
        caption: name.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      }
    })
}

export interface Project {
  id: string
  index: string
  title: string
  domain: string
  stack: string[]
  description: string
  link?: string
  cover?: string
  gallery?: Screenshot[]
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
    link: 'https://liquid.tamarind.cloud',
  },
  {
    id: 'wellness-app',
    index: '03',
    title: 'Kabbalah Codes',
    domain: 'Wellness',
    stack: ['React Native', 'Claude API', 'RAG', 'Node', 'In-App Purchases'],
    description:
      'iOS, Android and web app with four Claude-powered features (journal reflection, tarot, affirmations, chart comparisons) grounded by a self-built RAG pipeline, native App Store and Google Play billing, and a full admin CMS.',
    link: 'https://www.soulcodeapplication.com',
    cover: wellnessCover,
    gallery: screenshots(
      import.meta.glob<string>('../images/projects/wellness-app/[0-9][0-9]-*.png', {
        eager: true,
        import: 'default',
      }),
    ),
  },
  {
    id: 'automotive-crm',
    index: '04',
    title: 'Automotive CRM',
    domain: 'Automotive',
    stack: ['Node', 'React', 'TypeScript'],
    description:
      'Full-stack CRM integrating 8 external APIs via a decoupled Node microservice for all communication scheduling.',
    link: 'https://buythecar.com.au',
  },
  {
    id: 'logistics-platform',
    index: '05',
    title: 'Logistics Operations Platform',
    domain: 'Logistics',
    stack: ['Node', 'React'],
    description:
      'Per-action RBAC, barcode inventory, FullCalendar scheduling, and a Twilio SMS gateway.',
  },
  {
    id: 'construction-cms',
    index: '06',
    title: 'Construction CMS & Portfolio',
    domain: 'Construction',
    stack: ['Next.js 15', 'Framer Motion'],
    description:
      'Next.js 15 portfolio and CMS with Framer Motion, split desktop/mobile layouts, and a careers portal.',
    link: 'https://designassociates.in',
  },
]
