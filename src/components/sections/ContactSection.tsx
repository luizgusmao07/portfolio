import { Github, Linkedin, Mail } from 'lucide-react'

import { Button } from '@/components/ui/button'
import type { Language } from '@/content/site'
import { profile, siteContent } from '@/content/site'

type SectionProps = {
  language: Language
}

export function ContactSection({ language }: SectionProps) {
  const content = siteContent[language]

  return (
    <section id="contact" className="py-16 text-center">
      <div className="bg-card/80 mx-auto max-w-3xl rounded-3xl border p-8 shadow-sm backdrop-blur sm:p-10">
        <h2 className="text-3xl font-bold">{content.contact.title}</h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
          {content.contact.description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <a href={profile.links.linkedIn} target="_blank" rel="noopener noreferrer">
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={`mailto:${profile.email}`}>
              <Mail className="size-4" />
              {profile.email}
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
              <Github className="size-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
