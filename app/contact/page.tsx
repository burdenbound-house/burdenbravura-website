import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto overhead-spotlight top-vignette">
      <h1 className="text-4xl md:text-5xl font-playfair text-center mb-4 metallic-champagne">Contact</h1>
      <p className="text-burnished-gold text-center max-w-2xl mx-auto mb-8 font-light font-playfair">
        Reach out to discuss collaborations, submissions, or inquiries
      </p>

      {/* Subtle burnished gold divider */}
      <div className="divider-burnished-gold mx-auto w-24 mb-12"></div>

      <ContactForm />
    </div>
  )
}
