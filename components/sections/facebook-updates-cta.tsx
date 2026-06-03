import { Button } from "@/components/ui/button"
import { socialLinks } from "@/lib/data/navigation"
import { CalendarDays, Facebook, Newspaper, ArrowRight } from "lucide-react"

const facebookLink = socialLinks.find((link) => link.name === "Facebook")?.href ?? "https://www.facebook.com/profile.php?id=61585454301313"

const updateHighlights = [
  {
    icon: Newspaper,
    title: "Latest Campaign News",
    description: "Follow major announcements, campaign updates, and community messages as they are posted.",
  },
  {
    icon: CalendarDays,
    title: "Upcoming Events",
    description: "See the newest event details and schedule updates in one easy place.",
  },
]

export function FacebookUpdatesCTA() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Facebook className="h-4 w-4" />
                Stay Connected on Facebook
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Get the Latest News and Event Updates on Facebook
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                News and calendar updates are being streamlined on our Facebook page. Find the latest campaign announcements and upcoming event information there.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {updateHighlights.map((item) => (
                  <div key={item.title} className="rounded-xl bg-secondary/70 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-primary-foreground shadow-xl">
              <h3 className="text-2xl font-bold text-balance">Follow Chris Parker on Facebook</h3>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                Stay up to date with campaign news, event reminders, and real-time updates from the trail.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                  Visit the Facebook Page
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <p className="mt-4 text-center text-xs text-primary-foreground/70">
                Opens in a new tab for the latest posts, announcements, and event details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
