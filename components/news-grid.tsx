import { Card } from "@/components/ui/card"
import { Clock, TrendingUp } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "UK Universities Announce Increased Intake for 2025",
    excerpt: "Major British universities expand international student programs with new scholarships.",
    category: "United Kingdom",
    date: "Dec 17, 2025",
    readTime: "4 min",
    trending: true,
  },
  {
    id: 2,
    title: "IELTS Requirements Waived for Selected Countries",
    excerpt: "New policy changes allow students from Nepal to apply without IELTS scores.",
    category: "Visa Updates",
    date: "Dec 16, 2025",
    readTime: "3 min",
    trending: true,
  },
  {
    id: 3,
    title: "Canada Student Visa Processing Times Reduced",
    excerpt: "Immigration department announces faster processing for student applications.",
    category: "Canada",
    date: "Dec 14, 2025",
    readTime: "5 min",
    trending: false,
  },
  {
    id: 4,
    title: "Top Engineering Programs in Europe for 2025",
    excerpt: "Comprehensive ranking of the best engineering schools accepting international students.",
    category: "Rankings",
    date: "Dec 13, 2025",
    readTime: "7 min",
    trending: false,
  },
  {
    id: 5,
    title: "Scholarship Deadline Alert: Apply Before December 31",
    excerpt: "Don't miss these fully-funded scholarship opportunities closing this month.",
    category: "Scholarships",
    date: "Dec 11, 2025",
    readTime: "4 min",
    trending: true,
  },
  {
    id: 6,
    title: "Student Life: Adapting to European Culture",
    excerpt: "Tips from Nepali students on successfully adjusting to life in European universities.",
    category: "Student Life",
    date: "Dec 9, 2025",
    readTime: "6 min",
    trending: false,
  },
  // {
  //   id: 7,
  //   title: "Germany Offers Free Tuition: Application Guide",
  //   excerpt: "Step-by-step process to apply for tuition-free programs in German universities.",
  //   category: "Germany",
  //   date: "Dec 8, 2025",
  //   readTime: "8 min",
  //   trending: false,
  // },
  // {
  //   id: 8,
  //   title: "MBA Programs with High ROI for International Students",
  //   excerpt: "Analysis of business schools offering the best return on investment.",
  //   category: "Business",
  //   date: "Dec 7, 2025",
  //   readTime: "5 min",
  //   trending: false,
  // },
  // {
  //   id: 9,
  //   title: "Part-Time Work Rights: Country-by-Country Guide",
  //   excerpt: "Understanding work permits and student employment regulations worldwide.",
  //   category: "Work Rights",
  //   date: "Dec 5, 2025",
  //   readTime: "6 min",
  //   trending: false,
  // },
]

export function NewsGrid() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">Latest Updates</span>
          <h3 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mt-2">Recent News & Articles</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <Card
              key={article.id}
              className="group cursor-pointer p-6 hover:shadow-md transition-all duration-300 border-border/50 hover:border-primary/50"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 text-xs font-medium bg-muted rounded-full">{article.category}</span>
                  {article.trending && (
                    <div className="flex items-center gap-1 text-xs text-primary">
                      <TrendingUp className="h-3.5 w-3.5" />
                      <span className="font-medium">Trending</span>
                    </div>
                  )}
                </div>
                <h4 className="text-lg font-serif font-bold text-balance leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2 border-t border-border/50">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-border rounded-lg hover:bg-accent hover:border-foreground/20 transition-colors"
          >
            Load More Articles
          </a>
        </div>
      </div>
    </section>
  )
}
