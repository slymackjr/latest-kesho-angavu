import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const leaders = [
  {
    name: "Paulo Lopes",
    title: "President",
    image: "/images/leader-paulo.jpg",
    bio: `Paulo Lopes was appointed president of ADRA International after three decades of service with the agency.

Lopes brings extensive humanitarian experience from a career spanning multiple countries at both field level and in global leadership, most recently serving as Regional Director of ADRA South America. He has been instrumental in expanding ADRA's impact worldwide, particularly through his role in the development of a new strategic framework for the organization's 118 network offices.

Lopes is dedicated to empowering communities, embracing innovation, and creating opportunities for all to reach their God-given potential. Under his leadership, ADRA moves into a new chapter focused on faith and continuing to serve with justice, compassion, and love.

Lopes has been married to his wife, Edna, for almost 40 years, and the couple have two adult sons, Lucas and Marcos.`,
  },
  {
    name: "Imad Madanat",
    title: "VP For Humanitarian Affairs & Excellence",
    image: "/images/leader-imad.jpg",
    bio: `Imad Madanat was selected as Vice President for Humanitarian Affairs in October 2023, having served as the Vice President for Programs since 2013. The ADRA veteran has served the agency for more than a decade in various roles, including Senior Program Finance Manager and Country Finance Director in Yemen. Madanat's wealth of experience includes program expansion into new countries and managing portfolios of innovative projects.`,
  },
  {
    name: "Jair Parada",
    title: "VP For Finance",
    image: "/images/leader-jair.jpg",
    bio: `As the Vice President of Finance, Jair Parada is a visionary finance leader with more than 27 years of global experience transforming organizations and advancing mission impact across the international development and faith-based sectors. As Senior Director for Finance and Operations at ADRA International, he lead complex strategic initiatives - including the global rollout of SunPlus and a comprehensive accounting system transformation - strengthening financial systems, enhancing compliance, and aligning resources with strategic priorities.

Mr. Parada holds a Master of Science in Administration from Andrews University and a BBA in Accounting from Central America Adventist University. Fluent in English, Spanish, and Portuguese, he brings a global perspective, a deep sectoral insight and a commitment to ethical stewardship in every aspect of his work.`,
  },
  {
    name: "Teresa Ferreira",
    title: "VP For Strategic Engagement & Growth",
    image: "/images/leader-teresa.jpg",
    bio: `Teresa Ferreira was appointed as Vice President of Strategic Engagement & Growth in October of 2025. More recently she served in the Philanthropy & Marketing department at ADRA Canada. She comes from a diverse leadership background within the Adventist Church, including education and conference administration. Teresa sees the Adventist faith as a legacy of truth seekers, committed Christ-followers and Advent Hope messengers. The passion to keep the young and old, alike, in our church and spiritually on fire for an absolute God of love in a world that tramples compromise is woven into every detail of who she is and what she represents.`,
  },
]

export default function LeadershipPage() {
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
                <h2 className="text-2xl font-bold text-foreground">Who is ADRA?</h2>
                <p className="text-muted-foreground">
                  As the humanitarian arm of the Seventh-day Adventist Church, our purpose is to 
                  serve humanity so ALL may live as God intended.
                </p>
                <Link href="/" className="text-primary font-semibold hover:underline inline-block">
                  Our Story
                </Link>
              </div>
              
              {/* Middle - Navigation items */}
              <div className="space-y-1">
                <Link
                  href="/leadership"
                  className="block px-4 py-3 text-sm font-medium bg-primary text-primary-foreground"
                >
                  Our Leadership
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-3 text-sm font-medium text-foreground border-b border-border hover:bg-muted"
                >
                  FAQs
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-3 text-sm font-medium text-foreground border-b border-border hover:bg-muted"
                >
                  Contact Us
                </Link>
              </div>
              
              {/* Right - Hero image */}
              <div className="relative h-[250px] lg:h-full min-h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/images/adra-worker.jpg"
                  alt="ADRA worker in the field"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Title Section with green accent */}
        <section className="relative">
          {/* Green accent bar */}
          <div className="absolute left-0 right-0 top-0 h-24 bg-primary/10" />
          <div className="container mx-auto px-4 relative">
            <div className="bg-background py-12 md:py-16 max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Leadership
              </h1>
              <p className="text-lg text-muted-foreground">
                The Adventist Development and Relief Agency&apos;s (ADRA) senior leadership manage the strategic vision of ADRA&apos;s work
                worldwide according to our purpose in serving humanity so all may live as God intended.
              </p>
            </div>
          </div>
          {/* Bottom green bar */}
          <div className="h-2 bg-primary" />
        </section>

        {/* Leaders Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="space-y-16 md:space-y-24">
              {leaders.map((leader, index) => (
                <div
                  key={leader.name}
                  className={`grid md:grid-cols-2 gap-8 items-start ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="relative aspect-square max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden">
                      <Image
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <p className="text-sm text-primary font-medium mb-1">{leader.title}</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {leader.name}
                    </h2>
                    <div className="prose prose-sm text-muted-foreground">
                      {leader.bio.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Board Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Board</h2>
            <p className="text-primary-foreground/80 mb-6">List of our current Board Members</p>
            <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              VIEW NOW
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
