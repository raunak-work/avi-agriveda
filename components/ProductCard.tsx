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
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group"
    >
      <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-5xl">🌾</span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>
        {product.price && (
          <p className="text-primary-600 font-semibold mb-4">
            {product.price} {product.unit || '/kg'}
          </p>
        )}
        <div className="flex items-center text-primary-600 font-semibold">
          View Details
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
        </div>
      </div>
    </Link>
  )
}
