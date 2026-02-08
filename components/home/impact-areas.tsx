import Image from "next/image"
import Link from "next/link"
import { Heart, GraduationCap, DollarSign, AlertTriangle } from "lucide-react"

const impactAreas = [
  {
    icon: Heart,
    title: "HEALTH",
    description: "Building healthy communities.",
  },
  {
    icon: GraduationCap,
    title: "EDUCATION",
    description: "Removing obstacles to Education.",
  },
  {
    icon: DollarSign,
    title: "LIVELIHOODS",
    description: "Planting seeds for the future.",
  },
  {
    icon: AlertTriangle,
    title: "EMERGENCY",
    description: "Providing relief and rebuilding communities.",
  },
]

export function ImpactAreas() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Image and description */}
          <div>
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-6">
              <Image
                src="/images/adra-in-action.jpg"
                alt="ADRA in Action"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              ADRA in Action
            </h2>
            <p className="text-muted-foreground mb-4">
              We work in 4 key impact areas to address the root causes of poverty, creating lasting change
              in communities around the world.
            </p>
            <Link href="/impact" className="text-primary font-semibold hover:underline">
              Learn More
            </Link>
          </div>

          {/* Right side - Impact area cards */}
          <div className="grid grid-cols-2 gap-4">
            {impactAreas.map((area) => (
              <Link
                key={area.title}
                href="/impact"
                className="group p-6 border border-border rounded-xl hover:border-primary hover:shadow-md transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <area.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
