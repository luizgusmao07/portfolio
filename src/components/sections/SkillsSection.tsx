import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { skillGroups } from '@/content/skills'

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-12">
      <div className="mb-8">
        <p className="text-sm font-medium tracking-wider text-purple-600 uppercase dark:text-purple-400">
          Skills
        </p>
        <h2 className="mt-2 text-3xl font-bold">Tecnologias e práticas</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <Card key={group.title}>
            <CardHeader>
              <CardTitle>{group.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-foreground bg-purple-500/10 hover:bg-purple-500/20"
                  >
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
