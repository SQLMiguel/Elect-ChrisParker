"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { CheckCircle, AlertCircle } from "lucide-react"
import { submitVolunteer } from "@/lib/actions/volunteers"
import {
  formatPhoneNumber,
  isValidPhone,
  isValidEmail,
  isValidZip,
  formatZipCode,
  phoneErrorMessage,
  emailErrorMessage,
  zipErrorMessage,
} from "@/lib/validation"

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
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'NC',
    zip: '',
    comments: '',
  })

  const handleBlur = useCallback((field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }, [])

  const handlePhoneChange = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, phone: formatPhoneNumber(value) }))
  }, [])

  const handleZipChange = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, zip: formatZipCode(value) }))
  }, [])

  // Validation state
  const phoneError = touched.phone ? phoneErrorMessage(formData.phone) : null
  const emailError = touched.email ? emailErrorMessage(formData.email) : null
  const zipError = touched.zip ? zipErrorMessage(formData.zip) : null

  const isFormValid =
    formData.firstName.trim() !== '' &&
    formData.lastName.trim() !== '' &&
    formData.email.trim() !== '' &&
    isValidEmail(formData.email) &&
    isValidPhone(formData.phone) &&
    isValidZip(formData.zip)

  const handleOptionToggle = (optionId: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const result = await submitVolunteer({
        ...formData,
        volunteerOptions: selectedOptions,
      })

      if (result.success) {
        setSubmitted(true)
        setFormData({
          firstName: '', lastName: '', email: '', phone: '',
          address: '', city: '', state: 'NC', zip: '', comments: '',
        })
        setSelectedOptions([])
      } else {
        setError(result.error || 'Failed to submit. Please try again.')
      }
    } catch {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
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

      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 flex items-start gap-2">
          <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <div className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input id="firstName" name="firstName" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} disabled={isLoading} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input id="lastName" name="lastName" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} disabled={isLoading} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            onBlur={() => handleBlur('email')}
            disabled={isLoading}
            className={emailError ? 'border-red-500 focus:ring-red-500' : ''}
          />
          {emailError && <p className="text-xs text-red-600">{emailError}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            onBlur={() => handleBlur('phone')}
            disabled={isLoading}
            placeholder="(336) 555-1234"
            className={phoneError ? 'border-red-500 focus:ring-red-500' : ''}
          />
          {phoneError && <p className="text-xs text-red-600">{phoneError}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Street Address</Label>
          <Input id="address" name="address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} disabled={isLoading} />
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" name="city" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} disabled={isLoading} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input id="state" name="state" value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} disabled={isLoading} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zip">ZIP Code</Label>
            <Input
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={(e) => handleZipChange(e.target.value)}
              onBlur={() => handleBlur('zip')}
              disabled={isLoading}
              placeholder="27040"
              className={zipError ? 'border-red-500 focus:ring-red-500' : ''}
            />
            {zipError && <p className="text-xs text-red-600">{zipError}</p>}
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
            value={formData.comments}
            onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
            disabled={isLoading}
          />
        </div>
      </div>

      <Button type="submit" className="mt-6 w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isLoading || !isFormValid}>
        {isLoading ? 'Submitting...' : 'Sign Up to Volunteer'}
      </Button>

      <p className="mt-4 text-xs text-muted-foreground text-center">
        By submitting this form, you agree to receive campaign communications. 
        We respect your privacy and will never share your information.
      </p>
    </form>
  )
}
