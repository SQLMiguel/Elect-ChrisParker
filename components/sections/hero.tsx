import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { campaignInfo } from "@/lib/data/navigation"
import { ChevronRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-stripes-red">
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Official Portrait with navy arc, as on the billboards */}
          <div className="relative order-2 mx-auto w-full max-w-[22rem] lg:order-1 lg:max-w-[28rem]">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-0 aspect-square w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-4 border-white bg-muted shadow-2xl">
              <Image
                src="/images/Candidacy_edit.png"
                alt="Chris Parker - Forsyth County Commissioner Candidate"
                width={400}
                height={500}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative order-1 text-white lg:order-2">
            <p className="inline-flex items-center gap-2 rounded-sm bg-primary px-3 py-1 text-sm font-semibold uppercase tracking-wider">
              {campaignInfo.district} &middot; Forsyth County
            </p>

            <h1 className="mt-5 text-7xl sm:text-8xl lg:text-9xl">
              {campaignInfo.name}
            </h1>

            <p className="mt-2 text-2xl font-medium uppercase tracking-wide text-sky sm:text-3xl lg:text-4xl">
              County Commissioner
            </p>

            <p className="mt-3 text-lg font-extrabold uppercase tracking-wide sm:text-2xl">
              {campaignInfo.slogan}
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
              Chris is {campaignInfo.tagline.toLowerCase()}. He&apos;s running to put his
              experience to work improving our schools, keeping property taxes low, fostering
              safe neighborhoods, and putting people over partisan politics.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-accent hover:bg-white/90 font-semibold">
                <a href={campaignInfo.donateUrl} target="_blank" rel="noopener noreferrer">
                  Donate Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              >
                <Link href="/get-involved">Join the Campaign</Link>
              </Button>
            </div>

            <div className="mt-10 grid max-w-md grid-cols-2 gap-4 border-t border-white/30 pt-8">
              <div>
                <p className="font-display text-5xl">30+</p>
                <p className="text-sm text-white/80">Years in Forsyth County</p>
              </div>
              {/* TODO: Re-enable when real endorsements are available
              <div>
                <p className="font-display text-5xl">100+</p>
                <p className="text-sm text-white/80">Community Endorsements</p>
              </div>
              */}
              <div>
                <p className="font-display text-5xl">10,000+</p>
                <p className="text-sm text-white/80">Volunteer Hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
