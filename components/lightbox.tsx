"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

interface LightboxProps {
  images: {
    src: string
    alt: string
    title?: string
  }[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
}

export default function Lightbox({ images, initialIndex, isOpen, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        navigatePrev()
      } else if (e.key === "ArrowRight") {
        navigateNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentIndex])

  if (!isOpen) return null

  const navigateNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const navigatePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 bg-[#120003]/95 flex items-center justify-center transition-opacity duration-500">
      <div className="absolute top-4 right-4">
        <button
          onClick={onClose}
          className="text-white hover:text-burnished-gold transition-colors duration-300 p-2"
          aria-label="Close lightbox"
        >
          <X className="h-8 w-8" />
        </button>
      </div>

      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={navigatePrev}
          className="text-white hover:text-burnished-gold transition-colors duration-300 p-2"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={navigateNext}
          className="text-white hover:text-burnished-gold transition-colors duration-300 p-2"
          aria-label="Next image"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>

      <div
        className="max-w-5xl max-h-[80vh] relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-full">
          {/* Bottom hemisphere light effect for lightbox - updated to Champagne */}
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none z-10"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(232, 214, 179, 0.25) 0%, transparent 70%)" /* Champagne */,
              filter: "blur(40px)",
              mixBlendMode: "soft-light",
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.8s ease",
              bottom: "-250px",
            }}
          />

          <Image
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.alt}
            width={1200}
            height={800}
            className="max-h-[80vh] w-auto object-contain opacity-0 transition-opacity duration-500"
            onLoad={(e) => {
              e.currentTarget.classList.remove("opacity-0")
              e.currentTarget.classList.add("opacity-100")
            }}
          />

          {/* Enhanced placeholder watermark in lightbox */}
          <div className="placeholder-watermark absolute inset-0"></div>
        </div>

        {currentImage.title && (
          <div className="absolute bottom-0 left-0 right-0 bg-[#120003]/80 p-4 text-champagne">
            <h3 className="text-lg font-playfair">{currentImage.title}</h3>
          </div>
        )}
      </div>
    </div>
  )
}
