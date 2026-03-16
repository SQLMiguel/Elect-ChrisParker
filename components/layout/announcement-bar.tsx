import { Calendar, Vote } from "lucide-react"
import { campaignInfo } from "@/lib/data/navigation"

export function AnnouncementBar() {
  return (
    <div className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-4 py-2 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2">
            <Vote className="h-4 w-4" />
            <span className="text-sm font-medium">
              Election Day: {campaignInfo.electionDate}
            </span>
          </div>
          <span className="hidden sm:inline text-accent-foreground/60">|</span>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">
              Early Voting: {campaignInfo.earlyVoting}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
