import { Globe, Package, FileText, Users } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import Reveal from '@/components/Reveal'

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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Export-Ready Services"
            description="Comprehensive solutions for sourcing, quality, packaging, and global dispatch."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delayMs={index * 70}>
              <div className="group p-7 rounded-2xl border border-forest-900/10 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-forest-50 rounded-xl mb-5 border border-forest-900/10 shadow-sm group-hover:shadow-md transition">
                  <service.icon className="w-6 h-6 text-forest-700" />
                </div>
                <h3 className="text-xl font-semibold text-forest-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-forest-900/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
