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
      centered: 'flex min-h-screen items-center justify-center py-16',
      'full-height': 'flex h-[calc(100vh-80px)] items-center justify-center',
    }

    return (
      <section ref={ref} id={id} className={cn(variants[variant], className)} {...props}>
        <div className="mx-auto w-full max-w-6xl px-4">{children}</div>
      </section>
    )
  },
)

Section.displayName = 'Section'
