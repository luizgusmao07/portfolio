// Navigation constants
export * from './navigation'

// Technology constants
export * from './technologies'

// Project constants
export * from './projects'

// App configuration constants
export const APP_CONFIG = {
  name: 'Portfolio',
  author: 'Luiz Gustavo',
  description: 'Full Stack Developer Portfolio',
  version: '1.0.0',
  repository: 'https://github.com/luizgusmao07/portfolio',
} as const

export const SOCIAL_LINKS = {
  github: 'https://github.com/luizgusmao07',
  linkedin: 'https://linkedin.com/in/luizgusmao07',
  email: 'mailto:luizgusmao07@example.com',
} as const

export const SUPPORTED_LANGUAGES = ['en', 'pt'] as const
