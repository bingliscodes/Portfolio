import { ArrowUpRight } from 'lucide-react'

import { GithubIcon } from '@/components/brand-icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { Project } from '@/data/types'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group gap-0 transition-all hover:-translate-y-1 hover:shadow-md">
      <CardHeader className="gap-2">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-lg">{project.name}</CardTitle>
          {project.featured ? (
            <Badge variant="secondary" className="shrink-0">
              Featured
            </Badge>
          ) : null}
        </div>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </CardHeader>

      <CardContent className="mt-4 flex-1">
        <ul className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge
                variant="outline"
                className="font-normal text-muted-foreground"
              >
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>

      {project.repoUrl || project.demoUrl ? (
        <CardFooter className="mt-6 gap-2">
          {project.repoUrl ? (
            <Button asChild variant="outline" size="sm">
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                <GithubIcon className="size-4" />
                View on GitHub
              </a>
            </Button>
          ) : null}
          {project.demoUrl ? (
            <Button asChild size="sm">
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                Live demo
                <ArrowUpRight />
              </a>
            </Button>
          ) : null}
        </CardFooter>
      ) : null}
    </Card>
  )
}
