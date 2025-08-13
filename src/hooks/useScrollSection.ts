import { useEffect, useState } from 'react'

import type { SectionId } from '@/constants'
import { SECTION_IDS } from '@/constants'
import { debounce, getActiveSection } from '@/lib/navigation'

export function useScrollSection() {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null)

  useEffect(() => {
    const handleScroll = debounce(() => {
      const active = getActiveSection(SECTION_IDS)
      setActiveSection(active)
    }, 50) // Reduced from 100ms to 50ms for better responsiveness

    // Set initial active section
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return { activeSection }
}
