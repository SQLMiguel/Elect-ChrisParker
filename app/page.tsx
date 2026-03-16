import { Hero } from "@/components/sections/hero"
import { IssuesGrid } from "@/components/sections/issues-grid"
import { AboutPreview } from "@/components/sections/about-preview"
import { EndorsementsCarousel } from "@/components/sections/endorsements-carousel"
import { NewsPreview } from "@/components/sections/news-preview"
import { VolunteerCTA } from "@/components/sections/volunteer-cta"
import { DonateCTA } from "@/components/sections/donate-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <IssuesGrid />
      <AboutPreview />
      <EndorsementsCarousel />
      <NewsPreview />
      <VolunteerCTA />
      <DonateCTA />
    </>
  )
}
