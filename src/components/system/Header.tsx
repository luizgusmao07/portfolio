import { Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useTheme } from '@/hooks'

import { LanguageSwitcher } from './LanguageSwitcher'
import { MinimalTopNav } from './MinimalTopNav'

export function Header() {
  const { isDark, toggleTheme } = useTheme()
  const { t } = useTranslation()

  return (
    <header className="sticky top-4 z-10">
      <div className="mx-auto w-full max-w-6xl px-4">
        <Card className="bg-background/95 supports-[backdrop-filter]:bg-background/80 border-border/40 shadow-lg backdrop-blur-sm">
          <CardContent className="px-3 py-2">
            <div className="flex items-center justify-between">
              <a href="#" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                <Avatar className="h-8 w-8 ring-2 ring-purple-500/20">
                  <AvatarImage />
                  <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-sm text-white">
                    LG
                  </AvatarFallback>
                </Avatar>
                <span className="font-semibold">{t('header.title')}</span>
              </a>

              {/* Center navigation - hidden on mobile */}
              <div className="hidden md:block">
                <MinimalTopNav />
              </div>

              <div className="flex items-center gap-2">
                <LanguageSwitcher />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="icon"
                        variant="ghost"
                        aria-label={t('header.toggleTheme')}
                        onClick={toggleTheme}
                        className="transition-colors hover:bg-purple-500/10"
                      >
                        {isDark ? (
                          <Sun className="size-5 text-purple-600 dark:text-purple-400" />
                        ) : (
                          <Moon className="size-5 text-purple-600 dark:text-purple-400" />
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>{t('header.toggleTheme')}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </header>
  )
}
