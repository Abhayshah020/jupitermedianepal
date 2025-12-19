import { AboutSection } from "@/components/about-section"
import { ContactCTASection } from "@/components/contact-section"
import { HeroSlider } from "@/components/hero-slider"
import { NewsGrid } from "@/components/news-grid"
import { ProductSection } from "@/components/product-section"
import { DestinationProjectsSection } from "@/components/project-section"
import { Testimonials } from "@/components/testimonials"

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <AboutSection />
      <ProductSection />
      <DestinationProjectsSection />
      <Testimonials />
      <NewsGrid />
      <ContactCTASection />
    </main>
  )
}
