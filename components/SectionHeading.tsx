interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center'

  return (
    <div className={`${alignClass} mb-12`}>
      {eyebrow && (
        <p className="text-gold-600 uppercase tracking-[0.45em] text-xs sm:text-sm">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 font-serif text-3xl md:text-5xl font-bold text-forest-900 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-forest-900/70 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}

