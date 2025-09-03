import { forwardRef } from 'react'

import { cn } from '@/lib/utils'
import type { BaseComponentProps } from '@/types'

interface SectionProps extends BaseComponentProps {
  id?: string
  variant?: 'default' | 'centered' | 'full-height'
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, children, id, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'py-16',
      centered: 'flex min-h-screen items-center justify-center py-20 md:py-16 px-4 md:px-0',
      'full-height':
        'flex min-h-[calc(100vh-120px)] md:h-[calc(100vh-80px)] items-center justify-center py-8 md:py-0',
    }

    return (
      <section ref={ref} id={id} className={cn(variants[variant], className)} {...props}>
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
      </section>
    )
  },
)

Section.displayName = 'Section'
