import { Mail } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { site } from '@/data/site'

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border/60 py-20 sm:py-24"
    >
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <SectionHeading eyebrow="About" title="A bit about me" />
        </div>
        <div className="md:col-span-2">
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {site.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          {site.email ? (
            <div className="mt-8">
              <Button asChild>
                <a href={`mailto:${site.email}`}>
                  <Mail />
                  {site.email}
                </a>
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
