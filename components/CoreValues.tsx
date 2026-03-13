import { Award, Leaf, Shield, Heart } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import Reveal from '@/components/Reveal'

const values = [
  {
    icon: Award,
    title: 'Quality',
    description:
      'We maintain the highest standards in sourcing and processing our agricultural products.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'Committed to sustainable farming practices that protect our environment for future generations.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'Transparent business practices and honest relationships with all our partners.',
  },
  {
    icon: Heart,
    title: 'Social Responsibility',
    description:
      'Supporting local farmers and communities while delivering global excellence.',
  },
]

export default function CoreValues() {
  return (
    <section className="py-20 bg-gradient-to-b from-cream-50 to-forest-50/40">
      <div className="container mx-auto px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Values"
            title="Our Core Values"
            description="The principles that guide everything we do at Agroveda Exports."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Reveal key={index} delayMs={index * 70}>
              <div className="group text-center p-7 rounded-2xl border border-forest-900/10 bg-white/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 bg-forest-50 border border-forest-900/10 shadow-sm group-hover:shadow-md transition">
                  <value.icon className="w-7 h-7 text-forest-700" />
                </div>
                <h3 className="text-xl font-semibold text-forest-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-forest-900/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
