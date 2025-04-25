"use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    portfolioLink: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: "",
      email: "",
      message: "",
      portfolioLink: "",
    })
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {isSubmitted ? (
        <div className="text-center p-8 border border-[#D7A77A]/30 rounded bg-[#120003]">
          <h3 className="text-xl font-playfair text-white mb-4">Thank you for reaching out.</h3>
          <p className="text-[#E0E0E0] font-light">We'll be in touch soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-[#120003] p-8 shadow-md">
          <div>
            <label htmlFor="name" className="block text-[#E0E0E0] mb-2 font-light">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#1A0106] border border-[#D7A77A]/30 focus:border-[#D7A77A] text-white outline-none transition-colors duration-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[#E0E0E0] mb-2 font-light">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#1A0106] border border-[#D7A77A]/30 focus:border-[#D7A77A] text-white outline-none transition-colors duration-300"
            />
          </div>

          <div>
            <label htmlFor="portfolioLink" className="block text-[#E0E0E0] mb-2 font-light">
              Portfolio Link (Optional)
            </label>
            <input
              type="url"
              id="portfolioLink"
              name="portfolioLink"
              value={formData.portfolioLink}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#1A0106] border border-[#D7A77A]/30 focus:border-[#D7A77A] text-white outline-none transition-colors duration-300"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-[#E0E0E0] mb-2 font-light">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#1A0106] border border-[#D7A77A]/30 focus:border-[#D7A77A] text-white outline-none transition-colors duration-300 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-3 border-2 border-[#D7A77A] text-[#D7A77A] hover:bg-[#D7A77A] hover:text-[#1A0106] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  )
}
