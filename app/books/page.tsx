import Image from "next/image"
import Link from "next/link"
import CursorSpotlight from "@/components/cursor-spotlight"

// Sample featured books with dark academia style images
const featuredBooks = [
  {
    title: "Chiaroscuro",
    description:
      "A study of light and shadow across urban landscapes, revealing the poetry in contrast and the narrative in darkness.",
    coverImage: "/images/books-and-lamp.png",
    cta: "View the Collection",
  },
  {
    title: "Ephemeral",
    description:
      "Capturing fleeting moments of beauty in an ever-changing world. A testament to impermanence and the value of bearing witness.",
    coverImage: "/images/candle-and-journal.png",
    cta: "Order Now",
  },
  {
    title: "Structural Harmonies",
    description:
      "Where architecture meets art. A visual exploration of form, function, and the spaces between intention and interpretation.",
    coverImage: "/images/grand-library.png",
    cta: "Preview Excerpt",
  },
  {
    title: "Witnessed",
    description:
      "Documentary photography that transcends mere observation, inviting viewers to become participants in moments of profound human connection.",
    coverImage: "/images/cozy-reading.png",
    cta: "View the Collection",
  },
]

export default function BooksPage() {
  return (
    <>
      <CursorSpotlight />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-playfair text-center mb-4 metallic-champagne">Featured Works</h1>
        <p className="text-burnished-gold text-center max-w-2xl mx-auto mb-12 font-light">
          Curated collections that challenge perception and illuminate truth
        </p>

        {/* Subtle burnished gold divider */}
        <div className="divider-burnished-gold mx-auto w-24 mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {featuredBooks.map((book, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row gap-6 md:gap-8 bg-[#120003] p-6 shadow-md book-card"
            >
              <div className="w-full md:w-1/3 relative aspect-[2/3]">
                {/* Circular overhead spotlight */}
                <div className="overhead-glow"></div>

                <Image
                  src={book.coverImage || "/placeholder.svg"}
                  alt={`Cover of ${book.title}`}
                  fill
                  className="object-cover image-hover z-0"
                />

                {/* Placeholder watermark */}
                <div className="placeholder-watermark"></div>
              </div>

              <div className="w-full md:w-2/3 flex flex-col">
                <h2 className="text-3xl font-playfair text-champagne mb-4">{book.title}</h2>
                <p className="text-[#E0E0E0] mb-6 flex-grow font-light">{book.description}</p>
                <Link
                  href="#"
                  className="self-start text-burnished-gold hover:text-champagne border-b border-burnished-gold hover:border-champagne pb-1 transition-colors duration-300"
                >
                  {book.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
