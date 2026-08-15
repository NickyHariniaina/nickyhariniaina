export const site = {
  name: 'Nicky Hariniaina',
  role: 'Backend Developer & DevOps',
  host: 'devops',
  location: 'Antananarivo, Madagascar',
  email: 'nickyharini1na@gmail.com',
  phone: '+261 38 15 840 53',
  phoneHref: '+261381584053',
  ascii: `,----------------------.
| > nicky@devops      |
| > whoami            |
| > backend developer |
| > devops engineer   |
'----------------------'`,
}

export type Segment = { t: string; h?: boolean }

export const about = {
  whoami: [
    [
      { t: 'I am ' },
      { t: 'Nicky', h: true },
      { t: ', an enthusiastic software developer from ' },
      { t: 'Madagascar', h: true },
      { t: ', primarily using ' },
      { t: 'Java', h: true },
      { t: ', ' },
      { t: 'TypeScript', h: true },
      { t: ', ' },
      { t: 'C/C++', h: true },
      { t: ', and ' },
      { t: 'Python', h: true },
      { t: '. Currently in my second year at ' },
      { t: 'HEI Madagascar', h: true },
      { t: ', pursuing a software engineering degree. I enjoy building clean ' },
      { t: 'backend services', h: true },
      { t: ' and ' },
      { t: 'infrastructure', h: true },
      { t: ', and I compete in ' },
      { t: 'CTF', h: true },
      { t: ', ' },
      { t: 'algorithm', h: true },
      { t: ', and ' },
      { t: 'development', h: true },
      { t: ' challenges — I placed ' },
      { t: '2nd', h: true },
      { t: ' in the ' },
      { t: 'Hackathon Intra-HEI', h: true },
      { t: '.' },
    ],
    [
      { t: 'Besides programming, I enjoy ' },
      { t: 'volley-ball', h: true },
      { t: ' and tinkering with ' },
      { t: 'low-level systems', h: true },
      { t: ' (OSdev).' },
    ],
  ],
  funFacts: [
    [
      { t: 'I can speak ' },
      { t: 'Malagasy', h: true },
      { t: ', ' },
      { t: 'French', h: true },
      { t: ', and ' },
      { t: 'English', h: true },
      { t: ' fluently.' },
    ],
    [
      { t: 'I placed ' },
      { t: '2nd', h: true },
      { t: ' in the ' },
      { t: 'Hackathon Intra-HEI', h: true },
      { t: ' (CTF · Algorithme · Dev).' },
    ],
    [
      { t: 'I love ' },
      { t: 'volley-ball', h: true },
      { t: ' and low-level ' },
      { t: 'OSdev', h: true },
      { t: '.' },
    ],
  ],
  neofetch: [
    { label: 'Name', value: 'Nicky Hariniaina' },
    { label: 'Pronouns', value: 'he/him' },
    { label: 'Location', value: 'Antananarivo, Madagascar' },
    { label: 'Education', value: 'HEI Madagascar (L2)' },
    { label: 'Languages', value: 'Java, TypeScript, C/C++' },
    { label: 'Tools', value: 'AWS, Docker, Spring Boot, Next.js' },
    { label: 'Interests', value: 'Web, low-level, OSdev' },
  ],
  palette: ['#e6b5aa', '#eda777', '#d6958a', '#3a3a44'],
}

export type Project = {
  id: string
  title: string
  description: string
  preview?: string
  source?: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'brainfart',
    title: 'Brainfart',
    description:
      'Real-time multiplayer trivia game with AI-powered mock interviews, rooms with live scoring, global leaderboards, and streaming interview sessions across 26 tech roles.',
    preview: 'https://brainfarter.vercel.app',
    source: 'https://github.com/NickyHariniaina/Brainfart',
    tags: ['nextjs', 'react', 'typescript', 'prisma', 'realtime', 'ai'],
  },
]

export const contacts = [
  { label: 'Phone', value: '+261 38 15 840 53', href: 'tel:+261381584053' },
  {
    label: 'E-mail',
    value: 'nickyharini1na@gmail.com',
    href: 'mailto:nickyharini1na@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/NickyHariniaina',
    href: 'https://github.com/NickyHariniaina',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ferrissushi',
    href: 'https://www.linkedin.com/in/ferrissushi',
  },
  {
    label: 'Location',
    value: 'Antananarivo, Madagascar',
    href: 'https://www.google.com/maps/search/Antananarivo,+Madagascar',
  },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/NickyHariniaina' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ferrissushi' },
]
