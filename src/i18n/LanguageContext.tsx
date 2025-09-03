import { createContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { availableLanguages } from './constants'

interface LanguageContextType {
  currentLanguage: string
  changeLanguage: (language: string) => void
  availableLanguages: { code: string; name: string; flag: string }[]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export { LanguageContext }

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Initialize with the current i18n language or fallback to 'en'
    return i18n.language || 'en'
  })

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng)
    }

    i18n.on('languageChanged', handleLanguageChange)
    return () => {
      i18n.off('languageChanged', handleLanguageChange)
    }
  }, [i18n])

  const changeLanguage = async (language: string) => {
    try {
      await i18n.changeLanguage(language)
      setCurrentLanguage(language)
    } catch (error) {
      console.error('Error changing language:', error)
    }
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        changeLanguage,
        availableLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
