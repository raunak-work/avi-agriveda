interface Product {
  id: string
  name: string
  description: string
  imageUrl?: string | null
  price?: number | null
  unit?: string | null
  inStock: boolean
}

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-96 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
          {product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-8xl">🌾</span>
          )}
        </div>
        <div className="p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          <div className="mb-6">
            {product.inStock ? (
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                In Stock
              </span>
            ) : (
              <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                Out of Stock
              </span>
            )}
          </div>
          {product.price && (
            <p className="text-2xl font-bold text-primary-600 mb-6">
              {product.price} {product.unit || '/kg'}
            </p>
          )}
          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
