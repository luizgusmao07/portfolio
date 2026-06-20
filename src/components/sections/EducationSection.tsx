import { GraduationCap } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import type { Language } from '@/content/site'
import { education, siteContent } from '@/content/site'

type SectionProps = {
  language: Language
}

export function EducationSection({ language }: SectionProps) {
  const content = siteContent[language].education

  return (
    <section id="education" className="scroll-mt-24 py-14">
      <div className="mb-8">
        <p className="text-sm font-medium tracking-wider text-purple-600 uppercase dark:text-purple-400">
          {content.label}
        </p>
        <h2 className="mt-2 text-3xl font-bold">{content.title}</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item) => (
          <Card key={item.organization} className="bg-card/70 backdrop-blur">
            <CardContent className="flex gap-4 pt-6">
              <div className="bg-background flex size-10 shrink-0 items-center justify-center rounded-full border text-purple-700 dark:text-purple-300">
                <GraduationCap className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold">{item.title[language]}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{item.organization}</p>
                <p className="mt-2 text-sm text-purple-700 dark:text-purple-300">{item.period}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
