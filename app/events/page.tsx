import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Mic, Heart, PartyPopper, MessageSquare, ArrowRight } from "lucide-react"
import { events } from "@/lib/data/events"

export const metadata: Metadata = {
  title: "Events",
  description: "Attend a campaign event and meet Chris Parker in person. Rallies, town halls, fundraisers, and more.",
}

const eventTypeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  rally: PartyPopper,
  townhall: MessageSquare,
  fundraiser: Heart,
  volunteer: Users,
  debate: Mic,
  "meet-greet": Users,
}

const eventTypeColors: Record<string, string> = {
  rally: "bg-accent/10 text-accent border-accent/20",
  townhall: "bg-blue-100 text-blue-800 border-blue-200",
  fundraiser: "bg-purple-100 text-purple-800 border-purple-200",
  volunteer: "bg-green-100 text-green-800 border-green-200",
  debate: "bg-orange-100 text-orange-800 border-orange-200",
  "meet-greet": "bg-primary/10 text-primary border-primary/20",
}

const eventTypeLabels: Record<string, string> = {
  rally: "Rally",
  townhall: "Town Hall",
  fundraiser: "Fundraiser",
  volunteer: "Volunteer Event",
  debate: "Debate/Forum",
  "meet-greet": "Meet & Greet",
}

export default function EventsPage() {
  const upcomingEvents = events.filter((e) => !e.isPast)
  const pastEvents = events.filter((e) => e.isPast)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Campaign Events
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Meet Chris Parker in person, hear his vision for Forsyth County, and connect 
              with fellow supporters. We would love to see you at an upcoming event.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#upcoming">View Upcoming Events</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/get-involved">Host an Event</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Type Filter */}
      <section className="sticky top-[73px] z-40 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <nav className="flex gap-2 py-4 overflow-x-auto">
            <span className="shrink-0 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
              All Events
            </span>
            {Object.entries(eventTypeLabels).map(([key, label]) => (
              <span
                key={key}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium ${eventTypeColors[key]}`}
              >
                {label}
              </span>
            ))}
          </nav>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming" className="py-16 lg:py-24 bg-background scroll-mt-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Upcoming Events</h2>

          {upcomingEvents.length > 0 ? (
            <div className="space-y-6">
              {upcomingEvents.map((event) => {
                const Icon = eventTypeIcons[event.type] || Calendar
                return (
                  <div
                    key={event.id}
                    className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex gap-4">
                        {/* Date Badge */}
                        <div className="shrink-0 flex flex-col items-center justify-center rounded-lg bg-primary/10 px-4 py-3 text-center">
                          <span className="text-2xl font-bold text-primary">
                            {event.date.split(" ")[1]?.replace(",", "")}
                          </span>
                          <span className="text-sm text-primary">
                            {event.date.split(" ")[0]}
                          </span>
                        </div>

                        {/* Event Details */}
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${eventTypeColors[event.type]}`}
                            >
                              <Icon className="h-3 w-3" />
                              {eventTypeLabels[event.type]}
                            </span>
                          </div>

                          <h3 className="mt-2 text-xl font-semibold text-foreground">
                            {event.title}
                          </h3>

                          <div className="mt-3 space-y-2">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="mr-2 h-4 w-4 shrink-0" />
                              {event.time}
                            </div>
                            <div className="flex items-start text-sm text-muted-foreground">
                              <MapPin className="mr-2 h-4 w-4 shrink-0 mt-0.5" />
                              <span>
                                {event.location}
                                <br />
                                <span className="text-xs">{event.address}</span>
                              </span>
                            </div>
                          </div>

                          <p className="mt-4 text-muted-foreground">
                            {event.description}
                          </p>
                        </div>
                      </div>

                      {/* RSVP Button */}
                      <div className="shrink-0">
                        {event.rsvpLink && (
                          <Button asChild className="w-full lg:w-auto">
                            <Link href={event.rsvpLink}>
                              RSVP Now
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-card p-12 text-center">
              <Calendar className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">No Upcoming Events</h3>
              <p className="mt-2 text-muted-foreground">
                Check back soon for new campaign events, or sign up to be notified.
              </p>
              <Button asChild className="mt-6">
                <Link href="/get-involved">Get Notified</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Host an Event CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Host an Event for Chris
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Want to introduce Chris to your friends and neighbors? Host a house party, 
                coffee meetup, or community gathering. We will provide all the support you need.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/20 text-xs">1</span>
                  <span className="text-primary-foreground/90">Pick a date and invite your guests</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/20 text-xs">2</span>
                  <span className="text-primary-foreground/90">We will provide materials and support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/20 text-xs">3</span>
                  <span className="text-primary-foreground/90">Chris may even join in person!</span>
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link href="/get-involved">Sign Up to Host</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Past Events</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="rounded-xl border border-border bg-card p-5 opacity-75"
                >
                  <span className="text-xs text-muted-foreground">{event.date}</span>
                  <h3 className="mt-2 font-semibold text-foreground">{event.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Add to Calendar Info */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Calendar className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 text-2xl font-bold text-foreground">Never Miss an Event</h2>
            <p className="mt-4 text-muted-foreground">
              Sign up for our email list to get event announcements delivered straight 
              to your inbox. We will also send you reminders before each event.
            </p>
            <Button asChild className="mt-6">
              <Link href="/get-involved">Sign Up for Updates</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
