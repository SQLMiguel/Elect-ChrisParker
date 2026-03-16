import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { footerNavigation, campaignInfo } from "@/lib/data/navigation"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Campaign Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold">{campaignInfo.name}</h3>
            <p className="mt-1 text-sm text-primary-foreground/80">
              for {campaignInfo.position}
            </p>
            <p className="text-sm text-primary-foreground/80">{campaignInfo.district}</p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary-foreground/70" />
                <div className="text-sm text-primary-foreground/80">
                  <p>{campaignInfo.address.street}</p>
                  <p>{campaignInfo.address.city}, {campaignInfo.address.state} {campaignInfo.address.zip}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary-foreground/70" />
                <a href={`tel:${campaignInfo.phone}`} className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  {campaignInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary-foreground/70" />
                <a href={`mailto:${campaignInfo.email}`} className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
                  {campaignInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Campaign Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Campaign</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.campaign.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Get Involved</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.getInvolved.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Connect</h3>
            <div className="mt-4 flex gap-4">
              <a
                href="https://facebook.com/electchrisparker"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/electchrisparker"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/electchrisparker"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium">Stay Updated</h4>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Get the latest campaign news delivered to your inbox.
              </p>
              <form className="mt-3 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border-0 bg-primary-foreground/10 px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:ring-2 focus:ring-primary-foreground/20"
                />
                <button
                  type="submit"
                  className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-primary-foreground/70">
              {campaignInfo.paidFor}
            </p>
            <div className="flex gap-6">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <p className="text-xs text-primary-foreground/70">
              &copy; {new Date().getFullYear()} Elect Chris Parker. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
