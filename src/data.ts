export const site = {
  name: 'Nicky Hariniaina',
  role: 'Backend & Systems Developer',
}

export type Segment = { t: string; h?: boolean; href?: string }

export const about = {
  whoami: [
    [{ t: "Helloooo, I'm Nicky." }],
    [
      { t: 'I build ' },
      { t: 'weird software and systems', h: true },
      { t: ' with ' },
      { t: 'C/C++', h: true },
      { t: '. But I also gained competence in ' },
      { t: 'Java', h: true },
      { t: ', ' },
      { t: 'TypeScript', h: true },
      { t: ' and ' },
      { t: 'Python', h: true },
      { t: ' while studying at ' },
      { t: 'HEI', h: true, href: 'https://hei.school' },
      { t: '.' },
    ],
    [
      { t: "I'm passionate about " },
      { t: 'OSS', h: true },
      { t: '.' },
    ],
    [{ t: 'I like science and history.' }],
  ],
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
  {
    id: 'nopun',
    title: 'nopun',
    description:
      'An interpreted programming language where you cannot use punctuation.',
    preview: 'https://nopunc.vercel.app/',
    source: 'https://github.com/NickyHariniaina/nopun',
    tags: ['c', 'interpreter', 'language'],
  },
  {
    id: 'xtrmv',
    title: 'xtrmv',
    description:
      'A minimalist CLI text editor written in Rust, inspired by Vi.',
    source: 'https://github.com/NickyHariniaina/xtrmv',
    tags: ['rust', 'cli', 'text-editor'],
  },
  {
    id: 'reviewer-web',
    title: 'reviewer-web',
    description:
      'GitHub-style code review UI for AI-generated code, that copies the review so you can paste it into opencode.',
    source: 'https://github.com/NickyHariniaina/reviewer-web',
    tags: ['typescript', 'react', 'ai', 'code-review'],
  },
  {
    id: 'kkkk',
    title: 'kkkk',
    description: 'An x86 kernel (in progress).',
    source: 'https://github.com/NickyHariniaina/kkk',
    tags: ['c', 'osdev', 'x86', 'kernel'],
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
