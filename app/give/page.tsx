import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { DonationForm } from "@/components/give/donation-form"
import { Target, Heart, Users, Sparkles } from "lucide-react"

export default function GivePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed background image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/assets/image2.JPG"
          alt="Tanzanian youth learning digital skills at Kesho Angavu workshop"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Scrollable content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Simple header for give page */}
        <header className="bg-indigo-700/90 backdrop-blur-sm py-3 shrink-0 border-b border-indigo-800">
          <div className="container mx-auto px-4">
            <Link href="/" className="flex items-center gap-2 w-fit group">
              <div className="relative h-8 w-8 transition-transform group-hover:scale-105">
                <Image
                  src="/assets/angavu-logo.svg"
                  alt="Kesho Angavu - Brighter Tomorrow"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-white font-bold text-sm tracking-wider">
                KESHO ANGAVU
              </span>
            </Link>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Form section - scrollable */}
              <div className="lg:w-1/2 xl:w-5/12">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 md:p-8 border border-gray-100">
                  
                  {/* Impact Badge */}
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-6">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold text-primary">YOUR GIFT. THEIR FUTURE.</span>
                  </div>
                  
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-balance">
                    Invest in a Generation of Tanzanian Changemakers
                  </h1>
                  
                  <p className="text-gray-700 mb-4">
                    Your support provides out-of-school youth with practical skills, mentorship, 
                    and health education—equipping them to build sustainable livelihoods and break 
                    the cycle of poverty.
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-6 border-l-4 border-primary">
                    <p className="text-sm text-gray-700 italic">
                      "The tailoring course not only gave me skills, but also hope. I now run my own 
                      small shop and teach others in my neighborhood."
                    </p>
                    <p className="text-xs font-medium text-gray-500 mt-2">— Amina, Tailoring Graduate</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Target className="h-4 w-4 text-primary shrink-0" />
                      <span>Skills for self-reliance</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Heart className="h-4 w-4 text-primary shrink-0" />
                      <span>Health & wellness</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Users className="h-4 w-4 text-primary shrink-0" />
                      <span>Mentorship & leadership</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Sparkles className="h-4 w-4 text-primary shrink-0" />
                      <span>Community impact</span>
                    </div>
                  </div>
                  
                  <DonationForm />
                  
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    Kesho Angavu is an initiative of TUCASA MUHAS. Your donation is tax-deductible 
                    and directly supports youth in Dar es Salaam, Tanzania.
                  </p>
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