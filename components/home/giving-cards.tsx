import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"

const givingOptions = [
  {
    title: "Greatest Need",
    image: "/images/greatest-need.jpg",
    icon: Heart,
  },
  {
    title: "Become an ADRA Angel",
    image: "/images/adra-angel.jpg",
    icon: null,
    badge: "ADRA Angels",
  },
  {
    title: "Support in times of Crisis",
    image: "/images/crisis-support.jpg",
    icon: null,
  },
]

export function GivingCards() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {givingOptions.map((option) => (
            <Link
              key={option.title}
              href="/give"
              className="group relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden"
            >
              <Image
                src={option.image || "/placeholder.svg"}
                alt={option.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {option.icon && (
                <div className="absolute top-4 right-4">
                  <option.icon className="h-8 w-8 text-white fill-white/50" />
                </div>
              )}
              
              {option.badge && (
                <div className="absolute top-4 left-4 right-4">
                  <span className="text-white font-script text-2xl">{option.badge}</span>
                </div>
              )}
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {option.title}
                </h3>
                <span className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold rounded">
                  GIVE NOW
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
