import { ExternalLink, Github } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce solution built with React and Spring Boot, featuring user authentication, payment integration, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&q=80',
    technologies: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&q=80',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com/username/taskmanager',
    liveUrl: 'https://taskmanager-demo.com',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description:
      'A responsive weather dashboard that displays current conditions, forecasts, and interactive maps using third-party APIs.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop&q=80',
    technologies: ['React', 'JavaScript', 'REST API', 'Chart.js'],
    githubUrl: 'https://github.com/username/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.com',
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing projects and skills, built with modern web technologies and responsive design.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/username/portfolio',
    liveUrl: 'https://portfolio-demo.com',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="flex min-h-screen items-center justify-center py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            A collection of projects that showcase my skills and passion for creating meaningful
            digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group border-border bg-card overflow-hidden border transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
      {/* Project Image */}
      <div className="bg-muted relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {project.featured && (
          <div className="bg-primary text-primary-foreground absolute top-3 left-3 rounded px-2 py-1 text-xs font-medium">
            Featured
          </div>
        )}
      </div>

      <CardContent className="p-6">
        {/* Project Title */}
        <h3 className="text-foreground mb-2 text-xl font-semibold">{project.title}</h3>

        {/* Project Description */}
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

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
                Code
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
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
