import { useTranslation } from 'react-i18next'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import type { SectionId } from '@/constants'
import { NAVIGATION_ITEMS } from '@/constants'
import { useScrollSection } from '@/hooks'
import { scrollToSection } from '@/lib/navigation'

export function FloatingNav() {
  const { activeSection } = useScrollSection()
  const { t } = useTranslation()

  return (
    <TooltipProvider>
      <nav className="fixed top-1/2 right-6 z-50 -translate-y-1/2">
        <div className="bg-background/80 supports-[backdrop-filter]:bg-background/60 flex flex-col items-center gap-3 rounded-full border p-3 shadow-lg backdrop-blur-sm">
          {NAVIGATION_ITEMS.map(({ id, labelKey, icon: Icon }) => (
            <Tooltip key={id} delayDuration={300}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => scrollToSection(id as SectionId)}
                  className={`group relative flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${
                    activeSection === id
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-muted-foreground bg-transparent hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900/50 dark:hover:text-purple-400'
                  }`}
                  aria-label={`Navigate to ${t(labelKey)}`}
                >
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="left" className="font-medium">
                {t(labelKey)}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </nav>
    </TooltipProvider>
  )
}
