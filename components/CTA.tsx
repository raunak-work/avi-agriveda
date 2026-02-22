'use client'

import Link from 'next/link'
import { Mail, MessageCircle } from 'lucide-react'

export default function CTA() {
  // WhatsApp number - format: country code + number without + sign or spaces
  const whatsappNumber = '919876543210' // Update this with your actual WhatsApp number
  const emailAddress = 'shauryakhandelwal9@gmail.com'
  
  // Gmail compose link - opens Gmail in a new window/tab
  // This will open Gmail compose window if user is logged in, otherwise opens Gmail login
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent('Enquiry from Agroveda Exports Website')}&body=${encodeURIComponent('Hello,\n\nI am interested in learning more about Agroveda Exports products.\n\nThank you!')}`
  
  return (
    <section id="contact" className="py-16 bg-primary-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Have questions about our products or services? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              <Mail className="mr-2 w-5 h-5" />
              Email Us
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello, I am interested in Agroveda Exports products`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
