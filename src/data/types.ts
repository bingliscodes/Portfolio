/**
 * Shared types for all site content.
 *
 * Edit the data in `projects.ts` and `site.ts` — the components read from
 * these typed structures, so you never need to touch component code to add
 * or change content.
 */

export type SocialPlatform =
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'bluesky'
  | 'email'
  | 'website'

export interface SocialLink {
  /** Determines which icon is rendered. */
  platform: SocialPlatform
  /** Accessible label, e.g. "GitHub" or "Email". */
  label: string
  /** Full URL. For email use a `mailto:` link. */
  href: string
}

export interface Project {
  /** Display name of the project. */
  name: string
  /** One or two sentence summary. */
  description: string
  /** Tech stack / topic tags rendered as badges. */
  tags: string[]
  /** Link to the source code. Omit to hide the "View on GitHub" button. */
  repoUrl?: string
  /** Optional link to a live deployment. */
  demoUrl?: string
  /** Featured projects are visually highlighted and sorted first. */
  featured?: boolean
}

export interface Resource {
  /** Short title for the link. */
  title: string
  /** One-line description of what's behind the link. */
  description: string
  /** Destination URL. */
  href: string
}

export interface NavItem {
  label: string
  /** In-page anchor, e.g. "#projects". */
  href: string
}

export interface SiteConfig {
  /** Your name, shown in the hero and header. */
  name: string
  /** Short role, e.g. "Software Engineer". */
  role: string
  /** Hero tagline — a sentence about what you do. */
  tagline: string
  /** Optional location, shown near the hero. */
  location?: string
  /** Contact email (without the `mailto:` prefix). */
  email: string
  /** Bio paragraphs for the About section. */
  bio: string[]
  /** Social / contact links shown in the hero and footer. */
  socials: SocialLink[]
  /** Optional link to a hosted resume/CV (PDF). */
  resumeUrl?: string
}
