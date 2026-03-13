import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-14">
          <div>
            <h3 className="font-serif text-3xl font-bold tracking-tight mb-4">
              Agri<span className="text-gold-300">veda</span>{' '}
              <span className="text-white/70 text-base font-sans uppercase tracking-[0.35em] ml-2">
                Exports
              </span>
            </h3>
            <p className="text-white/70 leading-relaxed">
              Delivering premium quality agricultural products to global markets.
              Your trusted partner in agricultural exports.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-[0.25em] text-white/80 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-white/70 hover:text-gold-200 transition"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-white/70 hover:text-gold-200 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-white/70 hover:text-gold-200 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-[0.25em] text-white/80 mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a
                  href="mailto:shauryakhandelwal9@gmail.com"
                  className="hover:text-gold-200 transition"
                >
                  Email: shauryakhandelwal9@gmail.com
                </a>
              </li>
              <li>Phone: +91-XXXXX-XXXXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Agroveda Exports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
