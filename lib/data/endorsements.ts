export interface Endorsement {
  id: string
  name: string
  title: string
  organization?: string
  quote?: string
  category: "elected" | "organization" | "community" | "business"
  featured: boolean
}

export const endorsements: Endorsement[] = [
  {
    id: "1",
    name: "Mayor Jane Smith",
    title: "Mayor of Winston-Salem",
    quote: "Chris Parker has the experience and vision our county needs. He understands fiscal responsibility while caring for our community's needs.",
    category: "elected",
    featured: true,
  },
  {
    id: "2",
    name: "Sheriff Robert Johnson",
    title: "Forsyth County Sheriff",
    quote: "I've worked with Chris on public safety initiatives for years. He's a true supporter of law enforcement and keeping our community safe.",
    category: "elected",
    featured: true,
  },
  {
    id: "3",
    name: "Forsyth County Farm Bureau",
    title: "Agricultural Organization",
    organization: "Forsyth County Farm Bureau",
    quote: "Chris Parker understands the needs of our farming community and will fight to protect agricultural interests in Forsyth County.",
    category: "organization",
    featured: true,
  },
  {
    id: "4",
    name: "Winston-Salem Chamber of Commerce",
    title: "Business Organization",
    organization: "Winston-Salem Chamber of Commerce",
    category: "business",
    featured: false,
  },
  {
    id: "5",
    name: "Councilman Michael Davis",
    title: "Winston-Salem City Council, Ward 3",
    quote: "Chris brings a common-sense approach to government that we need on the County Commission.",
    category: "elected",
    featured: false,
  },
  {
    id: "6",
    name: "Dr. Patricia Williams",
    title: "Community Leader",
    organization: "Forsyth Community Foundation",
    quote: "Chris Parker cares deeply about every corner of our community. He will be a commissioner for all of Forsyth County.",
    category: "community",
    featured: true,
  },
  {
    id: "7",
    name: "Forsyth Firefighters Association",
    title: "First Responder Organization",
    organization: "Forsyth Firefighters Association",
    category: "organization",
    featured: false,
  },
  {
    id: "8",
    name: "James Thompson",
    title: "Local Business Owner",
    organization: "Thompson Construction",
    quote: "As a small business owner, I know Chris will create an environment where businesses can grow and create jobs.",
    category: "business",
    featured: false,
  },
  {
    id: "9",
    name: "Veterans of Foreign Wars Post 1453",
    title: "Veterans Organization",
    organization: "VFW Post 1453",
    category: "organization",
    featured: false,
  },
  {
    id: "10",
    name: "Linda Martinez",
    title: "Former School Board Member",
    quote: "Chris Parker will be a strong advocate for our schools and the children of Forsyth County.",
    category: "community",
    featured: false,
  },
]
