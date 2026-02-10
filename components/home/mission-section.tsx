import Link from "next/link"
import Image from "next/image"

export function MissionSection() {
  return (
    <section className="py-12 md:py-16 text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="relative h-20 w-20 mx-auto mb-6">
          <Image
            src="/assets/angavu-logo.svg"
            alt="Kesho Angavu Logo - Brighter Tomorrow"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
          We believe in a Tanzania where every youth thrives
        </h2>
        <p className="text-muted-foreground mb-6">
          Since 2020, we've been empowering Tanzania's out-of-school youth with skills, values, and purpose.
          <br />
          Here's the impact we're creating together.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline group"
        >
          Our Journey
          <svg 
            className="w-4 h-4 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}