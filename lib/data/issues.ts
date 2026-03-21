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
    id: "economic-development",
    title: "Economic Development",
    shortDescription: "Creating jobs and opportunities for all Forsyth County residents through smart growth and business-friendly policies.",
    fullDescription: "Forsyth County has tremendous potential for economic growth. As your Commissioner, I will work to attract new businesses, support our existing employers, and create pathways to good-paying jobs for all residents. We must invest in workforce development, streamline permitting processes, and ensure our infrastructure supports sustainable growth.",
    icon: "briefcase",
    priorities: [
      "Attract new businesses and industries to Forsyth County",
      "Support small business development and entrepreneurship",
      "Invest in workforce training and skills development",
      "Streamline county permitting and approval processes",
      "Partner with educational institutions for job readiness programs",
    ],
  },
  {
    id: "public-safety",
    title: "Public Safety",
    shortDescription: "Supporting our law enforcement, first responders, and emergency services to keep our families safe.",
    fullDescription: "Nothing is more important than the safety of our families and communities. I will ensure our sheriff's department, fire services, and emergency responders have the resources, training, and support they need. We must also invest in crime prevention programs and build strong relationships between law enforcement and the communities they serve.",
    icon: "shield",
    priorities: [
      "Fully fund law enforcement and emergency services",
      "Support recruitment and retention of quality officers",
      "Invest in modern equipment and technology",
      "Expand community policing initiatives",
      "Improve emergency response times in rural areas",
    ],
  },
  {
    id: "fiscal-responsibility",
    title: "Fiscal Responsibility",
    shortDescription: "Managing taxpayer dollars wisely and keeping taxes low while maintaining essential services.",
    fullDescription: "As a business leader, I understand the importance of fiscal discipline. I will fight to keep taxes low while ensuring essential county services are maintained. Every dollar spent must provide value to our residents. I will push for regular audits, transparent budgeting, and eliminating wasteful spending.",
    icon: "calculator",
    priorities: [
      "Keep property taxes low and predictable",
      "Conduct regular efficiency audits of county operations",
      "Implement zero-based budgeting practices",
      "Increase transparency in county spending",
      "Build adequate reserves for emergencies",
    ],
  },
  {
    id: "education",
    title: "Education Support",
    shortDescription: "Partnering with our schools to ensure every child has access to quality education and opportunities.",
    fullDescription: "While the school board manages our schools directly, the County Commission plays a vital role in funding and supporting education. I will advocate for appropriate school funding, support career and technical education programs, and work to ensure our schools have safe, modern facilities.",
    icon: "graduation-cap",
    priorities: [
      "Support adequate funding for public schools",
      "Advocate for career and technical education programs",
      "Partner with schools on facility improvements",
      "Support school resource officer programs",
      "Encourage business-education partnerships",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    shortDescription: "Investing in water systems and broadband to support growth and quality of life.",
    fullDescription: "Quality infrastructure is essential for economic growth and quality of life. I will prioritize ensuring reliable water and sewer services and expanding broadband access to underserved areas. Smart infrastructure investments today will pay dividends for generations.",
    icon: "building",
    priorities: [
      "Expand water and sewer infrastructure for growth",
      "Bring high-speed internet to rural areas",
      "Plan for sustainable long-term growth",
      "Improve stormwater management systems",
    ],
  },
  {
    id: "community-services",
    title: "Community Services",
    shortDescription: "Ensuring access to vital services for seniors, veterans, and families in need.",
    fullDescription: "A strong community takes care of its most vulnerable members. I will ensure our seniors, veterans, and families in need have access to vital county services. This includes supporting our parks and recreation facilities, libraries, and health department programs that improve quality of life for all residents.",
    icon: "heart",
    priorities: [
      "Protect and expand services for seniors and veterans",
      "Maintain quality parks and recreation facilities",
      "Support mental health and substance abuse programs",
      "Ensure accessible services throughout the county",
      "Partner with nonprofits to maximize community impact",
    ],
  },
]
