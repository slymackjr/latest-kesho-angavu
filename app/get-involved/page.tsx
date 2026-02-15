import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, Users, Target, GraduationCap, MessageCircle, HandHeart } from "lucide-react"

const involvementOptions = [
  {
    title: "Become a Mentor",
    description: "Walk alongside a young person, providing guidance and inspiration on their journey to self-reliance.",
    href: "#mentor",
    active: true,
    icon: Users,
  },
  {
    title: "Volunteer Your Expertise",
    description: "Share your professional skills in training, workshop facilitation, or program support.",
    href: "#volunteer",
    active: false,
    icon: Heart,
  },
  {
    title: "Partner With Us",
    description: "Collaborate on programs, provide internship opportunities, or sponsor a training cohort.",
    href: "#partner",
    active: false,
    icon: HandHeart,
  },
  {
    title: "Amplify Our Voice",
    description: "Help share our mission and stories within your network, church, or community.",
    href: "#advocate",
    active: false,
    icon: MessageCircle,
  },
]

export default function GetInvolvedPage() {
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
                  GET INVOLVED
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Join the Circle of Impact</h2>
                <p className="text-gray-600">
                  Do you believe in the power of youth to shape tomorrow? Discover how your passion, skills, 
                  and heart for service can directly empower the next generation of Tanzanian leaders.
                </p>
                <div className="flex gap-3 pt-2">
                  <Link href="#mentor" className="bg-[#303F9F] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#303F9F]/90 transition-colors">
                    Get Started
                  </Link>
                  <Link href="#learn" className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
              
              {/* Middle - Navigation items */}
              <div className="space-y-3">
                {involvementOptions.map((option) => (
                  <Link
                    key={option.title}
                    href={option.href}
                    className={`flex items-start gap-4 p-4 rounded-lg transition-all ${
                      option.active
                        ? "bg-[#303F9F] text-white shadow-md"
                        : "bg-white text-gray-700 border border-gray-200 hover:border-[#303F9F]/30 hover:shadow-sm"
                    }`}
                  >
                    <div className={`p-2 rounded-lg shrink-0 ${
                      option.active ? "bg-white/20" : "bg-gray-100"
                    }`}>
                      <option.icon className={`h-5 w-5 ${
                        option.active ? "text-white" : "text-[#303F9F]"
                      }`} />
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-1 ${
                        option.active ? "text-white" : "text-gray-900"
                      }`}>
                        {option.title}
                      </h3>
                      <p className={`text-sm ${
                        option.active ? "text-white/80" : "text-gray-500"
                      }`}>
                        {option.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* Right - Hero image */}
              <div className="relative h-[280px] lg:h-full min-h-[280px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/image7.JPG"
                  alt="Kesho Angavu youth empowerment initiative - Tanzanian youth building brighter futures"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium bg-black/30 backdrop-blur-sm inline-block px-3 py-1 rounded-full mb-2">
                    Youth-led • Since 2020
                  </p>
                  <p className="text-lg font-bold">Your involvement creates ripples of change that last a lifetime.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mentor Section */}
        <section id="mentor" className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#303F9F]/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-[#303F9F]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Become a Mentor
                </h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 mb-4">
                  At Kesho Angavu, mentorship is at the heart of our model. Youth are paired with mentors—including 
                  our own success stories—to boost confidence, ambition, and life planning. A mentor doesn't just teach 
                  skills; they walk alongside a young person, believing in them until they believe in themselves.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#303F9F] my-6">
                  <p className="text-gray-700 italic">
                    "The mentorship I received through Kesho Angavu pushed me beyond my fears. Today, I run a poultry 
                    business with five employees and I've even saved enough to help my younger sister go to school."
                  </p>
                  <p className="text-sm font-medium text-gray-500 mt-2">— Juma, Poultry Farmer & Program Graduate</p>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What Mentors Do:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                  <li>Meet regularly (in-person or virtually) with a young person aged 15–24</li>
                  <li>Provide guidance on life planning, career goals, and personal development</li>
                  <li>Encourage and motivate through challenges and setbacks</li>
                  <li>Connect youth to opportunities and networks</li>
                  <li>Share your own experiences and lessons learned</li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link 
                    href="/mentor-apply" 
                    className="bg-[#303F9F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#303F9F]/90 transition-colors text-center"
                  >
                    Apply to Become a Mentor
                  </Link>
                  <Link 
                    href="#" 
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
                  >
                    Learn More About Mentorship
                  </Link>
                </div>
              </div>
            </div>

            {/* Volunteer Section */}
            <div id="volunteer" className="pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#303F9F]/10 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-[#303F9F]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Volunteer Your Expertise
                </h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                Do you have professional skills in training, business, technology, health, or education? 
                Kesho Angavu welcomes volunteers who can facilitate workshops, provide career guidance, 
                or support our programs with their expertise.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <Target className="h-5 w-5 text-[#303F9F] mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">Skills Training</h4>
                  <p className="text-sm text-gray-600">Teach entrepreneurship, digital literacy, financial management, or vocational skills.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <GraduationCap className="h-5 w-5 text-[#303F9F] mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">Career Guidance</h4>
                  <p className="text-sm text-gray-600">Share industry insights, conduct mock interviews, or host career talks.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <Heart className="h-5 w-5 text-[#303F9F] mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">Health Education</h4>
                  <p className="text-sm text-gray-600">Facilitate sessions on reproductive health, nutrition, or mental wellness.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <HandHeart className="h-5 w-5 text-[#303F9F] mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">Program Support</h4>
                  <p className="text-sm text-gray-600">Assist with administration, communications, or event coordination.</p>
                </div>
              </div>
              
              <Link 
                href="/volunteer-apply" 
                className="inline-flex items-center gap-2 text-[#303F9F] font-semibold hover:underline"
              >
                Apply to Volunteer
                <span className="text-lg">→</span>
              </Link>
            </div>

            {/* Partner Section */}
            <div id="partner" className="pt-8 mt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#303F9F]/10 flex items-center justify-center">
                  <HandHeart className="h-5 w-5 text-[#303F9F]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Partner With Us
                </h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                Organizations, churches, and businesses can partner with Kesho Angavu to create lasting impact. 
                Whether through funding, internship placements, or in-kind support, your partnership helps scale 
                our proven model of holistic youth empowerment.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Partnership Opportunities:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#303F9F] font-bold">•</span>
                    <span><strong>Sponsor a Training Cohort:</strong> Fund a complete training cycle for 20–30 youth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#303F9F] font-bold">•</span>
                    <span><strong>Provide Internships:</strong> Offer hands-on work experience to our graduates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#303F9F] font-bold">•</span>
                    <span><strong>In-Kind Support:</strong> Donate equipment, materials, or workspace for training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#303F9F] font-bold">•</span>
                    <span><strong>Corporate Volunteering:</strong> Engage your team in skills-based volunteering</span>
                  </li>
                </ul>
              </div>
              
              <Link 
                href="/partner-inquiry" 
                className="inline-flex items-center gap-2 text-[#303F9F] font-semibold hover:underline"
              >
                Inquire About Partnership
                <span className="text-lg">→</span>
              </Link>
            </div>

            {/* Advocate Section */}
            <div id="advocate" className="pt-8 mt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#303F9F]/10 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-[#303F9F]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Amplify Our Voice
                </h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                Not everyone can volunteer or donate—but everyone can spread the word. Help us share the stories 
                of Tanzania's youth and the transformative work happening at Kesho Angavu.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-4">
                <Link href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Share on Facebook
                </Link>
                <Link href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Share on Twitter
                </Link>
                <Link href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Share on WhatsApp
                </Link>
                <Link href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Tell a Friend
                </Link>
              </div>
              
              <div className="mt-6 p-4 bg-[#303F9F]/5 rounded-lg border border-[#303F9F]/10">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Download our impact brochure</span> — Share it with your church, 
                  workplace, or community group.
                </p>
                <Link href="#" className="inline-flex items-center gap-1 text-[#303F9F] font-medium text-sm mt-2 hover:underline">
                  Download PDF (2.5 MB)
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="bg-[#303F9F] py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Your unique contribution is the missing piece. Let's build a brighter tomorrow, together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/mentor-apply" 
                className="bg-white text-[#303F9F] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Become a Mentor
              </Link>
              <Link 
                href="/give" 
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Support a Youth
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}