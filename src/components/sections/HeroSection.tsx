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
    <section id="top" className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Badge className="mb-6 border-purple-500/20 bg-purple-500/10 text-purple-700 hover:bg-purple-500/10 dark:text-purple-300">
          {content.hero.eyebrow}
        </Badge>

        <p className="text-muted-foreground mb-4 text-sm font-medium tracking-[0.28em] uppercase">
          {profile.name} · {profile.current.role}
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {content.hero.title}
        </h1>

        <p className="text-muted-foreground mx-auto mt-7 max-w-2xl text-lg leading-8 text-balance">
          {content.hero.subtitle}
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-2">
          {profile.focus.map((item) => (
            <Badge key={item} variant="outline" className="rounded-full px-3 py-1">
              {item}
            </Badge>
          ))}
        </div>

        <p className="text-muted-foreground mx-auto mt-6 flex max-w-2xl items-center justify-center gap-2 text-sm">
          <MapPin className="size-4 text-purple-600 dark:text-purple-400" />
          {content.hero.availability}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
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
    </section>
  )
}
