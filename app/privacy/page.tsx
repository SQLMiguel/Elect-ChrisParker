import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage } from "@/components/sections/legal-page"
import { campaignInfo } from "@/lib/data/navigation"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the Committee to Elect Chris Parker collects, uses, and protects your information.",
}

export default function PrivacyPage() {
  const { email, phone, address } = campaignInfo

  return (
    <LegalPage title="Privacy Policy" effectiveDate="September 30, 2026">
      <div>
        <p className="!mt-0">
          The Committee to Elect Chris Parker (&ldquo;the campaign,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us&rdquo;) respects your privacy. This policy explains what information we collect
          through this website, how we use it, and the choices you have.
        </p>
      </div>

      <div>
        <h2>Information We Collect</h2>
        <p>We only collect information you choose to give us through the forms on this site:</p>
        <ul>
          <li>
            <strong>Campaign updates sign-up:</strong> name, email address, phone number, ZIP code,
            and whether you want to receive email and/or text message updates.
          </li>
          <li>
            <strong>Volunteer sign-up:</strong> name, email address, phone number, mailing address,
            volunteer interests, and any comments you share.
          </li>
          <li>
            <strong>Contact form:</strong> name, email address, phone number, and your message.
          </li>
        </ul>
        <p>
          Like most websites, our hosting and analytics providers may also automatically record
          basic technical information such as your browser type, device, pages visited, and IP
          address. We use this only in aggregate to keep the site running and understand how it is
          used.
        </p>
      </div>

      <div>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to your questions and messages.</li>
          <li>To coordinate volunteer opportunities.</li>
          <li>
            To send you campaign news, event information, and requests for support, if you opted
            in.
          </li>
          <li>To meet legal and reporting requirements that apply to political campaigns.</li>
        </ul>
      </div>

      <div>
        <h2>Text Messages</h2>
        <p>
          If you opt in to text messages, you agree to receive recurring campaign updates from the
          Committee to Elect Chris Parker at the number you provided. Message frequency varies.
          Message and data rates may apply. Reply <strong>STOP</strong> at any time to unsubscribe,
          or <strong>HELP</strong> for help. Consent to receive texts is not a condition of
          supporting the campaign.
        </p>
        <p>
          We do not sell, rent, or share your mobile phone number or text messaging opt-in with
          third parties for their marketing purposes.
        </p>
      </div>

      <div>
        <h2>How We Share Information</h2>
        <p>
          We do not sell your personal information. We share it only with volunteers and service
          providers who help us run the campaign (such as email and website hosting providers), and
          only as needed for them to do that work, or when required by law.
        </p>
      </div>

      <div>
        <h2>Donations</h2>
        <p>
          Contributions are processed by our secure third-party payment provider, Anedot. Your
          payment information is handled under Anedot&apos;s privacy policy and is not stored on this
          website. As required by law, the campaign reports certain contributor information (such
          as name, address, occupation, and employer) to the appropriate election authorities.
        </p>
      </div>

      <div>
        <h2>Other Websites</h2>
        <p>
          This site links to other websites, such as Facebook, Anedot, and the NC State Board of
          Elections. We are not responsible for their content or privacy practices.
        </p>
      </div>

      <div>
        <h2>Your Choices</h2>
        <ul>
          <li>Unsubscribe from emails using the link in any campaign email.</li>
          <li>Reply STOP to any campaign text message to stop receiving texts.</li>
          <li>
            Contact us to ask what information we have about you or to ask that we remove it from
            our lists.
          </li>
        </ul>
      </div>

      <div>
        <h2>Children</h2>
        <p>
          This website is not directed to children under 13, and we do not knowingly collect
          information from them.
        </p>
      </div>

      <div>
        <h2>Security</h2>
        <p>
          We take reasonable steps to protect the information you share with us. However, no
          method of transmission over the internet is completely secure.
        </p>
      </div>

      <div>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. The effective date at the top of this page
          shows when it was last changed.
        </p>
      </div>

      <div>
        <h2>Contact Us</h2>
        <p>
          Questions about this policy? Email <a href={`mailto:${email}`}>{email}</a>, call{" "}
          <a href={`tel:${phone.replace(/[^\d]/g, "")}`}>{phone}</a>, write to us at{" "}
          {address.street}, {address.city}, {address.state} {address.zip}, or use our{" "}
          <Link href="/contact">contact form</Link>.
        </p>
      </div>
    </LegalPage>
  )
}
