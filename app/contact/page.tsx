import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/features/contact-form"
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react"
import { campaignInfo } from "@/lib/data/navigation"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Chris Parker's campaign. We're here to answer your questions and hear your concerns.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Have a question, concern, or idea? We want to hear from you. Reach out 
              to the campaign and a member of our team will get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Campaign HQ */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">Campaign Headquarters</h3>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {campaignInfo.address.street}<br />
                        {campaignInfo.address.city}, {campaignInfo.address.state} {campaignInfo.address.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a 
                        href={`tel:${campaignInfo.phone}`}
                        className="mt-1 text-sm text-primary hover:underline"
                      >
                        {campaignInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a 
                        href={`mailto:${campaignInfo.email}`}
                        className="mt-1 text-sm text-primary hover:underline"
                      >
                        {campaignInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Office Hours</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">Connect on Social Media</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Follow the campaign for the latest updates and behind-the-scenes content.
                </p>
                
                <div className="mt-6 flex gap-4">
                  <a
                    href="https://facebook.com/electchrisparker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="https://twitter.com/electchrisparker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="https://instagram.com/electchrisparker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Want to volunteer?</span>
                    <Button asChild variant="link" size="sm" className="h-auto p-0">
                      <Link href="/get-involved">Sign Up</Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Ready to donate?</span>
                    <Button asChild variant="link" size="sm" className="h-auto p-0">
                      <a href="https://secure.anedot.com/committee-to-elect-chris-parker/donate" target="_blank" rel="noopener noreferrer">Contribute</a>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Media inquiries?</span>
                    <Button asChild variant="link" size="sm" className="h-auto p-0">
                      <a href={`mailto:press@electchrisparker.org`}>Email Press</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
          <div className="aspect-[21/9] rounded-xl bg-muted overflow-hidden">
            <div className="h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="text-center">
                <MapPin className="mx-auto h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-muted-foreground">Map placeholder</p>
                <p className="text-sm text-muted-foreground">
                  Campaign HQ: {campaignInfo.address.city}, {campaignInfo.address.state}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Chris wants to hear from every corner of District B. Whether you have a 
            question, concern, or just want to say hello, don&apos;t hesitate to reach out.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/events">Attend an Event</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/about">Learn About Chris</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
