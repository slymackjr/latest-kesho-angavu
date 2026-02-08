import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { DonationForm } from "@/components/give/donation-form"

export default function GivePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed background image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/donation-children.jpg"
          alt="Children benefiting from your donation"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
      </div>

      {/* Scrollable content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Simple header for give page */}
        <header className="bg-primary py-3 shrink-0">
          <div className="container mx-auto px-4">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <svg
                viewBox="0 0 60 70"
                className="h-8 w-8 text-primary-foreground"
                fill="currentColor"
              >
                <circle cx="30" cy="25" r="22" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M30 8 C18 8 12 18 12 28 C12 38 22 48 30 55 C38 48 48 38 48 28 C48 18 42 8 30 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M20 28 L30 18 L40 28 M30 18 L30 40" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="text-primary-foreground font-bold text-sm tracking-wider">ADRA</span>
            </Link>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Form section - scrollable */}
              <div className="lg:w-1/2 xl:w-5/12">
                <div className="bg-background rounded-xl shadow-2xl p-6 md:p-8">
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                    Save lives, strengthen communities, share your love and compassion!
                  </h1>
                  <p className="text-muted-foreground mb-4">
                    Your generous gift now will have a direct and life-saving impact for
                    people and communities worldwide.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Through your support, you will provide families with emergency aid
                    — food, shelter, access to medical care and more — in times of
                    crisis or natural disaster AND longer-term, sustainable assistance to
                    people battling chronic hunger, homelessness and other life-threatening challenges, so they can live as God intended.
                  </p>
                  
                  <DonationForm />
                </div>
              </div>

              {/* Right side - empty space where fixed image shows through */}
              <div className="hidden lg:block lg:w-1/2 xl:w-7/12" />
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
