import { useEffect, useState } from 'react'

const themeStorageKey = 'theme'

type Theme = 'dark' | 'light'

function getPreferredTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const storedTheme = localStorage.getItem(themeStorageKey)
  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const preferredTheme = getPreferredTheme()
    setTheme(preferredTheme)
    applyTheme(preferredTheme)
  }, [])

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'
      localStorage.setItem(themeStorageKey, nextTheme)
      applyTheme(nextTheme)
      return nextTheme
    })
  }

  return {
    isDark: theme === 'dark',
    theme,
    toggleTheme,
  }
}
