export type Project = {
  name: string
  kind: string
  summary: string
  tags: string[]
  image: string
  live?: string
  code?: string
  note?: string
}

export const projects: Project[] = [
  {
    name: 'Chupnow',
    kind: 'Food delivery PWA',
    summary:
      'A multi-vendor ordering app for independent kitchens. Customers build an order with proteins and extras, then follow it to the door. Customer, vendor and admin surfaces share one typed store.',
    tags: ['React 19', 'TypeScript', 'Zustand', 'Tailwind', 'PWA'],
    image: '/work/chupnow.png',
    live: 'https://fds-fe-lac.vercel.app',
    code: 'https://github.com/izzychils/fds-fe',
  },
  {
    name: 'Oga Plug',
    kind: 'Business OS for SMEs',
    summary:
      'Owners log sales through WhatsApp voice notes, receipt photos or text, and the dashboard turns that into clean books, credit readiness and theft signals. I built the web surface and dashboard UI.',
    tags: ['React 19', 'TypeScript', 'Tailwind', 'Framer Motion'],
    image: '/work/oga-plug.png',
    live: 'https://oga-plug.vercel.app',
    code: 'https://github.com/izzychils/oga-plug',
  },
  {
    name: 'People Growth Africa',
    kind: 'HR consultancy platform',
    summary:
      'The public site and client flows for an HR consultancy: JWT sessions, a Postgres lead pipeline, rate limited endpoints and transactional email, all serverless on Vercel.',
    tags: ['React', 'Neon Postgres', 'Upstash', 'Resend', 'Vercel'],
    image: '/work/people-growth-africa.png',
    live: 'https://www.peoplegrowthafrica.com',
    note: 'Client work, private repo',
  },
  {
    name: 'Onboard',
    kind: 'Onboarding portal',
    summary:
      'A first-90-days portal for new hires: role aware dashboards, animated progress rings, document checklists and a manager view that shows exactly who is stuck where.',
    tags: ['React', 'TypeScript', 'React Router', 'Framer Motion'],
    image: '/work/onboard.png',
    live: 'https://tms-fe-snowy.vercel.app',
    code: 'https://github.com/izzychils/tms-fe',
  },
]

export type Extra = {
  name: string
  line: string
  stack: string
  link: string
  linkLabel: string
}

export const extras: Extra[] = [
  {
    name: 'Glitter Mic',
    line: 'Multiplayer karaoke with real time voice scoring, word by word lyrics and Redis backed rooms.',
    stack: 'React, TypeScript, Node, Deepgram, Redis',
    link: 'https://github.com/izzychils/glitter-mic',
    linkLabel: 'Code',
  },
  {
    name: 'Shopperly',
    line: 'Marketing site for an AI website builder, built around scroll driven motion and a fluid layout.',
    stack: 'React, TypeScript, Framer Motion',
    link: 'https://shopperly-fe.vercel.app',
    linkLabel: 'Live demo',
  },
  {
    name: 'Iventverse',
    line: 'Event platform for parties, weddings and conferences with Paystack checkout and an admin console.',
    stack: 'Next.js, TanStack Query, Paystack, PWA',
    link: 'https://iventverse.com',
    linkLabel: 'Live demo',
  },
  {
    name: 'AI CV Generator',
    line: 'AI resume builder with chat driven intake, auth flows, API integration and an admin dashboard.',
    stack: 'React, TypeScript, FastAPI',
    link: 'https://ai-cv-generator-fe-1.onrender.com',
    linkLabel: 'Live demo',
  },
  {
    name: 'AI Resume Screener',
    line: 'Screening tool that scores candidate profiles against a role brief and surfaces the best matches.',
    stack: 'JavaScript, REST APIs, SQL',
    link: 'https://github.com/izzychils/resume-screener',
    linkLabel: 'Code',
  },
]

export const experience = [
  {
    role: 'Technology & Systems Associate',
    org: 'People Growth Africa',
    period: 'Jul 2026 to present',
    place: 'Remote',
    points: [
      'Build the web applications, APIs and internal tools the company runs on.',
      'Ship new systems across the stack, from interface to schema to deployment.',
    ],
  },
  {
    role: 'Intern, Software Development',
    org: 'Roothub Accelerator Systems',
    period: 'Jan 2025 to Jun 2025',
    place: 'Akwa Ibom, Nigeria',
    points: [
      'Built and deployed web applications while working through JavaScript, React and Python.',
      'Integrated APIs, built responsive interfaces and worked in a Git based team workflow.',
    ],
  },
  {
    role: 'BSc Software Engineering',
    org: 'Babcock University',
    period: '2022 to 2026',
    place: 'Ogun, Nigeria',
    points: ['Focused on software design, data structures, databases and systems work.'],
  },
]

export const stack = [
  {
    group: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'Framer Motion'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'FastAPI', 'Django', 'REST APIs', 'Auth flows'],
  },
  {
    group: 'Data',
    items: ['MySQL', 'PostgreSQL', 'SQLite', 'Redis', 'Schema design'],
  },
  {
    group: 'Tooling',
    items: ['Git', 'GitHub', 'Docker', 'Vercel', 'Render', 'Postman', 'Figma'],
  },
]

export const socials = {
  email: 'israeliraoya7@gmail.com',
  github: 'https://github.com/izzychils',
  linkedin: 'https://www.linkedin.com/in/israel-iraoya-a556a9316',
}
