import type { Theme } from '@/types'

const THEME_STORAGE_KEY = 'theme'

/**
 * Get the user's preferred theme from localStorage or system preference
 */
export function getPreferredTheme(): Theme {
  const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme
  if (stored && ['light', 'dark', 'system'].includes(stored)) {
    return stored
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * Apply theme to document
 */
export function applyTheme(theme: Theme): void {
  const root = document.documentElement
  const isDark =
    theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

  root.classList.toggle('dark', isDark)
}

/**
 * Save theme to localStorage
 */
export function saveTheme(theme: Theme): void {
  localStorage.setItem(THEME_STORAGE_KEY, theme)
}

/**
 * Get the opposite theme for toggling
 */
export function getOppositeTheme(currentTheme: Theme): Theme {
  if (currentTheme === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark'
  }
  return currentTheme === 'dark' ? 'light' : 'dark'
}
