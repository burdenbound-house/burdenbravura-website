import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#1A0000] py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <p className="text-burnished-gold italic text-lg md:text-xl">
            "From burden, a line. From weight, creation. From endurance, a world."
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-champagne font-playfair text-xl md:text-2xl">The House of Burden</h2>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <Link
            href="https://burdenbound.com"
            className="text-burnished-gold hover:text-champagne transition-colors duration-300"
          >
            [Bound]
          </Link>
          <Link
            href="https://www.burdenbourne.com"
            className="text-burnished-gold hover:text-champagne transition-colors duration-300"
          >
            [Bourne]
          </Link>
          <Link
            href="https://www.burdenbrae.com"
            className="text-burnished-gold hover:text-champagne transition-colors duration-300"
          >
            [Brae]
          </Link>
          <Link
            href="https://www.burdenblythe.com"
            className="text-burnished-gold hover:text-champagne transition-colors duration-300"
          >
            [Blythe]
          </Link>
          <Link
            href="https://www.burdenbravura.com"
            className="text-burnished-gold hover:text-champagne transition-colors duration-300"
          >
            [Bravura]
          </Link>
        </div>

        <div className="text-center">
          <p className="text-[#E0E0E0] text-xs">
            &copy; {new Date().getFullYear()} BurdenBound LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
