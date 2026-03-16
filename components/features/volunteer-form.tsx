"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"

const volunteerOptions = [
  { id: "door-knocking", label: "Door Knocking" },
  { id: "phone-banking", label: "Phone Banking" },
  { id: "yard-signs", label: "Host a Yard Sign" },
  { id: "event-help", label: "Help at Events" },
  { id: "social-media", label: "Social Media Outreach" },
  { id: "office-help", label: "Office/Administrative Help" },
  { id: "transportation", label: "Provide Transportation" },
  { id: "host-event", label: "Host a House Party" },
]

export function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleOptionToggle = (optionId: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    )
  }

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
        <h3 className="mt-4 text-xl font-semibold text-foreground">Thank You!</h3>
        <p className="mt-2 text-muted-foreground">
          We have received your volunteer signup. A member of our team will be in 
          touch soon with next steps.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => setSubmitted(false)}
        >
          Sign Up Another Person
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground">Volunteer Sign-Up</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Fill out the form below and we will be in touch with opportunities to help.
      </p>

      <div className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input id="firstName" name="firstName" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input id="lastName" name="lastName" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" name="email" type="email" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Street Address</Label>
          <Input id="address" name="address" />
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" name="city" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input id="state" name="state" defaultValue="NC" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zip">ZIP Code</Label>
            <Input id="zip" name="zip" />
          </div>
        </div>

        <div className="space-y-3">
          <Label>How would you like to help? (Select all that apply)</Label>
          <div className="grid gap-3 sm:grid-cols-2">
            {volunteerOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={option.id}
                  checked={selectedOptions.includes(option.id)}
                  onCheckedChange={() => handleOptionToggle(option.id)}
                />
                <label
                  htmlFor={option.id}
                  className="text-sm text-foreground cursor-pointer"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Additional Comments</Label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Tell us about any special skills, availability, or other ways you'd like to help..."
          />
        </div>
      </div>

      <Button type="submit" className="mt-6 w-full bg-accent hover:bg-accent/90 text-accent-foreground">
        Sign Up to Volunteer
      </Button>

      <p className="mt-4 text-xs text-muted-foreground text-center">
        By submitting this form, you agree to receive campaign communications. 
        We respect your privacy and will never share your information.
      </p>
    </form>
  )
}
