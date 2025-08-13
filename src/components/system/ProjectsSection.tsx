import { ExternalLink, Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Section, SectionHeader } from '@/components/shared'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
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

  return (
    <Card className="group border-border bg-card overflow-hidden border transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
      {/* Project Image */}
      <div className="bg-muted relative overflow-hidden">
        <img
          src={project.image}
          alt={t(project.titleKey)}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {project.featured && (
          <div className="bg-primary text-primary-foreground absolute top-3 left-3 rounded px-2 py-1 text-xs font-medium">
            {t('projects.featured')}
          </div>
        )}
      </div>

      <CardContent className="p-6">
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
        <div className="flex gap-3">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild className="flex-1">
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
          )}
          {project.liveUrl && (
            <Button size="sm" asChild className="flex-1">
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
