import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getDb } from '@/lib/mongodb'
import type { ProductDoc } from '@/lib/models'
import { serializeProduct } from '@/lib/serialize'
import SectionHeading from '@/components/SectionHeading'
import Reveal from '@/components/Reveal'

async function getFeaturedProducts() {
  const db = await getDb()
  const products = await db
    .collection<ProductDoc>('products')
    .find({ inStock: true })
    .sort({ createdAt: -1 })
    .limit(4)
    .toArray()

  return products.map(serializeProduct)
}

export default async function ProductShowcase() {
  const products = await getFeaturedProducts()

  return (
    <section className="py-20 bg-gradient-to-b from-cream-100 to-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Products"
            title="Premium, Export-Grade Ingredients"
            description="Curated selection sourced from trusted farms, processed with care, and delivered globally."
          />
        </Reveal>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {products.map((product, index) => (
              <Reveal key={product.id} delayMs={index * 70}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group rounded-2xl border border-forest-900/10 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
                >
                  <div className="relative h-52 bg-gradient-to-br from-forest-50 to-forest-100 flex items-center justify-center overflow-hidden">
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover scale-[1.01] group-hover:scale-[1.04] transition duration-500"
                      />
                    ) : (
                      <span className="text-5xl">🌾</span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-forest-900 mb-2 group-hover:text-forest-700 transition">
                      {product.name}
                    </h3>
                    <p className="text-forest-900/70 text-sm leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                    <div className="mt-5 flex items-center text-forest-700 font-semibold">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="text-center py-12">
              <p className="text-forest-900/60">Products will be available soon.</p>
            </div>
          </Reveal>
        )}

        <div className="text-center">
          <Reveal delayMs={120}>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-lg bg-forest-900 px-8 py-3.5 text-sm font-extrabold uppercase tracking-[0.14em] text-white hover:bg-forest-800 transition shadow-[0_14px_40px_rgba(25,67,55,0.22)]"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
