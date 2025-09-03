import { useCallback, useState } from 'react'

export interface UseModalReturn<T = unknown> {
  isOpen: boolean
  data: T | null
  openModal: (data?: T) => void
  closeModal: () => void
  toggleModal: () => void
}

/**
 * Custom hook for managing modal state
 * @param initialState - Initial open state (default: false)
 * @returns Modal state and control functions
 */
export function useModal<T = unknown>(initialState = false): UseModalReturn<T> {
  const [isOpen, setIsOpen] = useState(initialState)
  const [data, setData] = useState<T | null>(null)

  const openModal = useCallback((modalData?: T) => {
    setData(modalData || null)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    setData(null)
  }, [])

  const toggleModal = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return {
    isOpen,
    data,
    openModal,
    closeModal,
    toggleModal,
  }
}
