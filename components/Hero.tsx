import Link from 'next/link'
import Reveal from '@/components/Reveal'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      {/* Put your hero photo at `public/hero-farm.jpg` */}
      <div className="absolute inset-0 hero-kenburns bg-no-repeat bg-[image:url('/hero-farm.jpg'),url('/hero-farm.svg')] bg-[position:center,center] bg-[size:cover,cover]" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900/55 via-forest-900/55 to-forest-900/85" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_20%,rgba(217,151,38,0.12),transparent_55%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-cream-100/95" />

      <div className="container mx-auto px-4">
        <div className="relative flex min-h-[calc(100vh-5rem)] items-center py-16 md:py-24">
          <div className="max-w-4xl">
            <Reveal>
              <p className="text-gold-200/90 uppercase tracking-[0.45em] text-xs sm:text-sm">
                Premium Indian Agro Exports
              </p>
            </Reveal>

            <Reveal delayMs={80}>
              <h1 className="mt-5 font-serif text-4xl sm:text-5xl md:text-7xl leading-[1.05] tracking-tight">
                From India&apos;s Finest Farms{' '}
                <span className="block text-gold-300">To The World</span>
              </h1>
            </Reveal>

            <Reveal delayMs={140}>
              <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                Agroveda Exports delivers premium turmeric, ashwagandha, moringa
                &amp; cumin — sourced with integrity, exported with excellence.
              </p>
            </Reveal>

            <Reveal delayMs={200}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-lg bg-gold-500 px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-forest-900 hover:bg-gold-400 transition shadow-[0_16px_40px_rgba(212,168,64,0.22)] active:scale-[0.99]"
                >
                  Explore Products
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/5 px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-white hover:bg-white/10 transition active:scale-[0.99]"
                >
                  Request Quote
                </Link>
              </div>
            </Reveal>

            <Reveal delayMs={260}>
              <div className="mt-10 flex items-center gap-3 text-white/60">
                <span className="text-sm uppercase tracking-[0.35em]">Scroll</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5">
                  ↓
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
