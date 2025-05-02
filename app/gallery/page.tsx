"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import CursorSpotlight from "@/components/cursor-spotlight"

// Dynamically import components
const DynamicFrameLayout = dynamic(() => import("@/components/dynamic-frame-layout"), { ssr: false })
const Lightbox = dynamic(() => import("@/components/lightbox"), { ssr: false })

// Gallery images with real dark academia images
const galleryImages = [
  {
    src: "/images/antique-bookshelf.png",
    alt: "Antique bookshelf with leather-bound books",
    title: "Bibliotheca Obscura",
  },
  {
    src: "/images/grand-library.png",
    alt: "Grand library with ornate balustrade",
    title: "Shadows of Academia",
  },
  {
    src: "/images/leather-books.png",
    alt: "Antique leather-bound books with gold embossing",
    title: "Tomes of Knowledge",
  },
  {
    src: "/images/books-and-lamp.png",
    alt: "Still life with books and lamp",
    title: "Scholar's Repose",
  },
  {
    src: "/images/candle-and-journal.png",
    alt: "Handwritten journals with melting candle",
    title: "Nocturnal Studies",
  },
  {
    src: "/images/open-book-lamp.png",
    alt: "Open book with oil lamp",
    title: "Illuminated Wisdom",
  },
  {
    src: "/images/desk-with-globe.png",
    alt: "Scholar's desk with globe and instruments",
    title: "Cartographer's Vigil",
  },
  {
    src: "/images/cozy-reading.png",
    alt: "Cozy reading setup with books and coffee",
    title: "Contemplative Moments",
  },
]

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Add class to body when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.classList.add("lightbox-open")
    } else {
      document.body.classList.remove("lightbox-open")
    }

    return () => {
      document.body.classList.remove("lightbox-open")
    }
  }, [lightboxOpen])

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  // Function to handle image click in the dynamic frame layout
  const handleImageClick = (index: number) => {
    openLightbox(index)
  }

  return (
    <>
      <CursorSpotlight />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overhead-spotlight top-vignette">
        <h1 className="text-4xl md:text-5xl font-playfair text-center mb-4 metallic-champagne">Gallery</h1>
        <p className="text-burnished-gold text-center max-w-2xl mx-auto mb-12 font-light">
          A curated collection of visual narratives
        </p>

        {/* Subtle burnished gold divider */}
        <div className="divider-burnished-gold mx-auto w-24 mb-16"></div>

        {/* Dynamic Frame Layout */}
        <div
          className="mb-16"
          onClick={(e) => {
            // Find the closest gallery-card parent
            const card = (e.target as HTMLElement).closest(".gallery-card")
            if (card) {
              // Get the index from the data attribute or another method
              const index = Array.from(card.parentElement?.children || []).indexOf(card)
              if (index >= 0) handleImageClick(index)
            }
          }}
        >
          <DynamicFrameLayout images={galleryImages} />
        </div>

        <Lightbox
          images={galleryImages}
          initialIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      </div>
    </>
  )
}
