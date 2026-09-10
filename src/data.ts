export const site = {
    name: "Nicky Hariniaina",
    role: "Backend & Systems Developer",
};

export type Segment = { t: string; h?: boolean; href?: string };

export const about = {
    whoami: [
        [{ t: "Helloooo, I'm Nicky." }],
        [
            { t: "I build " },
            { t: "software and systems", h: true },
            { t: " with " },
            { t: "C/C++", h: true },
            { t: ". But I'm also competent in " },
            { t: "Java", h: true },
            { t: ", " },
            { t: "TypeScript", h: true },
            { t: " and " },
            { t: "Python", h: true },
            { t: "." },
        ],
        [
            { t: "I'm passionate about " },
            {
                t: "OSS, history, science, theology, cybersecurity, volleyball, low level programming, and more",
                h: true,
            },
            { t: "." },
        ],
        [
            { t: "Download my CV " },
            {
                t: "here",
                href: "https://docs.google.com/document/d/1sPgXqzp83k2sNdZRWw6PZvB2JYSg2DULb0pE4uk0u2Y/export?format=pdf",
            },
        ],
    ],
};

export type Project = {
    id: string;
    title: string;
    description: string;
    preview?: string;
    source?: string;
    tags: string[];
};

export const projects: Project[] = [
    {
        id: "brainfart",
        title: "Brainfart",
        description:
            "Real-time multiplayer trivia game with AI-powered mock interviews, rooms with live scoring, global leaderboards, and streaming interview sessions across 26 tech roles.",
        preview: "https://brainfarter.vercel.app",
        source: "https://github.com/NickyHariniaina/Brainfart",
        tags: ["nextjs", "react", "typescript", "prisma", "realtime", "ai"],
    },
    {
        id: "nopun",
        title: "nopun",
        description:
            "An interpreted programming language where you cannot use punctuation.",
        preview: "https://nopunc.vercel.app/",
        source: "https://github.com/NickyHariniaina/nopun",
        tags: ["c", "interpreter", "language"],
    },
];

export const contacts = [
    { label: "Phone", value: "+261 38 15 840 53", href: "tel:+261381584053" },
    {
        label: "E-mail",
        value: "nickyharini1na@gmail.com",
        href: "mailto:nickyharini1na@gmail.com",
    },
    {
        label: "GitHub",
        value: "github.com/NickyHariniaina",
        href: "https://github.com/NickyHariniaina",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/ferrissushi",
        href: "https://www.linkedin.com/in/ferrissushi",
    },
    {
        label: "Location",
        value: "Antananarivo, Madagascar",
        href: "https://www.google.com/maps/search/Antananarivo,+Madagascar",
    },
];
