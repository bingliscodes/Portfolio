import { ArrowDown, FileText, Mail, MapPin } from 'lucide-react'

import { SocialIcon } from '@/components/social-icon'
import { Button } from '@/components/ui/button'
import { site } from '@/data/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative brand-tinted glow behind the hero. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-48 -z-10 flex justify-center blur-3xl"
      >
        <div className="aspect-[1100/600] w-[70rem] bg-gradient-to-tr from-brand/25 to-transparent opacity-40 dark:opacity-30" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 pt-20 pb-16 sm:pt-28">
        <p className="mb-3 text-sm font-medium tracking-widest text-brand uppercase">
          {site.role}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty sm:text-xl">
          {site.tagline}
        </p>

        {site.location ? (
          <p className="mt-5 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" aria-hidden="true" />
            {site.location}
          </p>
        ) : null}

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <a href="#projects">
              View my work
              <ArrowDown />
            </a>
          </Button>
          {site.email ? (
            <Button asChild size="lg" variant="outline">
              <a href={`mailto:${site.email}`}>
                <Mail />
                Get in touch
              </a>
            </Button>
          ) : null}
          {site.resumeUrl ? (
            <Button asChild size="lg" variant="ghost">
              <a href={site.resumeUrl} target="_blank" rel="noreferrer">
                <FileText />
                Resume
              </a>
            </Button>
          ) : null}
        </div>

        <ul className="mt-8 flex flex-wrap items-center gap-1">
          {site.socials.map((social) => (
            <li key={social.platform + social.href}>
              <Button asChild variant="ghost" size="icon">
                <a
                  href={social.href}
                  target={social.platform === 'email' ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  <SocialIcon platform={social.platform} className="size-5" />
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
