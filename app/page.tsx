import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ShriClassesSection } from "@/components/shri-classes-section"
import { VisionSection } from "@/components/vision-section"
import { KnowledgeHub } from "@/components/knowledge-hub"
import { EducationalJourneySection } from "@/components/educational-journey-section"
import { CallToActionSection } from "@/components/call-to-action-section"
import { SlokaSection } from "@/components/sloka-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-manuscript">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ShriClassesSection />
        <VisionSection />
        <KnowledgeHub />
        <EducationalJourneySection />
        <CallToActionSection />
        <SlokaSection />
      </main>
      <Footer />
    </div>
  )
}
