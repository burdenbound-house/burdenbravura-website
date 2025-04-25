import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-16 pb-8">
      <div className="max-w-3xl w-full text-center space-y-12 my-auto">
        <h1 className="text-5xl md:text-7xl font-playfair tracking-wider text-white">BURDENBRAVURA</h1>

        <h2 className="text-xl md:text-2xl text-[#E0E0E0] font-light tracking-wide">A Legacy in Focus</h2>

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

        <div className="pt-8">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 border-2 border-[#D7A77A] text-[#D7A77A] hover:text-[#1A0106] hover:bg-[#D7A77A] transition-all duration-300 text-lg tracking-wide"
          >
            Now Accepting Portfolios
          </Link>
        </div>
      </div>
    </div>
  )
}
