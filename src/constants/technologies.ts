import {
  Code,
  Coffee,
  Database,
  FileJson,
  GitBranch,
  Globe,
  Layers,
  Palette,
  Settings,
  Table,
} from 'lucide-react'

import type { Technology, TechnologyCategory } from '@/types'

export const TECHNOLOGIES: Technology[] = [
  {
    name: 'Java',
    icon: Coffee,
    category: 'Backend',
    level: 'Advanced',
    descriptionKey: 'technologies.descriptions.java',
  },
  {
    name: 'Spring Framework',
    icon: Code,
    category: 'Backend',
    level: 'Advanced',
    descriptionKey: 'technologies.descriptions.spring',
  },
  {
    name: 'React',
    icon: Palette,
    category: 'Frontend',
    level: 'Advanced',
    descriptionKey: 'technologies.descriptions.react',
  },
  {
    name: 'TypeScript',
    icon: Code,
    category: 'Frontend',
    level: 'Intermediate',
    descriptionKey: 'technologies.descriptions.typescript',
  },
  {
    name: 'SQL Databases',
    icon: Table,
    category: 'Database',
    level: 'Intermediate',
    descriptionKey: 'technologies.descriptions.sql',
  },
  {
    name: 'NoSQL',
    icon: FileJson,
    category: 'Database',
    level: 'Intermediate',
    descriptionKey: 'technologies.descriptions.nosql',
  },
  {
    name: 'Python',
    icon: Code,
    category: 'Backend',
    level: 'Beginner',
    descriptionKey: 'technologies.descriptions.python',
  },
  {
    name: 'Git & GitHub',
    icon: GitBranch,
    category: 'Tools',
    level: 'Intermediate',
    descriptionKey: 'technologies.descriptions.git',
  },
  {
    name: 'REST APIs',
    icon: Globe,
    category: 'Backend',
    level: 'Advanced',
    descriptionKey: 'technologies.descriptions.rest',
  },
  {
    name: 'Docker',
    icon: Layers,
    category: 'DevOps',
    level: 'Intermediate',
    descriptionKey: 'technologies.descriptions.docker',
  },
  {
    name: 'System Design',
    icon: Settings,
    category: 'Architecture',
    level: 'Intermediate',
    descriptionKey: 'technologies.descriptions.system',
  },
  {
    name: 'Database Design',
    icon: Database,
    category: 'Database',
    level: 'Intermediate',
    descriptionKey: 'technologies.descriptions.dbdesign',
  },
]

export const TECHNOLOGY_CATEGORIES: Array<{ key: string; value: TechnologyCategory | 'All' }> = [
  { key: 'technologies.all', value: 'All' },
  { key: 'technologies.backend', value: 'Backend' },
  { key: 'technologies.frontend', value: 'Frontend' },
  { key: 'technologies.database', value: 'Database' },
  { key: 'technologies.devops', value: 'DevOps' },
  { key: 'technologies.tools', value: 'Tools' },
  { key: 'technologies.architecture', value: 'Architecture' },
]
