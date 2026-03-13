import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Product {
  id: string
  name: string
  slug: string
  description: string
  imageUrl?: string | null
  price?: number | null
  unit?: string | null
}

export default function ProductCard({ product }: { product: Product }) {
  return (
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
        <p className="text-forest-900/70 text-sm mb-4 leading-relaxed line-clamp-3">
          {product.description}
        </p>
        {product.price && (
          <p className="text-forest-800 font-semibold mb-4">
            {product.price} {product.unit || '/kg'}
          </p>
        )}
        <div className="flex items-center text-forest-700 font-semibold">
          View Details
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
        </div>
      </div>
    </Link>
  )
}
