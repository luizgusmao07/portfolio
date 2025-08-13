import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { SectionHeader } from '@/components/shared'
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
    <div className="mx-auto w-full max-w-5xl">
      <SectionHeader title={t('skills.title')} subtitle={t('skills.subtitle')} />

      {/* Category Filter Pills - Consistent Design */}
      <div className="mb-16 flex flex-wrap justify-center gap-2">
        {TECHNOLOGY_CATEGORIES.map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
              selectedCategory === category.value
                ? 'bg-purple-600 text-white shadow-sm hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-400'
                : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            {t(category.key)}
          </button>
        ))}
      </div>

      {/* Technologies Grid - Flat Design */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredTechnologies.map((tech, index) => {
          const Icon = tech.icon
          return (
            <div
              key={`${tech.name}-${selectedCategory}`}
              className="group relative h-48"
              style={{
                animationDelay: `${index * 0.05}s`,
                opacity: 0,
                animation: 'fadeInUp 0.4s ease-out forwards',
              }}
            >
              <div className="bg-card dark:border-border relative h-full overflow-hidden rounded-xl border p-5 transition-all duration-300 hover:shadow-md hover:shadow-black/5">
                {/* Purple accent dot */}
                <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-purple-600/40 transition-all duration-300 group-hover:scale-125 group-hover:bg-purple-600 dark:bg-purple-400/40 dark:group-hover:bg-purple-400" />

                <div className="relative flex h-full flex-col items-center justify-center text-center">
                  {/* Icon */}
                  <div className="mb-3 flex items-center justify-center">
                    <div className="bg-muted rounded-lg p-3 transition-all duration-300 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20">
                      <Icon className="size-6 text-purple-600 transition-colors duration-300 dark:text-purple-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-center">
                    <h3 className="text-foreground mb-2 text-base font-semibold">{tech.name}</h3>
                    <div className="mb-2 flex justify-center">
                      <span className="bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-xs font-medium">
                        {t(`technologies.levels.${tech.level.toLowerCase()}`)}
                      </span>
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">
                      {t(tech.descriptionKey)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
