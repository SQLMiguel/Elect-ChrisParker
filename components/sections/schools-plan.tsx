import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const plan = [
  { verb: "Invest", rest: "in workforce development at Forsyth Tech" },
  { verb: "Reduce", rest: "wasteful spending in Forsyth County Public Schools" },
  { verb: "Create", rest: "community collaboration to prepare for the jobs of today and tomorrow" },
]

export function SchoolsPlan() {
  return (
    <section className="bg-sky py-16 text-sky-foreground lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-display text-2xl uppercase tracking-wide text-accent">
              Chris&apos;s Plan for Our Schools
            </p>
            <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl text-balance">
              The{" "}
              <span className="underline decoration-accent decoration-4 underline-offset-8">
                experience
              </span>{" "}
              to improve our schools &amp;{" "}
              <span className="underline decoration-accent decoration-4 underline-offset-8">
                support
              </span>{" "}
              our community college
            </h2>
            <p className="mt-6 text-lg leading-relaxed">
              Chris Parker serves as a trustee at Forsyth Tech Community College where he is the
              chair of the Student Success Committee. He&apos;s seen the challenges facing our K-12
              schools, and he has the talent to work with others to find common sense solutions.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              As President of Vienna Village, he understands the importance of educating our youth
              for the jobs of today and tomorrow whether in healthcare, technology or the skilled
              trades. He understands the importance education plays in keeping Forsyth County the
              best place to live, work, raise a family and run a business.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-xl sm:p-8">
            <p className="inline-block bg-primary px-3 pb-0.5 pt-1 font-display text-2xl uppercase tracking-wide text-white">
              Chris&apos; Plan
            </p>
            <ul className="mt-6 space-y-5">
              {plan.map((item) => (
                <li key={item.verb} className="flex items-start gap-3 text-lg">
                  <span aria-hidden="true" className="mt-2 h-3 w-3 shrink-0 bg-accent" />
                  <span>
                    <span className="font-bold underline decoration-accent decoration-2 underline-offset-4">
                      {item.verb}
                    </span>{" "}
                    {item.rest}
                  </span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8">
              <Link href="/issues#workforce-development-education">
                Read More on Education
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
