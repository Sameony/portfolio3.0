export interface ToolGroup {
  label: string
  items: string[]
}

export const toolkit: ToolGroup[] = [
  {
    label: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    label: 'Frontend',
    items: ['React.js', 'Redux', 'MobX', 'Next.js', 'Tailwind', 'Bootstrap'],
  },
  {
    label: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'REST', 'WebSockets', 'WordPress API'],
  },
  {
    label: 'Platforms',
    items: ['AWS', 'Azure', 'Keycloak', 'Git', 'Webpack', 'Linux'],
  },
]
