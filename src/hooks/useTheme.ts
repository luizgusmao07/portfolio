import { useEffect, useState } from 'react'

import { applyTheme, getOppositeTheme, getPreferredTheme, saveTheme } from '@/lib/theme'
import type { Theme } from '@/types'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getPreferredTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = getOppositeTheme(theme)
    setTheme(newTheme)
    saveTheme(newTheme)
  }

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    saveTheme(newTheme)
  }

  return {
    theme,
    toggleTheme,
    changeTheme,
    isDark:
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches),
  }
}
