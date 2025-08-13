import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface NavItem {
  id: string
  translationKey: string
}

const navItems: NavItem[] = [
  { id: 'about', translationKey: 'nav.about' },
  { id: 'skills', translationKey: 'nav.skills' },
  { id: 'journey', translationKey: 'nav.journey' },
  { id: 'projects', translationKey: 'nav.projects' },
]

export function MinimalTopNav() {
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
    <nav className="flex items-center gap-8">
      {navItems.map(({ id, translationKey }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`group relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
            activeSection === id
              ? 'text-purple-600 dark:text-purple-400'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {t(translationKey)}

          {/* Animated underline */}
          <span
            className={`absolute bottom-0 left-0 h-0.5 bg-purple-600 transition-all duration-300 dark:bg-purple-400 ${
              activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          />
        </button>
      ))}
    </nav>
  )
}
