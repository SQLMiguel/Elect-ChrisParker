export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: "announcement" | "press-release" | "endorsement" | "event" | "policy"
  featured: boolean
  image?: string
}

export const posts: BlogPost[] = [
  {
    slug: "chris-parker-announces-candidacy",
    title: "Chris Parker Announces Candidacy for Forsyth County Commissioner",
    excerpt: "Local business leader and community advocate Chris Parker officially announces his campaign for Forsyth County Commissioner, District B.",
    image: "/images/candidacy-announcement.jpg",
    content: `Today, I am honored to announce my candidacy for Forsyth County Commissioner, District B.

For over two decades, I have called Forsyth County home. I've built a business here, raised my family here, and served our community through countless volunteer hours. Now, I'm ready to take on a new challenge: ensuring that Forsyth County remains a great place to live, work, and raise a family for generations to come.

Our county stands at a crossroads. We can continue with the status quo, or we can choose a new direction—one focused on fiscal responsibility, economic growth, public safety, and quality of life for all our residents.

I'm running because I believe we need:
- Responsible stewardship of taxpayer dollars
- Support for our law enforcement and first responders
- Smart economic development that brings good jobs
- Investment in infrastructure that supports growth
- Preservation of our community's character and values

In the coming months, I look forward to meeting voters across District B, hearing your concerns, and sharing my vision for our county's future. Together, we can build a Forsyth County that works for everyone.

I humbly ask for your support, your vote, and your help in spreading the word. Let's get to work!

Chris Parker`,
    date: "March 1, 2026",
    author: "Chris Parker",
    category: "announcement",
    featured: true,
  },
  {
    slug: "sheriff-johnson-endorsement",
    title: "Sheriff Robert Johnson Endorses Chris Parker",
    excerpt: "Forsyth County Sheriff Robert Johnson announces his endorsement of Chris Parker for County Commissioner.",
    content: `I am proud to announce that Sheriff Robert Johnson has endorsed my campaign for Forsyth County Commissioner.

Sheriff Johnson stated: "I've worked with Chris Parker on public safety initiatives for years. He's a true supporter of law enforcement and keeping our community safe. Chris understands that our deputies and first responders need the resources and support to do their jobs effectively. I'm confident he will be a strong voice for public safety on the County Commission."

I am deeply honored to receive Sheriff Johnson's endorsement. Public safety is one of my top priorities, and I will always stand with the men and women who protect our community.

Together, we will ensure that Forsyth County remains a safe place for our families.`,
    date: "March 10, 2026",
    author: "Campaign Staff",
    category: "endorsement",
    featured: true,
  },
  {
    slug: "campaign-kickoff-announcement",
    title: "Join Us for the Campaign Kickoff Rally - April 15th",
    excerpt: "Mark your calendars! The official campaign kickoff rally will be held at Hanes Park Pavilion on April 15th.",
    content: `We are excited to announce the official campaign kickoff rally!

**When:** April 15, 2026, 6:00 PM - 8:00 PM
**Where:** Hanes Park Pavilion, 1101 Northwest Boulevard, Winston-Salem

Join us for an evening of food, music, and fellowship as we officially launch the campaign to elect Chris Parker as your next Forsyth County Commissioner.

You'll have the opportunity to:
- Hear Chris's vision for Forsyth County
- Meet fellow supporters and neighbors
- Sign up to volunteer
- Pick up yard signs and campaign materials

This event is free and open to all. Bring your family, friends, and neighbors!

Can't make it but still want to help? Visit our Get Involved page to learn about other ways to support the campaign.

We hope to see you there!`,
    date: "March 15, 2026",
    author: "Campaign Staff",
    category: "event",
    featured: false,
  },
  {
    slug: "economic-development-plan",
    title: "Chris Parker Releases Economic Development Plan",
    excerpt: "Campaign unveils comprehensive plan to attract jobs and grow the economy in Forsyth County.",
    content: `Today, I am releasing my comprehensive plan for economic development in Forsyth County.

Our county has tremendous potential, but we must be proactive in creating an environment where businesses can thrive and create good-paying jobs for our residents.

**My Economic Development Priorities:**

**1. Streamline Business Processes**
I will work to reduce bureaucratic red tape and streamline permitting processes. Businesses should be able to navigate county requirements efficiently and predictably.

**2. Workforce Development**
I will advocate for partnerships between the county, community colleges, and local businesses to create training programs that prepare our workforce for the jobs of today and tomorrow.

**3. Support Small Business**
Small businesses are the backbone of our economy. I will push for programs that help entrepreneurs start and grow their businesses in Forsyth County.

**4. Infrastructure Investment**
Modern infrastructure—including roads, utilities, and broadband—is essential for economic growth. I will prioritize investments that support sustainable development.

**5. Attract New Industries**
While supporting our existing businesses, we must also work to attract new industries that provide diverse employment opportunities for our residents.

This plan represents my commitment to making Forsyth County a leader in economic opportunity. I look forward to discussing these ideas with voters across the district.`,
    date: "March 20, 2026",
    author: "Chris Parker",
    category: "policy",
    featured: false,
  },
]
