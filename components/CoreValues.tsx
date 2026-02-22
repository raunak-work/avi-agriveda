import { Award, Leaf, Shield, Heart } from 'lucide-react'

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do at Agroveda Exports
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <value.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
