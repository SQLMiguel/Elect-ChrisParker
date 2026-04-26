import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Briefcase, Users, Heart, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Chris Parker",
  description: "Learn about Chris Parker, candidate for Forsyth County Commissioner District B. A lifelong North Carolinian, business leader, and community advocate.",
}

const values = [
  {
    icon: Briefcase,
    title: "Fiscal Responsibility",
    description: "As an employer in the healthcare industry, Chris knows every dollar must be spent wisely. As chair of the WS/FC Utility Commission, he has developed the ability to read and analyze large government budgets and ask tough questions.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Chris believes in servant leadership and putting the needs of the community above personal or political interests.",
  },
  {
    icon: Heart,
    title: "Family Values",
    description: "As a husband and father, Chris is committed to making Forsyth County a great place to raise a family.",
  },
  {
    icon: Award,
    title: "Results-Oriented",
    description: "Chris is not interested in politics as usual. He wants to get things done and deliver results for the people.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Meet <span className="text-primary">Chris Parker</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                A successful business owner, devoted family man, and dedicated community servant.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                For over three decades, Chris has called Forsyth County home. He has operated a 
                successful business here, raised his family here, and given back to his 
                community through countless volunteer hours. Now, he is ready to take on a 
                new challenge: ensuring that Forsyth County remains a great place to live, 
                work, raise a family, and run a business for generations to come.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/issues">
                    See Chris&apos;s Priorities
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/get-involved">Join the Campaign</Link>
                </Button>
              </div>
            </div>
            
            {/* Photo */}
            <div className="relative mx-auto w-full max-w-[20.5rem] lg:mx-0 lg:max-w-[23.75rem]">
              <div className="aspect-[5/6] overflow-hidden rounded-2xl bg-muted shadow-xl">
                <Image
                  src="/images/chris-parker-portrait.webp"
                  alt="Chris Parker - Official Portrait"
                  width={400}
                  height={500}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Guiding Principles
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Chris&apos;s Core Values
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Biography
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Forsyth County became home in 1994, when my fiancée, Heather, first brought 
                  me here while we were working on a consulting project together in Chattanooga, 
                  Tennessee. Not long after, I chose to shift from consulting into a role where 
                  service and community would be at the center of my work—joining Vienna Village 
                  Assisted Living, a third generation family-owned business that has supported 
                  local families for more than 60 years.
                </p>
                <p>
                  For over three decades, our team at Vienna Village has helped hundreds of 
                  residents age with dignity and provided peace of mind to their families. 
                  Operating a small business with 90 residents and over 80 staff has required 
                  hands on leadership, financial discipline, and a deep sense of 
                  responsibility—skills that mirror what effective county leadership demands.
                </p>
                <p>
                  Beyond his business, Chris has always believed in giving back. He has served 
                  on numerous local boards and commissions, volunteered with youth programs, and 
                  been an active member of his church. These experiences have given him a deep 
                  understanding of the challenges and opportunities facing Forsyth County.
                </p>
                <p>
                  Now, Chris is ready to bring his experience, values, and vision to the Forsyth 
                  County Board of Commissioners. He believes in common-sense solutions, fiscal 
                  responsibility, and putting people over politics. He is not running to be a 
                  career politician—he is running to serve his community.
                </p>
              </div>
            </div>

            {/* Family photo */}
            <div className="space-y-6">
              <div className="aspect-video overflow-hidden rounded-2xl bg-muted shadow-lg">
                <Image
                  src="/images/WithHeahter.jpg"
                  alt="Chris Parker with his wife Heather"
                  width={800}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="aspect-video overflow-hidden rounded-2xl bg-muted shadow-lg">
                <Image
                  src="/images/YMCA1.jpg"
                  alt="Chris Parker at the YMCA Northwest NC"
                  width={800}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-semibold text-foreground">Quick Facts</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Forsyth County resident since 1995</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Married to Heather</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Operates Vienna Village Assisted Living — 90 residents, 80+ staff</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">30+ years in senior care and small business leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Active church member and volunteer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Served on local boards and commissions, such as YMCA Northwest NC, Winston-Salem/Forsyth County Utility Commission, Forsyth Technical Community College Board of Trustees, Centers for Exceptional Children</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Make a Difference?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Join Chris Parker in his mission to bring common-sense leadership to Forsyth County. 
            Together, we can build a brighter future.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="https://secure.anedot.com/committee-to-elect-chris-parker/donate" target="_blank" rel="noopener noreferrer">Support the Campaign</a>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/get-involved">Volunteer Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
