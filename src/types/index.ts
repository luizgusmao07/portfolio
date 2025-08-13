/**
 * Common types used across the application
 */

import type { LucideIcon } from 'lucide-react'

// Navigation types
export interface NavigationItem {
  id: string
  labelKey: string
  href: string
  icon: LucideIcon
}

// Technology types
export interface Technology {
  name: string
  icon: LucideIcon
  category: TechnologyCategory
  level: SkillLevel
  descriptionKey: string
}

export type TechnologyCategory =
  | 'Backend'
  | 'Frontend'
  | 'Database'
  | 'DevOps'
  | 'Tools'
  | 'Architecture'

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'

// Project types
export interface Project {
  id: string
  titleKey: string
  descriptionKey: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

// Journey/Timeline types
export interface JourneyItem {
  id: string
  titleKey: string
  descriptionKey: string
  date: string
  type: 'education' | 'work' | 'project' | 'certification'
  company?: string
  location?: string
  technologies?: string[]
}

// Theme types
export type Theme = 'light' | 'dark' | 'system'

// Language types
export type SupportedLanguage = 'en' | 'pt'

// Common component props
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}
