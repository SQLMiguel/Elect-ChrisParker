import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { campaignInfo } from "@/lib/data/navigation"

const donationAmounts = ["$25", "$50", "$100", "$250", "$500"]

export function DonateCTA() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary/80 px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
          
          <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-primary-foreground">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/20 px-4 py-1.5 text-sm font-medium">
                <Heart className="h-4 w-4" />
                Support the Campaign
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Help Us Win This Race
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Your contribution helps us reach more voters, spread our message, and 
                build the grassroots campaign needed to win. Every dollar makes a difference.
              </p>
              <p className="mt-4 text-sm text-primary-foreground/60">
                {campaignInfo.paidFor}
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-xl">
              <h3 className="text-lg font-semibold text-foreground text-center">
                Make a Contribution
              </h3>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {donationAmounts.map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    className="h-14 text-lg font-semibold"
                    asChild
                  >
                    <a href="https://secure.anedot.com/committee-to-elect-chris-parker/donate" target="_blank" rel="noopener noreferrer">
                      {amount}
                    </a>
                  </Button>
                ))}
                <Button
                  variant="outline"
                  className="h-14 text-lg font-semibold"
                  asChild
                >
                  <a href="https://secure.anedot.com/committee-to-elect-chris-parker/donate" target="_blank" rel="noopener noreferrer">Other</a>
                </Button>
              </div>
              <Button
                asChild
                size="lg"
                className="mt-6 w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a href="https://secure.anedot.com/committee-to-elect-chris-parker/donate" target="_blank" rel="noopener noreferrer">Donate Now</a>
              </Button>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Contributions are not tax deductible. Federal law requires us to use our 
                best efforts to collect and report the name, mailing address, occupation, 
                and employer of individuals whose contributions exceed $200.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
