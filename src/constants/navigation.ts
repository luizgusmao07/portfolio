import { Briefcase, Code, Home, User } from 'lucide-react'

import type { NavigationItem } from '@/types'

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'about',
    labelKey: 'nav.about',
    href: '#about',
    icon: User,
  },
  {
    id: 'skills',
    labelKey: 'nav.skills',
    href: '#skills',
    icon: Code,
  },
  {
    id: 'journey',
    labelKey: 'nav.journey',
    href: '#journey',
    icon: Briefcase,
  },
  {
    id: 'projects',
    labelKey: 'nav.projects',
    href: '#projects',
    icon: Home,
  },
]

export const SECTION_IDS = ['about', 'skills', 'journey', 'projects'] as const

export type SectionId = (typeof SECTION_IDS)[number]
