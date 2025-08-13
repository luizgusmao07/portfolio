import type { Project } from '@/types'

export const PROJECTS: Project[] = [
  {
    id: '1',
    titleKey: 'projectsData.ecommerce.title',
    descriptionKey: 'projectsData.ecommerce.description',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&q=80',
    technologies: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true,
  },
  {
    id: '2',
    titleKey: 'projectsData.taskmanager.title',
    descriptionKey: 'projectsData.taskmanager.description',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&q=80',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com/username/taskmanager',
    liveUrl: 'https://taskmanager-demo.com',
  },
  {
    id: '3',
    titleKey: 'projectsData.weather.title',
    descriptionKey: 'projectsData.weather.description',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop&q=80',
    technologies: ['React', 'JavaScript', 'REST API', 'Chart.js'],
    githubUrl: 'https://github.com/username/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.com',
  },
  {
    id: '4',
    titleKey: 'projectsData.portfolio.title',
    descriptionKey: 'projectsData.portfolio.description',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/username/portfolio',
    liveUrl: 'https://portfolio-demo.com',
  },
]
