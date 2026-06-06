import { SocialIcon } from '@/components/social-icon'
import { site } from '@/data/site'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Built with React, TypeScript, Tailwind CSS, and shadcn/ui.
          </p>
        </div>

        <ul className="flex items-center gap-1">
          {site.socials.map((social) => (
            <li key={social.platform + social.href}>
              <a
                href={social.href}
                target={social.platform === 'email' ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={social.label}
                title={social.label}
                className="grid size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                <SocialIcon platform={social.platform} className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
