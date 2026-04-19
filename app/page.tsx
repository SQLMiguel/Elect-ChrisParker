import { Hero } from "@/components/sections/hero"
import { IssuesGrid } from "@/components/sections/issues-grid"
import { AboutPreview } from "@/components/sections/about-preview"
// TODO: Re-enable endorsements when real endorsements are available
// import { EndorsementsCarousel } from "@/components/sections/endorsements-carousel"
import { NewsPreview } from "@/components/sections/news-preview"
import { VolunteerCTA } from "@/components/sections/volunteer-cta"
import { DonateCTA } from "@/components/sections/donate-cta"
import { FacebookUpdatesCTA } from "@/components/sections/facebook-updates-cta"
import { SHOW_NEWS_SECTION } from "@/lib/config/visibility"

export default function HomePage() {
  return (
    <>
      <Hero />
      <IssuesGrid />
      <AboutPreview />
      {/* TODO: Re-enable endorsements when real endorsements are available */}
      {/* <EndorsementsCarousel /> */}
      {SHOW_NEWS_SECTION ? <NewsPreview /> : null}
      <FacebookUpdatesCTA />
      <VolunteerCTA />
      <DonateCTA />
    </>
  )
}
