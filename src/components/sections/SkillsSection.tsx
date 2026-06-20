import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import type { Language } from '@/content/site'
import { siteContent, skillGroups } from '@/content/site'

type SectionProps = {
  language: Language
}

export function SkillsSection({ language }: SectionProps) {
  const content = siteContent[language].skills

  return (
    <section id="skills" className="scroll-mt-24 py-14">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-medium tracking-wider text-purple-600 uppercase dark:text-purple-400">
          {content.label}
        </p>
        <h2 className="mt-2 text-3xl font-bold">{content.title}</h2>
        <p className="text-muted-foreground mt-3">{content.description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((group) => (
          <Card
            key={group.title}
            className="bg-card/70 backdrop-blur transition-transform hover:-translate-y-1"
          >
            <CardContent className="pt-6">
              <h3 className="font-semibold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="rounded-full">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
