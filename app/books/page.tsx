import CursorSpotlight from "@/components/cursor-spotlight"
import Link from "next/link"

export default function BooksPage() {
  return (
    <>
      <CursorSpotlight />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overhead-spotlight top-vignette">
        <h1 className="text-4xl md:text-5xl font-playfair text-center mb-4 metallic-champagne">Featured Works</h1>
        <p className="text-burnished-gold text-center max-w-2xl mx-auto mb-8 font-light font-playfair">
          Curated collections that challenge perception and illuminate truth
        </p>

        {/* Subtle burnished gold divider */}
        <div className="divider-burnished-gold mx-auto w-24 mb-16"></div>

        {/* Work in Progress Message */}
        <div className="bg-[#120003] p-12 shadow-md text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-playfair text-champagne mb-6">Work in Progress</h2>
          <p className="text-[#E0E0E0] mb-8 font-light">
            Our curated collection of featured works is currently being assembled with the same precision and care that
            defines all BurdenBravura publications.
          </p>
          <p className="text-[#E0E0E0] mb-8 font-light">
            We invite you to return soon to explore our selection of visual narratives.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 border-2 border-champagne text-champagne hover:text-[#1A0106] hover:bg-champagne transition-all duration-300 text-lg tracking-wide font-playfair"
          >
            Submit Your Work
          </Link>
        </div>
      </div>
    </>
  )
}
