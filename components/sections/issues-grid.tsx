import Link from "next/link"
import { Briefcase, Shield, Calculator, GraduationCap, Building2, Heart, ArrowRight } from "lucide-react"
import { issues } from "@/lib/data/issues"
import { Button } from "@/components/ui/button"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  briefcase: Briefcase,
  shield: Shield,
  calculator: Calculator,
  "graduation-cap": GraduationCap,
  building: Building2,
  heart: Heart,
}

export function IssuesGrid() {
  const featuredIssues = issues.slice(0, 6)

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
            The Issues
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Priorities for Forsyth County
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            I&apos;m focused on the issues that matter most to our community. Here&apos;s where I stand.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredIssues.map((issue) => {
            const Icon = iconMap[issue.icon] || Briefcase
            return (
              <Link
                key={issue.id}
                href={`/issues#${issue.id}`}
                className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {issue.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                      {issue.shortDescription}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/issues">
              View All Issues
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
