import { campaignInfo } from "@/lib/data/navigation"

export function VoteEarly() {
  return (
    <section className="bg-stripes-red py-12 text-white lg:py-16">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2 className="font-display text-4xl uppercase sm:text-5xl">
          Chris Parker for County Commissioner
        </h2>
        <p className="mt-2 text-lg font-extrabold uppercase tracking-wide">
          {campaignInfo.slogan}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <p className="bg-white px-5 py-2 font-display text-2xl uppercase tracking-wide text-accent sm:text-3xl">
            Vote early starting <span className="text-primary">{campaignInfo.earlyVotingStart}</span>
          </p>
          <a
            href={campaignInfo.pollingPlaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary px-5 py-2 font-display text-2xl uppercase tracking-wide text-white transition-colors hover:bg-primary/90 sm:text-3xl"
          >
            Find your polling place at ncsbe.gov
          </a>
        </div>
        <p className="mt-6 text-sm text-white/80">
          Election Day: {campaignInfo.electionDate}
        </p>
      </div>
    </section>
  )
}
