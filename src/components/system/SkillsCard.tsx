import { Code, Coffee, FileJson, GitBranch, Palette, Table } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const technicalSkills = [
  { name: 'Java', icon: Coffee },
  { name: 'Spring', icon: Code },
  { name: 'React', icon: Palette },
  { name: 'SQL', icon: Table },
  { name: 'NoSQL', icon: FileJson },
  { name: 'Python', icon: Code },
  { name: 'Git', icon: GitBranch },
]

export function SkillsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Technologies & Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {technicalSkills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className="flex items-center gap-2 rounded-lg border bg-purple-500/10 p-3 transition-all duration-200 hover:scale-105 hover:border-purple-500/40 hover:bg-purple-500/20 hover:shadow-sm dark:bg-purple-400/15 dark:hover:border-purple-400/50 dark:hover:bg-purple-400/25"
              >
                <Icon className="size-5 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
