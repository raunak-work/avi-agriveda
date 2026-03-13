'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Menu, X, User } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()

  return (
    <nav className="sticky top-0 z-50 bg-forest-900/90 backdrop-blur supports-[backdrop-filter]:bg-forest-900/75 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-baseline gap-3">
            <span className="font-serif text-3xl tracking-tight text-white">
              Agri<span className="text-gold-300">veda</span>
            </span>
            <span className="hidden sm:inline text-xs uppercase tracking-[0.35em] text-white/70">
              Exports
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="/"
              className="text-sm uppercase tracking-[0.18em] text-white/80 hover:text-gold-200 transition"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm uppercase tracking-[0.18em] text-white/80 hover:text-gold-200 transition"
            >
              Products
            </Link>
            <Link
              href="/#services"
              className="text-sm uppercase tracking-[0.18em] text-white/80 hover:text-gold-200 transition"
            >
              Services
            </Link>
            <Link
              href="/#contact"
              className="text-sm uppercase tracking-[0.18em] text-white/80 hover:text-gold-200 transition"
            >
              Contact
            </Link>
            {session?.user.role === 'ADMIN' && (
              <Link
                href="/admin"
                className="text-sm uppercase tracking-[0.18em] text-white/80 hover:text-gold-200 transition"
              >
                Admin
              </Link>
            )}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {session ? (
              <button
                onClick={() => signOut()}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
              >
                <User className="h-4 w-4" />
                Sign Out
              </button>
            ) : (
              <Link
                href="/auth/signin"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
              >
                <User className="h-4 w-4" />
                Sign In
              </Link>
            )}

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-gold-500 px-6 py-2.5 text-sm font-extrabold uppercase tracking-[0.14em] text-forest-900 hover:bg-gold-400 transition shadow-[0_10px_30px_rgba(212,168,64,0.25)] active:scale-[0.99]"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 p-2 text-white hover:bg-white/10 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="mt-2 rounded-xl border border-white/10 bg-forest-900/80 p-4 space-y-3">
            <Link
              href="/"
              className="block text-sm uppercase tracking-[0.18em] text-white/85 hover:text-gold-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block text-sm uppercase tracking-[0.18em] text-white/85 hover:text-gold-200"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/#services"
              className="block text-sm uppercase tracking-[0.18em] text-white/85 hover:text-gold-200"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#contact"
              className="block text-sm uppercase tracking-[0.18em] text-white/85 hover:text-gold-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            {session?.user.role === 'ADMIN' && (
              <Link
                href="/admin"
                className="block text-sm uppercase tracking-[0.18em] text-white/85 hover:text-gold-200"
                onClick={() => setIsOpen(false)}
              >
                Admin
              </Link>
            )}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              {session ? (
                <button
                  onClick={() => {
                    signOut()
                    setIsOpen(false)
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                >
                  <User className="h-4 w-4" />
                  Sign Out
                </button>
              ) : (
                <Link
                  href="/auth/signin"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="h-4 w-4" />
                  Sign In
                </Link>
              )}

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-gold-500 px-6 py-2.5 text-sm font-extrabold uppercase tracking-[0.14em] text-forest-900 hover:bg-gold-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
          </div>
        )}
      </div>
    </nav>
  )
}
