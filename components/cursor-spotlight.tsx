"use client"

import { useState, useEffect } from "react"

export default function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHoveringCard, setIsHoveringCard] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    // Check if we're on a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Track mouse position
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    // Check if hovering over gallery cards
    const checkHover = () => {
      const hoveredCard = document.querySelector(".gallery-card:hover, .book-card:hover")
      setIsHoveringCard(!!hoveredCard)
    }

    // Check if lightbox is open
    const checkLightbox = () => {
      const lightbox = document.querySelector(".lightbox-open")
      setLightboxOpen(!!lightbox)
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mousemove", checkHover)
    document.addEventListener("click", checkLightbox)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mousemove", checkHover)
      window.removeEventListener("resize", checkMobile)
      document.removeEventListener("click", checkLightbox)
    }
  }, [isVisible])

  if (isMobile || lightboxOpen) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 opacity-0 transition-opacity duration-300 md:opacity-100"
      style={{
        background: isVisible
          ? `radial-gradient(circle 80px at ${position.x}px ${position.y}px, ${
              isHoveringCard ? "rgba(222, 184, 135, 0.35)" : "rgba(222, 184, 135, 0.3)"
            } 0%, transparent 100%)`
          : "transparent",
        filter: "blur(16px)",
      }}
    />
  )
}
