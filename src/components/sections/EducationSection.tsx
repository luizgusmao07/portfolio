import { GraduationCap } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { education } from '@/content/education'

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 py-12">
      <div className="mb-8">
        <p className="text-sm font-medium tracking-wider text-purple-600 uppercase dark:text-purple-400">
          Education
        </p>
        <h2 className="mt-2 text-3xl font-bold">Formação acadêmica</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item) => (
          <Card key={item.title}>
            <CardContent className="flex gap-4 pt-6">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                <GraduationCap className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
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
