import type { Language } from '@/content/site'
import { siteContent } from '@/content/site'

type SectionProps = {
  language: Language
}

export function AboutSection({ language }: SectionProps) {
  const content = siteContent[language].about

  return (
    <section id="about" className="scroll-mt-24 py-14">
      <div className="bg-card/70 grid gap-8 rounded-3xl border p-6 shadow-sm backdrop-blur sm:p-8 md:grid-cols-[240px_1fr]">
        <div>
          <p className="text-sm font-medium tracking-wider text-purple-600 uppercase dark:text-purple-400">
            {content.label}
          </p>
          <h2 className="mt-2 text-3xl font-bold">{content.title}</h2>
        </div>
        <div className="text-muted-foreground space-y-4 text-base leading-8">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
