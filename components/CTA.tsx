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
    <section id="contact" className="py-20 bg-forest-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-200/90 uppercase tracking-[0.45em] text-xs sm:text-sm">
            Contact
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/75">
            Have questions about our products or services? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gold-500 text-forest-900 px-7 py-3.5 rounded-lg font-extrabold uppercase tracking-[0.14em] hover:bg-gold-400 transition shadow-[0_16px_40px_rgba(212,168,64,0.22)] active:scale-[0.99]"
            >
              <Mail className="mr-2 w-5 h-5" />
              Email Us
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello, I am interested in Agroveda Exports products`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white/5 border border-white/25 text-white px-7 py-3.5 rounded-lg font-extrabold uppercase tracking-[0.14em] hover:bg-white/10 transition active:scale-[0.99]"
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
