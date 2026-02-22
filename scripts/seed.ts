import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@agrovedaexports.com' },
    update: {},
    create: {
      email: 'admin@agrovedaexports.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'ADMIN', // String value for SQLite
    },
  })

  console.log('Admin user created:', admin.email)

  // Create products
  const products = [
    {
      name: 'Turmeric',
      slug: 'turmeric',
      description: `Premium quality turmeric powder, carefully sourced and processed to maintain its natural color, flavor, and medicinal properties. Our turmeric is rich in curcumin and meets international quality standards.

Key Features:
- 100% pure and natural
- Rich in curcumin content
- Free from additives and preservatives
- Suitable for culinary and medicinal use
- Packed in food-grade packaging

Ideal for export to global markets, our turmeric powder is perfect for food manufacturers, spice companies, and health supplement industries.`,
      price: 15.99,
      unit: '/kg',
      inStock: true,
    },
    {
      name: 'Ashwagandha',
      slug: 'ashwagandha',
      description: `High-quality Ashwagandha root powder, known for its adaptogenic properties and health benefits. Sourced from premium organic farms and processed using traditional methods.

Key Features:
- Organic and pure
- High concentration of withanolides
- Traditional processing methods
- Free from contaminants
- Lab tested for quality

Perfect for pharmaceutical companies, nutraceutical manufacturers, and wellness brands looking for premium quality Ashwagandha for their products.`,
      price: 25.99,
      unit: '/kg',
      inStock: true,
    },
    {
      name: 'Moringa',
      slug: 'moringa',
      description: `Nutrient-dense Moringa leaf powder, packed with vitamins, minerals, and antioxidants. Our Moringa is harvested at peak nutrition and carefully dried to preserve its nutritional value.

Key Features:
- Rich in vitamins A, C, and E
- High protein content
- Abundant in iron and calcium
- Antioxidant properties
- Suitable for dietary supplements

Ideal for health food companies, supplement manufacturers, and nutrition brands seeking high-quality Moringa powder for their product lines.`,
      price: 18.99,
      unit: '/kg',
      inStock: true,
    },
    {
      name: 'Chia Seeds',
      slug: 'chia-seeds',
      description: `Premium quality Chia seeds, known for their high omega-3 fatty acid content and nutritional benefits. Our Chia seeds are carefully cleaned, sorted, and packed to ensure maximum freshness.

Key Features:
- High omega-3 content
- Rich in fiber and protein
- Gluten-free
- Non-GMO
- Cleaned and sorted

Perfect for food manufacturers, health food stores, and export markets looking for premium quality Chia seeds for various applications including bakery, beverages, and health supplements.`,
      price: 12.99,
      unit: '/kg',
      inStock: true,
    },
  ]

  for (const product of products) {
    const created = await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    })
    console.log(`Product created/updated: ${created.name}`)
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
