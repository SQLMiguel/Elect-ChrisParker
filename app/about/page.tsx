import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Briefcase, Users, Heart, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Chris Parker",
  description: "Learn about Chris Parker, candidate for Forsyth County Commissioner District B. A lifelong North Carolinian, business leader, and community advocate.",
}

const timeline = [
  {
    year: "1978",
    title: "Born in North Carolina",
    description: "Chris was born and raised in a small town in North Carolina, learning the values of hard work and community from his parents.",
  },
  {
    year: "2000",
    title: "Graduated from NC State",
    description: "Earned a degree in Business Administration, with a focus on finance and management.",
  },
  {
    year: "2003",
    title: "Moved to Forsyth County",
    description: "Settled in Winston-Salem with his wife, ready to build a life and career in Forsyth County.",
  },
  {
    year: "2008",
    title: "Started His Business",
    description: "Founded a successful small business that has created jobs and served the community for over 15 years.",
  },
  {
    year: "2012",
    title: "Community Leadership",
    description: "Began serving on local boards and commissions, gaining valuable experience in local government.",
  },
  {
    year: "2026",
    title: "Running for Commissioner",
    description: "Announced candidacy for Forsyth County Commissioner District B to bring his experience and vision to county government.",
  },
]

const values = [
  {
    icon: Briefcase,
    title: "Fiscal Responsibility",
    description: "As a business owner, Chris knows every dollar must be spent wisely. He will bring that same discipline to county finances.",
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
                A lifelong North Carolinian, successful business owner, devoted family man, 
                and dedicated community servant.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                For over two decades, Chris has called Forsyth County home. He has built a 
                successful business here, raised his family here, and given back to his 
                community through countless volunteer hours. Now, he is ready to take on a 
                new challenge: ensuring that Forsyth County remains a great place to live, 
                work, and raise a family for generations to come.
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
            
            {/* Photo placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                  <div className="text-center p-8">
                    <div className="mx-auto h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <span className="text-3xl font-bold text-primary">CP</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Official portrait placeholder</p>
                  </div>
                </div>
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
                  Chris Parker was born and raised in a small town in North Carolina, where he 
                  learned the values of hard work, faith, and community from his parents. His 
                  father worked in a local manufacturing plant for over 30 years, and his mother 
                  was a schoolteacher who instilled in Chris a love of learning and service.
                </p>
                <p>
                  After graduating from NC State University with a degree in Business Administration, 
                  Chris moved to Forsyth County in 2003. He quickly fell in love with the community 
                  and knew he had found his home. He met his wife, Sarah, at church shortly after 
                  moving to the area, and they have been married for over 20 years. Together, they 
                  have three children who attend local schools.
                </p>
                <p>
                  In 2008, Chris took a leap of faith and started his own business. What began as 
                  a small operation has grown into a successful company that employs dozens of local 
                  residents. Chris is proud of the jobs he has created and the positive impact his 
                  business has had on the local economy.
                </p>
                <p>
                  Beyond his business, Chris has always believed in giving back. He has served on 
                  numerous local boards and commissions, volunteered with youth programs, and been 
                  an active member of his church. These experiences have given him a deep understanding 
                  of the challenges and opportunities facing Forsyth County.
                </p>
                <p>
                  Now, Chris is ready to bring his experience, values, and vision to the Forsyth County 
                  Board of Commissioners. He believes in common-sense solutions, fiscal responsibility, 
                  and putting people over politics. He is not running to be a career politician—he is 
                  running to serve his community.
                </p>
              </div>
            </div>

            {/* Family photo placeholder */}
            <div className="space-y-6">
              <div className="aspect-video overflow-hidden rounded-2xl bg-muted shadow-lg">
                <div className="h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                  <p className="text-muted-foreground text-sm">Family photo placeholder</p>
                </div>
              </div>
              
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-semibold text-foreground">Quick Facts</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Married to Sarah for 20+ years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Father of three children</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">NC State University graduate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Small business owner for 15+ years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Active church member and volunteer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Served on local boards and commissions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Chris&apos;s Journey
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A Life of Service
            </p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-px" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-primary text-xs font-bold text-primary-foreground md:left-1/2 md:-translate-x-1/2">
                      {index + 1}
                    </div>

                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
                        <span className="text-sm font-semibold text-accent">{item.year}</span>
                        <h3 className="mt-1 font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
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
              <Link href="/donate">Support the Campaign</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/get-involved">Volunteer Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
