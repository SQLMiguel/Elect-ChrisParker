export interface CampaignEvent {
  id: string
  title: string
  date: string
  time: string
  location: string
  address: string
  description: string
  type: "rally" | "townhall" | "fundraiser" | "volunteer" | "debate" | "meet-greet" | "meeting" | "festival"
  rsvpLink?: string
  isPast: boolean
  image?: string
}

export const events: CampaignEvent[] = [
  // TODO: Re-enable Campaign Kickoff Rally event when ready
  // {
  //   id: "1",
  //   title: "Campaign Kickoff Rally",
  //   date: "April 15, 2026",
  //   time: "6:00 PM - 8:00 PM",
  //   location: "Hanes Park Pavilion",
  //   address: "1101 Northwest Boulevard, Winston-Salem, NC 27101",
  //   description: "Join us for the official campaign kickoff! Meet Chris, hear his vision for Forsyth County, and enjoy food, music, and fellowship with your neighbors.",
  //   type: "rally",
  //   rsvpLink: "/get-involved",
  //   isPast: false,
  //   image: "/images/campaign-kickoff-rally.jpg",
  // },
  // TODO: Re-enable previous events when ready
  // {
  //   id: "2",
  //   title: "Town Hall: Economic Development",
  //   date: "April 22, 2026",
  //   time: "7:00 PM - 8:30 PM",
  //   location: "Clemmons Community Center",
  //   address: "3155 Clemmons Road, Clemmons, NC 27012",
  //   description: "Chris will discuss his plans for bringing jobs and economic opportunity to Forsyth County. Q&A session to follow.",
  //   type: "townhall",
  //   rsvpLink: "/get-involved",
  //   isPast: false,
  // },
  // {
  //   id: "3",
  //   title: "Volunteer Training Session",
  //   date: "April 28, 2026",
  //   time: "10:00 AM - 12:00 PM",
  //   location: "Campaign Headquarters",
  //   address: "123 Main Street, Suite 100, Winston-Salem, NC 27101",
  //   description: "Learn how you can make a difference! Training for door knocking, phone banking, and yard sign distribution.",
  //   type: "volunteer",
  //   isPast: false,
  // },
  // {
  //   id: "4",
  //   title: "Meet & Greet at Farmer's Market",
  //   date: "May 2, 2026",
  //   time: "8:00 AM - 12:00 PM",
  //   location: "Cobblestone Farmers Market",
  //   address: "1001 Cobblestone Court, Winston-Salem, NC 27101",
  //   description: "Stop by our booth to meet Chris, grab some campaign materials, and chat about the issues that matter to you.",
  //   type: "meet-greet",
  //   isPast: false,
  // },
  // {
  //   id: "5",
  //   title: "Fundraising Dinner",
  //   date: "May 10, 2026",
  //   time: "6:30 PM - 9:00 PM",
  //   location: "Millennium Center",
  //   address: "101 W 5th Street, Winston-Salem, NC 27101",
  //   description: "Join fellow supporters for an evening of dinner and conversation. Special guest speakers will share why they support Chris Parker.",
  //   type: "fundraiser",
  //   rsvpLink: "/donate",
  //   isPast: false,
  // },
  // {
  //   id: "6",
  //   title: "Commissioner Candidate Forum",
  //   date: "May 18, 2026",
  //   time: "7:00 PM - 9:00 PM",
  //   location: "Wake Forest University",
  //   address: "1834 Wake Forest Road, Winston-Salem, NC 27106",
  //   description: "All District B Commissioner candidates will participate in a moderated forum. Come hear where the candidates stand on the issues.",
  //   type: "debate",
  //   isPast: false,
  // },
  {
    id: "7",
    title: "Winston\u2011Salem / Forsyth County Utility Commission Meeting",
    date: "April 13, 2026",
    time: "12:00 PM",
    location: "Winston\u2011Salem / Forsyth County Utility Commission",
    address: "Winston-Salem, NC",
    description: "Anyone may attend and do not need to be a Forsyth County resident. No registration or invitation is required.",
    type: "meeting",
    isPast: false,
  },
  {
    id: "8",
    title: "Winston\u2011Salem / Forsyth County Utility Commission Meeting",
    date: "May 11, 2026",
    time: "12:00 PM",
    location: "Winston\u2011Salem / Forsyth County Utility Commission",
    address: "Winston-Salem, NC",
    description: "Anyone may attend and do not need to be a Forsyth County resident. No registration or invitation is required.",
    type: "meeting",
    isPast: false,
  },
  {
    id: "9",
    title: "Winston\u2011Salem / Forsyth County Utility Commission Meeting",
    date: "June 8, 2026",
    time: "12:00 PM",
    location: "Winston\u2011Salem / Forsyth County Utility Commission",
    address: "Winston-Salem, NC",
    description: "Anyone may attend and do not need to be a Forsyth County resident. No registration or invitation is required.",
    type: "meeting",
    isPast: false,
  },
  {
    id: "10",
    title: "32nd Annual Kernersville Spring Folly",
    date: "May 2, 2026",
    time: "10:00 AM - 3:00 PM",
    location: "Downtown Kernersville",
    address: "East Mountain Street, Kernersville, NC",
    description: "Free large-scale street festival featuring over 200 vendors, live music on multiple stages, carnival rides, fair food (BBQ, funnel cakes, fried foods), a chainsaw artist, Kid's Building Challenge (ages 5–12), and a dedicated Arts & Crafts show.",
    type: "festival",
    isPast: false,
  },
]
