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
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-xl">
              <Image
                src="/images/photoshoot/chris-porch-residents.jpg"
                alt="Chris Parker talking with neighbors on a front porch"
                width={1600}
                height={1067}
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
            <h2 className="font-display text-2xl uppercase tracking-wide text-accent">
              Meet Chris Parker
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              A Local Small Business Owner with Bipartisan Solutions
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Chris Parker has never run for public office and has no desire to be a career
              politician. He has called Forsyth County home for more than three decades, built a
              business and raised his family in our community.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Chris serves as a trustee at Forsyth Tech and as a board member of the YMCA. He has
              chaired the local utility commission. He&apos;s running for Commissioner to put his experience to work improving our
              schools, keeping property taxes low, fostering safe neighborhoods, and putting
              people over partisan politics.
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
