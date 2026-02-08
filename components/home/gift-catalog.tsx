import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Gift } from "lucide-react"

const gifts = [
  {
    title: "Clean Water for Everyone",
    description: "When unexpected needs arise, your gift is there to fill the gap.",
    price: "$100",
    image: "/images/greatest-need.jpg",
  },
  {
    title: "Feed Hungry Children",
    description: "Hunger is on the rise. Your gift can feed a child for a year.",
    price: "$180",
    image: "/images/adra-angel.jpg",
  },
  {
    title: "A Home for Orphans",
    description: "A home is a place to be loved and cared for. Give an orphan a home.",
    price: "$60",
    image: "/images/crisis-support.jpg",
  },
  {
    title: "Goats",
    description: "A pair of goats can help feed a family with milk and cheese.",
    price: "$100",
    image: "/images/hero-child.jpg",
  },
]

export function GiftCatalog() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Gift Catalog
          </h2>
          <p className="text-muted-foreground mb-4">Explore our Fall Gifts</p>
          <Button variant="outline" asChild>
            <Link href="/give" className="gap-2">
              <Gift className="h-4 w-4" />
              More Gifts
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gifts.map((gift) => (
            <div key={gift.title} className="group">
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <Image
                  src={gift.image || "/placeholder.svg"}
                  alt={gift.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{gift.title}</h3>
              <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{gift.description}</p>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Gift className="h-4 w-4" />
                {gift.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
