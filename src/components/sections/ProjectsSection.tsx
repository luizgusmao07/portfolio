import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { projects } from '@/content/projects'

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-12">
      <div className="mb-8">
        <p className="text-sm font-medium tracking-wider text-purple-600 uppercase dark:text-purple-400">
          Projects
        </p>
        <h2 className="mt-2 text-3xl font-bold">Projetos em destaque</h2>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <Card key={project.name}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-7">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
