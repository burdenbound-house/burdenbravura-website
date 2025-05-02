"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-[#1A0000] border-b border-burnished-gold/10 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="metallic-champagne font-playfair text-xl tracking-wider">
              BURDENBRAVURA
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#E0E0E0] hover:text-burnished-gold transition-colors duration-300">
              Home
            </Link>
            <Link href="/gallery" className="text-[#E0E0E0] hover:text-burnished-gold transition-colors duration-300">
              Gallery
            </Link>
            <Link href="/books" className="text-[#E0E0E0] hover:text-burnished-gold transition-colors duration-300">
              Books
            </Link>
            <Link href="/about" className="text-[#E0E0E0] hover:text-burnished-gold transition-colors duration-300">
              About
            </Link>
            <Link href="/contact" className="text-[#E0E0E0] hover:text-burnished-gold transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-burnished-gold transition-colors duration-300 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1A0000] border-b border-burnished-gold/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-[#E0E0E0] hover:text-burnished-gold transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className="block px-3 py-2 text-[#E0E0E0] hover:text-burnished-gold transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/books"
              className="block px-3 py-2 text-[#E0E0E0] hover:text-burnished-gold transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Books
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-[#E0E0E0] hover:text-burnished-gold transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-[#E0E0E0] hover:text-burnished-gold transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
