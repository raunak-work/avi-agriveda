import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Agroveda Exports</h3>
            <p className="text-gray-400">
              Delivering premium quality agricultural products to global markets.
              Your trusted partner in agricultural exports.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:shauryakhandelwal9@gmail.com" className="hover:text-white transition">
                  Email: shauryakhandelwal9@gmail.com
                </a>
              </li>
              <li>Phone: +91-XXXXX-XXXXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Agroveda Exports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
