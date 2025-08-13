import { useEffect, useState } from 'react'

interface NavItem {
  id: string
  label: string
}

const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
]

export function MinimalTopNav() {
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
    <nav className="flex items-center gap-8">
      {navItems.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`group relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
            activeSection === id
              ? 'text-purple-600 dark:text-purple-400'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {label}

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
