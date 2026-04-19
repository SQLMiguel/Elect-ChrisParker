import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight, Tag } from "lucide-react"
import { notFound } from "next/navigation"
import { posts } from "@/lib/data/posts"
import { SHOW_NEWS_SECTION } from "@/lib/config/visibility"

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Get the latest news, press releases, and updates from Chris Parker's campaign for Forsyth County Commissioner.",
}

const categoryColors: Record<string, string> = {
  announcement: "bg-primary/10 text-primary",
  "press-release": "bg-accent/10 text-accent",
  endorsement: "bg-green-100 text-green-800",
  event: "bg-blue-100 text-blue-800",
  policy: "bg-purple-100 text-purple-800",
}

const categoryLabels: Record<string, string> = {
  announcement: "Announcement",
  "press-release": "Press Release",
  endorsement: "Endorsement",
  event: "Event",
  policy: "Policy",
}

export default function NewsPage() {
  if (!SHOW_NEWS_SECTION) {
    notFound()
  }

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const featuredPost = sortedPosts.find((p) => p.featured) || sortedPosts[0]
  const otherPosts = sortedPosts.filter((p) => p.slug !== featuredPost.slug)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              News & Updates
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Stay informed about the campaign. Get the latest news, press releases, 
              endorsements, and updates from Team Parker.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[73px] z-40 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <nav className="flex gap-2 py-4 overflow-x-auto">
            <Link
              href="/news"
              className="shrink-0 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              All Posts
            </Link>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <span
                key={key}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium ${categoryColors[key]}`}
              >
                {label}
              </span>
            ))}
          </nav>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6">
              Featured Story
            </h2>
            <article className="group relative grid gap-8 lg:grid-cols-2 lg:gap-12 rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              {/* Featured Image */}
              <div className="bg-muted aspect-video lg:aspect-auto lg:h-full overflow-hidden">
                {featuredPost.image ? (
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover min-h-[300px]"
                    priority
                  />
                ) : (
                  <div className="h-full min-h-[300px] flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                    <span className="text-muted-foreground text-sm">Featured image</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                      categoryColors[featuredPost.category]
                    }`}
                  >
                    <Tag className="h-3 w-3" />
                    {categoryLabels[featuredPost.category]}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    {featuredPost.date}
                  </div>
                </div>

                <h3 className="mt-4 text-2xl font-bold text-foreground group-hover:text-primary transition-colors lg:text-3xl">
                  <Link href={`/news/${featuredPost.slug}`}>
                    <span className="absolute inset-0" />
                    {featuredPost.title}
                  </Link>
                </h3>

                <p className="mt-4 text-muted-foreground line-clamp-3 lg:line-clamp-4">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-6 flex items-center text-sm font-medium text-primary">
                  Read full story
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-12 lg:py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">All Posts</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <article
                key={post.slug}
                className="group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Article Image */}
                <div className="bg-muted aspect-video overflow-hidden">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={340}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                      <span className="text-muted-foreground text-xs">Article image</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        categoryColors[post.category]
                      }`}
                    >
                      {categoryLabels[post.category]}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
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

          {/* Load More (placeholder) */}
          {posts.length > 9 && (
            <div className="mt-12 text-center">
              <button className="rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors">
                Load More Posts
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Get the latest campaign news delivered straight to your inbox. 
              No spam, just important updates about the race.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border-0 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:ring-2 focus:ring-primary-foreground/20"
                required
              />
              <button
                type="submit"
                className="rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
