import { Globe, Users, FolderOpen } from "lucide-react"

const stats = [
  {
    icon: Globe,
    value: "118+",
    label: "Countries",
    description: "Global impact. Local change.",
  },
  {
    icon: Users,
    value: "10.8M",
    label: "Lives",
    description: "Empowering individuals. Resilient communities.",
  },
  {
    icon: FolderOpen,
    value: "1K+",
    label: "Projects",
    description: "Rapid disaster relief. Long-term development.",
  },
]

export function ImpactStats() {
  return (
    <section className="py-12 md:py-16 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-3">
              <stat.icon className="h-12 w-12 mx-auto text-primary" strokeWidth={1.5} />
              <div>
                <span className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</span>
                <span className="text-xl md:text-2xl font-bold text-foreground"> {stat.label}</span>
              </div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
