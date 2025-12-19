import { Film, Tv, Globe2, Users } from "lucide-react"

const stats = [
  {
    icon: Film,
    value: "600+",
    label: "Documentaries & Programs",
  },
  {
    icon: Tv,
    value: "5M+",
    label: "Weekly & Daily Viewers",
  },
  {
    icon: Globe2,
    value: "10+",
    label: "Countries Covered",
  },
  {
    icon: Users,
    value: "360°",
    label: "Media Promotion Reach",
  },
]

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                About Jupiter Media
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mt-2 text-balance">
                Awareness for Change
              </h3>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong>Jupiter Media Pvt. Ltd.</strong> is an independent Nepal-based media and production company led by
                <strong> Sunil Acharya</strong>. With the slogan <em>“Awareness for Change”</em>, we create broadcast-quality
                programs that inform, educate, and inspire audiences across Nepal and beyond.
              </p>

              <p>
                We specialize in documentaries, television programs, talk shows, investigative reports, commercials,
                tele-films, and full-fledged media campaigns. Our content reaches millions through national television,
                digital platforms, and social media networks worldwide.
              </p>

              <p>
                Jupiter Media also provides strategic PR consulting and 360-degree media solutions by integrating
                traditional media with modern digital technologies to deliver measurable impact for our clients.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="/about"
                className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Learn More About Our Mission & Vision
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors"
              >
                <stat.icon className="h-8 w-8 text-primary mb-4" />
                <div className="text-3xl font-bold font-serif">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
