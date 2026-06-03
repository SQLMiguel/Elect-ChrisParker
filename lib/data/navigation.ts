import { SHOW_EVENTS_SECTION, SHOW_NEWS_SECTION } from "@/lib/config/visibility"

export const mainNavigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Issues", href: "/issues" },
  { name: "Get Involved", href: "/get-involved" },
  ...(SHOW_NEWS_SECTION ? [{ name: "News", href: "/news" }] : []),
  ...(SHOW_EVENTS_SECTION ? [{ name: "Events", href: "/events" }] : []),
  // TODO: Re-enable when real endorsements are available
  // { name: "Endorsements", href: "/endorsements" },
  { name: "Contact", href: "/contact" },
]

export const footerNavigation = {
  campaign: [
    { name: "About Chris", href: "/about" },
    { name: "Issues", href: "/issues" },
    // TODO: Re-enable when real endorsements are available
    // { name: "Endorsements", href: "/endorsements" },
    ...(SHOW_NEWS_SECTION ? [{ name: "News", href: "/news" }] : []),
  ],
  getInvolved: [
    { name: "Volunteer", href: "/get-involved" },
    { name: "Donate", href: "https://secure.anedot.com/committee-to-elect-chris-parker/donate" },
    ...(SHOW_EVENTS_SECTION ? [{ name: "Events", href: "/events" }] : []),
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
  ],
}

export const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61585454301313", icon: "facebook" },
  { name: "Twitter", href: "https://twitter.com/electchrisparker", icon: "twitter" },
  { name: "Instagram", href: "https://instagram.com/electchrisparker", icon: "instagram" },
]

export const campaignInfo = {
  name: "Chris Parker",
  position: "Forsyth County Commissioner District B",
  district: "District B",
  state: "North Carolina",
  slogan: "Experience Matters for Forsyth County's Future",
  electionDate: "November 3, 2026",
  earlyVoting: "October 15 - October 31, 2026",
  email: "info@electchrisparker.org",
  phone: "(336) 306-6273",
  address: {
    street: "P.O. Box 121",
    city: "Pfafftown",
    state: "NC",
    zip: "27040",
  },
  paidFor: "Paid for by the Committee to Elect Chris Parker",
}
