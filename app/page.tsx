import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { TrustBadges } from "@/components/home/trust-badges"
import { GivingCards } from "@/components/home/giving-cards"
import { MissionSection } from "@/components/home/mission-section"
import { ImpactStats } from "@/components/home/impact-stats"
import { ImpactAreas } from "@/components/home/impact-areas"
import { NewsSection } from "@/components/home/news-section"
import { GiftCatalog } from "@/components/home/gift-catalog"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustBadges />
        <GivingCards />
        <MissionSection />
        <ImpactStats />
        <ImpactAreas />
        {/* <NewsSection /> */}
        {/* <GiftCatalog /> */}
      </main>
      <Footer />
    </div>
  )
}
