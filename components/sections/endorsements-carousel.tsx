import Link from "next/link"
import { Quote, ArrowRight } from "lucide-react"
import { endorsements } from "@/lib/data/endorsements"
import { Button } from "@/components/ui/button"

export function EndorsementsCarousel() {
  const featuredEndorsements = endorsements.filter((e) => e.featured && e.quote)

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
            Endorsements
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Trusted by Community Leaders
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            See what local leaders and organizations are saying about Chris Parker.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredEndorsements.map((endorsement) => (
            <div
              key={endorsement.id}
              className="relative rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
              <blockquote className="text-foreground leading-relaxed">
                &ldquo;{endorsement.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {endorsement.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{endorsement.name}</p>
                  <p className="text-sm text-muted-foreground">{endorsement.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/endorsements">
              View All Endorsements
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
