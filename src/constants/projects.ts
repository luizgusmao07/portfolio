import type { Project } from '@/types'

export const PROJECTS: Project[] = [
  {
    id: '1',
    titleKey: 'projectsData.weunite.title',
    descriptionKey: 'projectsData.weunite.description',
    image: '/1752088655016.jpg',
    images: ['/1752088655016.jpg'],
    technologies: ['Java', 'Spring Boot', 'Docker', 'React', 'TypeScript', 'PostgreSQL'],
    githubUrls: [
      { label: 'Frontend', url: 'https://github.com/luizgusmao07/weunite-frontend' },
      { label: 'Backend', url: 'https://github.com/mathessoliv/weunite-backend' },
    ],
    featured: true,
  },
]
