import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase, Shield, Calculator, GraduationCap, Building2, Heart, CheckCircle, ArrowRight } from "lucide-react"
import { issues } from "@/lib/data/issues"
import { SHOW_EVENTS_SECTION } from "@/lib/config/visibility"

export const metadata: Metadata = {
  title: "Issues & Priorities",
  description: "Learn where Chris Parker stands on the issues that matter most to Forsyth County: economic development, public safety, fiscal responsibility, and more.",
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  briefcase: Briefcase,
  shield: Shield,
  calculator: Calculator,
  "graduation-cap": GraduationCap,
  building: Building2,
  heart: Heart,
}

export default function IssuesPage() {
  console.log("[v0] Issues data:", issues);
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Issues & Priorities
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Chris Parker is focused on the issues that matter most to Forsyth County families. 
              Here is where he stands on the key priorities facing our community.
            </p>
          </div>
        </div>
      </section>

      {/* Issues Navigation */}
      <section className="sticky top-[73px] z-40 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <nav className="flex gap-2 py-4 overflow-x-auto">
            {issues.map((issue) => (
              <a
                key={issue.id}
                href={`#${issue.id}`}
                className="shrink-0 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                {issue.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Issues Detail Sections */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="space-y-24">
            {issues.map((issue, index) => {
              const Icon = iconMap[issue.icon] || Briefcase
              const isEven = index % 2 === 0

              return (
                <div
                  key={issue.id}
                  id={issue.id}
                  className="scroll-mt-32"
                >
                  <div className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-start ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}>
                    {/* Content */}
                    <div className={isEven ? "" : "lg:order-2"}>
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-7 w-7" />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-accent">Priority {index + 1}</span>
                          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                            {issue.title}
                          </h2>
                        </div>
                      </div>

                      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                        {issue.fullDescription}
                      </p>
                    </div>

                    {/* Priorities List */}
                    <div className={`rounded-xl border border-border bg-card p-6 shadow-sm ${
                      isEven ? "lg:order-2" : ""
                    }`}>
                      <h3 className="font-semibold text-foreground">
                        {issue.id === "community-services"
                          ? "Chris's Priorities for Community Services"
                          : `Chris's Priorities for ${issue.title}`}
                      </h3>
                      <ul className="mt-4 space-y-4">
                        {issue.priorities.map((priority, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{priority}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Divider (except for last item) */}
                  {index < issues.length - 1 && (
                    <div className="mt-24 border-b border-border" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Chris&apos;s Commitment to You
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              &ldquo;I will listen to your concerns, work across party lines when it serves our 
              community, and always put the people of Forsyth County first. I am not interested 
              in political games or scoring points. I am interested in getting things done and 
              making our county an even better place to live, work, and raise a family.&rdquo;
            </p>
            <p className="mt-4 font-semibold text-primary">— Chris Parker</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Have Questions About the Issues?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Chris wants to hear from you. Whether you have a question, concern, or idea, 
                he is always ready to listen.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  Contact Chris
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {SHOW_EVENTS_SECTION ? (
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link href="/events">Attend an Event</Link>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
