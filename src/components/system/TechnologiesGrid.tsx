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
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const technologies = [
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
    level: 'Intermediate',
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
    level: 'Advanced',
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
    level: 'Intermediate',
    descriptionKey: 'technologies.descriptions.python',
  },
  {
    name: 'Git & GitHub',
    icon: GitBranch,
    category: 'Tools',
    level: 'Advanced',
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
    level: 'Advanced',
    descriptionKey: 'technologies.descriptions.dbdesign',
  },
]

export function TechnologiesGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const { t } = useTranslation()

  const categories = [
    { key: 'technologies.all', value: 'All' },
    { key: 'technologies.backend', value: 'Backend' },
    { key: 'technologies.frontend', value: 'Frontend' },
    { key: 'technologies.database', value: 'Database' },
    { key: 'technologies.devops', value: 'DevOps' },
    { key: 'technologies.tools', value: 'Tools' },
    { key: 'technologies.architecture', value: 'Architecture' },
  ]

  const filteredTechnologies =
    selectedCategory === 'All'
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory)

  return (
    <div className="mx-auto w-full">
      <div className="mb-8 text-center">
        <h2 className="text-foreground mb-3 text-3xl font-bold">{t('skills.title')}</h2>
        <p className="text-muted-foreground text-lg">{t('skills.subtitle')}</p>
      </div>

      {/* Category Filter Buttons */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={selectedCategory === category.value ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category.value)}
            className="transition-all duration-300"
          >
            {t(category.key)}
          </Button>
        ))}
      </div>

      {/* Technologies Grid with Animation */}
      <div className="grid min-h-[400px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTechnologies.map((tech, index) => {
          const Icon = tech.icon
          return (
            <Card
              key={`${tech.name}-${selectedCategory}`}
              className="group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                animation: 'fadeInUp 0.6s ease-out forwards',
              }}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="bg-muted hover:bg-accent rounded-lg p-2 transition-colors">
                      <Icon className="text-muted-foreground group-hover:text-accent-foreground size-5 transition-colors" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-foreground truncate font-semibold">{tech.name}</h3>
                      <span className="bg-secondary text-secondary-foreground rounded-full border px-2 py-1 text-xs font-medium">
                        {t(`technologies.levels.${tech.level.toLowerCase()}`)}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(tech.descriptionKey)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
