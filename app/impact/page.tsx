import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const stats = [
  {
    value: "2 billion",
    description: "The estimated number of people worldwide who do not have basic sanitation, including toilets, in their home.",
  },
  {
    value: "785 million",
    description: "The number of people worldwide who do not have access to basic water services, including a well.",
  },
  {
    value: "810",
    description: "The number of women who die each day from preventable causes related to childbirth and pregnancy.",
  },
  {
    value: "1 out of 27",
    description: "The number of children who will die before the age of 5, due to malnutrition and other conditions of extreme poverty.",
  },
]

const didYouKnow = [
  "Improving access to safe water sources",
  "Providing hygiene and sanitation solutions",
  "Helping families access nourishing food",
  "Supporting pregnant women and mothers with maternal and infant health and nutrition",
  "Training community health workers and supplying transport solutions",
  "Psychosocial support",
]

const stories = [
  {
    title: "Love Without Borders: Compassion That Crosses Continents",
    author: "By Paulo Lopes, President, ADRA International. In my three decades of humanitarian work, one truth...",
    image: "/images/greatest-need.jpg",
  },
  {
    title: "Gen Z Christians Are Championing Healthy Lifestyles",
    author: "On a crisp morning in Mongolia, a group of teenagers head outdoors. They are part of NextGen CELEBRATIONS, a youth-led initiative...",
    image: "/images/adra-angel.jpg",
  },
  {
    title: "World Toilet Day 2025: Building a Future Where Everyone Has a Safe Toilet",
    author: "Every person deserves the dignity of a safe toilet. Yet, in 2025, nearly half the...",
    image: "/images/health-hero.jpg",
  },
]

const impactTabs = [
  { id: "health", label: "Health", active: true },
  { id: "education", label: "Education", active: false },
  { id: "livelihoods", label: "Livelihoods", active: false },
  { id: "emergency", label: "Emergency", active: false },
]

export default function ImpactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Hero with sidebar context */}
        <section className="border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 py-12">
              {/* Left - Page context */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Long Term Development</h2>
                <p className="text-muted-foreground">
                  Our programs are geared for sustainable change. We work alongside
                  communities, empowering them to build a better tomorrow.
                </p>
                <Link href="/impact" className="text-primary font-semibold hover:underline inline-block">
                  See Impact
                </Link>
              </div>
              
              {/* Middle - Navigation tabs */}
              <div className="space-y-1">
                {impactTabs.map((tab) => (
                  <Link
                    key={tab.id}
                    href="/impact"
                    className={`block px-4 py-3 text-sm font-medium transition-colors ${
                      tab.active
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground border-b border-border hover:bg-muted"
                    }`}
                  >
                    {tab.label}
                  </Link>
                ))}
              </div>
              
              {/* Right - Hero image */}
              <div className="relative h-[250px] lg:h-full min-h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/images/health-hero.jpg"
                  alt="Health programs at ADRA"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Title Section with image banner */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="/images/health-hero.jpg"
            alt="Health programs at ADRA"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center italic font-serif">
              Health
            </h1>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.value} className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Long Term Development Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Long Term Development
                </h2>
                <p className="text-muted-foreground mb-4">
                  Our programs are geared for sustainable change. We work alongside
                  communities, empowering them to build a better tomorrow.
                </p>
                <Link href="/impact" className="text-primary font-semibold hover:underline">
                  See Impact
                </Link>
              </div>
              <div className="space-y-2">
                {impactTabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`p-4 rounded-lg border transition-colors ${
                      tab.active
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-foreground border-border hover:border-primary cursor-pointer"
                    }`}
                  >
                    {tab.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Your Support Section */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Your Support Builds Healthy Communities
            </h2>
            <p className="text-muted-foreground mb-4">
              Health is at the heart of so much of the world&apos;s poverty and suffering. When communities don&apos;t have enough food, when they
              depend on unsafe water sources, when they don&apos;t have access to reliable health support, every life suffers.
            </p>
            <p className="text-muted-foreground">
              Finding sustainable ways to improve access to nutrition, clean water, and health resources can be the difference between life
              and death for the men, women, and children you help us serve around the world every day.
            </p>
          </div>
        </section>

        {/* Did You Know Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Did you know?
            </h2>
            <p className="text-muted-foreground mb-4">
              Our health can be affected by almost all aspects of our lives.
            </p>
            <p className="text-muted-foreground mb-6">
              Here are just some of the ways that you&apos;re helping to build healthier lives for those we serve:
            </p>
            <ul className="space-y-3">
              {didYouKnow.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Impact Counter */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">2,291,212 Lives</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              In 2024, your generosity impacted 2,291,212 lives and supported more than 176 projects in Health activities around the world.
            </p>
          </div>
        </section>

        {/* Stories Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stories.map((story) => (
                <article key={story.title} className="border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{story.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{story.author}</p>
                    <Link href="#" className="text-sm text-primary font-medium mt-3 inline-block hover:underline">
                      Read More &raquo;
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
