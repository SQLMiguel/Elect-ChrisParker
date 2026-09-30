import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage } from "@/components/sections/legal-page"
import { campaignInfo } from "@/lib/data/navigation"

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Chris Parker for Forsyth County Commissioner campaign website.",
}

export default function TermsPage() {
  const { email } = campaignInfo

  return (
    <LegalPage title="Terms of Use" effectiveDate="September 30, 2026">
      <div>
        <p className="!mt-0">
          This website is operated by the Committee to Elect Chris Parker (&ldquo;the
          campaign,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). By using this site, you agree to
          these terms. If you do not agree, please do not use the site.
        </p>
      </div>

      <div>
        <h2>Use of This Site</h2>
        <p>
          This site provides information about Chris Parker&apos;s campaign for Forsyth County
          Commissioner, District B. You may use it for personal, non-commercial purposes. You agree
          not to misuse the site, including by submitting false information, sending spam through
          our forms, or attempting to disrupt or gain unauthorized access to the site.
        </p>
      </div>

      <div>
        <h2>Content</h2>
        <p>
          The text, photos, logos, and other materials on this site belong to the campaign or are
          used with permission. You may share links to our pages and quote our content with
          attribution, but you may not alter it or use it in a way that suggests the campaign
          endorses a product, service, or other candidate.
        </p>
      </div>

      <div>
        <h2>Information You Submit</h2>
        <p>
          When you submit a form on this site, you confirm that the information is accurate and
          that it is yours to provide. Our use of that information is described in our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </div>

      <div>
        <h2>Contributions</h2>
        <p>
          Contributions are processed by a third-party provider, Anedot, and are subject to its
          terms. All contributions must comply with North Carolina campaign finance law.
          Contributions to the campaign are not tax-deductible for federal income tax purposes.
        </p>
      </div>

      <div>
        <h2>Links to Other Websites</h2>
        <p>
          Links to other websites are provided for convenience. The campaign does not control and
          is not responsible for their content, policies, or availability.
        </p>
      </div>

      <div>
        <h2>No Warranties</h2>
        <p>
          We work to keep the information on this site accurate and up to date, but it is provided
          &ldquo;as is&rdquo; without warranties of any kind. Event details, dates, and other
          information may change. For official voting and election information, visit the{" "}
          <a href="https://www.ncsbe.gov" target="_blank" rel="noopener noreferrer">
            NC State Board of Elections
          </a>
          .
        </p>
      </div>

      <div>
        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, the campaign is not liable for any damages
          arising from your use of, or inability to use, this site.
        </p>
      </div>

      <div>
        <h2>Governing Law</h2>
        <p>These terms are governed by the laws of the State of North Carolina.</p>
      </div>

      <div>
        <h2>Changes to These Terms</h2>
        <p>
          We may update these terms from time to time. The effective date at the top of this page
          shows when they were last changed.
        </p>
      </div>

      <div>
        <h2>Contact Us</h2>
        <p>
          Questions about these terms? Email <a href={`mailto:${email}`}>{email}</a> or use our{" "}
          <Link href="/contact">contact form</Link>.
        </p>
      </div>
    </LegalPage>
  )
}
