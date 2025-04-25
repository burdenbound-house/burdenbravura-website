import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#120003] py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <Link href="/" className="text-white font-playfair text-xl tracking-wider">
              BURDENBRAVURA
            </Link>
            <p className="text-[#E0E0E0] mt-2 text-sm font-light">A Legacy in Focus</p>
          </div>

          <div className="mt-8 md:mt-0">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-end">
              <li className="flex flex-col items-center md:items-end">
                <Link
                  href="https://burdenbound.com"
                  className="text-[#D7A77A] hover:text-[#E0E0E0] transition-colors duration-300"
                >
                  BurdenBound
                </Link>
                <ul className="mt-2 flex flex-row items-center md:items-end gap-x-4">
                  <li>
                    <Link
                      href="https://www.burdenbourne.com"
                      className="text-[#D7A77A] hover:text-[#E0E0E0] transition-colors duration-300 text-sm"
                    >
                      [Bourne]
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.burdenbrae.com"
                      className="text-[#D7A77A] hover:text-[#E0E0E0] transition-colors duration-300 text-sm"
                    >
                      [Brae]
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.burdenblythe.com"
                      className="text-[#D7A77A] hover:text-[#E0E0E0] transition-colors duration-300 text-sm"
                    >
                      [Blythe]
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.burdenbravura.com"
                      className="text-[#D7A77A] hover:text-[#E0E0E0] transition-colors duration-300 text-sm"
                    >
                      [Bravura]
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact" className="text-[#D7A77A] hover:text-[#E0E0E0] transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#D7A77A] hover:text-[#E0E0E0] transition-colors duration-300">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#D7A77A]/10 text-center md:text-left">
          <p className="text-[#E0E0E0] text-xs">&copy; {new Date().getFullYear()} BurdenBravura</p>
        </div>
      </div>
    </footer>
  )
}
