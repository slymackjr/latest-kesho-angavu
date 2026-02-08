import { Award, Target, Users } from "lucide-react"

export function TrustBadges() {
  return (
    <section className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm md:text-base font-medium">
            Recognized for our grassroots impact and youth-led approach
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 bg-primary-foreground/10 rounded px-3 py-1">
              <Users className="h-5 w-5" />
              <span className="text-xs font-semibold">Youth-Led Initiative</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 rounded px-3 py-1">
              <Target className="h-5 w-5" />
              <span className="text-xs font-semibold">1000+ Lives Transformed</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 rounded px-3 py-1">
              <Award className="h-5 w-5" />
              <span className="text-xs font-semibold">3 Community Awards</span>
            </div>
          </div>
</div>
      </div>
    </section>
  )
}
