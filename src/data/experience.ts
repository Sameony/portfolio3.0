export interface ExperienceEntry {
  period: string
  company: string
  role: string
  description: string
}

export const experience: ExperienceEntry[] = [
  {
    period: 'Sep 2024 — Aug 2026',
    company: 'The IT Cart',
    role: 'Lead Software Engineer',
    description:
      'Now leading full product delivery across 5+ SaaS platforms — including a six-app logistics ecosystem live across two continents.',
  },
  {
    period: 'Jan 2022 — Sep 2024',
    company: 'Nagarro',
    role: 'Software Engineer',
    description:
      'Trusted at a global consultancy to ship enterprise systems — unifying eight third-party APIs into a single production-grade CRM.',
  },
  {
    period: '2021 — 2022',
    company: 'Independent',
    role: 'Developer & Consultant',
    description:
      'Hired directly by clients to build and rescue products — once cutting a live site\'s load time from 38 seconds to 5.',
  },
]
