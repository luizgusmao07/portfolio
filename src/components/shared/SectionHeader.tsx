import { forwardRef } from 'react'

import { cn } from '@/lib/utils'
import type { BaseComponentProps } from '@/types'

interface SectionHeaderProps extends BaseComponentProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, subtitle, centered = true, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('mb-12', centered && 'text-center', className)} {...props}>
        <h2 className="text-foreground mb-4 text-3xl font-bold">{title}</h2>
        {subtitle && (
          <p className={cn('text-muted-foreground text-lg', centered && 'mx-auto max-w-2xl')}>
            {subtitle}
          </p>
        )}
      </div>
    )
  },
)

SectionHeader.displayName = 'SectionHeader'
