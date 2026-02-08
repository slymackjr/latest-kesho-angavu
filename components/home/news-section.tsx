import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const newsItems = [
  {
    category: "BLOG, VOICES",
    title: "Love Without Borders: Compassion That Crosses Continents",
    image: "/images/greatest-need.jpg",
  },
  {
    category: "IN THE FIELD",
    title: "Gen Z Christians Are Championing Healthy Lifestyles",
    image: "/images/adra-angel.jpg",
  },
  {
    category: "NEWS",
    title: "Education Is a Lifeline for Girls in Crisis-Affected Countries",
    image: "/images/health-hero.jpg",
  },
]

export function NewsSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <article key={item.title} className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-muted-foreground font-medium">{item.category}</span>
                <h3 className="font-semibold text-foreground mt-2 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <Link href="#" className="text-sm text-primary font-medium flex items-center gap-1 hover:underline">
                  READ <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
          
          {/* More news card */}
          <Link
            href="#"
            className="bg-primary rounded-xl p-6 flex flex-col justify-center items-center text-center text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-2">More news</h3>
            <ArrowRight className="h-8 w-8" />
          </Link>
        </div>
      </div>
    </section>
  )
}
