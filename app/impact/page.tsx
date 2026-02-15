import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Target, Heart, Users, TrendingUp, GraduationCap, Sparkles } from "lucide-react"

const stats = [
  {
    value: "1000+",
    description: "Youth empowered through our holistic programs since 2020.",
  },
  {
    value: "85%",
    description: "Of graduates launch sustainable livelihoods within 6 months.",
  },
  {
    value: "50+",
    description: "Active mentors guiding the next generation of leaders.",
  },
  {
    value: "2",
    description: "Regions served across Tanzania, with plans to expand.",
  },
]

const impactAreas = [
  {
    title: "Skills for Self-Reliance",
    description: "Practical training in entrepreneurship, tailoring, agriculture, and digital literacy that enables youth to build sustainable businesses.",
    icon: Target,
    color: "text-[#303F9F]",
  },
  {
    title: "Health & Wellness",
    description: "Sexual/reproductive education, nutrition guidance, mental wellbeing, and fitness programs for holistic development.",
    icon: Heart,
    color: "text-rose-600",
  },
  {
    title: "Mentorship & Leadership",
    description: "One-on-one guidance from mentors—including past success stories—to boost confidence, ambition, and life planning.",
    icon: Users,
    color: "text-amber-600",
  },
  {
    title: "Community Outreach",
    description: "Youth-led health screenings, clean-up campaigns, and awareness events creating ripple effects of change.",
    icon: Sparkles,
    color: "text-emerald-600",
  },
]

const stories = [
  {
    title: "Amina's Journey: From Dropout to Business Owner",
    author: "After dropping out of school, Amina found hope through our tailoring program. Today, she runs her own shop and employs two other young women from her neighborhood.",
    image: "/assets/image1.JPG",
    name: "Amina",
    role: "Tailoring Graduate",
  },
  {
    title: "Juma's Poultry Farm: A Story of Mentorship",
    author: "With guidance from a Kesho Angavu mentor, Juma transformed his fear into a thriving poultry business with five employees—and now helps his sister attend school.",
    image: "/assets/image2.JPG",
    name: "Juma",
    role: "Poultry Farmer",
  },
  {
    title: "Fatuma: Building a Healthier Generation",
    author: "As a community health volunteer, Fatuma leads outreach sessions that are breaking stigmas around reproductive health and building a braver, healthier youth community.",
    image: "/assets/image3.JPG",
    name: "Fatuma",
    role: "Community Health Volunteer",
  },
]

const impactTabs = [
  { id: "all", label: "All Impact", active: true },
  { id: "entrepreneurship", label: "Entrepreneurship", active: false },
  { id: "digital", label: "Digital", active: false },
  { id: "health", label: "Health", active: false },
  { id: "mentorship", label: "Mentorship", active: false },
]

export default function ImpactPage() {
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
                  OUR IMPACT
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Measuring Tomorrow, Today</h2>
                <p className="text-gray-600">
                  Our programs are designed for lasting transformation. We work with youth and communities, 
                  empowering them not just for today, but to build resilient, self-reliant futures.
                </p>
                <div className="flex gap-3 pt-2">
                  <Link href="#stories" className="bg-[#303F9F] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#303F9F]/90 transition-colors">
                    Read Stories
                  </Link>
                  <Link href="#stats" className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
                    See Numbers
                  </Link>
                </div>
              </div>
              
              {/* Middle - Navigation tabs */}
              <div className="space-y-2">
                {impactTabs.map((tab) => (
                  <Link
                    key={tab.id}
                    href={`/impact#${tab.id}`}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      tab.active
                        ? "bg-[#303F9F] text-white"
                        : "text-gray-700 bg-white border border-gray-200 hover:border-[#303F9F]/30 hover:bg-gray-50"
                    }`}
                  >
                    {tab.label}
                  </Link>
                ))}
              </div>
              
              {/* Right - Hero image */}
              <div className="relative h-[250px] lg:h-full min-h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/image6.JPG"
                  alt="Kesho Angavu youth empowerment impact - Tanzanian youth building brighter futures"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium bg-black/30 backdrop-blur-sm inline-block px-3 py-1 rounded-full mb-2">
                    Since 2020
                  </p>
                  <p className="text-lg font-bold">Transforming potential into progress, one youth at a time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Title Section with image banner */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="/assets/image5.JPG"
            alt="Kesho Angavu youth empowerment - Tanzanian youth in action"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Kesho Angavu</h1>
              <p className="text-xl md:text-2xl text-white/90 italic max-w-2xl px-4">
                "Brighter Tomorrow" — Building futures through holistic youth empowerment
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-12 md:py-16 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Impact in Numbers</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Behind every number is a story of courage, growth, and transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.value} className="text-center bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#303F9F] mb-2">{stat.value}</h3>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Areas Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">How We Create Change</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our holistic approach combines skills, health, and leadership to create sustainable transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {impactAreas.map((area) => (
                <div key={area.title} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <area.icon className={`h-6 w-6 ${area.color}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{area.title}</h3>
                      <p className="text-sm text-gray-600">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Support Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Your Support Builds Brighter Tomorrows
            </h2>
            <p className="text-gray-700 mb-4">
              When a young person in Tanzania lacks access to education, skills training, and mentorship, 
              their potential remains unrealized. Poverty, unemployment, and health vulnerabilities become 
              barriers that can last a lifetime.
            </p>
            <p className="text-gray-700 mb-4">
              Your support provides out-of-school youth with practical skills—from tailoring and poultry 
              keeping to digital literacy and financial management. It funds health education that breaks 
              stigmas. It pairs youth with mentors who believe in them until they believe in themselves.
            </p>
            <p className="text-gray-700">
              This isn't just aid. It's investment in a generation of Tanzanian changemakers who will 
              transform their families, communities, and nation.
            </p>
            
            <div className="mt-8 flex gap-4">
              <Link 
                href="/give" 
                className="bg-[#303F9F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#303F9F]/90 transition-colors"
              >
                Support a Youth Today
              </Link>
              <Link 
                href="/get-involved" 
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </section>

        {/* Did You Know Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              The Reality for Out-of-School Youth in Tanzania
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  In Tanzania, millions of youth aged 15–24 are out of school, facing limited opportunities 
                  for employment and economic independence. Without skills or support, they remain vulnerable 
                  to poverty, exploitation, and poor health outcomes.
                </p>
                <p className="text-gray-700">
                  Here's how your support is addressing these challenges:
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#303F9F] rounded-full mt-2 shrink-0" />
                    <span className="text-gray-700">Providing hands-on vocational skills that lead to sustainable livelihoods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#303F9F] rounded-full mt-2 shrink-0" />
                    <span className="text-gray-700">Teaching digital literacy to bridge the technology divide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#303F9F] rounded-full mt-2 shrink-0" />
                    <span className="text-gray-700">Offering health education that empowers youth to make informed choices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#303F9F] rounded-full mt-2 shrink-0" />
                    <span className="text-gray-700">Pairing youth with mentors who guide and inspire</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#303F9F] rounded-full mt-2 shrink-0" />
                    <span className="text-gray-700">Creating youth-led community outreach that multiplies impact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Counter */}
        <section className="py-16 md:py-24 bg-[#303F9F] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">1000+ Lives Transformed</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Since 2020, your generosity has empowered over 1,000 out-of-school youth across Tanzania 
              with skills, health education, and mentorship—creating ripple effects that reach families 
              and communities.
            </p>
            <div className="flex justify-center gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm text-white/80">Programs</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-white/80">Mentors</div>
              </div>
              <div>
                <div className="text-3xl font-bold">3</div>
                <div className="text-sm text-white/80">Awards</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2</div>
                <div className="text-sm text-white/80">Regions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Stories Section */}
        <section id="stories" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Voices of Transformation</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Behind every number is a story. These testimonies reflect the courage, growth, and 
              empowerment sparked by Kesho Angavu across communities in Tanzania.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stories.map((story) => (
                <article key={story.title} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white">
                  <div className="relative h-48">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium bg-[#303F9F]/10 text-[#303F9F] px-2 py-1 rounded-full">
                        {story.role}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{story.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-3">{story.author}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">— {story.name}</span>
                      <Link href="#" className="text-sm text-[#303F9F] font-medium hover:underline">
                        Read Full Story →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link 
                href="/stories" 
                className="inline-flex items-center gap-2 text-[#303F9F] font-semibold hover:underline"
              >
                Read More Impact Stories
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="bg-gray-900 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Be Part of the Next Success Story
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Your support creates real, lasting change in the lives of Tanzania's youth. Join us in building a brighter tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/give" 
                className="bg-[#303F9F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#303F9F]/90 transition-colors"
              >
                Support a Youth
              </Link>
              <Link 
                href="/get-involved" 
                className="border border-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}