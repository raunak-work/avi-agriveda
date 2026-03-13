import ProductCard from '@/components/ProductCard'
import { getDb } from '@/lib/mongodb'
import type { ProductDoc } from '@/lib/models'
import { serializeProduct } from '@/lib/serialize'

export const dynamic = 'force-dynamic'

async function getProducts() {
  const db = await getDb()
  const products = await db
    .collection<ProductDoc>('products')
    .find({ inStock: true })
    .sort({ createdAt: -1 })
    .toArray()

  return products.map(serializeProduct)
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of high-quality agricultural exports, carefully
            sourced and processed to meet international standards.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No products available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
