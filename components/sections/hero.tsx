import Link from "next/link"
import { Button } from "@/components/ui/button"
import { campaignInfo } from "@/lib/data/navigation"
import { ChevronRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
              {campaignInfo.district} Race
            </div>
            
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              <span className="text-primary">{campaignInfo.name}</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-muted-foreground">
                for {campaignInfo.position}
              </span>
            </h1>
            
            <p className="mt-4 text-xl font-medium text-accent">
              {campaignInfo.slogan}
            </p>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              As a lifelong resident and business leader in Forsyth County, I&apos;m running to 
              bring common-sense leadership to our county government. Together, we can build 
              a stronger, safer, and more prosperous community for all.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/donate">
                  Donate Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/get-involved">
                  Join the Campaign
                </Link>
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              <div>
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="text-sm text-muted-foreground">Years in Forsyth County</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">Community Endorsements</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">1000s</p>
                <p className="text-sm text-muted-foreground">Volunteer Hours</p>
              </div>
            </div>
          </div>
          
          {/* Image placeholder - user will upload actual photo */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="text-center p-8">
                  <div className="mx-auto h-32 w-32 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold text-primary">CP</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Campaign photo placeholder</p>
                  <p className="text-muted-foreground text-xs mt-1">Upload your photo to replace</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-2xl bg-accent/10 -z-10" />
            <div className="absolute -top-4 -left-4 h-48 w-48 rounded-2xl bg-primary/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
