const reasons = [
  {
    title: "He's Reasonable.",
    description:
      "Chris knows there are real problems facing Forsyth County and will work with Republicans and Democrats to solve them. He won't waste time with silly partisan games. And Chris is especially concerned about local taxes, supporting Forsyth Tech, and improving teacher pay and K-12 classrooms.",
  },
  {
    title: "He's Reliable.",
    description:
      "Chris and his wife, Heather, run a local small business and have been invested in Forsyth County for decades. Chris has served as a trustee at Forsyth Tech and as chair of the local utility commission.",
  },
  {
    title: "He's Respected.",
    description:
      "Chris has support from leaders and citizens across the county, in many different communities and from different walks of life.",
  },
]

export function ThreeReasons() {
  return (
    <section className="bg-stripes-red-horizontal py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="inline-block bg-primary px-4 pb-1 pt-2 font-display text-6xl leading-none sm:text-7xl">
              3 Reasons
            </h2>
            <p className="mt-5 font-display text-3xl leading-tight sm:text-4xl">
              Chris Parker is the right choice for County Commissioner:
            </p>
          </div>

          <ol className="space-y-8">
            {reasons.map((reason, index) => (
              <li key={reason.title} className="flex gap-5">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-12 shrink-0 items-center justify-center bg-white font-display text-5xl leading-none text-primary"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-3xl uppercase leading-none sm:text-4xl">
                    {reason.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-white/90">{reason.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
