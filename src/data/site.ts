import type { NavItem, Resource, SiteConfig } from './types'

/**
 * Core profile + contact details. Replace the placeholder values below with
 * your own — every component reads from here.
 */
export const site: SiteConfig = {
  name: 'Your Name',
  role: 'Software Engineer',
  tagline:
    'I build thoughtful, fast web applications — from the data model to the last pixel.',
  location: 'San Francisco, CA',
  email: 'you@example.com',
  bio: [
    "I'm a software engineer who enjoys turning fuzzy problems into products people actually like to use. I care about clean architecture, good typing, and interfaces that feel effortless.",
    'Lately I’ve been working with React, TypeScript, and Node — but I’m happy anywhere from the database to the design system. When I’m not shipping, you’ll find me reading, running, or tinkering with side projects.',
  ],
  // The hero and footer render every link in this list. Reorder or remove
  // entries freely; `platform` controls which icon shows.
  socials: [
    {
      platform: 'github',
      label: 'GitHub',
      href: 'https://github.com/your-username',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/your-username',
    },
    {
      platform: 'twitter',
      label: 'X / Twitter',
      href: 'https://twitter.com/your-username',
    },
    {
      platform: 'email',
      label: 'Email',
      href: 'mailto:you@example.com',
    },
  ],
  // Optional: link to a hosted PDF resume. Set to undefined to hide the button.
  resumeUrl: undefined,
}

/** In-page navigation shown in the header. Each href is a section id. */
export const navItems: NavItem[] = [
  { label: 'Projects', href: '#projects' },
  { label: 'Resources', href: '#resources' },
  { label: 'About', href: '#about' },
]

/**
 * Links for the Resources section — your blog and anything else worth sharing.
 */
export const resources: Resource[] = [
  {
    title: 'Blog',
    description:
      'Essays and notes on software, design, and the things I’m learning.',
    href: 'https://blog.example.com',
  },
  {
    title: 'Newsletter',
    description: 'Occasional dispatches — new posts and projects, no spam.',
    href: 'https://example.com/newsletter',
  },
  {
    title: 'Uses',
    description: 'The hardware, apps, and dev tools I rely on every day.',
    href: 'https://example.com/uses',
  },
  {
    title: 'Talks',
    description: 'Slides and recordings from conference and meetup talks.',
    href: 'https://example.com/talks',
  },
]
