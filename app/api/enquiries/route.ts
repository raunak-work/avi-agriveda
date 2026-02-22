import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const enquirySchema = z.object({
  productId: z.string(),
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  message: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = enquirySchema.parse(body)

    const enquiry = await prisma.enquiry.create({
      data,
    })

    // In a real application, you would send emails and WhatsApp messages here
    // For now, we'll just return success

    return NextResponse.json(
      {
        message: 'Enquiry submitted successfully',
        enquiry,
        whatsappLink: `https://wa.me/${process.env.WHATSAPP_NUMBER || '919876543210'}?text=Hello, I am interested in ${data.name}`,
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json(
      { error: 'Failed to submit enquiry' },
      { status: 500 }
    )
  }
}
