import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { posts } from "@/lib/data/posts"
import { Button } from "@/components/ui/button"

const categoryColors: Record<string, string> = {
  announcement: "bg-primary/10 text-primary",
  "press-release": "bg-accent/10 text-accent",
  endorsement: "bg-green-100 text-green-800",
  event: "bg-blue-100 text-blue-800",
  policy: "bg-purple-100 text-purple-800",
}

export function NewsPreview() {
  const recentPosts = posts.slice(0, 3)

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Latest News
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Campaign Updates
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/news">
              All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {recentPosts.map((post, index) => (
            <article
              key={post.slug}
              className={`group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                index === 0 ? "lg:col-span-2 lg:flex-row" : ""
              }`}
            >
              {/* Image placeholder */}
              <div className={`bg-muted ${index === 0 ? "lg:w-1/2" : "aspect-video"}`}>
                <div className="h-full min-h-[200px] flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                  <span className="text-muted-foreground text-sm">Article image</span>
                </div>
              </div>

              {/* Content */}
              <div className={`flex flex-1 flex-col p-6 ${index === 0 ? "lg:w-1/2" : ""}`}>
                <div className="flex items-center gap-3">
                  <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    categoryColors[post.category] || categoryColors.announcement
                  }`}>
                    {post.category.replace("-", " ")}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="mr-1 h-3 w-3" />
                    {post.date}
                  </div>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  <Link href={`/news/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
