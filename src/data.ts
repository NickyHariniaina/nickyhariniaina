export const site = {
  name: 'Nicky Hariniaina',
  wordmark: 'Nicky Hariniaina',
  role: 'Backend Developer & DevOps',
  roles: ['Backend Developer', 'DevOps'],
  location: 'Antananarivo, Madagascar',
  email: 'nickyharini1na@gmail.com',
  phone: '+261 38 15 840 53',
  phoneHref: '+261381584053',
  availability: 'Available for work',
  statement:
    'I design and build digital experiences. No matter the size or complexity, I create software that is beautiful, intuitive, and built to deliver results.',
  intro:
    'Software developer focused on crafting fast, thoughtful web products — from concept and interface to clean, resilient code.',
}

export const navLinks = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export type Project = {
  id: string
  title: string
  subtitle: string
  year: string
  tags: string[]
  kind: 'image' | 'case'
  description?: string
  href?: string
}

export const projects: Project[] = [
  {
    id: 'brainfart',
    title: 'Brainfart',
    subtitle: 'Real-time trivia & AI mock interviews',
    year: '2026',
    tags: ['Web app'],
    kind: 'case',
    href: 'https://brainfarter.vercel.app',
    description:
      'Real-time multiplayer trivia game with AI-powered mock interviews, rooms with live scoring, global leaderboards, and streaming interview sessions across 26 tech roles.',
  },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/NickyHariniaina' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ferrissushi' },
  { label: 'Portfolio', href: 'https://nickyhariniaina.github.io/' },
]

export const about = {
  languages: ['Java', 'TypeScript', 'C/C++', 'Python'],
  tools: [
    'AWS',
    'Git / GitHub',
    'Docker',
    'Spring Boot',
    'React.js',
    'Next.js',
    'FastAPI',
  ],
  education: [
    {
      degree: 'Licence en Ingénierie Logiciel (L2)',
      school: 'HEI Madagascar',
      period: 'Oct 2024 — Present',
    },
    {
      degree: 'Baccalauréat – Série D',
      school: 'ESCA Antanimena',
      period: '2021 — Sept 2024',
    },
  ],
  experience: {
    title: 'Hackathon Intra-HEI',
    award: '2nd place',
    tags: ['CTF', 'Algorithme', 'Dev'],
  },
}
