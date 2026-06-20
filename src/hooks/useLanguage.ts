import { useEffect, useState } from 'react'

import type { Language } from '@/content/site'

const languageStorageKey = 'language'

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'pt'
  }

  const storedLanguage = localStorage.getItem(languageStorageKey)
  if (storedLanguage === 'pt' || storedLanguage === 'en') {
    return storedLanguage
  }

  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('pt')

  useEffect(() => {
    setLanguage(getInitialLanguage())
  }, [])

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => {
      const nextLanguage = currentLanguage === 'pt' ? 'en' : 'pt'
      localStorage.setItem(languageStorageKey, nextLanguage)
      document.documentElement.lang = nextLanguage === 'pt' ? 'pt-BR' : 'en'
      return nextLanguage
    })
  }

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
  }, [language])

  return { language, toggleLanguage }
}
