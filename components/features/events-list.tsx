"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Mic, Heart, PartyPopper, MessageSquare, ArrowRight, Landmark, Tent } from "lucide-react"
import type { CampaignEvent } from "@/lib/data/events"

const eventTypeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  rally: PartyPopper,
  townhall: MessageSquare,
  fundraiser: Heart,
  volunteer: Users,
  debate: Mic,
  "meet-greet": Users,
  meeting: Landmark,
  festival: Tent,
}

const eventTypeColors: Record<string, string> = {
  rally: "bg-accent/10 text-accent border-accent/20",
  townhall: "bg-blue-100 text-blue-800 border-blue-200",
  fundraiser: "bg-purple-100 text-purple-800 border-purple-200",
  volunteer: "bg-green-100 text-green-800 border-green-200",
  debate: "bg-orange-100 text-orange-800 border-orange-200",
  "meet-greet": "bg-primary/10 text-primary border-primary/20",
  meeting: "bg-slate-100 text-slate-800 border-slate-200",
  festival: "bg-pink-100 text-pink-800 border-pink-200",
}

const eventTypeLabels: Record<string, string> = {
  rally: "Rally",
  townhall: "Town Hall",
  fundraiser: "Fundraiser",
  volunteer: "Volunteer Event",
  debate: "Debate/Forum",
  "meet-greet": "Meet & Greet",
  meeting: "Public Meeting",
  festival: "Festival",
}

function parseEventDate(dateStr: string): Date {
  return new Date(dateStr)
}

function sortByDate(a: CampaignEvent, b: CampaignEvent): number {
  return parseEventDate(a.date).getTime() - parseEventDate(b.date).getTime()
}

export function EventsList({ events }: { events: CampaignEvent[] }) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const upcomingEvents = useMemo(() => events.filter((e) => !e.isPast), [events])
  const pastEvents = useMemo(() => events.filter((e) => e.isPast), [events])

  // Get only the event types that actually exist in the data
  const availableTypes = useMemo(() => {
    const types = new Set<string>(events.map((e) => e.type))
    return Object.entries(eventTypeLabels).filter(([key]) => types.has(key))
  }, [events])

  const filteredUpcoming = useMemo(() => {
    const sorted = [...upcomingEvents].sort(sortByDate)
    if (!activeFilter) return sorted
    return sorted.filter((e) => e.type === activeFilter)
  }, [upcomingEvents, activeFilter])

  const filteredPast = useMemo(() => {
    const sorted = [...pastEvents].sort(sortByDate)
    if (!activeFilter) return sorted
    return sorted.filter((e) => e.type === activeFilter)
  }, [pastEvents, activeFilter])

  return (
    <>
      {/* Event Type Filter */}
      <section className="sticky top-[73px] z-40 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <nav className="flex gap-2 py-4 overflow-x-auto">
            <button
              onClick={() => setActiveFilter(null)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === null
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              All Events
            </button>
            {availableTypes.map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(activeFilter === key ? null : key)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === key
                    ? "bg-primary text-primary-foreground border-primary"
                    : `${eventTypeColors[key]} hover:opacity-80`
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming" className="py-16 lg:py-24 bg-background scroll-mt-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Upcoming Events</h2>

          {filteredUpcoming.length > 0 ? (
            <div className="space-y-6">
              {filteredUpcoming.map((event) => {
                const Icon = eventTypeIcons[event.type] || Calendar
                return (
                  <div
                    key={event.id}
                    className="rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                  >
                    {event.image && (
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={800}
                          height={450}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 p-6">
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
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {activeFilter ? "No Events of This Type" : "No Upcoming Events"}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {activeFilter
                  ? "Try selecting a different event type, or view all events."
                  : "Check back soon for new campaign events, or sign up to be notified."}
              </p>
              {activeFilter ? (
                <Button className="mt-6" onClick={() => setActiveFilter(null)}>
                  View All Events
                </Button>
              ) : (
                <Button asChild className="mt-6">
                  <Link href="/get-involved">Get Notified</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      {filteredPast.length > 0 && (
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Past Events</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPast.map((event) => (
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
    </>
  )
}
