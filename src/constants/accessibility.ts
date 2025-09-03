/**
 * Accessibility constants and utilities
 */

// ARIA labels for common elements
export const ARIA_LABELS = {
  // Navigation
  MAIN_NAVIGATION: 'nav.main',
  BREADCRUMB_NAVIGATION: 'nav.breadcrumb',
  PAGINATION_NAVIGATION: 'nav.pagination',

  // Actions
  CLOSE_MODAL: 'common.close',
  OPEN_MENU: 'common.openMenu',
  CLOSE_MENU: 'common.closeMenu',
  TOGGLE_THEME: 'common.toggleTheme',
  CHANGE_LANGUAGE: 'common.changeLanguage',

  // Content
  MAIN_CONTENT: 'common.mainContent',
  SIDEBAR: 'common.sidebar',
  SEARCH: 'common.search',

  // Media
  PLAY_VIDEO: 'common.playVideo',
  PAUSE_VIDEO: 'common.pauseVideo',
  NEXT_IMAGE: 'common.nextImage',
  PREVIOUS_IMAGE: 'common.previousImage',
} as const

// Keyboard navigation constants
export const KEYBOARD_KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  TAB: 'Tab',
  HOME: 'Home',
  END: 'End',
} as const

// Focus management utilities
export const FOCUS_SELECTORS = {
  FOCUSABLE_ELEMENTS:
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])',
  TABBABLE_ELEMENTS:
    'a[href], button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
} as const
