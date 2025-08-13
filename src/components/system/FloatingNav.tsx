import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface NavItem {
  id: string
  translationKey: string
  icon: string
}

const navItems: NavItem[] = [
  { id: 'about', translationKey: 'nav.about', icon: '👋' },
  { id: 'skills', translationKey: 'nav.skills', icon: '⚡' },
  { id: 'journey', translationKey: 'nav.journey', icon: '🚀' },
  { id: 'projects', translationKey: 'nav.projects', icon: '💼' },
]

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState('about')
  const { t } = useTranslation()

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                setActiveSection(id)
              }
            })
          },
          {
            threshold: [0, 0.3, 0.5, 0.7, 1],
            rootMargin: '-20% 0px -20% 0px',
          },
        )
        observer.observe(element)
        observers.push(observer)
      }
    })

    // Fallback scroll listener for better detection
    const handleScroll = () => {
      const sections = navItems
        .map(({ id }) => {
          const element = document.getElementById(id)
          if (element) {
            const rect = element.getBoundingClientRect()
            return {
              id,
              top: rect.top,
              bottom: rect.bottom,
              height: rect.height,
            }
          }
          return null
        })
        .filter(Boolean)

      // Find the section that's most visible in the viewport
      const viewportHeight = window.innerHeight
      let mostVisibleSection = sections[0]
      let maxVisibleArea = 0

      sections.forEach((section) => {
        if (section) {
          const visibleTop = Math.max(0, -section.top)
          const visibleBottom = Math.min(viewportHeight, section.bottom)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)
          const visibleArea = visibleHeight / section.height

          if (visibleArea > maxVisibleArea) {
            maxVisibleArea = visibleArea
            mostVisibleSection = section
          }
        }
      })

      if (mostVisibleSection && maxVisibleArea > 0.3) {
        setActiveSection(mostVisibleSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observers.forEach((observer) => observer.disconnect())
      window.removeEventListener('scroll', handleScroll)
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
          {navItems.map(({ id, translationKey, icon }) => (
            <Tooltip key={id} delayDuration={300}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`group relative flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${
                    activeSection === id
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-muted-foreground bg-transparent hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900/50 dark:hover:text-purple-400'
                  }`}
                  aria-label={`Navigate to ${t(translationKey)}`}
                >
                  <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                    {icon}
                  </span>
                </button>
              </TooltipTrigger>
              <TooltipContent side="left" className="font-medium">
                {t(translationKey)}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </nav>
    </TooltipProvider>
  )
}
