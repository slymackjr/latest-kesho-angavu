import Image from "next/image"
import Link from "next/link"
import { Target, GraduationCap, TrendingUp, Heart } from "lucide-react"

const impactAreas = [
  {
    icon: Target,
    title: "ENTREPRENEURSHIP",
    description: "Building self-reliant futures through hands-on skills.",
    image: "/assets/image1.JPG",
  },
  {
    icon: GraduationCap,
    title: "DIGITAL EMPOWERMENT",
    description: "Bridging the digital divide with practical tech skills.",
    image: "/assets/image2.JPG",
  },
  {
    icon: TrendingUp,
    title: "FINANCIAL LITERACY",
    description: "Fostering financial independence and responsibility.",
    image: "/assets/image3.JPG",
  },
  {
    icon: Heart,
    title: "HEALTH & WELLNESS",
    description: "Promoting holistic health education and access.",
    image: "/assets/image4.JPG",
  },
]

export function ImpactAreas() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}

          <div>
            <div className="relative h-[360px] rounded-2xl overflow-hidden mb-6">
              <Image
                src="/assets/image7.JPG"
                alt="Kesho Angavu youth empowerment in action - holistic training programs for Tanzanian youth"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold mb-3">
              Kesho Angavu in Action
            </h2>

            <p className="text-muted-foreground mb-4 max-w-md">
              We work in 4 key impact areas to empower Tanzania's out-of-school youth,
              creating sustainable change through holistic skills development.
            </p>

            <Link
              href="/programs"
              className="text-primary font-semibold hover:underline"
            >
              Explore All Programs
            </Link>
          </div>

          {/* RIGHT SIDE CARDS */}

          <div className="grid grid-cols-2 gap-5">

            {impactAreas.map((area) => (
              <Link
                key={area.title}
                href={`/programs#${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative rounded-xl overflow-hidden border min-h-[190px] flex items-center justify-center bg-white transition-all duration-300 hover:border-primary/30"
              >

                {/* Hover Image ONLY */}

                <Image
                  src={area.image}
                  alt=""
                  fill
                  className="object-cover opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />

                {/* Frosted white overlay */}

                <div className="absolute inset-0 bg-white/90 group-hover:bg-white/70 transition-colors duration-500 pointer-events-none" />

                {/* Content */}

                <div className="relative z-10 text-center p-6 transition-transform duration-300 group-hover:-translate-y-1">

                  <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <area.icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="font-bold mb-2">{area.title}</h3>

                  <p className="text-sm text-muted-foreground">
                    {area.description}
                  </p>

                </div>

              </Link>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}