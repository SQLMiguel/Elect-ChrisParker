"use client"

import { useEffect, useState } from "react"
import { Vote, MapPin } from "lucide-react"
import { campaignInfo } from "@/lib/data/navigation"

type Phase = "before" | "during" | "after"

function getPhase(now: Date): Phase {
  const start = new Date(`${campaignInfo.earlyVotingStartDate}T00:00:00-04:00`)
  const end = new Date(`${campaignInfo.earlyVotingEndDate}T23:59:59-04:00`)
  if (now < start) return "before"
  if (now <= end) return "during"
  return "after"
}

export function AnnouncementBar() {
  const [phase, setPhase] = useState<Phase>("before")

  useEffect(() => {
    setPhase(getPhase(new Date()))
  }, [])

  const message =
    phase === "during" ? (
      <>
        <span className="font-bold">Early voting</span> is underway
      </>
    ) : phase === "after" ? (
      <>
        Election Day is <span className="font-bold">{campaignInfo.electionDate}</span>
      </>
    ) : (
      <>
        Vote early starting <span className="font-bold">{campaignInfo.earlyVotingStart}</span>
      </>
    )

  return (
    <div className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-4 py-2 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-1 text-center font-display text-lg uppercase tracking-wide sm:flex-row sm:gap-4">
          <div className="flex items-center gap-2">
            <Vote className="h-4 w-4" aria-hidden="true" />
            <span>{message}</span>
          </div>
          <span className="hidden sm:inline text-accent-foreground/60" aria-hidden="true">|</span>
          <a
            href={campaignInfo.pollingPlaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline underline-offset-4"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            <span>
              Find your polling place at <span className="font-bold">ncsbe.gov</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
