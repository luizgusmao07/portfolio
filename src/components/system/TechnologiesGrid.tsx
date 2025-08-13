import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { SectionHeader } from '@/components/shared'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { TECHNOLOGIES, TECHNOLOGY_CATEGORIES } from '@/constants'
import type { TechnologyCategory } from '@/types'

export function TechnologiesGrid() {
  const [selectedCategory, setSelectedCategory] = useState<TechnologyCategory | 'All'>('All')
  const { t } = useTranslation()

  const filteredTechnologies =
    selectedCategory === 'All'
      ? TECHNOLOGIES
      : TECHNOLOGIES.filter((tech) => tech.category === selectedCategory)

  return (
    <div className="mx-auto w-full">
      <SectionHeader title={t('skills.title')} subtitle={t('skills.subtitle')} />

      {/* Category Filter Buttons */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {TECHNOLOGY_CATEGORIES.map((category) => (
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
