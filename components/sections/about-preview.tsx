import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

const highlights = [
  "Lifelong Forsyth County resident",
  "Successful business owner for 15+ years",
  "Active community volunteer",
  "Proven leader and problem solver",
  "Committed to fiscal responsibility",
  "Dedicated family man",
]

export function AboutPreview() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-xl">
              <Image
                src="/images/SittingAtDeskClean.png"
                alt="Chris Parker at his desk"
                width={400}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Quote callout */}
            <div className="absolute -bottom-6 -right-6 max-w-xs rounded-xl bg-card p-6 shadow-lg border border-border lg:-right-8">
              <blockquote className="text-sm italic text-foreground">
                &ldquo;I believe in servant leadership. My job is to work for you, not the other way around.&rdquo;
              </blockquote>
              <p className="mt-2 text-sm font-semibold text-primary">— Chris Parker</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Meet Chris Parker
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              A Leader Who Listens
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Having lived and worked in the community for over three decades, Chris has built a life centered around service, family, and local engagement.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              As a successful business owner, devoted husband and father, and active community
              volunteer, Chris understands the challenges and opportunities facing our county.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Chris believes in common-sense solutions and fiscal responsibility. He&apos;s not running to be a career politician—he&apos;s
              running to serve his community and make Forsyth County an even better place to
              live, work, raise a family, and run a business.
            </p>

            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/about">
                  Read Full Bio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
