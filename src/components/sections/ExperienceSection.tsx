import { BriefcaseBusiness } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { experiences } from '@/content/experiences'

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 py-12">
      <div className="mb-8">
        <p className="text-sm font-medium tracking-wider text-purple-600 uppercase dark:text-purple-400">
          Experience
        </p>
        <h2 className="mt-2 text-3xl font-bold">Experiência profissional</h2>
      </div>

      <div className="space-y-4">
        {experiences.map((experience) => (
          <Card key={`${experience.title}-${experience.period}`}>
            <CardHeader>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-3">
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                    <BriefcaseBusiness className="size-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{experience.title}</CardTitle>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {experience.organization} · {experience.location}
                    </p>
                  </div>
                </div>
                <Badge
                  variant={'current' in experience && experience.current ? 'default' : 'secondary'}
                >
                  {experience.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-7">{experience.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
