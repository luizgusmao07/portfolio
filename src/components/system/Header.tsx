import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

import { MinimalTopNav } from './MinimalTopNav'

export function Header() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const stored = localStorage.getItem('theme')
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const enableDark = stored ? stored === 'dark' : prefersDark
    setIsDark(enableDark)
    root.classList.toggle('dark', enableDark)
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const next = !isDark
    setIsDark(next)
    root.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <header className="bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex items-center justify-between border-b py-3">
          <a href="#" className="flex items-center gap-2">
            <Avatar>
              <AvatarImage />
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
            <span className="font-semibold">Luiz Gusmão</span>
          </a>

          {/* Center navigation - hidden on mobile */}
          <div className="hidden md:block">
            <MinimalTopNav />
          </div>

          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" aria-label="Toggle theme" onClick={toggleTheme}>
              {isDark ? (
                <Sun className="size-5 text-purple-600 dark:text-purple-400" />
              ) : (
                <Moon className="size-5 text-purple-600 dark:text-purple-400" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
