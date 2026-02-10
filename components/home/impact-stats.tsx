import { Users, Target, Award, MapPin } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "1000+",
    label: "Lives Transformed",
    description: "Youth empowered with skills and opportunities",
  },
  {
    icon: Target,
    value: "5+",
    label: "Empowerment Programs",
    description: "Holistic training across multiple sectors",
  },
  {
    icon: Award,
    value: "3",
    label: "Community Awards",
    description: "Recognized for grassroots innovation",
  },
  {
    icon: MapPin,
    value: "2",
    label: "Regions Served",
    description: "Expanding across Tanzania since 2020",
  },
]

export function ImpactStats() {
  return (
    <section className="py-12 md:py-16 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 mx-auto rounded-lg bg-primary/10 text-primary">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="font-semibold text-gray-700">{stat.label}</div>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}