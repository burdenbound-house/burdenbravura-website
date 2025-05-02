export default function Footer() {
  return (
    <footer className="bg-[#1A0000] py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <p className="text-burnished-gold italic text-lg md:text-xl font-playfair">
            "From burden, a line. From weight, creation. From endurance, a world."
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-champagne font-playfair text-xl md:text-2xl">The House of Burden</h2>
        </div>

        <div className="mb-6">
          <a
            href="https://burdenbound.com"
            className="text-base font-medium tracking-wide text-champagne hover:metallic-champagne transition-all duration-500 font-playfair relative group"
          >
            <span className="relative z-10">Return to BurdenBound</span>
            <span className="absolute inset-0 bg-champagne opacity-0 group-hover:opacity-5 blur-sm transition-opacity duration-500"></span>
          </a>
        </div>

        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="https://www.burdenbourne.com"
            className="font-playfair text-burnished-gold hover:text-champagne transition-colors duration-300"
          >
            [Bourne]
          </a>
          <a
            href="https://www.burdenbrae.com"
            className="font-playfair text-burnished-gold hover:text-champagne transition-colors duration-300"
          >
            [Brae]
          </a>
          <a
            href="https://www.burdenblythe.com"
            className="font-playfair text-burnished-gold hover:text-champagne transition-colors duration-300"
          >
            [Blythe]
          </a>
          <a
            href="https://www.burdenbravura.com"
            className="font-playfair text-burnished-gold hover:text-champagne transition-colors duration-300"
          >
            [Bravura]
          </a>
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
