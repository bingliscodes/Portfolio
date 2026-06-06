import { ProjectCard } from '@/components/project-card'
import { SectionHeading } from '@/components/section-heading'
import { projects } from '@/data/projects'

export function ProjectsSection() {
  // Featured projects first, otherwise preserve the order in the data file.
  const ordered = [...projects].sort(
    (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false),
  )

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-border/60 py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionHeading
          eyebrow="Work"
          title="Projects"
          description="A selection of things I've designed, built, and shipped."
          className="mb-10"
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {ordered.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
