import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                Your Gateway to Global Education
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-balance leading-tight">
              Discover Your Path to Study Abroad
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Expert insights, comprehensive guides, and the latest news to help Nepali students achieve their dreams of
              studying in prestigious universities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Explore Opportunities
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Read Latest News
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <img
              src="/media/1.jpeg"
              alt="Students studying abroad"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
