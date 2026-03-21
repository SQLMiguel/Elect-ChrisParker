import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { posts } from "@/lib/data/posts"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
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

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = posts
    .filter((p) => p.slug !== slug)
    .slice(0, 3)

  return (
    <>
      {/* Article Header */}
      <section className="bg-secondary py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                categoryColors[post.category]
              }`}
            >
              {categoryLabels[post.category]}
            </span>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1.5 h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <User className="mr-1.5 h-4 w-4" />
              {post.author}
            </div>
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {post.title}
          </h1>

          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(280px,420px)_minmax(0,1fr)] lg:items-start">
            <aside className="lg:sticky lg:top-24">
              {post.image ? (
                <div className="-mt-20 overflow-hidden rounded-xl border border-border bg-card shadow-lg lg:-mt-28">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={840}
                    height={1120}
                    className="h-auto w-full object-contain"
                    priority
                  />
                </div>
              ) : (
                <div className="-mt-20 overflow-hidden rounded-xl border border-border bg-muted shadow-lg lg:-mt-28">
                  <div className="flex min-h-[320px] items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 p-8 text-center">
                    <span className="text-muted-foreground">Featured image</span>
                  </div>
                </div>
              )}
            </aside>

            <div>
              <article className="prose prose-lg max-w-none">
                {post.content.split("\n\n").map((paragraph, index) => {
                  // Handle headers (lines starting with **)
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return (
                      <h2 key={index} className="mb-4 mt-8 text-xl font-bold text-foreground first:mt-0">
                        {paragraph.replace(/\*\*/g, "")}
                      </h2>
                    )
                  }

                  // Handle list items
                  if (paragraph.startsWith("- ")) {
                    const items = paragraph.split("\n").filter(item => item.startsWith("- "))
                    return (
                      <ul key={index} className="my-4 list-inside list-disc space-y-2">
                        {items.map((item, i) => (
                          <li key={i} className="text-muted-foreground">
                            {item.replace("- ", "")}
                          </li>
                        ))}
                      </ul>
                    )
                  }

                  // Regular paragraphs
                  return (
                    <p key={index} className="mb-4 leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  )
                })}
              </article>

              {/* Share Section */}
              <div className="mt-12 border-t border-border pt-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <Share2 className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium text-foreground">Share this post:</span>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://www.electchrisparker.org/news/${post.slug}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="mr-2 h-4 w-4" />
                        Facebook
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://www.electchrisparker.org/news/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="mr-2 h-4 w-4" />
                        Twitter
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 lg:py-16 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">More News</h2>

            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className="group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-muted aspect-video">
                    <div className="h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                      <span className="text-muted-foreground text-xs">Article image</span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs text-muted-foreground">{relatedPost.date}</span>
                    <h3 className="mt-2 font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/news/${relatedPost.slug}`}>
                        <span className="absolute inset-0" />
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Want to Help the Campaign?</h2>
              <p className="mt-2 text-primary-foreground/80">
                Your support makes all the difference in this race.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="https://secure.anedot.com/committee-to-elect-chris-parker/donate" target="_blank" rel="noopener noreferrer">Donate Now</a>
              </Button>
              <Button asChild variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/get-involved">Volunteer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
