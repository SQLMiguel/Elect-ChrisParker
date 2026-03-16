"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"

const subjects = [
  { value: "general", label: "General Inquiry" },
  { value: "volunteer", label: "Volunteering" },
  { value: "donation", label: "Donation Question" },
  { value: "event", label: "Event Request" },
  { value: "media", label: "Media/Press Inquiry" },
  { value: "endorsement", label: "Endorsement" },
  { value: "other", label: "Other" },
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to a server or email service
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-foreground">Message Sent!</h3>
        <p className="mt-2 text-muted-foreground">
          Thank you for reaching out. A member of our team will respond to your 
          message as soon as possible.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground">Send a Message</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Fill out the form below and we will get back to you as soon as possible.
      </p>

      <div className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="contact-firstName">First Name *</Label>
            <Input id="contact-firstName" name="firstName" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-lastName">Last Name *</Label>
            <Input id="contact-lastName" name="lastName" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-email">Email Address *</Label>
          <Input id="contact-email" name="email" type="email" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-phone">Phone Number</Label>
          <Input id="contact-phone" name="phone" type="tel" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-subject">Subject *</Label>
          <select
            id="contact-subject"
            name="subject"
            required
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select a subject</option>
            {subjects.map((subject) => (
              <option key={subject.value} value={subject.value}>
                {subject.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-message">Message *</Label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="How can we help you?"
          />
        </div>
      </div>

      <Button type="submit" className="mt-6 w-full">
        Send Message
      </Button>
    </form>
  )
}
