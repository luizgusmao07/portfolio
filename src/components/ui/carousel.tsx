import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useRef, useState } from 'react'

import { Button } from './button'

interface CarouselProps {
  images: string[]
  alt: string
  className?: string
}

export function Carousel({ images, alt, className = '' }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)

  if (!images || images.length === 0) {
    return null
  }

  // If only one image, show it without carousel controls
  if (images.length === 1) {
    return (
      <>
        <div className={`group relative h-56 w-full cursor-pointer ${className}`}>
          <img
            src={images[0]}
            alt={alt}
            className="h-full w-full rounded-lg object-cover"
            onClick={() => {
              setModalImageIndex(0)
              setIsModalOpen(true)
            }}
          />
        </div>
        <ImageModal
          images={images}
          currentIndex={modalImageIndex}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onIndexChange={setModalImageIndex}
          alt={alt}
        />
      </>
    )
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const openModal = (index: number) => {
    setModalImageIndex(index)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className={`group relative ${className}`}>
        {/* Main Image Container - Make this clickable */}
        <div
          className="relative h-56 w-full cursor-pointer overflow-hidden rounded-lg"
          onClick={() => openModal(currentIndex)}
        >
          <img src={images[currentIndex]} alt={alt} className="h-full w-full object-cover" />
        </div>

        {/* Navigation Arrows */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <Button
            variant="secondary"
            size="sm"
            className="pointer-events-auto h-8 w-8 rounded-full border-0 bg-black/50 backdrop-blur-sm hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
          >
            <ChevronLeft className="h-4 w-4 text-white" />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="pointer-events-auto h-8 w-8 rounded-full border-0 bg-black/50 backdrop-blur-sm hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
          >
            <ChevronRight className="h-4 w-4 text-white" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform space-x-1">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'scale-110 bg-white' : 'bg-white/50 hover:bg-white/80'
              }`}
              onClick={(e) => {
                e.stopPropagation()
                setCurrentIndex(index)
              }}
            />
          ))}
        </div>
      </div>

      <ImageModal
        images={images}
        currentIndex={modalImageIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onIndexChange={setModalImageIndex}
        alt={alt}
      />
    </>
  )
}

interface ImageModalProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onIndexChange: (index: number) => void
  alt: string
}

function ImageModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onIndexChange,
  alt,
}: ImageModalProps) {
  // Throttling for scroll events
  const lastScrollTime = useRef(0)
  const scrollCooldown = 300 // ms between scroll events

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      onIndexChange(currentIndex + 1)
    }
  }

  const prevImage = () => {
    if (currentIndex > 0) {
      onIndexChange(currentIndex - 1)
    }
  }

  // Handle scroll wheel events for navigation with throttling
  const handleWheel = (e: React.WheelEvent) => {
    if (images.length <= 1) return

    e.preventDefault()

    const now = Date.now()
    if (now - lastScrollTime.current < scrollCooldown) {
      return // Still in cooldown period
    }

    // Check if scrolling horizontally or vertically with significant movement
    const deltaX = e.deltaX
    const deltaY = e.deltaY

    // Use horizontal scroll or vertical scroll for navigation
    const scrollDirection = Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY

    // Increase threshold to reduce sensitivity
    if (Math.abs(scrollDirection) > 30) {
      lastScrollTime.current = now

      if (scrollDirection > 0) {
        nextImage() // Scroll right/down = next image
      } else {
        prevImage() // Scroll left/up = previous image
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="relative flex h-full w-full items-center justify-center p-4">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full text-white shadow-lg hover:bg-white/20"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Main Image */}
        <div
          className="relative max-h-[70vh] max-w-4xl select-none"
          onClick={(e) => e.stopPropagation()}
          onWheel={handleWheel}
        >
          <img
            src={images[currentIndex]}
            alt={alt}
            className="max-h-full max-w-full rounded-lg object-contain shadow-2xl transition-transform duration-200 ease-out"
            draggable={false}
          />

          {/* Scroll Hint for multiple images */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 transform rounded bg-black/30 px-2 py-1 text-xs text-white/70 backdrop-blur-sm">
              Scroll to navigate images
            </div>
          )}
        </div>

        {/* Bottom Dots - Only show if more than one image */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'scale-110 bg-white shadow-lg'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  onIndexChange(index)
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
