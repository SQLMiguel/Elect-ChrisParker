import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Shield, CheckCircle, ExternalLink } from "lucide-react"
import { campaignInfo } from "@/lib/data/navigation"

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Chris Parker's campaign for Forsyth County Commissioner District B. Your contribution makes a difference.",
}

const donationAmounts = [
  { amount: 25, label: "$25", description: "Covers printing 50 door hangers" },
  { amount: 50, label: "$50", description: "Sponsors a yard sign" },
  { amount: 100, label: "$100", description: "Funds a week of digital ads" },
  { amount: 250, label: "$250", description: "Supports a community event" },
  { amount: 500, label: "$500", description: "Funds a mail piece to voters" },
  { amount: 1000, label: "$1,000", description: "Becomes a major supporter" },
]

const whyDonate = [
  "Fund voter outreach in every corner of District B",
  "Produce campaign materials that spread our message",
  "Support digital advertising to reach more voters",
  "Host community events and town halls",
  "Cover operational costs of running the campaign",
]

export default function DonatePage() {
  const anedotUrl = "https://secure.anedot.com/committee-to-elect-chris-parker/donate"

  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                <Heart className="h-4 w-4" />
                Support the Campaign
              </div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Invest in <span className="text-primary">Forsyth&apos;s Future</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Your contribution directly supports our grassroots campaign to bring 
                common-sense leadership to Forsyth County.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Every dollar helps us reach more voters, knock more doors, and spread 
                our message across District B. We are building a campaign powered by 
                people, not special interests.
              </p>

              {/* Why Donate */}
              <div className="mt-8">
                <h3 className="font-semibold text-foreground">Your Donation Helps:</h3>
                <ul className="mt-4 space-y-3">
                  {whyDonate.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Donation Card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-lg lg:p-8">
              <h2 className="text-xl font-bold text-foreground text-center">
                Make a Contribution
              </h2>
              <p className="mt-2 text-sm text-muted-foreground text-center">
                Secure donation powered by Anedot
              </p>

              {/* Amount Options */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {donationAmounts.map((option) => (
                  <Button
                    key={option.amount}
                    variant="outline"
                    className="h-auto flex-col py-4 hover:border-primary hover:bg-primary/5"
                    asChild
                  >
                    <a
                      href={`${anedotUrl}?amount=${option.amount}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-lg font-bold">{option.label}</span>
                    </a>
                  </Button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mt-6">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <a
                    href={anedotUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Recurring Option */}
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Want to maximize your impact?{" "}
                  <a
                    href={`${anedotUrl}?recurring=true`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    Set up a monthly donation
                  </a>
                </p>
              </div>

              {/* Security Badge */}
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>256-bit SSL encryption</span>
              </div>

              {/* Legal Disclaimer */}
              <div className="mt-6 rounded-lg bg-muted p-4">
                <p className="text-xs text-muted-foreground">
                  {campaignInfo.paidFor}. Contributions are not tax deductible. 
                  Federal law requires us to use our best efforts to collect and 
                  report the name, mailing address, occupation, and employer of 
                  individuals whose contributions exceed $200 in an election cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Your Impact
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Where Your Donation Goes
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We are committed to transparency. Here is how we use your contributions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {donationAmounts.slice(0, 6).map((option) => (
              <div
                key={option.amount}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <p className="text-3xl font-bold text-primary">{option.label}</p>
                <p className="mt-2 text-muted-foreground">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Other Ways to Support
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Financial contributions are important, but they are not the only way to help. 
              Your time and talent are equally valuable.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/get-involved">Become a Volunteer</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/events">Attend an Event</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Donor Wall / Thank You */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 lg:p-12 text-center text-primary-foreground">
            <Heart className="h-12 w-12 mx-auto" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Thank You to Our Supporters
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              We are grateful to the hundreds of supporters who have already contributed 
              to this campaign. Together, we are building something special.
            </p>
            <p className="mt-6 text-sm text-primary-foreground/60">
              Every contribution—no matter the size—makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center">
              Frequently Asked Questions
            </h2>

            <div className="mt-8 space-y-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">Is my donation secure?</h3>
                <p className="mt-2 text-muted-foreground">
                  Yes. All donations are processed through Anedot, a secure, PCI-compliant 
                  payment processor used by thousands of campaigns nationwide.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">Are contributions tax deductible?</h3>
                <p className="mt-2 text-muted-foreground">
                  No. Political contributions are not tax deductible under federal tax law.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">Who can contribute?</h3>
                <p className="mt-2 text-muted-foreground">
                  Contributions may be made by U.S. citizens or lawfully admitted permanent 
                  residents. Contributions from corporations, labor unions, foreign nationals, 
                  and federal government contractors are prohibited.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">Can I donate by check?</h3>
                <p className="mt-2 text-muted-foreground">
                  Yes. Please make checks payable to &quot;Committee to Elect Chris Parker&quot; 
                  and mail to: {campaignInfo.address.street}, {campaignInfo.address.city}, {campaignInfo.address.state} {campaignInfo.address.zip}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
