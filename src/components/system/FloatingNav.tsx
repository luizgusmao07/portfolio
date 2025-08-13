import { useEffect, useState } from 'react'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface NavItem {
  id: string
  label: string
  icon: string
}

const navItems: NavItem[] = [
  { id: 'about', label: 'About Me', icon: '👋' },
  { id: 'skills', label: 'Skills & Experience', icon: '⚡' },
  { id: 'journey', label: 'My Journey', icon: '🚀' },
]

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                setActiveSection(id)
              }
            })
          },
          {
            threshold: 0.5,
            rootMargin: '-10% 0px -10% 0px',
          },
        )
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <TooltipProvider>
      <nav className="fixed top-1/2 right-6 z-50 -translate-y-1/2">
        <div className="bg-background/80 supports-[backdrop-filter]:bg-background/60 flex flex-col items-center gap-3 rounded-full border p-3 shadow-lg backdrop-blur-sm">
          {navItems.map(({ id, label, icon }) => (
            <Tooltip key={id} delayDuration={300}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`group relative flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${
                    activeSection === id
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-muted-foreground bg-transparent hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900/50 dark:hover:text-purple-400'
                  }`}
                  aria-label={`Navigate to ${label}`}
                >
                  <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                    {icon}
                  </span>

                  {/* Active indicator */}
                  <div
                    className={`absolute top-1/2 -left-1 h-6 w-1 -translate-y-1/2 rounded-full bg-purple-600 transition-all duration-300 ${
                      activeSection === id ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                    }`}
                  />
                </button>
              </TooltipTrigger>
              <TooltipContent side="left" className="font-medium">
                {label}
              </TooltipContent>
            </Tooltip>
          ))}

          {/* Progress indicator */}
          <div className="mt-2 flex flex-col items-center gap-1">
            {navItems.map(({ id }, index) => (
              <div
                key={id}
                className={`h-1 w-1 rounded-full transition-all duration-300 ${
                  navItems.findIndex((item) => item.id === activeSection) >= index
                    ? 'bg-purple-600'
                    : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </nav>
    </TooltipProvider>
  )
}
