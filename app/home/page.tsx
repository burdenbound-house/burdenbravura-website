import Link from "next/link"
import GalleryBrowseCard from "@/components/gallery-browse-card"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-16 pb-8 overhead-spotlight top-vignette">
      <div className="max-w-3xl w-full text-center space-y-12 my-auto">
        <h1 className="text-5xl md:text-7xl font-playfair tracking-wider metallic-champagne">BURDENBRAVURA</h1>

        <h2 className="text-xl md:text-2xl text-champagne font-playfair font-light tracking-wide">A Legacy in Focus</h2>

        <div className="space-y-6 text-[#E0E0E0] max-w-2xl mx-auto">
          <p className="text-lg font-light">
            Where visual art and photography find their voice. We curate, publish, and celebrate works that challenge
            perception and illuminate truth.
          </p>

          <p className="text-lg font-light">
            Each publication is a testament to the power of visual storytelling—crafted with precision, published with
            purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto grid-flow-row auto-rows-fr">
          <GalleryBrowseCard
            title="Browse Gallery"
            description="Explore our collection of immersive artwork."
            href="/gallery"
          />
          <GalleryBrowseCard title="Featured Books" description="Discover our curated publications." href="/books" />
        </div>

        <div className="pt-8 flex justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 border-2 border-champagne text-champagne hover:text-[#1A0000] hover:bg-champagne transition-all duration-300 text-lg tracking-wide font-playfair"
          >
            Submit Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}
