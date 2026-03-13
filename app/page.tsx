import Hero from '@/components/Hero'
import CoreValues from '@/components/CoreValues'
import ProductShowcase from '@/components/ProductShowcase'
import Services from '@/components/Services'
import CTA from '@/components/CTA'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div>
      <Hero />
      <CoreValues />
      <ProductShowcase />
      <Services />
      <CTA />
    </div>
  )
}
