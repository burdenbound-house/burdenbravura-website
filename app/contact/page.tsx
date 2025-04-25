import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-playfair text-center mb-4">Contact</h1>
      <p className="text-[#E0E0E0] text-center max-w-2xl mx-auto mb-12 font-light">
        Reach out to discuss collaborations, submissions, or inquiries about our publications.
      </p>

      <ContactForm />
    </div>
  )
}
