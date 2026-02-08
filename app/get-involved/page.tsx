import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const involvementOptions = [
  {
    title: "Join Our Team",
    description: "Careers at ADRA focus on what we call the 3 C's. If you are a connected, courageous, and compassionate professional, your dream job may be waiting for you here.",
    href: "#careers",
    active: true,
  },
  {
    title: "Volunteer",
    description: "ADRA Connections is our short-term volunteer program that offers everyone an opportunity to experience the heart of our mission.",
    href: "#volunteer",
    active: false,
  },
  {
    title: "Community Hub",
    description: "Join our community of supporters and advocates making a difference around the world.",
    href: "#community",
    active: false,
  },
  {
    title: "Church Emergency Response",
    description: "Partner with us to respond to emergencies and disasters in your community and around the world.",
    href: "#emergency",
    active: false,
  },
]

export default function GetInvolvedPage() {
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
                <h2 className="text-2xl font-bold text-foreground">Make a Difference</h2>
                <p className="text-muted-foreground">
                  Are you passionate with a heart for service? Find out how YOU can support
                  ADRA&apos;s mission today!
                </p>
                <Link href="#learn" className="text-primary font-semibold hover:underline inline-block">
                  Learn How
                </Link>
              </div>
              
              {/* Middle - Navigation items */}
              <div className="space-y-1">
                {involvementOptions.map((option) => (
                  <Link
                    key={option.title}
                    href={option.href}
                    className={`block px-4 py-3 text-sm font-medium transition-colors ${
                      option.active
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground border-b border-border hover:bg-muted"
                    }`}
                  >
                    {option.title}
                  </Link>
                ))}
              </div>
              
              {/* Right - Hero image */}
              <div className="relative h-[250px] lg:h-full min-h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/images/volunteers.jpg"
                  alt="ADRA Volunteers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section id="careers" className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Join Our Team
            </h2>
            
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-4">Careers</h3>
              <p className="text-muted-foreground mb-4">
                Careers at ADRA focus on what we call the 3 C&apos;s. If you are a connected, courageous, and compassionate professional, your
                dream job may be waiting for you here. We offer competitive salaries and generous benefits, plus the chance to make a true
                impact with a talented team.
              </p>
              <Link href="#" className="text-primary font-semibold hover:underline">
                SEARCH CAREERS &gt;
              </Link>
            </div>

            <div id="volunteer">
              <h3 className="text-xl font-semibold text-foreground mb-4">Volunteers</h3>
              <p className="text-muted-foreground mb-4">
                ADRA Connections is our short-term volunteer program that offers everyone an opportunity to experience the heart of our
                mission. Every trip is carefully planned to support sustainable projects globally and for volunteers to have an educational
                experience.
              </p>
              <Link href="#" className="text-primary font-semibold hover:underline">
                LEARN ABOUT VOLUNTEERING &gt;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
