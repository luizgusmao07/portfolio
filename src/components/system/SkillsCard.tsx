import { Code, Coffee, FileJson, GitBranch, Palette, Table } from 'lucide-react'

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
    <div className="rounded-2xl border border-gray-200 bg-white/50 p-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/50">
      <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-gray-100">
        Core Technologies
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {technicalSkills.map((skill) => {
          const Icon = skill.icon
          return (
            <div
              key={skill.name}
              className="group flex items-center gap-3 rounded-xl bg-purple-50 p-3 transition-all duration-200 hover:bg-purple-100 hover:shadow-sm dark:bg-purple-900/30 dark:hover:bg-purple-900/50"
            >
              <Icon className="size-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
