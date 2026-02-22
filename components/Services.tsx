import { Globe, Package, FileText, Users } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Agro-Products Export',
    description:
      'Global export services for premium agricultural products with full documentation and compliance support.',
  },
  {
    icon: Package,
    title: 'Quality Assurance',
    description:
      'Rigorous quality control and testing to ensure all products meet international standards.',
  },
  {
    icon: FileText,
    title: 'Custom Packaging',
    description:
      'Tailored packaging solutions to meet your specific requirements and branding needs.',
  },
  {
    icon: Users,
    title: 'Partnership Programs',
    description:
      'Collaborative opportunities for distributors and partners worldwide.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your agricultural export needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-lg transition"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                <service.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
