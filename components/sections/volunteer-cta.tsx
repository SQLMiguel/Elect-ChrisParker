import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Phone, Home, Share2 } from "lucide-react"

const volunteerOptions = [
  {
    icon: Home,
    title: "Door Knocking",
    description: "Talk to neighbors about Chris's vision for Forsyth County",
  },
  {
    icon: Phone,
    title: "Phone Banking",
    description: "Call voters from the comfort of your home",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Share our message and help spread the word online",
  },
  {
    icon: Users,
    title: "Event Support",
    description: "Help organize and staff campaign events",
  },
]

export function VolunteerCTA() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Join the Team
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Campaigns are won by people like you. Whether you have an hour or a whole day, 
            there&apos;s a place for you on our team.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {volunteerOptions.map((option) => (
            <div
              key={option.title}
              className="rounded-xl bg-primary-foreground/10 p-6 text-center backdrop-blur-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20">
                <option.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold">{option.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">{option.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href="/get-involved">Sign Up to Volunteer</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
