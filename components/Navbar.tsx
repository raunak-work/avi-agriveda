'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            Agroveda Exports
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 transition"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-primary-600 transition"
            >
              Our Products
            </Link>
            <Link
              href="/#services"
              className="text-gray-700 hover:text-primary-600 transition"
            >
              Services
            </Link>
            <Link
              href="/#contact"
              className="text-gray-700 hover:text-primary-600 transition"
            >
              Contact Us
            </Link>
            {session?.user.role === 'ADMIN' && (
              <Link
                href="/admin"
                className="text-gray-700 hover:text-primary-600 transition"
              >
                Admin
              </Link>
            )}
            {session ? (
              <button
                onClick={() => signOut()}
                className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition"
              >
                Sign Out
              </button>
            ) : (
              <Link
                href="/auth/signin"
                className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Our Products
            </Link>
            <Link
              href="/#services"
              className="block text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#contact"
              className="block text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            {session?.user.role === 'ADMIN' && (
              <Link
                href="/admin"
                className="block text-gray-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Admin
              </Link>
            )}
            {session ? (
              <button
                onClick={() => {
                  signOut()
                  setIsOpen(false)
                }}
                className="block w-full text-left bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700"
              >
                Sign Out
              </button>
            ) : (
              <Link
                href="/auth/signin"
                className="block w-full text-left bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
