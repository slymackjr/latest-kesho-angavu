import Image from "next/image"
import Link from "next/link"
import { 
  Target, 
  Users, 
  HeartHandshake, 
  Sparkles,
  TrendingUp,
  GraduationCap,
  Shield,
  ArrowRight
} from "lucide-react"

const givingOptions = [
  {
    title: "Empower a Changemaker",
    description: "Fund holistic training for one youth",
    image: "/assets/image1.JPG",
    icon: Target,
    color: "from-gray-900/80 to-gray-800/70",
    hoverColor: "bg-black/40", // Added for hover darkening
  },
  {
    title: "Build with a Community",
    description: "Support our Youth Center programs",
    image: "/assets/image2.JPG",
    icon: Users,
    badge: "Most Impact",
    color: "from-gray-900/80 to-gray-800/70",
    hoverColor: "bg-black/40",
  },
  {
    title: "Launch a Legacy",
    description: "Become a sustaining monthly partner",
    image: "/assets/image3.JPG",
    icon: HeartHandshake,
    color: "from-gray-900/80 to-gray-800/70",
    hoverColor: "bg-black/40",
  },
]

// Additional impact-focused options (optional second row)
const impactOptions = [
  {
    title: "Digital Bridge",
    description: "Equip a tech lab for digital literacy",
    image: "/assets/image4.JPG",
    icon: TrendingUp,
    color: "from-gray-900/80 to-gray-800/70",
    hoverColor: "bg-black/40",
  },
  {
    title: "Health & Wellness",
    description: "Sponsor community health outreach",
    image: "/assets/image5.JPG",
    icon: Shield,
    color: "from-gray-900/80 to-gray-800/70",
    hoverColor: "bg-black/40",
  },
  {
    title: "Mentorship Circle",
    description: "Fund a year of one-on-one guidance",
    image: "/assets/image6.JPG",
    icon: GraduationCap,
    color: "from-gray-900/80 to-gray-800/70",
    hoverColor: "bg-black/40",
  },
]

export function GivingCards() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Choose Your Impact Path
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Direct your support to where it matters most. Each option represents a tangible 
            pathway to transform a young Tanzanian's future.
          </p>
        </div>

        {/* Main Giving Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {givingOptions.map((option) => (
            <Link
              key={option.title}
              href="/give"
              className="group relative h-[380px] rounded-xl overflow-hidden cursor-pointer
                       transition-all duration-300 hover:scale-[1.02] hover:shadow-lg 
                       focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 focus:outline-none"
            >
              {/* Image with overlay */}
              <Image
                src={option.image || "/placeholder.svg"}
                alt={option.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              
              {/* Static dark overlay */}
              <div className={`absolute inset-0 bg-gradient-to-b ${option.color}`} />
              
              {/* Dynamic hover overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300 ${option.hoverColor}`} />
              
              {/* Content Container - Centered */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                
                {/* Badge */}
                {option.badge && (
                  <div className="absolute top-6 left-6">
                    <span className="inline-flex items-center gap-2 bg-gray-900/80 text-white 
                                   px-4 py-2 rounded-lg text-sm font-semibold border border-gray-700">
                      <Sparkles className="h-4 w-4" />
                      {option.badge}
                    </span>
                  </div>
                )}
                
                {/* Icon Container */}
                <div className="mb-6 transform transition-all duration-500 
                              group-hover:scale-105 group-hover:-translate-y-1">
                  <div className="relative">
                    {/* Subtle background glow */}
                    <div className="absolute inset-0 bg-white/10 blur-lg rounded-full" />
                    {/* Icon */}
                    <div className="relative bg-gray-900/50 p-5 rounded-full 
                                  border border-gray-700/50">
                      <option.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="space-y-3 transform transition-all duration-500 
                              group-hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">
                    {option.title}
                  </h3>
                  <p className="text-gray-200 font-medium">
                    {option.description}
                  </p>
                </div>
                
                {/* CTA Button - Bottom */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 
                              transform transition-all duration-300 
                              group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 bg-white text-gray-900 
                                 px-5 py-2.5 rounded-lg font-semibold text-sm
                                 hover:bg-gray-100 transition-colors">
                    Support This Path
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Impact Stats Banner */}
        <div className="bg-primary rounded-xl p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-sm text-gray-300">Lives Transformed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-sm text-gray-300">Holistic Programs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">3</div>
              <div className="text-sm text-gray-300">Community Awards</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">2</div>
              <div className="text-sm text-gray-300">Regions Served</div>
            </div>
          </div>
        </div>

        {/* Additional Options */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">Or Support a Specific Program</h3>
          <p className="text-gray-700">Direct your gift to a particular area of impact</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {impactOptions.map((option) => (
            <Link
              key={option.title}
              href="/give"
              className="group relative h-[260px] rounded-lg overflow-hidden cursor-pointer
                       transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
            >
              <Image
                src={option.image || "/placeholder.svg"}
                alt={option.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              
              <div className={`absolute inset-0 bg-gradient-to-b ${option.color}`} />
              
              {/* Hover darken effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300 ${option.hoverColor}`} />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4">
                  <div className="bg-gray-900/50 p-4 rounded-full border border-gray-700/50">
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {option.title}
                  </h4>
                  <p className="text-gray-200 text-sm">
                    {option.description}
                  </p>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 
                            opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-flex items-center gap-1 bg-gray-900/80 text-white 
                               px-3 py-1.5 rounded-lg text-sm">
                  Learn More
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}