"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import CursorSpotlight from "@/components/cursor-spotlight"

// Dynamically import the Lightbox component with SSR disabled
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

  return (
    <>
      <CursorSpotlight />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-playfair text-center mb-16">Gallery</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden cursor-pointer bg-[#120003] p-5 shadow-md gallery-card"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] relative">
                {/* Circular overhead spotlight */}
                <div className="overhead-glow"></div>

                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover image-hover z-0"
                />

                {/* Placeholder watermark */}
                <div className="placeholder-watermark"></div>
              </div>

              <div className="py-4">
                <h3 className="text-white font-playfair text-lg">{image.title}</h3>
              </div>
            </div>
          ))}
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
