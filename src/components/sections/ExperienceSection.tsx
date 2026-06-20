import { BriefcaseBusiness } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import type { Language } from '@/content/site'
import { experiences, siteContent } from '@/content/site'

type SectionProps = {
  language: Language
}

export function ExperienceSection({ language }: SectionProps) {
  const content = siteContent[language].experience

  return (
    <section id="experience" className="scroll-mt-24 py-14">
      <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium tracking-wider text-purple-600 uppercase dark:text-purple-400">
            {content.label}
          </p>
          <h2 className="mt-2 text-3xl font-bold">{content.title}</h2>
        </div>
      </div>

      <div className="before:bg-border relative space-y-4 before:absolute before:top-4 before:bottom-4 before:left-5 before:w-px sm:before:left-6">
        {experiences.map((experience) => (
          <Card
            key={`${experience.title}-${experience.period}`}
            className="bg-card/70 backdrop-blur"
          >
            <CardContent className="relative flex gap-4 pt-6">
              <div className="bg-background z-10 flex size-10 shrink-0 items-center justify-center rounded-full border text-purple-700 sm:size-12 dark:text-purple-300">
                <BriefcaseBusiness className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{experience.title}</h3>
                    <p className="text-muted-foreground text-sm">{experience.organization}</p>
                  </div>
                  <Badge
                    variant={
                      'current' in experience && experience.current ? 'default' : 'secondary'
                    }
                  >
                    {experience.period}
                  </Badge>
                </div>
                <p className="text-muted-foreground mt-4 leading-7">
                  {experience.description[language]}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
