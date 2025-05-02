import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-playfair text-center mb-4 metallic-champagne">About</h1>
      <p className="text-burnished-gold text-center max-w-2xl mx-auto mb-8 font-light">Our mission and philosophy</p>

      {/* Subtle burnished gold divider */}
      <div className="divider-burnished-gold mx-auto w-24 mb-12"></div>

      <div className="prose prose-invert max-w-none bg-[#120003] p-8 shadow-md">
        <p className="text-champagne text-lg leading-relaxed mb-6 font-light">
          A Space to Witness. A Place to Be Witnessed.
        </p>

        <p className="text-[#E0E0E0] leading-relaxed mb-6 font-light">
          BurdenBravura exists at the intersection of art and documentation. We believe in the power of visual
          storytelling—not merely as aesthetic exercise, but as essential cultural record.
        </p>

        <p className="text-[#E0E0E0] leading-relaxed mb-6 font-light">
          Our publications span photography, illustration, and mixed media, united by a commitment to work that
          challenges perception and illuminates truth. We seek artists who approach their craft with both technical
          precision and conceptual depth.
        </p>

        <p className="text-[#E0E0E0] leading-relaxed mb-6 font-light">
          Each BurdenBravura publication is a testament to the power of visual storytelling—crafted with precision,
          published with purpose, and presented without compromise.
        </p>

        <p className="text-[#E0E0E0] leading-relaxed mb-6 font-light">
          We believe in the tangible. In an increasingly digital world, we remain committed to physical artifacts that
          demand presence and invite contemplation. Our books are designed to be experienced, not merely consumed.
        </p>

        <p className="text-[#E0E0E0] leading-relaxed mb-6 font-light">
          We believe in the enduring. Our publications are created to last, both in their physical construction and in
          their cultural relevance.
        </p>

        <p className="text-[#E0E0E0] leading-relaxed mb-6 font-light">
          We believe in the essential. In a world of endless content, we choose to publish only what matters—work that
          demands to exist and deserves to persist.
        </p>

        <h2 className="text-2xl font-playfair text-burnished-gold mt-12 mb-6">Submit Your Work</h2>

        <p className="text-[#E0E0E0] leading-relaxed mb-8 font-light">
          BurdenBravura accepts portfolio submissions from established and emerging visual artists. We seek work that
          demonstrates technical excellence, conceptual depth, and a distinct point of view.
        </p>

        <div className="flex justify-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 border-2 border-champagne text-champagne hover:text-[#1A0106] hover:bg-champagne transition-all duration-300 text-lg tracking-wide"
          >
            Submit Your Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}
