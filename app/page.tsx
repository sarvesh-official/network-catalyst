import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { OfferingsSection } from "@/components/offerings-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ApproachSection } from "@/components/approach-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { SectorsSection } from "@/components/sectors-section"
import { AdvantageSection } from "@/components/advantage-section"
import { NewsSection } from "@/components/news-section"
import { PartnersSection } from "@/components/partners-section"
import { CtaSection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <IntroSection />
      <OfferingsSection />
      <AboutSection />
      <ApproachSection />
      <ServicesSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <SectorsSection />
      <AdvantageSection />
      <NewsSection />
      <PartnersSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
