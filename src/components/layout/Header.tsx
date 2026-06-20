import { Languages, Moon, Sun } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import type { Language } from '@/content/site'
import { profile, siteContent } from '@/content/site'
import { useTheme } from '@/hooks/useTheme'

import { Container } from './Container'

type HeaderProps = {
  language: Language
  onToggleLanguage: () => void
}

export function Header({ language, onToggleLanguage }: HeaderProps) {
  const { isDark, toggleTheme } = useTheme()
  const content = siteContent[language]
  const navigation = [
    { label: content.nav.about, href: '#about' },
    { label: content.nav.experience, href: '#experience' },
    { label: content.nav.skills, href: '#skills' },
    { label: content.nav.education, href: '#education' },
  ]

  return (
    <header className="bg-background/75 supports-[backdrop-filter]:bg-background/55 sticky top-0 z-20 border-b backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-between py-3">
          <a href="#top" className="flex items-center gap-2 font-semibold" aria-label="Go to top">
            <Avatar className="size-9 border">
              <AvatarFallback>{profile.initials}</AvatarFallback>
            </Avatar>
            <span>{profile.name}</span>
          </a>

          <nav className="text-muted-foreground hidden items-center gap-5 text-sm md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" onClick={onToggleLanguage}>
              <Languages className="size-4" />
              {language === 'pt' ? 'EN' : 'PT'}
            </Button>
            <Button
              size="icon"
              variant="ghost"
              aria-label={content.actions.switchTheme}
              onClick={toggleTheme}
            >
              {isDark ? (
                <Sun className="size-5 text-purple-600 dark:text-purple-400" />
              ) : (
                <Moon className="size-5 text-purple-600 dark:text-purple-400" />
              )}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
