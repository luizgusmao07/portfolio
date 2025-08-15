import React from 'react'
import { useTranslation } from 'react-i18next'

import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface TimelinePoint {
  id: string
  position: {
    point: string
    content: string
  }
  animationDelay: string
}

interface ExperienceData {
  date: string
  title: string
  company?: string
  course?: string
  institution?: string
  type?: string
  description: string
  achievements?: string[]
  technologies?: string[]
}

export function JourneyTimeline() {
  const { t } = useTranslation()

  const timelinePoints: TimelinePoint[] = [
    {
      id: 'current',
      position: {
        point: 'absolute top-8 left-1/2 z-10 -translate-x-1/2 transform',
        content: 'absolute top-4 right-8 max-w-xs text-right',
      },
      animationDelay: '0.7s',
    },
    {
      id: 'education',
      position: {
        point: 'absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform',
        content: 'absolute top-1/2 left-8 max-w-xs -translate-y-1/2 transform text-left',
      },
      animationDelay: '1.2s',
    },
    {
      id: 'foundation',
      position: {
        point: 'absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform',
        content: 'absolute right-8 bottom-4 max-w-xs text-right',
      },
      animationDelay: '1.8s',
    },
  ]

  const renderExperienceDialog = (experienceId: string) => {
    const experience = t(`timeline.${experienceId}`, { returnObjects: true }) as ExperienceData

    return (
      <Dialog>
        <DialogTrigger asChild>
          <button
            type="button"
            className="group relative cursor-pointer rounded-full border-none bg-transparent p-0 focus:ring-2 focus:ring-purple-400 focus:ring-offset-0 focus:outline-none"
            aria-label={`View details for ${experience.title}`}
          >
            <div className="floating-dot relative transition-all duration-300 group-hover:scale-125">
              {/* Main dot */}
              <div className="relative size-4 rounded-full bg-purple-500 shadow-lg ring-4 shadow-purple-500/25 ring-purple-100 transition-all duration-300 group-hover:bg-purple-400 group-hover:shadow-purple-400/50 group-hover:ring-purple-200 dark:ring-purple-900 dark:group-hover:ring-purple-800" />

              {/* Current position indicator */}
              {experienceId === 'current' && (
                <div className="absolute inset-0 size-4 animate-ping rounded-full bg-purple-500 opacity-20" />
              )}

              {/* Hover expansion ring */}
              <div className="absolute inset-0 size-4 scale-100 rounded-full bg-purple-500 opacity-0 transition-all duration-500 group-hover:scale-200 group-hover:opacity-15" />

              {/* Minimalist "click me" indicator - only on first point */}
              {experienceId === 'current' && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="animate-pulse rounded-full border border-purple-200/40 px-2 py-1 text-xs font-medium text-purple-500/70 shadow-sm transition-colors duration-300 group-hover:border-purple-300/60 group-hover:text-purple-600 dark:border-purple-700/40 dark:text-purple-400/70 dark:group-hover:border-purple-600/60 dark:group-hover:text-purple-300">
                    {t('common.clickMe')}
                  </span>
                </div>
              )}
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <div className="flex flex-col gap-2">
              <Badge variant="secondary" className="w-fit">
                {experience.date}
              </Badge>
              <DialogTitle className="text-xl font-bold">{experience.title}</DialogTitle>
              {experience.company && (
                <p className="text-muted-foreground text-lg font-medium">{experience.company}</p>
              )}
              {experience.course && (
                <p className="text-muted-foreground text-lg font-medium">{experience.course}</p>
              )}
              {experience.institution && (
                <p className="text-muted-foreground text-sm">{experience.institution}</p>
              )}
              {experience.type && (
                <p className="text-muted-foreground text-sm">{experience.type}</p>
              )}
            </div>
          </DialogHeader>

          <div className="space-y-4">
            <DialogDescription className="text-base leading-relaxed">
              {experience.description}
            </DialogDescription>

            {experience.achievements && experience.achievements.length > 0 && (
              <div>
                <h4 className="text-foreground mb-3 text-sm font-semibold">Key Achievements</h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement: string, index: number) => (
                    <li
                      key={index}
                      className="text-muted-foreground flex items-start gap-2 text-sm"
                    >
                      <div className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-purple-500" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {experience.technologies && experience.technologies.length > 0 && (
              <div>
                <h4 className="text-foreground mb-3 text-sm font-semibold">
                  Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech: string, index: number) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <div className="space-y-8">
      <div className="relative mx-auto h-80 max-w-3xl">
        {/* Curved Path SVG */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 400 320"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M 200 40 Q 120 100 200 160 Q 280 220 200 280"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
            className="timeline-path drop-shadow-sm"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(168 85 247)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="rgb(147 51 234)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(126 34 206)" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Journey Points positioned on the curve */}
        {timelinePoints.map((point) => (
          <React.Fragment key={point.id}>
            {/* Clickable Point */}
            <div
              className={`timeline-point ${point.position.point} pointer-events-auto opacity-0`}
              style={{ animationDelay: point.animationDelay, zIndex: 20 }}
            >
              {renderExperienceDialog(point.id)}
            </div>

            {/* Content Preview */}
            <div
              className={`timeline-point ${point.position.content} pointer-events-none opacity-0`}
              style={{ animationDelay: `calc(${point.animationDelay} + 0.2s)` }}
            >
              <span className="mb-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                {t(`timeline.${point.id}.date`)}
              </span>
              <h4 className="text-foreground text-lg font-semibold">
                {t(`timeline.${point.id}.title`)}
              </h4>
              <p className="text-muted-foreground text-sm">
                {t(`timeline.${point.id}.company`, '') || t(`timeline.${point.id}.course`, '')}
              </p>
              <p className="text-muted-foreground text-xs opacity-75">
                {t(`timeline.${point.id}.type`, '') || t(`timeline.${point.id}.institution`, '')}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
