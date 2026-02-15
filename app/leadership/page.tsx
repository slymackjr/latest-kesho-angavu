import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Users, Target, Heart, Award, Sparkles } from "lucide-react"

const leaders = [
  {
    name: "Daniel J Magomele",
    title: "Project Chairperson",
    image: "/assets/user6.JPG",
    bio: `As the visionary behind Kesho Angavu, Daniel translates lived experiences into sustainable action. His leadership blends compassion with strategy, guiding the initiative to reach out-of-school youth with life-changing opportunities.

Daniel brings deep community connections and a passion for youth development that stems from his own journey. He understands the challenges facing Tanzania's out-of-school youth because he has walked alongside them.

Under his leadership, Kesho Angavu has grown from an idea into a thriving Youth Center of Excellence serving hundreds of young people across Dar es Salaam. His approach combines practical skills training with holistic development, ensuring that every young person discovers not just a livelihood, but a purpose.`,
  },
  {
    name: "Ezekiel Ndege",
    title: "Organization's Chairperson, TUCASA MUHAS",
    image: "/assets/user1.JPG",
    bio: `Ezekiel anchors the broader mission of TUCASA MUHAS, the parent organization behind Kesho Angavu. He plays a crucial role in bridging the academic, spiritual, and community dimensions of the program—ensuring every strategy is grounded in impact.

With a background in community development and a heart for service, Ezekiel ensures that Kesho Angavu remains true to its mission of holistic youth empowerment. He works behind the scenes to create the infrastructure and partnerships that allow the initiative to thrive.

Ezekiel believes that sustainable change happens when young people are equipped with both skills and values. His leadership ensures that every program at Kesho Angavu reflects this belief, creating purpose-driven citizens who will transform their communities.`,
  },
]

const teamValues = [
  {
    icon: Target,
    title: "Vision-Driven",
    description: "Committed to building a future where every Tanzanian youth has opportunity, skills, and support.",
  },
  {
    icon: Heart,
    title: "Compassionate Action",
    description: "Rooted in care for the whole person—body, mind, and spirit.",
  },
  {
    icon: Users,
    title: "Youth-Led",
    description: "Powered by young changemakers who understand the communities they serve.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering high-quality training and mentorship that leads to real outcomes.",
  },
]

const navigationLinks = [
  { href: "/leadership", label: "Our Leadership", active: true },
  { href: "/team", label: "Our Team", active: false },
  { href: "/contact", label: "Contact Us", active: false },
  { href: "/faqs", label: "FAQs", active: false },
]

export default function LeadershipPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Hero with sidebar context */}
        <section className="border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 py-12">
              {/* Left - Page context */}
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-[#303F9F]/10 rounded-full text-[#303F9F] text-xs font-semibold mb-2">
                  OUR LEADERSHIP
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Visionaries Behind the Movement</h2>
                <p className="text-gray-600">
                  Kesho Angavu is led by young, passionate changemakers from TUCASA MUHAS who are deeply rooted 
                  in the communities they serve. Their leadership reflects the values of resilience, faith, 
                  and action that power this initiative.
                </p>
                <div className="flex gap-3 pt-2">
                  <Link href="#leaders" className="bg-[#303F9F] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#303F9F]/90 transition-colors">
                    Meet the Team
                  </Link>
                  <Link href="#values" className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
                    Our Values
                  </Link>
                </div>
              </div>
              
              {/* Middle - Navigation items */}
              <div className="space-y-2">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      link.active
                        ? "bg-[#303F9F] text-white"
                        : "text-gray-700 bg-white border border-gray-200 hover:border-[#303F9F]/30 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              {/* Right - Hero image */}
              <div className="relative h-[250px] lg:h-full min-h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/image5.JPG"
                  alt="Kesho Angavu leadership team - young changemakers in Tanzania"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium bg-black/30 backdrop-blur-sm inline-block px-3 py-1 rounded-full mb-2">
                    Youth-led • Since 2020
                  </p>
                  <p className="text-lg font-bold">Powered by young leaders, rooted in community.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Title Section with indigo accent */}
        <section className="relative">
          {/* Indigo accent bar */}
          <div className="absolute left-0 right-0 top-0 h-24 bg-[#303F9F]/5" />
          <div className="container mx-auto px-4 relative">
            <div className="bg-white py-12 md:py-16 max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Leadership
              </h1>
              <p className="text-lg text-gray-600">
                Together, this team embodies the spirit of youth-led development. With faith, innovation, 
                and grassroots leadership, they're reimagining what a brighter tomorrow can look like for 
                Tanzania's most vulnerable youth.
              </p>
            </div>
          </div>
          {/* Bottom indigo bar */}
          <div className="h-2 bg-[#303F9F]" />
        </section>

        {/* Leaders Section */}
        <section id="leaders" className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="space-y-16 md:space-y-24">
              {leaders.map((leader, index) => (
                <div
                  key={leader.name}
                  className={`grid md:grid-cols-2 gap-8 md:gap-12 items-start ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="relative aspect-square max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? "md:order-1" : ""} space-y-4`}>
                    <div>
                      <p className="text-sm font-medium text-[#303F9F] mb-1">{leader.title}</p>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {leader.name}
                      </h2>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      {leader.bio.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>
                      ))}
                    </div>
                    
                    {/* Quote or highlight */}
                    {index === 0 && (
                      <div className="mt-6 p-4 bg-[#303F9F]/5 rounded-lg border-l-4 border-[#303F9F]">
                        <p className="text-sm italic text-gray-700">
                          "Daniel's leadership blends compassion with strategy, guiding the initiative to reach out-of-school youth with life-changing opportunities."
                        </p>
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="mt-6 p-4 bg-[#303F9F]/5 rounded-lg border-l-4 border-[#303F9F]">
                        <p className="text-sm italic text-gray-700">
                          "Ezekiel ensures every strategy is grounded in impact, bridging academic, spiritual, and community dimensions."
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Values Section */}
        <section id="values" className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Values That Guide Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our leadership is shaped by core principles that ensure every young person we serve experiences 
                holistic, meaningful transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {teamValues.map((value) => (
                <div key={value.title} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#303F9F]/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-[#303F9F]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TUCASA MUHAS Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-10 shadow-md">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Rooted in TUCASA MUHAS</h3>
                  <p className="text-gray-700 mb-4">
                    Kesho Angavu is an initiative of TUCASA MUHAS (Tumaini University Christian Association 
                    at Muhimbili University of Health and Allied Sciences). This university connection provides 
                    a strong foundation of academic excellence, ethical values, and community engagement.
                  </p>
                  <p className="text-gray-700">
                    The leadership team draws from both academic knowledge and lived experience, creating a 
                    unique model where university students and graduates pour into out-of-school youth, 
                    bridging gaps and building solidarity.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="relative h-32 w-32">
                    <Image
                      src="/assets/angavu-logo.svg"
                      alt="Kesho Angavu Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[#303F9F] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the Movement</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Whether as a mentor, partner, or supporter, you can be part of this youth-led transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/get-involved" 
                className="bg-white text-[#303F9F] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Involved
              </Link>
              <Link 
                href="/contact" 
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}