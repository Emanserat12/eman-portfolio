const env = import.meta.env

export const profile = {
  name: env.VITE_PROFILE_NAME,
  role: 'Full-stack software engineer',
  email: env.VITE_CONTACT_EMAIL,
  whatsapp: env.VITE_WHATSAPP_URL,
  phoneDisplay: env.VITE_PHONE_DISPLAY,
  linkedin: env.VITE_LINKEDIN_URL,
  linkedinDisplay: env.VITE_LINKEDIN_DISPLAY,
  github: env.VITE_GITHUB_URL,
  githubDisplay: env.VITE_GITHUB_DISPLAY,
  cvUrl: null as string | null,
  calUrl: null as string | null,
  availability: 'Available for new projects',
  yearsExperience: '3+',
}

export const hero = {
  headline: 'I build web applications from the database up.',
  intro:
    'For 3+ years I’ve shipped legal platforms, AI voice and chat agents, e-commerce and real-time systems. I take products from first schema to production, on my own or alongside your team.',
}

export const proof = [
  {
    title: 'Legal platforms',
    body: 'Case and practice management for law firms, secured with multi-factor authentication.',
  },
  {
    title: 'Python backends',
    body: 'Django, DRF and FastAPI services with Celery workers and PostgreSQL, built to scale.',
  },
  {
    title: 'Angular and React',
    body: 'Fast, modular frontends with predictable state across large applications.',
  },
  {
    title: 'AI agents',
    body: 'Voice and chat agents that capture leads and push structured data into CRMs.',
  },
]

export const categories = ['All', 'Legal tech', 'AI', 'E-commerce', 'Real-time'] as const
export type Category = (typeof categories)[number]

// Options for the project inquiry form. Edit freely.
export const inquiry = {
  types: ['New web application', 'API or backend', 'AI voice or chat agent', 'Work on existing code'],
  budgets: ['Under $2k', '$2k – $5k', '$5k – $10k', '$10k+'],
}

export type Project = {
  slug: string
  title: string
  builtFor: string
  sector: string
  role: string
  summary: string
  built: string[]
  stack: string[]
  categories: Category[]
}

export const projects: Project[] = [
  {
    slug: 'ordo',
    title: 'ORDO',
    builtFor: 'Law firms',
    sector: 'Legal operations platform',
    role: 'Full-stack engineer',
    summary:
      'One workspace for law practices that brings case and practice management, legal CRM, accounting and client communication together, from the first inquiry to the next matter.',
    built: [
      'Multi-factor authentication protecting confidential client and case data',
      'Click-to-call, SMS and email client communication through Twilio',
      'Dynamic fields and forms that each firm configures for its own matters',
      'Sales and lead analytics dashboard with charts',
    ],
    stack: ['Django', 'Angular', 'PostgreSQL', 'Twilio'],
    categories: ['Legal tech'],
  },
  {
    slug: 'caseforge',
    title: 'CaseForge',
    builtFor: 'Litigation lawyers',
    sector: 'Legal intelligence',
    role: 'Engineer',
    summary:
      'A research tool that analyses case documents and evidence and connects them to relevant Canadian and US judgments.',
    built: [
      'Evidence analysis that surfaces material facts and issues from case documents',
      'Precedent discovery across Canadian and US judgment sources',
      'Automated case-document workflow that keeps files organised',
    ],
    stack: [],
    categories: ['Legal tech', 'AI'],
  },
  {
    slug: 'dialmind',
    title: 'DialMind',
    builtFor: 'Businesses that run on calls',
    sector: 'AI voice agents',
    role: 'Engineer',
    summary:
      'Inbound and outbound AI voice agents that answer calls, qualify leads and handle routine support, then pass structured details to the business’s CRM.',
    built: [
      'Voice agents for lead capture, qualification and automated support',
      'Structured call details sent to CRMs or custom webhooks',
      'Call recordings and conversation analysis for follow-up',
      'Escalation that hands the call context to a person when needed',
    ],
    stack: [],
    categories: ['AI'],
  },
  {
    slug: 'revoo',
    title: 'revoo',
    builtFor: 'Business websites',
    sector: 'AI chatbot agents',
    role: 'Engineer',
    summary:
      'Website chat agents that turn visitor questions into captured leads and answered support requests, with a clean handoff to the team.',
    built: [
      'Chat agents for lead capture and automated support',
      'Captured details sent to CRMs or custom webhooks',
      'Handoff to a team member with the full conversation attached',
    ],
    stack: [],
    categories: ['AI'],
  },
  {
    slug: 'get-the-fit',
    title: 'Get The Fit',
    builtFor: 'Fashion retail',
    sector: 'AI-powered online store',
    role: 'Full-stack engineer',
    summary:
      'An online fashion store that recommends outfits from each shopper’s preferences and the clothes they already own.',
    built: [
      'Outfit recommendations based on preferences and uploaded closet photos',
      'Stripe checkout and secure payments',
      'ETL pipelines that feed product recommendations and trend tracking',
      'Real-time notifications for shoppers',
    ],
    stack: ['Python', 'FastAPI', 'React', 'Stripe'],
    categories: ['E-commerce', 'AI'],
  },
  {
    slug: 'zero-carbon',
    title: 'Zero Carbon',
    builtFor: 'Renewable energy',
    sector: 'Energy tracking platform',
    role: 'Full-stack engineer',
    summary:
      'A platform that helps businesses track their energy use precisely and work down their carbon footprint, with a built-in support desk.',
    built: [
      'Energy tracking for each business on the platform',
      'Support tickets with real-time chat between creators, assignees and superusers over WebSockets',
    ],
    stack: ['Django REST Framework', 'Angular', 'WebSockets'],
    categories: ['Real-time'],
  },
]

export const services = [
  {
    title: 'Full web applications',
    body: 'MVPs, client portals and internal tools built end to end: database design, REST API and the Angular or React frontend, deployed and running.',
  },
  {
    title: 'APIs and backend systems',
    body: 'Django, DRF, FastAPI and Flask services, background jobs with Celery, and integrations such as Stripe payments and Twilio calling.',
  },
  {
    title: 'Search',
    body: 'OpenSearch indexing and full-text search with filters, so people find records, products or documents in your app quickly.',
  },
  {
    title: 'Dashboards, CRMs and admin tools',
    body: 'The software your team uses every day: lead pipelines, practice management tools, analytics dashboards and configurable forms.',
  },
  {
    title: 'Work on an existing codebase',
    body: 'New features, bug fixes and clean-up on Django or Angular projects that need an engineer who can get productive quickly.',
  },
]

export const process = [
  {
    title: 'Introductory call',
    body: 'We talk through what you need, who it is for and what already exists. You leave with my honest view of how I would approach it.',
  },
  {
    title: 'Written proposal',
    body: 'Scope, milestones, timeline and price in writing before any work starts, so you know exactly what you are paying for.',
  },
  {
    title: 'Build in milestones',
    body: 'You see working software at every milestone, and the code lives in your repository from the first day.',
  },
  {
    title: 'Launch and handover',
    body: 'Deployment, documentation for whoever maintains it next, and a support period agreed in the proposal.',
  },
]

export const stack = [
  {
    group: 'Backend',
    items: ['Python', 'Django', 'Django REST Framework', 'FastAPI', 'Flask', 'Celery'],
    note: 'REST APIs with clear contracts, slow work moved to background tasks, and schemas designed before code.',
  },
  {
    group: 'Frontend',
    items: ['Angular', 'TypeScript', 'RxJS Observables', 'React'],
    note: 'Modular components, predictable state with Observables, and routing that keeps large apps organised.',
  },
  {
    group: 'Data and search',
    items: ['PostgreSQL', 'OpenSearch', 'ETL pipelines'],
    note: 'Database schemas tuned for the queries the app actually runs, and search indexes that stay in sync.',
  },
  {
    group: 'Integrations',
    items: ['Stripe', 'Twilio', 'WebSockets', 'Git'],
    note: 'Payments, calling and real-time features wired into the product rather than bolted on.',
  },
]

export const experience = [
  {
    company: 'Khudi Ventures',
    title: 'Software Engineer',
    period: 'Jul 2025 – Present',
    points: [
      'Develop and maintain backend services in Flask and FastAPI.',
      'Implement OpenSearch for fast data indexing and search.',
      'Work with cross-functional teams to ship scalable, high-performance features.',
    ],
  },
  {
    company: 'Tower Tech',
    title: 'Associate Software Engineer',
    period: 'Jul 2023 – Jul 2025',
    points: [
      'Built RESTful APIs with Python, Django and Django REST Framework.',
      'Moved long-running work to Celery tasks to keep the apps responsive under load.',
      'Designed PostgreSQL schemas optimised for the application’s queries.',
      'Built modular Angular components with Observables-based state and routing, and connected them to the backend APIs.',
    ],
  },
  {
    company: 'Enigmatix Pvt Ltd',
    title: 'Angular Frontend Developer',
    period: 'Apr 2023 – Jul 2023',
    points: [
      'Developed and optimised interactive Angular interfaces.',
      'Managed application state with Observables.',
    ],
  },
]
