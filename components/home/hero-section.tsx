import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {/* Main hero */}
        <div className="relative md:col-span-1 lg:col-span-2 h-[400px] md:h-[500px]">
          <Image
            src="/assets/image6.JPG"
            alt="Child benefiting from ADRA programs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white max-w-xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-balance">
              Your Support, Their Breakthrough
            </h1>
            <p className="text-sm md:text-base text-white/90 mb-4">
              Every contribution creates a ripple effect of change. You're not just giving a donation—you're investing in a young person's journey from vulnerability to victory, equipping them with skills that last a lifetime.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/give">DONATE NOW</Link>
            </Button>
          </div>
        </div>

        {/* Side stories */}
        <div className="hidden lg:grid grid-rows-2">
          <div className="relative h-[250px]">
            <Image
              src="/assets/image7.JPG"
              alt="Kesho Angavu in action"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="font-semibold text-lg">See the Future They're Building</h3>
              <p className="text-sm text-white/80">And Be Part of Their Story</p>
            </div>
          </div>
          <div className="relative h-[250px]">
            <Image
              src="/assets/image8.JPG"
              alt="active"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="font-semibold text-lg">Change From Within</h3>
              <p className="text-sm text-white/80">Empowerment That Starts Here, in Tanzania</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
