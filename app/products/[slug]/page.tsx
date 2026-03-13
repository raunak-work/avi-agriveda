import { notFound } from 'next/navigation'
import ProductDetail from '@/components/ProductDetail'
import EnquiryForm from '@/components/EnquiryForm'
import { getDb } from '@/lib/mongodb'
import type { ProductDoc } from '@/lib/models'
import { serializeProduct } from '@/lib/serialize'

export const dynamic = 'force-dynamic'

async function getProduct(slug: string) {
  const db = await getDb()
  const product = await db.collection<ProductDoc>('products').findOne({ slug })
  return product ? serializeProduct(product) : null
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <ProductDetail product={product} />
        <div className="mt-12 max-w-2xl mx-auto">
          <EnquiryForm productId={product.id} productName={product.name} />
        </div>
      </div>
    </div>
  )
}
