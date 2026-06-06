import type { Project } from './types'

/**
 * Add a new project by appending an object to this array.
 * Only `name`, `description`, and `tags` are required — `repoUrl`, `demoUrl`,
 * and `featured` are optional.
 */
export const projects: Project[] = [
  {
    name: 'Lumen',
    description:
      'A personal-finance dashboard that turns raw bank exports into clear budgets, trends, and forecasts. Built around a fast, keyboard-driven UI.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Supabase'],
    repoUrl: 'https://github.com/your-username/lumen',
    demoUrl: 'https://lumen.example.com',
    featured: true,
  },
  {
    name: 'Cadence',
    description:
      'An offline-first habit tracker as an installable PWA. Syncs in the background and works on the subway — your streak follows you everywhere.',
    tags: ['React', 'TypeScript', 'IndexedDB', 'PWA', 'Vite'],
    repoUrl: 'https://github.com/your-username/cadence',
    demoUrl: 'https://cadence.example.com',
    featured: true,
  },
  {
    name: 'Forge',
    description:
      'A batteries-included API starter: typed end-to-end, with auth, rate limiting, migrations, and observability wired up so you can ship on day one.',
    tags: ['Node.js', 'Fastify', 'Prisma', 'PostgreSQL', 'Docker'],
    repoUrl: 'https://github.com/your-username/forge',
  },
]
