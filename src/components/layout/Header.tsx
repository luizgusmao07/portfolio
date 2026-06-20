import { Moon, Sun } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { profile } from '@/content/profile'
import { useTheme } from '@/hooks/useTheme'

import { Container } from './Container'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
]

export function Header() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className="bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-20 border-b backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-3">
          <a href="#top" className="flex items-center gap-2 font-semibold" aria-label="Go to top">
            <Avatar className="size-9">
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

          <Button
            size="icon"
            variant="ghost"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={toggleTheme}
          >
            {isDark ? (
              <Sun className="size-5 text-purple-600 dark:text-purple-400" />
            ) : (
              <Moon className="size-5 text-purple-600 dark:text-purple-400" />
            )}
          </Button>
        </div>
      </Container>
    </header>
  )
}
