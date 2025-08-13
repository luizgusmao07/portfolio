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

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const technologies = [
  {
    name: 'Java',
    icon: Coffee,
    category: 'Backend',
    level: 'Advanced',
    description: 'Enterprise applications, Spring ecosystem',
  },
  {
    name: 'Spring Framework',
    icon: Code,
    category: 'Backend',
    level: 'Advanced',
    description: 'Boot, Security, Data JPA',
  },
  {
    name: 'React',
    icon: Palette,
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Modern UI development, hooks, context',
  },
  {
    name: 'TypeScript',
    icon: Code,
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Type-safe JavaScript development',
  },
  {
    name: 'SQL Databases',
    icon: Table,
    category: 'Database',
    level: 'Advanced',
    description: 'PostgreSQL, MySQL, complex queries',
  },
  {
    name: 'NoSQL',
    icon: FileJson,
    category: 'Database',
    level: 'Intermediate',
    description: 'MongoDB, document-oriented databases',
  },
  {
    name: 'Python',
    icon: Code,
    category: 'Backend',
    level: 'Intermediate',
    description: 'Automation, data processing, APIs',
  },
  {
    name: 'Git & GitHub',
    icon: GitBranch,
    category: 'Tools',
    level: 'Advanced',
    description: 'Version control, collaborative development',
  },
  {
    name: 'REST APIs',
    icon: Globe,
    category: 'Backend',
    level: 'Advanced',
    description: 'RESTful services, API design',
  },
  {
    name: 'Docker',
    icon: Layers,
    category: 'DevOps',
    level: 'Intermediate',
    description: 'Containerization, microservices',
  },
  {
    name: 'System Design',
    icon: Settings,
    category: 'Architecture',
    level: 'Intermediate',
    description: 'Scalable applications, design patterns',
  },
  {
    name: 'Database Design',
    icon: Database,
    category: 'Database',
    level: 'Advanced',
    description: 'Normalization, optimization, indexing',
  },
]

const categories = ['All', 'Backend', 'Frontend', 'Database', 'DevOps', 'Tools', 'Architecture']

export function TechnologiesGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredTechnologies =
    selectedCategory === 'All'
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory)

  return (
    <div className="mx-auto w-full">
      <div className="mb-8 text-center">
        <h2 className="text-foreground mb-3 text-3xl font-bold">Technologies & Skills</h2>
        <p className="text-muted-foreground text-lg">
          A comprehensive overview of my technical expertise
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="transition-all duration-300"
          >
            {category}
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
                        {tech.level}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {tech.description}
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
