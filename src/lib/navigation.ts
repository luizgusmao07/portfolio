import type { SectionId } from '@/constants'

/**
 * Scrolls to a specific section smoothly
 */
export function scrollToSection(sectionId: SectionId): void {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

/**
 * Checks if a section is currently in the viewport
 */
export function isInViewport(sectionId: SectionId): boolean {
  const element = document.getElementById(sectionId)
  if (!element) return false

  const rect = element.getBoundingClientRect()
  const viewHeight = window.innerHeight || document.documentElement.clientHeight

  // Check if the section is at least 30% visible
  const visibleTop = Math.max(0, -rect.top)
  const visibleBottom = Math.min(viewHeight, rect.bottom)
  const visibleHeight = Math.max(0, visibleBottom - visibleTop)
  const visibilityRatio = visibleHeight / rect.height

  return visibilityRatio >= 0.3
}

/**
 * Gets the currently active section based on scroll position
 */
export function getActiveSection(sectionIds: readonly SectionId[]): SectionId | null {
  const viewHeight = window.innerHeight || document.documentElement.clientHeight
  const viewportCenter = viewHeight / 2

  let closestSection: SectionId | null = null
  let closestDistance = Infinity

  for (const sectionId of sectionIds) {
    const element = document.getElementById(sectionId)
    if (!element) continue

    const rect = element.getBoundingClientRect()

    // Skip sections that are completely out of view
    if (rect.bottom < -100 || rect.top > viewHeight + 100) continue

    // Calculate how much of the section is visible
    const visibleTop = Math.max(0, -rect.top)
    const visibleBottom = Math.min(viewHeight, rect.bottom)
    const visibleHeight = Math.max(0, visibleBottom - visibleTop)
    const visibilityRatio = visibleHeight / rect.height

    // Only consider sections that are at least 20% visible
    if (visibilityRatio < 0.2) continue

    // Calculate distance from section center to viewport center
    const sectionCenter = rect.top + rect.height / 2
    const distanceFromCenter = Math.abs(sectionCenter - viewportCenter)

    // Prefer sections that are more visible and closer to center
    const adjustedDistance = distanceFromCenter / (visibilityRatio + 0.1)

    if (adjustedDistance < closestDistance) {
      closestDistance = adjustedDistance
      closestSection = sectionId
    }
  }

  return closestSection
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: never[]) => unknown>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Format date for display
 */
export function formatDate(date: string, locale = 'en-US'): string {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
  })
}

/**
 * Generate a unique ID
 */
export function generateId(prefix = 'id'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}
