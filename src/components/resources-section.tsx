import { ArrowUpRight } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { resources } from '@/data/site'

export function ResourcesSection() {
  return (
    <section
      id="resources"
      className="scroll-mt-20 border-t border-border/60 py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionHeading
          eyebrow="Elsewhere"
          title="Resources"
          description="My blog and other places worth a click."
          className="mb-10"
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          {resources.map((resource) => (
            <li key={resource.href}>
              <a
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full items-start justify-between gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-brand/50 hover:bg-accent"
              >
                <div>
                  <h3 className="font-medium">{resource.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                </div>
                <ArrowUpRight
                  className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
