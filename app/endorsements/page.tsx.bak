import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Quote, Users, Building2, Briefcase, UserCheck } from "lucide-react"
import { endorsements } from "@/lib/data/endorsements"

export const metadata: Metadata = {
  title: "Endorsements",
  description: "See who is endorsing Chris Parker for Forsyth County Commissioner. Elected officials, organizations, and community leaders support Chris.",
}

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  elected: UserCheck,
  organization: Building2,
  community: Users,
  business: Briefcase,
}

const categoryLabels: Record<string, string> = {
  elected: "Elected Officials",
  organization: "Organizations",
  community: "Community Leaders",
  business: "Business Leaders",
}

export default function EndorsementsPage() {
  const electedEndorsements = endorsements.filter((e) => e.category === "elected")
  const organizationEndorsements = endorsements.filter((e) => e.category === "organization")
  const communityEndorsements = endorsements.filter((e) => e.category === "community")
  const businessEndorsements = endorsements.filter((e) => e.category === "business")

  const featuredEndorsements = endorsements.filter((e) => e.featured && e.quote)

  const endorsementGroups = [
    { category: "elected", items: electedEndorsements },
    { category: "organization", items: organizationEndorsements },
    { category: "community", items: communityEndorsements },
    { category: "business", items: businessEndorsements },
  ].filter((group) => group.items.length > 0)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Endorsements
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Chris Parker is proud to have the support of elected officials, organizations, 
              business leaders, and community members across Forsyth County.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {endorsementGroups.map((group) => {
              const Icon = categoryIcons[group.category]
              return (
                <div key={group.category} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="mt-3 text-3xl font-bold text-primary">{group.items.length}</p>
                  <p className="text-sm text-muted-foreground">{categoryLabels[group.category]}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Endorsements */}
      {featuredEndorsements.length > 0 && (
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Featured Endorsements
            </h2>
            <p className="mt-2 text-2xl font-bold text-foreground">
              What They&apos;re Saying
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {featuredEndorsements.map((endorsement) => (
                <div
                  key={endorsement.id}
                  className="relative rounded-xl border border-border bg-card p-6 shadow-sm"
                >
                  <Quote className="absolute top-4 right-4 h-10 w-10 text-primary/10" />
                  <blockquote className="text-lg text-foreground leading-relaxed pr-8">
                    &ldquo;{endorsement.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">
                        {endorsement.name.split(" ").map((n) => n[0]).join("")}
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
          </div>
        </section>
      )}

      {/* All Endorsements by Category */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-10">All Endorsements</h2>

          <div className="space-y-12">
            {endorsementGroups.map((group) => {
              const Icon = categoryIcons[group.category]
              return (
                <div key={group.category}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {categoryLabels[group.category]}
                    </h3>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((endorsement) => (
                      <div
                        key={endorsement.id}
                        className="rounded-xl border border-border bg-card p-5 shadow-sm"
                      >
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-sm font-semibold text-primary">
                              {endorsement.name.split(" ").map((n) => n[0]).join("")}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{endorsement.name}</p>
                            <p className="text-sm text-muted-foreground">{endorsement.title}</p>
                            {endorsement.organization && endorsement.category !== "organization" && (
                              <p className="text-xs text-muted-foreground mt-1">
                                {endorsement.organization}
                              </p>
                            )}
                          </div>
                        </div>
                        {endorsement.quote && (
                          <p className="mt-4 text-sm text-muted-foreground italic line-clamp-3">
                            &ldquo;{endorsement.quote}&rdquo;
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Request Endorsement CTA */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 lg:p-12 text-primary-foreground">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Want to Endorse Chris?
                </h2>
                <p className="mt-4 text-lg text-primary-foreground/80">
                  If you would like to publicly endorse Chris Parker for Forsyth County 
                  Commissioner, we would love to hear from you. Endorsements from community 
                  members, organizations, and leaders help build momentum for the campaign.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-primary-foreground/80">
                  <li>Share why you support Chris</li>
                  <li>Allow us to use your name and statement publicly</li>
                  <li>Help spread the word to your networks</li>
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Link href="/contact">Submit an Endorsement</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Join These Leaders in Supporting Chris
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Add your voice to the growing coalition of supporters working to bring 
            common-sense leadership to Forsyth County.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/donate">Support the Campaign</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/get-involved">Volunteer Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
