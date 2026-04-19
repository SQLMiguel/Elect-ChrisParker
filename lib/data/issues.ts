export interface Issue {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: string
  priorities: string[]
}

export const issues: Issue[] = [
  {
    id: "fiscal-responsibility",
    title: "Fiscal Responsibility",
    shortDescription: "Managing taxpayer dollars wisely and keeping taxes low while maintaining essential services.",
    fullDescription: "As a business leader in the healthcare industry who employs over 80 employees, I understand the importance of fiscal discipline. I will fight to keep taxes low while ensuring essential county services are maintained. My twelve years on the WS/FC Utility Commission, including the past two years as Chair, have enabled me to read and understand government budgets and ask the tough questions.  I will push for regular audits, transparent budgeting, and eliminating wasteful spending.",
    icon: "calculator",
    priorities: [
      "Keep property taxes low and predictable",
      "Conduct regular efficiency audits of county operations",
      "Increase transparency in county spending",
      "Build adequate reserves for emergencies",
    ],
  },
  {
    id: "public-safety",
    title: "Public Safety",
    shortDescription: "Supporting our law enforcement, first responders, and emergency services to keep our families safe.",
    fullDescription: "Nothing is more important than the safety of our families and communities. I will ensure our sheriff's department, fire services, and emergency responders have the resources, training, and support they need. We must also invest in crime prevention programs and build strong relationships between law enforcement and the communities they serve.",
    icon: "shield",
    priorities: [
      "Safe communities are a fundamental responsibility of local government.",
      "Residents and businesses expect safe streets, schools, and public spaces.",
      "A decline in public safety signals a failure of government at the most basic level.",
    ],
  },
  {
    id: "workforce-development-education",
    title: "Workforce Development and Education",
    shortDescription: "Creating jobs and opportunities for all Forsyth County residents through smart growth, business-friendly policies, and education resources at all levels.",
    fullDescription: "Forsyth County has tremendous potential for economic growth. Serving on the Board of Trustees for Forsyth Technical Community College, I have seen first hand the importance in educating our citizens to work for both existing and future employers.  These opportunities will create pathways to good-paying jobs for all residents .  Understanding that education is the key, we must focus on K to 12 education as well.  As your Commissioner, I will work to attract new businesses while supporting our existing employers and ensure that our citizens are sufficiently equipped to take advantage of those new opportunities.  We must invest in workforce development, streamline permitting processes, and ensure our infrastructure supports sustainable growth.",
    icon: "graduation-cap",
    priorities: [
      "Invest in workforce training and skills development",
      "Attract new businesses and industries to Forsyth County",
      "Support small business development and entrepreneurship",
      "Streamline county permitting and approval processes",
      "Support adequate funding for public schools",
    ],
  },
  {
    id: "housing-affordability",
    title: "Housing Affordability",
    shortDescription: "Housing affordability is key to keeping our workforce residing in our county and making our county attractive to new employers.",
    fullDescription: "Housing affordability is key to keeping our workforce residing in our county and making our county attractive to new employers.  We need to have adequate supply of homes for our citizens and to facilitate necessary growth when needed.  Housing costs are heavily influenced by zoning regulations and rising property taxes.  Maintaining low taxes is essential because property taxes directly affect overall housing affordability.",
    icon: "building",
    priorities: [
      "Keep property taxes low and predictable",
      "Streamline county permitting and approval processes",
      "Find ways to cut regulatory burden especially with zoning",
      "Expand water and sewer infrastructure for growth",
    ],
  },
  {
    id: "community-services",
    title: "Community Services",
    shortDescription: "Ensuring access to vital services for seniors, veterans, and families in need.",
    fullDescription: "A strong community takes care of its most vulnerable members. I will ensure our seniors, veterans, and families in need have access to vital county services. This includes supporting our parks and recreation facilities, libraries, and health department programs that improve quality of life for all residents.",
    icon: "heart",
    priorities: [
      "Protect services for children, seniors, and veterans.",
      "Maintain quality parks and recreation facilities",
      "Support mental health and substance abuse programs",
      "Ensure accessible services throughout the county",
      "Partner with nonprofits to maximize community impact",
    ],
  },
]
