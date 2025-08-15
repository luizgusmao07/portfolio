import { ExternalLink, Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Section, SectionHeader } from '@/components/shared'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel } from '@/components/ui/carousel'
import { PROJECTS } from '@/constants'
import type { Project } from '@/types'

export function ProjectsSection() {
  const { t } = useTranslation()

  return (
    <Section id="projects" variant="centered">
      <SectionHeader title={t('projects.title')} subtitle={t('projects.subtitle')} />

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation()

  // Use images array if available, otherwise fallback to single image
  const projectImages =
    project.images && project.images.length > 0 ? project.images : [project.image]

  return (
    <Card className="group border-border bg-card border transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
      {/* Project Image/Carousel */}
      <div className="relative p-3">
        <Carousel images={projectImages} alt={t(project.titleKey)} />
        {project.featured && (
          <div className="bg-primary text-primary-foreground absolute top-6 left-6 z-10 rounded px-2 py-1 text-xs font-medium">
            {t('projects.featured')}
          </div>
        )}
      </div>

      <CardContent className="p-6 pt-3">
        {/* Project Title */}
        <h3 className="text-foreground mb-2 text-xl font-semibold">{t(project.titleKey)}</h3>

        {/* Project Description */}
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {t(project.descriptionKey)}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-secondary text-secondary-foreground rounded px-2 py-1 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          {/* GitHub Repositories */}
          {project.githubUrls ? (
            <div className="flex gap-2">
              {project.githubUrls.map((repo, index) => (
                <Button key={index} variant="outline" size="sm" asChild className="flex-1">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    {repo.label}
                  </a>
                </Button>
              ))}
            </div>
          ) : (
            project.githubUrl && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  {t('projects.viewCode')}
                </a>
              </Button>
            )
          )}

          {/* Live Demo */}
          {project.liveUrl && (
            <Button size="sm" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                {t('projects.viewProject')}
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
