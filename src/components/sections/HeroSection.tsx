import { ExternalLink, Github, Linkedin, Mail, MapPin } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { profile } from '@/content/profile'

export function HeroSection() {
  return (
    <section id="top" className="py-16 sm:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_320px]">
        <div>
          <Badge className="mb-5 bg-purple-100 text-purple-700 hover:bg-purple-100 dark:bg-purple-950 dark:text-purple-300">
            {profile.role} · {profile.company}
          </Badge>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            {profile.headline}
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8">
            Construo experiências mobile com foco em produto, qualidade e velocidade de entrega.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
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
            <Button variant="ghost" asChild>
              <a href={`mailto:${profile.email}`}>
                <Mail className="size-4" />
                Email
              </a>
            </Button>
          </div>
        </div>

        <aside className="bg-card rounded-3xl border p-6 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <Avatar className="size-24">
              <AvatarFallback className="text-2xl">{profile.initials}</AvatarFallback>
            </Avatar>
            <h2 className="mt-4 text-xl font-semibold">{profile.fullName}</h2>
            <p className="text-muted-foreground mt-1 text-sm">{profile.role}</p>
            <p className="text-muted-foreground mt-3 flex items-center gap-1 text-sm">
              <MapPin className="size-4 text-purple-600 dark:text-purple-400" />
              {profile.location}
            </p>
          </div>

          <div className="mt-6 space-y-2 border-t pt-6 text-sm">
            <a
              href={profile.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:bg-muted hover:text-foreground flex items-center justify-between rounded-lg px-3 py-2 transition-colors"
            >
              LinkedIn
              <ExternalLink className="size-3" />
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:bg-muted hover:text-foreground flex items-center justify-between rounded-lg px-3 py-2 transition-colors"
            >
              GitHub
              <ExternalLink className="size-3" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-muted-foreground hover:bg-muted hover:text-foreground flex items-center justify-between rounded-lg px-3 py-2 transition-colors"
            >
              {profile.email}
              <Mail className="size-3" />
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
