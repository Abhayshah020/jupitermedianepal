import { Card } from "@/components/ui/card"
import { ArrowRight, Clock } from "lucide-react"

const featuredArticles = [
  {
    id: 1,
    title: "Complete Guide to Studying in the United States in 2025",
    excerpt: "Everything you need to know about applications, visas, and scholarships for US universities.",
    category: "Study Guides",
    date: "Dec 15, 2025",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Top 10 Scholarships for Nepali Students in 2025",
    excerpt:
      "Discover fully-funded and partial scholarships available for Nepali students pursuing international education.",
    category: "Scholarships",
    date: "Dec 12, 2025",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Australia Opens New Visa Pathways for International Students",
    excerpt: "Recent policy changes make it easier for Nepali students to study and work in Australia.",
    category: "News",
    date: "Dec 10, 2025",
    readTime: "5 min read",
  },
]

export function FeaturedArticles() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Featured Stories
            </span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mt-2">Editor's Picks</h3>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center text-sm font-medium text-muted-foreground hover:text-foreground group"
          >
            View All
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <Card
              key={article.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-none hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
                <h4 className="text-xl font-serif font-bold text-balance leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{article.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-foreground group-hover:text-primary"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
