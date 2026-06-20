import { Github, Linkedin, Mail } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { profile } from '@/content/profile'

export function ContactSection() {
  return (
    <section id="contact" className="py-16 text-center">
      <h2 className="text-3xl font-bold">Vamos conversar?</h2>
      <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
        Se quiser falar sobre desenvolvimento mobile, produto, tecnologia ou oportunidades, estes
        são os melhores canais para contato.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <a href={`mailto:${profile.email}`}>
            <Mail className="size-4" />
            Email
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href={profile.linkedInUrl} target="_blank" rel="noopener noreferrer">
            <Linkedin className="size-4" />
            LinkedIn
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="size-4" />
            GitHub
          </a>
        </Button>
      </div>
    </section>
  )
}
