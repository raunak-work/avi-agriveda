import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Delivering Premium Agricultural Products to the World
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Agroveda Exports is dedicated to becoming a world leader in
            agricultural exports, ensuring communities globally have access to
            sustainable, healthy, and premium-quality agro-products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
            >
              Explore Products
            </Link>
            <Link
              href="/#contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
