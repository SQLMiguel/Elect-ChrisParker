import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { VolunteerForm } from "@/components/features/volunteer-form"
import { UpdatesSignupForm } from "@/components/features/updates-signup-form"
import { Home, Phone, Share2, Users, MapPin, Calendar, Heart, Megaphone, Bell } from "lucide-react"

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Join Chris Parker's campaign for Forsyth County Commissioner. Volunteer, donate, and help make a difference in District B.",
}

const volunteerWays = [
  {
    icon: Home,
    title: "Door Knocking",
    description: "Meet your neighbors and share Chris's message face-to-face. It's the most effective way to reach voters.",
  },
  {
    icon: Phone,
    title: "Phone Banking",
    description: "Make calls from home or the campaign office. Perfect if you have limited time or mobility.",
  },
  {
    icon: MapPin,
    title: "Yard Signs",
    description: "Display a yard sign to show your support and spread the word in your neighborhood.",
  },
  {
    icon: Calendar,
    title: "Event Support",
    description: "Help organize and staff campaign events, from rallies to community meetings.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Share posts, create content, and help us reach voters online.",
  },
  {
    icon: Megaphone,
    title: "Spread the Word",
    description: "Talk to friends, family, and coworkers about why you support Chris.",
  },
]

const impactStats = [
  { number: "10,000+", label: "Doors to Knock" },
  { number: "500+", label: "Yard Signs to Place" },
  { number: "200+", label: "Volunteers to Mobilize" },
  { number: "50+", label: "Community Events to Host" },
]

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Join the <span className="text-primary">Movement</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                This campaign will be powered by people like you. Whether you have an hour or a week, 
                there&apos;s a place for you on Team Parker.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Together, we&apos;re building something bigger than a campaign—we&apos;re building a 
                movement. Every door knocked, every call made, and every conversation started brings 
                us closer to victory.
              </p>
              <p className="mt-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Here&apos;s what we&apos;re working toward—together:
              </p>

              {/* Impact Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {impactStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-primary">{stat.number}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-muted-foreground font-medium">
                Be part of the effort that makes the difference.
              </p>
            </div>

            {/* Volunteer Form */}
            <VolunteerForm />
          </div>
        </div>
      </section>

      {/* Stay Updated / Signup Section */}
      <section id="signup" className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Bell className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Stay in the Loop
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Sign Up for Campaign Updates
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/85 leading-relaxed">
                Be the first to hear about town halls, endorsements, important vote dates, 
                and how you can make a difference. Sign up for email updates and SMS text alerts.
              </p>
              <ul className="mt-6 space-y-2 text-primary-foreground/80 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  Breaking news and endorsements
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  Upcoming events and town halls
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  Election reminders and voting information
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  Ways to get involved and volunteer
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-background text-foreground p-8 shadow-xl">
              <h3 className="text-lg font-semibold text-foreground mb-1">Join Our List</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Choose how you want to stay connected with the campaign.
              </p>
              <UpdatesSignupForm />
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Help Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Make an Impact
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ways to Help
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              No matter your skills or schedule, there is a way for you to contribute 
              to this campaign.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {volunteerWays.map((way) => (
              <div
                key={way.title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <way.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{way.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{way.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TODO: Re-enable Volunteer Stories section when real testimonials are available */}
      {/* <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Volunteer Stories
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why They Volunteer
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <blockquote className="text-foreground">
                &ldquo;I have never volunteered for a campaign before, but Chris&apos;s message 
                of common-sense leadership inspired me to get involved. The team made me 
                feel welcome from day one.&rdquo;
              </blockquote>
              <div className="mt-4">
                <p className="font-semibold text-foreground">Jennifer M.</p>
                <p className="text-sm text-muted-foreground">First-time volunteer</p>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <blockquote className="text-foreground">
                &ldquo;As a small business owner, I know Chris understands the challenges we 
                face. Knocking on doors for him has been incredibly rewarding—people are 
                excited about his message.&rdquo;
              </blockquote>
              <div className="mt-4">
                <p className="font-semibold text-foreground">Robert T.</p>
                <p className="text-sm text-muted-foreground">Door knock team lead</p>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <blockquote className="text-foreground">
                &ldquo;Even though I can not walk long distances anymore, I can still make 
                phone calls from home. The campaign found a way for me to contribute, and 
                I am grateful.&rdquo;
              </blockquote>
              <div className="mt-4">
                <p className="font-semibold text-foreground">Patricia H.</p>
                <p className="text-sm text-muted-foreground">Phone bank volunteer</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Other Ways to Support */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Donate Card */}
            <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-primary-foreground">
              <Heart className="h-10 w-10" />
              <h3 className="mt-4 text-2xl font-bold">Support Financially</h3>
              <p className="mt-2 text-primary-foreground/80">
                Your financial contribution helps us reach more voters, produce campaign 
                materials, and build the infrastructure needed to win.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a href="https://secure.anedot.com/committee-to-elect-chris-parker/donate" target="_blank" rel="noopener noreferrer">Donate Now</a>
              </Button>
            </div>

            {/* Events Card */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <Users className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-2xl font-bold text-foreground">Attend an Event</h3>
              <p className="mt-2 text-muted-foreground">
                Meet Chris in person, hear his vision, and connect with fellow supporters 
                at one of our upcoming campaign events.
              </p>
              <Button asChild size="lg" className="mt-6">
                <Link href="/events">View Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Make a Difference?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Fill out the volunteer form above, and a member of our team will reach out 
            with opportunities that fit your schedule and interests.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <a href="#top">Sign Up Now</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
