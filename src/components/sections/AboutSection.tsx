import { profile } from '@/content/profile'

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-12">
      <div className="grid gap-6 md:grid-cols-[220px_1fr]">
        <div>
          <p className="text-sm font-medium tracking-wider text-purple-600 uppercase dark:text-purple-400">
            About
          </p>
          <h2 className="mt-2 text-3xl font-bold">Sobre mim</h2>
        </div>
        <div className="text-muted-foreground space-y-4 text-base leading-8">
          {profile.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
