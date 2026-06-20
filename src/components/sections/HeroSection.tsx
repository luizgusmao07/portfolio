import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Language } from '@/content/site'
import { profile, siteContent } from '@/content/site'

type SectionProps = {
  language: Language
}

export function HeroSection({ language }: SectionProps) {
  const content = siteContent[language]

  return (
    <section id="top" className="py-14 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_360px]">
        <div>
          <p className="text-muted-foreground mb-4 text-sm font-medium tracking-[0.28em] uppercase">
            {profile.name}
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {content.hero.title}
          </h1>

          <p className="text-muted-foreground mt-7 max-w-2xl text-lg leading-8 text-balance">
            {content.hero.subtitle}
          </p>

          <p className="text-muted-foreground mt-4 max-w-2xl leading-7 text-balance">
            {content.hero.detail}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {profile.focus.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="bg-background/60 rounded-full px-3 py-1"
              >
                {item}
              </Badge>
            ))}
          </div>

          <p className="text-muted-foreground mt-6 flex items-center gap-2 text-sm">
            <MapPin className="size-4 text-purple-600 dark:text-purple-400" />
            {content.hero.availability}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={profile.links.linkedIn} target="_blank" rel="noopener noreferrer">
                <Linkedin className="size-4" />
                {content.actions.viewLinkedIn}
              </a>
            </Button>
            <Button variant="outline" asChild size="lg">
              <a href={`mailto:${profile.email}`}>
                <Mail className="size-4" />
                {content.actions.sendEmail}
              </a>
            </Button>
            <Button variant="ghost" asChild size="lg">
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="size-4" />
                {content.actions.viewGithub}
              </a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-80 lg:mx-0 lg:justify-self-end">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-purple-500/10 blur-2xl" />
          <img
            src={profile.photo}
            alt={profile.fullName}
            className="aspect-square w-full rounded-[2rem] border object-cover shadow-2xl shadow-purple-950/10 dark:shadow-black/30"
          />
        </div>
      </div>
    </section>
  )
}
