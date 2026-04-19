import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { notFound } from "next/navigation"
import { events } from "@/lib/data/events"
import { EventsList } from "@/components/features/events-list"
import { SHOW_EVENTS_SECTION } from "@/lib/config/visibility"

export const metadata: Metadata = {
  title: "Events",
  description: "Attend a campaign event and meet Chris Parker in person. Rallies, town halls, fundraisers, and more.",
}

export default function EventsPage() {
  if (!SHOW_EVENTS_SECTION) {
    notFound()
  }

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

      <EventsList events={events} />

      {/* Host an Event CTA */}
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
