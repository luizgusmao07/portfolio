import { ChevronDown, Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLanguage } from '@/i18n/LanguageContext'

export function LanguageSwitcher() {
  const { t } = useTranslation()
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage()

  const currentLangData = availableLanguages.find((lang) => lang.code === currentLanguage)

  const handleLanguageChange = (languageCode: string) => {
    console.log('Changing language to:', languageCode) // Debug log
    changeLanguage(languageCode)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 gap-1 px-2 transition-colors hover:bg-purple-500/10"
          aria-label={t('header.toggleLanguage')}
        >
          <span className="text-lg">{currentLangData?.flag || '🌐'}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {availableLanguages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex cursor-pointer items-center gap-2 ${
              currentLanguage === language.code
                ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                : ''
            }`}
          >
            <span className="text-base">{language.flag}</span>
            <span className="flex-1">{language.name}</span>
            {currentLanguage === language.code && (
              <Languages className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
