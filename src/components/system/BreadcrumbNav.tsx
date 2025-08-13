import { useEffect, useState } from 'react'

interface NavItem {
  id: string
  label: string
  shortLabel: string
}

const navItems: NavItem[] = [
  { id: 'about', label: 'About Me', shortLabel: 'About' },
  { id: 'skills', label: 'Skills & Experience', shortLabel: 'Skills' },
  { id: 'journey', label: 'My Journey', shortLabel: 'Journey' },
]

export function BreadcrumbNav() {
  const [activeSection, setActiveSection] = useState('about')
  const [visitedSections, setVisitedSections] = useState<Set<string>>(new Set(['about']))

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
                setVisitedSections((prev) => new Set([...prev, id]))
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

  const getCurrentSectionIndex = () => {
    return navItems.findIndex((item) => item.id === activeSection)
  }

  return (
    <nav className="fixed top-1/2 left-6 z-50 -translate-y-1/2">
      <div className="bg-background/90 flex flex-col gap-4 rounded-lg border p-4 shadow-lg backdrop-blur-sm">
        <div className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
          Portfolio Navigation
        </div>

        <div className="flex flex-col gap-3">
          {navItems.map(({ id, label, shortLabel }, index) => {
            const isActive = activeSection === id
            const isVisited = visitedSections.has(id)
            const isPast = index < getCurrentSectionIndex()

            return (
              <div key={id} className="flex items-center gap-3">
                {/* Step indicator */}
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? 'scale-110 bg-purple-600 text-white shadow-md'
                        : isPast || isVisited
                          ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400'
                          : 'bg-border text-muted-foreground hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900/50'
                    }`}
                  >
                    {index + 1}
                  </button>

                  {/* Connecting line */}
                  {index < navItems.length - 1 && (
                    <div
                      className={`mt-1 h-6 w-px transition-all duration-300 ${
                        isPast || (isActive && index < getCurrentSectionIndex())
                          ? 'bg-purple-600'
                          : 'bg-border'
                      }`}
                    />
                  )}
                </div>

                {/* Label */}
                <button
                  onClick={() => scrollToSection(id)}
                  className={`text-left transition-all duration-300 ${
                    isActive
                      ? 'text-foreground font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <div className="text-sm">{shortLabel}</div>
                  {isActive && <div className="text-muted-foreground mt-1 text-xs">{label}</div>}
                </button>
              </div>
            )
          })}
        </div>

        {/* Progress indicator */}
        <div className="mt-2 border-t pt-3">
          <div className="text-muted-foreground flex items-center gap-2 text-xs">
            <span>Progress</span>
            <div className="bg-border h-1 flex-1 overflow-hidden rounded-full">
              <div
                className="h-full bg-purple-600 transition-all duration-500"
                style={{
                  width: `${((getCurrentSectionIndex() + 1) / navItems.length) * 100}%`,
                }}
              />
            </div>
            <span>
              {getCurrentSectionIndex() + 1}/{navItems.length}
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}
